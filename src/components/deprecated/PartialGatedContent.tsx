"use client"

import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface PartialGatedContentProps {
  visibleContent: React.ReactNode;
  gatedContent: React.ReactNode;
  title: string;
  teaser: string;
  previewPoints?: string[];
}

// Component that shows content without gating
export function PartialGatedContent({ 
  visibleContent, 
  gatedContent,
  title,
  teaser,
  previewPoints = []
}: PartialGatedContentProps) {
  return (
    <div className="relative">
      {/* Visible content at the top */}
      <div className="mb-10">
        {visibleContent}
      </div>
      
      {/* Information section */}
      <div className="mb-12 p-8 bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
        
        <div className="flex items-center justify-between mb-4">
          <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
            {title}
          </h3>
        </div>
        
        <p className={`${bodyFont.className} text-[#666666] leading-relaxed max-w-3xl mb-6`}>{teaser}</p>
        
        {previewPoints.length > 0 && (
          <div className="mb-6">
            <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights:</h5>
            <ul className="space-y-2">
              {previewPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#CAB06B] mr-2">•</span>
                  <span className={`${bodyFont.className} text-[#666666]`}>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Previously gated content - now fully visible */}
      <div>
        {gatedContent}
      </div>
    </div>
  );
}