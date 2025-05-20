
import React from "react";
import Link from "next/link";
import { Container, ContentBox } from "@/components/ui/Container";
import { Heading, SectionTitle, Paragraph, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Section";
import { Grid, CardGrid } from "@/components/ui/Grid";
import { Button } from "@/components/ui/button";

export default function IntroSection() {
  return (
    <Section>
      <Container size="wide">
        <div className="mb-16 text-center">
          <div className="inline-block mb-8">
            <SectionTitle>THE BLUEPRINT</SectionTitle>
            <div className="h-0.5 w-32 bg-novus-gold mx-auto"></div>
          </div>
          
          <Heading level={1} className="mb-6" wrap="balance">
            ELEVATE THE EVERYDAY
          </Heading>
          
          <div className="max-w-3xl mx-auto">
            <Text 
              variant="body-lg" 
              color="primary" 
              className="text-center font-medium mb-6" 
              wrap="pretty"
            >
              Novus Apartments distinguishes itself in Downtown Durham with its exceptional sustainability features, high-end finishes, and unmatched leasing incentives, catering specifically to discerning renters seeking luxury and convenience.
            </Text>
            
            <Paragraph size="large" className="mb-10" wrap="pretty">
              The Novus Blueprint is a comprehensive strategic framework designed to optimize the lease-up process, identify competitive advantages, and provide actionable recommendations to maximize occupancy and rental revenue for the Five Points District/Downtown Durham market.
            </Paragraph>
            
            <Link href="/executive-summary">
              <Button variant="default" size="xl" uppercase className="px-8">
                EXPLORE BLUEPRINT
              </Button>
            </Link>
          </div>
        </div>
        
        <CardGrid columns={3} gap="lg" withAnimation staggered>
          <ContentBox>
            <Heading level={4} className="mb-4">
              MARKET ANALYSIS
            </Heading>
            <Paragraph wrap="pretty">
              Comprehensive market intelligence and detailed competitive landscape analysis for the Five Points District submarket.
            </Paragraph>
          </ContentBox>
          
          <ContentBox variant="light">
            <Heading level={4} className="mb-4">
              STRATEGIC FRAMEWORK
            </Heading>
            <Paragraph wrap="pretty">
              Strategic opportunities, pricing model, and incentive structure to optimize lease-up velocity and revenue.
            </Paragraph>
          </ContentBox>
          
          <ContentBox>
            <Heading level={4} className="mb-4">
              IMPLEMENTATION PLAN
            </Heading>
            <Paragraph wrap="pretty">
              Detailed go-to-market roadmap with phased marketing approach and actionable opportunity map.
            </Paragraph>
          </ContentBox>
        </CardGrid>
      </Container>
    </Section>
  );
}
