import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <div className="text-[10px] uppercase tracking-[0.4em] text-brand mb-4 font-bold">Solutions</div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 italic tracking-tight">
              Design <span className="text-white/20">X</span> Code
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              I provide end-to-end digital solutions that help you grow your business
              and reach more customers online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = (Icons as any)[service.icon] || Icons.Layout;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bento-card group"
              >
                <div className="w-14 h-14 bg-brand/10 border border-brand/20 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="h-1 w-0 bg-brand group-hover:w-full transition-all duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
