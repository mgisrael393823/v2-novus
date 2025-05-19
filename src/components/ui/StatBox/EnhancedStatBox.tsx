import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export interface EnhancedStatBoxProps {
  label: string;
  value: string;
  description?: string;
  tooltip?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'muted' | 'highlight' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animateOnView?: boolean;
}

export function EnhancedStatBox({
  label,
  value,
  description,
  tooltip,
  icon,
  variant = 'default',
  size = 'md',
  className = '',
  animateOnView = true,
}: EnhancedStatBoxProps) {
  const variantStyles = {
    default: "bg-[#F9F8F4] border border-[#E5E2D9]",
    accent: "bg-[#F5F5E6] border border-[#E5E2D9]",
    muted: "bg-white border border-[#E5E2D9]",
    highlight: "bg-white border-l-4 border-[#CAB06B] border-t border-r border-b border-[#E5E2D9]",
    dark: "bg-[#333333] text-white border border-[#444444]",
  }[variant];

  const boxSizeStyles = {
    sm: "p-3",
    md: "p-4",
    lg: "p-5"
  }[size];

  const labelSizeStyles = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm"
  }[size];

  const valueSizeStyles = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl"
  }[size];

  const descSizeStyles = {
    sm: "text-xs",
    md: "text-xs",
    lg: "text-sm"
  }[size];

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div
      className={`rounded-sm ${variantStyles} ${boxSizeStyles} ${className} relative overflow-hidden transition-all duration-300 hover:shadow-md`}
      initial={animateOnView ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-2">
          <p className={`uppercase tracking-wide text-${variant === 'dark' ? 'gray-300' : '[#666666]'} ${labelSizeStyles} font-medium`}>
            {label}
          </p>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="cursor-help">
                    <HelpCircle size={14} className={`text-${variant === 'dark' ? 'gray-400' : '[#999999]'} hover:text-${variant === 'dark' ? 'white' : '[#666666]'} transition-colors`} />
                  </span>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  <p className="text-xs">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        {icon && (
          <div className={`text-${variant === 'dark' ? 'white' : '[#CAB06B]'}`}>
            {icon}
          </div>
        )}
      </div>
      
      <p className={`${valueSizeStyles} font-bold text-${variant === 'dark' ? 'white' : '[#333333]'} my-1`}>
        {value}
      </p>
      
      {description && (
        <p className={`${descSizeStyles} text-${variant === 'dark' ? 'gray-300' : '[#666666]'}`}>
          {description}
        </p>
      )}
      
      {/* Decorative element for visual interest */}
      {variant === 'accent' && (
        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#CAB06B] opacity-10"></div>
      )}
      {variant === 'highlight' && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#CAB06B] opacity-30"></div>
      )}
    </motion.div>
  );
}