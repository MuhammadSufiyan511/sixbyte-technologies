'use client'

import Link from 'next/link'
import { ArrowRight, Blocks, Brain, Code2, Globe, Layers3, ShoppingBag } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { services } from '@/lib/data'
import { homepageServiceIds, servicePreviewMeta } from '@/lib/service-showcase'

const serviceIcons = {
  'web-dev': Code2,
  wordpress: Globe,
  shopify: ShoppingBag,
  saas: Layers3,
  'ai-solutions': Brain,
  'custom-software': Blocks,
} as const

export default function ServicesHighlight() {
  const [activeId, setActiveId] = useState<string>(homepageServiceIds[0])
  const prefersReducedMotion = useReducedMotion() ?? false

  const featuredServices = useMemo(
    () => services.filter((service) => homepageServiceIds.includes(service.id as (typeof homepageServiceIds)[number])),
    [],
  )

  const activeService = featuredServices.find((service) => service.id === activeId) ?? featuredServices[0]
  const preview = servicePreviewMeta[activeService.id] ?? servicePreviewMeta['web-dev']
  const ActiveIcon = serviceIcons[activeService.id as keyof typeof serviceIcons] ?? Code2

  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-teal">CORE SERVICES</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-navy dark:text-white sm:text-3xl">
              Custom Web Development, Shopify & Software Solutions.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              From Next.js web development to high-converting Shopify e-commerce stores and custom business software, we engineer digital platforms that scale.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -14 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: [0.22, 1, 0.36, 1] }}
                  className="relative overflow-hidden rounded-t-[2rem] border-b border-slate-200 bg-slate-950 px-6 py-6 text-white dark:border-slate-800 sm:px-8"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-teal" />
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/60">
                        {preview.tagline}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                        {activeService.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">{preview.summary}</p>
                    </div>
                    <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                      {activeService.id}
                    </span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      { label: 'Focus', value: preview.focus },
                      { label: 'Outcome', value: preview.outcome },
                      { label: 'Format', value: preview.format },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-white/50">{item.label}</p>
                        <p className="mt-2 text-sm font-medium leading-snug text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-3 p-5 md:grid-cols-2">
                {featuredServices.map((service, index) => {
                  const ServiceIcon = serviceIcons[service.id as keyof typeof serviceIcons] ?? Code2
                  const active = activeService.id === service.id

                  return (
                    <motion.div
                      key={service.id}
                      onMouseEnter={() => setActiveId(service.id)}
                      onFocus={() => setActiveId(service.id)}
                      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
                      whileTap={prefersReducedMotion ? undefined : { scale: 0.99 }}
                    >
                      <Link
                        href={`/services/${service.id}`}
                        className={`group block rounded-2xl border px-4 py-4 text-left transition-colors ${
                          active
                            ? 'border-teal/40 bg-teal/5'
                            : 'border-slate-200 bg-slate-50/70 hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${
                              active
                                ? 'border-teal/20 bg-teal text-white'
                                : 'border-slate-200 bg-white text-teal dark:border-slate-800 dark:bg-slate-950 dark:text-teal-light'
                            }`}
                          >
                            <ServiceIcon className="h-4 w-4" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
                                0{index + 1}
                              </span>
                              <ArrowRight
                                className={`h-4 w-4 shrink-0 transition-transform ${
                                  active
                                    ? 'translate-x-1 text-teal'
                                    : 'text-slate-300 group-hover:translate-x-1 group-hover:text-teal dark:text-slate-600'
                                }`}
                              />
                            </div>
                            <h4
                              className={`mt-2 text-sm font-semibold tracking-tight ${
                                active ? 'text-navy dark:text-white' : 'text-slate-800 dark:text-slate-100'
                              }`}
                            >
                              {service.title}
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              <div className="flex flex-wrap items-center justify-end gap-3 border-t border-slate-200 px-5 py-4 text-sm dark:border-slate-800 sm:px-6">
                <Link href="/services" className="btn-outline-navy text-xs">
                  View all services <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
