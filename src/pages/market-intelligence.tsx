import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { BarChart, LineChart, PieChart, TrendingUp, Users, ArrowRight, Building, Clock } from "lucide-react";
import { Heading, Paragraph, Text } from "@/components/ui/Typography";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatDisplay } from "@/components/ui/StatDisplay";
import { ProfileDisplay } from "@/components/ui/StatDisplay/ProfileDisplay";
import { IncomeDistributionChart } from "@/components/ui/IncomeDistributionChart";
import { RentGrowthChart } from "@/components/ui/RentGrowthChart";
import { GatedChart } from "@/components/ui/GatedChart";
import { Grid } from "@/components/ui/Grid";

export default function MarketIntelligence() {
  return (
    <>
      <Head>
        <title>Market Intelligence | The Novus</title>
        <meta name="description" content="Market Intelligence for The Novus Apartments Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <Container size="wide">
          <Section>
            <Heading level={1}>Market Intelligence</Heading>
            
            <ContentBox variant="highlight-accent" className="mt-6">
              <Text variant="body-lg" color="primary" wrap="pretty">
                The Durham multifamily rental market is experiencing a period of adjustment characterized by moderating rents, elevated construction activity, and shifting supply-demand dynamics. The Novus is poised to enter this market as a premier downtown residential option in the vibrant Five Points District.
              </Text>
            </ContentBox>
            
            <Grid columns={4} gap="md" className="my-8">
              <StatDisplay
                label="Vacancy Rate"
                value="~7%"
                description="Decreasing year-over-year, reflecting strong market demand"
                icon={<TrendingUp />}
                variant="outline"
                trend="down"
              />
              
              <StatDisplay
                label="Absorption Rate"
                value="25 units/month"
                description="Average leasing velocity in Downtown Durham"
                icon={<LineChart />}
                variant="outline"
              />
              
              <StatDisplay
                label="Key Demographics"
                value="$80k-$120k"
                description="Median renter income, primarily tech professionals and university affiliates"
                icon={<BarChart />}
                variant="outline"
              />
              
              <StatDisplay
                label="Pipeline Projects"
                value="450 units"
                description="New units expected within 18 months, potentially impacting market dynamics"
                icon={<PieChart />}
                variant="outline"
              />
            </Grid>
          </Section>
          
          <div className="space-y-10">
            <Section title="Market Overview" divider={true} className="pt-8">
              <Grid columns={3} gap="md" className="mb-8">
                <StatDisplay
                  label="Metro Occupancy"
                  value="94.0%"
                  description="-1.5% Year-over-Year"
                  trend="down"
                  variant="accent"
                  animate
                />
                
                <StatDisplay
                  label="Avg. 1BR Rent"
                  value="$1,290"
                  description="-12.8% Year-over-Year"
                  trend="down"
                  variant="accent"
                  animate
                />
                
                <StatDisplay
                  label="Recent Absorption"
                  value="5,416 Units"
                  description="Q4 2024 Metro Area"
                  variant="accent"
                  animate
                />
              </Grid>
              
              <ContentBox variant="light" className="mb-6">
                <Heading level={3} className="mb-3">Key Market Insights</Heading>
                <Paragraph className="mb-4" wrap="pretty">
                  The Durham multifamily market is experiencing a period of adjustment with moderating rents creating a "renter's market" with increased price sensitivity. Despite this, occupancy remains relatively healthy with strong absorption numbers.
                </Paragraph>
                <ul className="bullet-list">
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <Paragraph>Vacancy rates approximately 6% metro-wide, expected to stabilize in late 2025</Paragraph>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <Paragraph>Average asking rent in Raleigh-Durham: $1,520 (-3.1% year-over-year)</Paragraph>
                  </li>
                  <li className="bullet-list-item">
                    <span className="bullet-marker">•</span>
                    <Paragraph>Downtown Durham shows stronger absorption due to employment growth and urban lifestyle preferences</Paragraph>
                  </li>
                </ul>
              </ContentBox>
              
              <ContentBox className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <LineChart className="text-novus-gold" size={20} />
                  <Heading level={3} className="mb-0">Rent Growth Trends</Heading>
                </div>
                <GatedChart 
                  title="Rent Growth Trends" 
                  description="Access detailed quarterly rent growth data for Durham and comparative markets"
                >
                  <RentGrowthChart height="h-56 md:h-64" />
                </GatedChart>
              </ContentBox>
            </Section>
            
            <Section title="Demographic Analysis" divider={true}>
              <Grid columns={2} gap="md" className="mb-8">
                <ContentBox variant="light">
                  <Heading level={3} className="mb-3">Primary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Urban professionals (25-40)</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Income range: $85,000-$150,000</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Tech, healthcare, and education sectors</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Value lifestyle, convenience, and social opportunities</Paragraph>
                    </li>
                  </ul>
                </ContentBox>
                
                <ContentBox variant="light">
                  <Heading level={3} className="mb-3">Secondary Demographic</Heading>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Empty nesters/downsizers (55+)</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Income range: $120,000+</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Seeking lock-and-leave luxury living</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Prioritize security, concierge, and quality finishes</Paragraph>
                    </li>
                  </ul>
                </ContentBox>
              </Grid>
              
              <ContentBox className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <BarChart className="text-novus-gold" size={20} />
                  <Heading level={3} className="mb-0">Income Distribution</Heading>
                </div>
                <GatedChart 
                  title="Income Distribution Analysis" 
                  description="Access comprehensive income distribution data for Durham target renter segments"
                >
                  <IncomeDistributionChart height="h-56 md:h-64" />
                </GatedChart>
              </ContentBox>
            </Section>
            
            <Section title="Supply Analysis" divider={true}>
              <ContentBox variant="highlight-accent" className="mb-6">
                <Heading level={3} className="mb-2">Pipeline Overview</Heading>
                <Paragraph wrap="pretty">
                  The Raleigh-Durham market has seen record deliveries with 12,002 units completed in 2024 and an additional 20,272 units under construction. The Novus represents one of the few true high-rise luxury developments in downtown Durham.
                </Paragraph>
              </ContentBox>
              
              <div className="table-responsive mb-8">
                <div className="mobile-scroll-indicator">Scroll horizontally to view all data</div>
                <table className="table-default">
                  <thead>
                    <tr>
                      <th className="table-header">Project</th>
                      <th className="table-header">Units</th>
                      <th className="table-header">Delivery</th>
                      <th className="table-header">Distance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="table-cell font-medium">Van Alen</td>
                      <td className="table-cell">418</td>
                      <td className="table-cell">Existing</td>
                      <td className="table-cell">0.7 miles</td>
                    </tr>
                    <tr>
                      <td className="table-cell font-medium">One City Center</td>
                      <td className="table-cell">139</td>
                      <td className="table-cell">Existing</td>
                      <td className="table-cell">0.3 miles</td>
                    </tr>
                    <tr>
                      <td className="table-cell font-medium">511 Faye</td>
                      <td className="table-cell">196</td>
                      <td className="table-cell">Q3 2024</td>
                      <td className="table-cell">0.5 miles</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
            
            <Section title="Demand Drivers" divider={true}>
              <Grid columns={2} gap="md" className="mb-6">
                <ContentBox variant="light">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <TrendingUp className="text-novus-gold" size={20} />
                    <Heading level={3} className="mb-0">Employment Growth</Heading>
                  </div>
                  <Paragraph className="mb-3" wrap="pretty">
                    Durham shows solid employment growth with total nonfarm employment at 356,100 (March 2025) and year-over-year growth of +1.8%, adding 6,400 jobs.
                  </Paragraph>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Education and health services leading growth (+5.9% YoY)</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Professional and business services growing steadily (+2.1% YoY)</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Duke University and healthcare system providing stable employment base</Paragraph>
                    </li>
                  </ul>
                </ContentBox>
                
                <ContentBox variant="light">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <PieChart className="text-novus-gold" size={20} />
                    <Heading level={3} className="mb-0">Lifestyle Amenities</Heading>
                  </div>
                  <Paragraph className="mb-3" wrap="pretty">
                    Downtown Durham offers a vibrant urban lifestyle with walkability to dining, entertainment, and cultural amenities that appeal to target demographics.
                  </Paragraph>
                  <ul className="bullet-list">
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Vibrant downtown dining scene and growing retail presence</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Proximity to performing arts venues, museums, and galleries</Paragraph>
                    </li>
                    <li className="bullet-list-item">
                      <span className="bullet-marker">•</span>
                      <Paragraph>Regular community events and festivals in the Five Points District</Paragraph>
                    </li>
                  </ul>
                </ContentBox>
              </Grid>
            </Section>
            
            <Section title="Downtown Durham Market Highlights" divider={true}>
              <ContentBox variant="light" className="mb-8">
                <Paragraph size="large" className="mb-6" wrap="pretty">
                  Current market analysis reveals strong fundamentals in the Downtown Durham rental market, with stabilized occupancy and consistent rent growth driven by the area's robust technology, healthcare, and education sectors.
                </Paragraph>
                
                <div className="flex flex-wrap items-stretch">
                  <div className="w-full md:w-1/4 px-2 mb-6 flex flex-col">
                    <div className="flex justify-center mb-3">
                      <StatDisplay
                        label="Occupancy Rate"
                        value="92.5%"
                        description="Current downtown average"
                        variant="circular"
                        textAlign="center"
                        animate
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/4 px-2 mb-6 flex flex-col">
                    <div className="flex justify-center mb-3">
                      <StatDisplay
                        label="Annual Rent Growth"
                        value="7.2%"
                        description="Year-over-year increase"
                        variant="circular"
                        textAlign="center"
                        animate
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/4 px-2 mb-6 flex flex-col">
                    <div className="flex justify-center mb-3">
                      <StatDisplay
                        label="Quarterly Absorption"
                        value="250-300"
                        description="Units per quarter"
                        variant="circular"
                        textAlign="center"
                        animate
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/4 px-2 mb-6 flex flex-col">
                    <ProfileDisplay
                      title="Renter Profile"
                      items={[
                        { label: "Age", value: "25-44 years" },
                        { label: "Income", value: "~$95,000/year" },
                        { label: "Industries", value: "Technology, Healthcare, Education" }
                      ]}
                      variant="outline"
                      icon={<Users size={18} />}
                    />
                  </div>
                </div>
              </ContentBox>
              
              <ContentBox variant="highlight-accent" className="mb-8">
                <Heading level={3} className="mb-2">Market Opportunity Summary</Heading>
                <Paragraph wrap="pretty">
                  The Downtown Durham rental market exhibits resilient fundamentals with high occupancy (92.5%) and strong rent growth (7.2% YoY), despite new inventory. The target demographic aligns perfectly with The Novus's premium high-rise positioning and amenity strategy, catering to professionals in the technology, healthcare, and education sectors with a median income of approximately $95,000 annually.
                </Paragraph>
              </ContentBox>
            </Section>
          </div>
        </Container>
      </Layout>
    </>
  );
}