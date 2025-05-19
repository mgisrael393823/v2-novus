import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PageContainer } from "@/components/ui/Container";
import { Text, Paragraph, Section, BulletList } from "@/components/ui/Typography";
import { ContentCard, StatCard, FeatureCard } from "@/components/ui/ContentCard";
import { StatBox } from "@/components/ui/StatBox";

export default function PricingFramework() {
  return (
    <>
      <Head>
        <title>Pricing & Incentive Framework - The Novus</title>
        <meta name="description" content="Pricing and incentive framework for The Novus high-rise apartments in Downtown Durham" />
      </Head>
      
      <Layout>
        <PageContainer 
          title="Pricing & Incentive Framework"
          intro="Our strategic pricing model positions The Novus to capitalize on its unique 27-story high-rise format and premium amenities, with a multi-tiered approach based on floor level, view orientation, and unit features to maximize revenue potential in the Downtown Durham market."
        >
          
          <Section title="Optimal Base Rent Positioning">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" style={{ gridAutoRows: '1fr' }}>
              <ContentCard variant="light" className="h-full group hover:shadow-md hover:border hover:border-[#E5E2D9] transition-all duration-300 rounded-md overflow-hidden shadow-sm flex flex-col">
                <Text variant="h3" color="primary" className="mb-5 flex items-center h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 flex-shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  </svg>
                  <span>Studios</span>
                </Text>
                <div className="flex justify-center mb-5 h-32">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-[#CAB06B] shadow-[0_0_12px_rgba(202,176,107,0.2)] relative">
                    <div className="absolute inset-0 rounded-full opacity-10 bg-gradient-to-b from-white to-[#CAB06B]"></div>
                    <Text variant="h3" color="accent" className="font-bold flex items-center justify-center leading-none relative z-10">
                      $3.90
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.60-$3.90/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-5 h-6 flex items-center justify-center">
                  550-650 sq ft
                </Text>
                <div className="h-px bg-[#E5E2D9] my-5"></div>
                <Text variant="caption" color="secondary" className="block min-h-[5rem]">
                  Places The Novus approximately <span className="font-medium bg-[#FBF7EA] px-1 py-0.5 rounded text-[#BA9C5A]">8-10%</span> above One City Center but <span className="font-medium bg-[#FBF7EA] px-1 py-0.5 rounded text-[#BA9C5A]">15-18%</span> above other Durham competitors, reflecting superior views, height advantage, and premium finishes.
                </Text>
              </ContentCard>
              
              <ContentCard variant="light" className="h-full group hover:shadow-md hover:border hover:border-[#E5E2D9] transition-all duration-300 rounded-md overflow-hidden shadow-sm flex flex-col">
                <Text variant="h3" color="primary" className="mb-5 flex items-center h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 flex-shrink-0">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <rect x="9" y="3" width="12" height="18" rx="2" ry="2"></rect>
                  </svg>
                  <span>One Bedrooms</span>
                </Text>
                <div className="flex justify-center mb-5 h-32">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-[#CAB06B] shadow-[0_0_12px_rgba(202,176,107,0.2)] relative">
                    <div className="absolute inset-0 rounded-full opacity-10 bg-gradient-to-b from-white to-[#CAB06B]"></div>
                    <Text variant="h3" color="accent" className="font-bold flex items-center justify-center leading-none relative z-10">
                      $3.65
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.30-$3.65/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-5 h-6 flex items-center justify-center">
                  750-950 sq ft
                </Text>
                <div className="h-px bg-[#E5E2D9] my-5"></div>
                <Text variant="caption" color="secondary" className="block min-h-[5rem]">
                  Establishes a <span className="font-medium bg-[#FBF7EA] px-1 py-0.5 rounded text-[#BA9C5A]">12-15%</span> premium over Van Alen and 511 Faye to reflect The Novus's high-rise exclusivity, panoramic views, and superior amenity stratification across 27 floors.
                </Text>
              </ContentCard>
              
              <ContentCard variant="light" className="h-full group hover:shadow-md hover:border hover:border-[#E5E2D9] transition-all duration-300 rounded-md overflow-hidden shadow-sm flex flex-col">
                <Text variant="h3" color="primary" className="mb-5 flex items-center h-12">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 flex-shrink-0">
                    <rect x="3" y="3" width="10" height="18" rx="2" ry="2"></rect>
                    <rect x="13" y="3" width="8" height="18" rx="2" ry="2"></rect>
                  </svg>
                  <span>Two Bedrooms</span>
                </Text>
                <div className="flex justify-center mb-5 h-32">
                  <div className="flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-[#CAB06B] shadow-[0_0_12px_rgba(202,176,107,0.2)] relative">
                    <div className="absolute inset-0 rounded-full opacity-10 bg-gradient-to-b from-white to-[#CAB06B]"></div>
                    <Text variant="h3" color="accent" className="font-bold flex items-center justify-center leading-none relative z-10">
                      $3.45
                    </Text>
                  </div>
                </div>
                <Text variant="body-lg" color="primary" className="mb-2 text-center font-medium">
                  $3.10-$3.45/sq ft
                </Text>
                <Text variant="body" color="secondary" className="text-center mb-5 h-6 flex items-center justify-center">
                  1,100-1,400 sq ft
                </Text>
                <div className="h-px bg-[#E5E2D9] my-5"></div>
                <Text variant="caption" color="secondary" className="block min-h-[5rem]">
                  Positioned at the premium tier of the Durham market, reflecting the significant value proposition of The Novus's unique high-rise format, with a <span className="font-medium bg-[#FBF7EA] px-1 py-0.5 rounded text-[#BA9C5A]">10-12%</span> premium over One City Center for equivalent floorplans.
                </Text>
              </ContentCard>
            </div>
            
            <ContentCard variant="accent" className="mb-8">
              <Text variant="h3" color="primary" className="mb-3">Pricing Strategy Highlights</Text>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="inline-flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white inline-flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#CAB06B] font-bold">1</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium my-auto">Premium Positioning</Text>
                </div>
                <div className="inline-flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white inline-flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#CAB06B] font-bold">2</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium my-auto">Vertical Stratification</Text>
                </div>
                <div className="inline-flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white inline-flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-[#CAB06B] font-bold">3</span>
                  </div>
                  <Text variant="body" color="primary" className="font-medium my-auto">View-Based Premiums</Text>
                </div>
              </div>
              <Text variant="body" color="secondary">
                Our unit pricing strategy positions The Novus at the premium tier in Downtown Durham's market, with strategic price differentials based on unit size, floor height, and view orientation to maximize revenue while maintaining competitive velocity.
              </Text>
            </ContentCard>
          </Section>
            
          <Section title="Strategic Premium Allocation" divider>
            <div className="mb-8">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5E6] flex items-center justify-center mr-3">
                    <span className="text-[#CAB06B] font-bold text-lg">$</span>
                  </div>
                  <div>
                    <Text variant="h3" color="primary" className="heading-3">Premium Allocations by Category</Text>
                    <Text variant="body" color="secondary">Strategic pricing differentials based on unit features and location</Text>
                  </div>
                </div>
              </div>
              
              {/* View & Layout Premiums Grid Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {/* Using a reusable component pattern to generate premium cards */}
                {[
                  {
                    title: "Downtown Skyline",
                    value: "$275-425",
                    description: "Premium per month for units with downtown skyline views, offering unparalleled cityscape vistas",
                    highlighted: true,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    )
                  },
                  {
                    title: "Five Points District",
                    value: "$175-275",
                    description: "Premium per month for units overlooking the vibrant Five Points neighborhood",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    )
                  },
                  {
                    title: "Corner Units",
                    value: "$200-450",
                    description: "Additional premium for corner units offering panoramic views and enhanced natural lighting",
                    highlighted: true,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      </svg>
                    )
                  },
                  {
                    title: "Floor Premium",
                    value: "$35-50",
                    description: "Per floor premium (increases for higher floors) reflecting elevated views and prestige",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <polyline points="19 12 12 19 5 12"></polyline>
                      </svg>
                    )
                  },
                  {
                    title: "Larger Terrace",
                    value: "$75-125",
                    description: "Monthly premium for units with expanded outdoor living space",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                      </svg>
                    )
                  },
                  {
                    title: "Kitchen Island",
                    value: "$50-100",
                    description: "Monthly premium for upgraded kitchen layout with center island",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 2v5"></path>
                        <path d="M8 2v5"></path>
                      </svg>
                    )
                  },
                  {
                    title: "Dual Aspect",
                    value: "$75-100",
                    description: "Monthly premium for units with windows on multiple sides, providing enhanced natural light",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                      </svg>
                    )
                  },
                  {
                    title: "Architectural Features",
                    value: "$50-75",
                    description: "Monthly premium for unique design elements such as exposed brick, vaulted ceilings, or accent walls",
                    highlighted: false,
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        <line x1="12" y1="12" x2="12" y2="22"></line>
                      </svg>
                    )
                  }
                ].map((premium, index) => (
                  <div 
                    key={index}
                    className={`rounded-lg p-5 shadow-sm border flex flex-col h-full ${
                      premium.highlighted 
                        ? 'bg-[#FBF7EA] border-[#CAB06B]' 
                        : 'bg-white border-[#E5E2D9]'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 text-[#CAB06B]">
                        {premium.icon}
                      </div>
                      <Text variant="h4" color="primary" className="text-lg font-medium leading-none">
                        {premium.title}
                      </Text>
                    </div>
                    <Text variant="body-lg" color="accent" className="font-bold mb-1">
                      {premium.value}
                    </Text>
                    <Text variant="caption" color="secondary">
                      {premium.description}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              {/* Simplified premium item components */}
              {(() => {
                // Define interface for PremiumItem props
                interface PremiumItemProps {
                  icon: React.ReactNode;
                  label: string;
                  price: string;
                  description: string;
                }
                
                // Single reusable premium item component
                const PremiumItem = ({ icon, label, price, description }: PremiumItemProps) => (
                  <div className="flex gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#F5EFD6] text-[#CAB06B] flex items-center justify-center shrink-0 mt-0.5">
                      {icon}
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">{label}</p>
                      <p className="text-sm font-semibold text-[#CAB06B] mt-1">{price}</p>
                      <p className="text-sm text-gray-500 mt-1">{description}</p>
                    </div>
                  </div>
                );
                
                // Data arrays
                const premiumData = [
                  {
                    title: "Finish Premiums",
                    description: "Tiered upgrade packages with associated premiums:",
                    items: [
                      {
                        icon: "1",
                        label: "Premium Cabinet Package",
                        price: "$30-50/month",
                        description: "Upgraded cabinet fronts, soft-close drawers"
                      },
                      {
                        icon: "2",
                        label: "Designer Lighting Package",
                        price: "$25-40/month",
                        description: "Upgraded pendants, under-cabinet lighting"
                      },
                      {
                        icon: "3",
                        label: "Premium Flooring Package",
                        price: "$35-60/month",
                        description: "Upgraded hardwood or luxury vinyl throughout"
                      },
                      {
                        icon: "4",
                        label: "Spa Bathroom Package",
                        price: "$40-70/month",
                        description: "Rainfall shower, glass enclosure, premium fixtures"
                      }
                    ]
                  },
                  {
                    title: "Special Feature Premiums",
                    description: "Premium add-ons for distinctive unit features:",
                    items: [
                      {
                        icon: "A",
                        label: "Built-in Office Nook",
                        price: "$50-75/month",
                        description: "Custom desk, shelving, task lighting"
                      },
                      {
                        icon: "B",
                        label: "Wine Storage",
                        price: "$35-50/month",
                        description: "Temperature-controlled cabinet (18-24 bottles)"
                      },
                      {
                        icon: "C",
                        label: "Smart Home Package",
                        price: "$45-65/month",
                        description: "Integrated lighting, thermostats, entry system"
                      },
                      {
                        icon: "D",
                        label: "Custom Closet System",
                        price: "$40-60/month",
                        description: "Upgraded organization with specialty racks"
                      }
                    ]
                  }
                ];
                
                // Return the JSX content
                return (
                  <div className="grid md:grid-cols-2 gap-6">
                    {premiumData.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="rounded-lg border border-[#E5E2D9] p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{section.title}</h3>
                        <p className="text-gray-600 mb-5">{section.description}</p>
                        <div className="space-y-5">
                          {section.items.map((item, i) => (
                            <PremiumItem
                              key={i} 
                              icon={item.icon}
                              label={item.label}
                              price={item.price}
                              description={item.description}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })()}
            </div>
          </Section>
            
          <Section title="Concession Structure Recommendations" divider>
            <div className="mb-8">
              {/* Define the LeaseConcessionCard component */}
              {(() => {
                // Define interface for LeaseConcessionCard props
                interface LeaseConcessionCardProps {
                  phase: string;
                  occupancyRange: string;
                  rentOffer: string;
                  leaseTerms: string;
                  description: string;
                }
                
                // Reusable component for lease concessions
                const LeaseConcessionCard = ({ phase, occupancyRange, rentOffer, leaseTerms, description }: LeaseConcessionCardProps) => (
                  <div className="bg-white rounded-lg border border-[#E5E2D9] p-5 shadow-sm flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-[#CAB06B] text-white flex items-center justify-center text-base font-bold shrink-0">
                        {phase}
                      </div>
                      <h3 className="text-lg font-medium text-gray-900">Phase {phase}</h3>
                    </div>
                    
                    <p className="text-gray-700 font-medium mb-4">{occupancyRange} occupied</p>
                    
                    <div className="bg-[#F5EFD6] text-[#B09A5B] font-bold rounded-full px-5 py-2 mb-4">
                      {rentOffer}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2">
                      {leaseTerms}
                    </p>
                    
                    <p className="text-sm text-gray-500 italic">
                      {description}
                    </p>
                  </div>
                );
                
                // Data for lease concessions
                const leaseUpConcessions = [
                  {
                    phase: "1",
                    occupancyRange: "0-30%",
                    rentOffer: "6-8 weeks free rent",
                    leaseTerms: "On 13+ month leases (4-6 weeks for premium view units on floors 20-27)",
                    description: "Position as \"Durham's Premier High-Rise Launch\" with time-limited availability"
                  },
                  {
                    phase: "2",
                    occupancyRange: "31-45%",
                    rentOffer: "4-6 weeks free rent",
                    leaseTerms: "On 13+ month leases (3-4 weeks for premium view units)",
                    description: "Adjust based on absorption velocity by floor band (floors 1-10, 11-19, 20-27)"
                  },
                  {
                    phase: "3",
                    occupancyRange: "46-60%",
                    rentOffer: "2-4 weeks free rent",
                    leaseTerms: "On 13+ month leases (potentially eliminated for high-demand units)",
                    description: "Apply selectively to slower-moving unit types with focus on floor bands"
                  }
                ];
                
                return (
                  <div className="bg-[#F9F8F4] rounded-lg p-6 mb-6">
                    <div className="mb-5">
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">Lease-Up Concessions</h2>
                      <p className="text-gray-600 italic">Opening to 60% Occupancy</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {leaseUpConcessions.map((concession, index) => (
                        <LeaseConcessionCard
                          key={index}
                          phase={concession.phase}
                          occupancyRange={concession.occupancyRange}
                          rentOffer={concession.rentOffer}
                          leaseTerms={concession.leaseTerms}
                          description={concession.description}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            
              
              {(() => {
                // Define interface for StabilizationBox props
                interface StabilizationBoxProps {
                  label: string;
                  value: string;
                  description: string;
                }
                
                // Reusable component for stabilization concessions
                const StabilizationBox = ({ label, value, description }: StabilizationBoxProps) => (
                  <div className="bg-white rounded-lg border border-[#E5E2D9] p-5 text-center flex flex-col items-center">
                    <h4 className="text-gray-900 font-medium mb-2">{label}</h4>
                    <p className="text-[#CAB06B] font-bold text-lg mb-2">{value}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                );
                
                // Data for stabilization concessions
                const stabilizationData = [
                  {
                    label: "Standard Offer",
                    value: "2 Weeks",
                    description: "Free on 13+ month leases for remaining inventory"
                  },
                  {
                    label: "Premium Units",
                    value: "Reduced",
                    description: "Minimize or eliminate concessions on high-demand units"
                  },
                  {
                    label: "Alternatives",
                    value: "Value-Add",
                    description: "Shift to non-rent incentives (technology packages, etc.)"
                  }
                ];
                
                return (
                  <div className="bg-[#F9F8F4] rounded-lg p-6 mb-6">
                    <div className="mb-5">
                      <h2 className="text-xl font-semibold text-gray-900 mb-1">Stabilization Concessions</h2>
                      <p className="text-gray-600 italic">60%+ Occupancy</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {stabilizationData.map((item, index) => (
                        <StabilizationBox
                          key={index}
                          label={item.label}
                          value={item.value}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
              
              {(() => {
                // Define interface for ReferralItem props
                interface ReferralItemProps {
                  id: string;
                  label: string;
                  value: string;
                  description: string;
                }
                
                // Reusable component for referral programs
                const ReferralItem = ({ id, label, value, description }: ReferralItemProps) => (
                  <div className="flex items-start">
                    <div className="w-7 h-7 rounded-full bg-[#F5EFD6] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-[#CAB06B] font-bold text-sm">{id}</span>
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">{label}</p>
                      <p className="text-base font-semibold text-[#CAB06B] mt-1">{value}</p>
                      <p className="text-sm text-gray-500 mt-1">{description}</p>
                    </div>
                  </div>
                );

                // Define interface for SeasonalSpecialCard props
                interface SeasonalSpecialCardProps {
                  title: string;
                  offer: string;
                  timing: string;
                }
                
                // Reusable component for seasonal specials
                const SeasonalSpecialCard = ({ title, offer, timing }: SeasonalSpecialCardProps) => (
                  <div className="border border-[#E5E2D9] rounded-md p-4 bg-[#F9F8F4] shadow-sm">
                    <p className="text-base font-medium text-gray-900 mb-1">{title}</p>
                    <p className="text-base font-semibold text-[#CAB06B] mb-1">{offer}</p>
                    <p className="text-sm text-gray-500">{timing}</p>
                  </div>
                );

                // Data for referral programs
                const referralData = [
                  {
                    id: "R1",
                    label: "Resident Referral",
                    value: "$1,500 total",
                    description: "$750 to referrer, $750 to new resident"
                  },
                  {
                    id: "R2",
                    label: "Duke Housing Partner",
                    value: "2 weeks free",
                    description: "Per successful placement"
                  },
                  {
                    id: "R3",
                    label: "Real Estate Agent Commission",
                    value: "$1,500-2,000",
                    description: "Higher for premium view units (floors 20-27)"
                  },
                  {
                    id: "R4",
                    label: "Research Triangle Tech Partner",
                    value: "Corporate Rate",
                    description: "Special pricing for partner company employees"
                  }
                ];

                // Data for seasonal specials
                const seasonalData = [
                  {
                    title: "Duke Graduation",
                    offer: "$750 gift card",
                    timing: "For May-June move-ins"
                  },
                  {
                    title: "Year-End Bonus",
                    offer: "+1 week free",
                    timing: "For December move-ins"
                  },
                  {
                    title: "Innovation District",
                    offer: "Tech Package",
                    timing: "For March-April leases"
                  },
                  {
                    title: "Holiday Special",
                    offer: "Free Storage",
                    timing: "For November move-ins"
                  }
                ];

                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white rounded-lg border border-[#E5E2D9] p-6 shadow-sm">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Referral Programs</h3>
                      <div className="space-y-5">
                        {referralData.map((item, index) => (
                          <ReferralItem
                            key={index}
                            id={item.id}
                            label={item.label}
                            value={item.value}
                            description={item.description}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg border border-[#E5E2D9] p-6 shadow-sm">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900">Seasonal Specials</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {seasonalData.map((item, index) => (
                          <SeasonalSpecialCard
                            key={index}
                            title={item.title}
                            offer={item.offer}
                            timing={item.timing}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
              
              {(() => {
                // Define interface for LeaseSpecialCard props
                interface LeaseSpecialCardProps {
                  title: string;
                  offer: string;
                  description: string;
                }
                
                // Reusable component for look & lease specials
                const LeaseSpecialCard = ({ title, offer, description }: LeaseSpecialCardProps) => (
                  <div className="bg-white border border-[#E5E2D9] rounded-lg p-4 text-center shadow-sm">
                    <p className="text-gray-900 font-medium mb-2">{title}</p>
                    <p className="text-[#CAB06B] font-bold mb-1">{offer}</p>
                    <p className="text-sm text-gray-600">{description}</p>
                  </div>
                );

                // Data for look & lease specials
                const leaseSpecialsData = [
                  {
                    title: "Same-Day Signing",
                    offer: "$750 credit",
                    description: "For applications within 24h of tour"
                  },
                  {
                    title: "Application Fee",
                    offer: "$0 fee",
                    description: "Waived for on-site applications"
                  },
                  {
                    title: "Security Deposit",
                    offer: "50% off",
                    description: "For same-week decisions"
                  },
                  {
                    title: "Selection Priority",
                    offer: "First choice",
                    description: "With same-day application"
                  }
                ];

                return (
                  <div className="bg-[#F5EFD6] rounded-lg p-6 mb-6 shadow-sm">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Look & Lease Specials</h3>
                      <p className="text-gray-700">Incentives for quick decision-making:</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {leaseSpecialsData.map((item, index) => (
                        <LeaseSpecialCard
                          key={index}
                          title={item.title}
                          offer={item.offer}
                          description={item.description}
                        />
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </Section>
            
          <Section title="Value-Add Alternatives" divider>
            {(() => {
              // Reusable component for value-add cards
              // Define interface for ValueAddCard props
              interface ValueAddCardProps {
                title: string;
                description: string;
                items: Array<{
                  label: string;
                  description: string;
                }>;
              }
              
              const ValueAddCard = ({ title, description, items }: ValueAddCardProps) => (
                <div className="bg-white rounded-lg border border-[#E5E2D9] p-6 shadow-sm h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 mb-4">{description}</p>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 mt-1">•</span>
                        <div>
                          <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                          <span className="text-gray-700">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              // Data for value-add cards
              const valueAddData = [
                {
                  title: "Technology Package",
                  description: "Alternative to rent concessions:",
                  items: [
                    {
                      label: "Smart Home Upgrade",
                      description: "Complete package ($1,200 value) in lieu of 2 weeks free rent"
                    },
                    {
                      label: "Fiber Internet Credit",
                      description: "6 months prepaid internet service ($600 value)"
                    },
                    {
                      label: "Home Office Bundle",
                      description: "Ergonomic desk setup and tech accessories ($800 value)"
                    },
                    {
                      label: "Entertainment Package",
                      description: "Smart TV and sound system installation ($950 value)"
                    }
                  ]
                },
                {
                  title: "Parking Incentives",
                  description: "Structured parking incentives:",
                  items: [
                    {
                      label: "Complimentary Reserved Parking",
                      description: "6 months free ($900 value) for premium units"
                    },
                    {
                      label: "EV Charging Priority",
                      description: "Guaranteed access to charging stations"
                    },
                    {
                      label: "Guest Parking Package",
                      description: "10 complimentary guest parking passes per month"
                    },
                    {
                      label: "Valet Service Credit",
                      description: "$25 monthly credit for occasional valet service"
                    }
                  ]
                },
                {
                  title: "Amenity Fee Credits",
                  description: "Alternative fee structure options:",
                  items: [
                    {
                      label: "Waived Amenity Fee",
                      description: "First year waived ($350 value) for early signers"
                    },
                    {
                      label: "Amenity+ Package",
                      description: "Premium access tier including guest suite privileges"
                    },
                    {
                      label: "Wellness Credit",
                      description: "$50 monthly credit toward fitness/spa services"
                    },
                    {
                      label: "Social Fund",
                      description: "$25 monthly credit toward community events and activities"
                    }
                  ]
                },
                {
                  title: "Move-In Package",
                  description: "Convenience services for new residents:",
                  items: [
                    {
                      label: "White Glove Moving",
                      description: "Complimentary moving service ($1,200 value) with specialized high-rise logistics"
                    },
                    {
                      label: "Designer Consultation",
                      description: "2-hour session with interior designer ($350 value)"
                    },
                    {
                      label: "Durham Welcome Package",
                      description: "Curated local products, Durham Performing Arts Center tickets, and restaurant gift cards ($350 value)"
                    },
                    {
                      label: "First Month Essentials",
                      description: "Stocked pantry and household basics ($200 value)"
                    }
                  ]
                }
              ];

              return (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {valueAddData.map((card, index) => (
                    <ValueAddCard
                      key={index}
                      title={card.title}
                      description={card.description}
                      items={card.items}
                    />
                  ))}
                </div>
              );
            })()}
          </Section>
            
          <Section title="Renewal Strategy" divider>
            {(() => {
              // Tier Card Component
              // Define interface for RenewalTierCard props
              interface RenewalTierCardProps {
                tier: string;
                title: string;
                description: string;
              }
              
              const RenewalTierCard = ({ tier, title, description }: RenewalTierCardProps) => (
                <div className="bg-white rounded-lg border border-[#E5E2D9] p-5 shadow-sm h-full flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#F5EFD6] text-[#CAB06B] flex items-center justify-center text-sm font-bold shrink-0 mt-[2px]">
                    {tier}
                  </div>
                  <div>
                    <Text variant="body" color="primary" className="text-base font-medium leading-tight">
                      {title}
                    </Text>
                    <Text variant="caption" color="secondary" className="text-sm mt-1">
                      {description}
                    </Text>
                  </div>
                </div>
              );

              // Renewal Incentive Card Component
              // Define interface for RenewalIncentiveCard props
              interface RenewalIncentiveCardProps {
                title: string;
                items: Array<{
                  label: string;
                  description: string;
                }>;
              }
              
              const RenewalIncentiveCard = ({ title, items }: RenewalIncentiveCardProps) => (
                <div className="bg-white rounded-lg border border-[#E5E2D9] p-6 shadow-sm h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <ul className="space-y-3">
                    {items.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 mt-1">•</span>
                        <div>
                          <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                          <span className="text-gray-700">{item.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );

              // Data for tier cards
              const tierData = [
                {
                  tier: "1",
                  title: "Standard Tier: 4-6% increase",
                  description: "Basic renewal with no special qualifications"
                },
                {
                  tier: "2",
                  title: "Preferred Tier: 3-4% increase",
                  description: "On-time payment history and good standing"
                },
                {
                  tier: "3",
                  title: "Premium Tier: 2-3% increase",
                  description: "Long-term residents (13+ months) with excellent payment history"
                },
                {
                  tier: "4",
                  title: "VIP Tier: 0-2% increase",
                  description: "Residents renewing for 24+ months with perfect payment history"
                }
              ];

              // Data for incentive cards
              const incentiveData = [
                {
                  title: "Renewal Incentives",
                  items: [
                    {
                      label: "Unit Refresh",
                      description: "Carpet cleaning, paint touch-up, and fixture updates"
                    },
                    {
                      label: "Upgrade Credit",
                      description: "$500-750 credit toward unit upgrades for 18+ month renewals"
                    },
                    {
                      label: "Amenity Credit",
                      description: "50% reduced amenity fee for renewal term"
                    },
                    {
                      label: "Parking Upgrade",
                      description: "Complimentary upgrade to reserved parking"
                    }
                  ]
                },
                {
                  title: "Lease Term Options",
                  items: [
                    {
                      label: "9-Month Option",
                      description: "8% premium over standard 12-month rate"
                    },
                    {
                      label: "12-Month Option",
                      description: "Standard renewal rate based on tier"
                    },
                    {
                      label: "18-Month Option",
                      description: "2% discount from standard 12-month rate"
                    },
                    {
                      label: "24-Month Option",
                      description: "4% discount from standard 12-month rate"
                    }
                  ]
                },
                {
                  title: "Loyalty Benefits",
                  items: [
                    {
                      label: "Anniversary Gift",
                      description: "Annual recognition with local experience gift"
                    },
                    {
                      label: "Resident VIP Status",
                      description: "Priority maintenance, amenity reservations, and event access"
                    },
                    {
                      label: "Referral Bonus Increase",
                      description: "Enhanced referral bonus of $1,500 for long-term residents"
                    },
                    {
                      label: "Home Customization",
                      description: "Approved customization options for 2+ year residents"
                    }
                  ]
                }
              ];

              return (
                <div className="space-y-6 mb-8">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Tiered Increases</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {tierData.map((tier, index) => (
                        <RenewalTierCard
                          key={index}
                          tier={tier.tier}
                          title={tier.title}
                          description={tier.description}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {incentiveData.map((incentive, index) => (
                      <RenewalIncentiveCard
                        key={index}
                        title={incentive.title}
                        items={incentive.items}
                      />
                    ))}
                  </div>
                </div>
              );
            })()}
            
            {(() => {
              // PricingMatrix component
              // Define interface for PricingMatrix props
              interface PricingMatrixProps {
                title: string;
                description: string;
                headers: string[];
                rows: string[][];
              }
              
              const PricingMatrix = ({ title, description, headers, rows }: PricingMatrixProps) => (
                <div className="bg-white rounded-lg border border-[#E5E2D9] p-6 shadow-sm mb-8">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-[#F5EFD6]">
                          {headers.map((header, index) => (
                            <th key={index} className="border border-[#E5E2D9] p-3 text-gray-900 font-medium text-left">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className={rowIndex % 2 === 1 ? "bg-[#F9F8F4]" : "bg-white"}>
                            {row.map((cell, cellIndex) => (
                              <td
                                key={cellIndex}
                                className={`border border-[#E5E2D9] p-3 ${
                                  cellIndex === 0
                                    ? "text-left font-medium text-gray-900"
                                    : "text-center text-gray-700"
                                }`}
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );

              // Data for pricing matrix
              const matrixData = {
                title: "Competitive Pricing Matrix",
                description: "Recommended pricing position relative to competitive set (expressed as % above/below)",
                headers: ["Property", "Studios", "1 Bedrooms", "2 Bedrooms"],
                rows: [
                  ["One City Center", "+8-10%", "+10-12%", "+10-12%"],
                  ["Van Alen", "+12-15%", "+12-15%", "+14-16%"],
                  ["511 Faye", "+14-17%", "+15-18%", "+15-18%"],
                  ["Cortland Bull City", "+18-22%", "+16-20%", "+18-22%"]
                ]
              };

              return (
                <PricingMatrix
                  title={matrixData.title}
                  description={matrixData.description}
                  headers={matrixData.headers}
                  rows={matrixData.rows}
                />
              );
            })()}
            
            <HighlightBox variant="secondary">
              <Text variant="body" color="secondary">
                This pricing and incentive framework provides The Novus with a premium positioning strategy that capitalizes on its unique high-rise format and 27-story height advantage in Downtown Durham. The vertical stratification approach maximizes revenue potential by floor band while ensuring competitive lease-up velocity for North Carolina's tallest residential tower.
              </Text>
            </HighlightBox>
          </Section>
            
          <Section title="Detailed Pricing & Incentive Strategy" divider>
            {(() => {
              // Rate Card Component
              // Define interface for DetailedRateCard props
              interface DetailedRateCardProps {
                title: string;
                subtitle: string;
                items: Array<{
                  title: string;
                  price: string;
                  description: string;
                }>;
                footer?: string;
              }
              
              const DetailedRateCard = ({ title, subtitle, items, footer }: DetailedRateCardProps) => (
                <div className="bg-white rounded-lg border border-[#E5E2D9] shadow-sm h-full overflow-hidden">
                  <div className="bg-[#F5EFD6] p-4 border-b border-[#E5E2D9]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-600">{subtitle}</p>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    {items.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#F5EFD6] text-[#CAB06B] flex items-center justify-center shrink-0 mt-1">
                          •
                        </div>
                        <div>
                          <p className="text-base font-medium text-gray-900 mb-1">{item.title}</p>
                          <p className="text-gray-700" dangerouslySetInnerHTML={{__html: item.price}}></p>
                          <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {footer && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#E5E2D9]">
                      <p className="text-sm text-gray-500 italic">{footer}</p>
                    </div>
                  )}
                </div>
              );

              // Data for InitialLeaseRateCard
              const initialRateData = {
                title: "Initial Leasing Rates",
                subtitle: "Base pricing for all unit types",
                items: [
                  {
                    title: "Studios",
                    price: "Starting at <span class='font-bold text-[#CAB06B]'>$2,150/month</span>",
                    description: "550-650 sq ft ($3.60-$3.90/sq ft)"
                  },
                  {
                    title: "One Bedrooms",
                    price: "Starting at <span class='font-bold text-[#CAB06B]'>$2,850/month</span>",
                    description: "750-950 sq ft ($3.30-$3.65/sq ft)"
                  },
                  {
                    title: "Two Bedrooms",
                    price: "Starting at <span class='font-bold text-[#CAB06B]'>$3,800/month</span>",
                    description: "1,100-1,400 sq ft ($3.10-$3.45/sq ft)"
                  }
                ],
                footer: "Premium pricing reflects The Novus's superior height, views, and luxury finishes compared to downtown competitors."
              };

              // Data for ShortTermIncentiveCard
              const shortTermData = {
                title: "Short-Term Incentives",
                subtitle: "Initial lease-up promotions",
                items: [
                  {
                    title: "Application Fee Waiver",
                    price: "$0 application fee ($50 value)",
                    description: "For all initial on-site applications"
                  },
                  {
                    title: "First Month Concessions",
                    price: "Up to <span class='font-bold text-[#CAB06B]'>8 weeks free</span> rent",
                    description: "For 12+ month leases signed during launch phase"
                  },
                  {
                    title: "Look & Lease Bonus",
                    price: "<span class='font-bold text-[#CAB06B]'>$750 rent credit</span> for same-day signing",
                    description: "Limited-time promotion for decision makers"
                  }
                ],
                footer: "Incentives scaled by floor band and lease term length, with premium units (floors 20-27) receiving reduced concessions."
              };

              // Data for ResidentRetentionCard
              const retentionData = {
                title: "Resident Retention",
                subtitle: "Long-term loyalty incentives",
                items: [
                  {
                    title: "Renewal Discounts",
                    price: "Tiered increases from <span class='font-bold text-[#CAB06B]'>0-6%</span>",
                    description: "Based on payment history and lease term"
                  },
                  {
                    title: "Referral Bonuses",
                    price: "Up to <span class='font-bold text-[#CAB06B]'>$1,500</span> for resident referrals",
                    description: "Split between referrer and new resident"
                  },
                  {
                    title: "Loyalty Benefits",
                    price: "Unit refresh and VIP amenity access",
                    description: "Anniversary gifts and priority maintenance"
                  }
                ],
                footer: "Comprehensive strategy designed to maximize resident satisfaction and minimize turnover in a competitive market."
              };

              return (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <DetailedRateCard
                      title={initialRateData.title}
                      subtitle={initialRateData.subtitle}
                      items={initialRateData.items}
                      footer={initialRateData.footer}
                    />
                    
                    <DetailedRateCard
                      title={shortTermData.title}
                      subtitle={shortTermData.subtitle}
                      items={shortTermData.items}
                      footer={shortTermData.footer}
                    />
                    
                    <DetailedRateCard
                      title={retentionData.title}
                      subtitle={retentionData.subtitle}
                      items={retentionData.items}
                      footer={retentionData.footer}
                    />
                  </div>
                  
                  <div className="bg-[#F5EFD6] rounded-lg border border-[#E5E2D9] p-6 shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Positioning Summary</h3>
                    <p className="text-gray-700 mb-4">
                      The Novus's pricing strategy capitalizes on its unique position as Downtown Durham's premier 27-story high-rise, with a significant advantage in height, views, and luxury finishes compared to all competitors in the market.
                    </p>
                    <p className="text-gray-700">
                      The vertical stratification pricing model with floor-specific premiums creates a wide range of price points that maximize appeal to the target demographic of young professionals, executives, and empty nesters seeking luxury amenities and unmatched downtown views.
                    </p>
                  </div>
                </>
              );
            })()}
          </Section>
        </PageContainer>
      </Layout>
    </>
  );
}