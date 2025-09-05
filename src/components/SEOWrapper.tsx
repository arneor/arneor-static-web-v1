import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  keywords: string;
  canonicalUrl: string;
  ogImage?: string;
  noIndex?: boolean;
  structuredData?: object;
}

const SEOWrapper: React.FC<SEOWrapperProps> = ({
  children,
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'src/assets/arneor-logo.png',
  noIndex = false,
  structuredData,
}) => {
  const fullUrl = `${window.location.origin}${canonicalUrl}`;

  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        <meta
          name='description'
          content={description}
        />
        <meta
          name='keywords'
          content={keywords}
        />
        <link
          rel='canonical'
          href={fullUrl}
        />
        <meta
          name='author'
          content='Arneor'
        />

        {/* Robots */}
        <meta
          name='robots'
          content={noIndex ? 'noindex, nofollow' : 'index, follow'}
        />

        {/* Open Graph / Facebook */}
        <meta
          property='og:type'
          content='website'
        />
        <meta
          property='og:url'
          content={fullUrl}
        />
        <meta
          property='og:title'
          content={title}
        />
        <meta
          property='og:description'
          content={description}
        />
        <meta
          property='og:image'
          content={`${window.location.origin}${ogImage}`}
        />
        <meta
          property='og:image:width'
          content='1200'
        />
        <meta
          property='og:image:height'
          content='630'
        />
        <meta
          property='og:site_name'
          content='Arneor'
        />
        <meta
          property='og:locale'
          content='en_US'
        />

        {/* Twitter Card */}
        <meta
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          name='twitter:url'
          content={fullUrl}
        />
        <meta
          name='twitter:title'
          content={title}
        />
        <meta
          name='twitter:description'
          content={description}
        />
        <meta
          name='twitter:image'
          content={`${window.location.origin}${ogImage}`}
        />
        <meta
          name='twitter:creator'
          content='@arneor'
        />
        <meta
          name='twitter:site'
          content='@arneor'
        />

        {/* Additional SEO Meta Tags */}
        <meta
          name='geo.region'
          content='IN'
        />
        <meta
          name='geo.country'
          content='India'
        />
        <meta
          name='language'
          content='English'
        />

        {/* Structured Data */}
        {structuredData && (
          <script type='application/ld+json'>
            {JSON.stringify(structuredData)}
          </script>
        )}
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
