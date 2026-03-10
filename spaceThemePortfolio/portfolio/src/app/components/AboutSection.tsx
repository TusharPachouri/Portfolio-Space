'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
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
            I'm a full-stack developer and creative technologist based in the universe's
            most dynamic city. I specialize in crafting high-performance, visually
            stunning web applications that push the boundaries of what's possible on the
            modern web platform.
          </motion.p>
          <motion.p variants={itemVariants} style={{ color: 'rgba(232,244,253,0.6)', lineHeight: 1.9, marginBottom: '2rem' }}>
            With over 5 years traversing the digital cosmos, I've shipped products to
            millions of users across 40+ countries. I believe the best code is invisible —
            what the user experiences is pure gravity-defying magic.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
          >
            {[
              { value: '5+', label: 'Years in Orbit' },
              { value: '40+', label: 'Projects Launched' },
              { value: '∞', label: 'Lines Written' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
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
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,244,253,0.4)' }}>
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
