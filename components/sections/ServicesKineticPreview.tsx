'use client'

import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { services } from '@/lib/data'

const buildLine = (offset: number) =>
  services.map((s) => s.title).concat(services.slice(0, offset).map((s) => s.title))

const rows = [
  { direction: 1, speed: 90, text: buildLine(0) },
  { direction: -1, speed: 80, text: buildLine(3) },
  { direction: 1, speed: 100, text: buildLine(6) },
]

const KineticRow = memo(function KineticRow({
  text,
  direction,
  speed,
  reduced,
}: {
  text: string[]
  direction: 1 | -1
  speed: number
  reduced: boolean | null
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max items-center gap-4 sm:gap-6 whitespace-nowrap transform-gpu"
        style={{ willChange: 'transform' }}
        animate={reduced ? undefined : { x: direction === 1 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={reduced ? undefined : { duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {Array.from({ length: 2 }).flatMap((_, repeatIndex) =>
          text.map((item, index) => (
            <span
              key={`${repeatIndex}-${index}-${item}`}
              className="inline-flex items-center gap-3 sm:gap-4 text-[clamp(1.25rem,3.5vw,3rem)] font-semibold tracking-tight text-white/90"
            >
              <span>{item}</span>
              <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-teal/80 shrink-0" />
            </span>
          )),
        )}
      </motion.div>
    </div>
  )
})

export default function ServicesKineticPreview() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-slate-950 py-6 sm:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_22%),radial-gradient(circle_at_bottom_center,rgba(59,130,246,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-2 sm:space-y-3 rounded-[2rem] border border-white/10 bg-white/5 px-3.5 py-4 sm:px-6 sm:py-5 backdrop-blur-sm">
          {rows.map((row, index) => (
            <div key={index} className="border-b border-white/8 pb-2 sm:pb-3 last:border-b-0 last:pb-0">
              <KineticRow
                text={row.text}
                direction={row.direction as 1 | -1}
                speed={row.speed}
                reduced={prefersReducedMotion}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
