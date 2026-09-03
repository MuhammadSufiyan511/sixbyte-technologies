/**
 * Rich pillar-page content for each service, keyed by the service `id` in
 * lib/data.ts (which doubles as the URL slug: /services/<id>).
 *
 * This layer ADDS depth (overview, who it's for, process, FAQs, internal-link
 * targets) on top of the short marketing copy in lib/data.ts, without
 * duplicating it. All copy is grounded in what SixByte actually offers — no
 * invented metrics, clients, or guarantees.
 */

export interface ServiceContent {
  /** URL slug — matches the Service.id in lib/data.ts */
  slug: string
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  /** One-sentence, AI-friendly definition of the service. */
  summary: string
  overview: string[]
  whoFor: string[]
  deliverables: string[]
  process: { title: string; detail: string }[]
  faqs: { q: string; a: string }[]
  /** industry ids (lib/data.ts) this service is most relevant to */
  relatedIndustries: string[]
  /** other service ids to cross-link */
  relatedServices: string[]
  keywords: string[]
}

const commonProcess = (buildLabel: string, buildDetail: string) => [
  {
    title: 'Discovery & planning',
    detail:
      'We start with a short consultation to understand your business, your customers, and what a successful outcome looks like — then agree on scope, timeline, and budget before any work begins.',
  },
  {
    title: 'Design',
    detail:
      'We map the structure and design the key screens around clarity and conversion, so the experience feels calm, credible, and easy to act on. You review and give feedback before we build.',
  },
  { title: buildLabel, detail: buildDetail },
  {
    title: 'Launch & support',
    detail:
      'We test across devices, check performance and basic SEO, then launch. You keep full ownership of the code and assets, with post launch support to keep things running smoothly.',
  },
]

