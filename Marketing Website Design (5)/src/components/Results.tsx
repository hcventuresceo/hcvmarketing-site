import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export function Results() {
  const cases = [
    {
      title: 'High-Ticket Service Business (Transportation/Clothing)',
      subtitle: 'Paid Ads + Creative Rebuild',
      bullets: [
        '45× increase in views',
        '60,063 link clicks on best creative driving 10X increase in installs',
        'Booked premium clients same-day',
      ],
      founder: 'Ryan Hudson',
    },
    {
      title: 'Online Based Business (Fintech / Mobile Marketing)',
      subtitle: 'Paid Acquisition + GTM Execution',
      bullets: [
        '3× MoM customer acquisition in under 90 days',
        '10× increase in app installs',
        'Booked premium partners',
        'Secured high-ticket B2B offers',
      ],
      founder: 'Ryan Hudson',
    },
    {
      title: 'B2B SaaS Platform',
      subtitle: 'C-Level GTM Strategy',
      problem: 'Inconsistent pipeline generation and rising acquisition costs',
      whatWeDid: 'Rebuilt GTM foundation: ICP discipline, funnel architecture, SDR + demand engine alignment',
      outcome: '110% YoY pipeline growth while reducing acquisition costs by 50%',
      founder: 'Deidre Hudson',
    },
    {
      title: 'Fintech Revenue Scaling',
      subtitle: 'Founder Advisory + Scale Strategy',
      problem: 'Product-market fit but stalled growth in regulated fintech environment',
      whatWeDid: 'Owned end-to-end GTM + revenue operations, rebuilt acquisition economics, scaled SDR + partner channels',
      outcome: '$2M+ closed-won revenue, improved close rates from 50% to 80%+, restored scalable growth',
      founder: 'Deidre Hudson',
    },
  ];

  return (
    <section id="case-studies" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-4xl mb-4 text-center bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent font-bold">
            Case Studies
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.1}>
          <p className="text-center mb-16 max-w-2xl mx-auto text-white">
            Real results from execution + strategy.
          </p>
        </FadeInUp>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {cases.map((caseStudy, index) => (
            <StaggerItem key={index}>
              <div 
                className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
                style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
              >
                <div className="text-sm text-[#D4AF37] mb-1">{caseStudy.founder}</div>
                <h3 className="text-xl text-[#F2D27C] mb-2">{caseStudy.title}</h3>
                <div className="text-sm text-white mb-6">{caseStudy.subtitle}</div>
                
                {caseStudy.bullets ? (
                  <ul className="space-y-2 mb-4">
                    {caseStudy.bullets.map((bullet, i) => (
                      <li key={i} className="text-[#E6E6E6] text-sm flex items-start">
                        <span className="mr-2 text-[#D4AF37]">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-[#D4AF37] uppercase tracking-wide mb-1">Problem</div>
                      <div className="text-[#E6E6E6] text-sm">{caseStudy.problem}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#D4AF37] uppercase tracking-wide mb-1">What We Did</div>
                      <div className="text-[#E6E6E6] text-sm">{caseStudy.whatWeDid}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[#D4AF37] uppercase tracking-wide mb-1">Outcome</div>
                      <div className="text-[#F2D27C] text-sm font-semibold">{caseStudy.outcome}</div>
                    </div>
                  </div>
                )}
                
                <button 
                  className="text-[#D4AF37] text-sm mt-4 hover:text-[#F2D27C] transition-all duration-600"
                  onClick={() => {
                    if ((window as any).navigateToCaseStudies) {
                      (window as any).navigateToCaseStudies();
                    }
                  }}
                >
                  → View Case Study
                </button>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}