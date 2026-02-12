import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function SEO({ 
  title = "Hudson & Co Marketing | Growth Execution for Founder-Led Businesses",
  description = "Senior-level growth execution and C-level GTM strategy for service-based businesses and funded startups. Expert paid ads, lead generation, and revenue operations that drive measurable results.",
  path = "/",
  image = "/og-image.jpg"
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update or create meta tags
    const updateMetaTag = (property: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${property}"]`) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, property);
        document.head.appendChild(meta);
      }
      
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', `https://hudsoncomarketing.com${path}`, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', `https://hudsoncomarketing.com${image}`, true);
    updateMetaTag('og:site_name', 'Hudson & Co Marketing', true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', `https://hudsoncomarketing.com${path}`);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', `https://hudsoncomarketing.com${image}`);
    
    // Additional SEO
    updateMetaTag('keywords', 'growth marketing, paid ads, lead generation, GTM strategy, revenue operations, B2B marketing, SaaS marketing, founder-led businesses, marketing agency');
    updateMetaTag('author', 'Hudson & Co Marketing');
    
    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `https://hudsoncomarketing.com${path}`;
    
  }, [title, description, path, image]);

  return null;
}
