import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site'

/**
 * Web App Manifest — improves installability, share targets, and how the brand
 * appears when the site is saved to a home screen. Theme colour is brand navy.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0E1A2E',
    theme_color: '#0E1A2E',
    icons: [
      {
        src: siteConfig.logo,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
