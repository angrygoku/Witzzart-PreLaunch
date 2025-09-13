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
    <section className="min-h-screen bg-white dark:bg-gray-900 flex items-center py-20 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.8, 
              type: "spring",
              stiffness: 100
            }}
            className="mb-8 flex justify-center"
          >
            <img src={logoUrl} alt="Witzzart" className="h-20 md:h-24 w-auto" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-6 leading-tight font-sans" 
            data-testid="text-hero-headline"
          >
            Where Creativity
            <span className="block">Meets Opportunity</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 font-serif" 
            data-testid="text-hero-subtitle"
          >
            The marketplace connecting India's creative community with endless possibilities.
          </motion.p>

          {/* Value Proposition */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-12" 
            data-testid="section-value-proposition"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-serif">Building the future of creative collaboration in India</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                <span>Government Backed Platform</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                <span>Rajasthan & National Support</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                <span>Created by Creators, for Creators</span>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              onClick={handleJoinWaitlist}
              className="w-full sm:w-auto bg-black dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 text-white px-8 py-4 text-lg font-medium transition-all hover:scale-105 active:scale-95"
              data-testid="button-join-waitlist"
            >
              Join Waitlist
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleLearnMore}
              className="w-full sm:w-auto border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-4 text-lg transition-all hover:scale-105 active:scale-95"
              data-testid="button-learn-more"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}