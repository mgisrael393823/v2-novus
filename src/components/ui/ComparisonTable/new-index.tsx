import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronRight, 
  BarChart, 
  Award, 
  Check, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  Filter, 
  Sliders, 
  Maximize, 
  Minimize, 
  Eye, 
  EyeOff,
  PieChart
} from 'lucide-react';
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
      score?: number; // Value from 0-100 for visual representation
      raw?: number | string; // Raw value for sorting and filtering
    };
  };
  isSubheader?: boolean;
  category?: string;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  columns: ComparisonTableColumn[];
  rows: ComparisonTableRow[];
  className?: string;
  variant?: 'default' | 'matrix' | 'cards' | 'visual';
  highlightProperty?: string;
  mobileScrollIndicator?: boolean;
  filterOptions?: boolean;
  sortOptions?: boolean;
  expandable?: boolean;
}

export function ComparisonTable({
  title,
  description,
  columns,
  rows,
  className = '',
  variant = 'default',
  highlightProperty = 'The Novus',
  mobileScrollIndicator = true,
  filterOptions = false,
  sortOptions = false,
  expandable = false
}: ComparisonTableProps) {
  const [collapsed, setCollapsed] = useState<{[key: string]: boolean}>({});
  const [visibleColumns, setVisibleColumns] = useState<string[]>(columns.map(c => c.key));
  const [expandedView, setExpandedView] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<{ column: string, direction: 'asc' | 'desc' } | null>(null);
  
  // Extract all available categories from rows
  const categories = [...new Set(rows.filter(r => r.category).map(r => r.category as string))];
  
  // Toggle category collapse state
  const toggleCategory = (category: string) => {
    setCollapsed({
      ...collapsed,
      [category]: !collapsed[category]
    });
  };
  
  // Toggle column visibility
  const toggleColumn = (key: string) => {
    if (visibleColumns.includes(key)) {
      if (visibleColumns.length > 2) { // Always keep at least 2 columns (feature + 1 data column)
        setVisibleColumns(visibleColumns.filter(k => k !== key));
      }
    } else {
      setVisibleColumns([...visibleColumns, key]);
    }
  };
  
  // Toggle filter
  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };
  
  // Handle sorting
  const handleSort = (column: string) => {
    if (sortBy?.column === column) {
      // Toggle direction if already sorting by this column
      setSortBy({ 
        column, 
        direction: sortBy.direction === 'asc' ? 'desc' : 'asc' 
      });
    } else {
      // Set new sort column and default to ascending
      setSortBy({ column, direction: 'asc' });
    }
  };
  
  // Apply sorting to rows
  const sortedRows = [...rows].sort((a, b) => {
    if (!sortBy) return 0;
    
    const aValue = a.values[sortBy.column]?.raw;
    const bValue = b.values[sortBy.column]?.raw;
    
    if (aValue === undefined || bValue === undefined) return 0;
    
    // Handle numerical sorting
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortBy.direction === 'asc' ? aValue - bValue : bValue - aValue;
    }
    
    // Handle string sorting
    return sortBy.direction === 'asc' 
      ? String(aValue).localeCompare(String(bValue))
      : String(bValue).localeCompare(String(aValue));
  });
  
  // Filter rows based on active filters
  const filteredRows = activeFilters.length > 0 
    ? sortedRows.filter(row => !row.category || activeFilters.includes(row.category))
    : sortedRows;
  
  // Card view variant
  if (variant === 'cards') {
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
        
        {/* Filters and Controls */}
        {(filterOptions || sortOptions) && (
          <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
            {filterOptions && (
              <div className="flex items-center gap-2">
                <button className="text-xs flex items-center bg-[#F9F8F4] px-3 py-1.5 rounded-full border border-[#E5E2D9]">
                  <Filter className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                  <span>Filters</span>
                </button>
                
                {categories.map(category => (
                  <button 
                    key={category}
                    className={`text-xs flex items-center px-3 py-1.5 rounded-full border ${
                      activeFilters.includes(category) 
                        ? 'bg-[#F5F5E6] border-[#CAB06B] text-[#CAB06B]' 
                        : 'bg-white border-[#E5E2D9] text-[#666666]'
                    }`}
                    onClick={() => toggleFilter(category)}
                  >
                    <span>{category}</span>
                    {activeFilters.includes(category) && (
                      <Check className="h-3 w-3 ml-1.5 text-[#CAB06B]" />
                    )}
                  </button>
                ))}
              </div>
            )}
            
            {sortOptions && (
              <div className="flex items-center gap-2">
                <button className="text-xs flex items-center bg-[#F9F8F4] px-3 py-1.5 rounded-full border border-[#E5E2D9]">
                  <Sliders className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                  <span>Sort</span>
                </button>
              </div>
            )}
            
            <button 
              className="text-xs flex items-center bg-[#F9F8F4] px-3 py-1.5 rounded-full border border-[#E5E2D9]"
              onClick={() => setExpandedView(!expandedView)}
            >
              {expandedView ? (
                <>
                  <Minimize className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                  <span>Compact View</span>
                </>
              ) : (
                <>
                  <Maximize className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                  <span>Expanded View</span>
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {columns.slice(1).filter(col => visibleColumns.includes(col.key)).map((column, colIdx) => (
            <motion.div
              key={colIdx}
              className={`border rounded-md overflow-hidden ${
                column.key === highlightProperty 
                  ? 'border-[#CAB06B] shadow-md' 
                  : 'border-[#E5E2D9]'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: colIdx * 0.1 }}
            >
              {/* Card Header */}
              <div className={`p-4 ${column.key === highlightProperty ? 'bg-[#F5F5E6]' : 'bg-[#F9F8F4]'}`}>
                <h4 className={`text-lg font-medium ${column.key === highlightProperty ? 'text-[#CAB06B]' : 'text-[#333333]'}`}>
                  {column.header}
                </h4>
              </div>
              
              {/* Card Content */}
              <div className="p-4 space-y-4">
                {filteredRows.filter(row => !row.isSubheader).map((row, rowIdx) => {
                  const cellData = row.values[column.key];
                  if (!cellData) return null;
                  
                  return (
                    <div key={rowIdx} className="border-b border-[#E5E2D9] pb-3 last:border-0 last:pb-0">
                      <p className="text-xs text-[#999999] mb-1">{row.feature}</p>
                      <div className={`${cellData.isHighlighted ? 'font-medium text-[#CAB06B]' : 'text-[#666666]'}`}>
                        {typeof cellData.value === 'string' ? (
                          <div className="flex items-center">
                            {cellData.icon && <span className="mr-1">{cellData.icon}</span>}
                            <span className="text-sm">{cellData.value}</span>
                          </div>
                        ) : (
                          cellData.value
                        )}
                        
                        {/* Score visualization if available */}
                        {cellData.score !== undefined && (
                          <div className="mt-2 h-1.5 bg-[#E5E2D9] rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${
                                cellData.score > 75 ? 'bg-[#60A561]' : 
                                cellData.score > 50 ? 'bg-[#CAB06B]' : 
                                cellData.score > 25 ? 'bg-[#E5826D]' : 
                                'bg-[#C3524A]'
                              }`}
                              style={{ width: `${cellData.score}%` }}
                            ></div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }
  
  // Visual variant with enhanced data visualization
  if (variant === 'visual') {
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
        
        {/* Controls for visual view */}
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            {columns.slice(1).map((col, idx) => (
              <button 
                key={idx}
                className={`text-xs flex items-center px-3 py-1.5 rounded-full border ${
                  visibleColumns.includes(col.key) 
                    ? 'bg-[#F5F5E6] border-[#CAB06B] text-[#CAB06B]' 
                    : 'bg-white border-[#E5E2D9] text-[#666666] opacity-70'
                }`}
                onClick={() => toggleColumn(col.key)}
              >
                <span>{col.header}</span>
                {visibleColumns.includes(col.key) ? (
                  <Eye className="h-3 w-3 ml-1.5 text-[#CAB06B]" />
                ) : (
                  <EyeOff className="h-3 w-3 ml-1.5 text-[#666666]" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        {/* Visual comparison layout - one row per feature */}
        <div className="space-y-6">
          {filteredRows.filter(row => !row.isSubheader).map((row, rowIdx) => (
            <motion.div 
              key={rowIdx}
              className="bg-white border border-[#E5E2D9] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: rowIdx * 0.05 }}
            >
              <div className="bg-[#F9F8F4] p-3 border-b border-[#E5E2D9]">
                <h4 className="text-base font-medium text-[#333333]">{row.feature}</h4>
                {row.category && (
                  <span className="inline-block text-xs bg-[#F5F5E6] text-[#CAB06B] px-2 py-0.5 rounded-full mt-1">
                    {row.category}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                {/* Bar chart visualization of values */}
                <div className="space-y-3">
                  {columns.slice(1)
                    .filter(col => visibleColumns.includes(col.key))
                    .map((column, colIdx) => {
                      const cellData = row.values[column.key];
                      if (!cellData) return null;
                      
                      // Determine max value for scaling
                      const maxScore = 100; // Default to percentage scale
                      const score = cellData.score !== undefined ? cellData.score : 0;
                      
                      return (
                        <div key={colIdx} className="flex items-center">
                          <div className="w-24 flex-shrink-0">
                            <p className={`text-xs ${column.key === highlightProperty ? 'font-medium text-[#CAB06B]' : 'text-[#666666]'}`}>
                              {column.header}
                            </p>
                          </div>
                          
                          <div className="flex-grow flex items-center space-x-2">
                            <div className="flex-grow h-6 bg-[#F9F8F4] rounded-md overflow-hidden border border-[#E5E2D9]">
                              <div 
                                className={`h-full flex items-center px-2 ${
                                  column.key === highlightProperty
                                    ? 'bg-[#F5F5E6]'
                                    : score > 75 ? 'bg-[#E5F2E5]' : 
                                      score > 50 ? 'bg-[#F5F5E6]' : 
                                      score > 25 ? 'bg-[#F5EAEA]' : 
                                      'bg-[#FAE5E5]'
                                }`}
                                style={{ width: `${score}%` }}
                              >
                                {score > 30 && (
                                  <span className="text-xs whitespace-nowrap overflow-hidden">
                                    {typeof cellData.value === 'string' ? cellData.value : ''}
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            {score <= 30 && (
                              <div className="w-20 flex-shrink-0">
                                <span className="text-xs text-[#666666]">
                                  {typeof cellData.value === 'string' ? cellData.value : ''}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Default table view with improvements
  return (
    <motion.div 
      className={`${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-wrap justify-between items-end mb-4">
        <div>
          {title && (
            <h3 className="text-xl font-semibold text-[#333333] mb-2">{title}</h3>
          )}

          {description && (
            <p className="text-[#666666]">{description}</p>
          )}
        </div>
        
        {/* View options */}
        {expandable && (
          <button 
            className="text-xs flex items-center bg-[#F9F8F4] px-3 py-1.5 rounded-md border border-[#E5E2D9] ml-auto mt-2"
            onClick={() => setExpandedView(!expandedView)}
          >
            {expandedView ? (
              <>
                <Minimize className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                <span>Compact View</span>
              </>
            ) : (
              <>
                <Maximize className="h-3 w-3 mr-1.5 text-[#CAB06B]" />
                <span>Expanded View</span>
              </>
            )}
          </button>
        )}
      </div>

      {mobileScrollIndicator && (
        <div className="md:hidden mb-2 text-sm text-[#999999] italic flex items-center">
          <ChevronRight className="h-4 w-4 mr-1" />
          <span>Swipe horizontally to view more</span>
        </div>
      )}

      {/* Enhanced Table with Sticky First Column */}
      <div className="relative overflow-x-auto pb-2 border border-[#E5E2D9] rounded-md">
        <table className="min-w-full bg-white">
          <thead className="bg-[#F9F8F4] border-b border-[#E5E2D9] sticky top-0">
            <tr>
              {columns.map((column, idx) => (
                <th 
                  key={idx} 
                  className={cn(
                    "px-4 py-3 text-left text-xs font-medium text-[#333333] uppercase tracking-wider whitespace-nowrap",
                    column.highlight && "bg-[#F5F5E6]",
                    column.width ? column.width : "",
                    column.key === highlightProperty && "bg-[#F5F5E6]",
                    idx === 0 && "sticky left-0 z-10 shadow-sm bg-[#F9F8F4]"
                  )}
                >
                  <div className="flex items-center">
                    {column.header}
                    
                    {sortOptions && idx > 0 && (
                      <button 
                        className="ml-1 focus:outline-none"
                        onClick={() => handleSort(column.key)}
                      >
                        {sortBy?.column === column.key ? (
                          sortBy.direction === 'asc' ? (
                            <ChevronUp className="h-3 w-3 text-[#CAB06B]" />
                          ) : (
                            <ChevronDown className="h-3 w-3 text-[#CAB06B]" />
                          )
                        ) : (
                          <div className="h-3 w-3 opacity-30">•</div>
                        )}
                      </button>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody className="divide-y divide-[#E5E2D9]">
            {filteredRows.map((row, rowIdx) => {
              // Group rows by category for collapsible sections
              const category = row.category;
              const isFirstInCategory = category && 
                filteredRows.findIndex(r => r.category === category) === rowIdx;
              
              // Skip subsequent rows of collapsed category
              if (category && collapsed[category] && !isFirstInCategory) {
                return null;
              }
              
              return (
                <React.Fragment key={rowIdx}>
                  {/* Category Header Row */}
                  {category && isFirstInCategory && (
                    <tr className="bg-[#F5F5E6] text-[#CAB06B] cursor-pointer hover:bg-[#F0F0D6]" onClick={() => toggleCategory(category)}>
                      <td 
                        colSpan={columns.length}
                        className="px-4 py-2 text-sm font-medium"
                      >
                        <div className="flex items-center">
                          {collapsed[category] ? (
                            <ChevronRight className="h-4 w-4 mr-2" />
                          ) : (
                            <ChevronDown className="h-4 w-4 mr-2" />
                          )}
                          {category}
                        </div>
                      </td>
                    </tr>
                  )}
                  
                  {/* Data or Section Header Row */}
                  <tr 
                    className={cn(
                      rowIdx % 2 === 1 && !row.isSubheader && !row.category ? "bg-[#F9F8F4]" : "bg-white",
                      row.isSubheader && "bg-[#F5F5E6] text-[#333333]",
                      expandedView ? "hover:bg-[#F9F8F4]" : ""
                    )}
                  >
                    <td 
                      className={cn(
                        "px-4 py-3 text-sm font-medium text-[#333333] sticky left-0 z-10 border-r border-[#E5E2D9]",
                        row.isSubheader && "font-semibold bg-[#F5F5E6]",
                        rowIdx % 2 === 1 && !row.isSubheader ? "bg-[#F9F8F4]" : "bg-white"
                      )}
                    >
                      <div className="flex items-center">
                        {row.feature}
                        {row.category && !isFirstInCategory && (
                          <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-[#F5F5E6] text-[#CAB06B]">
                            {row.category}
                          </span>
                        )}
                      </div>
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
                            cellData.isHighlighted ? "font-medium text-[#CAB06B]" : "text-[#666666]",
                            column.highlight && "bg-[#F9F8F4]",
                            column.key === highlightProperty && "bg-[#F9F8F4]"
                          )}
                        >
                          {expandedView && cellData.score !== undefined ? (
                            <div>
                              <div className="flex items-center mb-1">
                                {cellData.icon && <span className="mr-1">{cellData.icon}</span>}
                                <span>{typeof cellData.value === 'string' ? cellData.value : ''}</span>
                              </div>
                              <div className="h-1.5 bg-[#E5E2D9] rounded-full overflow-hidden">
                                <div 
                                  className={`h-full ${
                                    column.key === highlightProperty ? 'bg-[#CAB06B]' :
                                    cellData.score > 75 ? 'bg-[#60A561]' : 
                                    cellData.score > 50 ? 'bg-[#CAB06B]' : 
                                    cellData.score > 25 ? 'bg-[#E5826D]' : 
                                    'bg-[#C3524A]'
                                  }`}
                                  style={{ width: `${cellData.score}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            typeof cellData.value === 'string' ? (
                              <div className="flex items-center">
                                {cellData.icon && <span className="mr-1">{cellData.icon}</span>}
                                {cellData.value}
                              </div>
                            ) : (
                              cellData.value
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
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
        score?: number; // Value from 0-100 for visual representation
        raw?: number | string; // Raw value for sorting and filtering
      };
    };
    category?: string;
  }[];
  className?: string;
  highlightProperty?: string;
  variant?: 'default' | 'cards' | 'visual';
}

export function FeatureComparisonTable({
  title,
  description,
  properties,
  features,
  className = '',
  highlightProperty = 'The Novus',
  variant = 'default'
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
        isSubheader: true,
        category
      });
    }
    
    // Add features in this category
    categoryFeatures.forEach(feature => {
      const row: ComparisonTableRow = {
        feature: feature.name,
        values: {},
        category
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
            icon: value.icon || (value.value.includes('✓') ? <Check className="h-3 w-3 text-[#CAB06B]" /> : undefined),
            score: value.score,
            raw: value.raw
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
      variant={variant}
      filterOptions={true}
      sortOptions={true}
      expandable={true}
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
        score?: number;
        raw?: number | string;
      };
    };
    category?: string;
  }>;
  className?: string;
  variant?: 'default' | 'cards' | 'visual';
}

export function MatrixComparisonTable({
  title,
  description,
  properties,
  metrics,
  className = '',
  variant = 'default'
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
      values: {},
      category: metric.category
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
            isHighlighted: value.highlight || property.highlight,
            score: (value.rating / 5) * 100,
            raw: value.rating
          };
        } else {
          row.values[property.name] = {
            value: value.value,
            isHighlighted: value.highlight || property.highlight,
            score: value.score,
            raw: value.raw
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
      isSubheader: true,
      category: 'Info'
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
      variant={variant}
      mobileScrollIndicator={true}
      filterOptions={true}
      sortOptions={true}
      expandable={true}
    />
  );
}