'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { Reveal } from '@/components/animations/Motion'
import SectionHeader from '@/components/ui/SectionHeader'

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = testimonials.length

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total)
  }

  // Auto slide every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused, total])

  // Get current testimonial and next testimonial for responsive side-by-side view
  const current = testimonials[currentIndex]
  const nextItem = testimonials[(currentIndex + 1) % total]

  return (
    <section id="testimonials" className="scroll-mt-24 bg-white py-12 dark:bg-slate-950 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeader
            tag="Client Feedback & Reviews"
            title="Real feedback from businesses that wanted a more polished digital presence."
            subtitle="We like specific outcomes and honest words. Here is what business owners say about working with SixByte Technologies."
            center
          />
        </Reveal>

        {/* Carousel Container */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-8 lg:grid-cols-12 lg:items-stretch"
            >
              {/* Primary Active Card */}
              <div className="lg:col-span-7">
                <div className="surface-card flex h-full flex-col justify-between rounded-2xl p-8 sm:p-10 shadow-lg border border-teal/20 dark:border-teal/30">
                  <div>
                    <div className="flex items-center justify-between">
                      <Quote className="h-10 w-10 text-teal/40" />
                      <div className="flex gap-1">
                        {Array.from({ length: current.rating }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="mt-6 text-lg font-medium leading-relaxed text-slate-800 sm:text-xl dark:text-slate-100">
                      &ldquo;{current.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6 dark:border-slate-800">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-sm font-bold text-white shadow-md">
                      {current.avatar}
                    </div>
                    <div>
                      <div className="text-base font-bold text-navy dark:text-white">{current.name}</div>
                      <div className="text-xs font-semibold text-teal dark:text-teal-light">
                        {current.role}, {current.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Up Next Preview Card (Desktop) */}
              <div className="hidden lg:col-span-5 lg:flex lg:flex-col justify-between opacity-85 hover:opacity-100 transition-opacity">
                <div className="surface-card flex h-full flex-col justify-between rounded-2xl p-8 shadow-sm">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Up Next</span>
                      <div className="flex gap-0.5">
                        {Array.from({ length: nextItem.rating }).map((_, idx) => (
                          <Star key={idx} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="line-clamp-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      &ldquo;{nextItem.content}&rdquo;
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {nextItem.avatar}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-navy dark:text-white">{nextItem.name}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        {nextItem.role}, {nextItem.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev / Next Buttons & Indicators */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 transition-all rounded-full ${
                    currentIndex === idx
                      ? 'w-8 bg-teal'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
