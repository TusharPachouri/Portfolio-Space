"use client";

import { motion } from "framer-motion";
import { Mail, Github, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col items-center justify-center relative pointer-events-auto px-6 max-w-4xl mx-auto text-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel p-10 md:p-16 w-full"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Connect?
        </h2>
        <p className="text-lg text-[var(--color-tan)]/90 max-w-xl mx-auto mb-10">
          Whether you have a project in mind, want to discuss web performance, or just want to say hi, my inbox is always open. Let's build something extraordinary together.
        </p>

        <a 
          href="mailto:tusharpachouri001@gmail.com"
          className="inline-flex items-center gap-2 bg-[var(--color-warm-accent)] hover:bg-[var(--color-goldenrod)] text-[#0a0908] px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 mb-14 shadow-[0_0_20px_rgba(176,141,87,0.4)] hover:shadow-[0_0_30px_rgba(218,165,32,0.6)]"
        >
          <Mail size={20} />
          tusharpachouri001@gmail.com
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 border-t border-[var(--color-tan)]/20 pt-8 w-full md:w-3/4 mx-auto">
          <div className="flex gap-8 mb-4 md:mb-0">
            <a href="https://github.com/TusharPachouri" target="_blank" rel="noopener noreferrer" className="text-[var(--color-tan)] hover:text-white transition-colors" title="GitHub"><Github size={24} /></a>
            <a href="tel:+918218504473" className="text-[var(--color-tan)] hover:text-white transition-colors" title="Phone"><Phone size={24} /></a>
            <a href="#" className="text-[var(--color-tan)] hover:text-white transition-colors" title="Location"><MapPin size={24} /></a>
          </div>
          
          <div className="md:ml-auto text-left text-[var(--color-tan)]/70 text-sm font-mono leading-relaxed border-l-2 border-[var(--color-warm-accent)]/30 pl-4">
            <div><strong className="text-white">UPI:</strong> tusharpachouri@oksbi</div>
            <div><strong className="text-white">PayPal:</strong> @tusharpachouri</div>
            <div><strong className="text-white">LOC:</strong> Mathura, UP, India</div>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-8 text-[var(--color-tan)]/40 text-xs font-mono tracking-widest uppercase">
        © {new Date().getFullYear()} TUSHAR PACHOURI · TRAIL INITIATED.
      </div>
    </section>
  );
}
