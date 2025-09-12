import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Calendar, Briefcase, ArrowRight } from "lucide-react";

interface Capability {
  title: string;
  description: string;
  features: string[];
  icon: typeof Palette;
  color: string;
}

interface CapabilitiesSectionProps {
  onGetStartedClick?: (capability: string) => void;
}

export default function CapabilitiesSection({ onGetStartedClick }: CapabilitiesSectionProps) {
  const capabilities: Capability[] = [
    {
      title: "Creative Products",
      description: "Showcase and sell your artistic creations on our vibrant marketplace",
      features: ["Art & Crafts", "Digital Designs", "Handmade Items", "Custom Orders"],
      icon: Palette,
      color: "primary"
    },
    {
      title: "Events & Experiences",
      description: "Host and promote creative events, workshops, and cultural experiences",
      features: ["Workshops", "Art Shows", "Cultural Events", "Ticket Sales"],
      icon: Calendar,
      color: "purple"
    },
    {
      title: "Job Opportunities",
      description: "Connect with creative professionals and discover career opportunities",
      features: ["Freelance Gigs", "Full-time Roles", "Collaborations", "Skill Matching"],
      icon: Briefcase,
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary hover:bg-primary/20';
      case 'purple':
        return 'bg-purple-100 text-purple-700 hover:bg-purple-200';
      case 'orange':
        return 'bg-orange-100 text-orange-700 hover:bg-orange-200';
      default:
        return 'bg-primary/10 text-primary hover:bg-primary/20';
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-sans" data-testid="text-capabilities-headline">
            Three Simple Ways to Thrive
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif px-4" data-testid="text-capabilities-description">
            Whether you create, organize, or host, we have you covered.
          </p>
        </div>

        {/* Capabilities Grid - Minimal Design */}
        <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div 
                key={capability.title}
                className="text-center group"
                data-testid={`section-capability-${index}`}
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3 font-sans" data-testid={`text-capability-title-${index}`}>
                  {capability.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6 font-serif" data-testid={`text-capability-description-${index}`}>
                  {capability.description}
                </p>

                {/* Features List - Clean bullets */}
                <ul className="space-y-2 text-sm text-gray-500 font-serif">
                  {capability.features.map((feature, featureIndex) => (
                    <li 
                      key={feature} 
                      className="flex items-center justify-center gap-2"
                      data-testid={`text-feature-${index}-${featureIndex}`}
                    >
                      <div className="w-1 h-1 bg-black rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}