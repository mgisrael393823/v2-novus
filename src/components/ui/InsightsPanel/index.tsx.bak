import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Award, BarChart, CheckCircle } from 'lucide-react';

export interface InsightItem {
  text: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  category?: 'insight' | 'strength' | 'opportunity' | 'recommendation';
}

interface InsightsPanelProps {
  title: string;
  insights: InsightItem[];
  className?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'highlight';
  elevation?: 'flat' | 'raised';
}

export function InsightsPanel({
  title,
  insights,
  className = '',
  icon,
  variant = 'default',
  elevation = 'flat'
}: InsightsPanelProps) {
  const getBgColor = () => {
    switch (variant) {
      case 'accent':
        return 'bg-[#F5F5E6]';
      case 'highlight':
        return 'bg-[#F9F8F4] border-l-4 border-l-[#CAB06B] border-r border-t border-b';
      default:
        return 'bg-[#F9F8F4]';
    }
  };

  const getElevation = () => {
    return elevation === 'raised' ? 'shadow-md' : '';
  };

  const getIconForCategory = (category?: string) => {
    if (!category) return <Lightbulb className="h-4 w-4 text-[#CAB06B]" />;
    
    switch (category) {
      case 'strength':
        return <Award className="h-4 w-4 text-[#60A561]" />;
      case 'opportunity':
        return <TrendingUp className="h-4 w-4 text-[#CAB06B]" />;
      case 'recommendation':
        return <CheckCircle className="h-4 w-4 text-[#CAB06B]" />;
      default:
        return <Lightbulb className="h-4 w-4 text-[#CAB06B]" />;
    }
  };

  return (
    <motion.div 
      className={`${getBgColor()} ${getElevation()} border border-[#E5E2D9] rounded-sm p-6 ${className} relative overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
      
      <div className="flex items-center gap-2 mb-4">
        {icon || <BarChart className="h-5 w-5 text-[#CAB06B]" />}
        <h4 className="text-lg font-medium text-[#333333]">{title}</h4>
      </div>
      
      <ul className="space-y-3">
        {insights.map((insight, idx) => (
          <motion.li 
            key={idx} 
            className="flex items-start"
            initial={{ opacity: 0, x: -5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
          >
            <span className="text-[#CAB06B] mr-2 mt-1 flex-shrink-0">
              {insight.icon || getIconForCategory(insight.category)}
            </span>
            <span className={`text-[#666666] ${insight.highlight ? 'font-medium' : ''}`}>
              {insight.text}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export interface KeyAdvantageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

export function KeyAdvantage({
  title,
  description,
  icon,
  className = ''
}: KeyAdvantageProps) {
  return (
    <motion.div 
      className={`bg-white border border-[#E5E2D9] rounded-sm p-5 hover:border-[#CAB06B] transition-colors ${className}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 rounded-full bg-[#F5F5E6] border border-[#CAB06B] flex items-center justify-center mb-3">
          {icon || <Award className="h-6 w-6 text-[#CAB06B]" />}
        </div>
        
        <h5 className="text-base font-medium text-[#333333] mb-2">{title}</h5>
        <p className="text-sm text-[#666666]">{description}</p>
      </div>
    </motion.div>
  );
}