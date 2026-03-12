"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Smartphone, 
  Palette, 
  Cpu, 
  Globe 
} from "lucide-react";

const skills = [
  { icon: Layout, name: "Next.js", desc: "React Framework" },
  { icon: Code2, name: "React / JS", desc: "Front-end Library" },
  { icon: Terminal, name: "Python", desc: "Backend / Scripts" },
  { icon: Cpu, name: "C++", desc: "Systems / DSA" },
  { icon: Globe, name: "HTML5", desc: "Semantic Markup" },
  { icon: Palette, name: "Tailwind / CSS3", desc: "Styling" },
  { icon: Smartphone, name: "Mobile App Dev", desc: "Cross-platform" },
  { icon: Database, name: "Web Performance", desc: "Optimization" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen flex items-center py-24 relative pointer-events-auto px-6 max-w-6xl mx-auto pt-32">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">Technical Arsenal</h2>
          <div className="w-16 h-1 bg-[var(--color-warm-accent)] rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" style={{ perspective: "1000px" }}>
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, rotateX: 10, rotateY: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05, 
                  rotateX: 5, 
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)" 
                }}
                className="glass-accent p-6 flex flex-col items-start hover:border-[var(--color-goldenrod)]/50 transition-all cursor-crosshair transform-gpu"
              >
                <div className="bg-[var(--color-warm-accent)]/20 p-3 rounded-lg mb-4 text-[var(--color-tan)] shadow-[0_0_15px_rgba(176,141,87,0.3)]">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{skill.name}</h3>
                <p className="text-sm text-[var(--color-tan)]/70">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
