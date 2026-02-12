import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Organization Schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Hudson & Co Marketing",
      "alternateName": "Hudson and Co Marketing",
      "url": "https://hudsoncomarketing.com",
      "logo": "https://hudsoncomarketing.com/logo.png",
      "description": "Growth execution and GTM strategy for founder-led businesses. Expert paid ads, lead generation, and revenue operations.",
      "foundingDate": "2020",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "sameAs": [],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sales",
        "url": "https://hudsoncomarketing.com/booking"
      }
    };

    // Local Business Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Hudson & Co Marketing",
      "image": "https://hudsoncomarketing.com/logo.png",
      "url": "https://hudsoncomarketing.com",
      "telephone": "",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      },
      "description": "Senior-level growth execution and C-level GTM strategy for service-based businesses and funded startups.",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "47"
      }
    };

    // Service Schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Marketing and Advertising Services",
      "provider": {
        "@type": "Organization",
        "name": "Hudson & Co Marketing"
      },
      "areaServed": "US",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marketing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Paid Advertising Management",
              "description": "Expert paid ads management across Google, Meta, LinkedIn, and YouTube"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Lead Generation",
              "description": "High-intent lead generation systems for B2B and service businesses"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Revenue Operations",
              "description": "CRM setup, pipeline optimization, and growth infrastructure"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "GTM Strategy",
              "description": "Go-to-market strategy and positioning for funded startups"
            }
          }
        ]
      }
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Hudson & Co Marketing",
      "url": "https://hudsoncomarketing.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://hudsoncomarketing.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Insert or update script tags
    const insertSchema = (id: string, schema: any) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    };

    insertSchema('schema-organization', organizationSchema);
    insertSchema('schema-local-business', localBusinessSchema);
    insertSchema('schema-service', serviceSchema);
    insertSchema('schema-website', websiteSchema);

  }, []);

  return null;
}
