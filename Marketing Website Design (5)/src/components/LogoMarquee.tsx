import { Linkedin } from 'lucide-react';

export function LogoMarquee() {
  const navigateToAbout = () => {
    if ((window as any).navigateToAbout) {
      (window as any).navigateToAbout();
    }
  };

  // Company logos (primary row)
  const companies = [
    'YELL',
    'Unfazed LI',
    'Black Truck Business',
    'Dextego',
    'Bloomfire',
    'Payability',
    'RCN',
    'Grubhub',
    'Broadridge',
    'Inside Analysis',
    '1010data',
    'CT Corp',
    'Toys "R" Us',
    'Anti-Defamation League',
    'Roberts Wesleyan University'
  ];

  // Platform/tools logos (secondary row)
  const platforms = [
    'Meta Ads',
    'Google Analytics',
    'HubSpot',
    'PartnerStack',
    'Canva',
    'ChatGPT',
    'Gemini',
    'Claude',
    'Perplexity'
  ];

  return (
    <section className="py-20 bg-[#0B0B0B] overflow-hidden relative">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 50s linear infinite;
        }
      `}</style>

      {/* Two Operators Section */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-5xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
          Two Operators. One Growth System.
        </h2>
        <p className="text-xl text-center text-white mb-12">
          Execution + Strategy under one roof.
        </p>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Ryan Hudson */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-3xl text-[#F2D27C]">
                Ryan Hudson
              </h3>
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
            <p className="text-[#E6E6E6] leading-relaxed">
              Leads execution — paid acquisition, demand systems, and revenue operations.
            </p>
          </div>

          {/* Deidre Hudson */}
          <div 
            className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-3xl text-[#F2D27C]">
                Deidre Hudson
              </h3>
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
            <p className="text-[#E6E6E6] leading-relaxed">
              Leads strategy — go-to-market architecture, positioning, and founder advisory.
            </p>
          </div>
        </div>

        {/* Meet the Team CTA */}
        <div className="text-center">
          <button
            onClick={navigateToAbout}
            className="bg-[#D4AF37] text-[#0B0B0B] px-10 py-3.5 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 text-lg font-semibold"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
          >
            Meet the Team
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl mb-4 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
          Built Inside Real Companies
        </h2>
        <p className="text-center text-white max-w-3xl mx-auto">
          Execution experience across fintech, SaaS, eCommerce, education, and service businesses.
        </p>
      </div>

      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

      {/* Companies row */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {[...companies, ...companies, ...companies].map((company, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-8 mx-4"
            >
              <div className="text-2xl font-bold text-[#D4AF37] opacity-70 hover:opacity-100 transition-opacity duration-600">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platforms row */}
      <div className="relative mb-12">
        <div className="flex animate-scroll-right whitespace-nowrap">
          {[...platforms, ...platforms, ...platforms, ...platforms].map((platform, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center px-6 mx-3"
            >
              <div className="text-lg font-semibold text-[#E6E6E6] opacity-70 hover:opacity-100 transition-opacity duration-600">
                {platform}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Micro copy */}
      <p className="text-center text-sm text-neutral-500 max-w-4xl mx-auto px-6">
        From regulated fintech to service businesses — we've executed inside real operating environments, not just mockups.
      </p>
    </section>
  );
}