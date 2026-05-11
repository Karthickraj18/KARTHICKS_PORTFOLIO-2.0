import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';
import { HERO_DATA } from '../data/content';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % HERO_DATA.subtitles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: premiumEasing }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 md:pt-32 pb-16 overflow-hidden">
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col items-center text-center"
      >
        
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan via-white to-emerald rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-1000" />
          <div className="relative flex items-center gap-3 px-8 py-3 bg-navy/40 border border-glass-border rounded-full backdrop-blur-md">
            <span className="text-cyan text-sm md:text-base font-semibold tracking-[0.15em] uppercase">
              {HERO_DATA.badge}
            </span>
          </div>
        </motion.div>

        {/* Cinematic Name Reveal */}
        <motion.h1 variants={itemVariants} className="heading-cinematic text-7xl md:text-[8rem] lg:text-[10rem] mb-6 tracking-tight">
          {HERO_DATA.name.split(' ').map((word, i) => (
            <span key={i} className="inline-block mr-4 md:mr-8 last:mr-0 text-white drop-shadow-2xl">
              {word}
            </span>
          ))}
        </motion.h1>

        {/* Subtitles Rotating */}
        <motion.div variants={itemVariants} className="h-12 md:h-16 mb-12 overflow-hidden relative w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentSubtitle}
              initial={{ y: 50, opacity: 0, filter: 'blur(10px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -50, opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: premiumEasing }}
              className="text-2xl md:text-4xl text-gray-400 font-clash font-medium tracking-wide absolute"
            >
              {HERO_DATA.subtitles[currentSubtitle]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Intro */}
        <motion.p variants={itemVariants} className="text-xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-light">
          {HERO_DATA.intro}
        </motion.p>
        
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
          {HERO_DATA.supporting}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 md:gap-8">
          <a href="#projects" className="group relative px-10 py-5 bg-white text-graphite font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-[1.02] flex items-center justify-center gap-3">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan to-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
            Explore My Work
            <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
          </a>
          <a href="#contact" className="group px-10 py-5 glass border border-glass-border text-white font-bold text-lg rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-500 flex items-center justify-center gap-3">
            Contact Me
            <Mail size={20} className="group-hover:scale-110 transition-transform duration-500" />
          </a>
        </motion.div>

      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-gray-600"
      >
        <span className="text-xs uppercase tracking-[0.4em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </section>
  );
}
