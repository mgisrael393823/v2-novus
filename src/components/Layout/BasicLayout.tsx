import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";

// Font implementation matching The Novus's branding
const headingFont = Montserrat({ subsets: ["latin"], weight: ["500", "600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F9F8F4] flex flex-col">
      {/* Simple Header */}
      <header className="bg-[#F9F8F4] border-b border-[#E5E2D9] py-4 px-6">
        <div className="container mx-auto max-w-6xl flex justify-between items-center">
          <div>
            <h2 className={`${headingFont.className} text-lg text-[#333333] tracking-widest mb-1`}>THE NOVUS</h2>
            <div className="h-0.5 w-12 bg-[#CAB06B] mb-1"></div>
            <p className={`${bodyFont.className} text-xs text-[#666666] tracking-wide`}>LEASE-UP STRATEGY BLUEPRINT</p>
          </div>
          
          <nav className="flex space-x-6">
            <Link href="/executive-summary" className="text-sm text-[#666666] hover:text-[#333333]">
              Executive Summary
            </Link>
            <Link href="/market-intelligence" className="text-sm text-[#666666] hover:text-[#333333]">
              Market Intelligence
            </Link>
            <Link href="/competitive-landscape" className="text-sm text-[#666666] hover:text-[#333333]">
              Competitive Landscape
            </Link>
            <Link href="/opportunity-map" className="text-sm text-[#666666] hover:text-[#333333]">
              Opportunity Map
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6 md:px-8 max-w-6xl">
          <div className={`${bodyFont.className} text-[#333333]`}>
            {children}
          </div>
        </div>
      </main>
      
      {/* Simple Footer */}
      <footer className="border-t border-[#E5E2D9] py-8 px-6 bg-[#F9F8F4]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center">
            <p className="text-sm text-[#666666]">
              © 2025 The Novus Blueprint. All content is proprietary information.
            </p>
            <div className="h-8 w-8 rounded-full bg-[#CAB06B] opacity-30"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}