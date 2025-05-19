import React from 'react';
import { motion } from 'framer-motion';
import { Building, MapPin, TrendingUp, TrendingDown, Users, Award, Check, FileCheck } from 'lucide-react';

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
  variant?: 'default' | 'detailed' | 'compact';
  className?: string;
  animate?: boolean;
}

export function CompetitorCard({
  competitor,
  variant = 'default',
  className = '',
  animate = true
}: CompetitorCardProps) {
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

  return (
    <motion.div
      className={`bg-white border border-[#E5E2D9] rounded-sm p-6 ${className} relative overflow-hidden hover:shadow-md transition-shadow`}
      initial={animate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="absolute -right-12 -bottom-12 w-36 h-36 rounded-full bg-[#CAB06B] opacity-5"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {ranking && (
          <div className="w-8 h-8 bg-[#F9F8F4] rounded-full flex items-center justify-center border border-[#E5E2D9]">
            <span className="text-[#CAB06B] font-semibold">{ranking}</span>
          </div>
        )}
        
        <div className="flex items-center space-x-2">
          <Building className="text-[#666666]" size={20} />
          <h3 className="text-lg font-medium text-[#333333]">{name}</h3>
        </div>
        
        {isPrimary ? (
          <span className="ml-auto text-xs font-medium py-1 px-2 bg-[#F5F5E6] text-[#CAB06B] rounded-sm">
            Primary
          </span>
        ) : (
          <span className="ml-auto text-xs font-medium py-1 px-2 bg-[#F9F8F4] text-[#666666] rounded-sm">
            Secondary
          </span>
        )}
      </div>
      
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <p className="flex items-center text-sm font-medium text-[#333333] mb-1">
            <MapPin className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
            Location & Profile
          </p>
          <p className="text-sm text-[#666666]">{location}</p>
          <p className="text-sm text-[#666666]">Built {builtYear} • {units} units</p>
          <p className="text-sm text-[#666666]">{distance} from The Novus</p>
        </div>
        
        {pricing && (
          <div>
            <p className="flex items-center text-sm font-medium text-[#333333] mb-1">
              <TrendingUp className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
              Pricing & Performance
            </p>
            {pricing.studio && <p className="text-sm text-[#666666]">Studio: {pricing.studio}</p>}
            {pricing.oneBr && <p className="text-sm text-[#666666]">1BR: {pricing.oneBr}</p>}
            {pricing.twoBr && <p className="text-sm text-[#666666]">2BR: {pricing.twoBr}</p>}
            {performance && (
              <p className="text-sm text-[#666666]">{performance.occupancy} occupied • {performance.concessions}</p>
            )}
          </div>
        )}
        
        {residentProfile && (
          <div>
            <p className="flex items-center text-sm font-medium text-[#333333] mb-1">
              <Users className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
              Resident Profile
            </p>
            {residentProfile.medianAge && <p className="text-sm text-[#666666]">Median Age: {residentProfile.medianAge}</p>}
            {residentProfile.income && <p className="text-sm text-[#666666]">Income: {residentProfile.income}</p>}
            {residentProfile.workFromHome && <p className="text-sm text-[#666666]">{residentProfile.workFromHome} work from home</p>}
            {residentProfile.demographics && <p className="text-sm text-[#666666]">{residentProfile.demographics}</p>}
          </div>
        )}
      </div>
      
      {/* Expanded Info (only for detailed variant) */}
      {variant === 'detailed' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {strengths && strengths.length > 0 && (
              <div>
                <p className="text-sm font-medium text-[#333333] mb-2 flex items-center">
                  <Award className="h-3.5 w-3.5 mr-1.5 text-[#60A561]" />
                  Key Strengths
                </p>
                <ul className="space-y-1">
                  {strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#60A561] mr-2 text-xs">•</span>
                      <span className="text-sm text-[#666666]">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {weaknesses && weaknesses.length > 0 && (
              <div>
                <p className="text-sm font-medium text-[#333333] mb-2 flex items-center">
                  <TrendingDown className="h-3.5 w-3.5 mr-1.5 text-[#E5826D]" />
                  Key Weaknesses
                </p>
                <ul className="space-y-1">
                  {weaknesses.map((weakness, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#E5826D] mr-2 text-xs">•</span>
                      <span className="text-sm text-[#666666]">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {recommendations && recommendations.length > 0 && (
            <div className="bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9]">
              <p className="text-sm font-medium text-[#333333] mb-2 flex items-center">
                <FileCheck className="h-3.5 w-3.5 mr-1.5 text-[#CAB06B]" />
                Competitive Positioning Recommendations
              </p>
              <ul className="space-y-1">
                {recommendations.map((recommendation, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-[#CAB06B] mr-2 text-xs">•</span>
                    <span className="text-sm text-[#666666]">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      
      {/* Compact variant just shows the basic information */}
      {variant === 'compact' && (
        <div className="pt-2">
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            <span className="text-[#666666] flex items-center">
              <Check size={12} className="text-[#CAB06B] mr-1" /> Built {builtYear}
            </span>
            <span className="text-[#666666] flex items-center">
              <Check size={12} className="text-[#CAB06B] mr-1" /> {units} units
            </span>
            {performance && (
              <>
                <span className="text-[#666666] flex items-center">
                  <Check size={12} className="text-[#CAB06B] mr-1" /> {performance.occupancy} occupied
                </span>
                <span className="text-[#666666] flex items-center">
                  <Check size={12} className="text-[#CAB06B] mr-1" /> {performance.concessions}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
}