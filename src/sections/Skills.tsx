
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/content';
import SkillCard from '../components/SkillCard';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="heading-cinematic text-5xl md:text-7xl mb-8 tracking-tight">
            Technical <span className="text-cyan text-opacity-80">Arsenal</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            A comprehensive overview of my technical capabilities and engineering toolkit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {SKILLS_DATA.map((skillGroup, i) => (
            <SkillCard
              key={i}
              category={skillGroup.category}
              icon={skillGroup.icon}
              skills={skillGroup.skills}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
