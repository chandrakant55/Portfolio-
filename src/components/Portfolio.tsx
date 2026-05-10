import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="text-[10px] uppercase tracking-[0.4em] text-brand mb-4 font-bold">Showcase</div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter italic">Recent <span className="text-white/20">Work</span></h2>
          <div className="w-12 h-0.5 bg-brand mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PORTFOLIO.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl bg-surface aspect-[16/10] border border-white/5 cursor-pointer"
            >
              <motion.img 
                src={item.imageUrl} 
                alt={item.title}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-cover origin-center"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="text-[10px] font-black tracking-[0.3em] text-brand uppercase mb-3 block font-mono">
                      {item.category}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{item.title}</h3>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 bg-brand text-black rounded-full flex items-center justify-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 shadow-xl shadow-brand/20"
                  >
                    <ExternalLink size={24} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
