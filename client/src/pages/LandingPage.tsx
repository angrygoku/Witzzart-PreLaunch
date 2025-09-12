import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StoriesSection from "@/components/StoriesSection";
import PlatformShowcaseSection from "@/components/PlatformShowcaseSection";
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

  const handleFormSubmit = (data: any) => {
    // todo: remove mock functionality - integrate with real backend
    console.log('Contact form submitted:', data);
    
    // Simulate email sending
    toast({
      title: "Welcome to the waitlist!",
      description: "We'll notify you as soon as we launch.",
    });
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

      {/* Stories Section */}
      <StoriesSection 
        onViewMoreClick={() => console.log('View more stories clicked')}
      />

      {/* Platform Showcase */}
      <PlatformShowcaseSection 
        onLearnMoreClick={() => console.log('Platform learn more clicked')}
      />

      {/* Capabilities - Minimal */}
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