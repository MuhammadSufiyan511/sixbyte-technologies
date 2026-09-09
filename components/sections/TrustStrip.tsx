'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItem {
  target: number
  prefix?: string
  suffix?: string
  label: string
}

const stats: StatItem[] = [
  { target: 10, suffix: '+', label: 'Projects delivered' },
  { target: 98, suffix: '%', label: 'Client satisfaction' },
  { target: 3, suffix: 'x', label: 'Avg. lead lift' },
]

function AnimatedCount({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1600 // 1.6 seconds
    const startTime = performance.now()

    const updateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const currentCount = Math.floor(easeProgress * target)

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(target)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, target])

  return (
    <span ref={ref} className="inline-block">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200/80 bg-white py-5 sm:py-8 dark:border-slate-800 dark:bg-slate-900 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 dark:sm:divide-slate-800">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col items-center justify-center text-center ${
                idx !== 0 ? 'sm:pl-6' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-navy dark:text-white">
                <AnimatedCount target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
