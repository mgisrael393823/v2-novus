import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ProfileItem {
  label: string;
  value: string;
}

export interface ProfileDisplayProps {
  title: string;
  items: ProfileItem[];
  className?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  animate?: boolean;
}

export function ProfileDisplay({
  title,
  items,
  className = '',
  icon,
  variant = 'outline',
  animate = true,
}: ProfileDisplayProps) {
  // Variant styles
  const variantStyles = {
    default: "bg-[#F9F8F4] border border-[#E5E2D9]",
    accent: "bg-[#F5F5E6] border border-[#E5E2D9]",
    outline: "bg-white border border-[#E5E2D9]",
  }[variant];

  // Animation variants
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

  // Item animation variants with staggered delay
  const itemVariants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: 0.1 + i * 0.05, 
        duration: 0.3 
      } 
    })
  };

  return (
    <motion.div
      className={cn(
        "rounded-sm p-5 transition-all duration-300 hover:shadow-md relative overflow-hidden",
        variantStyles,
        className
      )}
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {/* Header with title */}
      <div className={cn(
        variant === 'accent' 
          ? "bg-gradient-to-r from-[#EBE8DF] to-[#F9F8F4] -mx-5 -mt-5 mb-5 p-4" 
          : "mb-4"
      )}>
        <h3 className="font-semibold text-[#333333] flex items-center">
          {icon && <span className="mr-2 text-[#CAB06B]">{icon}</span>}
          {title}
        </h3>
      </div>

      {/* Items list */}
      <ul className="space-y-3">
        {items.map((item, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-start"
            custom={idx}
            initial="hidden"
            variants={itemVariants}
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 rounded-full bg-[#CAB06B] mt-1.5 mr-2 flex-shrink-0"></div>
            <div className="flex flex-col sm:flex-row sm:items-center flex-wrap">
              <span className="text-sm text-[#333333] font-medium mr-2 whitespace-nowrap">
                {item.label}:
              </span>
              <span className="text-sm text-[#666666] break-words" style={{ wordBreak: 'break-word' }}>
                {item.value}
              </span>
            </div>
          </motion.li>
        ))}
      </ul>
      
      {/* Visual decoration */}
      <div className="flex items-center justify-center mt-4">
        <div className="h-1 w-16 bg-[#CAB06B] rounded-full"></div>
      </div>
      
      {/* Background decoration */}
      {variant === 'accent' && (
        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#CAB06B] opacity-10"></div>
      )}
    </motion.div>
  );
}