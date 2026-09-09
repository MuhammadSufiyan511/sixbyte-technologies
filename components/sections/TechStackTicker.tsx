'use client'

import { motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiPython,
  SiPostgresql,
  SiFirebase,
  SiDocker,
  SiFigma,
  SiMysql,
} from 'react-icons/si'

const techStack = [
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
  { name: 'Python & AI', Icon: SiPython, color: '#3776AB' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
]

// Duplicate array for seamless infinite scroll
const doubleTech = [...techStack, ...techStack, ...techStack]

export default function TechStackTicker() {
  return (
    <div className="group relative overflow-hidden border-y border-slate-200/80 bg-white/70 py-3 backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-950/70 sm:py-4">
      {/* Gradient Mask for fading left and right edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />

      <div className="flex w-max items-center">
        <div
          className="flex items-center gap-8 sm:gap-12 animate-ticker group-hover:[animation-play-state:paused]"
          style={{ animationDuration: '55s', willChange: 'transform' }}
        >
          {doubleTech.map((item, index) => {
            const Icon = item.Icon
            return (
              <div
                key={`${item.name}-${index}`}
                className="flex items-center gap-2.5 shrink-0 rounded-full border border-slate-200/80 bg-slate-50/80 px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-xs transition-colors hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300 dark:hover:border-teal-light dark:hover:text-teal-light"
              >
                <Icon
                  className="h-4 w-4 shrink-0"
                  style={item.color ? { color: item.color } : undefined}
                />
                <span>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
