import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { randomUUID } from "crypto";
import { z } from "zod";

// Define the schema for waitlist signup
const insertWaitlistSignupSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  role: z.string().min(1, "Role is required"),
  organization: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type WaitlistSignup = {
  id: string;
  name: string;
  email: string;
  role: string;
  organization: string | null;
  message: string;
  createdAt: Date;
};

// In-memory storage for demo purposes
// Note: In production, you'd want to use a database or external service
const waitlistSignups: Map<string, WaitlistSignup> = new Map();

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Content-Type": "application/json",
  };

  // Handle preflight requests
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    if (event.httpMethod === "POST") {
      // Create waitlist signup
      if (!event.body) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            success: false,
            message: "Request body is required",
          }),
        };
      }

      const body = JSON.parse(event.body);
      const validatedData = insertWaitlistSignupSchema.parse(body);
      
      const id = randomUUID();
      const signup: WaitlistSignup = {
        ...validatedData,
        id,
        organization: validatedData.organization || null,
        createdAt: new Date(),
      };
      
      waitlistSignups.set(id, signup);
      
      return {
        statusCode: 201,
        headers,
        body: JSON.stringify({
          success: true,
          message: "Successfully joined the waitlist!",
          id: signup.id,
        }),
      };
    }

    if (event.httpMethod === "GET") {
      // Get all waitlist signups
      const signups = Array.from(waitlistSignups.values()).sort(
        (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
      );
      
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          data: signups,
        }),
      };
    }

    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Method not allowed",
      }),
    };
  } catch (error) {
    console.error("Error in waitlist function:", error);
    
    if (error instanceof z.ZodError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: "Invalid form data",
          errors: error.errors,
        }),
      };
    }
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: "Internal server error",
      }),
    };
  }
};

export { handler };