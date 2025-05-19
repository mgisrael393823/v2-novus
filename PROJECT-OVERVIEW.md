# The Novus Apartments Project Overview

This project powers a teaser website for the ownership team of **The Novus Apartments**, showcasing select insights from a comprehensive research report on competitive rentals, neighborhood data, and property positioning. The complete research report that this project is based on is located in the documentation folder:  
`/Users/michaelisrael/Documents/novus-apartments/The Novus_ Competitive Analysis & Lease-Up Strategy.md`  

The goal is to provide enough value to entice the ownership team to reach out for a full consulting engagement—without revealing the complete strategy.

## Project Context
- **Property Details**: 188-unit luxury high-rise at A 27-story tower at 115 Morris St in the Five Points District, Downtown Durham
- **Target Audience**: Property ownership team and key stakeholders
- **Business Objective**: Convert website visitors into consulting clients through strategic content gating
- **Launch Timeline**: Property delivery expected in 2025

## Technology Stack
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Components**: Mix of custom UI components and shadcn/ui library
- **Fonts**: Montserrat (headings: 600 weight, body: 400 weight)
- **Deployment**: Vercel

## Content Strategy
- **Value Ladder**: Progressive disclosure from free insights to premium gated content
- **Content Categories**: Market intelligence, competitive landscape, pricing strategy, implementation roadmap
- **Gating Approach**: Multi-tiered content visibility (free → preview → fully gated)

## Tasks
1. **Codebase Review**  
   - Examine directory structure, frameworks, component hierarchy, styling conventions, and build setup  
   - Identify key areas where straightforward UI/UX improvements can be made

2. **Gated vs. Ungated Content Optimization**  
   - Convert fully ungated pages to a **partial-gate** model (teaser content + "Read More")  
   - Convert fully gated pages to a **partial-ungate** model (highlighted insights up front)

3. **Page-by-Page Audit**  
   - Executive Summary still needs work—optimize for partial gating and streamlined layout  
   - Apply the same approach across all pages: balance teaser content with gated detail
   - Maintain consistent UI patterns, typography and visual hierarchy

4. **UI/UX Standardization**
   - Establish consistent card styles, spacing, and grid layouts
   - Reduce visual clutter while maintaining brand identity
   - Create clearer user journey through progressive information disclosure
   - Optimize mobile responsiveness

## Design Guidelines
- **Primary Color**: #CAB06B (muted gold accent)
- **Secondary Colors**: #F9F8F4 (light cream background), #333333 (text)
- **Accent Colors**: #A8C0D1 (subtle blue), #B5C9B7 (subtle green)
- **Border Style**: #E5E2D9 with rounded-sm (4px) corners
- **Typography**: Montserrat with consistent heading structure
- **Content Density**: Aim for focused information with adequate white space

## Deliverables
- A concise overview of the codebase organization
- A prioritized list of UI/UX enhancements
- Any technical constraints to consider before implementation
- Consistent implementation of content gating strategy across all pages