export const serviceContent: Record<string, ServiceContent> = {
  'web-dev': {
    slug: 'web-dev',
    metaTitle: 'Website Development Services',
    metaDescription:
      'Custom website development for growing businesses — fast, mobile first, SEO ready sites built to convert.',
    heroTitle: 'Website development that turns visitors into customers',
    heroSubtitle:
      'We design and build custom, fast loading websites that make your business look credible and guide people toward taking action.',
    summary:
      'Website development is the design and build of a custom, mobile first business website engineered for speed, search visibility, and conversion.',
    overview: [
      'A website is often the first real impression a business makes. If it loads slowly, looks dated, or is hard to navigate, potential customers quietly leave — usually for a competitor. Our website development work exists to prevent that.',
      'We build custom websites rather than heavy templates, so the structure, speed, and messaging are shaped around your specific business and the action you want visitors to take. Every build is responsive on mobile, structured for search engines, and set up with analytics so you can see what is working.',
      'The goal is not just a website that looks good in a screenshot. It is a site that feels trustworthy, is easy to maintain, and gives you something you fully own and can grow over time.',
    ],
    whoFor: [
      'Businesses replacing an outdated or slow website',
      'New businesses that need a credible first web presence',
      'Companies whose current site does not work well on mobile',
      'Teams that want to own their code instead of renting a locked platform',
    ],
    deliverables: [
      'Custom, responsive design and development',
      'Mobile-first layouts that work on every screen',
      'SEO-friendly structure and metadata',
      'Performance optimization for fast loading',
      'CMS integration so you can edit content',
      'Analytics setup to measure results',
    ],
    process: commonProcess(
      'Development',
      'We build the site with a modern, fast tech stack, wire up the CMS and forms, and optimize images and code for performance and accessibility as we go.'
    ),
    faqs: [
      {
        q: 'How long does it take to build a website?',
        a: 'A focused marketing site typically takes a few weeks, while larger sites with custom features take longer. We confirm a realistic timeline during the planning stage, and it depends partly on how quickly content and feedback come back.',
      },
      {
        q: 'Do I own the website when it is finished?',
        a: 'Yes. We transfer all files, code, and credentials to you at completion. You are never locked into a platform you cannot leave.',
      },
      {
        q: 'Will the website work well on mobile phones?',
        a: 'Every site we build is mobile-first, meaning we design for small screens first and scale up. Most visitors arrive on a phone, so this is a core part of the work, not an add-on.',
      },
      {
        q: 'Can you redesign my existing website?',
        a: 'Yes. We regularly rebuild dated or slow sites with a stronger structure, faster performance, and clearer messaging while preserving what already works.',
      },
    ],
    relatedIndustries: ['restaurant', 'healthcare', 'real-estate', 'legal'],
    relatedServices: ['ecommerce', 'seo', 'maintenance'],
    keywords: [
      'website development',
      'custom website design',
      'business website',
      'responsive web design',
      'Next.js development',
      'custom web development',
    ],
  },

  wordpress: {
    slug: 'wordpress',
    metaTitle: 'WordPress Development Services',
    metaDescription:
      'WordPress development for businesses that want a cleaner, faster, easier-to-manage website with a more premium presentation.',
    heroTitle: 'WordPress development that feels cleaner and more reliable',
    heroSubtitle:
      'We build WordPress websites that are easier to edit, easier to trust, and structured to support long-term growth.',
    summary:
      'WordPress development is the creation of a custom WordPress website with a cleaner content structure, better performance, and easier management.',
    overview: [
      'WordPress remains a strong choice for businesses that need a flexible content system without giving up control over the design and experience.',
      'We build around a custom structure instead of leaving you with a heavy, generic theme, so the site feels more premium and is easier for your team to maintain.',
      'That means a polished front end, sensible page templates, faster loading, and a content workflow that does not feel frustrating to use.',
    ],
    whoFor: [
      'Businesses that update content regularly',
      'Teams that want easier CMS editing',
      'Brands migrating from a dated WordPress site',
      'Companies that need custom page templates',
    ],
    deliverables: [
      'Custom WordPress theme setup',
      'CMS and page builder configuration',
      'Content structure and templates',
      'Performance and security tuning',
      'Plugin setup and integrations',
      'SEO-ready website architecture',
    ],
    process: commonProcess(
      'Build',
      'We create the theme, templates, and content structure so the site looks refined and remains simple to update after launch.'
    ),
    faqs: [
      {
        q: 'Will I be able to edit the site myself?',
        a: 'Yes. We set up the content structure so your team can update pages, posts, and key sections without touching code.',
      },
      {
        q: 'Can you improve an existing WordPress site?',
        a: 'Yes. We often clean up older WordPress builds by improving structure, performance, and the editing experience.',
      },
      {
        q: 'Do you use custom themes?',
        a: 'When the project calls for it, yes. Custom themes help avoid the limitations and bloat that often come with generic templates.',
      },
    ],
    relatedIndustries: ['restaurant', 'healthcare', 'real-estate', 'legal', 'ecommerce'],
    relatedServices: ['web-dev', 'shopify', 'maintenance'],
    keywords: ['WordPress development', 'custom WordPress theme', 'WordPress website', 'CMS development'],
  },

  shopify: {
    slug: 'shopify',
    metaTitle: 'Shopify Development Services',
    metaDescription:
      'Shopify development for brands that want a stronger storefront, more polished product pages, and a smoother path to purchase.',
    heroTitle: 'Shopify stores built to convert with less friction',
    heroSubtitle:
      'We customize Shopify experiences so your store feels cleaner, easier to manage, and better prepared for growth.',
    summary:
      'Shopify development is the creation and customization of an online store on Shopify with a better user experience, cleaner merchandising, and stronger conversion flow.',
    overview: [
      'Shopify is a strong option for businesses that want a reliable commerce platform, but the default setup rarely feels premium enough on its own.',
      'We customize the storefront, product presentation, and buying flow so the store feels more like a polished brand experience and less like a stock template.',
      'The result is a store that is easier for your team to manage and more effective at turning browsing into purchases.',
    ],
    whoFor: [
      'Brands launching or rebuilding an online store',
      'Businesses that want a better Shopify theme setup',
      'Teams that need a smoother checkout and browsing flow',
      'Stores that want stronger product storytelling',
    ],
    deliverables: [
      'Custom Shopify storefront setup',
      'Theme customization and sections',
      'Product and collection architecture',
      'Checkout and conversion improvements',
      'App and automation integrations',
      'Performance tuning for storefront speed',
    ],
    process: commonProcess(
      'Configure',
      'We tailor the storefront, templates, and product flow so the store is easier to browse, manage, and buy from.'
    ),
    faqs: [
      {
        q: 'Can you work with an existing Shopify store?',
        a: 'Yes. We can redesign or improve an existing store rather than starting from scratch when that is the more practical option.',
      },
      {
        q: 'Will this help conversions?',
        a: 'The goal is always to reduce friction and improve clarity, which usually supports better conversion behavior.',
      },
      {
        q: 'Can you add custom sections and product layouts?',
        a: 'Yes. Custom sections and better product layouts are often the fastest way to make a Shopify store feel more premium.',
      },
    ],
    relatedIndustries: ['ecommerce', 'restaurant', 'fitness'],
    relatedServices: ['web-dev', 'wordpress', 'ecommerce'],
    keywords: ['Shopify development', 'Shopify store design', 'Shopify theme customization', 'ecommerce development'],
  },

  ecommerce: {
    slug: 'ecommerce',
    metaTitle: 'E-commerce Website Development',
    metaDescription:
      'E-commerce development on Shopify, WooCommerce, or custom builds — secure checkout, product search, and mobile-first storefronts designed to convert browsers into buyers.',
    heroTitle: 'Online stores designed to make buying feel easy',
    heroSubtitle:
      'We build e-commerce experiences where browsing feels effortless and checkout feels confident — on Shopify, WooCommerce, or a fully custom platform.',
    summary:
      'E-commerce development is the build of an online store — product catalog, secure payments, and checkout — optimised so more visitors complete a purchase.',
    overview: [
      'Most online stores do not lose sales because of price. They lose them because of friction: slow pages, confusing navigation, unclear product information, or a checkout that asks for too much. Good e-commerce development removes that friction.',
      'We build stores on the platform that fits your business — Shopify or WooCommerce when you want a proven ecosystem, or a custom build when you need something specific. Whichever route, we focus on fast product discovery, trustworthy product pages, and a checkout that feels safe and simple.',
      'You get a store that is straightforward to manage day to day, integrates with the payment and shipping tools you use, and is built to grow as your catalog does.',
    ],
    whoFor: [
      'Retailers moving from in-person or social selling to a real store',
      'Brands whose current store has a high cart-abandonment problem',
      'Businesses that outgrew a basic template and need custom flows',
      'Sellers who want multi-currency or region-specific checkout',
    ],
    deliverables: [
      'Shopify, WooCommerce, or custom store builds',
      'Secure payment gateway integration',
      'Product catalog with search and filtering',
      'Order and inventory notifications',
      'Inventory management setup',
      'Multi-currency support where needed',
    ],
    process: commonProcess(
      'Development',
      'We build the storefront and product templates, connect payments, shipping, and inventory, and test the full path from product page to completed order.'
    ),
    faqs: [
      {
        q: 'Should I use Shopify, WooCommerce, or a custom build?',
        a: 'Shopify is fast to launch and low-maintenance; WooCommerce gives more control on WordPress; a custom build makes sense when you have unusual product, pricing, or workflow needs. We recommend the option that fits your catalog, budget, and team — not a one-size-fits-all answer.',
      },
      {
        q: 'Can you migrate my existing store to a new platform?',
        a: 'Yes. We can move products, content, and where possible customer data to a new platform, with care taken to preserve search rankings via proper redirects.',
      },
      {
        q: 'Is the checkout secure?',
        a: 'We integrate established, PCI-compliant payment providers rather than handling raw card data ourselves, so payments are processed through trusted gateways.',
      },
      {
        q: 'Can customers pay in different currencies?',
        a: 'Yes, multi-currency and region-aware checkout can be set up when your business sells across markets.',
      },
    ],
    relatedIndustries: ['ecommerce', 'restaurant', 'fitness'],
    relatedServices: ['web-dev', 'lead-integration', 'seo'],
    keywords: [
      'e-commerce development',
      'online store development',
      'Shopify developer',
      'WooCommerce developer',
      'custom e-commerce',
      'ecommerce website design',
    ],
  },

  'industry-systems': {
    slug: 'industry-systems',
    metaTitle: 'Custom Web Systems & Applications',
    metaDescription:
      'Industry-specific web systems — booking tools, client and patient portals, listing platforms, and custom dashboards for businesses that need more than a brochure website.',
    heroTitle: 'Custom systems for businesses that need more than a website',
    heroSubtitle:
      'When an off-the-shelf tool does not fit, we build tailored web systems — booking, portals, dashboards — around how your business actually works.',
    summary:
      'Industry-specific systems are custom web applications — such as booking tools, client portals, and dashboards — built around a specific business workflow.',
    overview: [
      'Many businesses reach a point where a standard website is not enough. They need to take bookings, manage clients, show live listings, or give staff a dashboard — and the generic tools they have tried do not quite fit how they work.',
      'We build industry-specific systems that match the actual workflow: reservation and appointment tools, client or patient portals, property and menu systems, and custom admin dashboards. Because these are built for your process, they remove manual work rather than adding to it.',
      'We scope these carefully, start with the parts that create the most value, and build in a way that stays maintainable as requirements evolve. Our portfolio includes custom platforms such as a real-time communication app, which reflects this kind of applied build work.',
    ],
    whoFor: [
      'Clinics, salons, and studios that need reliable online booking',
      'Firms that need a secure client or patient portal',
      'Agencies and brokerages that need listing or catalog platforms',
      'Operators who need a custom dashboard to run daily work',
    ],
    deliverables: [
      'Booking and reservation tools',
      'Client or patient portals',
      'Property or catalog listing platforms',
      'Order and menu systems',
      'Appointment scheduling',
      'Custom admin dashboards',
    ],
    process: commonProcess(
      'Build & integrate',
      'We build the core workflow first, connect it to the tools and data you already use, and iterate with you so the system reflects how the work is really done.'
    ),
    faqs: [
      {
        q: 'How is this different from a normal website?',
        a: 'A normal website presents information. A system does work — it lets people book, log in, submit, manage, or track something. We build the interactive workflow, not just the pages around it.',
      },
      {
        q: 'Can it connect to tools we already use?',
        a: 'Usually, yes. Most modern tools offer APIs, so we can integrate calendars, payment providers, CRMs, and similar services depending on what you rely on.',
      },
      {
        q: 'Do we have to build everything at once?',
        a: 'No. We recommend starting with the workflow that creates the most value, launching it, and expanding from there. This keeps cost and risk under control.',
      },
    ],
    relatedIndustries: ['healthcare', 'real-estate', 'restaurant', 'fitness', 'legal'],
    relatedServices: ['web-dev', 'maintenance', 'lead-integration'],
    keywords: [
      'custom web application',
      'booking system development',
      'client portal development',
      'custom dashboard',
      'web system development',
      'appointment scheduling software',
    ],
  },

  maintenance: {
    slug: 'maintenance',
    metaTitle: 'Website Maintenance & Support',
    metaDescription:
      'Ongoing website maintenance and support — security updates, performance monitoring, content updates, bug fixes, and priority support to keep your site healthy.',
    heroTitle: 'Maintenance that keeps your site fast, safe, and current',
    heroSubtitle:
      'A website is not finished at launch. We keep yours secure, updated, and running smoothly so it stays an asset instead of a liability.',
    summary:
      'Website maintenance is an ongoing service covering security updates, performance monitoring, content changes, and fixes to keep a site healthy after launch.',
    overview: [
      'Websites drift. Software needs updating, links break, content goes stale, and small performance issues creep in over time. Left alone, a site that launched well can slowly become slow, insecure, or inaccurate.',
      'Our maintenance and support keeps your site in good health: applying security updates, monitoring performance and uptime, making content changes when you need them, and fixing issues before they affect customers.',
      'This is a good fit whether we built your site or not. It gives you a reliable point of contact instead of scrambling for help when something goes wrong.',
    ],
    whoFor: [
      'Businesses without an in-house developer',
      'Owners who want someone to update content for them',
      'Teams that need a dependable contact when something breaks',
      'Sites where security and uptime genuinely matter',
    ],
    deliverables: [
      'Security updates and patching',
      'Performance and uptime monitoring',
      'Content updates on request',
      'Bug fixes and troubleshooting',
      'Regular status reports',
      'Priority support',
    ],
    process: commonProcess(
      'Onboarding & monitoring',
      'We review your current site, set up monitoring and backups, and establish a clear way for you to request changes — then keep things maintained on an ongoing basis.'
    ),
    faqs: [
      {
        q: 'Do you maintain sites you did not build?',
        a: 'Yes, in most cases. We start with a review of the existing site so we understand how it is built before taking on maintenance.',
      },
      {
        q: 'What does a maintenance plan typically include?',
        a: 'Security updates, monitoring, content edits, fixes, and reporting. The exact mix depends on the plan; specific pricing and inclusions are confirmed for your site during a consultation.',
      },
      {
        q: 'How quickly are issues handled?',
        a: 'Response times depend on the plan level and the severity of the issue. Priority support exists for the things that genuinely cannot wait.',
      },
    ],
    relatedIndustries: ['healthcare', 'legal', 'ecommerce'],
    relatedServices: ['web-dev', 'seo', 'industry-systems'],
    keywords: [
      'website maintenance',
      'website support',
      'website security updates',
      'website care plan',
      'ongoing web support',
    ],
  },

  'lead-integration': {
    slug: 'lead-integration',
    metaTitle: 'WhatsApp & Lead Integration',
    metaDescription:
      'Lead capture and WhatsApp integration — forms, WhatsApp Business, CRM connections, email automation, and conversion tracking that make it easy for people to get in touch.',
    heroTitle: 'Make it effortless for the right people to reach you',
    heroSubtitle:
      'We connect your website to WhatsApp, forms, and your CRM so enquiries are captured cleanly and followed up quickly.',
    summary:
      'Lead integration connects a website to WhatsApp, lead-capture forms, and CRM/email tools so enquiries are captured and followed up reliably.',
    overview: [
      'A website can attract the right visitor and still lose the lead — because the contact path is buried, the form is clunky, or enquiries land somewhere no one checks. Lead integration fixes the connection between interest and follow-up.',
      'We add clear, low-friction ways to get in touch: well-placed WhatsApp buttons, forms that only ask for what matters, and connections into the CRM or inbox your team actually uses. Where useful, we add simple email automation and conversion tracking so you can see which pages and channels produce enquiries.',
      'Especially in markets where WhatsApp is the default way people communicate, making that path obvious can meaningfully improve how many visitors turn into conversations.',
    ],
    whoFor: [
      'Service businesses that rely on enquiries and consultations',
      'Teams that use WhatsApp as a primary contact channel',
      'Businesses whose form submissions get lost or ignored',
      'Owners who want to know which pages generate leads',
    ],
    deliverables: [
      'WhatsApp Business integration',
      'Lead capture forms',
      'CRM connections',
      'Email automation',
      'Live chat tools',
      'Conversion tracking',
    ],
    process: commonProcess(
      'Integrate & track',
      'We add the contact paths, connect them to your CRM or inbox, and set up conversion tracking so you can see where enquiries come from.'
    ),
    faqs: [
      {
        q: 'Why focus on WhatsApp specifically?',
        a: 'In many markets WhatsApp is where people already communicate, so a clear WhatsApp path often feels lower-effort than filling out a form. We usually offer both so visitors can choose.',
      },
      {
        q: 'Can enquiries go straight into our CRM?',
        a: 'Yes. If your CRM supports integrations (most do), we can route form and lead data into it so nothing is manually re-entered.',
      },
      {
        q: 'Will I be able to see which pages generate leads?',
        a: 'With conversion tracking set up, yes — you can see which pages and channels lead to enquiries, which helps you invest in what works.',
      },
    ],
    relatedIndustries: ['restaurant', 'real-estate', 'legal', 'fitness'],
    relatedServices: ['web-dev', 'seo', 'ecommerce'],
    keywords: [
      'WhatsApp integration',
      'lead capture',
      'CRM integration',
      'lead generation website',
      'contact form integration',
      'conversion tracking',
    ],
  },

  seo: {
    slug: 'seo',
    metaTitle: 'SEO & Digital Marketing Services',
    metaDescription:
      'Practical SEO and digital marketing — on-page and technical SEO, Google Business Profile support, keyword research, and content planning that help the right people find you.',
    heroTitle: 'Help the right people find you at the right moment',
    heroSubtitle:
      'We focus on practical, honest SEO — the on-page, technical, and content work that steadily improves how easily customers discover your business.',
    summary:
      'SEO and digital marketing is the ongoing work of improving a site’s content, structure, and technical health so it ranks and gets found in search.',
    overview: [
      'Search is often where a customer’s journey begins. If your business does not appear when someone searches for what you offer, they find a competitor instead. SEO is the work of steadily earning that visibility.',
      'We take a practical approach: get the technical foundations right, structure content around what people actually search for, and strengthen local presence through Google Business Profile. There are no tricks or guarantees of overnight rankings — just consistent work that compounds.',
      'Increasingly, the same fundamentals also help your business show up in AI-powered answers, because clear structure and trustworthy content are what both search engines and answer engines reward.',
    ],
    whoFor: [
      'Local businesses that want to be found in their area',
      'Sites that get traffic but few of the right visitors',
      'Businesses launching a new site that need a search foundation',
      'Owners tired of vague SEO promises and want practical work',
    ],
    deliverables: [
      'On-page and technical SEO',
      'Google Business Profile support',
      'Keyword research',
      'Content planning',
      'Link building',
      'Performance reporting',
    ],
    process: [
      {
        title: 'Audit',
        detail:
          'We review your current visibility, technical health, and content to find the gaps and the fastest meaningful wins.',
      },
      {
        title: 'Foundations',
        detail:
          'We fix technical issues, improve site structure and metadata, and strengthen your local presence so search engines can understand and trust the site.',
      },
      {
        title: 'Content & authority',
        detail:
          'We plan content around real search intent and build authority over time, rather than chasing quick tactics that do not last.',
      },
      {
        title: 'Measure & refine',
        detail:
          'We report on what is actually moving — visibility, traffic quality, and enquiries — and adjust the plan based on results.',
      },
    ],
    faqs: [
      {
        q: 'How long does SEO take to show results?',
        a: 'SEO is a compounding effort, not an instant switch. Some improvements show within weeks, but meaningful ranking gains typically take a few months. Anyone promising instant top rankings is overselling.',
      },
      {
        q: 'Do you guarantee a number-one ranking?',
        a: 'No — and you should be cautious of anyone who does. Search engines do not sell or guarantee rankings. We focus on the work that reliably improves visibility over time.',
      },
      {
        q: 'Does SEO help with AI answers too?',
        a: 'Often, yes. Clear structure, accurate content, and strong technical health are exactly what AI answer engines look for when deciding what to cite, so good SEO tends to help there as well.',
      },
    ],
    relatedIndustries: ['restaurant', 'healthcare', 'real-estate', 'legal', 'fitness', 'ecommerce'],
    relatedServices: ['web-dev', 'lead-integration', 'maintenance'],
    keywords: [
      'SEO services',
      'local SEO',
      'technical SEO',
      'digital marketing',
      'Google Business Profile',
      'search engine optimization',
    ],
  },
}
