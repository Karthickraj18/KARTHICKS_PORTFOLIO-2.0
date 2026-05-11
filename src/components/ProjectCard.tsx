
import { motion } from 'framer-motion';

import { cn } from '../utils/cn';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    description: string;
    features: string[];
    techStack: string[];
    impact: string;
  };
  index: number;
}

const premiumEasing = [0.22, 1, 0.36, 1];

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, ease: premiumEasing }}
      className="group relative"
    >
      <div className={cn(
        "grid md:grid-cols-12 gap-12 md:gap-24 items-center",
        isEven ? "" : "md:flex-row-reverse"
      )}>
        
        {/* Numbering & Info - Left Side */}
        <div className={cn(
          "md:col-span-6 lg:col-span-7",
          isEven ? "md:order-1" : "md:order-2"
        )}>
          <div className="flex items-baseline gap-6 mb-8 overflow-hidden">
            <span className="text-7xl md:text-9xl font-clash font-bold text-white/5 tracking-tighter select-none">
              {(index + 1).toString().padStart(2, '0')}
            </span>
            <div className="h-px bg-glass-border flex-grow" />
            <span className="text-cyan text-sm md:text-base font-semibold tracking-[0.2em] uppercase shrink-0">
              {project.category}
            </span>
          </div>

          <h3 className="heading-cinematic text-4xl md:text-6xl mb-8 group-hover:text-cyan transition-colors duration-700">
            {project.title}
          </h3>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light mb-10">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-white/[0.02] border border-glass-border text-sm text-gray-300 font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Feature List & Impact - Right Side */}
        <div className={cn(
          "md:col-span-6 lg:col-span-5",
          isEven ? "md:order-2" : "md:order-1"
        )}>
          <div className="glass-card p-10 md:p-12 rounded-[2.5rem] group-hover:border-cyan/20 group-hover:-translate-y-2 transition-all duration-700">
            <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-8">
              Key Architecture
            </h4>
            
            <ul className="space-y-4 mb-10">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-300 text-lg font-light">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-glass-border">
              <span className="block text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
                Core Impact
              </span>
              <p className="text-gray-300 italic font-light leading-relaxed">
                "{project.impact}"
              </p>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
