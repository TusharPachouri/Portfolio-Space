'use client';

import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function AboutSection() {
  return (
    <section className="section" id="about" style={{ justifyContent: 'flex-end' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{ maxWidth: '700px', width: '100%' }}
      >
        <div className="glass-card float-2">
          {/* Label */}
          <motion.div variants={itemVariants} className="hud-line" style={{ marginBottom: '1.5rem' }}>
            <span>SECTOR 02 — DEEP SPACE ENTRY</span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={itemVariants} className="section-title">
            <span className="text-gradient-blue">About</span> Me
          </motion.h2>
          <div className="cosmic-divider" />

          {/* Content */}
          <motion.p variants={itemVariants} style={{ color: 'rgba(232,244,253,0.75)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
            I am a 22-year-old developer based in Mathura, India. Fluent in English and Hindi, I specialize in crafting high-performance, visually stunning web applications using Next.js, Python, and scalable architecture paradigms.
          </motion.p>
          <motion.p variants={itemVariants} style={{ color: 'rgba(232,244,253,0.6)', lineHeight: 1.9, marginBottom: '2rem' }}>
            Over the past 3 years, I have successfully executed projects ranging from robust backend systems to interactive frontends. I'm currently open for freelance opportunities to help bring your high-impact ideas to life.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}
          >
            {[
              { value: '3+', label: 'Years Exp.' },
              { value: '5+', label: 'Projects' },
              { value: '10+', label: 'Certs' },
              { value: '150+', label: 'Commits' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg,#4a9eff,#00d4ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1,
                    marginBottom: '0.4rem',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(232,244,253,0.4)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
