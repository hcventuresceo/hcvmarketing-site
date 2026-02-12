import { useEffect } from 'react';
import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';
import { Navigation } from './Navigation';

export function ServicesPage() {
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
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation */}
      <Navigation
        currentPage="services"
        navigateToHome={navigateToHome}
        navigateToCaseStudies={navigateToCaseStudies}
        navigateToAbout={navigateToAbout}
        navigateToBooking={navigateToBooking}
        useScrollToTop={true}
      />

      {/* Page Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Services
          </h1>
          <p className="text-center mb-16 text-xl text-white">
            Execution → Systems → Strategy
          </p>

          <div className="space-y-16">
            {/* Service 1: Paid Ads & Demand Generation */}
            <StaggerContainer>
              <StaggerItem>
                <div 
                  className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                  style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
                >
                  <h2 className="text-4xl mb-3 text-[#F2D27C]">
                    Paid Ads & Demand Generation
                  </h2>
                  <p className="text-xl text-[#E6E6E6] mb-8">
                    We build acquisition systems — not campaigns.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Scope</h3>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Creative testing</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Funnel rebuilds</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Audience segmentation</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Scaling winners</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>CPC and lead quality control</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Conversion-first funnels</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Stats</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">45× increase in views</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">40% increase in outbound email open rates</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">10× increase in installs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Service 2: Growth Partner */}
            <StaggerContainer>
              <StaggerItem>
                <div 
                  className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                  style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
                >
                  <h2 className="text-4xl mb-3 text-[#F2D27C]">
                    Growth Partner (Systems + Optimization)
                  </h2>
                  <p className="text-xl text-[#E6E6E6] mb-8">
                    Structured acquisition pipelines.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Scope</h3>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Funnel + conversion architecture (from click → revenue)</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Messaging + positioning frameworks (AISSE + EIB)</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Acquisition system design (paid + organic alignment)</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>GTM sequencing (what to fix first vs later)</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Reporting + signal dashboards (so decisions stop being guesses)</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Optimization loops (creative → funnel → offer → iterate)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Stats</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">4× decrease in CPA</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">48% increase in lead quality</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">3× MoM daily customer acquisition over 90 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Service 3: C-Level GTM Strategy */}
            <StaggerContainer>
              <StaggerItem>
                <div 
                  className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                  style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
                >
                  <h2 className="text-4xl mb-3 text-[#F2D27C]">
                    C-Level GTM Strategy
                  </h2>
                  <p className="text-xl text-[#E6E6E6] mb-8">
                    Strategic architecture for founders ready to scale.
                  </p>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Scope</h3>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>GTM Diagnosis + Sequencing</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>ICP + Revenue Architecture</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Founder & Leadership Advisory</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Revenue Operating Model</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Channel Prioritization</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">Stats</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">$2M+ closed-won revenue influenced</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Close rates improved from 50% to 80%+</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">110% YoY pipeline growth while reducing CAC by 50%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
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