import { useEffect } from 'react';
import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';
import { Navigation } from './Navigation';

export function CaseStudiesPage() {
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

  const navigateToAbout = () => {
    if ((window as any).navigateToAbout) {
      (window as any).navigateToAbout();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Navigation */}
      <Navigation
        currentPage="case-studies"
        navigateToHome={navigateToHome}
        navigateToServices={navigateToServices}
        navigateToAbout={navigateToAbout}
        navigateToBooking={navigateToBooking}
        useScrollToTop={true}
      />

      {/* Page Content */}
      <div className="pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <FadeInUp>
            <h1 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
              Case Studies
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-center mb-16 text-xl text-white">
              Real results from real businesses.
            </p>
          </FadeInUp>

          <StaggerContainer className="space-y-16">
            {/* Case Study 1 */}
            <StaggerItem>
              <div 
                className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
              >
                <h2 className="text-3xl mb-3 text-[#F2D27C]">
                  High-Ticket Service Businesses
                </h2>
                <p className="text-lg text-[#D4AF37] mb-6">
                  Transportation + eCommerce
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">Market</h3>
                    <p className="text-[#E6E6E6]">
                      Founder-led service and consumer brands.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">The Challenge</h3>
                    <p className="text-[#E6E6E6]">
                      Inconsistent demand and weak conversion paths.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">What Was Built</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      Ryan led paid acquisition execution and conversion optimization, including:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Paid ads execution</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Creative rebuild</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Funnel cleanup</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Launch structuring</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Messaging and booking flow optimization</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">45× increase in views</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Sold-out product drops</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Same-day premium client bookings</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Paid campaigns drove 90% of new customer acquisition</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Case Study 2 */}
            <StaggerItem>
              <div 
                className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
              >
                <h2 className="text-3xl mb-3 text-[#F2D27C]">
                  Regulated Fintech Platform (YELL)
                </h2>
                <p className="text-lg text-[#D4AF37] mb-6">
                  B2C + B2B2C Fintech
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">Market</h3>
                    <p className="text-[#E6E6E6]">
                      B2C + B2B2C fintech.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">The Challenge</h3>
                    <p className="text-[#E6E6E6]">
                      Growth constrained by compliance requirements and fragmented GTM execution.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">What Was Built</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      Ryan led compliant acquisition systems and GTM coordination, including:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Built compliant acquisition workflows</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Partner and influencer GTM systems</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Funnel architecture</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Campaign tracking infrastructure</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>GTM coordination across marketing, product, and compliance</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Zero to 8,000 customers in six months</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">10× increase in installs</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">3× MoM acquisition growth</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Improved partner velocity inside regulated environments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Case Study 3 - Deidre's Fintech Category Disruptor */}
            <StaggerItem>
              <div 
                className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
              >
                <h2 className="text-3xl mb-3 text-[#F2D27C]">
                  Fintech Category Disruptor (Stealth / Regulated Startup)
                </h2>
                <p className="text-lg text-[#D4AF37] mb-6">
                  Senior Marketing & Revenue Leader — Launch + Early Scale
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">Market</h3>
                    <p className="text-[#E6E6E6]">
                      Regulated Fintech — B2C + B2B2C | Stage: Zero → Market Entry
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">The Challenge</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      A privately held fintech startup launching into a regulated market needed:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>A complete go-to-market foundation</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Clear ICP definition across B2C + B2B2C</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Marketing systems that could operate inside compliance constraints</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Early traction without breaking unit economics</span>
                      </li>
                    </ul>
                    <p className="text-[#E6E6E6] mt-3">
                      There was no existing GTM engine, no proven acquisition channels, and no operational clarity across product, banking partners, and compliance.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">What Was Built</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      Deidre led end-to-end GTM design and early revenue operations, including:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Built foundational ICP and customer segmentation frameworks</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Designed acquisition funnels aligned to regulatory requirements</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Partnered directly with product + banking + compliance teams to unlock marketing velocity</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Implemented LLM-driven frameworks for ICP development, funnel diagnostics, compliance risk assessment, and churn forecasting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Zero to 8,000 customers in 6 months</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Consistent quarter-over-quarter growth post-launch</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Scalable demand systems for B2C and B2B2C channels</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Repeatable GTM foundation for continued expansion</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>

            {/* Case Study 4 - Deidre's Payability */}
            <StaggerItem>
              <div 
                className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
              >
                <h2 className="text-3xl mb-3 text-[#F2D27C]">
                  Payability — B2B2C Fintech
                </h2>
                <p className="text-lg text-[#D4AF37] mb-6">
                  Chief Marketing Officer — Recovery + Scale
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">Market</h3>
                    <p className="text-[#E6E6E6]">
                      Fintech / Embedded Capital for SMB + Mid-Market Ecommerce
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">The Challenge</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      Payability was experiencing:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Negative unit economics</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Inefficient acquisition channels</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Low conversion velocity</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Fragmented revenue operations</span>
                      </li>
                    </ul>
                    <p className="text-[#E6E6E6] mt-3">
                      Growth had stalled, and the business needed structural correction — not surface-level marketing.
                    </p>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-2">What Was Built</h3>
                    <p className="text-[#E6E6E6] mb-3">
                      Deidre owned full go-to-market, pipeline generation, and revenue operations:
                    </p>
                    <ul className="space-y-2">
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Rebuilt acquisition strategy around ACV-based economics</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Tightened ICP discipline and channel mix</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Reconstructed funnel architecture to improve close velocity</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Led and scaled a 13-person marketing + SDR team</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Revitalized partner channels</span>
                      </li>
                      <li className="text-[#E6E6E6] flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>Integrated demand generation with sales execution</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-[#D4AF37]/20 pt-6">
                    <h3 className="text-sm uppercase tracking-wide text-[#D4AF37] mb-3">Results</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">Close rates improved from 50% to 80%+</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">$2M+ in closed-won revenue</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">50% YoY revenue growth</p>
                      </div>
                      <div className="bg-[#0B0B0B] p-4 rounded border border-[#D4AF37]/20">
                        <p className="text-[#F2D27C] font-semibold">110% YoY pipeline growth while reducing CAC by 50%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

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