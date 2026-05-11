
import { motion } from 'framer-motion';
import { ABOUT_DATA } from '../data/content';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="glass-card rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group border border-glass-border/50 shadow-[0_8px_30px_rgb(0,0,0,0.4)]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-cyan/10 transition-colors duration-1000" />
          
          <h2 className="heading-cinematic text-4xl md:text-5xl mb-10 tracking-tight">
            About <span className="text-cyan">Me</span>
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 relative z-10">
            <div className="lg:col-span-7 space-y-6">
              {ABOUT_DATA.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 1, delay: i * 0.1, ease: premiumEasing }}
                  className="text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="lg:col-span-5">
              <h3 className="text-xl md:text-2xl font-clash font-semibold text-white mb-6 border-b border-white/10 pb-4 tracking-wide">
                Core Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {ABOUT_DATA.interests.map((interest, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: i * 0.05, ease: premiumEasing }}
                    className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-sm font-medium text-gray-200 hover:border-cyan/40 hover:bg-cyan/10 hover:text-cyan transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] cursor-default"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
