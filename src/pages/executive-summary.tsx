import React, { useState } from "react";
import { TimelinePhase } from "@/components/ui/Timeline";
import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "@/components/Layout/Layout";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { StatBox } from "@/components/ui/StatBox";
import { StatDisplay } from "@/components/ui/StatDisplay";
import { Grid, CardGrid } from "@/components/ui/Grid";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { AbsorptionChart } from "@/components/ui/AbsorptionChart";
import { Timeline } from "@/components/ui/Timeline";
import { ComparisonTable } from "@/components/ui/DataTable";
import { CollapsibleCard } from "@/components/ui/CollapsibleCard";
// Remove CountUp import since we're not using it anymore
import { 
  BarChart, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  Activity, 
  Calendar, 
  Clock, 
  CheckCircle2,
  DollarSign,
  Building,
  MapPin,
  Users,
  CalendarDays,
  Columns,
  LineChart,
  Target,
  BarChart2,
  BarChart3
} from "lucide-react";

export default function ExecutiveSummary() {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Data for absorption chart
  const absorptionData = [
    { name: "Studio Units", percentage: 85, color: "#CAB06B" },
    { name: "1BR Units", percentage: 78, color: "#CAB06B" },
    { name: "2BR Units", percentage: 65, color: "#CAB06B" },
    { name: "PA2 Units", percentage: 52, color: "#CAB06B" }
  ];

  const financialMetrics = [
    { label: "90-Day Revenue", value: "$1.2M" },
    { label: "180-Day Revenue", value: "$2.6M" },
    { label: "270-Day Revenue", value: "$4.1M" }
  ];

  const chartAnnotations = [
    "Standard projections show 12 month stabilization period with traditional approach",
    "Proprietary strategy projects 9–9.5 month stabilization with our recommended approach",
    "Studio and 1BR configurations projected to absorb 35% faster than larger unit types"
  ];

  // Data for timeline
  const implementationPhases: TimelinePhase[] = [
    {
      title: "PRE-LAUNCH PHASE",
      subtitle: "Building foundations for a successful launch",
      timeframe: "6 months pre-opening",
      status: "completed",
      accentColor: "#60A561",
      icon: <Calendar className="h-5 w-5 text-white" />,
      items: [
        "Establish premium brand identity across all touchpoints",
        "Launch digital presence with distinctive content strategy",
        "Develop strategic local partnerships for resident benefits",
        "Design pre-leasing incentive structure with early-bird benefits"
      ]
    },
    {
      title: "LAUNCH PHASE",
      subtitle: "Maximizing initial interest and momentum",
      timeframe: "Opening to 6 months",
      status: "in-progress",
      accentColor: "#CAB06B",
      icon: <Clock className="h-5 w-5 text-white" />,
      items: [
        "Implement premium service model with hospitality-trained staff",
        "Execute high-visibility marketing campaign with digital focus",
        "Launch signature community events and programming",
        "Activate artist residency program with public installations"
      ]
    },
    {
      title: "STABILIZATION PHASE",
      subtitle: "Optimizing for long-term success",
      timeframe: "6-12 months post-opening",
      status: "pending",
      accentColor: "#A67BC2",
      icon: <CheckCircle2 className="h-5 w-5 text-white" />,
      items: [
        "Transition to targeted marketing for remaining unit types",
        "Optimize pricing strategy based on absorption analytics",
        "Implement resident retention program with loyalty benefits",
        "Initiate premium service add-ons for ancillary revenue"
      ]
    }
  ];

  // Data for financial comparison table
  const financialComparisonData = [
    {
      label: "Stabilization Timeline",
      valueA: "12.5 months",
      valueB: "9-9.5 months",
      improvement: "~25% faster",
      isPositive: true
    },
    {
      label: "Concession Value",
      valueA: "6-8 weeks free",
      valueB: "4-6 weeks free",
      improvement: "~30% savings",
      isPositive: true
    },
    {
      label: "Year 1 Revenue",
      valueA: "$14.2M",
      valueB: "$16.8M",
      improvement: "+$2.6M (+18.3%)",
      isPositive: true
    },
    {
      label: "Renewal Rate",
      valueA: "55-60%",
      valueB: "70-75%",
      improvement: "+15% higher",
      isPositive: true
    }
  ];

  return (
    <>
      <Head>
        <title>Executive Summary | The Novus</title>
        <meta name="description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta property="og:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Novus with 'THE BLUEPRINT' spray painted in gold over a dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE NOVUS | THE BLUEPRINT - Executive Summary" />
        <meta name="twitter:description" content="Executive Summary of The Novus Apartments Lease-Up Strategy" />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>
      
      <Layout>
        <motion.div 
          className="w-full max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={pageVariants}
        >
          {/* Page Header */}
          <Container size="wide">
            <motion.div 
              className="mb-16"
              variants={sectionVariants}
            >
              <motion.div 
                className="mb-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <SectionTitle>STRATEGIC BLUEPRINT</SectionTitle>
                <div className="h-0.5 w-32 bg-novus-gold mt-1"></div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Heading level={1}>Executive Summary</Heading>
              </motion.div>
            </motion.div>
            
            {/* Introduction Section */}
            <Section>
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <ContentBox variant="highlight-accent">
                  <Text 
                    variant="body-lg" 
                    color="primary" 
                    className="leading-relaxed" 
                    wrap="pretty"
                  >
                    The Novus is poised to enter the Downtown Durham multifamily market at a pivotal time. Located in the vibrant Five Points District at 115 Morris St, this 27-story development with 188 rental apartments and over 22,000 square feet of ground floor retail will be competing in a market characterized by moderating rents, elevated construction activity, and strong but uneven absorption.
                  </Text>
                  
                  <Paragraph className="mt-4" wrap="pretty">
                    This executive summary provides an overview of the complete strategic blueprint. Navigate through the sections on the left to explore detailed market intelligence, competitive analysis, and our recommended strategies for The Novus's successful lease-up.
                  </Paragraph>
                </ContentBox>
              </motion.div>
            </Section>
          </Container>
          
          {/* Key Metrics Section */}
          <Container size="wide">
            <Section 
              title="Project Overview" 
              subtitle="Key performance indicators and project details for The Novus"
              divider={true}
            >
              <div className="mb-4 flex items-center">
                <Activity size={22} className="text-novus-gold mr-2" />
                <SectionTitle>KEY METRICS</SectionTitle>
              </div>
              
              <Grid columns={4} gap="md" className="mb-8">
                <StatDisplay
                  label="Projected Lease-Up"
                  value="12 mo"
                  description="To stabilization"
                  tooltip="12 mo. projection based on standard generic approach. Our strategy projects 9-9.5 months with recommended approach."
                  variant="accent"
                  icon={<Calendar />}
                  animate
                />
                
                <StatDisplay
                  label="Competitive Rents"
                  value="15%"
                  description="Premium to market"
                  tooltip="The Novus commands a premium rental rate that reflects its superior height, views, and luxury finishes compared to downtown competitors."
                  variant="default"
                  icon={<DollarSign />}
                  animate
                />
                
                <StatDisplay
                  label="Concessions"
                  value="1.5-2 mo"
                  description="During lease-up"
                  tooltip="Strategic concession structure follows market standards while offering unique value-adds to drive absorption."
                  variant="default"
                  icon={<BarChart3 />}
                  animate
                />
                
                <StatDisplay
                  label="Height Advantage"
                  value="27 stories"
                  description="Tallest in downtown"
                  tooltip="Unique positioning as downtown Durham's tallest residential building, offering unmatched views and premium living experience."
                  variant="highlight"
                  icon={<Building />}
                  animate
                />
              </Grid>
              
              <Grid columns={3} gap="sm" className="mb-10">
                <StatDisplay
                  label="Location"
                  value="Five Points District"
                  description="115 Morris St, Durham"
                  variant="outline"
                  icon={<MapPin />}
                  size="sm"
                />
                
                <StatDisplay
                  label="Unit Mix"
                  value="188 Units"
                  description="Studio to 2-bedroom units"
                  variant="outline"
                  icon={<Users />}
                  size="sm"
                />
                
                <StatDisplay
                  label="Delivery"
                  value="Q2 2025"
                  description="$2,150 to $8,732 rates"
                  variant="outline"
                  icon={<CalendarDays />}
                  size="sm"
                />
              </Grid>
              
              {/* Absorption Forecast Chart */}
              <AbsorptionChart
                title="Absorption Forecast"
                description="Projected lease-up velocity by floor plan type with detailed financial modeling"
                data={absorptionData}
                financialMetrics={financialMetrics}
                annotations={chartAnnotations}
                className="mt-8"
              />
            </Section>
          </Container>
          
          {/* Market Opportunity Section */}
          <Container size="wide">
            <Section 
              title="Market Opportunity Overview" 
              subtitle="Strategic opportunities for The Novus in Downtown Durham's multifamily market"
              divider={true}
            >
              <div className="mb-4 flex items-center">
                <LineChart size={22} className="text-novus-gold mr-2" />
                <SectionTitle>MARKET INSIGHTS</SectionTitle>
              </div>
            {/* Comprehensive Market Opportunity Analysis */}
            <motion.div 
              className="p-8 bg-white border border-[#E5E2D9] rounded-sm relative overflow-hidden mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
              
              <div className="mb-4">
                <h3 className="text-lg uppercase tracking-wide text-[#333333] flex items-center font-medium">
                  <ArrowRight className="h-4 w-4 mr-2 text-[#CAB06B]" />
                  COMPREHENSIVE OPPORTUNITY ANALYSIS
                </h3>
              </div>
              
              <p className="text-[#666666] leading-relaxed max-w-3xl mb-6">
                Our detailed market opportunity analysis examines current market dynamics, projected absorption rates, and target demographic profiles to identify key areas of competitive advantage.
              </p>
              
              <div className="mb-6">
                <h5 className="text-sm uppercase tracking-wide mb-3 text-[#555555] font-medium">Key Market Insights:</h5>
                <div className="space-y-3">
                  {[
                    "The Durham multifamily market is experiencing a period of adjustment with moderating rents (-12.8% year-over-year for one-bedrooms) and elevated construction activity.",
                    "Developers delivered 12,002 units in Raleigh-Durham in 2024 (a decade high) with an additional 20,272 units under construction as of January 2025.",
                    "The Downtown Durham submarket, particularly Five Points District, offers stronger absorption potential due to its walkability and urban amenities.",
                    "The Novus's distinctive high-rise format (27 stories) provides significant differentiation in a market with limited high-rise luxury inventory.",
                    "Target demographic analysis reveals three high-potential segments: Urban Professionals (25-40, income range), Empty Nesters/Downsizers (55+), and Remote Workers seeking work-from-home friendly environments."
                  ].map((insight, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.3 }}
                    >
                      <span className="text-[#CAB06B] mr-2 text-xl flex-shrink-0">•</span>
                      <span className="text-[#666666]">{insight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <motion.div 
                className="p-4 bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <h4 className="text-sm uppercase mb-3 text-[#333333] font-medium">Current Market Concessions</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-3 bg-white rounded-sm border border-[#E5E2D9] hover:shadow-sm transition-shadow">
                    <p className="text-sm font-medium text-[#333333] mb-1">Downtown Durham</p>
                    <p className="text-sm text-[#666666]">1-2 months free on 12-month leases</p>
                    <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 8-16%</p>
                  </div>
                  <div className="p-3 bg-white rounded-sm border border-[#E5E2D9] hover:shadow-sm transition-shadow">
                    <p className="text-sm font-medium text-[#333333] mb-1">Five Points District</p>
                    <p className="text-sm text-[#666666]">Up to 1.5 months free on 12+ month leases</p>
                    <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 8-12%</p>
                  </div>
                  <div className="p-3 bg-white rounded-sm border border-[#E5E2D9] hover:shadow-sm transition-shadow">
                    <p className="text-sm font-medium text-[#333333] mb-1">Ninth Street Area</p>
                    <p className="text-sm text-[#666666]">Up to $1,000 off select units + gift cards</p>
                    <p className="text-xs text-[#999999] mt-1">Avg. effective discount: 6-10%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </Section>
          
          {/* Market Position Analysis Section */}
          <Section 
            title="Market Position Analysis" 
            badge="COMPETITIVE POSITIONING" 
            divider
            icon={<Target size={24} />}
            subtitle="SWOT analysis identifying The Novus's position within the competitive landscape"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
              <CollapsibleCard 
                title="Strengths" 
                variant="strength"
                initiallyExpanded={true}
                items={[
                  "Prime location in the Five Points District with superior walkability",
                  "Tallest residential building (27 stories) offering unmatched views",
                  "Distinctive amenity package including outdoor movie theater and golf simulators"
                ]}
              />
              
              <CollapsibleCard 
                title="Weaknesses" 
                variant="weakness"
                items={[
                  "Entering a market with moderating rents and elevated concessions",
                  "Premium pricing ($2,150-$8,732) in a price-sensitive market",
                  "Unproven property with no established reputation"
                ]}
              />
              
              <CollapsibleCard 
                title="Opportunities" 
                variant="opportunity"
                items={[
                  "Growing demand for remote work-friendly apartments",
                  "Limited true high-rise competition in downtown Durham",
                  "Enhanced technology integration to differentiate from competitors"
                ]}
              />
              
              <CollapsibleCard 
                title="Threats" 
                variant="threat"
                items={[
                  "Aggressive concessions from competitors (up to 2 months free)",
                  "Continued rent moderation affecting luxury rental demand",
                  "Competition from established properties with resident bases"
                ]}
              />
            </div>
            
            {/* Detailed SWOT Analysis */}
            <motion.div 
              className="p-8 bg-white border border-[#E5E2D9] rounded-sm relative overflow-hidden mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-[#CAB06B] opacity-5"></div>
              
              <div className="mb-4">
                <h3 className="text-lg uppercase tracking-wide text-[#333333] flex items-center font-medium">
                  <ArrowRight className="h-5 w-5 mr-2 text-[#CAB06B]" />
                  DETAILED SWOT ANALYSIS
                </h3>
              </div>
              
              <p className="text-[#666666] leading-relaxed max-w-3xl mb-6">
                Our comprehensive SWOT analysis includes detailed assessment of all competitive properties, market conditions, and strategic positioning opportunities.
              </p>
              
              <div className="mb-8">
                <h5 className="text-sm uppercase tracking-wide mb-3 text-[#555555] font-medium">Strengths - Expanded Analysis:</h5>
                <div className="bg-[#F9F8F4] border-l-4 border-[#60A561] border-t border-r border-b border-[#E5E2D9] p-4 rounded-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#60A561] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">Prime Location: </span>
                        <span className="text-[#666666]">The Novus's position in the heart of Five Points District provides exceptional access to Duke University, downtown dining, and cultural venues, with walkability scores 18% higher than competitive set average.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#60A561] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">High-Rise Format: </span>
                        <span className="text-[#666666]">As downtown Durham's tallest residential building at 27 stories, The Novus offers unmatched views and a vertical living experience unavailable elsewhere in the market, with true high-rise specifications that differentiate it from mid-rise competitors.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#60A561] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">Premium Amenities: </span>
                        <span className="text-[#666666]">Distinctive offerings including an outdoor movie theater, golf simulators, and pickleball court position The Novus at the top tier of the Durham market, complemented by smart home technology and premium concierge services.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h5 className="text-sm uppercase tracking-wide mb-3 text-[#555555] font-medium">Weaknesses - Risk Mitigation Strategies:</h5>
                <div className="bg-[#F9F8F4] border-l-4 border-[#E5826D] border-t border-r border-b border-[#E5E2D9] p-4 rounded-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#E5826D] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">Market Adjustment: </span>
                        <span className="text-[#666666]">Address moderating rents in Durham with value-oriented pre-leasing incentives structured for early signings, targeting 15% pre-leased before opening with enhanced service packages.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E5826D] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">High-Rise Differentiation: </span>
                        <span className="text-[#666666]">Distinguish from competing properties through emphasis on the 27-story format, panoramic views, and exclusive amenities unavailable in other Durham properties.</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#E5826D] mr-2 text-lg">•</span>
                      <div>
                        <span className="font-medium text-[#333333]">Concession Strategy: </span>
                        <span className="text-[#666666]">Create structured concession tiers with 1.5-2 month offerings compared to the market average, supplemented with high-value amenity access and technology packages unique to The Novus.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-sm uppercase tracking-wide mb-3 text-[#555555] font-medium">Opportunities - Strategic Approach:</h5>
                  <div className="bg-[#F9F8F4] border-l-4 border-[#CAB06B] border-t border-r border-b border-[#E5E2D9] p-4 rounded-sm h-full">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Remote Work Hub: </span>
                          <span className="text-[#666666]">Capitalize on Duke University and Research Triangle tech sector with specialized coworking spaces, enterprise-grade connectivity, and networking events for remote professionals.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Mixed-Use Integration: </span>
                          <span className="text-[#666666]">Leverage 22,000+ sq ft of ground floor retail to create a "vertical neighborhood" concept with curated retail partners and integrated community programming tailored to Durham's vibrant downtown scene.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#CAB06B] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Vertical Community: </span>
                          <span className="text-[#666666]">Implement unique programming utilizing the building's 27-story format, including floor-based community networks and stratified amenity experiences unavailable in lower-rise competitors.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-sm uppercase tracking-wide mb-3 text-[#555555] font-medium">Threats - Contingency Planning:</h5>
                  <div className="bg-[#F9F8F4] border-l-4 border-[#A67BC2] border-t border-r border-b border-[#E5E2D9] p-4 rounded-sm h-full">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-[#A67BC2] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Market Saturation: </span>
                          <span className="text-[#666666]">Develop premium pricing strategy with stratified offerings based on floor level and views, preserving value while offering flexibility.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A67BC2] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Concession Escalation: </span>
                          <span className="text-[#666666]">Prepare tiered concession strategy aligned with Durham's 1.5-2 month market average, with emphasis on service enhancements over pure rent discounts.</span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#A67BC2] mr-2 text-lg">•</span>
                        <div>
                          <span className="font-medium text-[#333333]">Economic Uncertainty: </span>
                          <span className="text-[#666666]">Leverage Durham's stable healthcare and education sectors in targeting, with marketing positioning focused on long-term value and stability.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
            </Section>
          </Container>
          
          {/* Recommendations & Roadmap Section */}
          <Container size="wide">
            <Section 
              title="Strategy Pillars" 
              subtitle="Strategic approach categories based on our market position analysis"
              divider={true}
            >
              <div className="mb-4 flex items-center">
                <Columns size={22} className="text-novus-gold mr-2" />
                <SectionTitle>RECOMMENDATIONS & ROADMAP</SectionTitle>
              </div>
            {/* Core Strategy Section - High-level categories only */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12">
              {[
                {
                  number: 1,
                  title: "High-Rise Positioning",
                  description: "Leverage 27-story vertical living experience with unparalleled views and premium amenities"
                },
                {
                  number: 2,
                  title: "Tech-Forward Living",
                  description: "Smart home integration and premium connectivity for Durham's education and tech professionals"
                },
                {
                  number: 3,
                  title: "Vertical Neighborhood",
                  description: "Authentic connection with Durham's community through technology integration and local partnerships"
                }
              ].map((pillar, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-sm p-6 hover:border-[#CAB06B] transition-colors text-center hover:shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-[#F5F5E6] flex items-center justify-center mx-auto mb-4 border-2 border-[#CAB06B]"
                    whileHover={{ scale: 1.05, backgroundColor: "#CAB06B", color: "white" }}
                  >
                    <span className="text-[#CAB06B] text-xl font-bold">{pillar.number}</span>
                  </motion.div>
                  <h4 className="text-lg font-medium text-[#333333] mb-3">{pillar.title}</h4>
                  <p className="text-sm text-[#666666]">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
            {/* Implementation Roadmap */}
            <div className="mt-16">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#333333]">Implementation Roadmap</h3>
                <p className="text-[#666666] mt-2">
                  Our tactical roadmap converts strategies into actionable steps with clear timelines, responsible parties, and success metrics.
                </p>
              </div>
              
              {/* Vertical Timeline for larger screens */}
              <div className="hidden md:block">
                <Timeline phases={implementationPhases} />
              </div>
              
              {/* Horizontal Timeline for mobile */}
              <div className="block md:hidden">
                <Timeline phases={implementationPhases} orientation="horizontal" />
              </div>
              
              {/* Financial Projections Table */}
              <div className="mt-12">
                <h4 className="text-lg font-medium text-[#333333] mb-4">Financial Impact Projections</h4>
                <ComparisonTable
                  data={financialComparisonData}
                  titleA="Standard Approach"
                  titleB="Recommended Strategy"
                  caption="Comparing standard market approach to our proprietary strategy"
                />
              </div>
              
              <motion.div 
                className="mt-8 p-6 bg-[#F9F8F4] border border-l-4 border-[#CAB06B] rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <p className="text-[#333333] font-medium leading-relaxed">
                  The Novus's premium positioning strategy is projected to achieve stabilization 25% faster than industry standards while generating an additional $2.6M in first-year revenue through our specialized high-rise differentiation approach.
                </p>
              </motion.div>
            </div>
            </Section>
          </Container>
        </motion.div>
      </Layout>
    </>
  );
}