import { Mail, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 bg-[#141414] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-xl mb-2 text-[#F2D27C]">Hudson & Co Marketing</div>
          <div className="text-sm text-[#E6E6E6] mb-6">Growth & Go-To-Market</div>
          <div className="flex items-center justify-center gap-6">
            <a 
              href="mailto:admin@hudsoncoventures.com" 
              className="text-[#E6E6E6] hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
            >
              <Mail className="size-4" />
              <span className="text-sm">Email</span>
            </a>
            <a 
              href="https://www.instagram.com/hcv_marketing/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E6E6E6] hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
            >
              <Instagram className="size-4" />
              <span className="text-sm">Instagram</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/ryan-hudson-41a756272/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#E6E6E6] hover:text-[#D4AF37] transition-all duration-600 flex items-center gap-2"
            >
              <Linkedin className="size-4" />
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
