"use client"

import React from "react";
import { Montserrat } from "next/font/google";
import { BarChart2, LineChart, PieChart, Table } from "lucide-react";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

type ChartType = 'bar' | 'line' | 'pie' | 'table';

interface BlurredVisualizationProps {
  children?: React.ReactNode;
  title: string;
  description?: string;
  chartType?: ChartType;
  height?: string;
  sampleData?: boolean;
}

// Component that shows visualizations without blurring
export function BlurredVisualization({ 
  children, 
  title, 
  description,
  chartType = 'bar',
  height = "h-64",
  sampleData = true
}: BlurredVisualizationProps) {
  const getChartIcon = () => {
    switch(chartType) {
      case 'line':
        return <LineChart className="h-10 w-10 text-gray-400" />;
      case 'pie':
        return <PieChart className="h-10 w-10 text-gray-400" />;
      case 'table':
        return <Table className="h-10 w-10 text-gray-400" />;
      default:
        return <BarChart2 className="h-10 w-10 text-gray-400" />;
    }
  };

  return (
    <div className={`${height} border border-[#E5E2D9] rounded-sm p-6 bg-white relative overflow-hidden`}>
      {/* Title and description */}
      <div className="mb-4">
        <h3 className={`${headingFont.className} text-lg text-center text-[#333333] mb-1`}>{title}</h3>
        {description && (
          <p className={`${bodyFont.className} text-sm text-center text-[#666666]`}>{description}</p>
        )}
      </div>
      
      {/* Chart content - if provided */}
      {children ? (
        <div className="h-full pt-4">
          {children}
        </div>
      ) : (
        // Placeholder if no children
        <div className="flex items-center justify-center h-2/3">
          {getChartIcon()}
          
          {sampleData && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-6 bg-gray-200 rounded-sm`} 
                  style={{ 
                    height: `${Math.floor(Math.random() * 60) + 20}px`
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}