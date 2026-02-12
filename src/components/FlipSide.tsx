import { useState, useEffect } from 'react';

export function FlipSide() {
  const [email, setEmail] = useState('');
  const [building, setBuilding] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store email and "what are you building" response
    console.log('Flip Side submission:', { email, building });
    setSubmitted(true);
  };

  const navigateToHome = () => {
    if ((window as any).navigateToHome) {
      (window as any).navigateToHome();
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B]">
      {/* Back button */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <button
          onClick={navigateToHome}
          className="text-white hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
        >
          ← Back to Home
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl mb-6 font-bold text-[#F2D27C]">
            You're Early — Not Disqualified.
          </h1>
          <p className="text-xl text-white mb-4 leading-relaxed">
            We work with founder-led businesses already generating revenue.
          </p>
          <p className="text-xl text-white mb-12 leading-relaxed">
            If you're under $100K, paid growth usually burns cash.
            <br />
            <strong className="text-[#D4AF37]">This is where you prepare for scale.</strong>
          </p>

          {submitted ? (
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-2 text-[#F2D27C] font-semibold">You're in.</h3>
              <p className="text-white">
                Check your email for the first breakdown.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#F2D27C]">
                Join Margins Over Mindsets
              </h2>
              <p className="text-lg text-white">
                Get frameworks + real GTM breakdowns
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-6 py-4 border border-[#D4AF37]/30 bg-[#141414] text-[#E6E6E6] rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent text-lg placeholder:text-neutral-500"
                />
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-[#0B0B0B] px-8 py-4 rounded-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 text-lg font-semibold"
                  style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
                >
                  👉 Get the playbook
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Supporting Copy */}
      <section className="max-w-4xl mx-auto px-6 py-16 border-t border-[#D4AF37]/20">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-[#F2D27C] mb-6">
            Weekly breakdowns on:
          </h3>
          <ul className="space-y-3 text-lg text-white mb-12">
            <li className="flex items-start">
              <span className="mr-3 text-[#D4AF37]">•</span>
              <span>Why ads fail</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#D4AF37]">•</span>
              <span>How offers actually convert</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#D4AF37]">•</span>
              <span>Real GTM systems</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-[#D4AF37]">•</span>
              <span>Mistakes founders make before scale</span>
            </li>
          </ul>

          {/* Secondary CTA - Social Follow */}
          <div className="text-center mb-12">
            <h4 className="text-lg font-semibold text-[#F2D27C] mb-4">
              Follow the podcast:
            </h4>
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/hcv_marketing/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-[#0B0B0B] transition-all duration-600 font-semibold"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Optional Micro Intake */}
          {!submitted && (
            <div 
              className="bg-[#141414] p-6 rounded-lg border border-[#D4AF37]/20"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <label className="block text-sm font-medium text-[#D4AF37] mb-2">
                What are you building?
              </label>
              <input
                type="text"
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                placeholder="Tell us about your business..."
                className="w-full px-4 py-3 border border-[#D4AF37]/30 bg-[#0B0B0B] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder:text-neutral-500"
              />
              <p className="text-xs text-neutral-500 mt-2">
                Helps us tailor content.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}