/**
 * Central site configuration — single source of truth for brand, contact, and SEO.
 *
 * ⚠️ PLACEHOLDER DOMAIN — there is no production domain yet.
 * `siteUrl` below uses the RFC-2606 reserved `.example.com` space so it is
 * unmistakably a placeholder. When the real domain goes live, change this ONE
 * value (e.g. 'https://www.sixbyte.tech') and canonical URLs, Open Graph tags,
 * Twitter cards, sitemap, and JSON-LD structured data update site-wide.
 */
export const siteUrl = 'https://sixbyte.example.com'

export const siteConfig = {
  name: 'SixByte Technologies',
  shortName: 'SixByte',
  url: siteUrl,
  tagline: 'Digital Solutions for Growing Businesses',
  description:
    'SixByte Technologies designs and builds custom software, mobile apps, e-commerce platforms, and digital systems that help businesses scale with confidence.',

  // Contact details (used across footer, contact page, CTAs, and structured data)
  email: 'contact.sixbyte@gmail.com',
  phoneDisplay: '0329 5147621',
  phoneTel: '+923295147621',
  whatsappNumber: '923295147621',
  whatsappUrl: 'https://wa.me/923295147621',
  location: 'Global & Remote Delivery',

  // Structured location — single source of truth for the address shown on the site
  address: {
    sector: 'Worldwide',
    locality: 'Global',
    region: 'Worldwide',
    country: 'Remote Delivery',
    countryCode: 'PK',
  },
  geo: { latitude: 33.6693, longitude: 73.0751 },
  mapEmbedUrl: '',
  mapLink: '',

  // Assets
  logo: '/assets/SixByte_standalone-removebg-preview.webp',
  ogImage: '/assets/hero_ecosystem.png',

  // Social profiles
  social: {
    linkedin: 'https://www.linkedin.com/company/sixbyte-technologies/',
    instagram: 'https://www.instagram.com/sixbyte_technologies?igsi=OHgwc3Fid2toMXkx',
    x: 'https://x.com/sixbytetech',
    facebook: 'https://www.facebook.com/share/19V3tqCFKm/',
  },

  keywords: [
    'web development',
    'website design',
    'digital agency',
    'software house',
    'e-commerce development',
    'business websites',
    'SEO',
    'Next.js development',
    'SixByte Technologies',
    'custom web design',
  ],
} as const

export type SiteConfig = typeof siteConfig
