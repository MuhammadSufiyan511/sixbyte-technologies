# SixByte Technologies — Website

A complete, production-ready Next.js website for SixByte Technologies — smart, high-converting websites and digital systems for growing businesses.

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React + React Icons
- **Font**: Plus Jakarta Sans (Google Fonts)
- **Email**: Resend (contact form delivery)

## 📁 Folder Structure

```
sixbyte-technologies/
├── app/
│   ├── layout.tsx              # Root layout with Navbar, Footer & SEO metadata + JSON-LD
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles & design tokens
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── portfolio/
│   │   ├── page.tsx            # Project grid with working industry filters
│   │   └── [id]/page.tsx       # Dynamic project detail page
│   ├── industries/page.tsx
│   ├── pricing/page.tsx
│   ├── testimonials/page.tsx
│   ├── contact/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx       # Dynamic blog post page
│   └── api/
│       └── contact/route.ts    # Contact form handler (Resend)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with mobile menu
│   │   └── Footer.tsx          # Full footer with contact details
│   ├── sections/               # Hero, services, process, kinetic typography, ticker, CTA, etc.
│   └── ui/                     # Button, Card, Badge, SectionHeader, ...
├── lib/
│   ├── data.ts                 # Content data (services, projects, testimonials, ...)
│   └── site.ts                 # Single source of truth: brand, contact & SEO config
├── types/
│   └── index.ts                # TypeScript interfaces
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17+ 
- npm or yarn

### Installation

```bash
# 1. Navigate to the project
cd sixbyte-technologies

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Contact Form Email Setup

Create a `.env.local` file and add:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_FROM_EMAIL=Website Leads <onboarding@resend.dev>
CONTACT_TO_EMAIL=contact@sixbytetechnologies.com
```

Notes:
- `CONTACT_FROM_EMAIL` must use a sender allowed by your Resend account.
- The contact form posts to `/api/contact` and sends emails through Resend.

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home with hero, services, process, portfolio, testimonials |
| `/about` | Company story, values, team, timeline |
| `/services` | All 6 services with features and CTAs |
| `/portfolio` | Project grid with working industry filters |
| `/portfolio/[id]` | Individual project case study |
| `/industries` | 6 industry-specific sections |
| `/pricing` | 3-tier pricing with FAQ |
| `/testimonials` | All client reviews |
| `/contact` | Contact form with validation + WhatsApp |
| `/blog` | Blog index with featured post |
| `/blog/[id]` | Individual blog article |

## 🎨 Color Palette

Defined centrally in `tailwind.config.ts` (brand colors) and `app/globals.css` (semantic tokens).

| Name | Hex |
|------|-----|
| Navy | `#0E1A2E` |
| Teal | `#0F766E` |
| Soft Blue | `#D1E2F8` |
| Off-White | `#FAFBFC` |

Neutral surfaces and borders use a navy-tinted `slate` ramp (overridden in `tailwind.config.ts`) so the whole UI stays on-brand — no generic grey.

## ✨ Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with mobile hamburger menu
- ✅ SEO metadata on all pages (Open Graph, Twitter cards, canonical URLs, JSON-LD)
- ✅ TypeScript interfaces throughout
- ✅ Form validation with error states + conditional "Other" input
- ✅ Dynamic routes for portfolio & blog
- ✅ Framer Motion animations (kinetic typography, ticker, reveals)
- ✅ Optimized images with Next/Image
- ✅ Smooth scroll
- ✅ Accessible semantic HTML
- ✅ WhatsApp integration button
- ✅ Custom 404 page

## 📝 Customization

1. **Brand & contact info / SEO**: Edit `lib/site.ts` (single source of truth). Set `siteUrl` to the live domain when it goes live — it is currently a clearly-marked placeholder.
2. **Brand colors**: Edit `tailwind.config.ts` and the tokens in `app/globals.css`.
3. **Content/data**: Edit `lib/data.ts`.
4. **Images**: Replace assets in `public/assets/` with your own.
5. **WhatsApp number**: Update `whatsappNumber` / `whatsappUrl` in `lib/site.ts`.

## 📦 Dependencies

```json
{
  "next": "14.2.5",
  "react": "^18",
  "react-dom": "^18",
  "framer-motion": "^13.1.0",
  "lucide-react": "^0.400.0",
  "react-icons": "^5",
  "resend": "^3",
  "tailwindcss": "^3.4.1",
  "typescript": "^5"
}
```
