import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export function ServicesPreview() {
  const navigateToServices = () => {
    if ((window as any).navigateToServices) {
      (window as any).navigateToServices();
    }
  };

  const navigateToBooking = () => {
    if ((window as any).navigateToBooking) {
      (window as any).navigateToBooking();
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeInUp>
          <h2 className="text-4xl mb-4 font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Services
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="mb-12 max-w-2xl mx-auto text-white">
            Execution → Systems → Strategy
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600 text-left"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C]">Paid Ads & Demand Generation</h3>
              <p className="text-sm text-white mb-4">Predictable acquisition without wasted spend.</p>
              <p className="text-[#E6E6E6] mb-6">
                Led by Ryan Hudson. We design and run acquisition systems that turn demand into booked revenue — with clean funnels, real signals, and performance you can actually scale.
              </p>
              <button 
                onClick={navigateToServices}
                className="text-sm bg-[#D4AF37] text-[#0B0B0B] px-4 py-2 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold"
                style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
              >
                Learn how demand is engineered →
              </button>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600 text-left"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C]">Growth Partner</h3>
              <p className="text-sm text-white mb-4">Where execution becomes a system.</p>
              <p className="text-[#E6E6E6] mb-6">
                For teams already running ads or content but lacking structure. We turn scattered efforts into repeatable acquisition pipelines you can rely on month after month.
              </p>
              <button 
                onClick={navigateToServices}
                className="text-sm bg-[#D4AF37] text-[#0B0B0B] px-4 py-2 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold"
                style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
              >
                See how the system works →
              </button>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600 text-left"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C]">C-Level GTM Strategy</h3>
              <p className="text-sm text-white mb-4">Clarity before scale.</p>
              <p className="text-[#E6E6E6] mb-6">
                Led by Deidre Hudson. Built for founders and leadership teams who need to fix positioning, sequencing, and go-to-market decisions before pouring more fuel on the fire.
              </p>
              <button 
                onClick={navigateToBooking}
                className="text-sm bg-[#D4AF37] text-[#0B0B0B] px-4 py-2 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold inline-flex items-center gap-1"
                style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
              >
                Get a Free Diagnostic <span>→</span>
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}