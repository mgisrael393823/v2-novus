import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { Building, Users, Zap, Award, BarChart, Target, TrendingUp, MapPin, Diamond, Check, Star, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CompetitorCard } from "@/components/ui/CompetitorCard";
import { MatrixComparisonTable, FeatureComparisonTable } from "@/components/ui/ComparisonTable";
import { InsightsPanel, KeyAdvantage } from "@/components/ui/InsightsPanel";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Paragraph } from "@/components/ui/Typography";
import { Grid } from "@/components/ui/Grid";

// Competitor data
const competitors: CompetitorProfile[] = [
  {
    name: "Van Alen",
    location: "615 S Buchanan Blvd, Durham, NC",
    builtYear: "2021",
    units: "418 units",
    distance: "0.7 miles",
    pricing: {
      studio: "$1,895-2,250",
      oneBr: "$2,295-2,695",
      twoBr: "$2,995-3,850",
    },
    performance: {
      occupancy: "93%",
      concessions: "1.5 months free",
    },
    residentProfile: {
      medianAge: "32",
      income: "$105K-135K",
      workFromHome: "45%",
      demographics: "58% single professionals",
    },
    strengths: [
      "Urban sanctuary concept with sophisticated design and private courtyards",
      "Excellent proximity to Duke University and Medical Center",
      "Strong sustainability focus with LEED certification and wellness amenities",
    ],
    weaknesses: [
      "No true high-rise views despite premium positioning",
      "Limited technology integration in units and amenity spaces",
      "Inconsistent staff service and response times (38% of negative reviews)",
    ],
    recommendations: [
      "Position The Novus's high-rise format as offering truly premium views unavailable at Van Alen",
      "Emphasize The Novus's superior technology integration and smart home features",
      "Develop a high-touch service model with quick response guarantees and feedback tracking",
    ],
    isPrimary: true,
    ranking: 1,
  },
  {
    name: "One City Center",
    location: "110 Corcoran St, Durham, NC",
    builtYear: "2018",
    units: "139 units",
    distance: "0.3 miles",
    pricing: {
      studio: "$2,195-2,595",
      oneBr: "$2,550-3,050",
      twoBr: "$3,395-4,850",
    },
    performance: {
      occupancy: "95%",
      concessions: "1 month free",
    },
    residentProfile: {
      medianAge: "39",
      income: "$125K-175K",
      workFromHome: "40%",
      demographics: "45% couples, 55% singles",
    },
    strengths: [
      "High-rise format with excellent city views and rooftop pool and lounge",
      "Prime central location with walkability to shops, restaurants, and DPAC",
      "Mixed-use building with ground floor retail and premium resident services",
    ],
    weaknesses: [
      "Significantly shorter building height (22 stories) with fewer premium view units",
      "Limited technology integration in units and outdated resident app",
      "Expensive parking with limited visitor options and difficult weekend access",
    ],
    recommendations: [
      "Emphasize The Novus's superior height (27 vs. 22 stories) offering more premium view units",
      "Highlight advanced technology integration in units with comprehensive smart home features",
      "Develop superior parking solution with dedicated, accessible visitor parking and valet options",
    ],
    isPrimary: true,
    ranking: 2,
  },
  {
    name: "511 Faye",
    location: "511 Fayetteville St, Durham, NC",
    builtYear: "2023",
    units: "196 units",
    distance: "0.5 miles",
    pricing: {
      studio: "$1,795-2,150",
      oneBr: "$2,195-2,550",
      twoBr: "$2,850-3,450",
    },
    performance: {
      occupancy: "87%",
      concessions: "2 months free",
    },
    residentProfile: {
      medianAge: "31",
      income: "$95K-135K",
      workFromHome: "50%",
      demographics: "65% singles, 35% couples",
    },
    strengths: [
      "High-rise format (15 stories) with modern design and downtown views",
      "Newest property in competition set with modern finishes and amenities",
      "Excellent remote work amenities with private pods and conference spaces",
    ],
    weaknesses: [
      "Low occupancy with aggressive concessions despite recent completion",
      "Inconsistent resident services with no true concierge model",
      "Limited outdoor amenity spaces with small pool deck and gathering areas",
    ],
    recommendations: [
      "Position The Novus's significantly taller format (27 vs. 15 stories) with superior views",
      "Develop premium concierge service model with dedicated staff and service guarantees",
      "Create larger, more diverse outdoor amenity spaces with multiple activity zones",
    ],
    isPrimary: true,
    ranking: 3,
  },
  {
    name: "Cortland Bull City",
    location: "125 W Main St, Durham, NC",
    builtYear: "2019",
    units: "305 units",
    distance: "0.8 miles",
    pricing: {
      studio: "$1,750-2,050",
      oneBr: "$1,995-2,350",
      twoBr: "$2,450-2,950",
    },
    performance: {
      occupancy: "91%",
      concessions: "1 month free",
    },
    residentProfile: {
      medianAge: "34",
      income: "$90K-120K",
      workFromHome: "42%",
      demographics: "60% singles, 35% couples",
    },
    strengths: [
      "Modern tech integration with smart home features in all units",
      "Excellent co-working spaces with private conference rooms",
      "Design-forward interiors with custom finishes and lighting",
    ],
    weaknesses: [
      "Limited amenity variety compared to newer properties",
      "Limited outdoor amenity spaces with undersized pool area",
      "Resident complaints about management responsiveness",
    ],
    recommendations: [
      "Match or exceed technology offerings while emphasizing superior service model",
      "Develop significantly larger outdoor amenity spaces with multiple activity zones",
      "Position in similar design-forward aesthetic with enhanced emphasis on quality",
    ],
    isPrimary: true,
    ranking: 4,
  },
  {
    name: "Berkshire Ninth Street",
    location: "510 N Mangum St, Durham, NC",
    builtYear: "2015",
    units: "303 units",
    distance: "1.4 miles",
    pricing: {
      studio: "$1,875-2,095",
      oneBr: "$2,195-2,450",
      twoBr: "$2,695-3,250",
    },
    performance: {
      occupancy: "94%",
      concessions: "1.5 months free",
    },
    isPrimary: false,
    ranking: 5,
  },
  {
    name: "Beckon Apartments",
    location: "220 W Durham Blvd, Durham, NC",
    builtYear: "2022", 
    units: "176 units",
    distance: "1.1 miles",
    pricing: {
      studio: "$1,795-2,025",
      oneBr: "$2,095-2,425",
      twoBr: "$2,650-3,250",
    },
    performance: {
      occupancy: "89%",
      concessions: "1.5 months free",
    },
    isPrimary: false,
    ranking: 6,
  },
];

