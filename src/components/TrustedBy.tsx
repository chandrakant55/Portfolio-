import { motion } from 'motion/react';

const clients = [
  { name: 'TechFlow', industry: 'SaaS' },
  { name: 'Luminex', industry: 'Architecture' },
  { name: 'EcoPulse', industry: 'Energy' },
  { name: 'Aether', industry: 'Design' },
  { name: 'Zenith', industry: 'Finance' },
  { name: 'Novus', industry: 'Tech' },
];

export default function TrustedBy() {
  return (
    <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-brand mb-4 font-bold">Partnerships</div>
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">
              Trusted <span className="text-white/20">By</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xs font-mono uppercase tracking-widest max-w-[200px] text-right">
            Collaborating with industry leaders worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 border border-white/5">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-bg py-12 flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default"
            >
              <span className="text-lg font-black tracking-tighter text-white/30 group-hover:text-brand transition-colors uppercase italic">
                {client.name}
              </span>
              <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-gray-700 mt-2 block opacity-0 group-hover:opacity-100 transition-opacity">
                {client.industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
