'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="section"
      id="hero"
      style={{ minHeight: '100vh', justifyContent: 'flex-start', alignItems: 'flex-end', paddingBottom: '8vh' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
        style={{ maxWidth: '900px', width: '100%' }}
      >
        {/* HUD Top Label */}
        <motion.div
          className="hud-line"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          <span>ORBITAL STATION — 408 KM</span>
          <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(74,158,255,0.5)' }}>
            LAT 28.6°N · LON 77.2°E
          </span>
        </motion.div>

        {/* Main Title */}
        <div className="display-xl" style={{ marginBottom: '1.5rem', lineHeight: 1 }}>
          <span className="text-gradient-blue">Tushar</span>
          <br />
          <span style={{ color: 'var(--color-star-white)', fontWeight: 200 }}>Pachouri</span>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--color-glow-cyan)',
              marginBottom: '1.5rem',
            }}
          >
            Full-Stack Developer · UI/UX Engineer
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'rgba(232, 244, 253, 0.65)',
              maxWidth: '520px',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              fontWeight: 300,
            }}
          >
            I design and build high-performance digital products that merge creativity with functionality. My focus is delivering scalable, user-centric solutions that make an impact.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-glow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Projects
            </a>
            <a href="#contact" className="btn-glow" style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(232,244,253,0.6)' }}>
              Launch Contact
            </a>
          </div>
        </motion.div>

        {/* Bottom telemetry */}
        <motion.div
          className="coordinates"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          style={{ marginTop: '3rem' }}
        >
          <span>ALT: 408.3 km</span>
          <span>VEL: 7.66 km/s</span>
          <span>HEADING: 051.4°</span>
          <span style={{ marginLeft: 'auto' }}>JOURNEY INITIATED</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
