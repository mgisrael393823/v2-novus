import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { BarChart, LineChart, PieChart, TrendingUp } from "lucide-react";
import { Heading } from "@/components/ui/Heading";
import { HighlightBox } from "@/components/ui/HighlightBox";
import { StatBox } from "@/components/ui/StatBox";
import { IncomeDistributionChart } from "@/components/ui/IncomeDistributionChart";
import { RentGrowthChart } from "@/components/ui/RentGrowthChart";
import { Montserrat } from "next/font/google";
import { GatedChart } from "@/components/ui/GatedChart";

const headingFont = Montserrat({ subsets: ["latin"], weight: ["600"] });
const bodyFont = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function MarketIntelligence() {
  return (
    <>
      <Head>
        <title>Market Intelligence | The Novus</title>
        <meta name="description" content="Market Intelligence for The Novus Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <div className="w-full max-w-4xl mx-auto">
          <Heading level={1}>Market Intelligence</Heading>
          
          <HighlightBox>
            <p className="body-text-lg">
              The Downtown Durham submarket is experiencing a period of adjustment with moderating rents and elevated construction activity. Despite increased competition, The Novus is positioned as a premier downtown residential option with distinctive advantages in its high-rise format, luxury amenities, and Five Points District location.
            </p>
          </HighlightBox>
          
          <div className="space-y-10">
            <section className="section">
              <Heading level={2} className="mb-5">Market Overview</Heading>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <StatBox
                  label="Submarket Occupancy"
                  value="94.0%"
                  description="Metro-wide average"
                />
                
                <StatBox
                  label="Avg. Effective Rent"
                  value="$1,520"
                  description="-3.1% Year-over-Year"
                />
                
                <StatBox
                  label="Absorption Rate"
                  value="5,416 Units"
                  description="Q4 2024 Metro Absorption"
                />
              </div>
              
              <div className="content-box-light mb-6">
                <Heading level={3} className="mb-3">Key Market Insights</Heading>
                <p className="body-text mb-4">
                  The Durham rental market is experiencing a period of adjustment with moderating rents after record construction volume. Despite broader market challenges, downtown locations maintain stronger demand than suburban areas, with The Novus benefiting from its premier Five Points District location.
                </p>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Widespread concessions with most properties offering 4-8 weeks free rent</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Strong employment growth (+1.8% year-over-year) supporting rental demand</span>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <span className="body-text">Downtown Durham premium due to walkability and urban amenities</span>
                  </li>
                </ul>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <LineChart className="text-[#666666]" size={24} />
                  <Heading level={3} className="mb-0">Rent Growth Trends</Heading>
                </div>
                <GatedChart 
                  title="Rent Growth Trends" 
                  description="Access detailed quarterly rent growth data for Downtown Durham and comparative markets"
                >
                  <RentGrowthChart height="h-56 md:h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demographic Analysis</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Primary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Young professionals (28-42)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $79,000-$150,000</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Education, healthcare, and tech sectors</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">54.7% with Bachelor's degree or higher</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <Heading level={3} className="mb-3">Secondary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Empty nesters (52-65)</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Income range: $120,000+</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Downsizing from suburban homes</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Prefer urban lifestyle with walkability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="content-box mb-8">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4">
                  <BarChart className="text-[#666666]" size={24} />
                  <Heading level={3} className="mb-0">Income Distribution</Heading>
                </div>
                <GatedChart 
                  title="Income Distribution Analysis" 
                  description="Access comprehensive income distribution data for target renter segments"
                >
                  <IncomeDistributionChart height="h-56 md:h-64" />
                </GatedChart>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Supply Analysis</Heading>
              
              <HighlightBox variant="secondary" className="mb-6">
                <Heading level={3} className="mb-2">Pipeline Overview</Heading>
                <p className="body-text">
                  The Raleigh-Durham market had record construction with 12,002 units delivered in 2024, with an additional 20,272 units under construction as of January 2025. The Novus represents one of the few true high-rise luxury developments in downtown Durham.
                </p>
              </HighlightBox>
              
              <div className="mb-8 overflow-x-auto w-full -mx-4 px-4 md:mx-0 md:px-0">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-[#F9F8F4]">
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Project</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Units</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Delivery</th>
                      <th className="border border-[#E5E2D9] px-4 py-3 text-left text-sm font-medium text-[#333333]">Concessions</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Van Alen</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Luxury Development</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Recent</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">$2,000 off select units</td>
                    </tr>
                    <tr className="bg-[#F9F8F4]">
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">One City Center</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">High-rise</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Recent</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Up to 1 month free</td>
                    </tr>
                    <tr>
                      <td className="border border-[#E5E2D9] px-4 py-3 font-medium">Beckon Apartments</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Near Central Park</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Recent</td>
                      <td className="border border-[#E5E2D9] px-4 py-3">Up to 2 months free</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section className="section-divider section">
              <Heading level={2} className="mb-5">Demand Drivers</Heading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="content-box-light">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                    <TrendingUp className="text-[#666666]" size={20} />
                    <Heading level={3} className="mb-0">Employment Growth</Heading>
                  </div>
                  <p className="body-text mb-3">
                    The Durham area shows strong employment growth with total nonfarm employment at 356,100 jobs (+1.8% year-over-year) and unemployment at 3.2%, well below the national average.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Education and health services: +5.9% growth</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Professional and business services: +2.1% growth</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Duke University and healthcare system as stable employers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-box-light">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                    <PieChart className="text-[#666666]" size={20} />
                    <Heading level={3} className="mb-0">Lifestyle Amenities</Heading>
                  </div>
                  <p className="body-text mb-3">
                    Downtown Durham has experienced significant revitalization with new retail, dining, and entertainment options, driving demand for urban living experiences.
                  </p>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Vibrant downtown dining scene</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Walkable urban environment</span>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <span className="body-text">Regular community events and festivals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
}