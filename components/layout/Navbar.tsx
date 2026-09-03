'use client'

import Link from 'next/link'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, Moon, Sun, X, ArrowRight } from 'lucide-react'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [mounted, setMounted] = useState(false)
  const [portalReady, setPortalReady] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const nextTheme = savedTheme === 'dark' || (!savedTheme && prefersDark) ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.classList.toggle('dark', nextTheme === 'dark')
    setMounted(true)
  }, [])

  useEffect(() => {
    setPortalReady(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem('theme', theme)
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [mounted, theme])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90'
          : 'border-b border-transparent bg-slate-50/80 backdrop-blur-sm dark:bg-slate-950/40'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <Image
              src="/assets/SixByte_standalone-removebg-preview.webp"
              alt="SixByte Technologies Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              priority
            />
            <div className="leading-none">
              <span className="block text-base font-extrabold tracking-tight text-navy uppercase dark:text-white">
                SixByte
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold tracking-widest text-teal uppercase">
                Technologies
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm xl:text-base font-semibold transition-colors hover:text-teal ${
                    active
                      ? 'text-teal dark:text-teal-light font-bold'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Actions (Theme toggle + CTA) */}
          <div className="hidden items-center gap-6 lg:flex">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white text-slate-700 transition-colors hover:border-teal hover:text-teal dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-teal"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <Link href="/contact" className="btn-primary">
              Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobile Right Tools */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {portalReady &&
        createPortal(
          <div className="lg:hidden">
            <div
              className={`fixed inset-0 z-[1000] bg-slate-950/55 backdrop-blur-sm transition-opacity duration-300 ${
                isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
              }`}
              aria-hidden="true"
              onClick={() => setIsOpen(false)}
            />

            <aside
              className={`fixed inset-y-0 right-0 z-[1001] flex w-[min(88vw,22rem)] max-w-full transform flex-col border-l border-slate-200 bg-white shadow-2xl shadow-slate-950/20 transition-transform duration-300 ease-out dark:border-slate-800 dark:bg-slate-950 ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
              aria-hidden={!isOpen}
            >
              <div className="flex h-20 items-center justify-between border-b border-slate-100 px-6 dark:border-slate-900">
                <div className="flex items-center gap-3">
                  <Image
                    src="/assets/SixByte_standalone-removebg-preview.webp"
                    alt="SixByte Technologies"
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-sm font-bold text-navy dark:text-white">SixByte</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex h-9 w-9 items-center justify-center rounded border border-slate-200 text-slate-700 dark:border-slate-800 dark:text-slate-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-between overflow-y-auto px-6 py-6">
                <nav className="space-y-1">
                  {[{ label: 'Home', href: '/' }, ...navLinks].map((link) => {
                    const active = pathname === link.href
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={`block rounded-md px-4 py-2.5 text-base font-medium transition-colors ${
                          active
                            ? 'bg-teal/10 font-semibold text-teal dark:bg-teal/20'
                            : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900'
                        }`}
                      >
                        {link.label}
                      </Link>
                    )
                  })}
                </nav>

                <div className="mt-8 space-y-4 border-t border-slate-100 pt-6 dark:border-slate-900">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>,
          document.body,
        )}
    </header>
  )
}
