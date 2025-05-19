"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { 
  BookOpen,
  BarChart2,
  Target,
  Lightbulb,
  DollarSign,
  Rocket,
  Map,
  Lock,
  Menu,
  X
} from 'lucide-react';

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

const navItems = [
  { name: 'EXECUTIVE SUMMARY', path: '/executive-summary', icon: BookOpen },
  { name: 'MARKET INTELLIGENCE', path: '/market-intelligence', icon: BarChart2 },
  { name: 'COMPETITIVE LANDSCAPE', path: '/competitive-landscape', icon: Target },
  { name: 'STRATEGIC OPPORTUNITIES', path: '/strategic-opportunities', icon: Lightbulb },
  { name: 'PRICING & INCENTIVES', path: '/pricing-framework', icon: DollarSign },
  { name: 'GO-TO-MARKET ROADMAP', path: '/go-to-market', icon: Rocket },
  { name: 'OPPORTUNITY MAP', path: '/opportunity-map', icon: Map },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="h-16 border-b border-[#E5E2D9] flex items-center justify-between px-4 bg-[#F9F8F4] fixed top-0 left-0 w-full z-40">
        <Link href="/" className="flex-1">
          <h2 className={`${headingFont.className} text-base text-[#333333] tracking-widest`}>THE NOVUS</h2>
          <div className="h-0.5 w-12 bg-[#CAB06B]"></div>
        </Link>
        
        <button 
          onClick={toggleMenu}
          className="p-2 text-[#333333] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
      
      {/* Mobile Navigation Menu */}
      <nav 
        className={`w-4/5 max-w-xs bg-[#F9F8F4] border-r border-[#E5E2D9] h-screen fixed top-0 right-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
      >
        <div className="h-full flex flex-col">
          <div className='px-6 py-10 border-b border-[#E5E2D9] flex items-center justify-between'>
            <div>
              <p className={`${bodyFont.className} text-xs text-[#666666] tracking-wide`}>BLUEPRINT CONTENTS</p>
            </div>
            <button onClick={closeMenu} className="text-[#666666]">
              <X size={20} />
            </button>
          </div>
          
          <div className='flex-1 px-4 py-6'>
            <div className='space-y-1'>
              {navItems.map((item) => {
                const Icon = item.icon;
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`
                      flex items-center px-3 py-3 text-xs font-medium tracking-wider transition-all
                      text-[#666666] hover:text-[#333333] border-l-2 border-transparent hover:border-[#CAB06B]
                    `}
                    onClick={closeMenu}
                  >
                    <Icon className='mr-3 h-4 w-4 flex-shrink-0' />
                    <span>{item.name}</span>
                    {/* Lock icons removed */}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className='mt-auto p-6 border-t border-[#E5E2D9]'>
            <div className='bg-[#FFFFFF] p-4 rounded-sm border border-[#E5E2D9]'>
              <p className={`${bodyFont.className} text-xs uppercase tracking-widest text-[#666666] mb-2`}>CONTACT</p>
              <p className='text-sm text-[#333333]'>misrael00@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}