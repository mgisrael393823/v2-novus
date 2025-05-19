import React, { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import { 
  Building, 
  Users, 
  Zap, 
  Award, 
  BarChart, 
  Target, 
  TrendingUp, 
  MapPin, 
  Diamond, 
  Check, 
  Star, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Filter,
  Sliders,
  Map,
  PieChart,
  Eye,
  EyeOff,
  Briefcase,
  Grid as GridIcon,
  List,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// Import improved components with alias to avoid conflicts
import { CompetitorCard } from "@/components/ui/CompetitorCard/new-index";
import { 
  FeatureComparisonTable, 
  MatrixComparisonTable 
} from "@/components/ui/ComparisonTable/new-index";
import { 
  InsightsPanel, 
  KeyAdvantage,
  InsightItem
} from "@/components/ui/InsightsPanel/new-index";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, Text, Paragraph } from "@/components/ui/Typography";
import { Grid } from "@/components/ui/Grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Re-use the same competitor data but with enhanced structure
const competitors = [
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
const properties = [
  { name: "The Novus", year: "2025", units: "188", highlight: true },
  { name: "Van Alen", year: "2021", units: "418" },
  { name: "One City Center", year: "2018", units: "139" },
  { name: "511 Faye", year: "2023", units: "196" },
  { name: "Cortland Bull City", year: "2019", units: "305" },
  { name: "Berkshire Ninth Street", year: "2015", units: "303" },
];

// Enhanced matrix metrics with scores for visualization
const matrixMetrics = [
  {
    name: "Avg. Rent",
    category: "Financial",
    values: {
      "The Novus": { value: "$3,150", highlight: true, score: 100, raw: 3150 },
      "Van Alen": { value: "$2,450", score: 78, raw: 2450 },
      "One City Center": { value: "$2,695", score: 85, raw: 2695 },
      "511 Faye": { value: "$2,350", score: 75, raw: 2350 },
      "Cortland Bull City": { value: "$2,150", score: 68, raw: 2150 },
      "Berkshire Ninth Street": { value: "$1,995", score: 63, raw: 1995 }
    }
  },
  {
    name: "Occupancy",
    category: "Performance",
    values: {
      "The Novus": { value: "Lease-up", highlight: true },
      "Van Alen": { value: "93%", score: 93, raw: 93 },
      "One City Center": { value: "95%", score: 95, raw: 95 },
      "511 Faye": { value: "87%", score: 87, raw: 87 },
      "Cortland Bull City": { value: "91%", score: 91, raw: 91 },
      "Berkshire Ninth Street": { value: "94%", score: 94, raw: 94 }
    }
  },
  {
    name: "Concessions",
    category: "Financial",
    values: {
      "The Novus": { value: "1.5-2 months", highlight: true, score: 50, raw: 1.75 },
      "Van Alen": { value: "1.5 months free", score: 50, raw: 1.5 },
      "One City Center": { value: "1 month free", score: 67, raw: 1.0 },
      "511 Faye": { value: "2 months free", score: 33, raw: 2.0 },
      "Cortland Bull City": { value: "1 month free", score: 67, raw: 1.0 },
      "Berkshire Ninth Street": { value: "1.5 months free", score: 50, raw: 1.5 }
    }
  },
  {
    name: "Amenity Rating",
    category: "Features",
    values: {
      "The Novus": { value: "★★★★★", highlight: true, rating: 5, score: 100, raw: 5 },
      "Van Alen": { value: "★★★★☆", rating: 4, score: 80, raw: 4 },
      "One City Center": { value: "★★★★★", rating: 5, score: 100, raw: 5 },
      "511 Faye": { value: "★★★★☆", rating: 4, score: 80, raw: 4 },
      "Cortland Bull City": { value: "★★★★☆", rating: 4, score: 80, raw: 4 },
      "Berkshire Ninth Street": { value: "★★★☆☆", rating: 3, score: 60, raw: 3 }
    }
  },
  {
    name: "WFH Amenities",
    category: "Features",
    values: {
      "The Novus": { value: "★★★★★", highlight: true, rating: 5, score: 100, raw: 5 },
      "Van Alen": { value: "★★★☆☆", rating: 3, score: 60, raw: 3 },
      "One City Center": { value: "★★★★☆", rating: 4, score: 80, raw: 4 },
      "511 Faye": { value: "★★★★★", rating: 5, score: 100, raw: 5 },
      "Cortland Bull City": { value: "★★★★☆", rating: 4, score: 80, raw: 4 },
      "Berkshire Ninth Street": { value: "★★☆☆☆", rating: 2, score: 40, raw: 2 }
    }
  },
  {
    name: "Building Height",
    category: "Physical",
    values: {
      "The Novus": { value: "27 stories", highlight: true, score: 100, raw: 27 },
      "Van Alen": { value: "6 stories", score: 22, raw: 6 },
      "One City Center": { value: "22 stories", score: 81, raw: 22 },
      "511 Faye": { value: "15 stories", score: 56, raw: 15 },
      "Cortland Bull City": { value: "5 stories", score: 19, raw: 5 },
      "Berkshire Ninth Street": { value: "6 stories", score: 22, raw: 6 }
    }
  }
];

// Feature comparison data with scores for visualization
const featureComparisonProperties = ["The Novus", "Van Alen", "One City Center", "Cortland Bull City", "Foster on the Park"];

const featureComparisonData = [
  {
    name: "Building Height",
    category: "Physical",
    values: {
      "The Novus": { value: "27 stories", highlight: true, score: 100, raw: 27 },
      "Van Alen": { value: "6 stories", score: 22, raw: 6 },
      "One City Center": { value: "22 stories", score: 81, raw: 22 },
      "Cortland Bull City": { value: "5 stories", score: 19, raw: 5 },
      "Foster on the Park": { value: "7 stories", score: 26, raw: 7 }
    }
  },
  {
    name: "Pool",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ Rooftop infinity pool with city views", highlight: true, score: 100, raw: 100 },
      "Van Alen": { value: "✓ Saltwater pool", score: 70, raw: 70 },
      "One City Center": { value: "✓ Rooftop pool", score: 90, raw: 90 },
      "Cortland Bull City": { value: "✓ Resort-style pool", score: 80, raw: 80 },
      "Foster on the Park": { value: "✓ Courtyard pool", score: 60, raw: 60 }
    }
  },
  {
    name: "Fitness Center",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ 3,500 sq ft center with Peloton bikes & yoga studio", highlight: true, score: 100, raw: 100 },
      "Van Alen": { value: "✓ Standard fitness center", score: 60, raw: 60 },
      "One City Center": { value: "✓ Premium fitness center", score: 80, raw: 80 },
      "Cortland Bull City": { value: "✓ 24-hour fitness center", score: 70, raw: 70 },
      "Foster on the Park": { value: "✓ Basic gym equipment", score: 40, raw: 40 }
    }
  },
  {
    name: "Pet Amenities",
    category: "Amenities",
    values: {
      "The Novus": { value: "✓ Dog park, wash station, 24/7 walking service", highlight: true, score: 100, raw: 100 },
      "Van Alen": { value: "✓ Dog wash only", score: 40, raw: 40 },
      "One City Center": { value: "✓ Pet spa & walking area", score: 70, raw: 70 },
      "Cortland Bull City": { value: "✓ Dog park & wash station", score: 80, raw: 80 },
      "Foster on the Park": { value: "✓ Pet relief area", score: 30, raw: 30 }
    }
  },
  {
    name: "Unit Finishes",
    category: "Interior Features",
    values: {
      "The Novus": { 
        value: "• Quartz countertops\n• Italian tile backsplashes\n• High-end appliance package\n• Engineered hardwood floors", 
        highlight: true,
        score: 100,
        raw: 100
      },
      "Van Alen": { 
        value: "• Quartz countertops\n• Ceramic tile backsplashes\n• Stainless appliances\n• Vinyl plank flooring",
        score: 75,
        raw: 75
      },
      "One City Center": { 
        value: "• Granite countertops\n• Tile backsplashes\n• High-end appliances\n• Hardwood floors",
        score: 85,
        raw: 85
      },
      "Cortland Bull City": {
        value: "• Quartz countertops\n• Subway tile backsplashes\n• Stainless appliances\n• Vinyl plank flooring",
        score: 70, 
        raw: 70
      },
      "Foster on the Park": {
        value: "• Granite countertops\n• Ceramic tile backsplashes\n• Standard appliances\n• Carpet/vinyl flooring",
        score: 60,
        raw: 60
      }
    }
  },
  {
    name: "Monthly Price Range (1BR)",
    category: "Pricing",
    values: {
      "The Novus": { value: "$2,795-3,450", highlight: true, score: 100, raw: 3122.5 },
      "Van Alen": { value: "$2,295-2,695", score: 80, raw: 2495 },
      "One City Center": { value: "$2,550-3,050", score: 90, raw: 2800 },
      "Cortland Bull City": { value: "$1,995-2,350", score: 70, raw: 2172.5 },
      "Foster on the Park": { value: "$2,195-2,450", score: 75, raw: 2322.5 }
    }
  },
  {
    name: "Leasing Incentives",
    category: "Pricing",
    values: {
      "The Novus": { 
        value: "• 2 months free on 14+ month leases\n• $1,500 move-in credit\n• Waived admin & app fees\n• Free reserved parking (1st year)", 
        highlight: true,
        score: 100,
        raw: 100
      },
      "Van Alen": {
        value: "• 1.5 months free\n• $750 move-in credit\n• Reduced admin fee",
        score: 70,
        raw: 70
      },
      "One City Center": {
        value: "• 1 month free\n• Waived application fee\n• Reduced parking rate",
        score: 50,
        raw: 50
      },
      "Cortland Bull City": {
        value: "• 1 month free\n• $500 gift card\n• Waived admin fee",
        score: 60, 
        raw: 60
      },
      "Foster on the Park": {
        value: "• 6 weeks free\n• $250 gift card\n• Reduced security deposit",
        score: 65,
        raw: 65
      }
    }
  }
];

