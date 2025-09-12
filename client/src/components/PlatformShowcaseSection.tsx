import dashboardMockup from "@assets/generated_images/Minimal_platform_dashboard_mockup_5d20a57e.png";
import mobileMockup from "@assets/generated_images/Clean_mobile_app_interface_03dc836a.png";

interface PlatformShowcaseSectionProps {
  onLearnMoreClick?: () => void;
}

export default function PlatformShowcaseSection({ onLearnMoreClick }: PlatformShowcaseSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 font-sans" data-testid="text-platform-headline">
            Built for Creators
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-serif" data-testid="text-platform-description">
            Simple, powerful tools designed with creators in mind.
          </p>
        </div>

        {/* Platform Images */}
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Desktop Platform */}
          <div className="text-center">
            <div className="mb-8">
              <img 
                src={dashboardMockup} 
                alt="Witzzart platform dashboard interface" 
                className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border border-gray-200"
                data-testid="img-desktop-platform"
              />
            </div>
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-3 font-sans" data-testid="text-desktop-platform-title">
                Complete Creative Hub
              </h3>
              <p className="text-gray-600 font-serif" data-testid="text-desktop-platform-description">
                Manage your portfolio, discover opportunities, and connect with the creative community all in one place.
              </p>
            </div>
          </div>

          {/* Mobile Platform */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-black mb-4 font-sans" data-testid="text-mobile-platform-title">
                Create on the Go
              </h3>
              <p className="text-gray-600 mb-6 font-serif leading-relaxed" data-testid="text-mobile-platform-description">
                List your art, book venues, and manage events directly from your phone. 
                The full power of Witzzart, wherever inspiration strikes.
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-serif">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  Portfolio Management
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  Event Creation
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full" />
                  Venue Booking
                </span>
              </div>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <img 
                src={mobileMockup} 
                alt="Witzzart mobile app interface" 
                className="w-64 max-w-sm rounded-2xl shadow-2xl border border-gray-200"
                data-testid="img-mobile-platform"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={onLearnMoreClick}
            className="text-black hover:text-gray-600 font-medium underline underline-offset-4 font-serif text-lg"
            data-testid="button-platform-learn-more"
          >
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
}