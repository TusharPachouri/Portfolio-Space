'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/TusharPachouri',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: '#4a9eff',
  },
  {
    label: 'Email',
    href: 'mailto:tusharpachouri001@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#00d4ff',
  },
  {
    label: 'Phone',
    href: 'tel:+918218504473',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    color: '#1da1f2',
  },
  {
    label: 'Location',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    color: '#ffd700',
  },
];

export default function ContactSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <section className="section" id="contact" style={{ flexDirection: 'column', gap: '3rem', paddingTop: '6rem', minHeight: '120vh' }}>
      {/* Event horizon glow effect */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ textAlign: 'center', position: 'relative' }}
      >
        <div className="hud-line" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span>SECTOR 06 — EVENT HORIZON // FINAL TRANSMISSION</span>
        </div>
        <h2 className="section-title">
          <span className="text-gradient-blue">Contact</span> Mission Control
        </h2>
        <p
          style={{
            color: 'rgba(232,244,253,0.5)',
            maxWidth: '480px',
            margin: '1rem auto 0',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}
        >
          On the edge of the event horizon, messages still escape. Let's build
          something extraordinary together.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', width: '100%', maxWidth: '900px', position: 'relative' }}>
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          className="glass-card"
        >
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-star-white)' }}>
            Send Transmission
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(74,158,255,0.2)',
                borderRadius: '10px',
                padding: '0.875rem 1.25rem',
                color: 'var(--color-star-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.2)')}
            />
            <input
              type="email"
              placeholder="you@mission.com"
              value={formState.email}
              onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(74,158,255,0.2)',
                borderRadius: '10px',
                padding: '0.875rem 1.25rem',
                color: 'var(--color-star-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.2)')}
            />
            <textarea
              placeholder="Your message..."
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(74,158,255,0.2)',
                borderRadius: '10px',
                padding: '0.875rem 1.25rem',
                color: 'var(--color-star-white)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.6)')}
              onBlur={(e) => (e.target.style.borderColor = 'rgba(74,158,255,0.2)')}
            />
            <motion.button
              type="submit"
              className="btn-glow"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ justifyContent: 'center', marginTop: '0.5rem' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Launch Transmission
            </motion.button>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div className="glass-card" style={{ marginBottom: '0' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '1.5rem', color: 'var(--color-star-white)' }}>
              Connect Channels
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setHoveredLink(link.label)}
                  onHoverEnd={() => setHoveredLink(null)}
                  whileHover={{ x: 6, scale: 1.02 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem 1.25rem',
                    borderRadius: '12px',
                    border: `1px solid ${hoveredLink === link.label ? link.color + '50' : 'rgba(255,255,255,0.07)'}`,
                    background: `rgba(${link.color === '#4a9eff' ? '74,158,255' : link.color === '#0077b5' ? '0,119,181' : link.color === '#00d4ff' ? '0,212,255' : '29,161,242'},0.05)`,
                    color: hoveredLink === link.label ? link.color : 'rgba(232,244,253,0.7)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ color: link.color, flexShrink: 0 }}>{link.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 500 }}>{link.label}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', opacity: 0.5, marginTop: '2px' }}>
                      OPEN CHANNEL
                    </div>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: 'auto', opacity: 0.5 }}>
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{
              padding: '1.25rem',
              borderRadius: '12px',
              background: 'rgba(0,212,100,0.05)',
              border: '1px solid rgba(0,212,100,0.2)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00d464',
                boxShadow: '0 0 12px #00d464',
                animation: 'pulse-glow 2s ease-in-out infinite',
                flexShrink: 0,
                marginTop: '4px',
              }}
            />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: '#00d464', letterSpacing: '0.1em', marginBottom: '4px' }}>
                PAYMENT ENDPOINTS & LOC
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'rgba(232,244,253,0.5)', lineHeight: 1.6 }}>
                <strong>UPI:</strong> tusharpachouri@oksbi<br/>
                <strong>PayPal:</strong> @tusharpachouri<br/>
                <strong>LOC:</strong> Mathura, 281001, UP, India
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        style={{
          textAlign: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.2em',
          color: 'rgba(232,244,253,0.25)',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        © 2024 TUSHAR PACHOURI · BUILT IN ZERO GRAVITY · EVENT HORIZON REACHED
      </motion.div>
    </section>
  );
}
