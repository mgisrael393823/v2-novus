import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string;
  centered?: boolean;
  divider?: boolean;
  className?: string;
  animate?: boolean;
  id?: string;
  color?: 'default' | 'light' | 'accent';
}

export function Section({
  children,
  title,
  subtitle,
  icon,
  badge,
  centered = false,
  divider = false,
  className = '',
  animate = true,
  id,
  color = 'default',
}: SectionProps) {
  // Define background colors based on color prop
  const bgColors = {
    default: '',
    light: 'bg-[#F9F8F4]',
    accent: 'bg-[#F5F5E6]',
  };
  
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={`mb-24 ${divider ? 'border-t-2 border-[#E5E2D9] pt-8' : 'pt-0'} ${bgColors[color]} ${className}`}
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {/* Section header */}
      {(title || subtitle || badge) && (
        <motion.div className={`mb-8 ${centered ? 'text-center' : ''}`} variants={variants}>
          {badge && (
            <motion.div 
              className="inline-block mb-3 px-3 py-1 bg-[#F5F5E6] rounded-sm text-xs font-medium text-[#CAB06B] uppercase tracking-wider"
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.3, ease: "easeOut" }
                }
              }}
            >
              {badge}
            </motion.div>
          )}
          
          {title && (
            <motion.div 
              className="flex items-center"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" }
                }
              }}
            >
              {icon && <div className="mr-3 text-[#CAB06B]">{icon}</div>}
              <h2 className={`text-2xl font-semibold text-[#333333] ${centered ? 'mx-auto' : ''}`}>
                {title}
              </h2>
            </motion.div>
          )}
          
          {subtitle && (
            <motion.p 
              className="text-[#666666] mt-2 max-w-3xl"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4, delay: 0.1, ease: "easeOut" }
                }
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      )}
      
      {/* Section content */}
      <div className={centered ? 'text-center' : ''}>
        {children}
      </div>
    </motion.section>
  );
}