// Define insight types with appropriate categories

// Enhanced insights with impact scores and categories
const matrixInsights: InsightItem[] = [
  {
    text: "The Downtown Durham submarket shows solid occupancy rates (91-95%) despite recent rent moderation and new inventory.",
    highlight: true,
    category: "insight",
    impact: "medium",
    score: 65
  },
  {
    text: "Concession trends show most properties offering 1-2 months free, with newer properties providing higher incentives to drive lease-up velocity.",
    category: "insight",
    impact: "medium",
    score: 60
  },
  {
    text: "The Novus's target rents position the property at a premium in the market, justified by its unique high-rise format, unmatched views, and superior amenities.",
    highlight: true,
    category: "strength",
    impact: "high",
    score: 85
  },
  {
    text: "Only One City Center offers a comparable high-rise living experience, indicating opportunity for The Novus to establish distinctive positioning through its taller format (27 stories), enhanced technology, and premium services.",
    category: "opportunity",
    impact: "high",
    score: 90
  },
  {
    text: "Work-from-home amenities have become a critical differentiator, with 40-50% of residents in competitive properties working remotely at least part-time.",
    category: "insight",
    impact: "high",
    score: 80
  },
  {
    text: "Newer properties (511 Faye) are struggling with lease-up despite modern finishes, indicating potential market softness that may require aggressive initial concessions.",
    category: "recommendation", // Changed from "warning" to a valid category
    impact: "medium",
    score: 55
  }
];

