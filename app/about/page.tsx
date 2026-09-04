'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Target } from 'lucide-react'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import SectionHeader from '@/components/ui/SectionHeader'
import KineticTeamShowcase from '@/components/sections/KineticTeamShowcase'
import { Reveal, Stagger, StaggerItem } from '@/components/animations/Motion'

const values = [
  {
    icon: Target,
    title: 'Business first thinking',
    description: 'Every decision should help the product do a real job for the business, not just look impressive.',
  },
  {
    icon: HeartHandshake,
    title: 'Genuine partnership',
    description: 'We keep communication honest, clear, and respectful so the process stays easy to trust.',
  },
  {
    icon: ShieldCheck,
    title: 'Dependable delivery',
    description: 'We care about the details, the timelines, and the long term stability of the work we ship.',
  },
  {
    icon: Award,
    title: 'Craft and consistency',
    description: 'Strong design, tidy code, and polished messaging all matter when your brand is on display.',
  },
]

const milestones = [
  {
    year: '2019',
    title: 'Started with a simple idea',
    description: 'Build digital solutions that feel more credible, more strategic, and more useful to growing businesses.',
  },
  {
    year: '2021',
    title: 'Expanded our process',
    description: 'We refined our discovery, design, and delivery flow so clients could move forward with more confidence.',
  },
  {
    year: '2023',
    title: 'Broader industry focus',
    description: 'We shaped solutions for restaurants, healthcare, retail, professional services, and property brands.',
  },
  {
    year: '2026',
    title: 'A stronger complete team',  
    description: 'We continue to grow with a sharper design system and a stronger focus on business outcomes.',
  },
]

const team = [
  {
    initials: 'MS',
    name: 'Muhammad Sufiyan',
    role: 'Full Stack Developer',
    bio: 'Leads full stack development across the MERN ecosystem, MySQL databases, and AI powered web applications. Passionate about architecting scalable SaaS products and turning complex business logic into clean, maintainable code that ships fast.',
    image: '/assets/MuhammadSufiyan-Bgless.webp',
    tags: ['Full Stack', 'MERN & MySQL', 'AI Applications'],
  },
  {
    initials: 'ZY',
    name: 'Zohaib Younas',
    role: 'Full Stack Developer',
    bio: 'Builds high performance websites and web applications with a keen eye for structure, speed, and pixel perfect user interfaces. Specializes in React, Next.js, and modern frontend architecture with a focus on delivering seamless digital experiences.',
    image: '/assets/Zohaib-bgless.webp',
    tags: ['Web Performance', 'UI/UX Architecture', 'React & Next.js'],
  },
  {
    initials: 'AW',
    name: 'Abdul Wahab',
    role: 'Mobile Application Developer',
    bio: 'Crafts smooth, native feeling mobile experiences for iOS and Android. Handles end to end app development from wireframe to App Store, with deep expertise in cross platform frameworks, intuitive navigation flows, and performance optimization.',
    image: '/assets/AbdulWahab-bgless.webp',
    tags: ['Mobile Development', 'Cross Platform', 'UX Design'],
  },
  {
    initials: 'AH',
    name: 'Abid Hussain',
    role: 'DevOps Engineer',
    bio: 'Architects cloud infrastructure, CI/CD pipelines, and automated deployment workflows that keep production systems running at 99.9% uptime. Ensures every release is stable, secure, and delivered with zero downtime confidence.',
    image: '/assets/AbidHussain-bgless.webp',
    tags: ['Cloud Infrastructure', 'CI/CD Pipelines', 'System Security'],
  },
  {
    initials: 'MU',
    name: 'Muhammad Umar',
    role: 'AI Engineer',
    bio: 'Designs and deploys machine learning models, computer vision systems, and intelligent backend services. Bridges the gap between research and production by integrating AI capabilities into real world products using Python, PyTorch, and modern ML ops.',
    image: '/assets/MuhammadUmar-bgless.webp',
    tags: ['AI & ML', 'Computer Vision', 'Python & PyTorch'],
  },
  {
    initials: 'HA',
    name: 'Abdul Haq',
    role: 'Business Developer',
    bio: 'Connects client ambitions with the right technical solutions through strategic consultation and discovery. Shapes clear project roadmaps, aligns stakeholder expectations, and drives business growth by turning ideas into actionable digital strategies.',
    image: '/assets/AbdulHaq-bgless.webp',
    tags: ['Client Relations', 'Strategy Alignment', 'Business Growth'],
  },
]

const stats = [
  { target: 10, suffix: '+', label: 'Projects delivered' },
  { target: 98, suffix: '%', label: 'Client satisfaction' },
  { target: 24, suffix: '/7', label: 'Digital presence' },
  { target: 4, suffix: '', label: 'Core disciplines' },
]

