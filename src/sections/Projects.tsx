
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: premiumEasing }}
          className="mb-16 md:mb-24 max-w-4xl"
        >
          <h2 className="heading-cinematic text-6xl md:text-8xl mb-8 tracking-tight">
            Featured <span className="text-cyan text-opacity-80">Work</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-500 font-light leading-relaxed">
            A selection of my most impactful projects across AI, Embedded Systems, and Software Engineering.
          </p>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
