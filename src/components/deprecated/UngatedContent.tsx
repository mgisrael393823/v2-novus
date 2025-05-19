"use client"

import React from "react";

interface UngatedContentProps {
  children: React.ReactNode;
  title?: string;
  teaser?: string;
  visibleContent?: React.ReactNode;
  gatedContent?: React.ReactNode;
  description?: string;
  chartType?: 'bar' | 'line' | 'pie' | 'table';
  height?: string;
  sampleData?: boolean;
  previewPoints?: string[];
}

// This component replaces all gated content components with a direct pass-through
// that simply renders the children without any gating mechanism
export function UngatedContent({ 
  children, 
  visibleContent, 
  gatedContent,
  ...props 
}: UngatedContentProps) {
  // For GatedContent component, just return children
  if (children) {
    return <>{children}</>;
  }
  
  // For PartialGatedContent component
  if (visibleContent && gatedContent) {
    return (
      <>
        {visibleContent}
        {gatedContent}
      </>
    );
  }
  
  // For BlurredVisualization, return an empty div with proper height
  // This is a fallback case, but shouldn't be needed since we're replacing component imports
  return <div className={props.height || "h-64"}>{children}</div>;
}

// Export aliases for each gated component type to directly replace imports
export const GatedContent = UngatedContent;
export const PartialGatedContent = UngatedContent;
export const BlurredVisualization = UngatedContent;