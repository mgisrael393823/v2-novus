import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  MapPin, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Award, 
  Check, 
  FileCheck, 
  Calendar, 
  Layers, 
  Home, 
  DollarSign, 
  Percent, 
  Clock, 
  User, 
  Briefcase, 
  ShieldCheck, 
  Eye, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';

export interface CompetitorProfile {
  name: string;
  location: string;
  builtYear: string;
  units: string;
  distance: string;
  pricing?: {
    studio?: string;
    oneBr?: string;
    twoBr?: string;
  };
  performance?: {
    occupancy: string;
    concessions: string;
  };
  residentProfile?: {
    medianAge?: string;
    income?: string;
    workFromHome?: string;
    demographics?: string;
  };
  strengths?: string[];
  weaknesses?: string[];
  recommendations?: string[];
  isPrimary?: boolean;
  ranking?: number;
}

interface CompetitorCardProps {
  competitor: CompetitorProfile;
  variant?: 'default' | 'detailed' | 'compact' | 'dashboard';
  className?: string;
  animate?: boolean;
}

// Helper function to convert string percentage to number
const parsePercentage = (str: string) => {
  if (!str) return 0;
  const match = str.match(/(\d+)%/);
  return match ? parseInt(match[1], 10) : 0;
};

// Helper function to extract price range
const extractPriceRange = (priceStr: string) => {
  if (!priceStr) return { min: 0, max: 0 };
  const prices = priceStr.replace(/[^0-9,-]/g, '').split('-');
  return {
    min: parseInt(prices[0], 10),
    max: prices.length > 1 ? parseInt(prices[1], 10) : parseInt(prices[0], 10)
  };
};

