'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Globe,
  ShieldCheck,
  Zap,
  ChevronDown,
  Layers,
  Server,
} from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/animations/Motion'

export default function PricingPreviewSection() {
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD')
  const [openBreakdown, setOpenBreakdown] = useState<string | null>(null)

  const toggleBreakdown = (id: string) => {
    setOpenBreakdown((current) => (current === id ? null : id))
  }

  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50/80 py-12 dark:bg-slate-950/90 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Verified Project Pricing & Scope"
            title="Transparent, stage-by-stage investment for software & web systems"
            subtitle="Based on real SixByte client project proposals. Itemized delivery stages, exact specifications, and zero surprise fees."
            center
          />
        </Reveal>

        {/* Currency / Region Toggle Switch */}
        <Reveal>
          <div className="mt-8 flex flex-col items-center justify-center gap-3">
            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1.5 shadow-md dark:border-slate-800 dark:bg-slate-900">
              <button
                type="button"
                onClick={() => setCurrency('PKR')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  currency === 'PKR'
                    ? 'bg-navy text-white shadow-md dark:bg-teal dark:text-slate-950'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                Pakistan Market (PKR)
              </button>

              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-navy text-white shadow-md dark:bg-teal dark:text-slate-950'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                }`}
              >
                <Globe className="h-4 w-4" />
                International (USD $)
              </button>
            </div>
            <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
              * Showing itemized stage estimates based on active SixByte development proposals
            </p>
          </div>
        </Reveal>

        {/* Pricing Cards Grid (Stretched to equal height) */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice = currency === 'USD' ? plan.priceUSD : plan.pricePKR
            const isExpanded = openBreakdown === plan.id

            return (
              <div
                key={plan.id}
                className={`relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#0E1A2E] text-white shadow-2xl ring-2 ring-teal dark:bg-slate-900'
                    : 'surface-card border border-slate-200/90 shadow-md hover:border-teal/50 dark:border-slate-800'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center rounded-full bg-teal px-4 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                      Most Requested Proposal
                    </span>
                  </div>
                )}

                <div>
                  {/* Header Title */}
                  <div className="flex items-center justify-between">
                    <h3 className={`text-xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                      {plan.name}
                    </h3>
                  </div>

                  <p className={`mt-2 text-xs leading-relaxed ${plan.highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>

                  {/* Price & Timeline Box */}
                  <div className="my-6 border-y border-slate-200/20 py-4">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className={`text-2xl sm:text-3xl font-black tracking-tight shrink-0 ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                        {displayPrice}
                      </div>
                      {plan.timeline && (
                        <div className={`inline-flex items-center gap-1 text-[11px] font-semibold shrink-0 ${
                          plan.highlighted ? 'text-teal-light' : 'text-teal dark:text-teal-light'
                        }`}>
                          <Clock className="h-3.5 w-3.5 shrink-0" />
                          {plan.timeline}
                        </div>
                      )}
                    </div>
                    <div className={`mt-1 text-[11px] font-medium uppercase tracking-wider ${plan.highlighted ? 'text-slate-400' : 'text-slate-500 dark:text-slate-400'}`}>
                      {plan.period}
                    </div>
                  </div>

                  {/* Key Features List */}
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${plan.highlighted ? 'text-slate-300' : 'text-slate-800 dark:text-slate-200'}`}>
                    Included Scope & Deliverables:
                  </h4>

                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <CheckCircle
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.highlighted ? 'text-teal-light' : 'text-teal'
                          }`}
                        />
                        <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-700 dark:text-slate-300'}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Animated Stage-by-Stage Cost Breakdown Accordion */}
                  {plan.breakdown && plan.breakdown.length > 0 && (
                    <div className="mt-6 border-t border-slate-200/20 pt-4">
                      <button
                        type="button"
                        onClick={() => toggleBreakdown(plan.id)}
                        className={`group flex w-full items-center justify-between text-left text-xs font-bold transition-colors ${
                          plan.highlighted
                            ? 'text-teal-light hover:text-white'
                            : 'text-teal hover:text-navy dark:text-teal-light dark:hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <Layers className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
                          View Stage-by-Stage Cost Breakdown
                        </span>
                        <ChevronDown className={`h-4 w-4 transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div
                              className={`mt-3 space-y-2 rounded-xl p-3.5 text-xs border transition-colors ${
                                plan.highlighted
                                  ? 'bg-slate-900/90 border-slate-700/60 shadow-inner'
                                  : 'bg-slate-100/90 border-slate-200/90 text-slate-800 shadow-inner dark:bg-slate-900/90 dark:border-slate-800 dark:text-slate-200'
                              }`}
                            >
                              {plan.breakdown.map((item, idx) => {
                                const cost = currency === 'USD' ? item.costUSD : item.costPKR
                                return (
                                  <div
                                    key={idx}
                                    className={`flex items-center justify-between border-b pb-2 pt-1 last:border-0 last:pb-0 ${
                                      plan.highlighted ? 'border-slate-800' : 'border-slate-200/70 dark:border-slate-800'
                                    }`}
                                  >
                                    <span className={plan.highlighted ? 'text-slate-200 font-medium' : 'text-slate-700 dark:text-slate-300 font-medium'}>
                                      {item.stage}
                                    </span>
                                    <span className={`font-bold shrink-0 ml-2 ${plan.highlighted ? 'text-teal-light' : 'text-teal dark:text-teal-light'}`}>
                                      {cost}
                                    </span>
                                  </div>
                                )
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>

                {/* Action CTA */}
                <div className="mt-8 pt-4 border-t border-slate-200/10">
                  <Link
                    href={`/contact?plan=${plan.id}&currency=${currency}`}
                    className={`w-full justify-center ${
                      plan.highlighted
                        ? 'btn-primary bg-teal hover:bg-teal-light text-white font-bold py-3 text-sm'
                        : 'btn-primary py-3 text-sm'
                    }`}
                  >
                    {plan.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* Proposal Standards & Deliverable Guarantees */}
        <Reveal>
          <div className="mt-14 rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
            <div className="flex items-center gap-3 border-b border-slate-200/60 pb-4 dark:border-slate-800">
              <Server className="h-5 w-5 text-teal" />
              <h3 className="text-base font-bold text-navy dark:text-white">SixByte Proposal Standard & Project Guarantees</h3>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3 text-left">
              <div className="flex flex-col gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-navy dark:text-white">100% Source Code & Database Ownership</h4>
                <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  Full transfer of repositories, database access, admin credentials, and documentation upon project handover.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Zap className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-navy dark:text-white">Milestone Stage Payments</h4>
                <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  Payments are structured by delivery stages (UI/UX, Backend Engine, Admin Panel, Deployment & Launch).
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                  <Globe className="h-5 w-5" />
                </div>
                <h4 className="text-sm font-bold text-navy dark:text-white">Local & International Payment Gateway Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed dark:text-slate-400">
                  Supporting EasyPaisa merchant API, Bank Transfer, Pay at Venue cash flows, Stripe, Wise, & Wire Transfers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
