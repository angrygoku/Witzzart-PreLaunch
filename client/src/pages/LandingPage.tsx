import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

export default function LandingPage() {
  const { toast } = useToast();

  const handleWhatsAppClick = () => {
    toast({
      title: "Redirecting to WhatsApp",
      description: "Opening WhatsApp to connect with our team.",
    });
  };

  const handleFormSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Welcome to the waitlist!",
          description: "We'll notify you as soon as we launch.",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Network error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
    }
  };

  const handleGetStarted = (capability: string) => {
    // todo: remove mock functionality - integrate with real backend
    console.log('Get started clicked for:', capability);
    
    toast({
      title: "Feature coming soon!",
      description: `${capability} will be available at launch.`,
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation 
        onContactClick={() => console.log('Contact navigation clicked')}
      />

      {/* Hero Section */}
      <HeroSection 
        onJoinWaitlistClick={() => console.log('Join waitlist clicked')}
        onLearnMoreClick={() => console.log('Learn more clicked')}
      />

      {/* Value Proposition */}
      <ValuePropositionSection 
        onLearnMoreClick={() => console.log('Value proposition learn more clicked')}
      />

      {/* Capabilities */}
      <CapabilitiesSection 
        onGetStartedClick={handleGetStarted}
      />

      {/* Contact Section with WhatsApp/Email */}
      <ContactSection 
        onFormSubmit={handleFormSubmit}
        onWhatsAppClick={handleWhatsAppClick}
      />

      {/* Footer */}
      <Footer 
        onWhatsAppClick={handleWhatsAppClick}
      />
    </div>
  );
}