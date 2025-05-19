"use client"

import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  separator?: string;
  decimals?: number;
  decimal?: string;
  prefix?: string;
  suffix?: string;
  className?: string;
  onComplete?: () => void;
  easing?: 'linear' | 'easeOut' | 'easeInOut';
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  separator = ',',
  decimals = 0,
  decimal = '.',
  prefix = '',
  suffix = '',
  className = '',
  onComplete,
  easing = 'easeOut'
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number | null>(null);
  const isMounted = useRef(true);

  // Format the number with separators, decimals, prefix and suffix
  const formatNumber = (value: number): string => {
    const fixedValue = value.toFixed(decimals);
    const [integerPart, decimalPart] = fixedValue.split('.');
    
    // Format the integer part with separators
    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    
    // Combine the parts
    const formattedNumber = decimals > 0 
      ? `${formattedInteger}${decimal}${decimalPart}` 
      : formattedInteger;
    
    return `${prefix}${formattedNumber}${suffix}`;
  };

  // Different easing functions
  const getEasedValue = (progress: number, easingType: string): number => {
    switch (easingType) {
      case 'linear':
        return progress;
      case 'easeOut':
        return 1 - Math.pow(1 - progress, 3);
      case 'easeInOut':
        return progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      default:
        return progress;
    }
  };

  useEffect(() => {
    if (delay > 0) {
      const delayTimeout = setTimeout(() => {
        startAnimation();
      }, delay);
      
      return () => clearTimeout(delayTimeout);
    } else {
      startAnimation();
    }

    function startAnimation() {
      if (!isMounted.current) return;
      
      const animate = (timestamp: number) => {
        if (!isMounted.current) return;
        
        if (startTimeRef.current === null) {
          startTimeRef.current = timestamp;
        }
        
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = getEasedValue(progress, easing);
        const currentValue = start + (end - start) * easedProgress;
        
        setCount(currentValue);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          // Ensure we end exactly at the target value
          setCount(end);
          if (onComplete) onComplete();
        }
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      isMounted.current = false;
      cancelAnimationFrame(animationRef.current);
    };
  }, [start, end, duration, delay, easing, onComplete]);

  return (
    <span className={cn("tabular-nums", className)}>
      {formatNumber(count)}
    </span>
  );
}