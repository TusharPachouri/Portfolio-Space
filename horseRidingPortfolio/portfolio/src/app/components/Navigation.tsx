"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navigation() {
  const [activeTab, setActiveTab] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past top
      setIsScrolled(window.scrollY > 50);

      // Simple intersection observer logic based on scroll position could be complex with the canvas.
      // Easiest is to measure sections dynamically.
      const sections = navItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return {
          id: item.id,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      // Find the section that is currently most visible in the viewport
      const viewportHeight = window.innerHeight;
      const visibleSections = sections.filter(
        (sec) => sec.top < viewportHeight * 0.5 && sec.bottom > viewportHeight * 0.2
      );

      if (visibleSections.length > 0) {
        // Just take the first one that matches
        setActiveTab(visibleSections[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    
    // Smooth scroll to the element
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto ${
        isScrolled ? "py-4" : "py-6"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className={`relative flex items-center justify-between rounded-full transition-all duration-500 ${
            isScrolled ? "bg-[#0a0908]/60 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] px-6 py-3" : "px-2"
        }`}>
          {/* Logo / Name */}
          <div className="text-[var(--color-tan)] font-bold tracking-widest uppercase text-sm">
            T. Pachouri
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleClick(item.id, e)}
                className={`relative px-4 py-2 text-sm transition-colors duration-300 ${
                  activeTab === item.id ? "text-white" : "text-[var(--color-tan)]/60 hover:text-[var(--color-tan)]"
                }`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            ))}
          </div>

          {/* Mobile minimal icon (optional toggle) */}
          <div className="md:hidden text-[var(--color-warm-accent)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
