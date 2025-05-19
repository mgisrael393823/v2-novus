"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface HighlightBoxProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "feature";
  className?: string;
  title?: string;
}

export function HighlightBox({ 
  children, 
  variant = "primary",
  className = "",
  title
}: HighlightBoxProps) {
  const variantStyles = {
    primary: "bg-[#F9F8F4] border-l-4 border-[#333333]",
    secondary: "bg-white border border-[#E5E2D9]",
    accent: "bg-[#F9F8F4] border-l-4 border-[#CAB06B]",
    feature: "bg-white border-l-4 border-[#CAB06B]"
  }[variant];
  
  return (
    <div className={cn(
      "highlight-box p-5 md:p-6 mb-8 rounded-sm",
      variantStyles,
      className
    )}>
      {title && (
        <h3 className="text-lg font-semibold text-[#333333] mb-3">{title}</h3>
      )}
      {children}
    </div>
  );
}