// Key advantages with enhanced data
const keyAdvantages = [
  {
    title: "Unmatched High-Rise Format",
    description: "Leveraging The Novus's 27-story height to provide truly premium views unavailable at competitors",
    icon: <Building className="h-5 w-5 text-novus-gold" />,
    score: 95,
    metric: "Height Advantage",
    metricValue: "+5-22 floors"
  },
  {
    title: "Enhanced Remote Work Spaces",
    description: "Capitalizing on the 40-50% of residents working from home at competitive properties",
    icon: <Briefcase className="h-5 w-5 text-[#CAB06B]" />,
    score: 85,
    metric: "WFH Population",
    metricValue: "45%"
  },
  {
    title: "Smart Home Technology",
    description: "Integrating advanced automation and connectivity lacking in competitor offerings",
    icon: <Zap className="h-5 w-5 text-[#CAB06B]" />,
    score: 90,
    metric: "Tech Integration",
    metricValue: "100%"
  },
  {
    title: "Premium Service Model",
    description: "Establishing a high-touch concierge approach with service guarantees and tracking",
    icon: <Award className="h-5 w-5 text-[#CAB06B]" />,
    score: 80,
    metric: "Service Rating",
    metricValue: "5/5"
  },
  {
    title: "Vertical Neighborhood Concept",
    description: "Creating a unique mixed-use environment with ground floor retail and stratified amenities",
    icon: <Target className="h-5 w-5 text-[#CAB06B]" />,
    score: 75,
    metric: "Amenity Sq Ft",
    metricValue: "12,500"
  }
];

