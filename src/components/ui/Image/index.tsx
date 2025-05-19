"use client"

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface AspectRatioProps {
  ratio?: number;
  className?: string;
  children: React.ReactNode;
}

export function AspectRatio({
  ratio = 16 / 9,
  className,
  children,
}: AspectRatioProps) {
  return (
    <div
      className={cn('relative w-full', className)}
      style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
}

export interface ImageProps extends Omit<NextImageProps, 'alt'> {
  alt: string;
  aspectRatio?: number;
  className?: string;
  fill?: boolean;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  overlay?: React.ReactNode;
  caption?: string;
  variant?: 'default' | 'bordered' | 'shadow';
}

export function Image({
  alt,
  aspectRatio,
  className,
  fill = false,
  rounded = 'none',
  overlay,
  caption,
  variant = 'default',
  ...props
}: ImageProps) {
  const roundedClass = {
    'none': '',
    'sm': 'rounded-sm',
    'md': 'rounded-md',
    'lg': 'rounded-lg',
    'full': 'rounded-full',
  }[rounded];

  const variantClass = {
    'default': '',
    'bordered': 'border border-novus-border',
    'shadow': 'shadow-md',
  }[variant];

  const imageComponent = (
    <NextImage
      className={cn(
        'object-cover',
        roundedClass,
        variantClass,
        className
      )}
      alt={alt}
      {...props}
    />
  );

  if (fill) {
    return (
      <div className="relative w-full h-full">
        {imageComponent}
        {overlay && (
          <div className="absolute inset-0 z-10">
            {overlay}
          </div>
        )}
        {caption && (
          <div className="mt-2 text-xs text-text-muted">
            {caption}
          </div>
        )}
      </div>
    );
  }

  if (aspectRatio) {
    return (
      <div className="w-full">
        <AspectRatio ratio={aspectRatio}>
          {imageComponent}
          {overlay && (
            <div className="absolute inset-0 z-10">
              {overlay}
            </div>
          )}
        </AspectRatio>
        {caption && (
          <div className="mt-2 text-xs text-text-muted">
            {caption}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="relative">
        {imageComponent}
        {overlay && (
          <div className="absolute inset-0 z-10">
            {overlay}
          </div>
        )}
      </div>
      {caption && (
        <div className="mt-2 text-xs text-text-muted">
          {caption}
        </div>
      )}
    </div>
  );
}