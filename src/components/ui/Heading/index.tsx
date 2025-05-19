"use client"

import React from "react";
import { Montserrat } from "next/font/google";
import { Text } from "@/components/ui/Typography";
import { cn } from "@/lib/utils";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
}

export function Heading({ 
  level = 1, 
  children, 
  className = "",
  uppercase = false,
  color = "primary"
}: HeadingProps) {
  const variant = level <= 4 
    ? `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'
    : 'h4';
  
  // Default margins based on heading level
  const marginClass = {
    1: "mb-6",
    2: "mb-5",
    3: "mb-4",
    4: "mb-3",
    5: "mb-2",
    6: "mb-2",
  }[level];
  
  return (
    <Text
      variant={variant}
      color={color}
      className={cn(
        marginClass,
        uppercase && "uppercase tracking-wide",
        level > 4 && (level === 5 ? "text-base font-medium" : "text-sm font-medium"),
        className
      )}
    >
      {children}
    </Text>
  );
}