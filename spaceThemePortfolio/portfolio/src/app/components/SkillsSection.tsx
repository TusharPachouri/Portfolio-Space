'use client';

import { motion, Variants } from 'framer-motion';

const skills = [
  { icon: '▲', name: 'Next.js', color: '#ffffff' },
  { icon: '🌐', name: 'Web Dev', color: '#4a9eff' },
  { icon: '🟨', name: 'JavaScript', color: '#F7DF1E' },
  { icon: '🐍', name: 'Python', color: '#FFD43B' },
  { icon: '⚙️', name: 'C++', color: '#00599C' },
  { icon: '🎨', name: 'Web Design', color: '#E10098' },
  { icon: '🔍', name: 'SEO', color: '#8CC84B' },
  { icon: '🧩', name: 'Problem Mgt.', color: '#ff6b35' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function SkillsSection() {
  return (
    <section className="section" id="skills" style={{ flexDirection: 'column', gap: '3rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        <div className="hud-line" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span>SECTOR 03 — ASTEROID BELT // TECH CLUSTER</span>
        </div>
        <h2 className="section-title">
          <span className="text-gradient-blue">Skills</span> &amp; Arsenal
        </h2>
        <p style={{ color: 'rgba(232,244,253,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          TECHNOLOGIES ORBITING MY STACK
        </p>
      </motion.div>

      {/* Central glow */}
      <div style={{ position: 'relative', width: '100%', maxWidth: '800px' }}>
        {/* Orbital rings */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(74,158,255,0.08)',
            animation: 'spin-slow 30s linear infinite',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            border: '1px solid rgba(74,158,255,0.05)',
            animation: 'spin-slow 50s linear infinite reverse',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          className="glass-card"
          style={{ background: 'rgba(5,10,20,0.5)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
              gap: '1rem',
            }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={nodeVariants}
                whileHover={{
                  y: -8,
                  scale: 1.08,
                  borderColor: skill.color + '80',
                  boxShadow: `0 0 30px ${skill.color}40`,
                }}
                className="skill-node"
                style={{ cursor: 'default' }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-name" style={{ color: skill.color + 'cc' }}>{skill.name}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
