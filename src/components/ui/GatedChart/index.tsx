"use client"

import React from "react";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface GatedChartProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

// Component that shows charts without gating
export function GatedChart({ children, title, description }: GatedChartProps) {
  return (
    <div className="relative mb-8">
      {/* Chart header */}
      <div className="mb-4">
        <h3 className={`${headingFont.className} text-lg text-[#333333] mb-1`}>{title}</h3>
        {description && (
          <p className={`${bodyFont.className} text-sm text-[#666666]`}>{description}</p>
        )}
      </div>
      
      {/* Chart content - fully visible */}
      <div className="border border-[#E8E3D9] p-4 rounded-sm bg-white">
        {children}
      </div>
    </div>
  );
}