import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onWhatsAppClick?: () => void;
  onContactClick?: () => void;
}

export default function Navigation({ onWhatsAppClick, onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    window.open('https://wa.me/919675624255', '_blank');
    onWhatsAppClick?.();
  };

  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    onContactClick?.();
  };

  const handleCapabilitiesClick = () => {
    document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo - Mobile Optimized */}
          <button 
            onClick={handleScrollToTop}
            className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors font-sans"
            data-testid="button-logo"
          >
            Witzzart
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={handleCapabilitiesClick}
              className="text-foreground hover:text-primary transition-colors font-medium font-serif"
              data-testid="button-nav-capabilities"
            >
              Platform
            </button>
            
            <button 
              onClick={handleContactClick}
              className="text-foreground hover:text-primary transition-colors font-medium font-serif"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
            
            <Button 
              onClick={handleWhatsApp}
              className="bg-green-600 hover:bg-green-700 text-white"
              data-testid="button-nav-whatsapp"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white" data-testid="menu-mobile-navigation">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={handleCapabilitiesClick}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium font-serif"
                data-testid="button-mobile-capabilities"
              >
                Platform Capabilities
              </button>
              
              <button 
                onClick={handleContactClick}
                className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors font-medium font-serif"
                data-testid="button-mobile-contact"
              >
                Contact Us
              </button>
              
              <div className="px-4">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  data-testid="button-mobile-whatsapp"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Connect on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}