// Matrix data
interface Property {
  name: string;
  year: string;
  units: string;
  highlight?: boolean;
}

interface MetricValue {
  value: string;
  highlight?: boolean;
  rating?: number;
}

interface MetricValues {
  [key: string]: MetricValue;
}

interface Metric {
  name: string;
  values: MetricValues;
}

const properties: Property[] = [
  { name: "The Novus", year: "2025", units: "188", highlight: true },
  { name: "Van Alen", year: "2021", units: "418" },
  { name: "One City Center", year: "2018", units: "139" },
  { name: "511 Faye", year: "2023", units: "196" },
  { name: "Cortland Bull City", year: "2019", units: "305" },
  { name: "Berkshire Ninth Street", year: "2015", units: "303" },
];

const matrixMetrics: Metric[] = [
  {
    name: "Avg. Rent",
    values: {
      "The Novus": { value: "$3,150", highlight: true },
      "Van Alen": { value: "$2,450" },
      "One City Center": { value: "$2,695" },
      "511 Faye": { value: "$2,350" },
      "Cortland Bull City": { value: "$2,150" },
      "Berkshire Ninth Street": { value: "$1,995" }
    }
  },
  {
    name: "Occupancy",
    values: {
      "The Novus": { value: "Lease-up", highlight: true },
      "Van Alen": { value: "93%" },
      "One City Center": { value: "95%" },
      "511 Faye": { value: "87%" },
      "Cortland Bull City": { value: "91%" },
      "Berkshire Ninth Street": { value: "94%" }
    }
  },
  {
    name: "Concessions",
    values: {
      "The Novus": { value: "1.5-2 months", highlight: true },
      "Van Alen": { value: "1.5 months free" },
      "One City Center": { value: "1 month free" },
      "511 Faye": { value: "2 months free" },
      "Cortland Bull City": { value: "1 month free" },
      "Berkshire Ninth Street": { value: "1.5 months free" }
    }
  },
  {
    name: "Amenity Rating",
    values: {
      "The Novus": { value: "★★★★★", highlight: true, rating: 5 },
      "Van Alen": { value: "★★★★☆", rating: 4 },
      "One City Center": { value: "★★★★★", rating: 5 },
      "511 Faye": { value: "★★★★☆", rating: 4 },
      "Cortland Bull City": { value: "★★★★☆", rating: 4 },
      "Berkshire Ninth Street": { value: "★★★☆☆", rating: 3 }
    }
  }
];

