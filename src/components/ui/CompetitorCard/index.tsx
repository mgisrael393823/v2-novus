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
      <div className="flex items-center justify-start gap-3 mb-6 pb-4 border-b border-[#e2e8f0]">
        {ranking && (
          <div className="w-10 h-10 bg-[#F5F5E6] rounded-full flex items-center justify-center border-2 border-[#CAB06B]">
            <span className="text-[#CAB06B] font-bold text-lg">{ranking}</span>
          </div>
        )}
        
        <div className="inline-flex items-center space-x-3">
          <Building className="text-[#2C5282] flex-shrink-0" size={24} />
          <h3 className="text-2xl font-semibold text-[#2C5282] leading-none my-auto">
            {name}
          </h3>
        </div>
        
        {isPrimary ? (
          <span className="ml-auto text-sm font-medium py-1.5 px-3 bg-[#F5F5E6] text-[#CAB06B] rounded-sm border border-[#CAB06B] border-opacity-30 flex items-center">
            Primary
          </span>
        ) : (
          <span className="ml-auto text-sm font-medium py-1.5 px-3 bg-[#F9F8F4] text-[#666666] rounded-sm border border-[#E5E2D9] flex items-center">
            Secondary
          </span>
        )}
      </div>
      
      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="h-full">
          <div className="h-full pb-4 border-b border-[#e2e8f0] bg-white p-4 rounded-sm">
            <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
              <MapPin className="h-5 w-5 mr-2.5 text-[#2C5282] flex-shrink-0" />
              <span>Location & Profile</span>
            </p>
            <div className="space-y-2">
              <p className="text-sm text-[#4A5568]">{location}</p>
              <p className="text-sm text-[#4A5568]">Built {builtYear} • {units} units</p>
              <p className="text-sm text-[#4A5568]">{distance} from The Novus</p>
            </div>
          </div>
        </div>
        
        {pricing && (
          <div className="h-full">
            <div className="h-full pb-4 border-b border-[#e2e8f0] bg-[#f9fafb] p-4 rounded-sm">
              <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
                <TrendingUp className="h-5 w-5 mr-2.5 text-[#2C5282] flex-shrink-0" />
                <span>Pricing & Performance</span>
              </p>
              <div className="space-y-2">
                {pricing.studio && <p className="text-sm text-[#4A5568]">Studio: {pricing.studio}</p>}
                {pricing.oneBr && <p className="text-sm text-[#4A5568]">1BR: {pricing.oneBr}</p>}
                {pricing.twoBr && <p className="text-sm text-[#4A5568]">2BR: {pricing.twoBr}</p>}
                {performance && (
                  <p className="text-sm text-[#4A5568] mt-2">{performance.occupancy} occupied • {performance.concessions}</p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {residentProfile && (
          <div className="h-full">
            <div className="h-full pb-4 border-b border-[#e2e8f0] bg-white p-4 rounded-sm">
              <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
                <Users className="h-5 w-5 mr-2.5 text-[#2C5282] flex-shrink-0" />
                <span>Resident Profile</span>
              </p>
              <div className="space-y-2">
                {residentProfile.medianAge && <p className="text-sm text-[#4A5568]">Median Age: {residentProfile.medianAge}</p>}
                {residentProfile.income && <p className="text-sm text-[#4A5568]">Income: {residentProfile.income}</p>}
                {residentProfile.workFromHome && <p className="text-sm text-[#4A5568]">{residentProfile.workFromHome} work from home</p>}
                {residentProfile.demographics && <p className="text-sm text-[#4A5568]">{residentProfile.demographics}</p>}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Expanded Info (only for detailed variant) */}
      {variant === 'detailed' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {strengths && strengths.length > 0 && (
              <div className="h-full">
                <div className="h-full pb-4 border-b border-[#e2e8f0] bg-white p-4 rounded-sm">
                  <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
                    <Award className="h-5 w-5 mr-2.5 text-[#60A561] flex-shrink-0" />
                    <span>Key Strengths</span>
                  </p>
                  <ul className="space-y-3">
                    {strengths.map((strength, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#60A561] mr-3 text-lg font-bold">•</span>
                        <span className="text-sm text-[#4A5568]">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {weaknesses && weaknesses.length > 0 && (
              <div className="h-full">
                <div className="h-full pb-4 border-b border-[#e2e8f0] bg-[#f9fafb] p-4 rounded-sm">
                  <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
                    <TrendingDown className="h-5 w-5 mr-2.5 text-[#E5826D] flex-shrink-0" />
                    <span>Key Weaknesses</span>
                  </p>
                  <ul className="space-y-3">
                    {weaknesses.map((weakness, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#E5826D] mr-3 text-lg font-bold">•</span>
                        <span className="text-sm text-[#4A5568]">{weakness}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
          
          {recommendations && recommendations.length > 0 && (
            <div className="bg-[#FFFDF5] p-6 rounded-sm border border-[#CAB06B] border-opacity-30 shadow-sm">
              <p className="flex items-center text-[18px] font-semibold text-[#2C5282] mb-3">
                <FileCheck className="h-5 w-5 mr-2.5 text-[#CAB06B] flex-shrink-0" />
                <span>Competitive Positioning Recommendations</span>
              </p>
              <ul className="space-y-3">
                {recommendations.map((recommendation, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-[#CAB06B] mr-3 text-lg font-bold flex-shrink-0 leading-none">→</span>
                    <span className="text-sm text-[#4A5568] font-medium">{recommendation}</span>
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