function AnimatedCount({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView) return

    const duration = 1600
    const startTime = performance.now()

    const updateCount = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeProgress * target))

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
      {count}
      {suffix}
    </span>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About our team"
        title="A small team with a clear goal: help businesses show up online with more clarity and confidence."
        subtitle="SixByte Technologies was built around one idea: your digital product should feel like a trustworthy extension of your business. We care about the tone, the structure, the details, and the way everything comes together to support real growth."
        chips={['Strategy', 'Design', 'Build']}
        panelTitle="How we work"
        panelBody="We keep the process collaborative and the result practical so the final site feels useful, not inflated."
        panelStats={['Human', 'Clear', 'Polished']}
      />

      {/* Mission Section */}
      <section className="relative overflow-hidden py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeader
                  tag="Our mission"
                  title="Make digital products feel more human, more useful, and more trusted."
                  subtitle="We want visitors to feel clear on who you are, what you offer, and why you are the right team to contact."
                />
              </Reveal>

              <Reveal delay={0.1}>
                <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <p>
                    We work best with businesses that want to present themselves well and communicate with more intention.
                    That could mean a new brand direction, a stronger website, or a more useful lead-generation flow.
                  </p>
                  <p>
                    The process is collaborative by design. We ask better questions up front, shape the structure with care,
                    and keep the final result focused on the people who will actually use it.
                  </p>
                </div>
              </Reveal>

              <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  'Clear discovery and planning',
                  'Messaging that sounds human',
                  'Mobile-first, responsive design',
                  'Support after launch',
                ].map((item) => (
                  <StaggerItem key={item}>
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                      {item}
                    </motion.div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>

            {/* Stats Grid with Animated Count */}
            <div className="grid grid-cols-2 gap-4 lg:col-span-5">
              {stats.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    className="surface-card rounded-xl p-6 text-center transition-all hover:border-teal/40"
                  >
                    <div className="text-3xl sm:text-4xl font-extrabold text-navy dark:text-white">
                      <AnimatedCount target={stat.target} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden bg-slate-50/80 py-10 dark:bg-slate-950/60 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeader
              tag="What we value"
              title="The principles that keep our work sharp and our process easy to trust."
              subtitle="We try to make the experience steady, thoughtful, and respectful from the first email to the final launch."
              center
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <StaggerItem key={title}>
                <motion.article
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="surface-card group flex h-full flex-col justify-between rounded-xl p-6 transition-all duration-200 hover:border-teal/40"
                >
                  <div>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal transition-colors group-hover:bg-teal group-hover:text-white dark:bg-teal/20 dark:text-teal-light">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-base font-bold text-navy dark:text-white">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
                  </div>
                </motion.article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Modern Alternating Vertical Timeline / Milestones */}
      <section className="relative overflow-hidden py-10 lg:py-14  ">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 ">
          <Reveal>
            <SectionHeader
              tag="Our story"
              title="How the business has grown over time."
              subtitle="The focus has stayed the same: build work that feels professional, useful, and honest."
              center
            />
          </Reveal>

          <div className="relative mt-16 sm:mt-20 ">
            {/* Center Vertical Timeline Line */}
            <motion.div
              className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#0F766E]/40 dark:bg-teal-500/40"
              initial={{ scaleY: 0, transformOrigin: 'top' }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="space-y-12 sm:space-y-16">
              {milestones.map((item, idx) => {
                const isLeft = idx % 2 === 0

                return (
                  <div
                    key={item.year}
                    className="relative flex flex-col sm:flex-row items-center "
                  >
                    {/* Centered Pulse Dot Node on Vertical Line */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.15 }}
                      className="absolute left-[7px]  top-[69px] sm:left-[463px]  sm:top-[64px] -translate-x-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-[#0F766E]/40 bg-teal-500/10 shadow-[0_0_14px_rgba(15,118,110,0.25)] z-20"
                    >
                      <span className="h-3.5 w-3.5 rounded-full bg-[#0F766E] dark:bg-teal-400 animate-pulse" />
                    </motion.div>

                    {/* Horizontal Connector Arm (Desktop) */}
                    <div
                      className="hidden sm:block absolute top-1/2 h-[2px] bg-[#0F766E]/60 dark:bg-teal-400/60 -translate-y-1/2 z-10"
                      style={
                        isLeft
                          ? { right: 'calc(50% + 18px)', width: 'calc(3rem - 18px)' }
                          : { left: 'calc(50% + 18px)', width: 'calc(3rem - 18px)' }
                      }
                    />

                    {/* Horizontal Connector Arm (Mobile) */}
                    <div
                      className="sm:hidden absolute top-1/2 h-[2px] bg-[#0F766E]/60 dark:bg-teal-400/60 -translate-y-1/2 z-10"
                      style={{ left: 'calc(1.5rem + 18px)', width: 'calc(2.5rem - 18px)' }}
                    />

                    {/* Milestone Content Card */}
                    <div
                      className={`w-full sm:w-[calc(50%-3rem)] ${
                        isLeft
                          ? 'sm:mr-auto'
                          : 'sm:ml-auto'
                      } pl-16 sm:pl-0`}
                    >
                      <Reveal delay={idx * 0.12}>
                        <motion.article
                          whileHover={{ y: -4, transition: { duration: 0.2 } }}
                          className="surface-card group rounded-2xl bg-white p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.05)] border border-slate-200/80 dark:border-slate-800 dark:bg-slate-900 transition-all duration-300 hover:border-[#0F766E]/40 hover:shadow-xl text-left"
                        >
                          <div className="flex items-center gap-3 text-left">
                            <span className="font-mono text-xs font-bold tracking-widest text-[#0F766E] dark:text-teal-400">
                              MILESTONE 0{idx + 1}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="inline-block rounded-md bg-[#0F766E]/10 px-2.5 py-0.5 font-mono text-xs font-extrabold text-[#0F766E] dark:bg-teal-500/10 dark:text-teal-300">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="mt-3 text-lg sm:text-xl font-bold text-navy dark:text-white group-hover:text-[#0F766E] dark:group-hover:text-teal-300 transition-colors text-left">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 text-left">
                            {item.description}
                          </p>
                        </motion.article>
                      </Reveal>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Kinetic Team Showcase Stage */}
      <section className="relative overflow-hidden py-6 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <KineticTeamShowcase
            team={team}
            tag="Our People"
            title="The people building the work, together."
            subtitle="Explore our team members in an interactive motion spotlight."
          />
        </div>
      </section>

      <CTASection
        title="Want a team that makes the process feel easier?"
        subtitle="Let&apos;s talk about where your business is now, where you want it to go, and what a clearer digital presence could look like."
      />
    </>
  )
}