// Feature comparison data
const featureComparisonProperties = ["The Novus", "Van Alen", "One City Center", "Cortland Bull City", "Foster on the Park"];

interface FeatureValue {
  value: string;
  highlight?: boolean;
}

interface FeatureValues {
  [key: string]: FeatureValue | string;
}

interface Feature {
  name: string;
  category?: string;
  values: FeatureValues;
}

const featureComparisonData: Feature[] = [
  {
    name: "Building Height",
    values: {
      "The Novus": { value: "27 stories", highlight: true },
      "Van Alen": "6 stories",
      "One City Center": "22 stories",
      "Cortland Bull City": "5 stories",
      "Foster on the Park": "7 stories"
    }
  },
  {
    name: "Pool",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ Rooftop infinity pool with city views", highlight: true },
      "Van Alen": "✓ Saltwater pool",
      "One City Center": "✓ Rooftop pool",
      "Cortland Bull City": "✓ Resort-style pool",
      "Foster on the Park": "✓ Courtyard pool"
    }
  },
  {
    name: "Fitness Center",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ 3,500 sq ft center with Peloton bikes & yoga studio", highlight: true },
      "Van Alen": "✓ Standard fitness center",
      "One City Center": "✓ Premium fitness center",
      "Cortland Bull City": "✓ 24-hour fitness center",
      "Foster on the Park": "✓ Basic gym equipment"
    }
  },
  {
    name: "Pet Amenities",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ Dog park, wash station, 24/7 walking service", highlight: true },
      "Van Alen": "✓ Dog wash only",
      "One City Center": "✓ Pet spa & walking area",
      "Cortland Bull City": "✓ Dog park & wash station",
      "Foster on the Park": "✓ Pet relief area"
    }
  },
  {
    name: "Unit Finishes",
    category: "Interior Features",
    values: {
      "The Novus": { 
        value: "• Quartz countertops\n• Italian tile backsplashes\n• High-end appliance package\n• Engineered hardwood floors", 
        highlight: true 
      },
      "Van Alen": "• Quartz countertops\n• Ceramic tile backsplashes\n• Stainless appliances\n• Vinyl plank flooring",
      "One City Center": "• Granite countertops\n• Tile backsplashes\n• High-end appliances\n• Hardwood floors",
      "Cortland Bull City": "• Quartz countertops\n• Subway tile backsplashes\n• Stainless appliances\n• Vinyl plank flooring",
      "Foster on the Park": "• Granite countertops\n• Ceramic tile backsplashes\n• Standard appliances\n• Carpet/vinyl flooring"
    }
  },
  {
    name: "Monthly Price Range (1BR)",
    category: "Pricing",
    values: {
      "The Novus": { value: "$2,795-3,450", highlight: true },
      "Van Alen": "$2,295-2,695",
      "One City Center": "$2,550-3,050",
      "Cortland Bull City": "$1,995-2,350",
      "Foster on the Park": "$2,195-2,450"
    }
  },
  {
    name: "Leasing Incentives",
    category: "Pricing",
    values: {
      "The Novus": { 
        value: "• 2 months free on 14+ month leases\n• $1,500 move-in credit\n• Waived admin & app fees\n• Free reserved parking (1st year)", 
        highlight: true 
      },
      "Van Alen": "• 1.5 months free\n• $750 move-in credit\n• Reduced admin fee",
      "One City Center": "• 1 month free\n• Waived application fee\n• Reduced parking rate",
      "Cortland Bull City": "• 1 month free\n• $500 gift card\n• Waived admin fee",
      "Foster on the Park": "• 6 weeks free\n• $250 gift card\n• Reduced security deposit"
    }
  }
];

// Insights data
const matrixInsights = [
  {
    text: "The Downtown Durham submarket shows solid occupancy rates (91-95%) despite recent rent moderation and new inventory.",
    highlight: true,
    category: "insight"
  },
  {
    text: "Concession trends show most properties offering 1-2 months free, with newer properties providing higher incentives to drive lease-up velocity.",
    category: "insight"
  },
  {
    text: "The Novus's target rents position the property at a premium in the market, justified by its unique high-rise format, unmatched views, and superior amenities.",
    highlight: true,
    category: "strength"
  },
  {
    text: "Only One City Center offers a comparable high-rise living experience, indicating opportunity for The Novus to establish distinctive positioning through its taller format (27 stories), enhanced technology, and premium services.",
    category: "opportunity"
  }
];

