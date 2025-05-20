
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";

export default function GoToMarket() {
  return (
    <>
      <Head>
        <title>Go-to-Market Roadmap - The Novus</title>
        <meta name="description" content="Go-to-market roadmap for The Novus, Durham's premier high-rise apartments" />
      </Head>
      
      <Layout>
        <div className="max-w-4xl mx-auto">
          <Heading level={1}>Go-to-Market Roadmap</Heading>
          
          <HighlightBox>
            <p className="text-lg">
              This roadmap outlines the phased implementation strategy for The Novus's market entry in Downtown Durham, with specific timelines, marketing channels, and targeting approaches to achieve optimal lease-up velocity for North Carolina's tallest residential tower.
            </p>
          </HighlightBox>
          
          {/* New Timeline Section */}
          <section className="my-10">
            <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-md p-6 mb-8">
              <h2 className="text-2xl font-semibold text-[#333333] text-center mb-2">Lease-Up Strategy Timeline</h2>
              <p className="text-[#666666] text-center mb-8">A comprehensive roadmap to reaching stabilized occupancy</p>
              
              {/* Timeline Visual */}
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#CAB06B] rounded-full"></div>
                
                {/* Timeline points */}
                <div className="relative z-10">
                  {/* Pre-Leasing Launch */}
                  <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center mb-16 gap-8">
                    <div className="md:text-right md:pr-10 order-2 md:order-1">
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Pre-Leasing Launch</h3>
                      <p className="text-[#666666] font-bold mb-2">July 2025</p>
                      <ul className="text-[#666666] text-sm space-y-1">
                        <li>• Website launch with virtual tours & reservations</li>
                        <li>• Leasing gallery opening with material samples</li>
                        <li>• VIP preview events for priority list members</li>
                        <li>• Begin accepting refundable deposits</li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#F9F8F4] border-4 border-[#CAB06B] flex items-center justify-center">
                        <span className="font-bold text-[#CAB06B]">1</span>
                      </div>
                    </div>
                    <div className="md:pl-10 md:mt-0 mt-4 order-1 md:order-2">
                      <div className="bg-white border border-[#E5E2D9] p-4 rounded-md shadow-sm">
                        <h4 className="font-semibold text-[#333333] mb-2">Digital Marketing Focus</h4>
                        <ul className="text-sm text-[#666666] space-y-1">
                          <li>• Geo-targeted social ads in Durham area</li>
                          <li>• Local influencer partnerships</li>
                          <li>• Duke University targeted outreach</li>
                          <li>• Email nurture campaigns to interest list</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Initial Leasing Goal */}
                  <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center mb-16 gap-8">
                    <div className="md:text-right md:pr-10 order-2 md:order-1">
                      <div className="bg-white border border-[#E5E2D9] p-4 rounded-md shadow-sm">
                        <h4 className="font-semibold text-[#333333] mb-2">Marketing Initiatives</h4>
                        <ul className="text-sm text-[#666666] space-y-1">
                          <li>• Grand opening gala event</li>
                          <li>• Local event sponsorships</li>
                          <li>• Open house tours with refreshments</li>
                          <li>• Neighborhood business showcase events</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#F9F8F4] border-4 border-[#CAB06B] flex items-center justify-center">
                        <span className="font-bold text-[#CAB06B]">2</span>
                      </div>
                    </div>
                    <div className="md:pl-10 md:mt-0 mt-4 order-1 md:order-2">
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Initial Leasing Goal</h3>
                      <p className="text-[#666666] font-bold mb-2">October 2025 (First 3 months)</p>
                      <ul className="text-[#666666] text-sm space-y-1">
                        <li>• Target: 30% occupancy (56 units)</li>
                        <li>• Focus on premium view units (floors 20-27)</li>
                        <li>• Maintain 15-20 tours per week</li>
                        <li>• Conversion rate goal: 30% tour-to-lease</li>
                      </ul>
                    </div>
                  </div>
                  
                  {/* Secondary Leasing Phase */}
                  <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center mb-16 gap-8">
                    <div className="md:text-right md:pr-10 order-2 md:order-1">
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Secondary Leasing Phase</h3>
                      <p className="text-[#666666] font-bold mb-2">November 2025 - January 2026</p>
                      <ul className="text-[#666666] text-sm space-y-1">
                        <li>• Target: 60-75% occupancy (113-141 units)</li>
                        <li>• Begin shifting to mid-tier units (floors 11-19)</li>
                        <li>• Incentive adjustments based on velocity</li>
                        <li>• Weekly performance review & strategy adjustment</li>
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#F9F8F4] border-4 border-[#CAB06B] flex items-center justify-center">
                        <span className="font-bold text-[#CAB06B]">3</span>
                      </div>
                    </div>
                    <div className="md:pl-10 md:mt-0 mt-4 order-1 md:order-2">
                      <div className="bg-white border border-[#E5E2D9] p-4 rounded-md shadow-sm">
                        <h4 className="font-semibold text-[#333333] mb-2">Marketing Initiatives</h4>
                        <ul className="text-sm text-[#666666] space-y-1">
                          <li>• Holiday-themed open house events</li>
                          <li>• Resident referral program launch</li>
                          <li>• Broker incentive program</li>
                          <li>• Corporate housing partnerships</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stabilization Goal */}
                  <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-center relative gap-8">
                    <div className="md:text-right md:pr-10 order-2 md:order-1">
                      <div className="bg-white border border-[#E5E2D9] p-4 rounded-md shadow-sm">
                        <h4 className="font-semibold text-[#333333] mb-2">Ongoing Marketing</h4>
                        <ul className="text-sm text-[#666666] space-y-1">
                          <li>• SEO & content marketing</li>
                          <li>• Social media community building</li>
                          <li>• Resident retention programs</li>
                          <li>• Reputation management</li>
                          <li>• Retargeting ad campaigns</li>
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#F9F8F4] border-4 border-[#CAB06B] flex items-center justify-center">
                        <span className="font-bold text-[#CAB06B]">4</span>
                      </div>
                    </div>
                    <div className="md:pl-10 md:mt-0 mt-4 order-1 md:order-2">
                      <h3 className="text-xl font-semibold text-[#333333] mb-2">Stabilization Goal</h3>
                      <p className="text-[#666666] font-bold mb-2">January 2027 (18 months total)</p>
                      <ul className="text-[#666666] text-sm space-y-1">
                        <li>• Target: 95% occupancy (178 units)</li>
                        <li>• Transition to standard pricing model</li>
                        <li>• Focus on retention and renewals</li>
                        <li>• Establish resident community program</li>
                        <li>• Shift to maintenance marketing budget</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Metrics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-[#E5E2D9] rounded-md p-5 text-center">
                <h3 className="text-sm uppercase tracking-wider text-[#666666] mb-2">Pre-Leasing Target</h3>
                <p className="text-3xl font-bold text-[#CAB06B] mb-1">30-35%</p>
                <p className="text-[#666666] text-sm">Reserved before opening</p>
              </div>
              
              <div className="bg-white border border-[#E5E2D9] rounded-md p-5 text-center">
                <h3 className="text-sm uppercase tracking-wider text-[#666666] mb-2">Monthly Absorption</h3>
                <p className="text-3xl font-bold text-[#CAB06B] mb-1">10-15%</p>
                <p className="text-[#666666] text-sm">During main lease-up</p>
              </div>
              
              <div className="bg-white border border-[#E5E2D9] rounded-md p-5 text-center">
                <h3 className="text-sm uppercase tracking-wider text-[#666666] mb-2">Total Timeline</h3>
                <p className="text-3xl font-bold text-[#CAB06B] mb-1">18 Months</p>
                <p className="text-[#666666] text-sm">To stabilized occupancy</p>
              </div>
            </div>
            
            {/* Marketing Focus Timeline */}
            <div className="bg-white border border-[#E5E2D9] rounded-md overflow-hidden mb-10">
              <div className="bg-[#F9F8F4] px-6 py-4 border-b border-[#E5E2D9]">
                <h3 className="text-xl font-semibold text-[#333333]">Marketing Initiatives Timeline</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-[#333333] mb-1">Months 1-3</h4>
                      <p className="text-sm text-[#666666]">July - Sept 2025</p>
                    </div>
                    <div className="md:w-3/4 bg-[#F9F8F4] p-4 rounded-md">
                      <ul className="text-[#666666] space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Digital advertising campaign focused on Durham professionals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Instagram and TikTok influencer partnerships</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Exclusive VIP preview events for priority list</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Virtual reality tours of model units</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-[#333333] mb-1">Months 4-6</h4>
                      <p className="text-sm text-[#666666]">Oct - Dec 2025</p>
                    </div>
                    <div className="md:w-3/4 bg-[#F9F8F4] p-4 rounded-md">
                      <ul className="text-[#666666] space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Sponsorship of local Durham events and festivals</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Weekly themed open house tours with local vendors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Duke University faculty & staff targeted outreach</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Holiday-themed resident events to showcase community</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-1/4">
                      <h4 className="font-semibold text-[#333333] mb-1">Ongoing</h4>
                      <p className="text-sm text-[#666666]">Throughout campaign</p>
                    </div>
                    <div className="md:w-3/4 bg-[#F9F8F4] p-4 rounded-md">
                      <ul className="text-[#666666] space-y-2">
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>SEO optimization and content marketing for organic traffic</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Regular social media engagement including resident features</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Retargeting ads to re-engage website visitors</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Email nurture campaigns to prospects and leads</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#CAB06B] mr-2 font-bold">•</span>
                          <span>Community partnerships with local businesses and organizations</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Pre-Leasing Phase (3-6 Months Prior to Opening)</Heading>
              
              <div className="content-box-light mb-8">
                <Heading level={3} className="mb-4">Timing & Milestones</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>6 Months Prior:</strong> Launch pre-leasing website with interactive floor plans, amenity showcase, and reservation platform. Begin building interest list through targeted digital campaigns.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>5 Months Prior:</strong> Open on-site or nearby leasing gallery with interactive displays, material samples, and VR tours of unit interiors. Begin accepting priority reservations with refundable deposits.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>4 Months Prior:</strong> Implement first round of pre-leasing incentives for early reservations. Launch local partnership initiatives with Durham arts district and business community, with special focus on Duke University and Research Triangle Park connections.</p>
                    </div>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <div>
                      <p className="body-text mb-1"><strong>3 Months Prior:</strong> Host exclusive preview events for priority list members. Begin converting reservations to leases as construction completion timeline solidifies.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Primary Targets</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Durham Urban Professionals (28-42):</strong> Working in downtown offices or Research Triangle Park with household incomes $110K+, seeking walkable lifestyle, views, and premium amenities</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Duke University Faculty & Staff:</strong> Academics, administrators, and researchers looking for premium housing with convenient access to campus</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Duke Medical Professionals:</strong> Physicians, specialists, and healthcare administrators from Duke University Medical Center seeking premium accommodations</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Downtown Renters Looking to Upgrade:</strong> Current residents of mid-rise downtown properties seeking true high-rise living with panoramic views</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Secondary Targets</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Empty Nesters (50-65):</strong> Downsizing from Chapel Hill and North Raleigh homes, seeking vibrant urban lifestyle with views</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Research Triangle Tech Executives:</strong> Senior professionals from RTP companies seeking premium downtown housing options</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Young Urban Couples:</strong> Dual-income professional households without children seeking premium high-rise living</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Remote Work Professionals:</strong> Prioritizing high-quality home office space and communal work amenities</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Core Channels</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Dedicated Website:</strong> Immersive, content-rich platform with virtual tours, neighborhood exploration, and seamless reservation functionality</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Geo-Targeted Paid Search:</strong> Focus on high-intent keywords related to Durham luxury apartments, Duke University housing, and downtown Durham high-rise rentals</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Social Media Targeting:</strong> Custom audiences based on demographic, behavioral, and lookalike modeling, with emphasis on Instagram and Facebook for visual storytelling</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Local Business & Cultural Partnerships:</strong> Collaborative content and cross-promotion with Durham Performing Arts Center, American Tobacco Campus, and other Five Points District establishments</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Content Strategy</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Neighborhood Storytelling:</strong> Video series highlighting Downtown Durham's renaissance, dining experiences, and cultural attractions</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Design & Architecture Focus:</strong> Content showcasing distinctive design elements, premium finishes, and architectural highlights</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Lifestyle Visualization:</strong> Content depicting The Novus living experience through day-in-the-life narratives that emphasize panoramic views and vertical living</p>
                      </div>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <div>
                        <p className="body-text mb-1"><strong>Construction Progress Updates:</strong> Transparent communications with future residents through interactive timeline and milestone announcements</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Initial Lease-Up Phase (First 3 Months After Opening)</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Target Metrics</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Pre-opening reservations: 30-35% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 1 after opening: Additional 15-20% of total units, with focus on premium view units (floors 20-27)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 2 after opening: Additional 10-15% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Month 3 after opening: Additional 10-15% of total units</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Cumulative 3-month target: 60-75% occupancy</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Leasing Office Operations</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Extended Hours:</strong> 7-day operation with evening hours twice weekly</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Tour Optimization:</strong> Structured tour path highlighting key differentiators and premium features; allow 45-60 minutes per prospect</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Same-Day Application Process:</strong> Streamlined digital application with preliminary approval during visit when possible</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Automated Follow-Up Sequence:</strong> Tiered communication plan based on prospect engagement level</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Community Launch Events</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Grand Opening Gala:</strong> Invitation-only event for local influencers, business leaders, and priority wait list members</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Third Friday Art Walks:</strong> Featured property in monthly Durham art walks with rotating exhibitions in lobby and amenity spaces</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Welcome Series:</strong> Curated events for early move-ins to foster community connections</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Industry Showcase:</strong> Exclusive tours for real estate professionals, relocation specialists, and corporate housing partners</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Ongoing Programming</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Weekly Property Tours:</strong> Themed open house events targeting specific resident personas</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Local Business Spotlights:</strong> Pop-up experiences featuring neighborhood restaurants, boutiques, and services</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Lifestyle Workshops:</strong> Programming aligned with amenity spaces (wellness, culinary, creative)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Model Apartment Dining Experiences:</strong> Intimate chef-driven events for prospects to experience the lifestyle</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Stabilization Phase (75%+ Occupancy)</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box">
                  <Heading level={3} className="mb-3">Reputation Management Strategy</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Review Generation:</strong> Systematic approach to cultivating positive reviews across platforms with resident incentives</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Testimonial Program:</strong> Video content featuring authentic resident experiences and stories</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Social Proof Amplification:</strong> Strategic showcasing of resident endorsements and lifestyle content</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Rapid Response Protocol:</strong> 24-hour response window for all reviews with resolution tracking for negative feedback</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box">
                  <Heading level={3} className="mb-3">Community Integration Initiatives</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Local Arts Patronage:</strong> Ongoing sponsorship of Durham Performing Arts Center events and local artists</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Neighborhood Business Program:</strong> Exclusive resident perks with local restaurants, shops, and services</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Seasonal Programming:</strong> Public-facing events that position The Novus as Downtown Durham's premier vertical neighborhood</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Sustainability Initiatives:</strong> Visible environmental and community projects that align with brand values</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Performance Analytics Framework</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Lead Source Attribution:</strong> Multi-touch attribution model to evaluate channel effectiveness and ROI</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Conversion Funnel Analysis:</strong> Identification of key drop-off points in leasing journey</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Resident Demographic Profiling:</strong> Ongoing refinement of target personas based on actual lease-ups</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text"><strong>Competitive Position Monitoring:</strong> Monthly analysis of pricing, incentives, and absorption across competitive set</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Budget Reallocation Protocol</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Monthly marketing spend review with ability to shift resources to high-performing channels</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Quarterly incentive structure assessment with adjustments based on velocity and competitive positioning</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Seasonal campaign planning aligned with natural leasing cycles and local events calendar</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Digital & Traditional Channel Mix</Heading>
              
              <div className="content-box-light p-6 my-8 rounded-md">
                <h3 className="text-center mb-4">Channel Allocation by Phase</h3>
                <p className="text-sm text-center mb-4">Recommended budget distribution across marketing channels</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#F9F8F4]">
                        <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Channel</th>
                        <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Pre-Leasing</th>
                        <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Initial Lease-Up</th>
                        <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Stabilization</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Paid Search/SEO</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">20%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">10%</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Social Media</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">25%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">20%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">ILS Platforms</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">25%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">30%</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Events/Experiential</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">20%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">25%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                      </tr>
                      <tr>
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Content Production</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">10%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                      </tr>
                      <tr className="bg-[#F9F8F4]">
                        <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Local Partnerships</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">5%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">5%</td>
                        <td className="border border-[#E5E2D9] px-4 py-3">15%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-[#333333] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Team Structure</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Dedicated Leasing Director (full-time)</li>
                    <li>1 Leasing Consultant (full-time)</li>
                    <li>1 High-Rise Experience Specialist (full-time)</li>
                    <li>Digital Marketing Specialist (part-time/agency)</li>
                    <li>Administrative Support (shared resource)</li>
                  </ul>
                </div>
                
                <div className="bg-[#333333] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Key Partners</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Digital Marketing Agency (local with high-rise expertise)</li>
                    <li>Branding & Content Production Studio</li>
                    <li>Virtual Tour & Drone Photography Provider</li>
                    <li>Duke University Housing Office</li>
                    <li>Downtown Durham Inc. & Chamber of Commerce</li>
                  </ul>
                </div>
                
                <div className="bg-[#333333] text-white p-6 rounded-sm">
                  <h3 className="text-white mb-3">Technology Stack</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Property Management/CRM System</li>
                    <li>Digital Leasing Platform with Application Portal</li>
                    <li>Virtual Tour/3D Visualization Tools</li>
                    <li>Reputation Management Software</li>
                    <li>Marketing Analytics Dashboard</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Risk Mitigation Strategies</Heading>
              
              <div className="content-box mb-8">
                <Heading level={3} className="mb-3">Scenario Planning</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Slower Absorption Scenario:</strong> Enhanced incentive structure, increased marketing spend allocation, and expanded target audience parameters</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Competitive Response Scenario:</strong> Differentiation strategy focusing on unique amenities and resident experience rather than price competition</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text"><strong>Market Downturn Scenario:</strong> Phased amenity completion approach to control costs while maintaining core value proposition</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <Heading level={3} className="mb-3">Agility Mechanisms</Heading>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Monthly performance review with predefined triggers for strategy adjustments</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Flexible marketing budget with 20% contingency reserve for responsive allocation</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Tiered incentive framework that can be deployed based on velocity metrics</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Ongoing competitive monitoring with bi-weekly reporting and analysis</span>
                  </li>
                </ul>
              </div>
              
              <HighlightBox variant="secondary">
                <p className="text-sm">
                  This go-to-market roadmap provides The Novus with a comprehensive, phased approach to achieve optimal lease-up velocity while establishing a unique high-rise positioning in the Downtown Durham market. The strategy emphasizes the property's distinctive 27-story format and panoramic views while targeting Durham's professional demographic with specific focus on Duke University and Research Triangle Park connections.
                </p>
              </HighlightBox>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}
