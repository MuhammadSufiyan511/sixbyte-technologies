import type { MetadataRoute } from 'next'
import { siteUrl } from '@/lib/site'
import { services, industries, blogPosts, projects } from '@/lib/data'

/**
 * Dynamic sitemap covering every canonical, indexable route:
 * static marketing pages, the 6 service pillar pages, the 6 industry pages,
 * every blog post, and every portfolio case study. Private/functional routes
 * (e.g. /api/*) are intentionally excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const url = (path: string) => `${siteUrl.replace(/\/$/, '')}${path}`

  const staticPages: MetadataRoute.Sitemap = [
    { url: url('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: url('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: url('/portfolio'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/industries'), lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: url('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: url('/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: url('/privacy'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: url('/terms'), lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: url(`/services/${service.id}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: url(`/industries/${industry.id}`),
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.id}`),
    lastModified: post.dateISO ? new Date(post.dateISO) : now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  const portfolioPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: url(`/portfolio/${project.id}`),
    lastModified: now,
    changeFrequency: 'yearly',
    priority: 0.6,
  }))

  return [...staticPages, ...servicePages, ...industryPages, ...blogPages, ...portfolioPages]
}
