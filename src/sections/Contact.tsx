
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const premiumEasing = [0.22, 1, 0.36, 1];

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-graphite-light/50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: premiumEasing }}
          >
            <h2 className="heading-cinematic text-6xl md:text-8xl mb-8 tracking-tight">
              Let's <span className="text-cyan">Connect</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-500 mb-16 max-w-lg font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <a href="mailto:karthichandran08@gmail.com" className="flex items-center gap-6 text-gray-400 hover:text-cyan transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-[1.5rem] glass border border-glass-border flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan/5 group-hover:border-cyan/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xl font-light">karthichandran08@gmail.com</span>
              </a>
              <a href="https://github.com/Karthickraj18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-gray-400 hover:text-cyan transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-[1.5rem] glass border border-glass-border flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan/5 group-hover:border-cyan/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <Github size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xl font-light">github.com/Karthickraj18</span>
              </a>
              <a href="https://www.linkedin.com/in/karthickraj-r-b888b0290/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-gray-400 hover:text-cyan transition-colors duration-500 group">
                <div className="w-16 h-16 rounded-[1.5rem] glass border border-glass-border flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan/5 group-hover:border-cyan/30 transition-all duration-500 shadow-[0_0_20px_rgba(0,240,255,0)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]">
                  <Linkedin size={24} strokeWidth={1.5} />
                </div>
                <span className="text-xl font-light">linkedin.com/in/karthickraj-r</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, delay: 0.2, ease: premiumEasing }}
            className="glass-card p-10 md:p-14 rounded-[2.5rem] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-3 tracking-widest uppercase">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/[0.02] border border-glass-border rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-cyan/50 focus:bg-cyan/[0.02] transition-all duration-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-3 tracking-widest uppercase">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/[0.02] border border-glass-border rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-cyan/50 focus:bg-cyan/[0.02] transition-all duration-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-3 tracking-widest uppercase">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/[0.02] border border-glass-border rounded-2xl px-6 py-4 text-white font-light focus:outline-none focus:border-cyan/50 focus:bg-cyan/[0.02] transition-all duration-500 resize-none"
                  placeholder="Tell me about your project"
                />
              </div>
              
              <button
                type="button"
                className="w-full py-5 mt-4 bg-white text-graphite rounded-2xl font-bold text-lg hover:scale-[1.02] transition-transform duration-500 flex items-center justify-center gap-3 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan to-emerald opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <span className="relative z-10">Send Message</span>
                <Send size={20} className="relative z-10 group-hover:-translate-y-1 group-hover:translate-x-1.5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
