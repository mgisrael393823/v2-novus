import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Calendar } from 'lucide-react';

export interface TimelinePhase {
  title: string;
  subtitle?: string;
  timeframe: string;
  items: string[];
  icon?: React.ReactNode;
  status?: 'pending' | 'in-progress' | 'completed';
  accentColor?: string;
}

export interface TimelineProps {
  phases: TimelinePhase[];
  className?: string;
  orientation?: 'vertical' | 'horizontal';
}

export function Timeline({ 
  phases, 
  className = '',
  orientation = 'vertical' 
}: TimelineProps) {
  if (orientation === 'horizontal') {
    return <HorizontalTimeline phases={phases} className={className} />;
  }
  
  return (
    <div className={`space-y-6 ${className}`}>
      {phases.map((phase, index) => (
        <TimelineItem 
          key={index}
          phase={phase}
          isLast={index === phases.length - 1}
          index={index}
        />
      ))}
    </div>
  );
}

function TimelineItem({ phase, isLast, index }: { phase: TimelinePhase; isLast: boolean; index: number }) {
  const { title, subtitle, timeframe, items, icon, status, accentColor = '#CAB06B' } = phase;
  
  // Status icons
  const statusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="h-5 w-5 text-[#60A561]" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-[#CAB06B]" />;
      default:
        return <Calendar className="h-5 w-5 text-[#666666]" />;
    }
  };

  // Line color based on status
  const lineColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-[#60A561]';
      case 'in-progress':
        return 'bg-[#CAB06B]';
      default:
        return 'bg-[#E5E2D9]';
    }
  };

  return (
    <motion.div 
      className="relative flex"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute top-10 bottom-0 left-6 w-0.5 -ml-px z-0">
          <div className={`w-full h-full ${lineColor()}`}></div>
        </div>
      )}
      
      {/* Timeline marker */}
      <div className="flex-shrink-0 z-10">
        <div 
          className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg border-2`}
          style={{ backgroundColor: accentColor, borderColor: accentColor }}
        >
          {icon ? icon : index + 1}
        </div>
      </div>
      
      {/* Content */}
      <div className="ml-6 pb-8 w-full">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-medium text-[#333333]">{title}</h3>
          <div className="flex items-center">
            {statusIcon()}
            <span className="text-xs text-[#666666] ml-2">{timeframe}</span>
          </div>
        </div>
        
        {subtitle && (
          <p className="text-sm text-[#666666] mb-3">{subtitle}</p>
        )}
        
        <div className="mt-3 bg-[#F9F8F4] border border-[#E5E2D9] p-4 rounded-sm">
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-start"
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
              >
                <div 
                  className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                  style={{ backgroundColor: accentColor }}
                ></div>
                <span className="text-sm text-[#666666]">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function HorizontalTimeline({ phases, className = '' }: { phases: TimelinePhase[]; className?: string }) {
  return (
    <div className={`w-full overflow-x-auto ${className}`}>
      <div className="min-w-max">
        <div className="flex">
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              className={`flex-1 min-w-[250px] relative px-4 ${index !== phases.length - 1 ? 'border-r border-[#E5E2D9]' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Connecting line */}
              {index !== phases.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+15px)] right-0 h-0.5 bg-[#E5E2D9] z-0" />
              )}
              
              {/* Circle */}
              <div className="flex items-center justify-center mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg z-10"
                  style={{ backgroundColor: phase.accentColor || '#CAB06B' }}
                >
                  {phase.icon ? phase.icon : index + 1}
                </div>
              </div>
              
              <div className="text-center mb-3">
                <h3 className="text-base font-medium text-[#333333]">{phase.title}</h3>
                <p className="text-xs text-[#666666] mt-1">{phase.timeframe}</p>
              </div>
              
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] p-3 rounded-sm">
                <ul className="space-y-2">
                  {phase.items.map((item, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05, duration: 0.3 }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0"
                        style={{ backgroundColor: phase.accentColor || '#CAB06B' }}
                      ></div>
                      <span className="text-xs text-[#666666] text-left">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}