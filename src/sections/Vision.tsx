
import { motion } from 'framer-motion';
import { VISION_DATA } from '../data/content';
import { Quote } from 'lucide-react';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Vision() {
  return (
    <section id="vision" className="py-24 md:py-32 relative flex items-center justify-center min-h-[60vh] overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-cyan/5 rounded-full blur-[150px] animate-pulse-slow" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="mb-12 inline-block text-cyan"
        >
          <Quote size={80} strokeWidth={1} className="opacity-40" />
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, delay: 0.2, ease: premiumEasing }}
          className="heading-cinematic text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tight leading-tight"
        >
          {VISION_DATA.heading}
        </motion.h2>

        <div className="space-y-10 max-w-4xl mx-auto">
          {VISION_DATA.content.map((paragraph, i) => (
            <motion.p
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.2, delay: 0.4 + i * 0.1, ease: premiumEasing }}
              className="text-2xl md:text-4xl text-gray-400 leading-relaxed font-light"
            >
              "{paragraph}"
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