export default function CompetitiveLandscape() {
  const [viewMode, setViewMode] = useState<'cards' | 'list'>('cards');
  const [showSecondary, setShowSecondary] = useState(true);
  
  return (
    <>
      <Head>
        <title>Competitive Landscape Analysis | The Novus</title>
        <meta name="description" content="Competitive Landscape Analysis for The Novus Apartments Lease-Up Strategy" />
      </Head>
      
      <Layout>
        <Container size="wide">
          {/* Hero Section with Executive Summary */}
          <Section>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-between items-end mb-4">
                <Heading level={1} className="mb-2">Competitive Landscape Analysis</Heading>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Map className="h-4 w-4" />
                    View on Map
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <PieChart className="h-4 w-4" />
                    Metrics Dashboard
                  </Button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <ContentBox variant="highlight-accent" className="lg:col-span-2">
                  <Text variant="body-lg" color="primary" wrap="pretty">
                    The Novus will enter a market with 6 primary competitors in Downtown Durham. This analysis identifies key differentiators, competitive gaps, and strategic positioning opportunities for The Novus's distinctive high-rise offering.
                  </Text>
                </ContentBox>
                
                <div className="bg-[#F9F8F4] border border-[#E5E2D9] rounded-md p-4">
                  <h3 className="text-base font-medium text-[#333333] mb-2 flex items-center">
                    <BarChart className="h-4 w-4 mr-2 text-[#CAB06B]" />
                    Competitive Summary
                  </h3>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-[#666666]">Primary Competitors</span>
                      <span className="font-medium">4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666666]">Avg. Market Occupancy</span>
                      <span className="font-medium">92%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666666]">Avg. 1BR Rent</span>
                      <span className="font-medium">$2,435</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#666666]">Competitive Position</span>
                      <span className="font-medium text-[#60A561]">Premium</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Key Advantages Card Grid */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#333333] flex items-center">
                  <Diamond className="h-5 w-5 mr-2 text-[#CAB06B]" />
                  Key Competitive Advantages
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {keyAdvantages.map((advantage, idx) => (
                  <KeyAdvantage
                    key={idx}
                    title={advantage.title}
                    description={advantage.description}
                    icon={advantage.icon}
                    score={advantage.score}
                    metric={advantage.metric}
                    metricValue={advantage.metricValue}
                    cta="Learn more"
                  />
                ))}
              </div>
            </div>
          </Section>
          
          {/* Tabbed Navigation Structure */}
          <Tabs defaultValue="competitors" className="mb-8">
            <div className="border-b border-[#E5E2D9] mb-4 sticky top-0 bg-white z-20 pb-1">
              <TabsList className="grid grid-cols-4 max-w-3xl">
                <TabsTrigger value="competitors" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span className="hidden sm:inline">Competitor</span> Analysis
                </TabsTrigger>
                <TabsTrigger value="matrix" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  Market <span className="hidden sm:inline">Matrix</span>
                </TabsTrigger>
                <TabsTrigger value="features" className="flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Feature <span className="hidden sm:inline">Comparison</span>
                </TabsTrigger>
                <TabsTrigger value="insights" className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Key <span className="hidden sm:inline">Insights</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Competitor Analysis Tab */}
            <TabsContent value="competitors" className="mt-0">
              <Section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#333333] flex items-center">
                    <Building className="h-5 w-5 mr-2 text-[#CAB06B]" />
                    Competitor Analysis
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`flex items-center gap-1 ${!showSecondary ? 'bg-[#F5F5E6] text-[#CAB06B] border-[#CAB06B]' : ''}`}
                      onClick={() => setShowSecondary(!showSecondary)}
                    >
                      {showSecondary ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      {showSecondary ? 'Hide' : 'Show'} Secondary
                    </Button>
                    
                    <div className="flex border border-[#E5E2D9] rounded-md overflow-hidden">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`flex items-center ${viewMode === 'cards' ? 'bg-[#F5F5E6] text-[#CAB06B]' : ''}`}
                        onClick={() => setViewMode('cards')}
                      >
                        <GridIcon className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`flex items-center ${viewMode === 'list' ? 'bg-[#F5F5E6] text-[#CAB06B]' : ''}`}
                        onClick={() => setViewMode('list')}
                      >
                        <List className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Competitor Cards Grid or List View */}
                {viewMode === 'cards' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {competitors
                      .filter(comp => comp.isPrimary || showSecondary)
                      .map((competitor, idx) => (
                        <CompetitorCard
                          key={idx}
                          competitor={competitor}
                          variant="dashboard"
                          animate={true}
                        />
                      ))
                    }
                  </div>
                ) : (
                  <div className="space-y-4">
                    {competitors
                      .filter(comp => comp.isPrimary || showSecondary)
                      .map((competitor, idx) => (
                        <CompetitorCard
                          key={idx}
                          competitor={competitor}
                          variant="default"
                          animate={true}
                        />
                      ))
                    }
                  </div>
                )}
              </Section>
              
              {/* Detailed Competitor Analysis Section */}
              <Section
                title="Detailed Competitor Analyses"
                subtitle="Property-specific insights for the primary competitors in The Novus's competitive set, with recommendations for strategic positioning and competitive response."
                icon={<TrendingUp className="h-6 w-6" />}
                divider={true}
                animate={true}
                className="mt-12"
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
            </TabsContent>
            
            {/* Market Matrix Tab */}
            <TabsContent value="matrix" className="mt-0">
              <Section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#333333] flex items-center">
                    <BarChart className="h-5 w-5 mr-2 text-[#CAB06B]" />
                    Market Matrix Analysis
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Filter Properties
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Sliders className="h-4 w-4" />
                      Customize View
                    </Button>
                  </div>
                </div>
                
                {/* Matrix variants with tabs for different views */}
                <Tabs defaultValue="table" className="mb-6">
                  <TabsList className="mb-4">
                    <TabsTrigger value="table">Table View</TabsTrigger>
                    <TabsTrigger value="cards">Card View</TabsTrigger>
                    <TabsTrigger value="visual">Visual View</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="table" className="mt-0">
                    <MatrixComparisonTable
                      properties={properties}
                      metrics={matrixMetrics}
                      className="mb-8"
                    />
                  </TabsContent>
                  
                  <TabsContent value="cards" className="mt-0">
                    <MatrixComparisonTable
                      properties={properties}
                      metrics={matrixMetrics}
                      variant="cards"
                      className="mb-8"
                    />
                  </TabsContent>
                  
                  <TabsContent value="visual" className="mt-0">
                    <MatrixComparisonTable
                      properties={properties}
                      metrics={matrixMetrics}
                      variant="visual"
                      className="mb-8"
                    />
                  </TabsContent>
                </Tabs>
                
                {/* Matrix Insights */}
                <InsightsPanel
                  title="Key Matrix Insights"
                  insights={matrixInsights}
                  icon={<BarChart className="h-5 w-5 text-[#CAB06B]" />}
                  variant="cards"
                  columns={2}
                  className="mb-12"
                />
              </Section>
            </TabsContent>
            
            {/* Feature Comparison Tab */}
            <TabsContent value="features" className="mt-0">
              <Section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#333333] flex items-center">
                    <Star className="h-5 w-5 mr-2 text-[#CAB06B]" />
                    Feature Comparison
                  </h2>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Filter Features
                    </Button>
                  </div>
                </div>
                
                {/* Feature Comparison variants with tabs for different views */}
                <Tabs defaultValue="table" className="mb-6">
                  <TabsList className="mb-4">
                    <TabsTrigger value="table">Table View</TabsTrigger>
                    <TabsTrigger value="cards">Card View</TabsTrigger>
                    <TabsTrigger value="visual">Visual View</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="table" className="mt-0">
                    <FeatureComparisonTable
                      title="Detailed Property Comparison"
                      description="The following side-by-side comparison highlights key differentiators between The Novus and its primary competitors, focusing on building attributes, amenities, finishes, and leasing incentives."
                      properties={featureComparisonProperties}
                      features={featureComparisonData}
                      highlightProperty="The Novus"
                      className="mb-12"
                    />
                  </TabsContent>
                  
                  <TabsContent value="cards" className="mt-0">
                    <FeatureComparisonTable
                      properties={featureComparisonProperties}
                      features={featureComparisonData}
                      highlightProperty="The Novus"
                      variant="cards"
                      className="mb-12"
                    />
                  </TabsContent>
                  
                  <TabsContent value="visual" className="mt-0">
                    <FeatureComparisonTable
                      properties={featureComparisonProperties}
                      features={featureComparisonData}
                      highlightProperty="The Novus"
                      variant="visual"
                      className="mb-12"
                    />
                  </TabsContent>
                </Tabs>
              </Section>
            </TabsContent>
            
            {/* Key Insights Tab */}
            <TabsContent value="insights" className="mt-0">
              <Section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-[#333333] flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-[#CAB06B]" />
                    Key Insights & Recommendations
                  </h2>
                </div>
                
                {/* Enhanced insights panel */}
                <div className="mb-8">
                  <InsightsPanel
                    title="Market Analysis Insights"
                    insights={matrixInsights}
                    variant="dashboard"
                    columns={2}
                  />
                </div>
                
                {/* Strategic Recommendations */}
                <div className="mt-12">
                  <h3 className="text-lg font-medium text-[#333333] flex items-center mb-4">
                    <Award className="h-5 w-5 mr-2 text-[#CAB06B]" />
                    Strategic Positioning Recommendations
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {keyAdvantages.map((advantage, idx) => (
                      <KeyAdvantage
                        key={idx}
                        title={advantage.title}
                        description={advantage.description}
                        icon={advantage.icon}
                        score={advantage.score}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Summary Call to Action */}
                <motion.div
                  className="bg-[#F5F5E6] p-6 border border-[#CAB06B] rounded-md mt-8 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-medium text-[#CAB06B] mb-2">Competitive Landscape Summary</h3>
                  <Paragraph className="mb-4 text-gray-600" wrap="pretty">
                    By implementing these strategic differentiators, The Novus can command the premium position in the Durham market while achieving accelerated lease-up velocity relative to comparable new deliveries.
                  </Paragraph>
                  
                  <div className="flex justify-end">
                    <Button variant="default" className="flex items-center gap-1">
                      View Implementation Plan
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </motion.div>
              </Section>
            </TabsContent>
          </Tabs>
        </Container>
      </Layout>
    </>
  );
}