// Key advantages data
const keyAdvantages = [
  {
    title: "Unmatched High-Rise Format",
    description: "Leveraging The Novus's 27-story height to provide truly premium views unavailable at competitors",
    icon: <Building className="h-5 w-5 text-novus-gold" />
  },
  {
    title: "Enhanced Remote Work Spaces",
    description: "Capitalizing on the 40-50% of residents working from home at competitive properties",
    icon: <Users className="h-5 w-5 text-[#CAB06B]" />
  },
  {
    title: "Smart Home Technology",
    description: "Integrating advanced automation and connectivity lacking in competitor offerings",
    icon: <Zap className="h-5 w-5 text-[#CAB06B]" />
  },
  {
    title: "Premium Service Model",
    description: "Establishing a high-touch concierge approach with service guarantees and tracking",
    icon: <Award className="h-5 w-5 text-[#CAB06B]" />
  },
  {
    title: "Vertical Neighborhood Concept",
    description: "Creating a unique mixed-use environment with ground floor retail and stratified amenities",
    icon: <Target className="h-5 w-5 text-[#CAB06B]" />
  }
];

// Update CompetitorProfile interface to make all properties optional
interface CompetitorProfile {
  name: string;
  location: string;
  builtYear: string;
  units: string;
  distance: string;
  pricing?: {
    studio: string;
    oneBr: string;
    twoBr: string;
  };
  performance?: {
    occupancy: string;
    concessions: string;
  };
  residentProfile?: {
    medianAge: string;
    income: string;
    workFromHome: string;
    demographics: string;
  };
  strengths?: string[];
  weaknesses?: string[];
  recommendations?: string[];
  isPrimary: boolean;
  ranking: number;
}

