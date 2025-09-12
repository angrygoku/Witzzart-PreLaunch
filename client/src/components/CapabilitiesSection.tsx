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
    <section id="capabilities" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile First */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans" data-testid="text-capabilities-headline">
            Platform Capabilities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-serif px-4" data-testid="text-capabilities-description">
            Empowering the creative ecosystem through comprehensive marketplace solutions
          </p>
        </div>

        {/* Capabilities Grid - Mobile First */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card 
                key={capability.title}
                className="group hover-elevate transition-all duration-300 border-card-border"
                data-testid={`card-capability-${index}`}
              >
                <CardHeader className="text-center p-4 md:p-6">
                  {/* Icon - Mobile Optimized */}
                  <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-xl ${getColorClasses(capability.color)} flex items-center justify-center transition-colors`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  
                  <CardTitle className="text-xl md:text-2xl font-bold font-sans" data-testid={`text-capability-title-${index}`}>
                    {capability.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm md:text-base font-serif" data-testid={`text-capability-description-${index}`}>
                    {capability.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-4 md:p-6">
                  {/* Features List - Mobile Optimized */}
                  <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    {capability.features.map((feature, featureIndex) => (
                      <li 
                        key={feature} 
                        className="flex items-center text-xs md:text-sm text-muted-foreground"
                        data-testid={`text-feature-${index}-${featureIndex}`}
                      >
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full mr-2 md:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button - Mobile Optimized */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors text-sm md:text-base py-2 md:py-3"
                    onClick={() => onGetStartedClick?.(capability.title)}
                    data-testid={`button-get-started-${index}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}