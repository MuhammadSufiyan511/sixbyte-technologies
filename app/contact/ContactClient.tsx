'use client'

import type { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import type { ContactForm } from '@/types'
import PageHero from '@/components/sections/PageHero'
import { siteConfig } from '@/lib/site'

const businessTypes = [
  'Restaurant / Food & Beverage',
  'Healthcare / Clinic',
  'Real Estate',
  'E-commerce / Retail',
  'Legal Services',
  'Health & Fitness',
  'Professional Services',
  'Technology / SaaS',
  'Education',
  'Other',
]

const initialForm: ContactForm = {
  name: '',
  email: '',
  phone: '',
  businessType: '',
  businessTypeOther: '',
  message: '',
}

export default function ContactClient() {
  const [form, setForm] = useState<ContactForm>(initialForm)
  const [errors, setErrors] = useState<Partial<ContactForm>>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const validate = (): boolean => {
    const nextErrors: Partial<ContactForm> = {}
    if (!form.name.trim()) nextErrors.name = 'Name is required'
    if (!form.email.trim()) nextErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.phone.trim()) nextErrors.phone = 'Phone is required'
    if (!form.businessType) nextErrors.businessType = 'Please select your business type'
    else if (form.businessType === 'Other' && !form.businessTypeOther?.trim())
      nextErrors.businessTypeOther = 'Please specify your business type'
    if (!form.message.trim()) nextErrors.message = 'Message is required'
    else if (form.message.trim().length < 20) nextErrors.message = 'Please add a little more detail'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setSubmitError('')
    setLoading(true)
    try {
      const resolvedBusinessType =
        form.businessType === 'Other' && form.businessTypeOther?.trim()
          ? `Other: ${form.businessTypeOther.trim()}`
          : form.businessType

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, businessType: resolvedBusinessType }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => null)
        throw new Error(data?.error || 'Something went wrong. Please try again.')
      }

      setSubmitted(true)
      setForm(initialForm)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Unable to send your message right now.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((current) => {
      const next = { ...current, [name]: value }
      // Clear the "Please specify" value when switching away from "Other"
      if (name === 'businessType' && value !== 'Other') {
        next.businessTypeOther = ''
      }
      return next
    })
    if (errors[name as keyof ContactForm]) {
      setErrors((current) => ({ ...current, [name]: '' }))
    }
    if (name === 'businessType' && value !== 'Other' && errors.businessTypeOther) {
      setErrors((current) => ({ ...current, businessTypeOther: '' }))
    }
  }

  return (
    <>
      <PageHero
        tag="Contact"
        title="Let&apos;s talk about how to make your digital presence feel more credible and more effective."
        subtitle="Share a little about your business and we&apos;ll help you figure out the next step with clarity and honesty."
        chips={['Consultation', 'Support', 'WhatsApp']}
        panelTitle="What to expect"
        panelBody="A short, helpful conversation about goals, scope, and the most practical next step for your business."
        panelStats={['Reply fast', 'No pressure', 'Clear next step']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Info Left */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <h2 className="text-xl font-bold text-navy dark:text-white">Reach out directly</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                If you prefer to speak first, use email or WhatsApp. We keep responses clear and timely during business
                hours.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { icon: Mail, label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: Phone, label: 'Phone', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneTel}` },
                { icon: MapPin, label: 'Location', value: siteConfig.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => {
                const cardInner = (
                  <>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-teal/10 text-teal dark:bg-teal/20 dark:text-teal-light">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</div>
                      <div className="mt-0.5 text-xs font-bold text-navy dark:text-white">{value}</div>
                    </div>
                  </>
                )
                return href ? (
                  <a key={label} href={href} className="surface-card flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-teal/30">
                    {cardInner}
                  </a>
                ) : (
                  <div key={label} className="surface-card flex items-center gap-4 rounded-xl p-4">
                    {cardInner}
                  </div>
                )
              })}
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>

            <div className="surface-card rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">What to expect</h3>
              <ul className="mt-3 space-y-2 text-xs text-slate-600 dark:text-slate-300">
                {[
                  'A quick review of your goals and priorities',
                  'A simple recommendation for the right next step',
                  'A clear sense of timeline and scope',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="surface-card rounded-xl p-8 text-center sm:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-300">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h2 className="mt-4 text-xl font-bold text-navy dark:text-white">Message sent</h2>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. We&apos;ll review your message and get back to you within 2 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">
                  Send another message
                </button>
              </div>
            ) : (
              <div className="surface-card rounded-xl p-6 sm:p-8">
                <h2 className="text-xl font-bold text-navy dark:text-white">Book a free consultation</h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                  Tell us a bit about the business, and we&apos;ll take it from there.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                        Full name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className={`w-full rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                          errors.name ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.name && <p className="mt-1 text-[11px] text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                        Email address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@business.com"
                        className={`w-full rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                          errors.email ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.email && <p className="mt-1 text-[11px] text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="0329 5147621"
                        className={`w-full rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                      {errors.phone && <p className="mt-1 text-[11px] text-red-500">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                        Business type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="businessType"
                        value={form.businessType}
                        onChange={handleChange}
                        className={`w-full rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                          errors.businessType ? 'border-red-500' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select your industry</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.businessType && <p className="mt-1 text-[11px] text-red-500">{errors.businessType}</p>}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {form.businessType === 'Other' && (
                      <motion.div
                        key="business-type-other"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-1">
                          <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                            Please specify <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="businessTypeOther"
                            value={form.businessTypeOther ?? ''}
                            onChange={handleChange}
                            placeholder="Tell us what type of business you run"
                            className={`w-full rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                              errors.businessTypeOther ? 'border-red-500' : 'border-slate-200'
                            }`}
                          />
                          {errors.businessTypeOther && (
                            <p className="mt-1 text-[11px] text-red-500">{errors.businessTypeOther}</p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div>
                    <label className="mb-1 block text-xs font-semibold text-navy dark:text-slate-200">
                      Tell us about your project <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your business, your goals, and what you would like us to build."
                      className={`w-full resize-none rounded border bg-white px-3.5 py-2.5 text-xs outline-none transition-colors focus:border-teal dark:border-slate-800 dark:bg-slate-900 dark:text-white ${
                        errors.message ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.message && <p className="mt-1 text-[11px] text-red-500">{errors.message}</p>}
                  </div>

                  <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
                    {loading ? 'Sending...' : 'Send message and book consultation'}
                    {!loading && <Send className="h-4 w-4" />}
                  </button>

                  {submitError && <p className="text-center text-xs text-red-500">{submitError}</p>}
                </form>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
