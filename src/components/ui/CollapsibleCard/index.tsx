import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

export type CollapsibleCardProps = {
  title: string;
  items: string[];
  accent?: boolean;
  icon?: React.ReactNode;
  variant?: 'default' | 'strength' | 'weakness' | 'opportunity' | 'threat';
  initiallyExpanded?: boolean;
  className?: string;
};

export function CollapsibleCard({ 
  title, 
  items, 
  icon, 
  variant = 'default',
  initiallyExpanded = false,
  className = '' 
}: CollapsibleCardProps) {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);
  
  const toggleExpand = () => setIsExpanded(!isExpanded);

  // Show only first line of first bullet when collapsed
  const firstBulletPreview = items[0].split('.')[0] + '...';

  const variantStyles = {
    default: "bg-[#F9F8F4] border border-[#E5E2D9]",
    strength: "bg-gradient-to-br from-[#F9F8F4] to-[#F5F5E6] border border-[#E5E2D9] border-l-4 border-l-[#60A561]",
    weakness: "bg-gradient-to-br from-[#F9F8F4] to-[#FCFAF7] border border-[#E5E2D9] border-l-4 border-l-[#E5826D]",
    opportunity: "bg-gradient-to-br from-[#F9F8F4] to-[#F5F5E6] border border-[#E5E2D9] border-l-4 border-l-[#CAB06B]",
    threat: "bg-gradient-to-br from-[#F9F8F4] to-[#FCFAF7] border border-[#E5E2D9] border-l-4 border-l-[#A67BC2]",
  }[variant];

  const iconColor = {
    default: "text-[#666666]",
    strength: "text-[#60A561]",
    weakness: "text-[#E5826D]",
    opportunity: "text-[#CAB06B]",
    threat: "text-[#A67BC2]",
  }[variant];

  return (
    <motion.div 
      className={`${variantStyles} p-5 rounded-sm relative overflow-hidden transition-all duration-300 ${isExpanded ? 'shadow-md' : 'hover:shadow-sm'} ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Background decoration */}
      {variant !== 'default' && (
        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-current opacity-5"></div>
      )}
      
      <div 
        className="flex items-center justify-between cursor-pointer mb-3"
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          {icon && <div className={`mr-2 ${iconColor}`}>{icon}</div>}
          <h3 className="text-base uppercase tracking-wide text-[#333333] font-medium">{title}</h3>
        </div>
        <div className={`h-6 w-6 flex items-center justify-center rounded-full hover:bg-[#F0EEE8] transition-colors ${iconColor}`}>
          {isExpanded ? 
            <ChevronDown className="h-4 w-4" /> : 
            <ChevronRight className="h-4 w-4" />
          }
        </div>
      </div>
      
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="list-disc pl-5 space-y-2 text-sm text-[#666666]">
              {items.map((item, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.2 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <p className="text-sm text-[#666666] pl-5 italic">
            {firstBulletPreview}
          </p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}