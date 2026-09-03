import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Instagram, Facebook } from 'lucide-react'
import { siteConfig } from '@/lib/site'

const serviceLinks = [
  { label: 'Website Development', href: '/services#web-dev' },
  { label: 'E-commerce Solutions', href: '/services#ecommerce' },
  { label: 'Industry Systems', href: '/services#industry-systems' },
  { label: 'Maintenance & Support', href: '/services#maintenance' },
  { label: 'WhatsApp Integration', href: '/services#lead-integration' },
  { label: 'SEO & Marketing', href: '/services#seo' },
]

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Blog', href: '/blog' },
]

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn', href: siteConfig.social.linkedin },
  { Icon: Instagram, label: 'Instagram', href: siteConfig.social.instagram },
  { Icon: XIcon, label: 'X (Twitter)', href: siteConfig.social.x },
  { Icon: Facebook, label: 'Facebook', href: siteConfig.social.facebook },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0E1A2E] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/SixByte_standalone-removebg-preview.webp"
                alt="SixByte Technologies"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <div className="leading-none">
                <span className="block text-base font-extrabold tracking-tight text-white uppercase">
                  SixByte
                </span>
                <span className="mt-0.5 block text-[10px] font-semibold tracking-widest text-teal uppercase">
                  Technologies
                </span>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Custom software, mobile apps, e-commerce, and digital systems built to help real businesses grow with clarity and confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded border border-slate-700/80 bg-slate-900/50 text-slate-400 transition-colors hover:border-teal hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Services</h4>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Company</h4>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-teal shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-teal shrink-0" />
                <a href={`tel:${siteConfig.phoneTel}`} className="transition-colors hover:text-white">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-teal shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-teal shrink-0" />
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SixByte Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-slate-400">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
