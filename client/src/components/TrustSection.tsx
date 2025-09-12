import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, CheckCircle, Award, Star } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Mobile First */}
        <div className="text-center mb-12 md:mb-16">
          <Badge 
            variant="secondary" 
            className="mb-4 bg-green-100 text-green-800 border-green-200 px-3 py-1 md:px-4 md:py-2 text-sm"
            data-testid="badge-government-backing"
          >
            🏛️ Government Backed
          </Badge>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 font-sans" data-testid="text-trust-headline">
            Trusted by Government
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-serif mb-8 px-4" data-testid="text-trust-description">
            Official support and funding from Rajasthan State Government and Central Government 
            ensures a secure, reliable platform for the creative community.
          </p>

          {/* Abstract Trust Visual - Replace heavy image */}
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-400 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators Grid - Mobile First */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 max-w-6xl mx-auto">
          {trustIndicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <Card 
                key={indicator.title}
                className="text-center hover-elevate transition-all duration-300 bg-white/70 backdrop-blur-sm border-green-100"
                data-testid={`card-trust-indicator-${index}`}
              >
                <CardContent className="p-4 md:p-6">
                  {/* Icon - Mobile Optimized */}
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-green-100 text-green-700 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  
                  {/* Stats - Mobile Optimized */}
                  <div className="text-lg md:text-2xl font-bold text-green-700 mb-1 md:mb-2 font-sans" data-testid={`text-trust-stats-${index}`}>
                    {indicator.stats}
                  </div>
                  
                  {/* Title - Mobile Optimized */}
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2 font-sans" data-testid={`text-trust-title-${index}`}>
                    {indicator.title}
                  </h3>
                  
                  {/* Description - Mobile Optimized */}
                  <p className="text-xs md:text-sm text-muted-foreground font-serif" data-testid={`text-trust-description-${index}`}>
                    {indicator.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Trust Information - Mobile First */}
        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 max-w-4xl mx-auto border border-green-100">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-green-700 font-sans" data-testid="text-rajasthan-support">
                  Rajasthan State
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-serif">Government Support</div>
              </div>
              
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-green-700 font-sans" data-testid="text-central-support">
                  Central Govt
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-serif">Funding & Backing</div>
              </div>
              
              <div className="text-center">
                <div className="text-xl md:text-3xl font-bold text-green-700 font-sans" data-testid="text-security-level">
                  Enterprise
                </div>
                <div className="text-xs md:text-sm text-muted-foreground font-serif">Grade Security</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}