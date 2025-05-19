import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, BarChart, Award, Check, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ComparisonTableColumn {
  key: string;
  header: string;
  width?: string;
  highlight?: boolean;
  position?: 'first' | 'last' | 'middle';
}

export interface ComparisonTableRow {
  feature: string;
  values: {
    [key: string]: {
      value: string | React.ReactNode;
      isHighlighted?: boolean;
      icon?: React.ReactNode;
    };
  };
  isSubheader?: boolean;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  columns: ComparisonTableColumn[];
  rows: ComparisonTableRow[];
  className?: string;
  variant?: 'default' | 'matrix';
  highlightProperty?: string;
  mobileScrollIndicator?: boolean;
}

export function ComparisonTable({
  title,
  description,
  columns,
  rows,
  className = '',
  variant = 'default',
  highlightProperty = 'The Novus',
  mobileScrollIndicator = true
}: ComparisonTableProps) {
  return (
    <motion.div 
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <h3 className="text-xl font-semibold text-[#333333] mb-2">{title}</h3>
      )}

      {description && (
        <p className="text-[#666666] mb-4">{description}</p>
      )}

      {mobileScrollIndicator && (
        <div className="md:hidden mb-2 text-sm text-[#999999] italic flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" />
          <span>Swipe horizontally to view more</span>
        </div>
      )}

      <div className="overflow-x-auto mb-4 pb-2">
        <table className="min-w-full bg-white border border-[#E5E2D9] rounded-sm">
          <thead>
            <tr className="bg-[#F9F8F4] border-b border-[#E5E2D9]">
              {columns.map((column, idx) => (
                <th 
                  key={idx} 
                  className={cn(
                    "px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider whitespace-nowrap",
                    column.highlight && "bg-[#F5F5E6]",
                    column.width ? column.width : "",
                    column.key === highlightProperty && "bg-[#F5F5E6]"
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-[#E5E2D9]">
            {rows.map((row, rowIdx) => (
              <tr 
                key={rowIdx} 
                className={cn(
                  rowIdx % 2 === 1 && !row.isSubheader ? "bg-[#F9F8F4]" : "bg-white",
                  row.isSubheader && "bg-[#F5F5E6] text-[#333333]"
                )}
              >
                <td 
                  className={cn(
                    "px-4 py-3 text-sm font-medium text-[#333333]",
                    row.isSubheader && "font-semibold"
                  )}
                >
                  {row.feature}
                </td>

                {columns.slice(1).map((column, colIdx) => {
                  const cellData = row.values[column.key];
                  
                  if (!cellData) {
                    return (
                      <td 
                        key={colIdx} 
                        className={cn(
                          "px-4 py-3 text-sm text-[#666666]",
                          column.highlight && "bg-[#F9F8F4]",
                          column.key === highlightProperty && "bg-[#F9F8F4]"
                        )}
                      >
                        -
                      </td>
                    );
                  }

                  return (
                    <td 
                      key={colIdx} 
                      className={cn(
                        "px-4 py-3 text-sm",
                        cellData.isHighlighted ? "font-bold text-[#CAB06B]" : "text-[#666666]",
                        column.highlight && "bg-[#F9F8F4]",
                        column.key === highlightProperty && "bg-[#F9F8F4]"
                      )}
                    >
                      {typeof cellData.value === 'string' ? (
                        <div className="flex items-center">
                          {cellData.icon && <span className="mr-1">{cellData.icon}</span>}
                          {cellData.value}
                        </div>
                      ) : (
                        cellData.value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export interface FeatureComparisonProps {
  title?: string;
  description?: string;
  properties: string[];
  features: {
    name: string;
    values: {
      [key: string]: string | {
        value: string;
        highlight?: boolean;
        icon?: React.ReactNode;
      };
    };
    category?: string;
  }[];
  className?: string;
  highlightProperty?: string;
}

export function FeatureComparisonTable({
  title,
  description,
  properties,
  features,
  className = '',
  highlightProperty = 'The Novus'
}: FeatureComparisonProps) {
  // Group features by category
  const featuresByCategory: { [key: string]: typeof features } = {};
  
  features.forEach(feature => {
    const category = feature.category || 'General';
    if (!featuresByCategory[category]) {
      featuresByCategory[category] = [];
    }
    featuresByCategory[category].push(feature);
  });

  // Create columns from properties
  const columns: ComparisonTableColumn[] = [
    { key: 'feature', header: 'Feature', width: 'w-1/4' },
    ...properties.map(property => ({
      key: property,
      header: property,
      highlight: property === highlightProperty
    }))
  ];

  // Create rows from features grouped by category
  const rows: ComparisonTableRow[] = [];
  
  Object.entries(featuresByCategory).forEach(([category, categoryFeatures]) => {
    // Add category header
    if (category !== 'General') {
      rows.push({
        feature: category,
        values: {},
        isSubheader: true
      });
    }
    
    // Add features in this category
    categoryFeatures.forEach(feature => {
      const row: ComparisonTableRow = {
        feature: feature.name,
        values: {}
      };
      
      properties.forEach(property => {
        const value = feature.values[property];
        
        if (typeof value === 'string') {
          row.values[property] = {
            value,
            isHighlighted: property === highlightProperty,
            icon: value.includes('✓') ? <Check className="h-3 w-3 text-[#CAB06B]" /> : undefined
          };
        } else if (value) {
          row.values[property] = {
            value: value.value,
            isHighlighted: value.highlight || property === highlightProperty,
            icon: value.icon || (value.value.includes('✓') ? <Check className="h-3 w-3 text-[#CAB06B]" /> : undefined)
          };
        } else {
          row.values[property] = { value: '-' };
        }
      });
      
      rows.push(row);
    });
  });

  return (
    <ComparisonTable
      title={title}
      description={description}
      columns={columns}
      rows={rows}
      className={className}
      highlightProperty={highlightProperty}
      mobileScrollIndicator={true}
    />
  );
}

export interface MatrixComparisonProps {
  title?: string;
  description?: string;
  properties: Array<{
    name: string;
    year?: string;
    units?: string;
    highlight?: boolean;
  }>;
  metrics: Array<{
    name: string;
    values: {
      [key: string]: string | {
        value: string;
        highlight?: boolean;
        rating?: number;
      };
    };
  }>;
  className?: string;
}

export function MatrixComparisonTable({
  title,
  description,
  properties,
  metrics,
  className = ''
}: MatrixComparisonProps) {
  // Create columns from properties
  const columns: ComparisonTableColumn[] = [
    { key: 'metric', header: 'Property', width: 'w-1/5' },
    ...properties.map(property => ({
      key: property.name,
      header: property.name,
      highlight: property.highlight
    }))
  ];

  // Create rows from metrics
  const rows: ComparisonTableRow[] = metrics.map(metric => {
    const row: ComparisonTableRow = {
      feature: metric.name,
      values: {}
    };
    
    properties.forEach(property => {
      const value = metric.values[property.name];
      
      if (typeof value === 'string') {
        row.values[property.name] = {
          value,
          isHighlighted: property.highlight
        };
      } else if (value) {
        if (value.rating) {
          // Create star rating display
          const stars = '★'.repeat(value.rating) + '☆'.repeat(5 - value.rating);
          row.values[property.name] = {
            value: stars,
            isHighlighted: value.highlight || property.highlight
          };
        } else {
          row.values[property.name] = {
            value: value.value,
            isHighlighted: value.highlight || property.highlight
          };
        }
      } else {
        row.values[property.name] = { value: '-' };
      }
    });
    
    return row;
  });

  // Property information row
  if (properties.some(p => p.year || p.units)) {
    const infoRow: ComparisonTableRow = {
      feature: 'Building Info',
      values: {},
      isSubheader: true
    };

    properties.forEach(property => {
      let infoString = '';
      if (property.year) infoString += `Built ${property.year}`;
      if (property.year && property.units) infoString += ' • ';
      if (property.units) infoString += `${property.units} units`;

      if (infoString) {
        infoRow.values[property.name] = {
          value: infoString,
          isHighlighted: property.highlight
        };
      } else {
        infoRow.values[property.name] = { value: '-' };
      }
    });

    rows.unshift(infoRow);
  }

  return (
    <ComparisonTable
      title={title}
      description={description}
      columns={columns}
      rows={rows}
      className={className}
      variant="matrix"
      mobileScrollIndicator={true}
    />
  );
}