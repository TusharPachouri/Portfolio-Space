"use client";

import { ReactNode } from "react";

interface PortfolioOverlayProps {
  children: ReactNode;
}

export default function PortfolioOverlay({ children }: PortfolioOverlayProps) {
  return (
    <div className="relative z-10 w-full pointer-events-none">
      {/* 
        This wrapper is pointer-events-none to let scroll pass through to the window naturally,
        but we re-enable pointer-events-auto on individual sections inside the children. 
      */}
      {children}
    </div>
  );
}
