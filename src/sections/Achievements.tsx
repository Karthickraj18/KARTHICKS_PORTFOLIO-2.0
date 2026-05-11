
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../data/content';
import TimelineNode from '../components/TimelineNode';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Achievements() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });
  
  const y = useTransform(smoothProgress, [0, 1], [0, 300]);

  return (
    <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="heading-cinematic text-5xl md:text-7xl mb-8 tracking-tight">
            Engineering <span className="text-emerald text-opacity-80">Journey</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            Milestones, recognitions, and continuous growth in building impactful technology.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border md:-translate-x-1/2" />
          
          <motion.div
            style={{ y }}
            className="absolute left-6 md:left-1/2 top-0 w-1 h-64 bg-gradient-to-b from-transparent via-emerald to-transparent md:-translate-x-1/2 blur-[2px] opacity-70"
          />
          
          <div className="space-y-16 md:space-y-24">
            {ACHIEVEMENTS_DATA.map((achievement, i) => (
              <TimelineNode
                key={i}
                index={i}
                title={achievement.title}
                description={achievement.description}
                isMajor={achievement.isMajor}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
