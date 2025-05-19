"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface BlurredImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  priority?: boolean;
  quality?: number;
  fill?: boolean;
  sizes?: string;
  roundedCorners?: boolean;
}

export function BlurredImage({
  src,
  alt,
  width,
  height,
  className,
  placeholderColor = '#F9F8F4', // Default to novus-cream
  priority = false,
  quality = 85,
  fill = false,
  sizes,
  roundedCorners = false,
}: BlurredImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", roundedCorners && "rounded-sm", className)}>
      {isLoading && !priority && (
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{ backgroundColor: placeholderColor }}
        />
      )}
      
      <Image 
        src={src} 
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={cn(
          "transition-opacity duration-500",
          isLoading ? "opacity-0" : "opacity-100",
          roundedCorners && "rounded-sm"
        )}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        quality={quality}
        fill={fill}
        sizes={sizes}
      />
    </div>
  );
}

interface BlurredBackgroundProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  overlayOpacity?: number;
  overlayColor?: string;
  priority?: boolean;
  blurAmount?: number;
}

export function BlurredBackground({
  src,
  alt,
  children,
  className,
  overlayOpacity = 0.7,
  overlayColor = '#000000',
  priority = false,
  blurAmount = 8,
}: BlurredBackgroundProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder during loading */}
      {isLoading && !priority && (
        <div className="absolute inset-0 bg-novus-cream animate-pulse" />
      )}
      
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            "object-cover transition-opacity duration-500",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          style={{ filter: `blur(${blurAmount}px)` }}
          onLoad={() => setIsLoading(false)}
          priority={priority}
        />
      </div>
      
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}