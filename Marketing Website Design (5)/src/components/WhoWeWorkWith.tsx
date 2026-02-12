import { Check, X } from 'lucide-react';
import { FadeInUp } from './animations/FadeInUp';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export function WhoWeWorkWith() {
  return (
    <section className="py-24 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInUp>
          <h2 className="text-4xl mb-16 text-center font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Who We Work With
          </h2>
        </FadeInUp>
        
        <StaggerContainer className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Primary Focus */}
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-6 text-[#F2D27C]">Primary Focus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Founder-led businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Already selling something</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">$100K–$5M revenue</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Teams under 30</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Need acquisition + execution</span>
                </li>
              </ul>
            </div>
          </StaggerItem>

          {/* Also a Fit */}
          <StaggerItem>
            <div 
              className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-600"
              style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
            >
              <h3 className="text-2xl mb-6 text-[#F2D27C]">Also a Fit</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">SaaS / fintech with budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Online service businesses</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="size-5 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-[#E6E6E6]">Operators with product-market fit</span>
                </li>
              </ul>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Not a Fit */}
        <div 
          className="bg-[#141414] p-8 rounded-lg border border-[#D4AF37]/20"
          style={{ boxShadow: '0 0 15px rgba(212,175,55,0.1)' }}
        >
          <h3 className="text-xl mb-4 text-[#F2D27C]">Not a fit (for now)</h3>
          <ul className="grid md:grid-cols-2 gap-4 mb-4">
            <li className="flex items-start gap-3">
              <X className="size-4 text-neutral-500 shrink-0 mt-0.5" />
              <span className="text-neutral-400 text-sm">Idea-stage startups</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-4 text-neutral-500 shrink-0 mt-0.5" />
              <span className="text-neutral-400 text-sm">No-budget founders</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-4 text-neutral-500 shrink-0 mt-0.5" />
              <span className="text-neutral-400 text-sm">DIY marketers</span>
            </li>
            <li className="flex items-start gap-3">
              <X className="size-4 text-neutral-500 shrink-0 mt-0.5" />
              <span className="text-neutral-400 text-sm">Personal brands without offers</span>
            </li>
          </ul>
          <p className="text-xs text-neutral-500 mb-6">
            Our execution model works best when there's already something real to grow.
          </p>
          
          {/* CTA Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => {
                if ((window as any).navigateToFlipSide) {
                  (window as any).navigateToFlipSide();
                }
              }}
              className="bg-[#D4AF37] text-[#0B0B0B] px-6 py-2.5 rounded hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] transition-all duration-600 font-semibold"
              style={{ boxShadow: '0 0 10px rgba(212,175,55,0.3)' }}
            >
              You're Building — Start Here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}