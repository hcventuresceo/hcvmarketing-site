import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RavenLogo } from './RavenLogo';

interface NavigationProps {
  currentPage?: 'home' | 'services' | 'case-studies' | 'about';
  navigateToHome?: () => void;
  navigateToServices?: () => void;
  navigateToCaseStudies?: () => void;
  navigateToAbout?: () => void;
  navigateToBooking?: () => void;
  useScrollToTop?: boolean;
}

export function Navigation({
  currentPage = 'home',
  navigateToHome,
  navigateToServices,
  navigateToCaseStudies,
  navigateToAbout,
  navigateToBooking,
  useScrollToTop = false,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (callback?: () => void, scrollToTop?: boolean) => {
    if (scrollToTop) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (callback) {
      callback();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-[#0B0B0B]/95 backdrop-blur-sm z-50 border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          {currentPage === 'home' ? (
            <RavenLogo />
          ) : (
            <button
              onClick={() => handleNavigation(navigateToHome)}
              className="text-xl font-bold text-[#F2D27C]"
            >
              Hudson & Co
            </button>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigation(navigateToHome, useScrollToTop && currentPage === 'home')}
              className="text-white hover:text-[#D4AF37] transition-all duration-600"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation(navigateToServices, useScrollToTop && currentPage === 'services')}
              className="text-white hover:text-[#D4AF37] transition-all duration-600"
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation(navigateToCaseStudies, useScrollToTop && currentPage === 'case-studies')}
              className="text-white hover:text-[#D4AF37] transition-all duration-600"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavigation(navigateToAbout, useScrollToTop && currentPage === 'about')}
              className="text-white hover:text-[#D4AF37] transition-all duration-600"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation(navigateToBooking)}
              className="bg-[#D4AF37] text-[#0B0B0B] px-6 py-2.5 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold"
              style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#D4AF37] p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-[73px] right-0 h-[calc(100vh-73px)] w-64 bg-[#141414] z-40 transform transition-transform duration-300 ease-in-out md:hidden border-l border-[#D4AF37]/20 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ boxShadow: '-4px 0 15px rgba(212,175,55,0.1)' }}
      >
        <div className="flex flex-col p-6 gap-6">
          <button
            onClick={() => handleNavigation(navigateToHome, useScrollToTop && currentPage === 'home')}
            className="text-left text-white hover:text-[#D4AF37] transition-all duration-300 text-lg py-2 border-b border-[#D4AF37]/10"
          >
            Home
          </button>
          <button
            onClick={() => handleNavigation(navigateToServices, useScrollToTop && currentPage === 'services')}
            className="text-left text-white hover:text-[#D4AF37] transition-all duration-300 text-lg py-2 border-b border-[#D4AF37]/10"
          >
            Services
          </button>
          <button
            onClick={() => handleNavigation(navigateToCaseStudies, useScrollToTop && currentPage === 'case-studies')}
            className="text-left text-white hover:text-[#D4AF37] transition-all duration-300 text-lg py-2 border-b border-[#D4AF37]/10"
          >
            Case Studies
          </button>
          <button
            onClick={() => handleNavigation(navigateToAbout, useScrollToTop && currentPage === 'about')}
            className="text-left text-white hover:text-[#D4AF37] transition-all duration-300 text-lg py-2 border-b border-[#D4AF37]/10"
          >
            About
          </button>
          <button
            onClick={() => handleNavigation(navigateToBooking)}
            className="bg-[#D4AF37] text-[#0B0B0B] px-6 py-3 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold text-center mt-4"
            style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
          >
            Book Call
          </button>
        </div>
      </div>
    </>
  );
}
