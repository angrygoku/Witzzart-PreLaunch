import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import TrustSection from "@/components/TrustSection";
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
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours via email.",
    });
  };

  const handleGetStarted = (capability: string) => {
    // todo: remove mock functionality - integrate with real backend
    console.log('Get started clicked for:', capability);
    
    toast({
      title: "Feature coming soon!",
      description: `${capability} registration will be available at launch.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navigation 
        onWhatsAppClick={handleWhatsAppClick}
        onContactClick={() => console.log('Contact navigation clicked')}
      />

      {/* Hero Section */}
      <HeroSection 
        onWhatsAppClick={handleWhatsAppClick}
        onLearnMoreClick={() => console.log('Learn more clicked')}
      />

      {/* Platform Capabilities */}
      <CapabilitiesSection 
        onGetStartedClick={handleGetStarted}
      />

      {/* Government Trust Section */}
      <TrustSection 
        onLearnMoreClick={() => console.log('Trust learn more clicked')}
      />

      {/* Contact Section */}
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