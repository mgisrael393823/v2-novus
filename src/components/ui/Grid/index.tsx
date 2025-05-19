"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface GridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
  withAnimation?: boolean;
}

export function Grid({
  children,
  columns = 2,
  gap = 'md',
  className = '',
  withAnimation = false
}: GridProps) {
  const columnsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
  }[columns];
  
  const gapClass = {
    sm: "gap-2 md:gap-3",
    md: "gap-4 md:gap-6",
    lg: "gap-6 md:gap-8"
  }[gap];
  
  const Content = (
    <div 
      className={cn(
        "grid",
        columnsClass,
        gapClass,
        className
      )}
    >
      {children}
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

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
  withAnimation?: boolean;
  staggered?: boolean;
}

export function CardGrid({
  children,
  columns = 3,
  gap = 'md',
  className = '',
  withAnimation = false,
  staggered = false
}: CardGridProps) {
  return (
    <Grid 
      columns={columns} 
      gap={gap} 
      className={className}
      withAnimation={withAnimation && !staggered}
    >
      {staggered && withAnimation ? (
        React.Children.map(children, (child, index) => (
          <div 
            className="animate-slide-in-bottom" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {child}
          </div>
        ))
      ) : (
        children
      )}
    </Grid>
  );
}

interface GridItemProps {
  children: React.ReactNode;
  colSpan?: 1 | 2 | 3 | 4;
  className?: string;
}

export function GridItem({
  children,
  colSpan = 1,
  className = ''
}: GridItemProps) {
  const colSpanClass = {
    1: "",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4"
  }[colSpan];
  
  return (
    <div 
      className={cn(
        colSpanClass,
        className
      )}
    >
      {children}
    </div>
  );
}