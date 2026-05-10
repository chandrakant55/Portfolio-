import { motion } from 'motion/react';
import { ArrowRight, Globe, Zap, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-10">
        <div className="md:w-7/12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] uppercase tracking-[0.4em] text-brand mb-6 font-bold">
              Digital Experience Designer
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white mb-8">
              CREATIVE<br />WEBSITE<br />
              <span className="italic font-serif font-light text-white/40 lowercase">Design</span>
            </h1>
            <p className="max-w-md text-sm text-gray-400 leading-relaxed mb-10">
              Elevating brands through precision-engineered digital interfaces. 
              CK_webby delivers high-performance, conversion-focused websites 
              that blend artistic vision with technical SEO optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#contact" 
                className="btn-primary w-full sm:w-auto text-center"
              >
                Start a Project
              </a>
              <a 
                href="#portfolio" 
                className="btn-secondary w-full sm:w-auto text-center"
              >
                View Work
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-5/12 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bento-card flex-1 flex flex-col justify-center relative min-h-[300px]"
          >
            <div className="absolute top-6 right-8 text-6xl font-serif italic text-white/5">"</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Client Feedback</div>
            <p className="text-xl font-serif italic leading-snug text-white mb-6">
              "CK_webby transformed our digital presence. Our conversion rate increased by 140% within the first month. Pure genius design."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-xs">JD</div>
              <div>
                <div className="text-xs font-bold tracking-wider text-white">James Donovan</div>
                <div className="text-[10px] text-gray-500 uppercase font-mono">CEO, TechFlow</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
