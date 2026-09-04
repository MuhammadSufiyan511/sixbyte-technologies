export type ServicePreviewMeta = {
  tagline: string
  focus: string
  outcome: string
  format: string
  summary: string
  bullets: [string, string, string]
  accent: string
}

export const servicePreviewMeta: Record<string, ServicePreviewMeta> = {
  'web-dev': {
    tagline: 'Web engineering',
    focus: 'Performance first websites',
    outcome: 'Sharper first impressions',
    format: 'Custom builds',
    summary:
      'We shape public facing websites and web apps so they feel premium, load quickly, and guide people toward action.',
    bullets: ['Responsive layouts', 'SEO ready structure', 'Clean integrations'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  wordpress: {
    tagline: 'Content systems',
    focus: 'Custom WordPress sites',
    outcome: 'Faster content workflows',
    format: 'Theme based builds',
    summary:
      'We make WordPress feel lighter and more intentional with custom templates, cleaner structure, and better performance.',
    bullets: ['Custom theme work', 'CMS friendly templates', 'Performance tuning'],
    accent: 'from-slate-900 via-indigo-950 to-slate-800',
  },
  shopify: {
    tagline: 'Commerce systems',
    focus: 'Premium Shopify stores',
    outcome: 'Clearer product journeys',
    format: 'Custom storefronts',
    summary:
      'We tailor Shopify stores so they feel more polished, easier to navigate, and more ready to convert visitors into buyers.',
    bullets: ['Custom sections', 'Product storytelling', 'Checkout polish'],
    accent: 'from-slate-900 via-teal-950 to-slate-800',
  },
  'mobile-apps': {
    tagline: 'Mobile products',
    focus: 'iOS and Android apps',
    outcome: 'Native feel user journeys',
    format: 'Cross platform delivery',
    summary:
      'We design and build mobile experiences that feel clear, intuitive, and dependable on every screen size.',
    bullets: ['App store delivery', 'Offline aware UX', 'API connections'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  saas: {
    tagline: 'Product platforms',
    focus: 'Scalable SaaS systems',
    outcome: 'Products ready to grow',
    format: 'Multi tenant architecture',
    summary:
      'We build SaaS products with the structure, workflows, and foundations needed to support real growth.',
    bullets: ['Billing flows', 'Role based access', 'Admin dashboards'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  'pos-systems': {
    tagline: 'Commerce systems',
    focus: 'Reliable POS workflows',
    outcome: 'Faster day-to-day operations',
    format: 'Touch friendly interfaces',
    summary:
      'We build point of sale systems that make checkout, stock handling, and reporting easier for teams to run.',
    bullets: ['Inventory tracking', 'Payment integration', 'Sales reporting'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  'custom-software': {
    tagline: 'Custom software',
    focus: 'Business specific platforms',
    outcome: 'Tools that fit the workflow',
    format: 'Tailored architecture',
    summary:
      'We create software around the way your business actually operates instead of forcing you into a generic template.',
    bullets: ['Workflow automation', 'Admin tools', 'System integration'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  'ui-ux-design': {
    tagline: 'Design systems',
    focus: 'Modern UI and UX',
    outcome: 'Clear and confident journeys',
    format: 'Research led design',
    summary:
      'We design interfaces that feel thoughtful, structured, and easy to use while staying aligned with the brand.',
    bullets: ['Wireframes', 'Design systems', 'Developer ready handoff'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  'database-solutions': {
    tagline: 'Data foundations',
    focus: 'Secure database systems',
    outcome: 'Stable and scalable data layers',
    format: 'Optimized schema design',
    summary:
      'We help teams structure, secure, and scale the data layer so the product remains dependable as it grows.',
    bullets: ['Schema planning', 'Query tuning', 'Migration support'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  devops: {
    tagline: 'Delivery systems',
    focus: 'Cloud and deployment workflows',
    outcome: 'Safer releases and monitoring',
    format: 'Automation first operations',
    summary:
      'We set up infrastructure and deployment paths that keep releases clean, visible, and easier to maintain.',
    bullets: ['CI/CD pipelines', 'Monitoring', 'Infrastructure as code'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
  'ai-solutions': {
    tagline: 'AI workflows',
    focus: 'Automation and intelligence',
    outcome: 'Smarter product experiences',
    format: 'LLM integrations',
    summary:
      'We add AI features and workflows that help teams automate repetitive work and unlock better product capabilities.',
    bullets: ['AI features', 'Workflow automation', 'Model integrations'],
    accent: 'from-slate-900 via-slate-800 to-slate-700',
  },
}

export const serviceExplorerIds = [
  'web-dev',
  'wordpress',
  'shopify',
  'mobile-apps',
  'saas',
  'pos-systems',
  'custom-software',
  'ui-ux-design',
  'database-solutions',
  'devops',
  'ai-solutions',
] as const

export const homepageServiceIds = ['web-dev', 'wordpress', 'shopify', 'ai-solutions'] as const
