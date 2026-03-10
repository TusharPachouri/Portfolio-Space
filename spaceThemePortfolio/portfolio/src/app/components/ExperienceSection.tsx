'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Full-Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: 'Feb 2022 — Present',
    description: 'Built robust Node.js applications. Implemented secure JWT authentication. Designed and tested RESTful APIs for scalable solutions.',
    color: '#ff6b35',
  },
  {
    role: 'B.Tech CSE (Web Dev)',
    company: 'Lovely Professional University',
    period: '2020 — 2024',
    description: 'Specialization in Web Development. Built full-stack projects, learned core scalable architectures, and solved complex algorithmic problems.',
    color: '#00d4ff',
  },
  {
    role: 'Higher Secondary (HSC)',
    company: 'Kendriya Vidyalaya Mathura',
    period: '2019 — 2020',
    description: 'Completed 12th grade with 74.2% in Physics, Chemistry, Mathematics (PCM), and Computer Science.',
    color: '#8b5cf6',
  },
];

const achievements = [
  { icon: '💼', label: 'Open for Freelance' },
  { icon: '📈', label: 'SEO Optimization' },
  { icon: '📱', label: 'Mobile App Dev' },
  { icon: '🚀', label: 'Fast Delivery' },
];

export default function ExperienceSection() {
  return (
    <section className="section" id="experience" style={{ flexDirection: 'column', gap: '4rem', paddingTop: '6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ textAlign: 'center' }}
      >
        <div className="hud-line" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span>SECTOR 05 — ACCRETION DISK // MISSION LOG</span>
        </div>
        <h2 className="section-title">
          <span className="text-gradient-fire">Experience</span> &amp; Education
        </h2>
        <p style={{ color: 'rgba(232,244,253,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          GRAVITATIONAL HISTORY OF MY JOURNEY
        </p>
      </motion.div>

      {/* Experience Timeline */}
      <div style={{ width: '100%', maxWidth: '800px', position: 'relative' }}>
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '1px',
            background: 'linear-gradient(180deg, transparent, rgba(255,107,53,0.4) 20%, rgba(255,215,0,0.4) 80%, transparent)',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '2.5rem' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.15 }}
              className="orbit-item"
              style={{ borderColor: exp.color + '30' }}
            >
              {/* Timeline dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-3.1rem',
                  top: '1.75rem',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 16px ${exp.color}80`,
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 600, color: 'var(--color-star-white)', marginBottom: '0.2rem' }}>
                    {exp.role}
                  </h3>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: exp.color, letterSpacing: '0.1em' }}>
                    @ {exp.company}
                  </span>
                </div>
                <span className="tag tag-fire" style={{ borderColor: exp.color + '30', color: exp.color + 'cc', whiteSpace: 'nowrap' }}>
                  {exp.period}
                </span>
              </div>
              <p style={{ color: 'rgba(232,244,253,0.65)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ width: '100%', maxWidth: '800px' }}
      >
        <h3
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(255,215,0,0.6)',
            marginBottom: '1.25rem',
          }}
        >
          Orbital Achievements
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem' }}>
          {achievements.map((ach) => (
            <motion.div
              key={ach.label}
              whileHover={{ y: -4, boxShadow: '0 0 30px rgba(255,215,0,0.2)' }}
              style={{
                background: 'rgba(255,215,0,0.04)',
                border: '1px solid rgba(255,215,0,0.15)',
                borderRadius: '12px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{ach.icon}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'rgba(232,244,253,0.65)', lineHeight: 1.4 }}>
                {ach.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
