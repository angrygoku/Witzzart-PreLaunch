import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onContactClick?: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <button 
            onClick={handleScrollToTop}
            className="text-xl md:text-2xl font-bold text-black hover:text-gray-600 transition-colors font-sans"
            data-testid="button-logo"
          >
            Witzzart
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-black hover:text-gray-600 transition-colors font-medium font-serif"
              data-testid="button-nav-stories"
            >
              Stories
            </button>
            
            <button 
              onClick={handleCapabilitiesClick}
              className="text-black hover:text-gray-600 transition-colors font-medium font-serif"
              data-testid="button-nav-platform"
            >
              Platform
            </button>
            
            <button 
              onClick={handleContactClick}
              className="text-black hover:text-gray-600 transition-colors font-medium font-serif"
              data-testid="button-nav-contact"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-black hover:text-gray-600 transition-colors"
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white" data-testid="menu-mobile-navigation">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => {
                  document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="text-left px-4 py-2 text-black hover:text-gray-600 transition-colors font-medium font-serif"
                data-testid="button-mobile-stories"
              >
                Stories
              </button>
              
              <button 
                onClick={handleCapabilitiesClick}
                className="text-left px-4 py-2 text-black hover:text-gray-600 transition-colors font-medium font-serif"
                data-testid="button-mobile-platform"
              >
                Platform
              </button>
              
              <button 
                onClick={handleContactClick}
                className="text-left px-4 py-2 text-black hover:text-gray-600 transition-colors font-medium font-serif"
                data-testid="button-mobile-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}