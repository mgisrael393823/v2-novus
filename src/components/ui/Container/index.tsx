"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

// Font implementation matching The Novus's branding
const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  withPadding?: boolean;
}

export function Container({
  children,
  className = '',
  size = 'default',
  withPadding = true
}: ContainerProps) {
  const maxWidthClass = {
    default: "max-w-4xl",
    narrow: "max-w-2xl",
    wide: "max-w-6xl",
    full: "max-w-full"
  }[size];
  
  return (
    <div 
      className={cn(
        "w-full mx-auto",
        withPadding && "px-4 md:px-6 lg:px-8",
        maxWidthClass,
        className
      )}
    >
      {children}
    </div>
  );
}

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
  withDivider?: boolean;
  size?: 'sm' | 'default' | 'lg';
  id?: string;
  animate?: boolean;
  color?: string;
  divider?: boolean;
  badge?: string;
  centered?: boolean;
}

export function Section({
  children,
  title,
  subtitle,
  icon,
  className = '',
  withDivider = false,
  size = 'default',
  id,
  animate = true,
  color,
  divider = false,
  badge,
  centered = false
}: SectionProps) {
  const sizeClass = {
    sm: "py-6 md:py-8 mb-8 md:mb-12",
    default: "py-8 md:py-12 mb-12 md:mb-16",
    lg: "py-12 md:py-16 mb-16 md:mb-20"
  }[size];
  
  return (
    <section
      id={id}
      className={cn(
        sizeClass,
        withDivider && "border-t-2 border-novus-border pt-6",
        className
      )}
    >
      {title && (
        <div className="flex items-center mb-3">
          {icon && <div className="mr-3 text-[#CAB06B]">{icon}</div>}
          <h2 className={cn(
            "text-2xl md:text-3xl font-semibold text-text-primary tracking-wide leading-tight",
            headingFont.className
          )}>
            {title}
          </h2>
        </div>
      )}
      
      {subtitle && (
        <p className={cn(
          "text-text-secondary mb-6",
          bodyFont.className
        )}>
          {subtitle}
        </p>
      )}
      
      {children}
    </section>
  );
}

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  intro?: string;
  className?: string;
}

export function PageContainer({
  children,
  title,
  description,
  intro,
  className = ''
}: PageContainerProps) {
  return (
    <Container size="default" className={className}>
      <h1 className={cn(
        "text-3xl md:text-4xl font-semibold text-text-primary tracking-wide leading-tight mb-6",
        headingFont.className
      )}>
        {title}
      </h1>
      
      {intro && (
        <div className="highlight-box">
          <p className={cn(
            "text-lg text-text-secondary leading-relaxed",
            bodyFont.className
          )}>
            {intro}
          </p>
        </div>
      )}
      
      {description && (
        <p className={cn(
          "text-text-secondary mb-8",
          bodyFont.className
        )}>
          {description}
        </p>
      )}
      
      {children}
    </Container>
  );
}

interface ContentBoxProps {
  children: React.ReactNode;
  variant?: 'default' | 'light' | 'highlight' | 'highlight-accent';
  className?: string;
  withAnimation?: boolean;
}

export function ContentBox({
  children,
  variant = 'default',
  className = '',
  withAnimation = false
}: ContentBoxProps) {
  const variantClass = {
    default: "content-box",
    light: "content-box-light",
    highlight: "highlight-box",
    'highlight-accent': "highlight-box-accent"
  }[variant];
  
  const Content = (
    <div className={cn(variantClass, className)}>
      {children}
      {variant === 'light' && (
        <div className="decorative-circle"></div>
      )}
    </div>
  );
  
  if (withAnimation) {
    return (
      <div 
        className="animate-slide-in-bottom"
      >
        {Content}
      </div>
    );
  }
  
  return Content;
}