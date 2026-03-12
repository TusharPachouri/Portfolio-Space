"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Full-Stack Developer (Freelance)",
    company: "Self-Employed",
    date: "Feb 2022 - Present",
    description: "Built robust Node.js applications. Implemented secure JWT authentication. Designed and tested RESTful APIs for scalable solutions.",
  },
  {
    role: "B.Tech CSE (Web Dev)",
    company: "Lovely Professional University",
    date: "2020 - 2024",
    description: "Specialization in Web Development. Built full-stack projects, learned core scalable architectures, and solved complex algorithmic problems.",
  },
  {
    role: "Higher Secondary (HSC)",
    company: "Kendriya Vidyalaya Mathura",
    date: "2019 - 2020",
    description: "Completed 12th grade with 74.2% in Physics, Chemistry, Mathematics (PCM), and Computer Science.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-24 relative pointer-events-auto px-6 max-w-6xl mx-auto flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16 ml-auto w-full md:w-3/4"
      >
        <h2 className="text-4xl font-bold text-white flex items-center justify-end gap-4 mb-2">
          Experience
        </h2>
        <div className="w-16 h-1 bg-[var(--color-warm-accent)] rounded-full ml-auto"></div>
      </motion.div>

      <div className="flex flex-col gap-8 w-full md:w-3/4 ml-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="glass-panel p-6 md:p-8 flex flex-col md:flex-row gap-6 relative overflow-hidden group border-l-2 border-[var(--color-tan)]/30 hover:border-[var(--color-tan)] transition-colors"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-warm-accent)]/80 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
            
            <div className="md:w-1/3 flex flex-col justify-start">
              <span className="text-[var(--color-warm-accent)] tracking-widest text-xs font-semibold mb-1 uppercase uppercase">
                {exp.date}
              </span>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-[var(--color-tan)]">{exp.company}</p>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-[var(--color-tan)]/80 leading-relaxed text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
