'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sections = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

interface NavProps {
  activeSection: number;
  scrollProgress: number;
  onNavClick: (idx: number) => void;
}

export default function Navigation({ activeSection, scrollProgress, onNavClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setScrolled(scrollProgress > 0.02);
  }, [scrollProgress]);

  return (
    <>
      {/* Top nav */}
      <motion.nav
        className="space-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          background: scrolled ? 'rgba(0,0,0,0.4)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
          transition: 'all 0.5s ease',
        }}
      >
        <a href="#hero" className="nav-logo">
          TUSHAR<span style={{ color: 'rgba(232,244,253,0.3)' }}>.DEV</span>
        </a>
        <ul className="nav-links">
          {sections.map((section, idx) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); onNavClick(idx); }}
                style={{
                  color: activeSection === idx ? 'var(--color-glow-cyan)' : undefined,
                }}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Right side progress */}
      <motion.div
        className="scroll-progress"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {sections.map((section, idx) => (
          <button
            key={section}
            className={`progress-dot ${activeSection === idx ? 'active' : ''}`}
            onClick={() => onNavClick(idx)}
            title={section}
            style={{
              background: 'none',
              border: activeSection === idx ? '1px solid var(--color-glow-cyan)' : '1px solid rgba(74,158,255,0.3)',
              cursor: 'pointer',
            }}
          />
        ))}
        {/* Progress bar */}
        <div
          style={{
            marginTop: '8px',
            width: '1px',
            height: '40px',
            background: 'rgba(74,158,255,0.15)',
            position: 'relative',
            borderRadius: '1px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: `${scrollProgress * 100}%`,
              background: 'linear-gradient(180deg, var(--color-glow-cyan), var(--color-accretion))',
              borderRadius: '1px',
              transition: 'height 0.1s ease',
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
