import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award, Star } from "lucide-react";
import trustBadges from "@assets/generated_images/Government_trust_badges_0633abc3.png";

interface TrustSectionProps {
  onLearnMoreClick?: () => void;
}

export default function TrustSection({ onLearnMoreClick }: TrustSectionProps) {
  const trustIndicators = [
    {
      title: "Government Backed",
      description: "Official support from Rajasthan State Government",
      icon: Shield,
      stats: "Certified Platform"
    },
    {
      title: "Central Funding",
      description: "Backed by Central Government of India initiatives",
      icon: Award,
      stats: "National Support"
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security and data protection",
      icon: CheckCircle,
      stats: "100% Secure"
    },
    {
      title: "Verified Network",
      description: "All artists and venues undergo verification process",
      icon: Star,
      stats: "Trusted Community"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 bg-green-100 text-green-800 border-green-200 px-4 py-2"
            data-testid="badge-government-backing"
          >
            🏛️ Government Backed
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans" data-testid="text-trust-headline">
            Trusted by Government
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-serif mb-8" data-testid="text-trust-description">
            Official support and funding from Rajasthan State Government and Central Government 
            ensures a secure, reliable platform for the creative community.
          </p>

          {/* Government Trust Badges Visual */}
          <div className="flex justify-center mb-12">
            <img 
              src={trustBadges} 
              alt="Government trust badges and certifications" 
              className="max-w-lg w-full h-auto"
              data-testid="img-trust-badges"
            />
          </div>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card 
                key={indicator.title}
                className="text-center hover-elevate transition-all duration-300 bg-white/70 backdrop-blur-sm border-green-100"
                data-testid={`card-trust-indicator-${index}`}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {/* Stats */}
                  <div className="text-2xl font-bold text-green-700 mb-2 font-sans" data-testid={`text-trust-stats-${index}`}>
                    {indicator.stats}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-foreground mb-2 font-sans" data-testid={`text-trust-title-${index}`}>
                    {indicator.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground font-serif" data-testid={`text-trust-description-${index}`}>
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Trust Information */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-green-100">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 font-sans" data-testid="text-rajasthan-support">
                  Rajasthan State
                </div>
                <div className="text-sm text-muted-foreground font-serif">Government Support</div>
              </div>
              
              <div className="hidden md:block w-1 h-12 bg-green-200" />
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 font-sans" data-testid="text-central-support">
                  Central Govt
                </div>
                <div className="text-sm text-muted-foreground font-serif">Funding & Backing</div>
              </div>
              
              <div className="hidden md:block w-1 h-12 bg-green-200" />
              
              <div className="text-center">
                <div className="text-3xl font-bold text-green-700 font-sans" data-testid="text-security-level">
                  Enterprise
                </div>
                <div className="text-sm text-muted-foreground font-serif">Grade Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}