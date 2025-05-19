import React from "react";
import { motion } from "framer-motion";
import { BarChart, ChevronRight } from "lucide-react";

interface AbsorptionChartDataItem {
  name: string;
  percentage: number;
  color: string;
}

interface FinancialMetric {
  label: string;
  value: string;
}

interface AbsorptionChartProps {
  title: string;
  description?: string;
  data: AbsorptionChartDataItem[];
  financialMetrics?: FinancialMetric[];
  annotations?: string[];
  className?: string;
}

export function AbsorptionChart({
  title,
  description,
  data,
  financialMetrics,
  annotations,
  className = "",
}: AbsorptionChartProps) {
  return (
    <motion.div
      className={`bg-white border border-[#E5E2D9] rounded-sm p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg text-[#333333] font-medium mb-1">{title}</h3>
          {description && (
            <p className="text-sm text-[#666666]">{description}</p>
          )}
        </div>
        <BarChart className="text-[#CAB06B] h-6 w-6" />
      </div>

      <div className="relative bg-[#F9F8F4] p-4 rounded-sm border border-[#E5E2D9] min-h-[340px] mb-4">
        {/* Time markers */}
        <div className="absolute top-4 left-4 right-4">
          <div className="flex justify-between mb-2">
            <div className="text-xs text-[#555555]">Pre-Leasing</div>
            <div className="text-xs text-[#555555]">90 Days</div>
            <div className="text-xs text-[#555555]">180 Days</div>
            <div className="text-xs text-[#555555]">270 Days</div>
          </div>
          <div className="relative h-1 bg-[#E5E2D9] rounded-full mb-8 mt-1">
            <div className="absolute left-0 top-0 h-1 bg-[#CAB06B] rounded-full w-[25%]"></div>
            <div className="absolute left-[25%] top-0 h-1 bg-[#CAB06B] opacity-80 rounded-full w-[25%]"></div>
            <div className="absolute left-[50%] top-0 h-1 bg-[#CAB06B] opacity-60 rounded-full w-[25%]"></div>
            <div className="absolute left-[75%] top-0 h-1 bg-[#CAB06B] opacity-40 rounded-full w-[25%]"></div>
            <div className="absolute left-0 -top-1 w-3 h-3 rounded-full bg-white border border-[#CAB06B]"></div>
            <div className="absolute left-[25%] -top-1 w-3 h-3 rounded-full bg-white border border-[#CAB06B]"></div>
            <div className="absolute left-[50%] -top-1 w-3 h-3 rounded-full bg-white border border-[#CAB06B]"></div>
            <div className="absolute left-[75%] -top-1 w-3 h-3 rounded-full bg-white border border-[#CAB06B]"></div>
            <div className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-white border border-[#CAB06B]"></div>
          </div>
        </div>

        {/* Chart Content */}
        <div className="absolute bottom-4 left-4 right-4 top-20">
          <div className="space-y-4">
            {data.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-[#333333]">{item.name}</span>
                  <span className="text-xs font-medium text-[#333333]">{item.percentage}%</span>
                </div>
                <div className="h-8 w-full bg-[#F0EEE8] rounded-sm relative overflow-hidden">
                  <motion.div 
                    className="absolute top-0 left-0 bottom-0 rounded-sm flex items-center"
                    style={{ backgroundColor: item.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                  >
                    <span className="text-white text-xs font-medium pl-3 whitespace-nowrap">
                      {item.name} - {item.percentage}% Absorbed
                    </span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Financial Projections */}
          {financialMetrics && financialMetrics.length > 0 && (
            <motion.div 
              className="absolute top-0 right-0 bg-white p-4 rounded-sm border border-[#E5E2D9] w-48 shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <p className="text-xs font-medium text-[#333333] mb-3">Financial Projections</p>
              <div className="space-y-2">
                {financialMetrics.map((metric, idx) => (
                  <div key={idx} className="flex justify-between text-xs">
                    <span className="text-[#666666]">{metric.label}:</span>
                    <span className="text-[#333333] font-medium">{metric.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Annotations */}
      {annotations && annotations.length > 0 && (
        <div className="mt-4 text-sm text-[#666666] space-y-2">
          {annotations.map((note, idx) => (
            <motion.p 
              key={idx} 
              className="flex items-start"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.4 }}
            >
              <ChevronRight className="h-4 w-4 text-[#CAB06B] mr-1 flex-shrink-0 mt-0.5" />
              <span>{note}</span>
            </motion.p>
          ))}
        </div>
      )}
    </motion.div>
  );
}