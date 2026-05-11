
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  category: string;
  icon: LucideIcon;
  skills: string[];
  index: number;
}

const premiumEasing = [0.22, 1, 0.36, 1];

export default function SkillCard({ category, icon: Icon, skills, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1, delay: index * 0.1, ease: premiumEasing }}
      className="glass-card p-10 md:p-12 rounded-[2.5rem] group hover:-translate-y-4 transition-all duration-700 hover:border-cyan/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-[50px] group-hover:bg-cyan/10 transition-colors duration-700" />
      
      <div className="flex items-center gap-6 mb-12 relative z-10">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white/[0.03] border border-glass-border flex items-center justify-center text-cyan group-hover:scale-110 group-hover:bg-cyan/5 group-hover:border-cyan/30 transition-all duration-700 shadow-[0_0_20px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-clash font-semibold text-white tracking-tight">{category}</h3>
      </div>

      <div className="space-y-6 relative z-10">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-4 group/skill">
            <div className="w-2 h-2 rounded-full bg-cyan/30 group-hover/skill:bg-cyan group-hover/skill:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0)] group-hover/skill:shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            <span className="text-xl text-gray-400 font-light group-hover/skill:text-white transition-colors duration-300">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
