import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export interface StatDisplayProps {
  label: string;
  value: string | number;
  description?: string;
  tooltip?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline' | 'highlight' | 'dark' | 'circular';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animate?: boolean;
  textAlign?: 'left' | 'center';
  trend?: 'up' | 'down' | 'neutral';
}

export function StatDisplay({
  label,
  value,
  description,
  tooltip,
  icon,
  variant = 'default',
  size = 'md',
  className = '',
  animate = true,
  textAlign = 'left',
  trend
}: StatDisplayProps) {
  // Variant base styles
  const variantStyles = {
    default: "bg-novus-cream border border-novus-border",
    accent: "bg-novus-cream-dark border border-novus-border",
    outline: "bg-white border border-novus-border",
    highlight: "bg-white border-l-4 border-novus-gold border-t border-r border-b border-novus-border",
    dark: "bg-text-primary border border-gray-700",
    circular: "bg-white border border-novus-border"
  }[variant];

  // Size-specific padding
  const boxSizeStyles = {
    sm: "p-4",
    md: "p-5",
    lg: "p-6"
  }[size];

  // Text sizes based on component size
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
    md: "text-sm",
    lg: "text-sm"
  }[size];

  // Text alignment styles
  const alignStyles = textAlign === 'center' ? 'text-center' : 'text-left';

  // Text color settings
  const labelColor = variant === 'dark' ? 'text-gray-300' : 'text-text-secondary';
  const valueColor = variant === 'dark' ? 'text-white' : 'text-text-primary';
  const descColor = variant === 'dark' ? 'text-gray-400' : 'text-text-secondary';
  const iconColor = variant === 'dark' ? 'text-white' : 'text-novus-gold';

  // Trend icons and colors
  const trendIcon = trend && {
    up: <TrendingUp size={16} />,
    down: <TrendingDown size={16} />,
    neutral: <ArrowRight size={16} />
  }[trend];

  const trendColor = trend && {
    up: "text-success",
    down: "text-error",
    neutral: "text-text-muted"
  }[trend];

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

  // Render circular variant differently
  const isCircular = variant === 'circular';

  return (
    <motion.div
      className={cn(
        "rounded-sm transition-all duration-300 hover:shadow-md relative overflow-hidden",
        variantStyles,
        boxSizeStyles,
        className
      )}
      initial={animate ? "hidden" : "visible"}
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
    >
      {/* Label and optional tooltip */}
      <div className={cn(
        "flex",
        textAlign === 'center' ? 'justify-center' : 'justify-between',
        "items-start mb-3",
        variant === 'circular' ? 'w-full text-center' : ''
      )}>
        <div className={cn(
          "flex items-center",
          textAlign === 'center' ? 'justify-center' : 'justify-start',
          variant === 'circular' ? 'w-full flex-col' : ''
        )}>
          {icon && !isCircular && (
            <div className="w-10 h-10 rounded-full bg-novus-cream flex items-center justify-center mr-3">
              <span className={iconColor}>
                {React.cloneElement(icon as React.ReactElement, { size: 18 })}
              </span>
            </div>
          )}
          <div className={cn(
            "flex items-center space-x-2",
            variant === 'circular' ? 'justify-center' : ''
          )}>
            <p className={cn(
              labelColor,
              labelSizeStyles, 
              "font-medium uppercase tracking-wide"
            )}>
              {label}
            </p>
            {tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="cursor-help inline-flex items-center">
                      <HelpCircle size={14} className="text-text-muted hover:text-text-secondary transition-colors" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    <p className="text-xs">{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
      </div>
      
      {/* Value display - either circular or standard */}
      {isCircular ? (
        <div className={cn("flex w-full", textAlign === 'center' ? 'justify-center' : 'justify-start', "mb-3")}>
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-novus-cream border-4 border-novus-gold overflow-hidden">
            <span className={cn(
              "font-bold text-center flex items-center justify-center",
              valueColor,
              value.toString().length > 5 ? "text-xl" : valueSizeStyles,
              "w-full h-full px-1 whitespace-nowrap"
            )}>
              {value}
            </span>
          </div>
        </div>
      ) : (
        <div className={cn("flex items-end", textAlign === 'center' ? 'justify-center' : 'justify-start', "mb-3")}>
          <p className={cn(
            "font-bold",
            valueColor,
            valueSizeStyles,
            "mr-2"
          )}>
            {value}
          </p>
          {trend && (
            <span className={cn(trendColor, "mb-1")}>
              {trendIcon}
            </span>
          )}
        </div>
      )}
      
      {/* Description text */}
      {description && (
        <div className={cn(
          textAlign === 'center' ? 'text-center' : 'text-left',
          variant === 'circular' ? 'w-full text-center' : ''
        )}>
          <p className={cn(
            descColor,
            descSizeStyles,
            "max-w-full break-words",
            variant === 'circular' ? 'text-center' : ''
          )}>
            {description}
          </p>
        </div>
      )}
      
      {/* Visual decorative elements */}
      {variant === 'accent' && (
        <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-novus-gold opacity-10"></div>
      )}
      {variant === 'highlight' && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-novus-gold opacity-30"></div>
      )}
      {isCircular && (
        <div className="flex items-center justify-center mt-2">
          <div className="h-1 w-16 bg-novus-gold rounded-full"></div>
        </div>
      )}
    </motion.div>
  );
}

// For compatibility with existing code
export interface LegacyStatDisplayProps {
  title: string;
  value: string;
  description?: string;
  trend?: "up" | "down" | "neutral";
}

export function LegacyStatDisplay({ 
  title, 
  value, 
  description, 
  trend 
}: LegacyStatDisplayProps) {
  return (
    <StatDisplay
      label={title}
      value={value}
      description={description}
      trend={trend as 'up' | 'down' | 'neutral'}
      variant="outline"
    />
  );
}