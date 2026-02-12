import { FadeInUp } from './animations/FadeInUp';

export function FinalCTA() {
  const navigateToBooking = () => {
    if ((window as any).navigateToBooking) {
      (window as any).navigateToBooking();
    }
  };

  return (
    <section id="final-cta" className="py-32 bg-[#0B0B0B]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeInUp>
          <h2 className="text-5xl mb-12 font-bold bg-gradient-to-r from-white to-[#D4AF37] bg-clip-text text-transparent">
            Ready to grow?
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.15}>
          <button 
            onClick={navigateToBooking} 
            className="bg-[#D4AF37] text-[#0B0B0B] px-10 py-4 rounded hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-600 text-lg font-semibold"
            style={{ boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
          >
            Book a Call
          </button>
        </FadeInUp>
      </div>
    </section>
  );
}