import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-STP7762E09"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-STP7762E09');
          `
        }} />
        {/* Favicon */}
        <link rel="icon" href="/novus-favicon.webp" type="image/webp" />
        <link rel="alternate icon" href="/novus-favicon.webp" />
        
        {/* Softgen AI monitoring script */}
        <script 
          src="https://cdn.softgen.ai/script.js" 
          async 
          data-softgen-monitoring="true"
        />
        
        {/* Default Open Graph meta tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="THE NOVUS | THE BLUEPRINT" />
        <meta property="og:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta property="og:image" content="/novus-ogimage.webp" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="The Novus with 'THE BLUEPRINT' spray painted in gold over a dark background" />
        {/* meta property og:url will be set automatically based on the deployment URL */}
        <meta property="og:site_name" content="THE NOVUS" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE NOVUS | THE BLUEPRINT" />
        <meta name="twitter:description" content="LEASE-UP STRATEGY BLUEPRINT" />
        <meta name="twitter:image" content="/novus-ogimage.webp" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}