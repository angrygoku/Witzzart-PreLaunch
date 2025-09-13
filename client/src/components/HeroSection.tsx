import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logoUrl from "@assets/logo.png";

interface HeroSectionProps {
  onJoinWaitlistClick?: () => void;
  onLearnMoreClick?: () => void;
}

export default function HeroSection({ onJoinWaitlistClick, onLearnMoreClick }: HeroSectionProps) {
  const handleJoinWaitlist = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    onJoinWaitlistClick?.();
  };

  const handleLearnMore = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
    onLearnMoreClick?.();
  };

  return (
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight font-sans" data-testid="text-hero-headline">
            Where Creativity
            <span className="block">Meets Opportunity</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-12 font-serif" data-testid="text-hero-subtitle">
            The marketplace connecting India's creative community with endless possibilities.
          </p>

          {/* Value Proposition */}
          <div className="mb-12" data-testid="section-value-proposition">
            <p className="text-sm text-gray-500 mb-6 font-serif">Building the future of creative collaboration in India</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span>Government Backed Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span>Rajasthan & National Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span>Created by Creators, for Creators</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleJoinWaitlist}
              className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium"
              data-testid="button-join-waitlist"
            >
              Join Waitlist
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleLearnMore}
              className="w-full sm:w-auto border-gray-300 text-black hover:bg-gray-50 px-8 py-4 text-lg"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}