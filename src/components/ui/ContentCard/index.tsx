"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Text } from "@/components/ui/Typography";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface ContentCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'highlight' | 'accent';
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  bordered?: boolean;
}

export function ContentCard({
  children,
  variant = 'default',
  className = '',
  title,
  icon,
  bordered = true
}: ContentCardProps) {
  const variantStyles = {
    default: "bg-white",
    light: "bg-[#F9F8F4]",
    highlight: "bg-white border-l-4 border-[#CAB06B]",
    accent: "bg-[#F5F5E6]"
  }[variant];
  
  const borderStyle = bordered ? "border border-[#E5E2D9]" : "";
  
  return (
    <div className={cn(
      "rounded-sm p-5 md:p-6 relative overflow-hidden transition-all hover:shadow-sm",
      variantStyles,
      borderStyle,
      className
    )}>
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && icon}
          <Text variant="h3" color="primary" className="mb-0">{title}</Text>
        </div>
      )}
      {children}
    </div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  accentColor?: boolean;
  number?: number | string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className = '',
  accentColor = false,
  number
}: FeatureCardProps) {
  return (
    <ContentCard variant="light" className={className}>
      <div className="flex items-start">
        {number && (
          <div className="mr-3 mt-1 min-w-[32px] h-8 rounded-full bg-white flex items-center justify-center">
            <span className={`text-xl font-bold ${accentColor ? 'text-[#CAB06B]' : 'text-[#333333]'}`}>
              {number}
            </span>
          </div>
        )}
        {icon && (
          <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
            {React.cloneElement(icon as React.ReactElement, { 
              className: accentColor ? "text-[#CAB06B]" : "text-[#666666]", 
              size: 18 
            })}
          </div>
        )}
        <div>
          <Text variant="h4" color="primary" className="mb-1">{title}</Text>
          <Text variant="body" color="secondary">{description}</Text>
        </div>
      </div>
    </ContentCard>
  );
}

interface StatCardProps {
  label: string;
  value: string | number;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  accentValue?: boolean;
}

export function StatCard({
  label,
  value,
  description,
  icon,
  className = '',
  accentValue = true
}: StatCardProps) {
  return (
    <ContentCard variant="default" className={cn("hover:shadow-md transition-all", className)}>
      {icon && (
        <div className="flex items-center mb-3">
          <div className="w-10 h-10 rounded-full bg-[#F9F8F4] flex items-center justify-center mr-3">
            {React.cloneElement(icon as React.ReactElement, { 
              className: "text-[#CAB06B]", 
              size: 18 
            })}
          </div>
          <Text variant="h4" color="primary">{label}</Text>
        </div>
      )}
      
      {!icon && (
        <Text variant="caption" color="primary" className="uppercase tracking-wider font-medium mb-4 block">
          {label}
        </Text>
      )}
      
      <Text 
        variant="h2" 
        color={accentValue ? "accent" : "primary"}
        className="font-bold mb-2 block"
      >
        {value}
      </Text>
      
      {description && (
        <Text variant="caption" color="secondary">
          {description}
        </Text>
      )}
    </ContentCard>
  );
}

interface InfoCardProps {
  title: string;
  bullets: string[];
  className?: string;
}

export function InfoCard({
  title,
  bullets,
  className = ''
}: InfoCardProps) {
  return (
    <ContentCard variant="light" className={className}>
      <Text variant="h3" color="primary" className="mb-3">{title}</Text>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#CAB06B] mr-2 font-bold">•</span>
            <Text variant="body">{bullet}</Text>
          </li>
        ))}
      </ul>
    </ContentCard>
  );
}