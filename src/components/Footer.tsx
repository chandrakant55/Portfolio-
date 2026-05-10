import { CONTACT_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand text-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-16">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black opacity-40 tracking-widest mb-2">Direct Inquiries</span>
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl md:text-2xl font-black hover:opacity-70 transition-opacity tracking-tight">
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black opacity-40 tracking-widest mb-2">WhatsApp Support</span>
              <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-black hover:opacity-70 transition-opacity tracking-tight">
                +91 {CONTACT_INFO.phone}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-black opacity-40 tracking-widest mb-2">Connect</span>
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="text-lg font-black underline underline-offset-4 decoration-2"
              >
                @ck_webby
              </a>
            </div>
            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center text-brand">
              <ArrowRight size={24} />
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-black italic tracking-tighter uppercase">
            CK_WEBBY<span className="opacity-40">.</span>
          </div>
          
          <p className="text-[10px] uppercase font-black opacity-50 tracking-[0.2em] text-center">
            © {new Date().getFullYear()} / DIGITAL ARCHITECT / NEW DELHI / INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
