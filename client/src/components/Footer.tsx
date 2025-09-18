import { MessageCircle, Mail, MapPin, Heart } from "lucide-react";
import logoUrl from "@assets/logo.png";

interface FooterProps {
  onWhatsAppClick?: () => void;
}

export default function Footer({ onWhatsAppClick }: FooterProps) {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919675624255', '_blank');
    onWhatsAppClick?.();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <button 
              onClick={handleScrollToTop}
              className="mb-4"
              data-testid="button-footer-logo"
            >
              <img src={logoUrl} alt="Witzzart" className="h-12 w-auto hover:opacity-80 transition-opacity" />
            </button>
            <p className="text-gray-300 mb-6 font-serif max-w-md" data-testid="text-footer-description">
              Empowering India's creative economy through a government-backed marketplace. 
              Connecting artists, venues, and event organizers across the nation.
            </p>
            
            {/* Government Backing */}
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Rajasthan State Government</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>Central Government Backing</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans" data-testid="text-footer-links-title">
              Quick Links
            </h3>
            <ul className="space-y-3 font-serif">
              <li>
                <button 
                  onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="button-footer-capabilities"
                >
                  Platform Capabilities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="button-footer-contact"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <span className="text-gray-500">Privacy Policy (Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500">Terms of Service (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans" data-testid="text-footer-contact-title">
              Get in Touch
            </h3>
            <ul className="space-y-3 font-serif">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-pink-400 flex-shrink-0" />
                <a 
                  href="mailto:govinddixit@witzzart.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  data-testid="link-footer-email"
                >
                  govinddixit@witzzart.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <button 
                  onClick={handleWhatsApp}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  data-testid="button-footer-whatsapp"
                >
                  +91 96756 24255
                </button>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm" data-testid="text-footer-location">
                  Rajasthan, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400 font-serif">
              <span>© {currentYear}</span>
              <img src={logoUrl} alt="Witzzart" className="h-4 w-auto inline" />
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for India's Creative Community</span>
            </div>
            
            <div className="text-sm text-gray-500 font-serif" data-testid="text-footer-status">
              🚀 Launching Soon - Pre-Registration Open
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}