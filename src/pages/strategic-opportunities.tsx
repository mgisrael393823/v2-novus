
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { GatedContent } from "@/components/deprecated/GatedContent";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { PageContainer, Section } from "@/components/ui/Container";
import { Paragraph } from "@/components/ui/Typography";

export default function StrategicOpportunities() {
  return (
    <>
      <Head>
        <title>Strategic Opportunities - The Novus</title>
        <meta name="description" content="Strategic opportunities analysis for The Novus high-rise apartments in Downtown Durham" />
      </Head>
      
      <Layout>
        <PageContainer
          title="Strategic Opportunities"
          intro="Based on our comprehensive competitive analysis of the Downtown Durham/Five Points District multifamily market, we've identified key strategic opportunities for The Novus to differentiate itself through its unique 27-story high-rise format and maximize its competitive position."
        >
          <HighlightBox variant="accent" title="Executive Summary" className="mb-12">
            <Paragraph>
              The Novus has identified 5 key strategic opportunities in the Durham market, focusing on premium high-rise positioning, stratified amenity experiences, superior sound isolation, specialized offerings for Duke University affiliates, and cutting-edge technology solutions that address gaps in existing competitor offerings. These opportunities will be implemented in three phases to maximize market differentiation and leasing velocity.
            </Paragraph>
          </HighlightBox>

          <Section title="Target Demographics and Local Partnerships">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Card Container: Demographics */}
              <div className="bg-[#F8F6EE] border border-[#E5E2D9] rounded-lg px-6 py-6 shadow-sm flex flex-col">
                {/* Card Header */}
                <h3 className="text-xl font-semibold text-[#333333] mb-6 flex items-center h-8">
                  <span className="w-2 h-8 bg-[#CAB06B] rounded mr-3 flex-shrink-0"></span>
                  Target Niche Demographics
                </h3>
                
                {/* Card Content */}
                <div className="space-y-8">
                  {/* Item 1 */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <rect width="18" height="10" x="3" y="3" rx="2"></rect>
                          <path d="M7 13h10v8H7z"></path>
                        </svg>
                        <span className="leading-none">TECHNOLOGY PROFESSIONALS</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        Senior software engineers, data scientists, and tech executives employed in Downtown Durham tech firms and startups. This demographic values high-end smart home features, premium connectivity, and proximity to the growing innovation district.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                        <span className="leading-none">DUKE UNIVERSITY AFFILIATES</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        Faculty, researchers, administrators, and medical professionals from Duke University and Duke University Health System. This group prioritizes sophisticated living spaces, academic-friendly amenities, and convenient access to campus facilities.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item 3 */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span className="leading-none">YOUNG URBAN PROFESSIONALS</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        High-earning professionals (28-42) seeking premium downtown living with unmatched views, walkability to entertainment and dining, and status-oriented amenities. This group has household incomes averaging $110K+ and values experiential living.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card Container: Partnerships */}
              <div className="bg-[#F2F7FC] border border-[#E2E8F0] rounded-lg px-6 py-6 shadow-sm flex flex-col">
                {/* Card Header */}
                <h3 className="text-xl font-semibold text-[#333333] mb-6 flex items-center h-8 whitespace-nowrap">
                  <span className="w-2 h-8 bg-[#2C5282] rounded mr-3 flex-shrink-0"></span>
                  Strategic Partnership Opportunities
                </h3>
                
                {/* Card Content */}
                <div className="space-y-8">
                  {/* Item A */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                          <path d="M9 22v-4h6v4"></path>
                          <path d="M8 6h.01"></path>
                          <path d="M16 6h.01"></path>
                          <path d="M12 6h.01"></path>
                          <path d="M12 10h.01"></path>
                          <path d="M12 14h.01"></path>
                          <path d="M16 10h.01"></path>
                          <path d="M16 14h.01"></path>
                          <path d="M8 10h.01"></path>
                          <path d="M8 14h.01"></path>
                        </svg>
                        <span className="leading-none">DURHAM TECH COMPANIES</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        Establish exclusive corporate housing agreements with leading Durham-based tech companies, offering preferred rates and custom lease terms for relocating employees. Create dedicated landing pages for each corporate partner with customized virtual tours.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item B */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                        </svg>
                        <span className="leading-none">DUKE UNIVERSITY HOUSING PROGRAM</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        Develop a preferred housing program for Duke University faculty, staff, and medical personnel, featuring academic-year lease alignments, dedicated shuttle service, and special incentives for long-term commitments. Establish presence at university hiring events.
                      </p>
                    </div>
                  </div>
                  
                  {/* Item C */}
                  <div className="pl-2">
                    {/* Content */}
                    <div>
                      {/* Title with icon */}
                      <h4 className="text-[#333333] font-bold mb-2 flex items-center h-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 text-[#2C5282] flex-shrink-0">
                          <path d="M8.56 3.69a9 9 0 0 0-2.92 1.95"></path>
                          <path d="M3.69 8.56A9 9 0 0 0 3 12"></path>
                          <path d="M3.69 15.44a9 9 0 0 0 1.95 2.92"></path>
                          <path d="M8.56 20.31A9 9 0 0 0 12 21"></path>
                          <path d="M15.44 20.31a9 9 0 0 0 2.92-1.95"></path>
                          <path d="M20.31 15.44A9 9 0 0 0 21 12"></path>
                          <path d="M20.31 8.56a9 9 0 0 0-1.95-2.92"></path>
                          <path d="M15.44 3.69A9 9 0 0 0 12 3"></path>
                          <path d="M12 12v9"></path>
                          <path d="M12 3v9"></path>
                          <path d="M7 12H3"></path>
                          <path d="M21 12h-4"></path>
                          <path d="m8.7 8.7-3-3"></path>
                          <path d="m18.3 18.3-3-3"></path>
                          <path d="m8.7 15.3-3 3"></path>
                          <path d="m18.3 5.7-3 3"></path>
                          <circle cx="12" cy="12" r="2"></circle>
                        </svg>
                        <span className="leading-none">HEALTHCARE INSTITUTIONS</span>
                      </h4>
                      
                      {/* Description */}
                      <p className="text-[#666666] text-sm leading-relaxed ml-8">
                        Create strategic alliances with Duke University Health System and other local healthcare institutions to provide specialized housing options for medical professionals, featuring sound-isolation packages for night shift workers and flexible lease terms aligned with residency programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white border border-l-4 border-[#CAB06B] p-6 mb-8">
              <p className="text-[#333333] font-medium mb-2">Implementation Strategy</p>
              <p className="text-[#666666] text-sm">
                The Novus will implement a targeted outreach program for each demographic segment, with customized marketing materials and dedicated leasing specialists for each vertical. Partnership opportunities will be pursued through executive-level engagement with key decision-makers at target organizations, with formal agreements to be established 3-6 months prior to opening.
              </p>
            </div>
          </Section>
          
          <GatedContent 
            title="Strategic Opportunities" 
            teaser="Our detailed analysis has identified multiple opportunities for competitive advantage in the Durham market, addressing gaps in current offerings and leveraging The Novus's distinctive vertical neighborhood concept. These opportunities span premium view units, amenity stratification across 27 floors, resident experience tailored to Durham professionals, and marketing positioning as Downtown Durham's premier high-rise residential tower."
          >
            <div className="space-y-12">
              <Section className="mb-12" size="sm">
                {/* Enhanced Section Title Container */}
                <div className="bg-[#F9F7F2] rounded-md shadow-sm border-l-4 border-[#CAB06B] px-6 py-6 mb-12">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3">
                      <rect x="2" y="11" width="5" height="10" rx="1" />
                      <rect x="10" y="7" width="5" height="14" rx="1" />
                      <rect x="18" y="4" width="5" height="17" rx="1" />
                    </svg>
                    <Heading level={2} className="text-2xl md:text-3xl font-bold text-[#333333]">High-Rise Positioning Advantages</Heading>
                  </div>
                  <p className="text-[#666666] pl-9 mb-4">
                    Strategic opportunities that leverage The Novus's unique 27-story format to create exceptional differentiation in the Durham market.
                  </p>
                  <div className="w-full h-px bg-[#E5E2D9] mt-2"></div>
                </div>
                
                {/* Vertically stacked compound cards */}
                <div className="space-y-6 mb-8">
                  {/* Advantage 1: Premium View Units */}
                  <div className="rounded-lg shadow-md overflow-hidden border-l-4 border-[#CAB06B]">
                    {/* Card Header */}
                    <div className="bg-[#F4EFE0] px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#CAB06B] flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">1</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333]">Premium View Units</h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gap Identified Section */}
                        <div className="md:col-span-1 border-r border-[#E5E2D9] pr-6">
                          <div className="flex items-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5826D] mr-3 mt-1 flex-shrink-0">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p className="font-semibold text-[#333333]">Gap Identified</p>
                          </div>
                          <p className="text-[#666666] text-sm">
                            Limited true high-rise formats in Durham with One City Center (22 stories) as the only comparable property offering panoramic views. No other competitor exceeds 15 stories.
                          </p>
                        </div>
                        
                        {/* Implementation Section */}
                        <div className="md:col-span-2">
                          <p className="font-semibold text-[#333333] uppercase mb-4">Implementation</p>
                          <ul className="space-y-3 pl-0">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Strategic tiered pricing based on floor level and view direction</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Floor-to-ceiling windows in all units to maximize Durham skyline views</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Private balconies on premium units (floors 20-27) with unobstructed views</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Marketing campaign highlighting exclusive perspectives from North Carolina's tallest residential tower</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Special naming conventions for premium view lines ("Skyline Collection," "University Vista Collection")</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Position Footer */}
                      <div className="mt-6 pt-4 border-t border-[#E5E2D9]">
                        <div className="bg-[#F4EFE0] rounded border-l-4 border-[#CAB06B] h-14 flex items-center px-5 py-4 box-border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 flex-shrink-0">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="text-sm italic m-0 leading-normal">Position as "Elevated Living" or "Durham's Most Exclusive Address"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advantage 2: Stratified Amenity Experience */}
                  <div className="rounded-lg shadow-md overflow-hidden border-l-4 border-[#2C5282]">
                    {/* Card Header */}
                    <div className="bg-[#EDF0F7] px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2C5282] flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">2</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333]">Stratified Amenity Experience</h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gap Identified Section */}
                        <div className="md:col-span-1 border-r border-[#E5E2D9] pr-6">
                          <div className="flex items-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5826D] mr-3 mt-1 flex-shrink-0">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p className="font-semibold text-[#333333]">Gap Identified</p>
                          </div>
                          <p className="text-[#666666] text-sm">
                            Durham competitors (Van Alen, 511 Faye) offer single-level amenity experiences that feel crowded during peak times and offer no exclusivity for premium residents.
                          </p>
                        </div>
                        
                        {/* Implementation Section */}
                        <div className="md:col-span-2">
                          <p className="font-semibold text-[#333333] uppercase mb-4">Implementation</p>
                          <ul className="space-y-3 pl-0">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Multi-level amenity experience with strategically distributed spaces throughout all 27 floors</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Exclusive top-floor Sky Lounge with private dining room and demonstration kitchen (residents above floor 20 only)</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Mid-tower Wellness Floor (14th floor) with spa, yoga studio, and meditation spaces</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Ground-level social spaces integrated with 22,000+ sq ft retail district</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Private elevator access for penthouse level residents</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Position Footer */}
                      <div className="mt-6 pt-4 border-t border-[#E5E2D9]">
                        <div className="bg-[#EDF0F7] rounded border-l-4 border-[#2C5282] h-14 flex items-center px-5 py-4 box-border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 flex-shrink-0">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="text-sm italic m-0 leading-normal">Position as "The Vertical Neighborhood" or "Amenity Ecosystem"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Advantage 3: Superior Sound Isolation */}
                  <div className="rounded-lg shadow-md overflow-hidden border-l-4 border-[#60A561]">
                    {/* Card Header */}
                    <div className="bg-[#F2F7E8] px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#60A561] flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">3</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333]">Superior Sound Isolation</h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gap Identified Section */}
                        <div className="md:col-span-1 border-r border-[#E5E2D9] pr-6">
                          <div className="flex items-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5826D] mr-3 mt-1 flex-shrink-0">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p className="font-semibold text-[#333333]">Gap Identified</p>
                          </div>
                          <p className="text-[#666666] text-sm">
                            Reviews for Berkshire Ninth Street and 511 Faye specifically mention noise issues between units and from common areas. This is particularly important for Durham's target demographic of professionals.
                          </p>
                        </div>
                        
                        {/* Implementation Section */}
                        <div className="md:col-span-2">
                          <p className="font-semibold text-[#333333] uppercase mb-4">Implementation</p>
                          <ul className="space-y-3 pl-0">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Triple-pane windows with specialized urban acoustic glass to reduce external noise</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Concrete construction with enhanced acoustic isolation between units</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Proprietary SoundShield™ technology in all shared walls (40% better than industry standard)</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Acoustic ceiling and flooring treatments in all units</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Smart home systems with sound masking technology options</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Position Footer */}
                      <div className="mt-6 pt-4 border-t border-[#E5E2D9]">
                        <div className="bg-[#F2F7E8] rounded border-l-4 border-[#60A561] h-14 flex items-center px-5 py-4 box-border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 flex-shrink-0">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="text-sm italic m-0 leading-normal">Position as "The Quiet Sanctuary" or "Peaceful High-Rise Living"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              <Section className="mb-12" size="sm">
                {/* Enhanced Section Title Container */}
                <div className="bg-[#F2F7FC] rounded-md shadow-sm border-l-4 border-[#2C5282] px-6 py-6 mb-12">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <Heading level={2} className="text-2xl md:text-3xl font-bold text-[#333333]">Durham Market Opportunities</Heading>
                  </div>
                  <p className="text-[#666666] pl-9 mb-4">
                    Targeted opportunities that address specific gaps in the Durham market for academic, medical, and technology professionals.
                  </p>
                  <div className="w-full h-px bg-[#E5E2D9] mt-2"></div>
                </div>
                
                <div className="space-y-6 mb-8">
                  {/* Opportunity 4: Duke University & Medical Professional Focus */}
                  <div className="rounded-lg shadow-md overflow-hidden border-l-4 border-[#9F7AEA]">
                    {/* Card Header */}
                    <div className="bg-[#F5F0FE] px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#9F7AEA] flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">4</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333]">Duke University & Medical Professional Focus</h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gap Identified Section */}
                        <div className="md:col-span-1 border-r border-[#E5E2D9] pr-6">
                          <div className="flex items-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5826D] mr-3 mt-1 flex-shrink-0">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p className="font-semibold text-[#333333]">Gap Identified</p>
                          </div>
                          <p className="text-[#666666] text-sm">
                            Despite proximity to Duke University and Medical Center, no competitor explicitly caters to the needs of medical professionals and academics with tailored services and amenities.
                          </p>
                        </div>
                        
                        {/* Implementation Section */}
                        <div className="md:col-span-2">
                          <p className="font-semibold text-[#333333] uppercase mb-4">Implementation</p>
                          <ul className="space-y-3 pl-0">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Dedicated study rooms and academic workspaces for visiting scholars and faculty</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Medical professional package including blackout shades, premium sound isolation, and specialized laundry service</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Duke shuttle service with direct connection to medical campus</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Partnership with Duke Health for resident wellness programming</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Specialized lease terms aligned with academic and medical residency schedules</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Position Footer */}
                      <div className="mt-6 pt-4 border-t border-[#E5E2D9]">
                        <div className="bg-[#F5F0FE] rounded border-l-4 border-[#9F7AEA] h-14 flex items-center px-5 py-4 box-border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9F7AEA] mr-3 flex-shrink-0">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="text-sm italic m-0 leading-normal">Position as "Durham's Academic & Medical Professional Address"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Opportunity 5: Premium Technology Hub */}
                  <div className="rounded-lg shadow-md overflow-hidden border-l-4 border-[#F6AD55]">
                    {/* Card Header */}
                    <div className="bg-[#FEF4E8] px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F6AD55] flex items-center justify-center mr-4">
                          <span className="text-white text-2xl font-bold">5</span>
                        </div>
                        <h3 className="text-2xl font-bold text-[#333333]">Premium Technology Hub</h3>
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="bg-white p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Gap Identified Section */}
                        <div className="md:col-span-1 border-r border-[#E5E2D9] pr-6">
                          <div className="flex items-start mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#E5826D] mr-3 mt-1 flex-shrink-0">
                              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                            <p className="font-semibold text-[#333333]">Gap Identified</p>
                          </div>
                          <p className="text-[#666666] text-sm">
                            Research Triangle's booming tech sector represents 42% of Durham's high-income professionals, but competitors like Cortland Bull City and Van Alen offer only basic technology amenities with outdated systems.
                          </p>
                        </div>
                        
                        {/* Implementation Section */}
                        <div className="md:col-span-2">
                          <p className="font-semibold text-[#333333] uppercase mb-4">Implementation</p>
                          <ul className="space-y-3 pl-0">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Whole-building mesh Wi-Fi network with guaranteed gigabit speeds throughout</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Tech concierge service for device setup, smart home integration and troubleshooting</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Advanced building-wide API system allowing residents to create custom automation routines</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Private entrepreneurial suites with secure server hosting options</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Technology demonstration lab with rotating partnerships with Research Triangle innovators</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      {/* Position Footer */}
                      <div className="mt-6 pt-4 border-t border-[#E5E2D9]">
                        <div className="bg-[#FEF4E8] rounded border-l-4 border-[#F6AD55] h-14 flex items-center px-5 py-4 box-border">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F6AD55] mr-3 flex-shrink-0">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          <p className="text-sm italic m-0 leading-normal">Position as "Durham's Innovation Address" or "The Connected Tower"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Section>

              <Section className="mb-12" size="sm">
                {/* Section Header - Matching other section headers */}
                <div className="bg-[#F9F7F2] rounded-md shadow-sm border-l-4 border-[#CAB06B] px-6 py-6 mb-12">
                  <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                    </svg>
                    <Heading level={2} className="text-2xl md:text-3xl font-bold text-[#333333]">Implementation Priorities</Heading>
                  </div>
                  <p className="text-[#666666] pl-9 mb-4">
                    A strategic three-phase execution plan to systematically deploy all advantages and opportunities, creating a clear path from pre-opening preparation to ongoing optimization.
                  </p>
                  <div className="w-full h-px bg-[#E5E2D9] mt-2"></div>
                </div>
                
                {/* Introduction paragraph */}
                <div className="mb-10">
                  <p className="text-[#4A5568] mb-6">
                    The Novus implementation strategy progresses through three key phases, each building upon the previous to maximize competitive advantage in the Durham market. This phased approach ensures all strategic opportunities are effectively deployed in a coordinated sequence.
                  </p>
                </div>
                
                {/* Timeline container */}
                <div className="relative">
                  {/* Horizontal Timeline for desktop */}
                  <div className="hidden md:block">
                    {/* Horizontal Timeline Connector */}
                    <div className="absolute top-[52px] left-[100px] right-[100px] h-1 bg-[#CAB06B] z-0"></div>
                    
                    {/* Timeline phases container */}
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {/* Phase 1: Pre-Opening */}
                      <div className="bg-[#F9F7F2] rounded-lg shadow-sm relative z-10 border border-[#E5E2D9] border-b-4 border-b-[#CAB06B]">
                        {/* Number Circle - Positioned to overlap the timeline */}
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#CAB06B] flex items-center justify-center shadow-sm z-10">
                          <span className="text-white text-xl font-bold">1</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="pt-10 pb-6 px-6">
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-[#333333] mb-1">Pre-Opening Phase</h3>
                            <p className="text-[#666666] text-sm">Foundation Building • 6-12 months pre-launch</p>
                            <div className="w-16 h-px bg-[#E5E2D9] mx-auto my-4"></div>
                          </div>
                          
                          <ul className="space-y-3 pl-0 mb-4">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Finalize stratified floor plan pricing strategy</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Develop multi-level amenity programming</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Establish Duke University partnerships</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Create technology partner ecosystem</span>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                      
                      {/* Phase 2: Opening */}
                      <div className="bg-[#F2F7FC] rounded-lg shadow-sm relative z-10 border border-[#E5E2D9] border-b-4 border-b-[#2C5282]">
                        {/* Number Circle */}
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#2C5282] flex items-center justify-center shadow-sm z-10">
                          <span className="text-white text-xl font-bold">2</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="pt-10 pb-6 px-6">
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-[#333333] mb-1">Opening Phase</h3>
                            <p className="text-[#666666] text-sm">Market Positioning • First 3 months</p>
                            <div className="w-16 h-px bg-[#E5E2D9] mx-auto my-4"></div>
                          </div>
                          
                          <ul className="space-y-3 pl-0 mb-4">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Launch "Skyline Collection" campaign</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Activate technology ecosystem event</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Introduce Duke Health services</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Implement sound isolation demos</span>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                      
                      {/* Phase 3: Ongoing */}
                      <div className="bg-[#F2F7E8] rounded-lg shadow-sm relative z-10 border border-[#E5E2D9] border-b-4 border-b-[#60A561]">
                        {/* Number Circle */}
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#60A561] flex items-center justify-center shadow-sm z-10">
                          <span className="text-white text-xl font-bold">3</span>
                        </div>
                        
                        {/* Card Content */}
                        <div className="pt-10 pb-6 px-6">
                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold text-[#333333] mb-1">Ongoing Phase</h3>
                            <p className="text-[#666666] text-sm">Optimization • Continuous improvement</p>
                            <div className="w-16 h-px bg-[#E5E2D9] mx-auto my-4"></div>
                          </div>
                          
                          <ul className="space-y-3 pl-0 mb-4">
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Implement stratified resident events</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Launch Durham cultural programming</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Rotate technology partnerships</span>
                            </li>
                            <li className="flex items-start">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                              <span className="text-sm">Develop custom sound isolation packages</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Mobile Timeline (stacked with connecting line) */}
                  <div className="md:hidden space-y-6 relative">
                    {/* Vertical Timeline Connector */}
                    <div className="absolute left-[31px] top-[58px] bottom-[120px] w-1 bg-[#CAB06B] z-0"></div>
                    
                    {/* Phase 1: Pre-Opening */}
                    <div className="bg-[#F9F7F2] rounded-lg shadow-sm relative border-l-4 border-[#CAB06B] pl-16 pr-6 py-6">
                      {/* Number Circle */}
                      <div className="absolute top-[12px] left-[12px] w-12 h-12 rounded-full bg-[#CAB06B] flex items-center justify-center z-10">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#333333] mb-1">Pre-Opening Phase</h3>
                      <p className="text-[#666666] text-sm mb-4">Foundation Building • 6-12 months pre-launch</p>
                      
                      <ul className="space-y-2 pl-0 mb-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Finalize stratified floor plan pricing strategy</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Develop multi-level amenity programming</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Establish Duke University partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#CAB06B] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Create technology partner ecosystem</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Phase 2: Opening */}
                    <div className="bg-[#F2F7FC] rounded-lg shadow-sm relative border-l-4 border-[#2C5282] pl-16 pr-6 py-6">
                      {/* Number Circle */}
                      <div className="absolute top-[12px] left-[12px] w-12 h-12 rounded-full bg-[#2C5282] flex items-center justify-center z-10">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#333333] mb-1">Opening Phase</h3>
                      <p className="text-[#666666] text-sm mb-4">Market Positioning • First 3 months</p>
                      
                      <ul className="space-y-2 pl-0 mb-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Launch "Skyline Collection" marketing campaign</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Activate technology ecosystem with event</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Introduce Duke Health services package</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2C5282] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Implement sound isolation demonstrations</span>
                        </li>
                      </ul>
                    </div>
                    
                    {/* Phase 3: Ongoing */}
                    <div className="bg-[#F2F7E8] rounded-lg shadow-sm relative border-l-4 border-[#60A561] pl-16 pr-6 py-6">
                      {/* Number Circle */}
                      <div className="absolute top-[12px] left-[12px] w-12 h-12 rounded-full bg-[#60A561] flex items-center justify-center z-10">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#333333] mb-1">Ongoing Phase</h3>
                      <p className="text-[#666666] text-sm mb-4">Optimization • Continuous improvement</p>
                      
                      <ul className="space-y-2 pl-0 mb-3">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Implement stratified resident events</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Launch Durham cultural programming</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Rotate technology partnerships quarterly</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#60A561] mr-3 mt-1 flex-shrink-0">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span className="text-sm">Develop custom sound isolation packages</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Implementation note */}
                <div className="mt-10">
                  <div className="bg-[#F9F7F2] border border-[#E5E2D9] rounded-lg p-6 text-center">
                    <p className="text-[#4A5568] text-sm mb-0">
                      The implementation strategy commences 12 months prior to opening and progresses through each phase to systematically deploy all strategic advantages.
                    </p>
                  </div>
                </div>
              </Section>
              
              <HighlightBox variant="secondary">
                <p className="text-sm">
                  This strategic opportunities framework provides a comprehensive approach to positioning The Novus as Downtown Durham's premier high-rise residential tower, with specific recommendations that leverage its unique 27-story format, stratified amenity offerings, and targeted positioning for Duke University, medical professionals, and Research Triangle technology workforce.
                </p>
              </HighlightBox>
            </div>
          </GatedContent>
        </PageContainer>
      </Layout>
    </>
  );
}
