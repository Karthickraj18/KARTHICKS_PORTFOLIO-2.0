import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { EXPERIENCE_DATA } from '../data/content';
import { Cpu, Zap, Settings, Activity } from 'lucide-react';
import { cn } from '../utils/cn';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });
  
  // Height scales from 0 to 100% based on scroll progress
  const height = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  const getStyleData = (style: string) => {
    switch (style) {
      case 'industrial':
        return { icon: Activity, color: 'text-emerald', bg: 'bg-emerald/10', border: 'border-emerald/30', glow: 'shadow-[0_0_40px_rgba(16,185,129,0.15)]', line: 'from-emerald' };
      case 'electrical':
        return { icon: Zap, color: 'text-gold', bg: 'bg-gold/10', border: 'border-gold/30', glow: 'shadow-[0_0_40px_rgba(255,215,0,0.15)]', line: 'from-gold' };
      case 'automation':
        return { icon: Settings, color: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/30', glow: 'shadow-[0_0_40px_rgba(0,240,255,0.15)]', line: 'from-cyan' };
      default:
        return { icon: Cpu, color: 'text-cyan', bg: 'bg-cyan/10', border: 'border-cyan/30', glow: 'shadow-[0_0_40px_rgba(0,240,255,0.15)]', line: 'from-cyan' };
    }
  };

  return (
    <section id="experience" ref={containerRef} className="py-20 md:py-32 relative overflow-hidden bg-graphite">
      {/* Industrial Background Grid */}
      <div className="absolute inset-0 opacity-[0.02] z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-glass-border bg-white/[0.02] backdrop-blur-sm mb-8">
            <Activity size={16} className="text-cyan" />
            <span className="text-sm uppercase tracking-[0.2em] text-gray-300 font-clash font-semibold">Industrial Exposure</span>
          </div>
          <h2 className="heading-cinematic text-6xl md:text-8xl mb-8 tracking-tight">
            Technical <span className="text-cyan text-opacity-80">Experience</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Real-world exposure to heavy electrical systems, industrial power plants, and intelligent automation workflows.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated Central Pipeline */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border md:-translate-x-1/2" />
          <motion.div
            style={{ height }}
            className="absolute left-[23px] md:left-1/2 top-0 w-1 bg-gradient-to-b from-cyan via-emerald to-cyan md:-translate-x-1/2 blur-[1px] opacity-100 shadow-[0_0_20px_rgba(0,240,255,0.8)] z-0 rounded-full origin-top"
          />

          <div className="space-y-16 md:space-y-24">
            {EXPERIENCE_DATA.map((exp, i) => {
              const isEven = i % 2 === 0;
              const style = getStyleData(exp.visualStyle);
              const Icon = style.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 1.2, delay: i * 0.1, ease: premiumEasing }}
                  className={cn(
                    "relative flex flex-col md:flex-row items-start gap-12 md:gap-0",
                    isEven ? "md:flex-row-reverse" : ""
                  )}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-graphite border-[3px] border-cyan z-20 top-10 md:top-1/2 md:-translate-y-1/2 shadow-[0_0_20px_rgba(0,240,255,0.6)]" />
                  
                  {/* Connecting Line (Mobile) */}
                  <div className="absolute left-6 top-10 w-12 h-[2px] bg-glass-border md:hidden" />

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card Content */}
                  <div className={cn(
                    "w-full md:w-1/2 pl-20 md:pl-0",
                    isEven ? "md:pr-24" : "md:pl-24"
                  )}>
                    <div className={cn(
                      "group relative p-10 md:p-14 rounded-[2.5rem] bg-graphite-light/20 backdrop-blur-3xl border border-glass-border overflow-hidden transition-all duration-700 hover:border-cyan/30",
                      style.glow
                    )}>
                      {/* Corner Accents (HUD style) */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-white/10" />
                      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-white/10" />
                      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-white/10" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-white/10" />

                      {/* Animated Grid Overlay on Hover */}
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-grid-flow" />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-8">
                          <span className={cn("text-sm font-semibold tracking-[0.2em] uppercase", style.color)}>
                            {exp.category}
                          </span>
                          <div className={cn("p-3 rounded-2xl", style.bg, style.color)}>
                            <Icon size={24} strokeWidth={1.5} />
                          </div>
                        </div>

                        <h3 className="heading-cinematic text-4xl mb-6 group-hover:text-cyan transition-colors duration-700">
                          {exp.title}
                        </h3>
                        
                        <p className="text-gray-400 text-xl leading-relaxed mb-10 font-light group-hover:text-gray-300 transition-colors duration-700">
                          {exp.description}
                        </p>

                        <div className="space-y-8">
                          <div>
                            <h4 className="text-sm text-gray-500 uppercase tracking-widest mb-6 font-semibold">Key Highlights</h4>
                            <ul className="grid gap-4">
                              {exp.highlights.map((highlight, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-300 text-lg font-light">
                                  <span className={cn("mt-2.5 w-1.5 h-1.5 rounded-full shrink-0", `bg-${style.color.split('-')[1]}`)} />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-8 border-t border-glass-border">
                            <p className="text-base text-gray-400 italic font-light leading-relaxed">
                              <span className={cn("font-semibold mr-2 tracking-widest uppercase not-italic text-sm", style.color)}>Impact:</span>
                              "{exp.impact}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
