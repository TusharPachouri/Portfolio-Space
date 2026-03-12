"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface HorseCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const TOTAL_FRAMES = 192;

export default function HorseCanvas({ scrollYProgress }: HorseCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate the image path based on the index (0 to 191)
  // Format is "frame_00000.png"
  const getImagePath = (index: number) => {
    const paddedIndex = String(index).padStart(5, "0");
    return `/frames/frame_${paddedIndex}.png`;
  };

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = [];
      let loadedCount = 0;

      // Wrap image loading in a Promise to track resolution
      const loadImage = (index: number): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.src = getImagePath(index);
          img.onload = () => resolve(img);
          img.onerror = reject;
        });
      };

      // Load first 10 frames immediately for fast initial render
      const initialBatchPromises = [];
      for (let i = 0; i < 10 && i < TOTAL_FRAMES; i++) {
        initialBatchPromises.push(loadImage(i));
      }

      const initialBatch = await Promise.all(initialBatchPromises);
      loadedImages.push(...initialBatch);
      setImages([...loadedImages]); 
      setIsLoaded(true); // Signal ready so first frame can draw

      // Load remaining frames in the background
      for (let i = 10; i < TOTAL_FRAMES; i++) {
        try {
          const img = await loadImage(i);
          loadedImages.push(img);
          // Update ref or state occasionally so we don't spam re-renders too much but keep it fresh
          if (i % 20 === 0 || i === TOTAL_FRAMES - 1) {
            setImages([...loadedImages]);
          }
        } catch (error) {
          console.error(`Failed to load frame ${i}`, error);
        }
      }
    };

    loadImages();
  }, []);

  // Map scroll progress to frame index (0 to 191)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Render loop
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: false }); // alpha: false for performance boost
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      // Get the current frame index from useTransform (returns a float, we need an int)
      let currentFrameInt = Math.floor(frameIndex.get());
      
      // Safety bounds check
      if (currentFrameInt < 0) currentFrameInt = 0;
      if (currentFrameInt > TOTAL_FRAMES - 1) currentFrameInt = TOTAL_FRAMES - 1;

      // If we haven't loaded this frame yet, use the latest one we have
      if (currentFrameInt >= images.length) {
        currentFrameInt = images.length - 1;
      }

      const img = images[currentFrameInt];

      if (img) {
        // Handle responsive scaling (object-fit: cover equivalent)
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let drawX = 0;
        let drawY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          drawY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          drawX = (canvas.width - drawWidth) / 2;
        }

        ctx.fillStyle = "#0a0908"; // Fallback background color
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw the frame
        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [images, frameIndex]);

  // Handle window resize dynamically without expensive re-renders
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    
    // Initial size
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none bg-[#0a0908]">
      <canvas
        ref={canvasRef}
        className={`w-full h-full transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
