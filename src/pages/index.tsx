import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout/Layout";
import IntroSection from "@/components/Home/IntroSection";
import TableOfContents from "@/components/Home/TableOfContents";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Novus – Lease-Up Strategy & Competitive Blueprint</title>
        <meta name="description" content="A comprehensive lease-up strategy and competitive blueprint for The Novus Apartments" />
        <link rel="icon" href="/novus-favicon.webp" type="image/webp" />
        <link rel="alternate icon" href="/novus-favicon.webp" />
        
        {/* Open Graph meta tags specifically for home page (will override defaults in _document.tsx) */}
        <meta property="og:title" content="THE NOVUS | THE BLUEPRINT" />
        <meta property="og:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta property="og:image" content="/novus-ogimage.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Novus with 'THE BLUEPRINT' spray painted in gold over a dark background" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:image" content="/novus-ogimage.webp" />
      </Head>
      
      <Layout>
        <IntroSection />
        <TableOfContents />
      </Layout>
    </>
  );
}