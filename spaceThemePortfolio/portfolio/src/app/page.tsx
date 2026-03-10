'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import SpaceCanvas from './components/SpaceCanvas';
import ParticleField from './components/ParticleField';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Array of component references for navigation
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize ScrollTrigger for global progress
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        setScrollProgress(self.progress);
        
        // Calculate active section based on progress
        // There are 6 sections, so we divide the progress
        const segment = 1 / 6;
        const currentIdx = Math.min(Math.floor(self.progress / segment), 5);
        setActiveSection(currentIdx);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  const handleNavClick = (idx: number) => {
    const target = sectionRefs.current[idx];
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main ref={containerRef} style={{ position: 'relative', width: '100%' }}>
      {/* Background Elements */}
      <SpaceCanvas scrollProgress={scrollProgress} />
      <ParticleField />
      
      {/* Fixed Overlay UI */}
      <Navigation
        activeSection={activeSection}
        scrollProgress={scrollProgress}
        onNavClick={handleNavClick}
      />

      {/* Scrolling Content Container */}
      <div className="scroll-container">
        {/* Helper layout wrappers for each section to stretch the scroll length */}
        
        <div ref={el => { sectionRefs.current[0] = el; }}>
          <HeroSection />
        </div>
        
        {/* We add spacer divs to give the scroll a longer, cinematic feel between sections */}
        <div style={{ height: '50vh' }} />

        <div ref={el => { sectionRefs.current[1] = el; }}>
          <AboutSection />
        </div>

        <div style={{ height: '80vh' }} />

        <div ref={el => { sectionRefs.current[2] = el; }}>
          <SkillsSection />
        </div>

        <div style={{ height: '80vh' }} />

        <div ref={el => { sectionRefs.current[3] = el; }}>
          <ProjectsSection />
        </div>

        <div style={{ height: '80vh' }} />

        <div ref={el => { sectionRefs.current[4] = el; }}>
          <ExperienceSection />
        </div>

        <div style={{ height: '80vh' }} />

        <div ref={el => { sectionRefs.current[5] = el; }}>
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
