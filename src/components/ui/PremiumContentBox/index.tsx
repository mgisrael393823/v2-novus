"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { ArrowRight } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface PremiumContentBoxProps {
  title: string;
  description: string;
  bulletPoints?: string[];
  ctaText?: string;
  onCtaClick?: () => void;
  icon?: React.ReactNode;
}

export function PremiumContentBox({
  title,
  description,
  bulletPoints = [],
  ctaText = "Access Full Analysis",
  onCtaClick = () => {},
  icon = <ArrowRight className="h-4 w-4 mr-2 text-[#CAB06B]" />
}: PremiumContentBoxProps) {
  return (
    <div className="premium-content-box">
      <div className="decorative-circle"></div>
      
      <div className="flex items-center justify-between mb-4">
        <h3 className={`${headingFont.className} text-lg uppercase tracking-wide text-[#333333] flex items-center`}>
          {icon}
          {title}
        </h3>
        <div className="premium-badge">
          <span className={`${bodyFont.className}`}>Premium Content</span>
        </div>
      </div>
      
      <p className={`${bodyFont.className} body-text mb-6`}>{description}</p>
      
      {bulletPoints.length > 0 && (
        <div className="mb-6">
          <h5 className={`${headingFont.className} text-sm uppercase tracking-wide mb-3 text-[#555555]`}>Key Insights Preview:</h5>
          <ul className="bullet-list">
            {bulletPoints.map((point, index) => (
              <li key={index} className="bullet-list-item">
                <span className="bullet-marker">•</span>
                <span className={`${bodyFont.className} body-text`}>{point}</span>
              </li>
            ))}
            <li className="bullet-list-item">
              <span className="bullet-marker">•</span>
              <span className={`${bodyFont.className} caption italic`}>Additional insights available in full analysis...</span>
            </li>
          </ul>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <div className="content-box py-2 px-4 inline-flex items-center">
          <span className={`${bodyFont.className} caption`}>Full analysis includes property-specific strategy recommendations</span>
        </div>
        
        <Button 
          variant="outline"
          onClick={onCtaClick}
          className="btn-outline flex items-center"
        >
          <span>{ctaText}</span>
          <ArrowRight className="h-3.5 w-3.5 ml-2" />
        </Button>
      </div>
    </div>
  );
}