import { RavenLogo } from './RavenLogo';
import crestLogo from 'figma:asset/57786d8a069e5cde2780a5681a6fbac82629a8b5.png';
import { FadeInUp } from './animations/FadeInUp';
import { Navigation } from './Navigation';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToBooking = () => {
    // Track CTA click in analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'cta_click', {
        event_category: 'Engagement',
        event_label: 'Hero CTA - Book a Call',
        page_location: 'Homepage Hero'
      });
    }
    
    if ((window as any).navigateToBooking) {
      (window as any).navigateToBooking();
    }
  };

  const navigateToServices = () => {
    if ((window as any).navigateToServices) {
      (window as any).navigateToServices();
    }
  };

  const navigateToCaseStudies = () => {
    if ((window as any).navigateToCaseStudies) {
      (window as any).navigateToCaseStudies();
    }
  };

  const navigateToAbout = () => {
    if ((window as any).navigateToAbout) {
      (window as any).navigateToAbout();
    }
  };

  return (
    <header className="relative bg-[#0B0B0B]">
      {/* Navigation */}
      <Navigation
        currentPage="home"
        navigateToServices={navigateToServices}
        navigateToCaseStudies={navigateToCaseStudies}
        navigateToAbout={navigateToAbout}
        navigateToBooking={navigateToBooking}
        useScrollToTop={true}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hero Text */}
          <div>
            <h1 className="text-6xl mb-6 font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
              Growth for Founder-Led Businesses
            </h1>
            <p className="text-xl mb-12 leading-relaxed text-white">
              Senior-level execution first. C-level GTM strategy second.
            </p>
            <div className="flex flex-col gap-4">
              <button 
                onClick={navigateToBooking}
                className="bg-[#D4AF37] text-[#0B0B0B] px-8 py-4 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 inline-flex items-center justify-center w-fit font-semibold"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
              >
                Book a Call
              </button>
              <p className="text-sm text-white">
                Revolutionizing customer acquisition for businesses already generating revenue.
              </p>
            </div>
          </div>
          
          {/* Right: Crest Logo */}
          <div className="flex justify-center items-center">
            <FadeInUp>
              <img 
                src={crestLogo} 
                alt="Hudson & Co Marketing Crest" 
                className="w-[500px] h-auto"
              />
            </FadeInUp>
          </div>
        </div>
      </div>
    </header>
  );
}