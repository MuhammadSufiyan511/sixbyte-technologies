import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/layout/BackToTop'
import CustomCursor from '@/components/layout/CustomCursor'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { siteConfig } from '@/lib/site'
import { organizationLd, websiteLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: `${siteConfig.name} | %s`,
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description:
      'We build software systems, mobile apps, and digital platforms that help businesses win trust, convert better, and grow with clarity.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: 'Custom software, mobile apps, and digital systems for growing businesses.',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon-192.png',
  },
  verification: {
    google: 'fESq4uWPlZF3VaYWkdiB3K0fVKi7Fn6yA1BJEpxHhZs',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <head>
        {/* Favicon & Google Search Result Brand Logo (Google requires multiples of 48px square: 48x48, 96x96, 192x192) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/favicon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Blocking script — runs before first paint to prevent FOUC on dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <JsonLd data={[organizationLd(), websiteLd()]} />
      </head>
      <body className="min-h-screen overflow-x-hidden bg-slate-50 text-navy antialiased dark:bg-slate-950 dark:text-slate-100">
        <CustomCursor />
        <Navbar />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  )
}
