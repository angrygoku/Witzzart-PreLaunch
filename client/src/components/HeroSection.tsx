import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import creatorHeadshots from "@assets/generated_images/Professional_creator_headshots_e49ca173.png";

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
    document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
    onLearnMoreClick?.();
  };

  // todo: replace with real creator data when available
  const creators = [
    { name: "Priya", role: "Artist" },
    { name: "Rahul", role: "Organizer" },
    { name: "Anjali", role: "Venue Owner" },
    { name: "Amit", role: "Photographer" },
    { name: "Kavya", role: "Designer" },
    { name: "Rohan", role: "Musician" }
  ];

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

          {/* Creator Faces Strip */}
          <div className="mb-12" data-testid="section-creator-faces">
            <p className="text-sm text-gray-500 mb-4 font-serif">Trusted by creators across India</p>
            <div className="flex justify-center items-center gap-3 mb-4">
              {creators.slice(0, 6).map((creator, index) => (
                <div key={index} className="text-center">
                  <Avatar className="w-12 h-12 md:w-14 md:h-14 border-2 border-gray-100">
                    <AvatarFallback className="bg-gray-100 text-gray-600 text-xs font-medium">
                      {creator.name.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-1">
                    <p className="text-xs font-medium text-gray-700">{creator.name}</p>
                    <p className="text-xs text-gray-500">{creator.role}</p>
                  </div>
                </div>
              ))}
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
              Explore Stories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}