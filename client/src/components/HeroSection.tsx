import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

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
      {/* Abstract Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-orange-500">
        {/* Abstract geometric shapes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-1/3 right-1/4 w-24 h-24 md:w-36 md:h-36 bg-orange-300/20 rounded-full blur-xl" />
          <div className="absolute top-1/2 right-1/3 w-16 h-16 md:w-24 md:h-24 bg-purple-300/15 rounded-full blur-lg" />
        </div>
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
            className="mb-4 md:mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 px-4 py-2 md:px-6 md:py-2 text-sm md:text-lg font-medium backdrop-blur-sm"
            data-testid="badge-launching-soon"
          >
            🎨 Launching Soon
          </Badge>

          {/* Main Headline - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight font-sans" data-testid="text-hero-headline">
            Empowering India's 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-200">
              Creative Economy
            </span>
          </h1>

          {/* Mission Statement - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 font-serif text-gray-100 max-w-3xl mx-auto leading-relaxed px-4" data-testid="text-mission-statement">
            A government-backed marketplace connecting artists, venues, and event organizers. 
            Supporting local creators and homegrown businesses across Rajasthan and beyond.
          </p>

          {/* CTA Buttons - Mobile Stack */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center px-4">
            <Button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-medium"
              data-testid="button-whatsapp-contact"
            >
              <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Connect on WhatsApp
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleLearnMore}
              className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg backdrop-blur-sm"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </div>

          {/* Government Backing Indicator - Mobile Optimized */}
          <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-3 text-xs sm:text-sm text-gray-200 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Backed by Rajasthan State Government</span>
            </div>
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