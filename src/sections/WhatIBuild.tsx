
import { motion } from 'framer-motion';
import { WHAT_I_BUILD_DATA } from '../data/content';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function WhatIBuild() {
  return (
    <section id="what-i-build" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="mb-16 md:mb-20"
        >
          <h2 className="heading-cinematic text-5xl md:text-7xl mb-8 tracking-tight">
            What I <span className="text-cyan">Build</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl font-light leading-relaxed">
            Combining software architecture, hardware intelligence, and design to create end-to-end solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {WHAT_I_BUILD_DATA.map((item, i) => {
            const Icon = item.icon;
            // Add a slight stagger to the layout for an asymmetrical feel
            const yOffset = i % 2 !== 0 ? "md:mt-12" : "";
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, delay: i * 0.1, ease: premiumEasing }}
                className={`glass-card p-10 md:p-12 rounded-[2.5rem] group hover:border-cyan/30 hover:-translate-y-4 transition-all duration-700 relative overflow-hidden ${yOffset}`}
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-cyan/5 rounded-full blur-[60px] group-hover:bg-cyan/10 transition-colors duration-700" />
                
                <div className="mb-10 inline-flex p-5 rounded-2xl bg-white/[0.03] border border-glass-border text-cyan group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-3xl font-clash font-semibold text-white mb-6 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-lg text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-700">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
