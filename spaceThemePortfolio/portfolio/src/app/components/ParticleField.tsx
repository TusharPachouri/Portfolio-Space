'use client';

import { useEffect, useRef } from 'react';

export default function ParticleField() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];
    const COUNT = 60;

    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 2.5 + 0.5;
      const x = Math.random() * 100;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * -20;
      const drift = (Math.random() - 0.5) * 100;
      const brightness = Math.random();

      p.style.cssText = `
        position: absolute;
        left: ${x}%;
        bottom: -10px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${brightness > 0.8
          ? 'rgba(0, 212, 255, 0.9)'
          : brightness > 0.5
            ? 'rgba(74, 158, 255, 0.7)'
            : 'rgba(232, 244, 253, 0.6)'
        };
        --drift-x: ${drift}px;
        animation: particle-drift ${duration}s linear ${delay}s infinite;
        pointer-events: none;
        filter: blur(${size > 1.5 ? 0 : 0.5}px);
        box-shadow: 0 0 ${size * 3}px ${size}px currentColor;
      `;

      container.appendChild(p);
      particles.push(p);
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    />
  );
}
