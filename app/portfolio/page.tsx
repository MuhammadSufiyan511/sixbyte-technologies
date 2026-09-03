import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'
import CTASection from '@/components/sections/CTASection'
import PageHero from '@/components/sections/PageHero'
import Badge from '@/components/ui/Badge'

export const metadata: Metadata = {
  title: 'Portfolio | Client Projects & Work',
  description: 'Explore selected projects that show how we help businesses present themselves online with more clarity.',
  alternates: { canonical: '/portfolio' },
}

const industries = ['All', ...Array.from(new Set(projects.map((project) => project.industry)))]
const itemsPerPage = 6

function isVercelProject(link?: string) {
  if (!link) return false
  try {
    return new URL(link).hostname.includes('vercel.app')
  } catch {
    return false
  }
}

function getOrderedProjects() {
  return [...projects]
    .map((project, index) => ({ project, index }))
    .sort((a, b) => {
      const aVercel = isVercelProject(a.project.link)
      const bVercel = isVercelProject(b.project.link)

      if (aVercel !== bVercel) return aVercel ? 1 : -1
      return a.index - b.index
    })
    .map(({ project }) => project)
}

interface PortfolioPageProps {
  searchParams?: {
    page?: string
    industry?: string
  }
}

export default function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const orderedProjects = getOrderedProjects()

  const requestedIndustry = searchParams?.industry
  const activeIndustry =
    requestedIndustry && industries.includes(requestedIndustry) ? requestedIndustry : 'All'

  const filteredProjects =
    activeIndustry === 'All'
      ? orderedProjects
      : orderedProjects.filter((project) => project.industry === activeIndustry)

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / itemsPerPage))
  const requestedPage = Number(searchParams?.page ?? '1')
  const currentPage = Number.isFinite(requestedPage)
    ? Math.min(Math.max(1, Math.floor(requestedPage)), totalPages)
    : 1
  const start = (currentPage - 1) * itemsPerPage
  const visibleProjects = filteredProjects.slice(start, start + itemsPerPage)

  const buildFilterHref = (industry: string) =>
    industry === 'All' ? '/portfolio' : `/portfolio?industry=${encodeURIComponent(industry)}`

  const buildPageHref = (page: number) => {
    const params = new URLSearchParams()
    if (activeIndustry !== 'All') params.set('industry', activeIndustry)
    if (page > 1) params.set('page', String(page))
    const query = params.toString()
    return query ? `/portfolio?${query}` : '/portfolio'
  }

  return (
    <>
      <PageHero
        tag="Portfolio"
        title="Projects that show how a strong digital presence can feel more composed and more persuasive."
        subtitle="Each project here was built with clarity in mind. The goal is always to make the business easier to understand and easier to trust."
        chips={['Case studies', 'UI polish', 'Conversion']}
        panelTitle="Selected work"
        panelBody="A handful of examples that show how we combine structure, tone, and presentation to support real outcomes."
        panelStats={['Trust', 'Speed', 'Conversion']}
      />

      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Industry Filter Pills */}
          <div className="mb-12 flex flex-wrap gap-2 sm:justify-center">
            {industries.map((industry) => {
              const active = industry === activeIndustry
              return (
                <Link
                  key={industry}
                  href={buildFilterHref(industry)}
                  scroll={false}
                  aria-current={active ? 'true' : undefined}
                  className={`rounded border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'border-navy bg-navy text-white dark:border-teal dark:bg-teal'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  {industry}
                </Link>
              )
            })}
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="group surface-card overflow-hidden rounded-xl transition-all duration-300 hover:border-teal/30 hover:shadow-lg"
              >
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 opacity-60 transition-opacity group-hover:opacity-30" />
                </div>

                <div className="p-6">
                  <Badge variant="blue">{project.industry}</Badge>
                  <h2 className="mt-3 text-lg font-bold text-navy transition-colors group-hover:text-teal dark:text-white dark:group-hover:text-teal-light">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                    <Link
                      href={`/portfolio/${project.id}`}
                      scroll={false}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal transition-colors hover:text-teal-dark dark:text-teal-light"
                    >
                      Case study <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 transition-colors hover:text-navy dark:text-slate-400 dark:hover:text-white"
                      >
                        Live site <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Showing {start + 1}-{Math.min(start + itemsPerPage, filteredProjects.length)} of {filteredProjects.length} projects
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href={buildPageHref(Math.max(1, currentPage - 1))}
                  scroll={true}
                  aria-disabled={currentPage === 1}
                  className={`rounded border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    currentPage === 1
                      ? 'pointer-events-none border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  Prev
                </Link>

                {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                  <Link
                    key={page}
                    href={buildPageHref(page)}
                    scroll={true}
                    className={`min-w-8 rounded border px-3 py-1.5 text-center text-xs font-semibold transition-colors ${
                      page === currentPage
                        ? 'border-navy bg-navy text-white dark:border-teal dark:bg-teal'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                    }`}
                  >
                    {page}
                  </Link>
                ))}

                <Link
                  href={buildPageHref(Math.min(totalPages, currentPage + 1))}
                  scroll={true}
                  aria-disabled={currentPage === totalPages}
                  className={`rounded border px-3 py-1.5 text-xs font-semibold transition-colors ${
                    currentPage === totalPages
                      ? 'pointer-events-none border-slate-200 bg-slate-100 text-slate-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-600'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
                  }`}
                >
                  Next
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Like what you see? Let&apos;s build something similar for your business."
        subtitle="We can help translate your goals into a cleaner, more effective digital presence."
      />
    </>
  )
}
