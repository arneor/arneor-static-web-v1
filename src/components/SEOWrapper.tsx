import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object;
  articleSchema?: boolean;
  localBusinessSchema?: boolean;
  breadcrumbs?: Array<{ name: string; url: string }>;
  lastModified?: string;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "/og-image.png",
  noIndex = false,
  structuredData,
  articleSchema = false,
  localBusinessSchema = false,
  breadcrumbs,
  lastModified,
}) => {
  const baseUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.arneor.com";
  const fullUrl = `${baseUrl}${canonicalUrl}`;
  const ogImageUrl = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage}`;

  // Generate breadcrumb structured data
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${baseUrl}${crumb.url}`,
          })),
        }
      : null;

  // Enhanced webpage schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: fullUrl,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Arneor",
      url: baseUrl,
    },
    about: {
      "@type": "Organization",
      name: "Arneor",
    },
    publisher: {
      "@type": "Organization",
      name: "Arneor",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/arneor-logo.png`,
      },
    },
    ...(lastModified && { dateModified: lastModified }),
    keywords: keywords.split(", "),
  };

  // Local business schema for location-based pages
  const localSchema = localBusinessSchema
    ? {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Arneor",
        description:
          "Leading product development, engineering and design company in India",
        url: baseUrl,
        telephone: "+91-9744880311",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kerala",
          addressRegion: "Kerala",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.8505,
          longitude: 76.2711,
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        serviceType: [
          "Product Development",
          "Engineering Solutions",
          "Design Services",
          "Flutter Development",
          "SaaS Development",
        ],
      }
    : null;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={fullUrl} />
        <meta name="author" content="Arneor" />

        {/* Enhanced Meta Tags */}
        <meta name="copyright" content="© 2025 Arneor. All rights reserved." />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        {lastModified && <meta name="last-modified" content={lastModified} />}

        {/* Robots */}
        <meta
          name="robots"
          content={
            noIndex
              ? "noindex, nofollow"
              : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          }
        />
        <meta
          name="googlebot"
          content={noIndex ? "noindex, nofollow" : "index, follow"}
        />
        <meta
          name="bingbot"
          content={noIndex ? "noindex, nofollow" : "index, follow"}
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:alt" content={`${title} - Arneor`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Arneor" />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="your-facebook-app-id" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={fullUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImageUrl} />
        <meta name="twitter:image:alt" content={`${title} - Arneor`} />
        <meta name="twitter:creator" content="@arneor" />
        <meta name="twitter:site" content="@arneor" />

        {/* LinkedIn */}
        <meta property="linkedin:owner" content="arneor" />

        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.country" content="India" />
        <meta name="geo.placename" content="Kerala, India" />
        <meta name="language" content="English" />
        <meta name="geo.position" content="10.8505;76.2711" />
        <meta name="ICBM" content="10.8505, 76.2711" />

        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Arneor" />

        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Webpage Schema - Always include */}
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>

        {/* Breadcrumb Schema */}
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}

        {/* Local Business Schema */}
        {localSchema && (
          <script type="application/ld+json">
            {JSON.stringify(localSchema)}
          </script>
        )}

        {/* Custom Structured Data */}
        {structuredData && (
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