export default function CompetitiveLandscape() {
  return (
    <>
      <Head>
        <title>Competitive Landscape Analysis | The Novus</title>
        <meta name="description" content="Competitive Landscape Analysis for The Novus Apartments Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <Container size="wide">
          <Section className="mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Heading level={1} className="mb-6">Competitive Landscape Analysis</Heading>
              
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8">
                  <ContentBox variant="highlight-accent">
                    <Text variant="body-lg" color="primary" wrap="pretty">
                      The Novus will enter a market with 6 primary competitors in Downtown Durham. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities for The Novus's distinctive high-rise offering.
                    </Text>
                  </ContentBox>
                </div>
                
                <div className="col-span-12 md:col-span-4">
                  <table className="w-full border-collapse">
                    <tbody>
                      <tr>
                        <th className="text-left py-2 pr-4 font-medium border-b">Primary Competitors</th>
                        <td className="text-right py-2 font-medium border-b">4</td>
                      </tr>
                      <tr>
                        <th className="text-left py-2 pr-4 font-medium border-b">Secondary Competitors</th>
                        <td className="text-right py-2 font-medium border-b">2</td>
                      </tr>
                      <tr>
                        <th className="text-left py-2 pr-4 font-medium border-b">Avg. Occupancy</th>
                        <td className="text-right py-2 font-medium border-b">92%</td>
                      </tr>
                      <tr>
                        <th className="text-left py-2 pr-4 font-medium">Market Position</th>
                        <td className="text-right py-2 font-semibold text-green-600">Premium</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          </Section>
          
          <Section 
            title="Competitive Set Overview"
            subtitle="An analysis of the primary and secondary competitors in the Downtown Durham market."
            icon={<Building className="h-6 w-6" />}
            divider={true}
          >
            {/* Main Competitor Section */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Building className="text-novus-gold" size={24} />
                <Heading level={2} className="mb-0">Competitive Set</Heading>
              </div>
              
              {/* Primary Competitors Section */}
              <div className="mb-8">
                <Heading level={3} className="mb-4 font-medium text-gray-700">Primary Competitors</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {competitors
                    .filter(comp => comp.isPrimary)
                    .map((competitor, idx) => (
                      <motion.div 
                        key={idx}
                        className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 relative min-h-[420px] w-full md:w-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {/* Property Name */}
                        <h4 className="text-lg font-semibold mb-2">{competitor.name}</h4>
                        
                        {/* Rank Badge */}
                        <span className="absolute top-3 right-3 bg-blue-50 text-blue-700 text-xs px-2.5 py-1 rounded-full font-medium">
                          Rank #{competitor.ranking}
                        </span>
                        
                        {/* Location & Property Info */}
                        <div className="mb-4">
                          <div className="flex items-start mb-3">
                            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">{competitor.location}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500">Built</div>
                            <div className="text-sm font-medium text-black">{competitor.builtYear}</div>
                            
                            <div className="text-sm text-gray-500">Units</div>
                            <div className="text-sm font-medium text-black">{competitor.units}</div>
                            
                            <div className="text-sm text-gray-500">Distance</div>
                            <div className="text-sm font-medium text-black">{competitor.distance}</div>
                          </div>
                        </div>
                        
                        <hr className="my-4 border-gray-200" />
                        
                        {/* Pricing Section */}
                        <div className="mb-4">
                          <h5 className="text-base font-semibold mb-3">Pricing</h5>
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500">Studio</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.studio}</div>
                            
                            <div className="text-sm text-gray-500">1BR</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.oneBr}</div>
                            
                            <div className="text-sm text-gray-500">2BR</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.twoBr}</div>
                          </div>
                        </div>
                        
                        <hr className="my-4 border-gray-200" />
                        
                        {/* Performance Section */}
                        <div className="mb-4">
                          <h5 className="text-base font-semibold mb-3">Performance</h5>
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500 flex items-center">Occupancy</div>
                            <div className="text-sm">
                              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                                {competitor.performance?.occupancy}
                              </span>
                            </div>
                            
                            <div className="text-sm text-gray-500">Concessions</div>
                            <div className="text-sm font-medium text-black">{competitor.performance?.concessions}</div>
                          </div>
                        </div>
                        
                        {/* Resident Profile */}
                        {competitor.residentProfile && (
                          <>
                            <hr className="my-4 border-gray-200" />
                            
                            <div>
                              <h5 className="text-base font-semibold mb-3">Resident Profile</h5>
                              <div className="grid grid-cols-2 gap-y-2">
                                <div className="text-sm text-gray-500">Median Age</div>
                                <div className="text-sm font-medium text-black">{competitor.residentProfile?.medianAge}</div>
                                
                                <div className="text-sm text-gray-500">Income</div>
                                <div className="text-sm font-medium text-black">{competitor.residentProfile?.income}</div>
                                
                                <div className="text-sm text-gray-500">WFH</div>
                                <div className="text-sm font-medium text-black">{competitor.residentProfile?.workFromHome}</div>
                                
                                <div className="text-sm text-gray-500">Demographics</div>
                                <div className="text-sm font-medium text-black">{competitor.residentProfile?.demographics}</div>
                              </div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    ))
                  }
                </div>
              </div>
              
              {/* Secondary Competitors Section */}
              <div>
                <Heading level={3} className="mb-4 font-medium text-gray-700">Secondary Competitors</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {competitors
                    .filter(comp => !comp.isPrimary)
                    .map((competitor, idx) => (
                      <motion.div 
                        key={idx}
                        className="border border-gray-200 rounded-xl bg-white shadow-sm p-6 relative min-h-[420px] w-full md:w-[320px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        {/* Property Name */}
                        <h4 className="text-lg font-semibold mb-2">{competitor.name}</h4>
                        
                        {/* Rank Badge */}
                        <span className="absolute top-3 right-3 bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-full font-medium">
                          Rank #{competitor.ranking}
                        </span>
                        
                        {/* Location & Property Info */}
                        <div className="mb-4">
                          <div className="flex items-start mb-3">
                            <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-sm">{competitor.location}</span>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500">Built</div>
                            <div className="text-sm font-medium text-black">{competitor.builtYear}</div>
                            
                            <div className="text-sm text-gray-500">Units</div>
                            <div className="text-sm font-medium text-black">{competitor.units}</div>
                            
                            <div className="text-sm text-gray-500">Distance</div>
                            <div className="text-sm font-medium text-black">{competitor.distance}</div>
                          </div>
                        </div>
                        
                        <hr className="my-4 border-gray-200" />
                        
                        {/* Pricing Section */}
                        <div className="mb-4">
                          <h5 className="text-base font-semibold mb-3">Pricing</h5>
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500">Studio</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.studio}</div>
                            
                            <div className="text-sm text-gray-500">1BR</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.oneBr}</div>
                            
                            <div className="text-sm text-gray-500">2BR</div>
                            <div className="text-sm font-medium text-black">{competitor.pricing?.twoBr}</div>
                          </div>
                        </div>
                        
                        <hr className="my-4 border-gray-200" />
                        
                        {/* Performance Section */}
                        <div>
                          <h5 className="text-base font-semibold mb-3">Performance</h5>
                          <div className="grid grid-cols-2 gap-y-2">
                            <div className="text-sm text-gray-500 flex items-center">Occupancy</div>
                            <div className="text-sm">
                              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-medium">
                                {competitor.performance?.occupancy}
                              </span>
                            </div>
                            
                            <div className="text-sm text-gray-500">Concessions</div>
                            <div className="text-sm font-medium text-black">{competitor.performance?.concessions}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  }
                </div>
              </div>
            </div>
            
            {/* Competitor Matrix Analysis Section */}
            <div className="mt-12">
              <div className="mb-6">
                <Heading level={3} className="mb-4">Competitive Matrix Analysis</Heading>
                <div className="text-sm mb-4">
                  This comparative matrix highlights key metrics across the competitive set, revealing strategic positioning opportunities for The Novus based on amenities, rents, absorption rates, and resident demographics.
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Property</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Built</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Units</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Avg. Rent</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Occupancy</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Concessions</th>
                        <th className="border-b border-t py-3 px-4 text-left font-semibold">Amenity Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-amber-50">
                        <td className="border-b py-3 px-4 font-medium">The Novus</td>
                        <td className="border-b py-3 px-4">{properties[0].year}</td>
                        <td className="border-b py-3 px-4">{properties[0].units}</td>
                        <td className="border-b py-3 px-4">{matrixMetrics[0].values["The Novus"].value}</td>
                        <td className="border-b py-3 px-4">{matrixMetrics[1].values["The Novus"].value}</td>
                        <td className="border-b py-3 px-4">{matrixMetrics[2].values["The Novus"].value}</td>
                        <td className="border-b py-3 px-4">{matrixMetrics[3].values["The Novus"].value}</td>
                      </tr>
                      {properties.slice(1).map((property, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="border-b py-3 px-4 font-medium">{property.name}</td>
                          <td className="border-b py-3 px-4">{property.year}</td>
                          <td className="border-b py-3 px-4">{property.units}</td>
                          <td className="border-b py-3 px-4">{matrixMetrics[0].values[property.name].value}</td>
                          <td className="border-b py-3 px-4">{matrixMetrics[1].values[property.name].value}</td>
                          <td className="border-b py-3 px-4">{matrixMetrics[2].values[property.name].value}</td>
                          <td className="border-b py-3 px-4">{matrixMetrics[3].values[property.name].value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-12">
                <Heading level={3} className="mb-4">Key Market Insights</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {matrixInsights.map((insight, idx) => (
                    <div key={idx} className="border p-4 rounded-md">
                      <div className="flex gap-2 mb-2">
                        {insight.category === 'strength' && <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />}
                        {insight.category === 'opportunity' && <TrendingUp className="h-5 w-5 text-amber-600 flex-shrink-0" />}
                        {insight.category === 'insight' && <BarChart className="h-5 w-5 text-blue-600 flex-shrink-0" />}
                      </div>
                      <div className={insight.highlight ? "font-medium" : ""}>{insight.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Property Comparison Table */}
            <div className="mt-12">
              <div className="mb-12">
                <Heading level={3} className="mb-4">Detailed Property Comparison</Heading>
                <div className="text-sm mb-6">
                  The following side-by-side comparison highlights key differentiators between The Novus and its primary competitors, focusing on building attributes, amenities, finishes, and leasing incentives.
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border-b border-t py-3 px-4 text-left font-semibold" style={{ minWidth: '150px' }}>Feature</th>
                        {featureComparisonProperties.map((property, idx) => (
                          <th 
                            key={idx} 
                            className={`border-b border-t py-3 px-4 text-left font-semibold ${property === "The Novus" ? "bg-amber-50" : ""}`}
                            style={{ minWidth: '200px' }}
                          >
                            {property}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add "Physical" category header for the first item */}
                      <tr className="bg-[#f2f2f2] shadow-sm">
                        <td 
                          colSpan={featureComparisonProperties.length + 1} 
                          className="py-5 px-6 font-semibold text-[16px] border-l-4 border-[#CAB06B]"
                        >
                          Physical Attributes
                        </td>
                      </tr>
                      
                      {featureComparisonData.map((feature, featureIdx) => (
                        <React.Fragment key={featureIdx}>
                          {featureIdx > 0 && feature.category && feature.category !== featureComparisonData[featureIdx-1].category && (
                            <>
                              <tr className="h-4">
                                <td colSpan={featureComparisonProperties.length + 1}></td>
                              </tr>
                              <tr className="bg-[#f2f2f2] shadow-sm">
                                <td 
                                  colSpan={featureComparisonProperties.length + 1} 
                                  className="py-5 px-6 font-semibold text-[16px] border-l-4 border-[#CAB06B]"
                                >
                                  {feature.category}
                                </td>
                              </tr>
                            </>
                          )}
                          <tr className={`${featureIdx % 2 === 0 ? "bg-white" : "bg-gray-50"} ${feature.category ? "mt-2" : ""}`}>
                            <td className="border-b py-4 px-5 font-medium align-top">{feature.name}</td>
                            {featureComparisonProperties.map((property, propIdx) => {
                              const value = feature.values[property];
                              const displayValue = typeof value === 'object' && 'value' in value ? value.value : value as string;
                              const isHighlighted = typeof value === 'object' && 'highlight' in value ? value.highlight : false;
                              
                              return (
                                <td 
                                  key={propIdx} 
                                  className={`border-b py-4 px-5 align-top ${isHighlighted ? "font-medium" : ""} ${property === "The Novus" ? "bg-amber-50" : ""}`}
                                >
                                  {displayValue && displayValue.includes("\n") ? (
                                    <ul className="list-disc pl-4 space-y-1">
                                      {displayValue.split("\n").map((line, lineIdx) => (
                                        <li key={lineIdx}>{line}</li>
                                      ))}
                                    </ul>
                                  ) : displayValue}
                                </td>
                              );
                            })}
                          </tr>
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Section>
          
          <Section
            title="Detailed Competitor Analyses"
            subtitle="Property-specific insights for the primary competitors in The Novus's competitive set, with recommendations for strategic positioning and competitive response."
            icon={<TrendingUp className="h-6 w-6" />}
            divider={true}
          >
            <div className="space-y-8">
              {competitors
                .filter(comp => comp.isPrimary && comp.strengths && comp.weaknesses && comp.recommendations)
                .map((competitor, idx) => (
                  <CompetitorCard 
                    key={idx} 
                    competitor={competitor} 
                    variant="detailed"
                    animate={true}
                  />
                ))
              }
            </div>
          </Section>
          
          <Section
            title="Competitive Landscape Summary"
            subtitle="Our competitive analysis reveals significant opportunity for The Novus to establish a unique market position."
            icon={<Award className="h-6 w-6" />}
            divider={true}
            color="light"
          >
            <div className="mb-8">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 border-b border-t">Key Advantage</th>
                    <th className="text-left py-3 px-4 border-b border-t">Description</th>
                    <th className="text-left py-3 px-4 border-b border-t">Competitive Impact</th>
                  </tr>
                </thead>
                <tbody>
                  {keyAdvantages.map((advantage, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="py-4 px-4 border-b">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5">
                            {advantage.icon}
                          </div>
                          <div className="font-medium">{advantage.title}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4 border-b">
                        {advantage.description}
                      </td>
                      <td className="py-4 px-4 border-b">
                        {idx === 0 && "Only One City Center offers comparable high-rise format but with 5 fewer floors."}
                        {idx === 1 && "40-50% of residents in competitive properties work remotely, making this a critical differentiator."}
                        {idx === 2 && "Competitors show limited technology integration, creating significant opportunity."}
                        {idx === 3 && "Service inconsistency is a common weakness in competitors' resident reviews."}
                        {idx === 4 && "No competitor offers a comprehensive vertical neighborhood concept."}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            
              <div className="border border-gray-200 rounded-md bg-gray-50 p-6">
                <Heading level={3} className="mb-3">Summary Recommendation</Heading>
                <div className="text-lg">
                  By implementing these strategic differentiators, The Novus can command the premium position in the Durham market while achieving accelerated lease-up velocity relative to comparable new deliveries. The high-rise format, combined with enhanced technology and service, addresses clear market gaps identified in the competitive analysis.
                </div>
              </div>
            </div>
          </Section>
        </Container>
      </Layout>
    </>
  );
}