import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import TrustStrip from '@/components/sections/TrustStrip'
import TechStackTicker from '@/components/sections/TechStackTicker'
import KineticTypographySection from '@/components/sections/KineticTypographySection'
import ServicesHighlight from '@/components/sections/ServicesHighlight'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import PortfolioPreview from '@/components/sections/PortfolioPreview'
import PricingPreviewSection from '@/components/sections/PricingPreviewSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Custom Web Development, Software & Digital Solutions for Growing Businesses',
  description:
    'SixByte Technologies delivers custom software, mobile apps, e-commerce platforms, and tailored digital solutions that drive real growth for businesses worldwide.',
  openGraph: {
    title: 'SixByte Technologies | Custom Web Development & Digital Solutions',
    description:
      'SixByte Technologies delivers custom software, mobile apps, e-commerce platforms, and tailored digital solutions that drive real growth for businesses worldwide.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <TechStackTicker />
      <KineticTypographySection />
      <ServicesHighlight />
      <WhyChooseUs />
      <ProcessSection />
      <PortfolioPreview />
      <PricingPreviewSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
