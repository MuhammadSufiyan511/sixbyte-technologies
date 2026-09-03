'use client'

import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { pricingPlans } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import { Reveal } from '@/components/animations/Motion'

export default function PricingPreviewSection() {
  return (
    <section id="pricing" className="scroll-mt-24 bg-slate-50/70 py-10 dark:bg-slate-950/80 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Transparent Investment"
            title="Clear, predictable pricing for custom web development & digital systems."
            subtitle="No hidden fees or surprise invoices. Choose a plan tailored to your stage of growth."
            center
          />
        </Reveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all ${
                plan.highlighted
                  ? 'bg-[#0E1A2E] text-white shadow-xl ring-2 ring-teal dark:bg-slate-900'
                  : 'surface-card'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-teal px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-xl font-bold ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-xs leading-relaxed ${plan.highlighted ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                  {plan.description}
                </p>

                <div className="my-6 border-y border-slate-200/20 py-4">
                  <div className={`text-3xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-navy dark:text-white'}`}>
                    {plan.price}
                  </div>
                  <div className={`mt-0.5 text-[11px] ${plan.highlighted ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.period}
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs">
                      <CheckCircle
                        className={`h-4 w-4 shrink-0 ${
                          plan.highlighted ? 'text-teal-light' : 'text-teal'
                        }`}
                      />
                      <span className={plan.highlighted ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300'}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href="/contact"
                  className={`w-full justify-center ${
                    plan.highlighted
                      ? 'btn-primary bg-teal hover:bg-teal-light text-white'
                      : 'btn-primary'
                  }`}
                >
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
