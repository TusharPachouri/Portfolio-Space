'use client';

import { motion, Variants } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Nebula Blog',
    description: 'An interactive platform for users to create, manage, and discover blog content with AI-powered content generation.',
    tags: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    color: '#8b5cf6',
    emoji: '📝',
    link: 'https://nebula-blog.tusharpachouri.com',
    year: '2024',
  },
  {
    id: 2,
    title: '3D Portfolio',
    description: 'An interactive portfolio featuring 3D models and animations to showcase projects and skills dynamically.',
    tags: ['Three.js', 'Next.js', 'React', 'CSS Anim'],
    color: '#00d4ff',
    emoji: '🌌',
    link: 'https://tusharpachouri.com',
    year: '2024',
  },
  {
    id: 3,
    title: 'Video Streaming',
    description: 'A secure platform for video streaming where users can upload videos, customize profiles, and interact with content.',
    tags: ['Node.js', 'MongoDB', 'Cloudinary', 'JWT'],
    color: '#ff6b35',
    emoji: '🎬',
    link: 'https://video-streaming-application.tusharpachouri.com',
    year: '2024',
  },
  {
    id: 4,
    title: 'DropDash',
    description: 'A secure file-sharing platform that lets users upload, share, and manage files with enhanced security and scalability.',
    tags: ['Flask', 'Azure Blob', 'Azure CDN'],
    color: '#4a9eff',
    emoji: '📦',
    link: 'https://dropdash.vercel.app',
    year: '2024',
  },
  {
    id: 5,
    title: 'Rhythm Reaper',
    description: 'A Python app that fetches top tracks from Spotify and downloads them in MP3 format using Pytube.',
    tags: ['Python', 'Spotify API', 'Pytube'],
    color: '#1DB954',
    emoji: '🎵',
    link: 'https://github.com/TusharPachouri/RhythmReaper',
    year: '2024',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function ProjectsSection() {
  return (
    <section className="section" id="projects" style={{ flexDirection: 'column', gap: '3rem', paddingTop: '6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
        style={{ textAlign: 'center' }}
      >
        <div className="hud-line" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
          <span>SECTOR 04 — NEBULA FIELD // PROJECT CLUSTER</span>
        </div>
        <h2 className="section-title">
          <span className="text-gradient-blue">Featured</span> Projects
        </h2>
        <p style={{ color: 'rgba(232,244,253,0.5)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', marginTop: '0.5rem' }}>
          ORBITING THROUGH THE COSMIC BUILD LOG
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.5rem',
          width: '100%',
          maxWidth: '1100px',
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              borderColor: project.color + '60',
            }}
            className="project-card"
            style={{
              cursor: 'pointer',
              borderColor: project.color + '20',
            }}
          >
            {/* Top accent bar */}
            <div
              style={{
                height: '2px',
                background: `linear-gradient(90deg, ${project.color}, transparent)`,
              }}
            />

            <div style={{ padding: '1.75rem' }}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{project.emoji}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--color-star-white)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: project.color,
                    border: `1px solid ${project.color}40`,
                    padding: '4px 10px',
                    borderRadius: '4px',
                    letterSpacing: '0.1em',
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  color: 'rgba(232,244,253,0.6)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  marginBottom: '1.25rem',
                }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ borderColor: project.color + '30', color: project.color + 'cc' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.link}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: project.color,
                  textDecoration: 'none',
                  borderBottom: `1px solid ${project.color}40`,
                  paddingBottom: '2px',
                  transition: 'border-color 0.2s',
                }}
              >
                Explore Mission
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
