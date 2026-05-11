
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import WhatIBuild from './sections/WhatIBuild';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Vision from './sections/Vision';
import Contact from './sections/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  const blob1Y = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const blob2Y = useTransform(smoothProgress, [0, 1], ['0%', '-50%']);

  return (
    <div className="min-h-screen bg-graphite text-gray-300 overflow-hidden font-satoshi selection:bg-cyan selection:text-graphite">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-[0.03]" />
        
        <motion.div 
          style={{ y: blob1Y }}
          className="absolute -top-[20%] left-[10%] w-[1000px] h-[1000px] bg-cyan/10 rounded-full blur-[180px] mix-blend-screen opacity-50" 
        />
        <motion.div 
          style={{ y: blob2Y }}
          className="absolute top-[60%] right-[10%] w-[800px] h-[800px] bg-emerald/5 rounded-full blur-[180px] mix-blend-screen opacity-50" 
        />
      </div>

      <Navbar />
      
      <main className="relative z-10 flex flex-col pb-20">
        <Hero />
        <About />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Skills />
        <Achievements />
        <Vision />
        <Contact />
      </main>
    </div>
  );
}

export default App;
