"use client"

import React from "react";
import { cn } from "@/lib/utils";

interface TableProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'compact' | 'striped';
  responsive?: boolean;
  mobileHelper?: string;
}

export function Table({
  children,
  className = '',
  variant = 'default',
  responsive = true,
  mobileHelper = 'Scroll horizontally to view more'
}: TableProps) {
  const variantClass = {
    default: "table-default",
    compact: "table-default text-xs",
    striped: "table-default [&_tr:nth-child(even)]:bg-novus-cream-dark"
  }[variant];
  
  const TableContent = (
    <table className={cn(variantClass, className)}>
      {children}
    </table>
  );
  
  return responsive ? (
    <div className="table-responsive">
      <div className="mobile-scroll-indicator">
        {mobileHelper}
      </div>
      {TableContent}
    </div>
  ) : TableContent;
}

interface TableHeadProps {
  children: React.ReactNode;
  className?: string;
}

export function TableHead({
  children,
  className = ''
}: TableHeadProps) {
  return (
    <thead className={className}>
      {children}
    </thead>
  );
}

interface TableBodyProps {
  children: React.ReactNode;
  className?: string;
}

export function TableBody({
  children,
  className = ''
}: TableBodyProps) {
  return (
    <tbody className={className}>
      {children}
    </tbody>
  );
}

interface TableRowProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function TableRow({
  children,
  className = '',
  highlighted = false
}: TableRowProps) {
  return (
    <tr className={cn(
      highlighted && "bg-novus-gold-light",
      className
    )}>
      {children}
    </tr>
  );
}

interface TableCellProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
  header?: boolean;
  align?: 'left' | 'center' | 'right';
}

export function TableCell({
  children,
  className = '',
  highlighted = false,
  header = false,
  align = 'left'
}: TableCellProps) {
  const Component = header ? 'th' : 'td';
  
  const alignClass = {
    'left': 'text-left',
    'center': 'text-center',
    'right': 'text-right'
  }[align];
  
  const cellClass = header ? "table-header" : 
                   highlighted ? "table-cell-highlight" :
                   "table-cell";
  
  return (
    <Component className={cn(
      cellClass,
      alignClass,
      className
    )}>
      {children}
    </Component>
  );
}

interface CardTableProps {
  data: Record<string, React.ReactNode>[];
  headers: Record<string, string>;
  className?: string;
  keyField?: string;
  highlight?: string[];
}

export function CardTable({
  data,
  headers,
  className = '',
  keyField = 'id',
  highlight = []
}: CardTableProps) {
  const headerKeys = Object.keys(headers);
  
  return (
    <div className="md:hidden space-y-4">
      {data.map((row, index) => {
        const isHighlighted = highlight.includes(String(row[keyField]));
        
        return (
          <div 
            key={row[keyField]?.toString() || index} 
            className={cn(
              "border border-novus-border rounded-sm overflow-hidden",
              isHighlighted && "border-l-4 border-l-novus-gold"
            )}
          >
            {headerKeys.map(key => (
              <div 
                key={key} 
                className="flex border-b border-novus-border last:border-b-0"
              >
                <div className="w-1/3 p-3 bg-novus-cream text-xs font-medium text-text-primary">
                  {headers[key]}
                </div>
                <div className="w-2/3 p-3 text-sm text-text-secondary break-words-wrap">
                  {row[key]}
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

interface ResponsiveTableProps {
  data: Record<string, React.ReactNode>[];
  headers: Record<string, string>;
  className?: string;
  keyField?: string;
  highlight?: string[];
  defaultAlign?: 'left' | 'center' | 'right';
  colAligns?: Record<string, 'left' | 'center' | 'right'>;
}

export function ResponsiveTable({
  data,
  headers,
  className = '',
  keyField = 'id',
  highlight = [],
  defaultAlign = 'left',
  colAligns = {}
}: ResponsiveTableProps) {
  const headerKeys = Object.keys(headers);
  
  return (
    <>
      {/* Card layout for mobile */}
      <CardTable 
        data={data} 
        headers={headers} 
        keyField={keyField} 
        highlight={highlight} 
      />
      
      {/* Traditional table for larger screens */}
      <div className="hidden md:block">
        <Table responsive className={className}>
          <TableHead>
            <tr>
              {headerKeys.map(key => (
                <TableCell 
                  key={key} 
                  header 
                  align={colAligns[key] || defaultAlign}
                >
                  {headers[key]}
                </TableCell>
              ))}
            </tr>
          </TableHead>
          <TableBody>
            {data.map((row, index) => {
              const isHighlighted = highlight.includes(String(row[keyField]));
              
              return (
                <TableRow 
                  key={row[keyField]?.toString() || index} 
                  highlighted={isHighlighted}
                >
                  {headerKeys.map(key => (
                    <TableCell 
                      key={key} 
                      highlighted={isHighlighted}
                      align={colAligns[key] || defaultAlign}
                    >
                      {row[key]}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}