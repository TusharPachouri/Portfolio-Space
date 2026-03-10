'use client';

import { motion, Variants } from 'framer-motion';
import {
  SiNextdotjs,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss,
  SiGooglechrome,
} from 'react-icons/si';

const skills = [
  { icon: SiNextdotjs, name: 'Next.js', color: '#ffffff' },
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: SiPython, name: 'Python', color: '#FFD43B' },
  { icon: SiCplusplus, name: 'C++', color: '#00599C' },
  { icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
  { icon: SiCss, name: 'CSS3', color: '#1572B6' },
  { icon: SiGooglechrome, name: 'Web Performance', color: '#8CC84B' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const nodeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SkillsSection() {
  return (
    <section
      className="section"
      id="skills"
      style={{ flexDirection: 'column', gap: '3rem' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center' }}
      >
        <div
          className="hud-line"
          style={{ justifyContent: 'center', marginBottom: '1.5rem' }}
        >
          <span>SECTOR 03 — ASTEROID BELT // TECH CLUSTER</span>
        </div>

        <h2 className="section-title">
          <span className="text-gradient-blue">Skills</span> &amp; Arsenal
        </h2>

        <p
          style={{
            color: 'rgba(232,244,253,0.5)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            letterSpacing: '0.15em',
            marginTop: '0.5rem',
          }}
        >
          TECHNOLOGIES ORBITING MY STACK
        </p>
      </motion.div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {/* Orbital Rings */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1px solid rgba(74,158,255,0.08)',
            animation: 'spin-slow 35s linear infinite',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            border: '1px solid rgba(74,158,255,0.05)',
            animation: 'spin-slow 60s linear infinite reverse',
            pointerEvents: 'none',
          }}
        />

        <motion.div
          className="glass-card"
          style={{
            background: 'rgba(5,10,20,0.55)',
            padding: '2.5rem',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1.4rem',
              alignItems: 'center',
              justifyItems: 'center',
            }}
          >
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  variants={nodeVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.07,
                    borderColor: skill.color + '90',
                    boxShadow: `0 0 35px ${skill.color}40`,
                  }}
                  className="skill-node"
                  style={{
                    width: '120px',
                    height: '110px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    borderRadius: '14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: 'rgba(10,18,30,0.5)',
                    transition: 'all 0.35s ease',
                    cursor: 'default',
                  }}
                >
                  <Icon
                    size={26}
                    color={skill.color}
                    style={{ opacity: 0.9 }}
                  />

                  <div
                    style={{
                      fontSize: '0.78rem',
                      letterSpacing: '0.08em',
                      fontFamily: 'var(--font-mono)',
                      color: skill.color + 'cc',
                    }}
                  >
                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}