import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Rajasthan_creative_community_collage_b3c92678.png";

interface HeroSectionProps {
  onWhatsAppClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function HeroSection({ onWhatsAppClick, onLearnMoreClick }: HeroSectionProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919675624255', '_blank');
    onWhatsAppClick?.();
  };

  const handleLearnMore = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
    onLearnMoreClick?.();
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Background with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-700/80 to-orange-600/70" />
      </div>

      {/* Floating Creative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-pulse" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-bounce" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-pink-400 rounded-full opacity-70 animate-ping" />
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-300 rounded-full opacity-50 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Launching Soon Badge */}
          <Badge 
            variant="secondary" 
            className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 px-6 py-2 text-lg font-medium backdrop-blur-sm"
            data-testid="badge-launching-soon"
          >
            🎨 Launching Soon
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-sans" data-testid="text-hero-headline">
            Empowering India's 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-200">
              Creative Economy
            </span>
          </h1>

          {/* Mission Statement */}
          <p className="text-xl md:text-2xl mb-8 font-serif text-gray-100 max-w-3xl mx-auto leading-relaxed" data-testid="text-mission-statement">
            A government-backed marketplace connecting artists, venues, and event organizers. 
            Supporting local creators and homegrown businesses across Rajasthan and beyond.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-medium"
              data-testid="button-whatsapp-contact"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Connect on WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleLearnMore}
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg backdrop-blur-sm"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Government Backing Indicator */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Backed by Rajasthan State Government</span>
            </div>
            <div className="hidden sm:block w-1 h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Central Government Funding</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}