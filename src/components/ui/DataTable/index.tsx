import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

// Define types for our data
export interface DataTableColumn {
  key: string;
  header: string;
  align?: 'left' | 'center' | 'right';
  format?: (value: any) => React.ReactNode;
  highlight?: boolean;
}

export interface DataTableRow {
  id: string | number;
  [key: string]: any;
}

export interface ComparisonDataItem {
  label: string;
  valueA: any;
  valueB: any;
  improvement: string;
  isPositive?: boolean;
}

interface DataTableProps {
  columns: DataTableColumn[];
  data: DataTableRow[];
  title?: string;
  caption?: string;
  className?: string;
  striped?: boolean;
  bordered?: boolean;
  compact?: boolean;
  hoverEffect?: boolean;
}

interface ComparisonTableProps {
  data: ComparisonDataItem[];
  titleA: string;
  titleB: string;
  title?: string;
  caption?: string;
  className?: string;
}

export function DataTable({
  columns,
  data,
  title,
  caption,
  className = '',
  striped = true,
  bordered = true,
  compact = false,
  hoverEffect = true,
}: DataTableProps) {
  const cellPadding = compact ? 'px-2 py-1' : 'px-4 py-3';
  const fontSize = compact ? 'text-xs' : 'text-sm';
  
  return (
    <motion.div 
      className={`bg-white ${bordered ? 'border border-[#E5E2D9]' : ''} rounded-sm overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {(title || caption) && (
        <div className="p-4 bg-[#F9F8F4] border-b border-[#E5E2D9]">
          {title && <h4 className="text-base font-medium text-[#333333]">{title}</h4>}
          {caption && <p className="text-sm text-[#666666] mt-1">{caption}</p>}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F9F8F4]">
              {columns.map((col, i) => (
                <th 
                  key={i}
                  className={`${cellPadding} ${fontSize} font-medium text-[#333333] ${bordered ? 'border-b border-[#E5E2D9]' : ''} text-${col.align || 'left'} ${col.highlight ? 'bg-[#F5F5E6]' : ''}`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={fontSize}>
            {data.map((row, rowIndex) => (
              <motion.tr 
                key={row.id}
                className={`
                  ${striped && rowIndex % 2 === 1 ? 'bg-[#F9F8F4]' : 'bg-white'}
                  ${hoverEffect ? 'hover:bg-[#F5F5E6] transition-colors duration-150' : ''}
                `}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.05, duration: 0.3 }}
              >
                {columns.map((col, colIndex) => (
                  <td 
                    key={colIndex} 
                    className={`${cellPadding} ${bordered ? 'border-b border-[#E5E2D9]' : ''} text-${col.align || 'left'} ${col.highlight ? 'bg-[#F5F5E6]' : ''}`}
                  >
                    {col.format ? col.format(row[col.key]) : row[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export function ComparisonTable({
  data,
  titleA,
  titleB,
  title,
  caption,
  className = '',
}: ComparisonTableProps) {
  return (
    <motion.div 
      className={`bg-white border border-[#E5E2D9] rounded-sm overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      {(title || caption) && (
        <div className="p-4 bg-[#F9F8F4] border-b border-[#E5E2D9]">
          {title && <h4 className="text-base font-medium text-[#333333]">{title}</h4>}
          {caption && <p className="text-sm text-[#666666] mt-1">{caption}</p>}
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#F9F8F4]">
              <th className="px-4 py-3 text-sm font-medium text-[#333333] border-b border-[#E5E2D9] text-left">Metric</th>
              <th className="px-4 py-3 text-sm font-medium text-[#333333] border-b border-[#E5E2D9] text-center">{titleA}</th>
              <th className="px-4 py-3 text-sm font-medium text-[#333333] border-b border-[#E5E2D9] text-center">{titleB}</th>
              <th className="px-4 py-3 text-sm font-medium text-[#333333] border-b border-[#E5E2D9] text-right">Improvement</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {data.map((row, rowIndex) => (
              <motion.tr 
                key={rowIndex}
                className={`${rowIndex % 2 === 1 ? 'bg-[#F9F8F4]' : 'bg-white'} hover:bg-[#F5F5E6] transition-colors duration-150`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: rowIndex * 0.05, duration: 0.3 }}
              >
                <td className="px-4 py-3 border-b border-[#E5E2D9] text-left font-medium text-[#333333]">{row.label}</td>
                <td className="px-4 py-3 border-b border-[#E5E2D9] text-center text-[#666666]">{row.valueA}</td>
                <td className="px-4 py-3 border-b border-[#E5E2D9] text-center text-[#666666]">{row.valueB}</td>
                <td className="px-4 py-3 border-b border-[#E5E2D9] text-right">
                  <div className="flex items-center justify-end">
                    {row.isPositive !== undefined && (
                      <div className="mr-1">
                        {row.isPositive ? (
                          <TrendingUp className="h-4 w-4 text-[#60A561]" />
                        ) : row.isPositive === false ? (
                          <TrendingDown className="h-4 w-4 text-[#E5826D]" />
                        ) : (
                          <Minus className="h-4 w-4 text-[#999999]" />
                        )}
                      </div>
                    )}
                    <span className={
                      row.isPositive ? "text-[#60A561] font-medium" : 
                      row.isPositive === false ? "text-[#E5826D] font-medium" : 
                      "text-[#CAB06B] font-medium"
                    }>
                      {row.improvement}
                    </span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}