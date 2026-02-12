export function About() {
  return (
    <section id="about" className="py-24 bg-[#0B0B0B]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-[#0B0B0B] via-[#1A1A1A] to-[#F2D27C] bg-clip-text text-transparent">
          Two Operators. One Growth System.
        </h2>
        <p className="text-xl text-center mb-20 text-[#D4AF37]">
          Execution + Strategy under one roof.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Ry Hudson */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-3xl mb-2 text-[#F2D27C]">
              Ry Hudson
            </h3>
            <div className="text-sm text-[#D4AF37] mb-6 font-semibold">Growth Execution & RevOps</div>
            <div className="space-y-4 text-[#E6E6E6] leading-relaxed">
              <p>
                Ry leads Hudson & Co's execution layer — paid acquisition, demand systems, and revenue operations.
              </p>
              <p>
                He's driven growth across service businesses and fintech platforms, managing six-figure ad accounts and building conversion-first funnels that turn traffic into booked business.
              </p>
              <p>
                His work includes scaling online platforms to 10× installs in under 90 days, driving 3× MoM customer acquisition, and helping service businesses secure premium clients through paid ads and messaging optimization.
              </p>
              <p className="font-semibold text-[#F2D27C]">
                Ry focuses on building acquisition systems that produce measurable outcomes — not vanity metrics.
              </p>
            </div>
          </div>

          {/* Deidre Hudson */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <h3 className="text-3xl mb-2 text-[#F2D27C]">
              Deidre Hudson
            </h3>
            <div className="text-sm text-[#D4AF37] mb-6 font-semibold">C-Level GTM Strategy</div>
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

        <div className="text-center space-y-3">
          <p className="text-lg text-[#D4AF37] font-semibold">
            Execution first.
          </p>
          <p className="text-lg text-[#E6E6E6]">
            Strategy when growth creates complexity.
          </p>
        </div>
      </div>
    </section>
  );
}