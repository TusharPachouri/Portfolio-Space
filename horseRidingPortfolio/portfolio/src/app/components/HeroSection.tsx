"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pointer-events-auto">
      <motion.div
        style={{ opacity, y }}
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      >
        <div className="flex justify-between w-full max-w-sm mx-auto mb-6 text-[var(--color-tan)]/60 text-xs font-mono tracking-widest uppercase">
           <span>ELEVATION: 4,000 FT</span>
           <span>LAT 28.6°N · LON 77.2°E</span>
        </div>

        <span className="text-[var(--color-warm-accent)] tracking-widest text-sm uppercase font-semibold mb-3 block">
          Full-Stack Developer · UI/UX Engineer
        </span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2 text-white drop-shadow-lg">
          Tushar Pachouri
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-tan)] max-w-2xl mx-auto font-light drop-shadow-md mt-6">
          I design and build high-performance digital products that merge creativity with functionality. My focus is delivering scalable, user-centric solutions that make an impact.
        </p>

        <motion.div
          className="mt-16 flex flex-col items-center justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <span className="text-[var(--color-tan)]/60 text-xs tracking-widest uppercase mb-2">Explore Trail</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-warm-accent)] to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
