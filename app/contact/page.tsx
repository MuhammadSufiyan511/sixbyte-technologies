import type { Metadata } from 'next'
import { Clock, Globe, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/site'
import { pageMetadata, breadcrumbLd, faqLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import SectionHeader from '@/components/ui/SectionHeader'
import FaqAccordion from '@/components/ui/FaqAccordion'
import ContactClient from './ContactClient'

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us | SixByte Technologies',
  description:
    'Get in touch with SixByte Technologies. Book a free consultation by form, phone, email, or WhatsApp — we work with clients worldwide.',
  path: '/contact',
})

const contactFaqs = [
  {
    q: 'How do you work with clients internationally?',
    a: 'We work remotely with businesses worldwide. Our engineering process is built to run smoothly online, from the first consultation through to launch and support.',
  },
  {
    q: 'How quickly will you respond after I get in touch?',
    a: 'We aim to reply to new enquiries within about two business hours. If you message us on WhatsApp during business hours, you will usually hear back even sooner.',
  },
  {
    q: 'What languages do you work in?',
    a: "We work in English and Urdu, so you can share your project details in whichever you're more comfortable with.",
  },
  {
    q: 'Is the first consultation really free?',
    a: 'Yes. The initial consultation is a free, no-pressure conversation about your goals, your current website if you have one, and the most practical next step. There is no obligation to proceed.',
  },
]

const locationHighlights = [
  {
    icon: Globe,
    label: 'How we work',
    value: 'Remote-first',
    detail: 'Serving clients worldwide',
  },
  {
    icon: Clock,
    label: 'Response time',
    value: 'Within ~2 business hours',
    detail: 'Even faster on WhatsApp during business hours',
  },
]

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
          faqLd(contactFaqs),
        ]}
      />

      <ContactClient />

      {/* FAQs Section */}
      <section className="border-t border-slate-200 py-10 dark:border-slate-800 lg:py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Questions & Delivery"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about starting a project with SixByte Technologies."
            center
          />
          <FaqAccordion faqs={contactFaqs} className="mt-8" />
        </div>
      </section>
    </>
  )
}
