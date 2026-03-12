"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-24 relative pointer-events-auto px-6 max-w-6xl mx-auto">
      <motion.div
        className="glass-panel p-8 md:p-12 w-full max-w-2xl ml-auto border-l-4 border-l-[var(--color-warm-accent)]"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center gap-4 mb-8">
            <span className="text-[var(--color-tan)]/60 text-xs font-mono tracking-widest uppercase">
                SCENE 02 — THE RIDER
            </span>
            <div className="h-[1px] flex-grow bg-[var(--color-tan)]/20"></div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About Me
        </h2>
        <p className="text-lg text-[var(--color-tan)]/90 leading-relaxed mb-6">
          I am a 23-year-old developer based in Mathura, India. Fluent in English and Hindi, I specialize in crafting high-performance, visually stunning web applications using Next.js, Python, and scalable architecture paradigms.
        </p>
        <p className="text-lg text-[var(--color-tan)]/90 leading-relaxed mb-10">
          Over the past 3 years, I have successfully executed projects ranging from robust backend systems to interactive frontends like this cinematic experience. I am currently open for freelance opportunities to help bring your high-impact ideas to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '5+', label: 'Projects' },
              { value: '10+', label: 'Certs' },
              { value: '150+', label: 'Commits' },
            ].map((stat) => (
                <div key={stat.label}>
                    <div className="text-3xl font-bold text-[var(--color-warm-accent)] mb-1">
                        {stat.value}
                    </div>
                    <div className="text-xs font-mono text-[var(--color-tan)]/70 uppercase tracking-wider">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
