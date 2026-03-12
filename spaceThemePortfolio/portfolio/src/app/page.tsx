'use client';

import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

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
  const [isMuted, setIsMuted] = useState(true); // Start muted by default to require user interaction
  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Array of component references for navigation
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Audio refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const activeSectionRef = useRef(0);
  const scrollProgressRef = useRef(0);

  useEffect(() => {
    // Initialize audio only on client side
    const audio = new Audio('/fronbondi_skegs-sfx-deep-space-travel-ambience-01-background-sound-effect-358466.mp3');
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  // Handle explicit mute/unmute toggle. This acts as our trusted user interaction.
  const toggleMute = () => {
    const nextMutedState = !isMuted;
    setIsMuted(nextMutedState);
    
    if (!audioRef.current) return;

    if (!isAudioUnlocked) {
      // First time interaction unlocks the audio context securely
      setIsAudioUnlocked(true);
    }

    if (nextMutedState) {
      gsap.to(audioRef.current, { volume: 0, duration: 0.5, onComplete: () => audioRef.current?.pause() });
    } else {
      // If unmuted, play immediately if stationary just to give feedback, but keep it quiet
      audioRef.current.play().catch(console.error);
      if (isScrollingRef.current) {
         gsap.to(audioRef.current, { volume: 0.6, duration: 0.9 });
      } else {
         gsap.to(audioRef.current, { volume: 0.1, duration: 0.5 });
      }
    }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.context to properly clean up ScrollTrigger and tweens in React 18 strict mode
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: (self) => {
          // Throttle progress state updates (e.g. only update if changed by at least 0.005)
          // Navigation bar progress only needs to be so granular
          if (Math.abs(scrollProgressRef.current - self.progress) > 0.005) {
            scrollProgressRef.current = self.progress;
            setScrollProgress(self.progress);
          }
          
          // Calculate active section based on progress
          // There are 6 sections, so we divide the progress
          const segment = 1 / 6;
          const currentIdx = Math.min(Math.floor(self.progress / segment), 5);
          
          if (activeSectionRef.current !== currentIdx) {
             activeSectionRef.current = currentIdx;
             setActiveSection(currentIdx);
          }

          // Audio logic - only if not explicitly muted by user
          if (audioRef.current && !isMuted && isAudioUnlocked) {
            
            // Constantly ensure it's playing while scrolling updates happen
            if (audioRef.current.paused) {
               audioRef.current.play().catch(() => {});
            }

            // Only create a new tween if we weren't just actively scrolling
            if (!isScrollingRef.current) {
              isScrollingRef.current = true;
              gsap.killTweensOf(audioRef.current);
              gsap.to(audioRef.current, { volume: 0.6, duration: 0.8 });
            }

            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = setTimeout(() => {
              isScrollingRef.current = false;
              if (audioRef.current && !isMuted) {
                gsap.killTweensOf(audioRef.current);
                // Completely fade out and pause when scroll stops
                gsap.to(audioRef.current, { volume: 0, duration: 1.2, onComplete: () => {
                  if (!isScrollingRef.current) {
                     audioRef.current?.pause();
                  }
                }});
              }
            }, 250);
          }
        },
      });
    }, containerRef);

    return () => {
      ctx.revert(); // Let gsap.context handle deep cleanup
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [isMuted, isAudioUnlocked]); // Add dependencies so GSAP logic stays fresh when muted state changes

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

      {/* Floating Audio Toggle */}
      <AnimatePresence>
        <motion.button
          className="audio-toggle-btn"
          onClick={toggleMute}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 50,
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(10, 15, 30, 0.4)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(74, 158, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isMuted ? 'rgba(232, 244, 253, 0.5)' : 'var(--color-glow-cyan)',
            cursor: 'pointer',
            boxShadow: isMuted ? 'none' : '0 0 20px rgba(0, 212, 255, 0.15)',
            transition: 'all 0.3s ease',
            overflow: 'hidden'
          }}
          title={isMuted ? "Unmute Ambience" : "Mute Ambience"}
        >
           {/* Animated glow ring behind icon when active */}
           {!isMuted && (
             <motion.div
               animate={{ rotate: 360 }}
               transition={{ duration: 4, ease: "linear", repeat: Infinity }}
               style={{
                 position: 'absolute',
                 inset: '-50%',
                 background: 'conic-gradient(from 0deg, transparent 0%, rgba(0,212,255,0.2) 50%, transparent 100%)',
                 zIndex: -1
               }}
             />
           )}
           {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </motion.button>
      </AnimatePresence>

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
