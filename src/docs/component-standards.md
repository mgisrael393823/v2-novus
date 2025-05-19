# Novus Apartments Website Component Standards

This document outlines the standards and guidelines for using UI components across the Novus Apartments website. Following these standards ensures visual consistency and adherence to the brand's design language.

## Table of Contents

- [Design Tokens](#design-tokens)
- [Typography](#typography)
- [Layout Components](#layout-components)
- [UI Components](#ui-components)
- [Usage Patterns](#usage-patterns)
- [Responsive Guidelines](#responsive-guidelines)

## Design Tokens

### Colors

Primary brand colors are implemented as design tokens and should be used instead of hardcoded hex values:

```typescript
// Brand colors
"novus-gold" // Primary brand color (#CAB06B)
"novus-gold-light" // Lighter gold variant (#E8DFC0)
"novus-gold-dark" // Darker gold variant (#A38E53)
"novus-cream" // Background color (#F9F8F4)
"novus-border" // Border color (#E5E2D9)

// Text colors
"text-primary" // Main text color (#333333)
"text-secondary" // Secondary text color (#666666)
"text-muted" // Muted text color (#999999)

// Semantic colors
"success" // Success indicators (#60A561)
"warning" // Warning indicators (#E89D4F)
"error" // Error indicators (#E5826D)
"info" // Information indicators (#5B9BD5)
```

### Spacing

Consistent spacing tokens are defined for use across the application:

```typescript
"xs" // 0.25rem (4px)
"sm" // 0.5rem (8px)
"md" // 1rem (16px)
"lg" // 1.5rem (24px)
"xl" // 2rem (32px)
"2xl" // 3rem (48px)
"3xl" // 4rem (64px)
"4xl" // 6rem (96px)
```

### Border Radius

Border radius values are standardized:

```typescript
"none" // 0px
"sm" // 0.25rem (4px)
"md" // 0.5rem (8px)
"lg" // 0.75rem (12px)
"xl" // 1rem (16px)
"full" // 9999px (fully rounded)
```

### Animations

Standard animations are provided for consistent motion:

```typescript
"fade-in" // Simple fade in (0.3s)
"fade-out" // Simple fade out (0.3s)
"slide-in-right" // Slide in from right (0.3s)
"slide-out-right" // Slide out to right (0.3s)
"slide-in-bottom" // Slide in from bottom (0.4s)
```

## Typography

### Heading Styles

Use these heading components consistently across the application:

```jsx
// In JSX components:
<h1 className="heading-1">Page Title</h1>
<h2 className="heading-2">Section Title</h2>
<h3 className="heading-3">Subsection Title</h3>
<h4 className="heading-4">Minor Heading</h4>

// Or use semantic HTML with pre-styled classes:
<h1>Page Title</h1> // Already styled via globals.css
<h2>Section Title</h2>
```

### Body Text

Standardized body text styles:

```jsx
<p className="body-text">Regular paragraph text for general content.</p>
<p className="body-text-lg">Larger paragraph text for emphasis or introductions.</p>
<span className="caption">Small caption text for labels or descriptions.</span>
<span className="section-title">UPPERCASE SECTION LABEL</span>
```

### Text Wrapping

Apply proper text wrapping to maintain readability:

```jsx
<h1 className="text-balance">This heading will wrap with balanced lines</h1>
<p className="text-pretty">Body content with improved text wrapping for readability</p>
<p className="break-words-wrap">Content that will properly break long words and URLs</p>
```

## Layout Components

### Container

The Container component provides consistent width constraints and padding:

```jsx
// Default container (max-width: 4xl)
<Container>Content goes here</Container>

// Narrow container (max-width: 2xl)
<Container size="narrow">Narrow content</Container>

// Wide container (max-width: 6xl)
<Container size="wide">Wide content</Container>

// Full width container
<Container size="full">Full width content</Container>

// Container without padding
<Container withPadding={false}>No padding</Container>
```

### Section

The Section component applies consistent vertical spacing and can include a title:

```jsx
// Default section
<Section>Content</Section>

// Section with heading
<Section title="Section Title" subtitle="Optional subtitle text">
  Content
</Section>

// Small section (less vertical spacing)
<Section size="sm">Content</Section>

// Large section (more vertical spacing)
<Section size="lg">Content</Section>

// Section with top divider
<Section withDivider>Content</Section>
```

### PageContainer

Use PageContainer for consistent page layouts:

```jsx
<PageContainer 
  title="Page Title" 
  description="Optional page description"
  intro="Featured introduction text in a highlight box"
>
  Page content
</PageContainer>
```

### Grid

The Grid component creates responsive grid layouts:

```jsx
// 2-column grid (default)
<Grid>
  <div>Item 1</div>
  <div>Item 2</div>
</Grid>

// 3-column grid
<Grid columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>

// 4-column grid with larger gaps
<Grid columns={4} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Grid>

// Animated grid (items fade in)
<Grid withAnimation>
  <div>Item 1</div>
  <div>Item 2</div>
</Grid>

// CardGrid with staggered animation
<CardGrid columns={3} withAnimation staggered>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</CardGrid>
```

### ContentBox

The ContentBox component provides consistent styling for content containers:

```jsx
// Default content box
<ContentBox>Content</ContentBox>

// Light variant with cream background
<ContentBox variant="light">Content</ContentBox>

// Highlight box with left border
<ContentBox variant="highlight">Content</ContentBox>

// Accent highlight box (gold border)
<ContentBox variant="highlight-accent">Content</ContentBox>

// Animated content box
<ContentBox withAnimation>Content</ContentBox>
```

## UI Components

### Stat Boxes

Use these components for displaying statistics:

```jsx
<div className="stat-box">
  <div className="stat-label">Occupancy Rate</div>
  <div className="stat-value">96%</div>
  <div className="stat-description">2% increase year-over-year</div>
</div>
```

### Buttons

Standardized button styles:

```jsx
<button className="btn-primary">Primary Action</button>
<button className="btn-outline">Secondary Action</button>
<a className="btn-link">Text Link</a>
```

### Tables

Responsive table components:

```jsx
<div className="table-responsive">
  <div className="mobile-scroll-indicator">Scroll horizontally to view more</div>
  <table className="table-default">
    <thead>
      <tr>
        <th className="table-header">Header 1</th>
        <th className="table-header">Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="table-cell">Data 1</td>
        <td className="table-cell">Data 2</td>
      </tr>
      <tr>
        <td className="table-cell-highlight">Highlighted data</td>
        <td className="table-cell">Regular data</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Lists

Styled bullet lists:

```jsx
<ul className="bullet-list">
  <li className="bullet-list-item">
    <span className="bullet-marker">•</span>
    <span>List item content</span>
  </li>
  <li className="bullet-list-item">
    <span className="bullet-marker">•</span>
    <span>Another list item</span>
  </li>
</ul>
```

## Usage Patterns

### Page Structure

Consistent page structure pattern:

```jsx
// Standard page layout
<PageContainer title="Page Title" description="Description">
  <Section title="First Section">
    <ContentBox>
      Content goes here
    </ContentBox>
  </Section>
  
  <Section title="Grid Section">
    <Grid columns={2}>
      <ContentBox>Item 1</ContentBox>
      <ContentBox>Item 2</ContentBox>
    </Grid>
  </Section>
</PageContainer>
```

### Statistic Displays

Pattern for displaying multiple statistics:

```jsx
<Grid columns={3} gap="md">
  <div className="stat-box">
    <div className="stat-label">Statistic 1</div>
    <div className="stat-value">Value 1</div>
  </div>
  <div className="stat-box">
    <div className="stat-label">Statistic 2</div>
    <div className="stat-value">Value 2</div>
  </div>
  <div className="stat-box">
    <div className="stat-label">Statistic 3</div>
    <div className="stat-value">Value 3</div>
  </div>
</Grid>
```

### Featured Content

Pattern for highlighting important content:

```jsx
<ContentBox variant="highlight-accent" withAnimation>
  <h3 className="heading-3">Featured Content</h3>
  <p className="body-text">Important information to highlight</p>
</ContentBox>
```

## Responsive Guidelines

- All components are designed to be responsive by default
- Use the Container component to maintain consistent widths
- Use the Grid component with appropriate column counts for different screen sizes
- Apply text-balance and text-pretty for optimal text wrapping on all devices
- Use table-responsive for tables that may overflow on mobile
- Apply line-clamp utilities where appropriate for mobile optimization