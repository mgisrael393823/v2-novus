"use client"

import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'muted';
  className?: string;
  text?: string;
  textPosition?: 'left' | 'right' | 'top' | 'bottom';
}

export function LoadingSpinner({
  size = 'md',
  color = 'primary',
  className = '',
  text,
  textPosition = 'right'
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
  }[size];

  const colorClasses = {
    primary: 'border-novus-gold-light border-t-novus-gold',
    white: 'border-white/30 border-t-white',
    muted: 'border-gray-200 border-t-gray-400',
  }[color];

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }[size];

  const textColorClasses = {
    primary: 'text-novus-gold',
    white: 'text-white',
    muted: 'text-text-muted',
  }[color];

  const content = (
    <>
      <div 
        className={cn(
          'animate-spin rounded-full',
          sizeClasses,
          colorClasses,
          className
        )} 
      />
      {text && (
        <span className={cn('font-medium', textSizeClasses, textColorClasses)}>
          {text}
        </span>
      )}
    </>
  );

  // Adjust layout based on text position
  const layoutClasses = text ? {
    left: 'flex flex-row-reverse items-center gap-3',
    right: 'flex flex-row items-center gap-3',
    top: 'flex flex-col-reverse items-center gap-2',
    bottom: 'flex flex-col items-center gap-2',
  }[textPosition] : '';

  return (
    <div className={layoutClasses}>
      {content}
    </div>
  );
}

interface LoadingOverlayProps {
  active: boolean;
  text?: string;
  spinnerSize?: 'sm' | 'md' | 'lg';
  className?: string;
  bgColor?: 'white' | 'dark' | 'transparent';
  zIndex?: number;
}

export function LoadingOverlay({
  active,
  text,
  spinnerSize = 'md',
  className = '',
  bgColor = 'white',
  zIndex = 50
}: LoadingOverlayProps) {
  if (!active) return null;

  const bgClasses = {
    white: 'bg-white/90',
    dark: 'bg-black/50',
    transparent: 'bg-transparent'
  }[bgColor];

  const textColor = bgColor === 'dark' ? 'white' : 'primary';

  return (
    <div 
      className={cn(
        'fixed inset-0 flex items-center justify-center',
        bgClasses,
        className
      )}
      style={{ zIndex }}
    >
      <LoadingSpinner 
        size={spinnerSize} 
        color={textColor} 
        text={text} 
        textPosition="bottom" 
      />
    </div>
  );
}