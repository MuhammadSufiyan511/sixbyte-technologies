'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedTagHeader from '@/components/ui/AnimatedTagHeader'
import SquaresBackground from '@/components/ui/SquaresBackground'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'

const highlights = [
  'Strategy-led structure',
  'Clear messaging',
  'Built for trust and conversion',
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 pt-28 pb-16 dark:bg-slate-950/80 lg:pt-36 lg:pb-24">
      {/* ReactBits Animated Background Layers */}
      <SquaresBackground speed={0.3} squareSize={48} direction="diagonal" />
      <ParticlesBackground quantity={35} color="15, 118, 110" />

      {/* Ambient Background Mesh & Subtle Animated Elements */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0e1a2e0a_1px,transparent_1px),linear-gradient(to_bottom,#0e1a2e0a_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />

      {/* Floating Animated Gradient Orbs */}
      <motion.div
        className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-teal/10 blur-3xl dark:bg-teal/20"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-20 top-32 h-96 w-96 rounded-full bg-navy/10 blur-3xl dark:bg-sky-950/30"
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Content Left */}
          <div className="lg:col-span-7">
            <Stagger>
              <StaggerItem>
                <div className="mb-4">
                  <AnimatedTagHeader tag="DIGITAL AGENCY & SOFTWARE HOUSE" />
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-5xl dark:text-white">
                  We build{' '}
                  <span className="relative inline-block text-teal dark:text-teal-light">
                    digital solutions
                    <svg
                      className="absolute -bottom-2.5 left-0 h-3.5 w-full text-teal dark:text-teal-light overflow-visible"
                      viewBox="0 0 100 12"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <motion.path
                        d="M 1 6 Q 50 1, 99 7"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </svg>
                  </span>{' '}
                  that move your business forward.
                </h1>
              </StaggerItem>

              <StaggerItem>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  From business websites and online stores to mobile apps and custom software, we create simple, easy to use digital solutions for growing companies.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-6 flex flex-wrap gap-4">
                  {highlights.map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.03, x: 2 }}
                      className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-teal shrink-0" />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/contact" className="btn-primary">
                      Start your project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/portfolio" className="btn-outline-navy">
                      See selected work
                    </Link>
                  </motion.div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Visual Right with Interactive Framer Motion hover float */}
          <div className="lg:col-span-5">
            <Reveal distance={20}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2 shadow-lg dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-900">
                  <Image
                    src="/assets/hero_ecosystem.png"
                    alt="SixByte Technologies Product Ecosystem"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                <div className="mt-3 flex items-center justify-between px-3 py-1">
                  <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {/* <Sparkles className="h-3 w-3 text-teal" /> */}
                    Product Ecosystem & Digital Systems
                  </span>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
