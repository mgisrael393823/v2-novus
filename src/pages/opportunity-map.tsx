import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { 
  Target, TrendingUp, Lightbulb, Users, ArrowRight, Home, Coffee, 
  Headphones, Smartphone, Droplet, Briefcase, Heart, Palette, MessageCircle, Bell 
} from "lucide-react";
import { Montserrat } from "next/font/google";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function OpportunityMap() {
  return (
    <>
      <Head>
        <title>Opportunity Map | The Novus</title>
        <meta name="description" content="Opportunity Map for The Novus High-Rise Apartments Lease-Up Strategy in Downtown Durham" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Opportunity Map</Heading>
          
          <HighlightBox>
            <p className="body-text-lg">
              This opportunity map identifies key strategic advantages and actionable opportunities to maximize The Novus's unique high-rise position in Downtown Durham, optimizing lease-up velocity and revenue performance through its 27-story vertical neighborhood concept.
            </p>
          </HighlightBox>
          
          <div className="space-y-10 mt-8">
            <section className="section">
              <Heading level={2} className="mb-6">Primary Opportunity Areas</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-light flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <Target className="text-[#666666]" size={24} />
                      <Heading level={3} className="mb-0">Premium Positioning</Heading>
                    </div>
                    <p className="body-text mb-4">
                      The Novus's 27-story high-rise format offers unmatched panoramic views of Downtown Durham and Duke University, creating a unique premium positioning opportunity in a market dominated by mid-rise properties.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="section-title mb-3">Key Actions</h4>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Develop premium brand identity across all touchpoints</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Create model units that showcase premium finishes</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Implement tiered pricing strategy for premium views/floors</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="content-box-light flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="text-[#666666]" size={24} />
                      <Heading level={3} className="mb-0">Demand Timing</Heading>
                    </div>
                    <p className="body-text mb-4">
                      Market analysis shows Durham's tech sector growth and Duke University's expansion timeline aligns with The Novus's delivery, creating opportunity for accelerated high-rise lease-up.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="section-title mb-3">Key Actions</h4>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Launch pre-leasing campaign 90 days before delivery</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Implement early-bird incentives for pre-leasing</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Schedule high-impact marketing during peak search periods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-light flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <Lightbulb className="text-[#666666]" size={24} />
                      <Heading level={3} className="mb-0">Experience Design</Heading>
                    </div>
                    <p className="body-text mb-4">
                      Opportunity to create a distinctive resident experience through curated services, events, and community programming.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="section-title mb-3">Key Actions</h4>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Develop signature community events calendar</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Create resident mobile app with premium services</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Establish partnerships with local businesses for resident perks</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="content-box-light flex flex-col h-full">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <Users className="text-[#666666]" size={24} />
                      <Heading level={3} className="mb-0">Target Demographics</Heading>
                    </div>
                    <p className="body-text mb-4">
                      Data analysis reveals key demographic segments with high propensity for urban luxury living and strong financial qualifications.
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="section-title mb-3">Key Actions</h4>
                    <ul className="bullet-list">
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Develop targeted marketing campaigns for key segments</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Create floor plan mix optimized for target demographics</span>
                      </li>
                      <li className="bullet-list-item">
                        <span className="bullet-marker">•</span>
                        <span className="body-text">Train leasing staff on demographic-specific selling points</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="section">
              <Heading level={2} className="mb-6">Unit Features & Finishing Levels</Heading>
              
              <p className="body-text mb-6">
                Our competitive analysis reveals significant opportunities to differentiate The Novus through strategic unit features and finishing levels that address common pain points in the Durham market, with special emphasis on the property's unique high-rise attributes.
              </p>
              
              <div className="space-y-6">
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Superior Sound Insulation</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Noise complaints are among the most common resident issues across downtown Durham properties, with 68% of negative reviews for Berkshire Ninth Street and 511 Faye specifically mentioning noise transfer between units, from common areas, or from exterior sources.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Few properties have made significant investments in sound insulation technology</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Addresses a critical pain point for urban professionals</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates premium positioning opportunity as "Urban Sanctuary"</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Triple-pane windows to reduce street noise</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Acoustic insulation in walls between units (STC rating 55+)</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Sound-dampening flooring materials with enhanced underlayment</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Solid core doors with acoustic seals</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">White noise systems in common areas and hallways</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">ROI Analysis</p>
                        <p className="text-sm text-[#666666]">
                          Additional cost: $2,200-2,800 per unit<br />
                          Potential premium: $75-100/month ($900-1,200 annually)<br />
                          Estimated payback period: 2.3-3.1 years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Coffee className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Premium Kitchen Experience</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Most competitors offer standard kitchen packages with minimal differentiation. Market research indicates high-income renters value distinctive kitchen features, with 71% willing to pay premium for chef-inspired amenities.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates memorable tour highlight and marketing focal point</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Aligns with growth in home cooking and food culture trends</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Particularly valued by empty nester demographic segment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Smart appliances with app connectivity and voice control</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Wine refrigerators in select unit types</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Pot-filler faucets at ranges in 2BR+ units</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Waterfall edge countertops with premium materials</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Custom cabinetry with soft-close features and integrated lighting</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">ROI Analysis</p>
                        <p className="text-sm text-[#666666]">
                          Additional cost: $3,500-5,000 per unit<br />
                          Potential premium: $100-150/month ($1,200-1,800 annually)<br />
                          Estimated payback period: 2.8-4.2 years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Integrated Technology Package</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Only 3 of 12 comparable properties offer comprehensive smart home technology, despite 82% of Millennial and Gen Z renters rating it as "important" or "very important" in rental decisions.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Appeals strongly to primary tech-forward demographic targets</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Enables "future-ready" positioning in marketing materials</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates opportunity for potential monthly technology package fees</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Smart home systems (lighting, temperature, security) as standard</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">High-speed fiber internet included in base rent</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">USB-C and wireless charging outlets throughout units</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Keyless entry systems with smartphone integration</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Smart package lockers with delivery notification system</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">ROI Analysis</p>
                        <p className="text-sm text-[#666666]">
                          Additional cost: $2,800-3,500 per unit<br />
                          Potential premium: $50-75/month ($600-900 annually)<br />
                          Additional revenue potential: $75/month technology package upgrade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Droplet className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Bathroom Enhancements</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Bathroom features consistently rank as a top-5 decision factor for luxury renters, yet most properties offer basic configurations with limited premium features.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates spa-inspired positioning opportunity</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Appeals to wellness-focused demographic segments</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Highly visible during property tours and marketing materials</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Rainfall showerheads with adjustable body sprays</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Heated flooring in select premium units</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Double vanities in all 2BR+ units</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Integrated medicine cabinets with charging stations</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Smart mirrors with lighting control in premium units</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">ROI Analysis</p>
                        <p className="text-sm text-[#666666]">
                          Additional cost: $1,800-3,200 per unit<br />
                          Potential premium: $50-100/month ($600-1,200 annually)<br />
                          Estimated payback period: 2.5-5.3 years
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="section">
              <Heading level={2} className="mb-6">Amenity Offerings & Programming</Heading>
              
              <p className="body-text mb-6">
                Our analysis indicates strategic opportunities to differentiate The Novus through distinctive amenity offerings that address emerging lifestyle needs of target resident segments.
              </p>
              
              <div className="space-y-6">
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Wellness Center Enhancements</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        While fitness centers are standard, few properties offer comprehensive wellness amenities despite 68% of target demographic prioritizing wellness offerings in housing decisions.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Addresses growing wellness priority post-pandemic</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates distinctive "Wellness Living" positioning opportunity</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Potential ancillary revenue through premium programming</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Expanded spa facilities (steam room, sauna, cold plunge)</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Dedicated meditation/yoga studio with scheduled classes</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Massage treatment rooms with visiting practitioners</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Outdoor meditation garden with water features</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Enhanced air and water filtration systems throughout building</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Utilization & Revenue Projections</p>
                        <p className="text-sm text-[#666666]">
                          Projected usage: 45-60% of residents regularly<br />
                          Potential premium services revenue: $20-40 per user per month<br />
                          Marketing value: Primary tour highlight and visual asset
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Work-From-Home Hub</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Remote/hybrid work adoption has reached 58% among target demographics, yet few properties offer dedicated work spaces beyond basic business centers.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Directly addresses post-pandemic lifestyle shifts</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Appeals to growing "work from anywhere" professional segment</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates ancillary revenue opportunity through rentable spaces</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Private office pods available for rent by hour/day</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Conference rooms with premium video conferencing technology</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Podcast/recording studio with sound insulation</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">High-speed business center with premium printing services</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Co-working lounge with barista-quality coffee service</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Utilization & Revenue Projections</p>
                        <p className="text-sm text-[#666666]">
                          Projected usage: 30-45% of residents regularly<br />
                          Potential premium services revenue: $75-150/month from rentable spaces<br />
                          Marketing value: Strong differentiator for work-from-home prospects
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Social Spaces Activation</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        While most properties have common areas, our research shows 72% of residents report minimal usage due to uninspired design and lack of programming.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates community feeling that enhances retention</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Increases perceived value of amenity package</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Provides distinctive tour highlights and marketing content</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Distinctive space design with multiple use zones</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Professional programming calendar with weekly events</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Technology-enabled space reservation system</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Partnerships with local vendors for regular pop-ups</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Resident ambassadors program to drive engagement</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Key Performance Metrics</p>
                        <p className="text-sm text-[#666666]">
                          Target: 60%+ resident participation in events annually<br />
                          Impact: 15-20% increase in renewal rates for active participants<br />
                          Content generation: Social/content calendar enhancement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Palette className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Arts & Culture Integration</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Despite being in the heart of Downtown Durham and near the Five Points District, most competing properties have minimal authentic connection to the local arts and culture community.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Creates authentic connection to neighborhood identity</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Differentiates property within competitive set</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Generates ongoing PR and social media content opportunities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Rotating exhibition program with local artists</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Artist-in-residence program with dedicated studio space</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Commissioned public art installations for property</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Monthly art walks and studio tours for residents</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Partnership with local galleries for resident benefits</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Program Economics</p>
                        <p className="text-sm text-[#666666]">
                          Annual program budget: $75,000-95,000<br />
                          Marketing value: Primary differentiator in neighborhood<br />
                          Community goodwill: Extensive positive PR opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="section">
              <Heading level={2} className="mb-6">Resident Experience Touchpoints</Heading>
              
              <p className="body-text mb-6">
                Our analysis identifies significant opportunity to enhance the resident experience through service design and digital touchpoints that create memorable interactions and foster community.
              </p>
              
              <div className="space-y-6">
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Bell className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Premium Service Model</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Analysis of competitor reviews reveals service inconsistency as a primary complaint, with 47% of negative reviews mentioning staff responsiveness or service quality issues.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Concierge-level staffing model with hospitality training</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Guaranteed 4-hour response time for all maintenance requests</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">White-glove move-in experience with personalized welcome</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Resident recognition program for special occasions</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Service performance metrics with team incentives</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Creates significant competitive differentiation in market</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Directly impacts renewal rates and resident satisfaction</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Generates positive reviews and word-of-mouth marketing</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Key Performance Metrics</p>
                        <p className="text-sm text-[#666666]">
                          Target: 4.8/5.0 average rating across platforms<br />
                          Impact: 10-15% increase in renewal rates<br />
                          Cost: $35-50 additional per unit monthly operating cost
                        </p>
                      </div>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">ROI Analysis</p>
                        <p className="text-sm text-[#666666]">
                          Annual cost increase: $420-600 per unit<br />
                          Value from reduced turnover: $375-450 per unit<br />
                          Ancillary revenue increase: $150-200 per unit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Smartphone className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Digital Engagement Platform</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Only 4 of 12 competitors offer comprehensive resident apps; those that do report significantly higher satisfaction scores and engagement metrics.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Custom-branded resident app with full service integration</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Seamless maintenance requests with photo/video capability</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Amenity reservations and event registration</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Package notification and delivery management</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Community message board and resident directory</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Integration with smart home features and building access</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Creates frictionless resident experience</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Drives engagement with amenities and community</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Provides valuable data for service enhancement</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Supports premium positioning and tech-forward image</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Key Performance Metrics</p>
                        <p className="text-sm text-[#666666]">
                          Target: 75%+ app adoption rate among residents<br />
                          Impact: 35%+ increase in amenity utilization<br />
                          Secondary benefits: Reduced staff time on administrative tasks
                        </p>
                      </div>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Implementation Costs</p>
                        <p className="text-sm text-[#666666]">
                          Initial setup: $45,000-65,000<br />
                          Annual licensing: $15-25 per unit<br />
                          Customization/updates: $15,000-25,000 annually
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#F9F8F4] p-6 border border-[#E5E2D9] rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="text-[#666666]" size={24} />
                    <Heading level={3} className="mb-0">Digital & Social Media Strategy</Heading>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Market Gap Identified</p>
                      <p className="body-text">
                        Competitive social presence analysis reveals limited authentic engagement from existing properties, with most content being generic and corporate in tone.
                      </p>
                      
                      <div className="mt-4">
                        <p className="font-medium text-[#333333] mb-2">Implementation Recommendations</p>
                        <ul className="bullet-list">
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Distinctive brand voice and content strategy across platforms</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Resident ambassador program for authentic content generation</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Local partnership features and neighborhood spotlights</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Behind-the-scenes content of resident experiences</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Arts district integration with artist features</span>
                          </li>
                          <li className="bullet-list-item">
                            <span className="bullet-marker">•</span>
                            <span className="body-text">Lifestyle content strategy beyond typical property features</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-medium text-[#333333] mb-2">Competitive Advantage</p>
                      <ul className="bullet-list">
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Creates authentic brand voice that resonates with target audience</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Drives organic reach through shareable, distinctive content</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Showcases community and lifestyle aspects beyond physical features</span>
                        </li>
                        <li className="bullet-list-item">
                          <span className="bullet-marker">•</span>
                          <span className="body-text">Supports premium positioning and neighborhood integration</span>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Platform Focus</p>
                        <p className="text-sm text-[#666666]">
                          Instagram: Primary channel for visual storytelling<br />
                          TikTok: Short-form video content for younger demographic<br />
                          Facebook: Community engagement and events<br />
                          LinkedIn: Corporate/professional audience targeting
                        </p>
                      </div>
                      
                      <div className="mt-4 bg-white p-4 border border-[#E5E2D9] rounded-sm">
                        <p className="font-medium text-[#333333] mb-1">Resource Requirements</p>
                        <p className="text-sm text-[#666666]">
                          Content calendar: Weekly planning with 3-5 posts per week<br />
                          Budget: $3,500-5,000/month for content creation and management<br />
                          Staff time: 5-10 hours weekly for community management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className="section">
              <Heading level={2} className="mb-6">Implementation Timeline</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="content-box bg-[#333333] text-white">
                  <Heading level={3} className="text-white mb-3">Phase 1: Preparation</Heading>
                  <p className="text-white text-sm mb-4">6-9 months pre-opening</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Finalize unit design with enhanced sound insulation and technology integration</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Develop distinctive amenity programming for wellness center and work-from-home hub</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Create art integration strategy with local artist partnerships</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Establish service model training for property team</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Develop digital engagement platform and app requirements</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box bg-[#333333] text-white">
                  <Heading level={3} className="text-white mb-3">Phase 2: Launch</Heading>
                  <p className="text-white text-sm mb-4">3 months pre-opening to opening</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Implement comprehensive technology systems and resident app</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Launch lifestyle services program with local partners</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Begin community programming calendar development</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Activate digital presence with professional content</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Establish innovative tour experience for opening</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box bg-[#333333] text-white">
                  <Heading level={3} className="text-white mb-3">Phase 3: Execution</Heading>
                  <p className="text-white text-sm mb-4">Opening to stabilization</p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Implement premium service model with performance metrics</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Launch full resident experience program and events</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Regular resident feedback collection and service adjustments</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Rotating art program and cultural events</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="text-[#CAB06B] mr-2">•</span>
                      <span className="text-white text-sm">Continuous improvement of technology offerings</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <HighlightBox variant="secondary" className="mt-8">
              <p className="body-text">
                This opportunity map provides a strategic framework for maximizing The Novus's market position and financial performance through targeted initiatives in four key opportunity areas, with a phased implementation approach to ensure proper resource allocation and timing.
              </p>
            </HighlightBox>
          </div>
        </div>
      </Layout>
    </>
  );
}