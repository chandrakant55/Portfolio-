import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="text-[10px] uppercase tracking-[0.4em] text-brand mb-4 font-bold">Journal</div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic">Expertise <span className="text-white/20">&</span> Insights</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl mb-6 aspect-video relative">
                <img 
                  src={post.imageUrl} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-brand font-mono text-sm mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
