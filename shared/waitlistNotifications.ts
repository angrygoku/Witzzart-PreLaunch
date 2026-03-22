type WaitlistNotificationSignup = {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string | null;
  message: string;
  createdAt: Date | string;
};

type NotificationChannel = "email" | "whatsapp";

type NotificationResult = {
  configured: Record<NotificationChannel, boolean>;
  delivered: Record<NotificationChannel, boolean>;
  errors: string[];
};

type NotificationConfig = {
  resendApiKey: string | null;
  resendFromEmail: string | null;
  resendToEmail: string;
  twilioAccountSid: string | null;
  twilioAuthToken: string | null;
  twilioWhatsAppFrom: string | null;
  twilioWhatsAppTo: string;
};

let missingConfigWarningShown = false;

function readConfig(env: NodeJS.ProcessEnv): NotificationConfig {
  return {
    resendApiKey: env.RESEND_API_KEY || null,
    resendFromEmail: env.RESEND_FROM_EMAIL || null,
    resendToEmail: env.WAITLIST_NOTIFY_EMAIL_TO || "govinddixit@witzzart.com",
    twilioAccountSid: env.TWILIO_ACCOUNT_SID || null,
    twilioAuthToken: env.TWILIO_AUTH_TOKEN || null,
    twilioWhatsAppFrom: env.TWILIO_WHATSAPP_FROM || null,
    twilioWhatsAppTo: env.WAITLIST_NOTIFY_WHATSAPP_TO || "whatsapp:+919675624255",
  };
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatDate(value: Date | string): string {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toISOString();
}

function buildEmailSubject(signup: WaitlistNotificationSignup): string {
  return `New Witzzart waitlist signup: ${signup.email}`;
}

function buildEmailText(signup: WaitlistNotificationSignup): string {
  return [
    "New Witzzart waitlist signup",
    "",
    `Email: ${signup.email}`,
    `Name: ${signup.name}`,
    `Role: ${signup.role}`,
    `Organization: ${signup.organization || "-"}`,
    `Created At: ${formatDate(signup.createdAt)}`,
    "",
    "Message",
    signup.message,
  ].join("\n");
}

function buildEmailHtml(signup: WaitlistNotificationSignup): string {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111;">
      <h2 style="margin:0 0 16px;">New Witzzart waitlist signup</h2>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:4px 12px 4px 0;"><strong>Email</strong></td><td>${escapeHtml(signup.email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;"><strong>Name</strong></td><td>${escapeHtml(signup.name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;"><strong>Role</strong></td><td>${escapeHtml(signup.role)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;"><strong>Organization</strong></td><td>${escapeHtml(signup.organization || "-")}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;"><strong>Created At</strong></td><td>${escapeHtml(formatDate(signup.createdAt))}</td></tr>
      </table>
      <p style="margin:20px 0 8px;"><strong>Message</strong></p>
      <p style="margin:0;white-space:pre-wrap;">${escapeHtml(signup.message)}</p>
    </div>
  `.trim();
}

function buildWhatsAppBody(signup: WaitlistNotificationSignup): string {
  return [
    "New Witzzart waitlist signup",
    `Email: ${signup.email}`,
    `Name: ${signup.name}`,
    `Role: ${signup.role}`,
    `Organization: ${signup.organization || "-"}`,
    `Time: ${formatDate(signup.createdAt)}`,
    `Message: ${signup.message}`,
  ].join("\n");
}

async function sendResendEmail(
  signup: WaitlistNotificationSignup,
  config: NotificationConfig,
): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `waitlist-email-${signup.id}`,
    },
    body: JSON.stringify({
      from: config.resendFromEmail,
      to: [config.resendToEmail],
      subject: buildEmailSubject(signup),
      text: buildEmailText(signup),
      html: buildEmailHtml(signup),
      replyTo: signup.email,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Resend email failed: ${response.status} ${body}`);
  }
}

async function sendTwilioWhatsApp(
  signup: WaitlistNotificationSignup,
  config: NotificationConfig,
): Promise<void> {
  const auth = Buffer.from(
    `${config.twilioAccountSid}:${config.twilioAuthToken}`,
  ).toString("base64");

  const body = new URLSearchParams({
    From: config.twilioWhatsAppFrom || "",
    To: config.twilioWhatsAppTo,
    Body: buildWhatsAppBody(signup),
  });

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${config.twilioAccountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body,
    },
  );

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Twilio WhatsApp failed: ${response.status} ${text}`);
  }
}

export async function notifyWaitlistSignup(
  signup: WaitlistNotificationSignup,
  env: NodeJS.ProcessEnv = process.env,
): Promise<NotificationResult> {
  const config = readConfig(env);
  const emailConfigured = Boolean(config.resendApiKey && config.resendFromEmail);
  const whatsappConfigured = Boolean(
    config.twilioAccountSid &&
      config.twilioAuthToken &&
      config.twilioWhatsAppFrom,
  );

  if (!missingConfigWarningShown && !emailConfigured && !whatsappConfigured) {
    missingConfigWarningShown = true;
    console.warn(
      "Waitlist notifications are not configured. Set Resend and/or Twilio env vars to enable alerts.",
    );
  }

  const result: NotificationResult = {
    configured: {
      email: emailConfigured,
      whatsapp: whatsappConfigured,
    },
    delivered: {
      email: false,
      whatsapp: false,
    },
    errors: [],
  };

  const tasks: Promise<void>[] = [];

  if (emailConfigured) {
    tasks.push(
      sendResendEmail(signup, config)
        .then(() => {
          result.delivered.email = true;
        })
        .catch((error: unknown) => {
          result.errors.push(
            error instanceof Error ? error.message : "Email notification failed",
          );
        }),
    );
  }

  if (whatsappConfigured) {
    tasks.push(
      sendTwilioWhatsApp(signup, config)
        .then(() => {
          result.delivered.whatsapp = true;
        })
        .catch((error: unknown) => {
          result.errors.push(
            error instanceof Error ? error.message : "WhatsApp notification failed",
          );
        }),
    );
  }

  await Promise.all(tasks);

  return result;
}
