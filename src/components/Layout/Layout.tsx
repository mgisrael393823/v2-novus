
"use client"

import React from "react";
import { StaticNavigation } from "./StaticNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { Container } from "@/components/ui/Container";
import { Text } from "@/components/ui/Typography";
import { Montserrat } from "next/font/google";

// Font implementation matching The Novus's branding
const headingFont = Montserrat({ subsets: ["latin"], weight: ["500", "600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-novus-cream">
      {/* Show appropriate navigation based on screen size */}
      {isMobile ? <MobileNavigation /> : <StaticNavigation />}
      
      <main className={`
        flex-1 
        ${isMobile ? 'pt-20' : 'pl-64 py-12'}
        ${bodyFont.className}
      `}>
        <div className={isMobile ? '' : 'px-6 md:px-8'}>
          {children}
        </div>
        
        <footer className="mt-24 border-t border-novus-border py-8 bg-novus-cream">
          <Container size="wide">
            <div className="flex justify-between items-center">
              <Text variant="caption" color="secondary">
                © 2025 The Novus Blueprint. All content is proprietary information.
              </Text>
              <div className="h-8 w-8 rounded-full bg-novus-gold opacity-10"></div>
            </div>
          </Container>
        </footer>
      </main>
    </div>
  );
}
