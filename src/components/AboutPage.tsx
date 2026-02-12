import { useEffect } from 'react';
import { FadeInUp } from './animations/FadeInUp';
import { Navigation } from './Navigation';
import { Linkedin } from 'lucide-react';

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigateToHome = () => {
    if ((window as any).navigateToHome) {
      (window as any).navigateToHome();
    }
  };

  const navigateToBooking = () => {
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

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation */}
      <Navigation
        currentPage="about"
        navigateToHome={navigateToHome}
        navigateToServices={navigateToServices}
        navigateToCaseStudies={navigateToCaseStudies}
        navigateToBooking={navigateToBooking}
        useScrollToTop={true}
      />

      {/* Page Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
              Two Operators. One Growth System.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-xl text-center mb-20 text-white">
              Execution + Strategy under one roof.
            </p>
          </FadeInUp>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Ryan Hudson */}
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl text-[#F2D27C]">
                  Ryan Hudson
                </h2>
                <a 
                  href="https://www.linkedin.com/in/ryan-hudson-41a756272/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F2D27C] transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-white mb-6">Senior Growth & RevOps Manager</div>
              <div className="space-y-4 text-[#E6E6E6] leading-relaxed">
                <p>
                  Ryan leads Hudson & Co's execution layer — paid acquisition, demand systems, and revenue operations.
                </p>
                <p>
                  He's driven growth across service businesses and fintech platforms, managing six-figure ad accounts and building conversion-first funnels that turn traffic into booked business.
                </p>
                <p>
                  His work includes scaling online platforms to 10× installs in under 90 days, driving 3× MoM customer acquisition, and helping service businesses secure premium clients through paid ads and messaging optimization.
                </p>
                <p className="font-semibold text-[#F2D27C]">
                  Ryan focuses on building acquisition systems that produce measurable outcomes — not vanity metrics.
                </p>
              </div>
            </div>

            {/* Deidre Hudson */}
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-3xl text-[#F2D27C]">
                  Deidre Hudson
                </h2>
                <a 
                  href="https://www.linkedin.com/in/deidrehudson/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:text-[#F2D27C] transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-white mb-6">2x C-Suite GTM Leader</div>
              <div className="space-y-4 text-[#E6E6E6] leading-relaxed">
                <p>
                  Deidre leads Hudson & Co's senior strategy layer — go-to-market architecture, positioning, and founder advisory.
                </p>
                <p>
                  With decades of experience across SMB, SaaS, and enterprise environments, she's helped organizations clarify their market narrative, structure demand engines, and scale revenue with intention.
                </p>
                <p>
                  Deidre works directly with founders and leadership teams to navigate growth complexity — aligning strategy, operations, and execution so businesses don't outgrow their systems.
                </p>
                <p className="font-semibold text-[#F2D27C]">
                  Deidre's role at Hudson & Co ensures clients gain clarity as they scale — not chaos.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3 mb-16">
            <p className="text-lg text-white">
              Execution first.
            </p>
            <p className="text-lg text-[#E6E6E6]">
              Strategy when growth creates complexity.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={navigateToBooking}
              className="bg-[#D4AF37] text-[#0B0B0B] px-10 py-4 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 text-lg font-semibold"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}