export function CompetitorCard({
  competitor,
  variant = 'default',
  className = '',
  animate = true
}: CompetitorCardProps) {
  const [expanded, setExpanded] = React.useState(false);
  
  const {
    name,
    location,
    builtYear,
    units,
    distance,
    pricing,
    performance,
    residentProfile,
    strengths,
    weaknesses,
    recommendations,
    isPrimary = true,
    ranking
  } = competitor;

  // Extract numerical values for visualizations
  const occupancyRate = performance ? parsePercentage(performance.occupancy) : 0;
  const workFromHomeRate = residentProfile?.workFromHome ? parsePercentage(residentProfile.workFromHome) : 0;
  
  // Extract numerical year for age calculation  
  const yearBuilt = parseInt(builtYear, 10);
  const propertyAge = new Date().getFullYear() - yearBuilt;
  
  // Create normalized pricing data for visualization
  const oneBrPricing = pricing?.oneBr ? extractPriceRange(pricing.oneBr) : { min: 0, max: 0 };

  // Dashboard card has a completely different layout focused on visual data
  if (variant === 'dashboard') {
    return (
      <motion.div
        className={`bg-white border border-[#E5E2D9] rounded-md shadow-sm ${className} overflow-hidden hover:shadow-md transition-all`}
        initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        <div className="bg-gradient-to-r from-[#F5F5E6] to-[#F9F8F4] border-b border-[#E5E2D9] p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {ranking && (
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center border border-[#CAB06B] shadow-sm">
                  <span className="text-[#CAB06B] font-semibold">{ranking}</span>
                </div>
              )}
              <div>
                <h3 className="text-lg font-medium text-[#333333]">{name}</h3>
                <p className="text-xs text-[#666666] flex items-center">
                  <MapPin className="h-3 w-3 text-[#999999] mr-1" />
                  {distance} from The Novus
                </p>
              </div>
            </div>
            
            {isPrimary ? (
              <span className="text-xs font-medium py-1 px-3 bg-[#F5F5E6] text-[#CAB06B] rounded-full border border-[#CAB06B] shadow-sm">
                Primary
              </span>
            ) : (
              <span className="text-xs font-medium py-1 px-3 bg-[#F5F5E6] text-[#666666] rounded-full border border-[#E5E2D9]">
                Secondary
              </span>
            )}
          </div>
        </div>
        
        <div className="p-5 grid grid-cols-2 gap-4">
          {/* Key metrics visualization row */}
          <div className="col-span-2 flex space-x-3 mb-2">
            {/* Occupancy Visualization */}
            <div className="flex-1 bg-[#F9F8F4] rounded-md p-3">
              <p className="text-xs text-[#666666] font-medium mb-1 flex items-center">
                <Percent className="h-3 w-3 mr-1 text-[#CAB06B]" />
                Occupancy
              </p>
              <div className="h-4 bg-[#E5E2D9] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${occupancyRate > 90 ? 'bg-[#60A561]' : occupancyRate > 80 ? 'bg-[#CAB06B]' : 'bg-[#E5826D]'}`}
                  style={{ width: `${occupancyRate}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-[#999999]">0%</span>
                <span className="text-xs font-medium">{performance?.occupancy || 'N/A'}</span>
                <span className="text-xs text-[#999999]">100%</span>
              </div>
            </div>
            
            {/* Age Visualization */}
            <div className="flex-1 bg-[#F9F8F4] rounded-md p-3">
              <p className="text-xs text-[#666666] font-medium mb-1 flex items-center">
                <Calendar className="h-3 w-3 mr-1 text-[#CAB06B]" />
                Property Age
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-semibold text-[#333333]">{propertyAge}</span>
                <span className="text-xs text-[#666666]">years</span>
              </div>
              <p className="text-xs text-[#999999] mt-1">Built {builtYear} • {units}</p>
            </div>
            
            {/* WFH Visualization */}
            <div className="flex-1 bg-[#F9F8F4] rounded-md p-3">
              <p className="text-xs text-[#666666] font-medium mb-1 flex items-center">
                <Briefcase className="h-3 w-3 mr-1 text-[#CAB06B]" />
                Work from Home
              </p>
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium inline-block py-1 text-[#333333]">
                    {residentProfile?.workFromHome || 'N/A'}
                  </div>
                </div>
                <div className="overflow-hidden h-2 text-xs flex rounded-full bg-[#E5E2D9]">
                  <div style={{ width: `${workFromHomeRate}%` }} className="bg-[#A8C0D1] h-full rounded-full"></div>
                </div>
              </div>
              <p className="text-xs text-[#999999] mt-1">of residents</p>
            </div>
          </div>
          
          {/* Pricing visualization */}
          <div className="col-span-2 bg-[#F9F8F4] rounded-md p-3">
            <p className="text-xs text-[#666666] font-medium mb-1 flex items-center">
              <DollarSign className="h-3 w-3 mr-1 text-[#CAB06B]" />
              Pricing & Concessions
            </p>
            <div className="grid grid-cols-3 gap-2">
              {pricing?.studio && (
                <div>
                  <p className="text-xs text-[#999999]">Studio</p>
                  <p className="text-sm font-medium">{pricing.studio}</p>
                </div>
              )}
              {pricing?.oneBr && (
                <div>
                  <p className="text-xs text-[#999999]">1BR</p>
                  <p className="text-sm font-medium">{pricing.oneBr}</p>
                </div>
              )}
              {pricing?.twoBr && (
                <div>
                  <p className="text-xs text-[#999999]">2BR</p>
                  <p className="text-sm font-medium">{pricing.twoBr}</p>
                </div>
              )}
            </div>
            <div className="mt-2 pt-2 border-t border-[#E5E2D9]">
              <div className="flex items-center justify-between">
                <p className="text-xs text-[#999999]">Concessions:</p>
                <p className="text-xs font-medium text-[#E5826D]">{performance?.concessions || 'None'}</p>
              </div>
            </div>
          </div>
          
          {/* Strengths & Weaknesses Summary */}
          {(strengths || weaknesses) && (
            <div className="col-span-2 bg-[#F9F8F4] rounded-md p-3">
              <p className="text-xs text-[#666666] font-medium mb-2 flex items-center">
                <ShieldCheck className="h-3 w-3 mr-1 text-[#CAB06B]" />
                Strengths & Weaknesses
              </p>
              <div className="flex space-x-2">
                {strengths && (
                  <div className="flex-1 bg-[#F5FBF5] border border-[#D1E7D1] rounded p-2">
                    <p className="text-xs text-[#60A561] font-medium mb-1 flex items-center">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      Strengths
                    </p>
                    <ul className="space-y-1 text-xs text-[#666666]">
                      {strengths.slice(0, 2).map((strength, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#60A561] mr-1 text-xs">•</span>
                          <span>{strength}</span>
                        </li>
                      ))}
                      {strengths.length > 2 && (
                        <li className="text-[#60A561] text-xs cursor-pointer hover:underline" onClick={() => setExpanded(!expanded)}>
                          +{strengths.length - 2} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                
                {weaknesses && (
                  <div className="flex-1 bg-[#FBF5F5] border border-[#E7D1D1] rounded p-2">
                    <p className="text-xs text-[#E5826D] font-medium mb-1 flex items-center">
                      <TrendingDown className="h-3 w-3 mr-1" />
                      Weaknesses
                    </p>
                    <ul className="space-y-1 text-xs text-[#666666]">
                      {weaknesses.slice(0, 2).map((weakness, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#E5826D] mr-1 text-xs">•</span>
                          <span>{weakness}</span>
                        </li>
                      ))}
                      {weaknesses.length > 2 && (
                        <li className="text-[#E5826D] text-xs cursor-pointer hover:underline" onClick={() => setExpanded(!expanded)}>
                          +{weaknesses.length - 2} more
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Action buttons */}
          <div className="col-span-2 flex justify-between items-center pt-2">
            <button 
              className="text-xs text-[#CAB06B] hover:text-[#B69959] flex items-center transition-colors"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-3 w-3 mr-1" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-3 w-3 mr-1" />
                  Show More
                </>
              )}
            </button>
            
            <button className="text-xs text-[#CAB06B] hover:text-[#B69959] flex items-center transition-colors">
              <Eye className="h-3 w-3 mr-1" />
              View Full Analysis
            </button>
          </div>
        </div>
        
        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-[#E5E2D9] p-5"
          >
            {/* Recommendations */}
            {recommendations && recommendations.length > 0 && (
              <div className="bg-[#F5F5E6] border border-[#E5E2D9] rounded-md p-4 mb-4">
                <p className="text-sm font-medium text-[#333333] mb-2 flex items-center">
                  <FileCheck className="h-4 w-4 mr-1.5 text-[#CAB06B]" />
                  Strategic Recommendations
                </p>
                <ul className="space-y-2">
                  {recommendations.map((recommendation, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="flex-shrink-0 rounded-full bg-[#CAB06B] text-white w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm text-[#666666]">{recommendation}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Resident profile details */}
            {residentProfile && (
              <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-md p-4">
                <p className="text-sm font-medium text-[#333333] mb-2 flex items-center">
                  <Users className="h-4 w-4 mr-1.5 text-[#CAB06B]" />
                  Detailed Resident Profile
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  {residentProfile.medianAge && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-3">
                        <User className="h-5 w-5 text-[#CAB06B]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#999999]">Median Age</p>
                        <p className="text-base font-medium text-[#333333]">{residentProfile.medianAge}</p>
                      </div>
                    </div>
                  )}
                  
                  {residentProfile.income && (
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-3">
                        <DollarSign className="h-5 w-5 text-[#CAB06B]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#999999]">Income Range</p>
                        <p className="text-base font-medium text-[#333333]">{residentProfile.income}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {residentProfile.demographics && (
                  <div className="mt-4 pt-4 border-t border-[#E5E2D9]">
                    <p className="text-xs text-[#999999] mb-1">Demographics</p>
                    <p className="text-sm text-[#666666]">{residentProfile.demographics}</p>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Original variants with improvements
  return (
    <motion.div
      className={`bg-white border border-[#E5E2D9] rounded-md p-6 ${className} relative overflow-hidden hover:shadow-md transition-shadow`}
      initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-[#CAB06B] opacity-5"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#E5E2D9]">
        {ranking && (
          <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center border border-[#CAB06B] shadow-sm">
            <span className="text-[#CAB06B] font-semibold">{ranking}</span>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <Building className="text-[#666666]" size={20} />
          <h3 className="text-lg font-medium text-[#333333]">{name}</h3>
        </div>
        
        {isPrimary ? (
          <span className="ml-auto text-xs font-medium py-1 px-3 bg-[#F5F5E6] text-[#CAB06B] rounded-full border border-[#CAB06B] shadow-sm">
            Primary
          </span>
        ) : (
          <span className="ml-auto text-xs font-medium py-1 px-3 bg-[#F9F8F4] text-[#666666] rounded-full border border-[#E5E2D9]">
            Secondary
          </span>
        )}
      </div>
      
      {/* Basic Info - Using grid with visual improvements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#F9F8F4] p-3 rounded-md">
          <p className="flex items-center text-sm font-medium text-[#333333] mb-2 pb-2 border-b border-[#E5E2D9]">
            <MapPin className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
            Location & Profile
          </p>
          <p className="text-sm text-[#666666] mb-1">{location}</p>
          <div className="flex items-center mb-1">
            <Calendar className="h-3.5 w-3.5 mr-1.5 text-[#999999]" />
            <p className="text-sm text-[#666666]">Built {builtYear}</p>
          </div>
          <div className="flex items-center mb-1">
            <Layers className="h-3.5 w-3.5 mr-1.5 text-[#999999]" />
            <p className="text-sm text-[#666666]">{units} units</p>
          </div>
          <div className="flex items-center">
            <Home className="h-3.5 w-3.5 mr-1.5 text-[#999999]" />
            <p className="text-sm text-[#666666]">{distance} from The Novus</p>
          </div>
        </div>
        
        {pricing && (
          <div className="bg-[#F9F8F4] p-3 rounded-md">
            <p className="flex items-center text-sm font-medium text-[#333333] mb-2 pb-2 border-b border-[#E5E2D9]">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
              Pricing & Performance
            </p>
            
            {/* Pricing with visual indicator */}
            <div className="space-y-2">
              {pricing.studio && (
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-[#999999]">Studio</p>
                    <p className="text-sm font-medium text-[#666666]">{pricing.studio}</p>
                  </div>
                </div>
              )}
              
              {pricing.oneBr && (
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-[#999999]">1BR</p>
                    <p className="text-sm font-medium text-[#666666]">{pricing.oneBr}</p>
                  </div>
                </div>
              )}
              
              {pricing.twoBr && (
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-[#999999]">2BR</p>
                    <p className="text-sm font-medium text-[#666666]">{pricing.twoBr}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Performance metrics */}
            {performance && (
              <div className="mt-3 pt-3 border-t border-[#E5E2D9]">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs text-[#999999]">Occupancy</p>
                  <div className="flex items-center">
                    <div className="w-16 h-2 bg-[#E5E2D9] rounded-full overflow-hidden mr-2">
                      <div 
                        style={{ width: `${parsePercentage(performance.occupancy)}%` }} 
                        className={`h-full ${occupancyRate > 90 ? 'bg-[#60A561]' : occupancyRate > 80 ? 'bg-[#CAB06B]' : 'bg-[#E5826D]'}`}
                      ></div>
                    </div>
                    <p className="text-sm font-medium text-[#666666]">{performance.occupancy}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[#999999]">Concessions</p>
                  <p className="text-sm font-medium text-[#E5826D]">{performance.concessions}</p>
                </div>
              </div>
            )}
          </div>
        )}
        
        {residentProfile && (
          <div className="bg-[#F9F8F4] p-3 rounded-md">
            <p className="flex items-center text-sm font-medium text-[#333333] mb-2 pb-2 border-b border-[#E5E2D9]">
              <Users className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
              Resident Profile
            </p>
            
            {residentProfile.medianAge && (
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-[#999999]">Median Age</p>
                <p className="text-sm font-medium text-[#666666]">{residentProfile.medianAge}</p>
              </div>
            )}
            
            {residentProfile.income && (
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-[#999999]">Income</p>
                <p className="text-sm font-medium text-[#666666]">{residentProfile.income}</p>
              </div>
            )}
            
            {residentProfile.workFromHome && (
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs text-[#999999]">Work from Home</p>
                <div className="flex items-center">
                  <div className="w-16 h-2 bg-[#E5E2D9] rounded-full overflow-hidden mr-2">
                    <div 
                      style={{ width: `${parsePercentage(residentProfile.workFromHome)}%` }} 
                      className="h-full bg-[#A8C0D1]"
                    ></div>
                  </div>
                  <p className="text-sm font-medium text-[#666666]">{residentProfile.workFromHome}</p>
                </div>
              </div>
            )}
            
            {residentProfile.demographics && (
              <div className="flex justify-between items-center">
                <p className="text-xs text-[#999999]">Demographics</p>
                <p className="text-sm font-medium text-[#666666]">{residentProfile.demographics}</p>
              </div>
            )}
          </div>
        )}
      </div>
      
      {/* Expanded Info (only for detailed variant) - Now with better visual separation */}
      {variant === 'detailed' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {strengths && strengths.length > 0 && (
              <div className="bg-[#F5FBF5] border border-[#D1E7D1] rounded-md p-4">
                <p className="text-sm font-medium text-[#60A561] mb-2 flex items-center">
                  <Award className="h-3.5 w-3.5 mr-1.5" />
                  Key Strengths
                </p>
                <ul className="space-y-2">
                  {strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E5F2E5] flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-[#60A561] text-xs font-medium">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-[#666666]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {weaknesses && weaknesses.length > 0 && (
              <div className="bg-[#FBF5F5] border border-[#E7D1D1] rounded-md p-4">
                <p className="text-sm font-medium text-[#E5826D] mb-2 flex items-center">
                  <TrendingDown className="h-3.5 w-3.5 mr-1.5" />
                  Key Weaknesses
                </p>
                <ul className="space-y-2">
                  {weaknesses.map((weakness, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#F2E5E5] flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-[#E5826D] text-xs font-medium">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-[#666666]">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {recommendations && recommendations.length > 0 && (
            <div className="bg-[#F5F5E6] border border-[#E5E2D9] rounded-md p-4 shadow-sm">
              <p className="text-sm font-medium text-[#CAB06B] mb-3 flex items-center">
                <FileCheck className="h-4 w-4 mr-1.5" />
                Competitive Positioning Recommendations
              </p>
              <ul className="space-y-3">
                {recommendations.map((recommendation, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white border border-[#CAB06B] flex items-center justify-center mr-3 mt-0.5 shadow-sm">
                      <span className="text-[#CAB06B] text-xs font-semibold">{idx + 1}</span>
                    </div>
                    <span className="text-sm text-[#666666]">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      
      {/* Compact variant with improved visual presentation */}
      {variant === 'compact' && (
        <div className="bg-[#F9F8F4] p-3 rounded-md mt-2">
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <span className="text-xs text-[#666666] flex items-center bg-white px-2 py-1 rounded-full border border-[#E5E2D9]">
              <Calendar className="h-3 w-3 text-[#CAB06B] mr-1" /> Built {builtYear}
            </span>
            <span className="text-xs text-[#666666] flex items-center bg-white px-2 py-1 rounded-full border border-[#E5E2D9]">
              <Layers className="h-3 w-3 text-[#CAB06B] mr-1" /> {units}
            </span>
            {performance && (
              <>
                <span className="text-xs text-[#666666] flex items-center bg-white px-2 py-1 rounded-full border border-[#E5E2D9]">
                  <Percent className="h-3 w-3 text-[#CAB06B] mr-1" /> {performance.occupancy}
                </span>
                <span className="text-xs text-[#666666] flex items-center bg-white px-2 py-1 rounded-full border border-[#E5E2D9]">
                  <Clock className="h-3 w-3 text-[#CAB06B] mr-1" /> {performance.concessions}
                </span>
              </>
            )}
          </div>
        </div>
      )}
      
      {/* Add button to toggle detailed view for non-detailed variants */}
      {variant !== 'detailed' && variant !== 'compact' && (
        <div className="mt-4 flex justify-end">
          <button 
            className="text-xs text-[#CAB06B] hover:text-[#B69959] flex items-center transition-colors"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? (
              <>
                <ChevronUp className="h-3 w-3 mr-1" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-3 w-3 mr-1" />
                Show More
              </>
            )}
          </button>
        </div>
      )}
      
      {/* Expanded content */}
      {variant !== 'detailed' && expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 pt-4 border-t border-[#E5E2D9]"
        >
          {/* Show details based on what's available */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {strengths && strengths.length > 0 && (
              <div className="bg-[#F5FBF5] border border-[#D1E7D1] rounded-md p-3">
                <p className="text-xs font-medium text-[#60A561] mb-2 flex items-center">
                  <Award className="h-3 w-3 mr-1.5" />
                  Key Strengths
                </p>
                <ul className="space-y-1">
                  {strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#60A561] mr-1 text-xs">•</span>
                      <span className="text-xs text-[#666666]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {weaknesses && weaknesses.length > 0 && (
              <div className="bg-[#FBF5F5] border border-[#E7D1D1] rounded-md p-3">
                <p className="text-xs font-medium text-[#E5826D] mb-2 flex items-center">
                  <TrendingDown className="h-3 w-3 mr-1.5" />
                  Key Weaknesses
                </p>
                <ul className="space-y-1">
                  {weaknesses.map((weakness, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#E5826D] mr-1 text-xs">•</span>
                      <span className="text-xs text-[#666666]">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}