import type { Metadata } from 'next'
import type { ComponentType } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  HeartPulse,
  Landmark,
  Scale,
  ShoppingBag,
  Target,
  UtensilsCrossed,
} from 'lucide-react'
import { industries, services } from '@/lib/data'
import { industryContent } from '@/lib/industries-content'
import { pageMetadata, breadcrumbLd, faqLd, serviceLd } from '@/lib/seo'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import FaqAccordion from '@/components/ui/FaqAccordion'
import JsonLd from '@/components/JsonLd'

interface Props {
  params: { slug: string }
}

const industryIcons: Record<string, ComponentType<{ className?: string }>> = {
  restaurant: UtensilsCrossed,
  healthcare: HeartPulse,
  'real-estate': Landmark,
  legal: Scale,
  fitness: CarFront,
  ecommerce: ShoppingBag,
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.id }))
}

export function generateMetadata({ params }: Props): Metadata {
  const content = industryContent[params.slug]
  if (!content) return { title: 'Industry Not Found' }
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription,
    path: `/industries/${content.slug}`,
  })
}

export default function IndustryDetailPage({ params }: Props) {
  const industry = industries.find((i) => i.id === params.slug)
  const content = industryContent[params.slug]
  if (!industry || !content) notFound()

  const Icon = industryIcons[industry.id] ?? ShoppingBag
  const relatedServices = content.relatedServices
    .map((id) => services.find((s) => s.id === id))
    .filter((s): s is (typeof services)[number] => Boolean(s))

  return (
    <>
      <JsonLd
        data={[
          serviceLd({
            name: content.metaTitle,
            description: content.summary,
            path: `/industries/${content.slug}`,
            serviceType: 'Web development',
          }),
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Industries', path: '/industries' },
            { name: industry.name, path: `/industries/${content.slug}` },
          ]),
          faqLd(content.faqs),
        ]}
      />

      <PageHero
        tag="Industry"
        title={content.heroTitle}
        subtitle={content.heroSubtitle}
        chips={['Tailored', 'Trust', 'Conversion']}
        panelTitle={industry.name}
        panelBody={content.summary}
        panelStats={['Fit', 'Trust', 'Grow']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 text-xs text-slate-500 dark:text-slate-400">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li><Link href="/" className="hover:text-teal">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/industries" className="hover:text-teal">Industries</Link></li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-navy dark:text-white">{industry.name}</li>
            </ol>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="space-y-10 lg:col-span-8">
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-slate-200 bg-slate-50 text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-teal-light">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy dark:text-white">{industry.name}</h2>
                </div>
                <div className="mt-5 space-y-4">
                  {content.overview.map((para) => (
                    <p key={para} className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Common challenges</h3>
                <ul className="mt-4 space-y-2">
                  {content.challenges.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <Target className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions (from data) */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Common solutions</h3>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {industry.solutions.map((solution) => (
                    <li key={solution} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">What we aim for</h3>
                <ul className="mt-4 space-y-2">
                  {content.outcomes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Frequently asked questions</h3>
                <FaqAccordion faqs={content.faqs} headingLevel={4} className="mt-4" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6 lg:col-span-4 lg:sticky lg:top-28">
              <div className="surface-card rounded-xl p-6">
                <h3 className="text-sm font-bold text-navy dark:text-white">Work with us</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Tell us about your {industry.name.toLowerCase()} business and we&apos;ll suggest a practical starting point.
                </p>
                <Link href="/contact" className="btn-primary mt-4 w-full justify-center">
                  Book a consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {relatedServices.length > 0 && (
                <div className="surface-card rounded-xl p-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Services that help</h3>
                  <ul className="mt-3 space-y-2">
                    {relatedServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          href={`/services/${s.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal transition-colors hover:text-teal-dark dark:text-teal-light"
                        >
                          <ArrowRight className="h-3.5 w-3.5" /> {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="surface-card rounded-xl p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Explore</h3>
                <ul className="mt-3 space-y-2 text-xs">
                  <li>
                    <Link href="/portfolio" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> See our work
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> All industries
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 font-semibold text-navy hover:text-teal dark:text-slate-200 dark:hover:text-teal-light">
                      <ArrowRight className="h-3.5 w-3.5 text-teal" /> Get in touch
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready for a digital platform built for ${industry.name.toLowerCase()}?`}
        subtitle="Book a free consultation and we&apos;ll shape an approach that fits your business."
      />
    </>
  )
}
