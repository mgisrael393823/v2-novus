"use client"

import React from "react";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

/**
 * Typography component to ensure consistent text styling across the site
 */

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'body-lg' | 'caption' | 'section-title' | 'highlight';
  className?: string;
  color?: 'primary' | 'secondary' | 'muted' | 'accent';
  wrap?: 'normal' | 'balance' | 'pretty' | 'break-words';
}

export function Text({
  children,
  variant = 'body',
  className = '',
  color = 'secondary',
  wrap = 'normal'
}: TextProps) {
  const colorStyles = {
    primary: "text-text-primary",
    secondary: "text-text-secondary",
    muted: "text-text-muted",
    accent: "text-novus-gold"
  }[color];

  const wrapClass = {
    normal: "",
    balance: "text-balance",
    pretty: "text-pretty",
    'break-words': "break-words-wrap"
  }[wrap];

  const variantStyles = {
    h1: "heading-1",
    h2: "heading-2",
    h3: "heading-3",
    h4: "heading-4",
    'body': "body-text",
    'body-lg': "body-text-lg",
    'caption': "caption",
    'section-title': "section-title",
    'highlight': "text-sm md:text-base font-medium"
  }[variant];

  const Component = 
    variant === 'h1' ? 'h1' :
    variant === 'h2' ? 'h2' :
    variant === 'h3' ? 'h3' :
    variant === 'h4' ? 'h4' :
    'p';

  return (
    <Component 
      className={cn(
        variantStyles, 
        colorStyles, 
        wrapClass,
        variant === 'h1' || variant === 'h2' || variant === 'h3' || variant === 'h4' 
          ? headingFont.className 
          : bodyFont.className,
        className
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Heading component for consistent heading styling
 */
interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
  wrap?: 'normal' | 'balance' | 'pretty';
}

export function Heading({
  children,
  level,
  className = '',
  wrap = 'balance'
}: HeadingProps) {
  const variant = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';
  
  return (
    <Text 
      variant={variant} 
      color="primary" 
      wrap={wrap}
      className={className}
    >
      {children}
    </Text>
  );
}

/**
 * StandardParagraph component for body text with consistent formatting
 */
interface ParagraphProps {
  children: React.ReactNode;
  size?: 'default' | 'large';
  className?: string;
  wrap?: 'normal' | 'pretty' | 'balance' | 'break-words';
}

export function Paragraph({
  children,
  size = 'default',
  className = '',
  wrap = 'pretty'
}: ParagraphProps) {
  return (
    <Text 
      variant={size === 'large' ? 'body-lg' : 'body'} 
      color="secondary"
      wrap={wrap}
      className={cn("mb-4", className)}
    >
      {children}
    </Text>
  );
}

/**
 * SectionTitle component for consistent section title styling
 */
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({
  children,
  className = ''
}: SectionTitleProps) {
  return (
    <Text 
      variant="section-title" 
      color="accent"
      className={className}
    >
      {children}
    </Text>
  );
}

/**
 * Caption component for small text
 */
interface CaptionProps {
  children: React.ReactNode;
  className?: string;
}

export function Caption({
  children,
  className = ''
}: CaptionProps) {
  return (
    <Text 
      variant="caption" 
      color="muted"
      className={className}
    >
      {children}
    </Text>
  );
}

/**
 * BulletList component for consistent list formatting
 */
interface BulletListProps {
  items: (string | React.ReactNode)[];
  className?: string;
  markerColor?: 'primary' | 'accent';
}

export function BulletList({
  items,
  className = '',
  markerColor = 'accent'
}: BulletListProps) {
  const markerStyle = markerColor === 'accent' ? "text-novus-gold" : "text-text-primary";
  
  return (
    <ul className={cn("bullet-list", className)}>
      {items.map((item, index) => (
        <li key={index} className="bullet-list-item">
          <span className={cn("bullet-marker", markerStyle)}>•</span>
          {typeof item === 'string' ? (
            <Text variant="body" wrap="pretty">{item}</Text>
          ) : (
            item
          )}
        </li>
      ))}
    </ul>
  );
}

/**
 * Section component for consistent section spacing
 * 
 * NOTE: This is deprecated in favor of the Section component in Container/index.tsx
 * Use that component instead for new development.
 */
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  divider?: boolean;
  animate?: boolean;
  icon?: React.ReactNode;
  subtitle?: string;
  color?: string;
  badge?: string;
  centered?: boolean;
}

export function Section({
  children,
  className = '',
  title,
  divider = false,
  animate,
  icon,
  subtitle,
  color,
  badge,
  centered
}: SectionProps) {
  return (
    <section 
      className={cn(
        "section",
        divider && "section-divider",
        className
      )}
    >
      {title && (
        <Heading level={2} className="mb-5">{title}</Heading>
      )}
      {children}
    </section>
  );
}