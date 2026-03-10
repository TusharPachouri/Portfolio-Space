'use client';

import { useEffect, useRef, useCallback } from 'react';

const TOTAL_FRAMES = 192;
const FRAME_PATH = '/frames/frame_';

interface SpaceCanvasProps {
  scrollProgress: number;
}

export default function SpaceCanvas({ scrollProgress }: SpaceCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<HTMLImageElement[]>([]);
  const loadedRef = useRef<boolean[]>(Array(TOTAL_FRAMES).fill(false));
  const currentFrameRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = contextRef.current;
    const frame = framesRef.current[frameIndex];
    if (!canvas || !ctx || !frame || !loadedRef.current[frameIndex]) return;

    // Scale to cover
    const ratio = Math.max(
      canvas.width / frame.naturalWidth,
      canvas.height / frame.naturalHeight
    );
    const w = frame.naturalWidth * ratio;
    const h = frame.naturalHeight * ratio;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(frame, x, y, w, h);
  }, []);

  const loadFrames = useCallback(() => {
    // Optimize by loading in batches of 4 to prevent network choking
    const BATCH_SIZE = 4;
    
    for (let i = 0; i < BATCH_SIZE; i++) {
      const loadNextInBatch = (idx: number) => {
        if (idx >= TOTAL_FRAMES) return;
        
        const img = new Image();
        const padded = String(idx).padStart(5, '0');
        img.src = `${FRAME_PATH}${padded}.png`;
        
        // Decode image asynchronously to avoid main thread blocking
        img.decode().then(() => {
          loadedRef.current[idx] = true;
          framesRef.current[idx] = img;
          
          if (idx === 0 && currentFrameRef.current === 0) {
            drawFrame(0);
          }
          // Load next frame in this batch sequence
          loadNextInBatch(idx + BATCH_SIZE);
        }).catch(() => {
          // Fallback if decode fails
          loadedRef.current[idx] = true;
          framesRef.current[idx] = img;
          loadNextInBatch(idx + BATCH_SIZE);
        });
      };
      
      loadNextInBatch(i);
    }
  }, [drawFrame]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext('2d');
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    loadFrames();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [resizeCanvas, loadFrames]);

  useEffect(() => {
    const targetFrame = Math.min(
      Math.floor(scrollProgress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );

    if (targetFrame === currentFrameRef.current) return;

    cancelAnimationFrame(animFrameRef.current);
    
    // Smooth interpolation
    const animate = () => {
      const current = currentFrameRef.current;
      const diff = targetFrame - current;
      
      if (Math.abs(diff) <= 1) {
        currentFrameRef.current = targetFrame;
        drawFrame(targetFrame);
        return;
      }

      const step = diff > 0 ? 1 : -1;
      const nextFrame = current + step;
      
      if (loadedRef.current[nextFrame]) {
        currentFrameRef.current = nextFrame;
        drawFrame(nextFrame);
      }
      
      if (currentFrameRef.current !== targetFrame) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  }, [scrollProgress, drawFrame]);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} className="space-canvas" />
      {/* Overlay gradient for depth */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)`,
          pointerEvents: 'none',
        }}
      />
      {/* Scanline overlay for cinematic feel */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.03) 2px,
            rgba(0,0,0,0.03) 4px
          )`,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
