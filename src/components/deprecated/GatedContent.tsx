"use client"

import React from "react";
import { Montserrat } from "next/font/google";

// Initialize fonts
const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface GatedContentProps {
  children: React.ReactNode;
  title: string;
  teaser: string;
}

// Component that shows content without gating
export function GatedContent({ children, title, teaser }: GatedContentProps) {
  return (
    <div className="relative">
      {/* Content introduction - not blurred */}
      <div className="mb-10 p-8 bg-[#FCFAF5] border border-[#E8E3D9] rounded-sm relative overflow-hidden">
        <div className="decorative-circle"></div>
        <h3 className={`${headingFont.className} text-lg uppercase tracking-wide mb-4 text-[#333333] flex items-center`}>
          {title}
        </h3>
        <p className={`${bodyFont.className} text-[#777777] leading-relaxed max-w-3xl`}>{teaser}</p>
      </div>
      
      {/* Content - fully visible */}
      <div>
        {children}
      </div>
    </div>
  );
}