"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Nebula Blog",
    year: "2024",
    link: "https://nebula-blog.tusharpachouri.com",
    description: "An interactive platform for users to create, manage, and discover blog content with AI-powered content generation.",
    tech: ["React", "Node.js", "MongoDB", "Gemini AI"],
  },
  {
    title: "3D Portfolio",
    year: "2024",
    link: "https://tusharpachouri.com",
    description: "An interactive portfolio featuring 3D models and animations to showcase projects and skills dynamically.",
    tech: ["Three.js", "Next.js", "React", "CSS Anim"],
  },
  {
    title: "Video Streaming",
    year: "2024",
    link: "https://video-streaming-application.tusharpachouri.com",
    description: "A secure platform for video streaming where users can upload videos, customize profiles, and interact with content.",
    tech: ["Node.js", "MongoDB", "Cloudinary", "JWT"],
  },
  {
    title: "DropDash",
    year: "2024",
    link: "https://dropdash.vercel.app",
    description: "A secure file-sharing platform that lets users upload, share, and manage files with enhanced security and scalability.",
    tech: ["Flask", "Azure Blob", "Azure CDN"],
  },
  {
    title: "Rhythm Reaper",
    year: "2024",
    link: "https://github.com/TusharPachouri/RhythmReaper",
    description: "A Python app that fetches top tracks from Spotify and downloads them in MP3 format using Pytube.",
    tech: ["Python", "Spotify API", "Pytube"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-24 relative pointer-events-auto px-6 max-w-6xl mx-auto flex flex-col justify-center pt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold text-white mb-2">Featured Work</h2>
        <div className="w-16 h-1 bg-[var(--color-warm-accent)] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ perspective: "1500px" }}>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 80 }}
            whileHover={{ 
              scale: 1.03,
              rotateX: 2,
              rotateY: -2,
              boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
            }}
            className="glass-panel p-8 relative overflow-hidden group flex flex-col h-full cursor-pointer transform-gpu transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-saddle-brown)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[var(--color-warm-accent)] text-xs font-mono tracking-widest uppercase mb-2 block">
                  {project.year}
                </span>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="flex gap-3 text-[var(--color-tan)]/60">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-warm-accent)] transition-colors"><ExternalLink size={20} /></a>
              </div>
            </div>

            <p className="text-[var(--color-tan)]/80 leading-relaxed flex-grow mb-8">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t, idx) => (
                <li key={idx} className="bg-black/40 px-3 py-1 rounded-full text-xs text-[var(--color-tan)] border border-white/5">
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
