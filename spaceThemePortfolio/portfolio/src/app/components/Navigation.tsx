'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { Home, User, Code, FolderGit2, Briefcase, Mail } from 'lucide-react';

const sections = [
  { name: 'Home', icon: <Home size={18} /> },
  { name: 'About', icon: <User size={18} /> },
  { name: 'Skills', icon: <Code size={18} /> },
  { name: 'Projects', icon: <FolderGit2 size={18} /> },
  { name: 'Experience', icon: <Briefcase size={18} /> },
  { name: 'Contact', icon: <Mail size={18} /> },
];

interface NavProps {
  activeSection: number;
  scrollProgress: number;
  onNavClick: (idx: number) => void;
}

export default function Navigation({ activeSection, scrollProgress, onNavClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setScrolled(scrollProgress > 0.02);
  }, [scrollProgress]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
            <li key={section.name}>
              <a
                href={`#${section.name.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); onNavClick(idx); }}
                style={{
                  color: activeSection === idx ? 'var(--color-glow-cyan)' : undefined,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                className="nav-link-item"
                title={isMobile ? section.name : undefined}
              >
                {isMobile ? section.icon : section.name}
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
            key={section.name}
            className={`progress-dot ${activeSection === idx ? 'active' : ''}`}
            onClick={() => onNavClick(idx)}
            title={section.name}
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
