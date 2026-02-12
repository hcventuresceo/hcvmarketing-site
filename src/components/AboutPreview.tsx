import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export function AboutPreview() {
  const navigateToAbout = () => {
    if ((window as any).navigateToAbout) {
      (window as any).navigateToAbout();
    }
  };

  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeInUp>
          <h2 className="text-4xl mb-4 font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Two Operators. One Growth System.
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="mb-12 max-w-2xl mx-auto text-xl text-white">
            Execution + Strategy under one roof.
          </p>
        </FadeInUp>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C]">Ry Hudson</h3>
              <div className="text-sm text-white mb-4">Growth Execution & RevOps</div>
              <p className="text-[#E6E6E6]">
                Leads execution — paid acquisition, demand systems, and revenue operations.
              </p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C]">Deidre Hudson</h3>
              <div className="text-sm text-white mb-4">C-Level GTM Strategy</div>
              <p className="text-[#E6E6E6]">
                Leads strategy — go-to-market architecture, positioning, and founder advisory.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeInUp delay={0.3}>
          <button
            onClick={navigateToAbout}
            className="bg-[#D4AF37] text-[#0B0B0B] px-8 py-3 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
          >
            Meet the Team
          </button>
        </FadeInUp>
      </div>
    </section>
  );
}