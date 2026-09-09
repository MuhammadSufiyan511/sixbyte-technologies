'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, Rocket, MessageSquare, ShieldCheck } from 'lucide-react'
import { SiShopify, SiWordpress, SiWebflow, SiFigma, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'
import { Caveat } from 'next/font/google'
import AnimatedTagHeader from '@/components/ui/AnimatedTagHeader'
import SquaresBackground from '@/components/ui/SquaresBackground'
import ParticlesBackground from '@/components/ui/ParticlesBackground'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

const highlights = [
  { title: 'Strategy-led', subtitle: 'structure', Icon: Rocket },
  { title: 'Clear', subtitle: 'messaging', Icon: MessageSquare },
  { title: 'Built for trust', subtitle: 'and conversion', Icon: ShieldCheck },
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50/70 pt-24 pb-6 dark:bg-slate-950/80 sm:pt-28 sm:pb-12 lg:pt-28 lg:pb-24">
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
          <div className="lg:col-span-6">
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
                  From business websites and online stores to mobile apps and custom software, we create simple, powerful digital solutions for growing companies.
                </p>
              </StaggerItem>

              {/* Mobile-only Trust Icons Strip — Positioned right below paragraph text for 0% scroll visibility on mobile */}
              <StaggerItem className="lg:hidden">
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiShopify className="h-3.5 w-3.5 text-[#95BF47]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiWordpress className="h-3.5 w-3.5 text-[#21759B]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiWebflow className="h-3.5 w-3.5 text-[#4353FF]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiFigma className="h-3.5 w-3.5 text-[#F24E1E]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiNextdotjs className="h-3.5 w-3.5 text-navy dark:text-white" />
                    </div>
                  </div>
                  <span className="font-medium text-slate-600 dark:text-slate-400">
                    Trusted by growing businesses worldwide
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-wrap items-center gap-6 sm:gap-8">
                  {highlights.map((item) => {
                    const Icon = item.Icon
                    return (
                      <motion.div
                        key={item.title}
                        whileHover={{ scale: 1.03 }}
                        className="flex items-center gap-3"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-100/70 text-emerald-800 dark:bg-teal-950/60 dark:text-teal-300">
                          <Icon className="h-5 w-5 stroke-[2]" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-sm font-bold leading-snug text-slate-900 dark:text-white">
                            {item.title}
                          </span>
                          <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                            {item.subtitle}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/contact" className="btn-primary flex items-center justify-center gap-2">
                      Start your project <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/portfolio" className="btn-outline-navy flex items-center justify-center gap-2">
                      <Play className="h-3.5 w-3.5 fill-teal text-teal" /> See our work
                    </Link>
                  </motion.div>
                </div>
              </StaggerItem>

              {/* Desktop-only Trust Icons Strip */}
              <StaggerItem className="hidden lg:block">
                <div className="mt-8 flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiShopify className="h-3.5 w-3.5 text-[#95BF47]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiWordpress className="h-3.5 w-3.5 text-[#21759B]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiWebflow className="h-3.5 w-3.5 text-[#4353FF]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiFigma className="h-3.5 w-3.5 text-[#F24E1E]" />
                    </div>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-xs border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                      <SiNextdotjs className="h-3.5 w-3.5 text-navy dark:text-white" />
                    </div>
                  </div>
                  <span className="font-medium text-slate-600 dark:text-slate-400">
                    Trusted by growing businesses worldwide
                  </span>
                </div>
              </StaggerItem>
            </Stagger>
          </div>

          {/* Visual Right with Floating WebP Graphic + Animated Handwritten Annotations (Hidden on Mobile < lg, Visible on Desktop lg:) */}
          <div className="hidden lg:block lg:col-span-6">
            <Reveal distance={20}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                whileHover={{ y: -6, transition: { duration: 0.4, ease: 'easeOut' } }}
                className="relative mx-auto w-full max-w-2xl lg:max-w-none pt-14 pb-10 sm:pt-20 sm:pb-14"
              >
                {/* Glow backdrop behind graphic */}
                <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-gradient-to-tr from-teal/20 via-sky-400/10 to-transparent blur-3xl dark:from-teal/30 dark:via-sky-900/20" />

                {/* Top Right Handwritten Annotation: Ideas, Strategy, Execution, Growth */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.7 } },
                  }}
                  className="pointer-events-none absolute -top-1 sm:-top-4 lg:-top-6 right-0 sm:right-4 lg:-right-4 xl:-right-8 z-30 hidden md:flex flex-col items-center text-teal-700 dark:text-teal-300"
                >
                  <div className={`${caveat.className} text-lg sm:text-xl lg:text-2xl font-bold leading-tight tracking-wide rotate-[-6deg] text-teal-700 dark:text-teal-300 select-none text-center drop-shadow-xs`}>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">Ideas</motion.span>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">Strategy</motion.span>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">Execution</motion.span>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">Growth</motion.span>
                  </div>
                  <svg className="w-12 h-12 text-teal-600 dark:text-teal-400 mt-1 -ml-6" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Smooth Parabolic Bezier Arc */}
                    <motion.path
                      d="M 45 8 Q 35 38, 10 32"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.3, duration: 0.6, ease: 'easeOut' }}
                    />
                    {/* Arrowhead */}
                    <motion.path
                      d="M 18 24 L 10 32 L 18 39"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.8, duration: 0.2 }}
                    />
                  </svg>
                </motion.div>

                {/* Main Laptop & Phone WebP Image */}
                <Image
                  src="/assets/hero_pic.webp"
                  alt="SixByte Technologies Product Ecosystem & Dashboard"
                  width={1586}
                  height={992}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="relative z-10 h-auto w-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
                  priority
                />

                {/* Bottom Right Handwritten Annotation: Let's Build What's Next */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 1.4 } },
                  }}
                  className="pointer-events-none absolute -bottom-6 sm:-bottom-8 right-0 sm:right-4 lg:right-8 z-20 hidden md:flex flex-col items-start text-teal-700 dark:text-teal-300"
                >
                  <svg className="w-8 h-8 -ml-2 mb-0.5 text-teal-600/90 dark:text-teal-400/90 rotate-[15deg]" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path
                      d="M 6 34 C 16 24, 24 18, 20 8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1.3, duration: 0.5, ease: 'easeOut' }}
                    />
                    <motion.path
                      d="M 13 14 L 20 8 L 26 15"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7, duration: 0.2 }}
                    />
                  </svg>
                  <div className={`${caveat.className} text-xl sm:text-2xl font-bold leading-tight tracking-wide rotate-[3deg] text-teal-700 dark:text-teal-300 select-none drop-shadow-xs`}>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">Let's Build</motion.span>
                    <motion.span variants={{ hidden: { opacity: 0, y: 4 }, visible: { opacity: 1, y: 0 } }} className="block">What's Next</motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
