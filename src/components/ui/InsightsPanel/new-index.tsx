import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  TrendingUp, 
  Award, 
  BarChart, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  ArrowUpRight,
  ExternalLink,
  ChevronDown, 
  ChevronUp, 
  Star,
  Zap,
  PieChart,
  BarChart2,
  LineChart
} from 'lucide-react';

export interface InsightItem {
  text: string;
  icon?: React.ReactNode;
  highlight?: boolean;
  category?: 'insight' | 'strength' | 'opportunity' | 'recommendation' | 'warning';
  impact?: 'high' | 'medium' | 'low';
  score?: number; // 0-100 for visualization
}

interface InsightsPanelProps {
  title: string;
  insights: InsightItem[];
  className?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'accent' | 'highlight' | 'cards' | 'dashboard';
  elevation?: 'flat' | 'raised';
  columns?: 1 | 2 | 3;
}

export function InsightsPanel({
  title,
  insights,
  className = '',
  icon,
  variant = 'default',
  elevation = 'flat',
  columns = 1
}: InsightsPanelProps) {
  const [expandedInsights, setExpandedInsights] = React.useState<{[key: number]: boolean}>({});
  
  const toggleInsight = (idx: number) => {
    setExpandedInsights({
      ...expandedInsights,
      [idx]: !expandedInsights[idx]
    });
  };
  
  const getBgColor = () => {
    switch (variant) {
      case 'accent':
        return 'bg-[#F5F5E6]';
      case 'highlight':
        return 'bg-[#F9F8F4] border-l-4 border-l-[#CAB06B] border-r border-t border-b';
      case 'cards':
        return 'bg-transparent';
      case 'dashboard':
        return 'bg-transparent';
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
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-[#E5826D]" />;
      default:
        return <Lightbulb className="h-4 w-4 text-[#CAB06B]" />;
    }
  };
  
  const getIconBackgroundColor = (category?: string) => {
    switch (category) {
      case 'strength':
        return 'bg-[#F5FBF5] border-[#D1E7D1]';
      case 'opportunity':
        return 'bg-[#F5F5E6] border-[#E5E2D9]';
      case 'recommendation':
        return 'bg-[#F5F5E6] border-[#E5E2D9]';
      case 'warning':
        return 'bg-[#FBF5F5] border-[#E7D1D1]';
      default:
        return 'bg-[#F9F8F4] border-[#E5E2D9]';
    }
  };
  
  const getIconColor = (category?: string) => {
    switch (category) {
      case 'strength':
        return 'text-[#60A561]';
      case 'opportunity':
        return 'text-[#CAB06B]';
      case 'recommendation':
        return 'text-[#CAB06B]';
      case 'warning':
        return 'text-[#E5826D]';
      default:
        return 'text-[#CAB06B]';
    }
  };
  
  const getImpactColor = (impact?: string) => {
    switch (impact) {
      case 'high':
        return 'text-[#60A561]';
      case 'medium':
        return 'text-[#CAB06B]';
      case 'low':
        return 'text-[#E5826D]';
      default:
        return 'text-[#999999]';
    }
  };
  
  const getImpactBgColor = (impact?: string) => {
    switch (impact) {
      case 'high':
        return 'bg-[#F5FBF5]';
      case 'medium':
        return 'bg-[#F5F5E6]';
      case 'low':
        return 'bg-[#FBF5F5]';
      default:
        return 'bg-[#F9F8F4]';
    }
  };
  
  const getImpactBorderColor = (impact?: string) => {
    switch (impact) {
      case 'high':
        return 'border-[#D1E7D1]';
      case 'medium':
        return 'border-[#E5E2D9]';
      case 'low':
        return 'border-[#E7D1D1]';
      default:
        return 'border-[#E5E2D9]';
    }
  };
  
  // Dashboard-style card layout
  if (variant === 'dashboard') {
    return (
      <div className={`${className}`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            {icon || <PieChart className="h-5 w-5 text-[#CAB06B]" />}
            <h4 className="text-lg font-medium text-[#333333]">{title}</h4>
          </div>
        </div>
        
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-4`}>
          {insights.map((insight, idx) => {
            const categoryIcon = insight.icon || getIconForCategory(insight.category);
            const chartIcon = insight.score !== undefined ? 
              <BarChart2 className="h-5 w-5 text-[#CAB06B]" /> : 
              insight.category === 'strength' ? 
                <LineChart className="h-5 w-5 text-[#60A561]" /> : 
                <PieChart className="h-5 w-5 text-[#CAB06B]" />;
                
            return (
              <motion.div
                key={idx}
                className={`border rounded-md overflow-hidden ${elevation === 'raised' ? 'shadow-sm' : ''} ${insight.highlight ? 'border-[#CAB06B]' : 'border-[#E5E2D9]'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
              >
                <div className={`p-4 flex items-center justify-between ${insight.highlight ? 'bg-[#F5F5E6]' : 'bg-[#F9F8F4]'}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${getIconBackgroundColor(insight.category)} border flex items-center justify-center`}>
                      {categoryIcon}
                    </div>
                    <p className={`text-sm font-medium ${getIconColor(insight.category)}`}>
                      {insight.category ? insight.category.charAt(0).toUpperCase() + insight.category.slice(1) : 'Insight'}
                    </p>
                  </div>
                  
                  {insight.impact && (
                    <span className={`text-xs px-2 py-1 rounded-full ${getImpactBgColor(insight.impact)} ${getImpactColor(insight.impact)} border ${getImpactBorderColor(insight.impact)}`}>
                      {insight.impact.toUpperCase()} IMPACT
                    </span>
                  )}
                </div>
                
                <div className="p-4">
                  <p className={`text-sm ${insight.highlight ? 'font-medium text-[#333333]' : 'text-[#666666]'} mb-3`}>
                    {insight.text}
                  </p>
                  
                  {insight.score !== undefined && (
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-[#999999]">Impact Score</span>
                        <span className={`text-xs font-medium ${
                          insight.score > 75 ? 'text-[#60A561]' : 
                          insight.score > 50 ? 'text-[#CAB06B]' : 
                          insight.score > 25 ? 'text-[#E5826D]' : 
                          'text-[#C3524A]'
                        }`}>
                          {insight.score}/100
                        </span>
                      </div>
                      <div className="h-2 bg-[#E5E2D9] rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            insight.score > 75 ? 'bg-[#60A561]' : 
                            insight.score > 50 ? 'bg-[#CAB06B]' : 
                            insight.score > 25 ? 'bg-[#E5826D]' : 
                            'bg-[#C3524A]'
                          }`}
                          style={{ width: `${insight.score}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  }
  
  // Card-based layout
  if (variant === 'cards') {
    return (
      <div className={`${className}`}>
        <div className="flex items-center gap-2 mb-4">
          {icon || <BarChart className="h-5 w-5 text-[#CAB06B]" />}
          <h4 className="text-lg font-medium text-[#333333]">{title}</h4>
        </div>
        
        <div className={`grid grid-cols-1 ${columns === 2 ? 'md:grid-cols-2' : columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : ''} gap-4`}>
          {insights.map((insight, idx) => (
            <motion.div
              key={idx}
              className={`border rounded-md overflow-hidden ${elevation === 'raised' ? 'shadow-sm' : ''} ${insight.highlight ? 'border-[#CAB06B]' : 'border-[#E5E2D9]'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-4">
                <div className="flex items-start mb-3">
                  <div className={`w-8 h-8 mr-3 rounded-full ${getIconBackgroundColor(insight.category)} border flex items-center justify-center flex-shrink-0`}>
                    {insight.icon || getIconForCategory(insight.category)}
                  </div>
                  <p className={`text-sm ${insight.highlight ? 'font-medium text-[#333333]' : 'text-[#666666]'}`}>
                    {insight.text}
                  </p>
                </div>
                
                <div className="flex justify-between items-center mt-2 pt-2 border-t border-[#E5E2D9]">
                  <span className={`text-xs ${getIconColor(insight.category)}`}>
                    {insight.category ? insight.category.charAt(0).toUpperCase() + insight.category.slice(1) : 'Insight'}
                  </span>
                  
                  {insight.impact && (
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getImpactBgColor(insight.impact)} ${getImpactColor(insight.impact)}`}>
                      {insight.impact.toUpperCase()}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Default panel layout with improvements
  return (
    <motion.div 
      className={`${getBgColor()} ${getElevation()} border border-[#E5E2D9] rounded-md p-6 ${className} relative overflow-hidden`}
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
      
      <ul className="space-y-4">
        {insights.map((insight, idx) => {
          const isExpanded = expandedInsights[idx] || false;
          const hasLongText = insight.text.length > 150;
          
          return (
            <motion.li 
              key={idx} 
              className={`flex items-start border border-[#E5E2D9] rounded ${
                insight.highlight ? 'bg-white' : 'bg-[#F9F8F4]'
              } p-3`}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + idx * 0.05, duration: 0.3 }}
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3 border border-[#E5E2D9] bg-white">
                {insight.icon || getIconForCategory(insight.category)}
              </div>
              
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <p className={`text-sm ${insight.highlight ? 'font-medium text-[#333333]' : 'text-[#666666]'} ${
                    hasLongText && !isExpanded ? 'line-clamp-2' : ''
                  }`}>
                    {insight.text}
                  </p>
                  
                  {insight.impact && (
                    <span className={`ml-2 flex-shrink-0 text-xs px-2 py-0.5 rounded-full ${getImpactBgColor(insight.impact)} ${getImpactColor(insight.impact)}`}>
                      {insight.impact}
                    </span>
                  )}
                </div>
                
                {/* Show toggle button for long text */}
                {hasLongText && (
                  <button 
                    className="text-xs text-[#CAB06B] hover:text-[#B69959] mt-1 flex items-center transition-colors"
                    onClick={() => toggleInsight(idx)}
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="h-3 w-3 mr-1" />
                        Show Less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-3 w-3 mr-1" />
                        Read More
                      </>
                    )}
                  </button>
                )}
                
                {/* Score visualization */}
                {insight.score !== undefined && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-[#999999]">Impact Score</span>
                      <span className={`font-medium ${
                        insight.score > 75 ? 'text-[#60A561]' : 
                        insight.score > 50 ? 'text-[#CAB06B]' : 
                        'text-[#E5826D]'
                      }`}>
                        {insight.score}/100
                      </span>
                    </div>
                    <div className="mt-1 h-1.5 bg-[#E5E2D9] rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${
                          insight.score > 75 ? 'bg-[#60A561]' : 
                          insight.score > 50 ? 'bg-[#CAB06B]' : 
                          'bg-[#E5826D]'
                        }`}
                        style={{ width: `${insight.score}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

export interface KeyAdvantageProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  score?: number;
  metric?: string;
  metricValue?: string;
  cta?: string;
  ctaAction?: () => void;
}

export function KeyAdvantage({
  title,
  description,
  icon,
  className = '',
  score,
  metric,
  metricValue,
  cta,
  ctaAction
}: KeyAdvantageProps) {
  return (
    <motion.div 
      className={`bg-white border border-[#E5E2D9] rounded-md p-5 hover:border-[#CAB06B] transition-colors ${className}`}
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
        <p className="text-sm text-[#666666] mb-4">{description}</p>
        
        {score !== undefined && (
          <div className="w-full mt-2 mb-3">
            <div className="flex justify-between items-center text-xs mb-1">
              <span className="text-[#999999]">Impact</span>
              <span className={`font-medium ${
                score > 75 ? 'text-[#60A561]' : 
                score > 50 ? 'text-[#CAB06B]' : 
                'text-[#E5826D]'
              }`}>
                {score}/100
              </span>
            </div>
            <div className="h-1.5 bg-[#F9F8F4] rounded-full overflow-hidden border border-[#E5E2D9]">
              <div 
                className={`h-full ${
                  score > 75 ? 'bg-[#60A561]' : 
                  score > 50 ? 'bg-[#CAB06B]' : 
                  'bg-[#E5826D]'
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {metric && metricValue && (
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex flex-col items-center bg-[#F9F8F4] rounded-md px-3 py-2 min-w-20">
              <span className="text-xs text-[#999999]">{metric}</span>
              <span className="text-lg font-medium text-[#CAB06B]">{metricValue}</span>
            </div>
          </div>
        )}
        
        {cta && (
          <button 
            className="text-xs flex items-center text-[#CAB06B] hover:text-[#B69959] transition-colors"
            onClick={ctaAction}
          >
            {cta}
            <ArrowUpRight className="h-3 w-3 ml-1" />
          </button>
        )}
      </div>
    </motion.div>
  );
}