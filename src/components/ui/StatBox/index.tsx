"use client"

import React from "react";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Text } from "@/components/ui/Typography";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface StatBoxProps {
  label: string;
  value: string | number;
  description?: string;
  variant?: 'default' | 'accent' | 'circle' | 'light';
  className?: string;
  icon?: React.ReactNode;
  centered?: boolean;
}

export function StatBox({
  label,
  value,
  description,
  variant = 'default',
  className = '',
  icon,
  centered = true
}: StatBoxProps) {
  const variantStyles = {
    default: "bg-novus-cream border-r border-novus-border last:border-r-0 hover:bg-novus-cream-dark",
    accent: "bg-white border border-novus-border hover:shadow-md",
    circle: "bg-white border border-novus-border hover:shadow-md",
    light: "bg-novus-cream border border-novus-border hover:shadow-sm"
  }[variant];

  const textAlign = centered ? "text-center" : "text-left";
  
  return (
    <div className={cn(
      "rounded-sm flex-1 p-5 md:p-6 transition-all",
      variantStyles,
      textAlign,
      className
    )}>
      {icon && (
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-novus-cream flex items-center justify-center mr-3">
            {React.cloneElement(icon as React.ReactElement, { 
              className: "text-novus-gold", 
              size: 18 
            })}
          </div>
          <Text variant="h4" color="primary" className="mb-0">{label}</Text>
        </div>
      )}
      
      {!icon && (
        <Text 
          variant="caption" 
          color="primary" 
          className="uppercase tracking-wider font-medium mb-4 block"
        >
          {label}
        </Text>
      )}
      
      {variant === 'circle' ? (
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-novus-cream border-4 border-novus-gold">
            <Text variant="h2" color="accent" className="font-bold">
              {value}
            </Text>
          </div>
        </div>
      ) : (
        <Text 
          variant="h2" 
          color="accent" 
          className="font-bold mb-4 block text-3xl md:text-4xl"
        >
          {value}
        </Text>
      )}
      
      {description && (
        <Text variant="caption" color="secondary">
          {description}
        </Text>
      )}
    </div>
  );
}