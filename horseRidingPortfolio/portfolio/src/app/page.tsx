"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import HorseCanvas from "./components/HorseCanvas";
import PortfolioOverlay from "./components/PortfolioOverlay";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress across the entire container
  // We use offset ["start start", "end end"] so scrollYProgress
  // goes from 0 to 1 precisely over the scrollable height.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative w-full bg-[#0a0908]">
      <Navigation />
      
      {/* 
        The canvas component takes scrollYProgress to drive the frame sequence. 
        It is fixed in the background.
      */}
      <HorseCanvas scrollYProgress={scrollYProgress} />

      {/* 
        The overlay contains all our scrolling sections. 
        It has pointer-events-none on the wrapper but pointer-events-auto inside,
        so users can scroll the page normally. 
      */}
      <PortfolioOverlay>
        <HeroSection />
        
        {/* Add spacers to stretch the scroll duration as needed to spread out the 192 frames smoothly */}
        <div className="h-[50vh]"></div>
        <AboutSection />
        
        <div className="h-[30vh]"></div>
        <SkillsSection />
        
        <div className="h-[30vh]"></div>
        <ExperienceSection />
        
        <div className="h-[30vh]"></div>
        <ProjectsSection />
        
        <div className="h-[50vh]"></div>
        <ContactSection />
      </PortfolioOverlay>
    </main>
  );
}
