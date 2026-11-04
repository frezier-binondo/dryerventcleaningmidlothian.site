import { MetadataRoute } from 'next';
import { SITE_INFO, SERVICES_LIST, LOCATIONS_LIST, BLOG_POSTS } from '@/data/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_INFO.domain;
  const now = new Date();

  // Core Pages
  const coreRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // 9 Services Sub-pages
  const serviceRoutes = SERVICES_LIST.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // 5 Location Sub-pages
  const locationRoutes = LOCATIONS_LIST.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }));

  // Blog Sub-pages
  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  return [...coreRoutes, ...serviceRoutes, ...locationRoutes, ...blogRoutes];
}
