
import React from "react";
import Link from "next/link";
import {
  BookOpen,
  BarChart2,
  Target,
  Lightbulb,
  DollarSign,
  Rocket,
  Map,
  Lock,
  ArrowRight
} from "lucide-react";
import { Container, ContentBox } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Grid } from "@/components/ui/Grid";
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardBadge } from "@/components/ui/card";

const sections = [
  { 
    id: 1, 
    title: "EXECUTIVE SUMMARY", 
    path: "/executive-summary", 
    description: "Overview of key findings and recommendations",
    icon: BookOpen,
    gated: false
  },
  { 
    id: 2, 
    title: "MARKET INTELLIGENCE", 
    path: "/market-intelligence", 
    description: "Analysis of current market conditions and trends",
    icon: BarChart2,
    gated: false
  },
  { 
    id: 3, 
    title: "COMPETITIVE LANDSCAPE", 
    path: "/competitive-landscape", 
    description: "Detailed assessment of competing properties",
    icon: Target,
    gated: false
  },
  { 
    id: 4, 
    title: "STRATEGIC OPPORTUNITIES", 
    path: "/strategic-opportunities", 
    description: "Identified opportunities for competitive advantage",
    icon: Lightbulb,
    gated: true
  },
  { 
    id: 5, 
    title: "PRICING & INCENTIVES", 
    path: "/pricing-framework", 
    description: "Recommended pricing strategy and incentive structure",
    icon: DollarSign,
    gated: true
  },
  { 
    id: 6, 
    title: "GO-TO-MARKET ROADMAP", 
    path: "/go-to-market", 
    description: "Timeline and implementation plan",
    icon: Rocket,
    gated: true
  },
  { 
    id: 7, 
    title: "OPPORTUNITY MAP", 
    path: "/opportunity-map", 
    description: "Visual representation of key opportunities",
    icon: Map,
    gated: false
  },
];

export default function TableOfContents() {
  return (
    <Section>
      <Container size="wide">
        <div className="text-center mb-16">
          <SectionTitle className="mb-2">ACCESS THE BLUEPRINT</SectionTitle>
          <div className="h-0.5 w-32 bg-novus-gold mx-auto mb-6"></div>
          <Heading level={2} className="uppercase mb-4" wrap="balance">BLUEPRINT SECTIONS</Heading>
          <Paragraph className="max-w-2xl mx-auto" wrap="pretty">
            Navigate through our comprehensive strategic framework, with premium sections gated for client access
          </Paragraph>
        </div>
        
        <Grid columns={3} gap="lg">
          {sections.map((section) => {
            const Icon = section.icon;
            
            return (
              <Link 
                href={section.path} 
                key={section.id}
                className="block h-full"
              >
                <Card 
                  variant={section.id % 3 === 0 ? "premium" : "default"} 
                  className="group h-full flex flex-col transition-all hover:border-novus-gold"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start">
                      <div className="p-2 mr-3 text-novus-gold bg-novus-cream-dark rounded-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm tracking-wide">{section.title}</CardTitle>
                        {section.gated && (
                          <Lock size={12} className="text-text-muted ml-2" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <CardDescription className="text-text-secondary text-sm mb-0">
                      {section.description}
                    </CardDescription>
                  </CardContent>
                  
                  <CardFooter className="pt-2 mt-auto border-t-0">
                    <span className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-novus-gold group-hover:underline">
                      VIEW SECTION <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            );
          })}
        </Grid>
        
        <ContentBox variant="highlight-accent" className="mt-20 p-8 text-center" withAnimation>
          <Heading level={3} className="uppercase mb-4">PREMIUM SECTIONS</Heading>
          <Paragraph className="mb-5 max-w-2xl mx-auto" wrap="pretty">
            Gated sections contain our proprietary strategic frameworks and implementation plans.
            Access is available to clients and qualified prospects.
          </Paragraph>
          <div className="inline-block bg-white border border-novus-border px-6 py-3 rounded-sm">
            <Text variant="body" className="text-sm">
              CONTACT: <span className="text-novus-gold font-medium">misrael00@gmail.com</span>
            </Text>
          </div>
        </ContentBox>
      </Container>
    </Section>
  );
}
