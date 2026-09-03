/**
 * Structured-data (JSON-LD) builders and a shared page-metadata helper.
 *
 * Everything here is derived from real, verifiable site data (lib/site.ts and
 * lib/data.ts). We intentionally DO NOT emit Review, AggregateRating, award,
 * or headcount schema — those facts are not independently verified, and
 * fabricating them would mislead both users and AI answer engines.
 */
import type { Metadata } from 'next'
import { siteConfig, siteUrl } from '@/lib/site'

/** Join a root-relative path onto the site origin, collapsing duplicate slashes. */
export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${siteUrl.replace(/\/$/, '')}/${path.replace(/^\//, '')}`.replace(/\/$/, '') || siteUrl
}

/** Stable @id anchors so nodes can reference each other across the graph. */
export const ORG_ID = `${siteUrl}/#organization`
export const WEBSITE_ID = `${siteUrl}/#website`

/**
 * Organization / LocalBusiness node.
 *
 * Typed as ProfessionalService (a LocalBusiness subtype) because SixByte is a
 * service business serving clients remotely and internationally.
 * priceRange, foundingDate, numberOfEmployees and aggregateRating are
 * deliberately omitted until verified.
 */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': ORG_ID,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl(siteConfig.logo),
    },
    image: absoluteUrl(siteConfig.ogImage),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phoneTel,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `Sector ${siteConfig.address.sector}`,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.countryCode,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    hasMap: siteConfig.mapLink,
    areaServed: [
      { '@type': 'Country', name: 'Pakistan' },
      { '@type': 'Place', name: 'Worldwide (remote)' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: siteConfig.email,
      telephone: siteConfig.phoneTel,
      availableLanguage: ['en', 'ur'],
    },
    knowsAbout: [
      'Web development',
      'Website design',
      'E-commerce development',
      'Custom web applications',
      'SEO and digital marketing',
      'WhatsApp and lead integration',
    ],
    sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram, siteConfig.social.x, siteConfig.social.facebook],
  }
}

/** WebSite node. No SearchAction — the site has no on-site search endpoint to honestly declare. */
export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en',
    publisher: { '@id': ORG_ID },
  }
}

/** BreadcrumbList from an ordered list of {name, path}. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

/** Service node, linked back to the organization as its provider. */
export function serviceLd(input: {
  name: string
  description: string
  path: string
  serviceType?: string
  areaServed?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: absoluteUrl(input.path),
    provider: { '@id': ORG_ID },
    areaServed: input.areaServed ?? 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: absoluteUrl('/contact'),
    },
  }
}

/** FAQPage node built from genuine question/answer pairs shown on the page. */
export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }
}

/** BlogPosting node. Author is the organization (no fabricated individual bylines). */
export function articleLd(input: {
  title: string
  description: string
  path: string
  image: string
  dateISO?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: input.title,
    description: input.description,
    image: /^https?:\/\//i.test(input.image) ? input.image : absoluteUrl(input.image),
    ...(input.dateISO ? { datePublished: input.dateISO, dateModified: input.dateISO } : {}),
    author: { '@id': ORG_ID, '@type': 'Organization', name: siteConfig.name },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
    inLanguage: 'en',
  }
}

/**
 * Shared page-metadata builder so every route emits a canonical URL plus
 * consistent Open Graph / Twitter tags. Title is returned as a plain string so
 * the root layout's title template ("SixByte Technologies | %s") still applies.
 */
export function pageMetadata(input: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const image = input.image ?? siteConfig.ogImage
  const url = absoluteUrl(input.path)
  const ogTitle = `${input.title} | ${siteConfig.name}`
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    openGraph: {
      type: input.type ?? 'website',
      url,
      siteName: siteConfig.name,
      title: ogTitle,
      description: input.description,
      images: [{ url: image, width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: input.description,
      images: [image],
    },
  }
}
