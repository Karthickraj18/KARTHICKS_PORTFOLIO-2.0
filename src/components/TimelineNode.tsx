
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { cn } from '../utils/cn';

interface TimelineNodeProps {
  title: string;
  description: string;
  isMajor?: boolean;
  index: number;
}

const premiumEasing = [0.22, 1, 0.36, 1];

export default function TimelineNode({ title, description, isMajor, index }: TimelineNodeProps) {

  
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: premiumEasing }}
      className="relative pl-16 md:pl-0"
    >
      <div className={cn(
        "md:flex items-center justify-between w-full group",
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      )}>
        <div className="hidden md:block w-5/12" />
        
        {/* The Node dot */}
        <div className={cn(
          "absolute left-6 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full border-4 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isMajor ? "border-gold bg-graphite shadow-[0_0_30px_rgba(255,215,0,0.5)]" : "border-emerald bg-graphite shadow-[0_0_30px_rgba(16,185,129,0.5)]",
          "top-8 md:top-1/2 md:-translate-y-1/2"
        )}>
          {isMajor ? (
            <Trophy size={16} className="text-gold" />
          ) : (
            <div className="w-2.5 h-2.5 rounded-full bg-emerald" />
          )}
        </div>

        {/* Content Card */}
        <div className={cn(
          "w-full md:w-5/12",
          index % 2 === 0 ? "md:text-right md:pr-16" : "md:text-left md:pl-16"
        )}>
          <div className={cn(
            "p-10 md:p-12 rounded-[2.5rem] glass-card transition-all duration-700 hover:-translate-y-4",
            isMajor ? "border-gold/30 hover:border-gold/60 shadow-[0_16px_40px_-10px_rgba(255,215,0,0.15)]" : "hover:border-emerald/40 hover:shadow-[0_16px_40px_-10px_rgba(16,185,129,0.15)]"
          )}>
            <h4 className={cn(
              "text-3xl font-clash font-semibold mb-6 tracking-tight",
              isMajor ? "text-gradient-gold" : "text-white"
            )}>
              {title}
            </h4>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
