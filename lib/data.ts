import type { Service, Project, Testimonial, PricingPlan, BlogPost, Industry, NavLink } from '@/types'

export const navLinks: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Industries', href: '/industries' },
  { label: 'Blog', href: '/blog' },
]

export const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Custom Web Development & Next.js',
    description:
      'High performance custom website design and Next.js development engineered to rank on Google, load instantly, and turn visitors into paying clients.',
    icon: 'code',
    features: [
      'Custom website design & Next.js development',
      'Full stack web development & digital systems',
      'Core Web Vitals & technical SEO optimization',
      'API design, CMS, and database integrations',
      'Responsive, mobile ready user experience',
      'Conversion tracking and analytics setup',
    ],
  },
  {
    id: 'wordpress',
    title: 'Custom WordPress Development',
    description:
      'Fast, secure WordPress development tailored for businesses wanting clean architecture, effortless content updates, and high Google rankings.',
    icon: 'wordpress',
    features: [
      'Custom WordPress theme & plugin development',
      'Elementor & Gutenberg block workflows',
      'Speed optimization & bulletproof security',
      'SEO friendly content architecture',
      'Easy client editing experience',
      'Seamless migrations & ongoing maintenance',
    ],
  },
  {
    id: 'shopify',
    title: 'E-commerce & Shopify Development',
    description:
      'High converting e-commerce development on Shopify built to showcase your products, streamline checkout, and maximize sales.',
    icon: 'shopping-bag',
    features: [
      'Custom Shopify store development & design',
      'E-commerce funnel & checkout optimization',
      'Payment gateway & shipping integrations',
      'Product catalog & inventory setup',
      'Shopify app integration & store automation',
      'Speed & mobile conversion tuning',
    ],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    description:
      'Cross platform iOS and Android app development designed for intuitive navigation, fast performance, and reliable scale.',
    icon: 'smartphone',
    features: [
      'iOS & Android native & React Native apps',
      'Offline ready, smooth mobile UX',
      'Push notification & automated alerts',
      'App Store & Google Play deployment',
      'Secure authentication & backend APIs',
      'Ongoing app maintenance & updates',
    ],
  },
  {
    id: 'saas',
    title: 'SaaS Product Development',
    description:
      'Scalable cloud software and SaaS platform development with automated billing, user roles, and high security.',
    icon: 'layers',
    features: [
      'Multi tenant cloud software architecture',
      'Stripe & subscription billing setup',
      'Role based permissions & team workspaces',
      'Admin & customer analytics dashboards',
      'Automated API integrations',
      'Built for high scale and uptime',
    ],
  },
  {
    id: 'pos-systems',
    title: 'Retail & Restaurant POS Systems',
    description:
      'Fast, reliable Point of Sale software engineered for quick checkout, inventory sync, and multi location business operations.',
    icon: 'scan',
    features: [
      'Touch friendly rapid checkout interface',
      'Real time inventory & stock control',
      'Payment terminal & barcode integration',
      'Sales tax & financial reporting',
      'Multi branch management & staff permissions',
      'Cloud sync & offline hardware support',
    ],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Solutions',
    description:
      'Tailored custom software solutions built to automate internal business workflows, eliminate manual spreadsheet tasks, and drive efficiency.',
    icon: 'blocks',
    features: [
      'Workflow & process automation systems',
      'Custom web portals, CRMs, & admin panels',
      'Database migration & system integration',
      'Tailored business software development',
      'Third party API integrations',
      'Scalable architecture built for your growth',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Modern interfaces and user centered product experiences — from research to polished design systems.',
    icon: 'pen',
    features: [
      'User research and flows',
      'Wireframing and prototyping',
      'Interface and interaction design',
      'Reusable design systems',
      'Usability and accessibility review',
      'Developer ready handoff',
    ],
  },
  {
    id: 'database-solutions',
    title: 'Database Solutions',
    description:
      'Secure, optimized, and scalable data solutions — schema design, tuning, and migrations.',
    icon: 'database',
    features: [
      'Schema and data modeling',
      'SQL and NoSQL databases',
      'Query and performance optimization',
      'Data migration and integration',
      'Backups and recovery planning',
      'Security and access controls',
    ],
  },
  {
    id: 'devops',
    title: 'DevOps Services',
    description:
      'Cloud infrastructure, CI/CD, automation, and monitoring that keep releases stable and fast.',
    icon: 'workflow',
    features: [
      'Cloud infrastructure setup',
      'CI/CD pipeline automation',
      'Containerization and orchestration',
      'Monitoring, logging, and alerts',
      'Zero-downtime deployments',
      'Infrastructure as code',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description:
      'AI-powered applications, automation, and intelligent workflows integrated into your product.',
    icon: 'sparkles',
    features: [
      'AI-powered product features',
      'Chatbots and virtual assistants',
      'Workflow and document automation',
      'LLM and model API integration',
      'Computer vision solutions',
      'Data and analytics pipelines',
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'e-passtransfer',
    title: 'E Pass Transfer',
    description:
      'A business transfer platform presented as a polished client project with a streamlined interface and a more credible online presence.',
    industry: 'Logistics & Transfers',
    image: '/assets/mockups/epass.webp',
    tags: ['Client Work', 'Web App', 'Production'],
    link: 'https://www.e-passtransfer.de/',
  },
  {
    id: 'mira-ee',
    title: 'Mira EE',
    description:
      'A refined company website concept focused on trust, service clarity, and a cleaner presentation for prospective clients.',
    industry: 'Corporate Services',
    image: '/assets/mockups/miraee.webp',
    tags: ['Client Work', 'Corporate Site', 'UI/UX'],
    link: 'https://mira-ee.de/',
  },
  {
    id: 'iwizsols',
    title: 'IWIZSOLS',
    description:
      'A modern technology services website designed to feel sharper, more structured, and easier to trust at a glance.',
    industry: 'Technology Services',
    image: '/assets/mockups/iwizsols.webp',
    tags: ['Client Work', 'Next.js', 'Brand Presence'],
    link: 'https://www.iwizsols.com/',
  },
  {
    id: 'al-planner',
    title: 'AL Planner',
    description:
      'A structured planning platform presented as a client project with a more organized layout and a clearer workflow.',
    industry: 'Planning & Productivity',
    image: '/assets/mockups/aiinterioirplanner.webp',
    tags: ['Client Work', 'Planning', 'Web App'],
    link: 'https://al-planner.vercel.app',
  },
  {
    id: 'ai-powered-docs-analyst',
    title: 'AI Powered Docs Analyst',
    description:
      'An AI document analysis product designed to feel sharper, more useful, and easier to trust for business workflows.',
    industry: 'AI & Automation',
    image: '/assets/mockups/ai-powered-docs-analyst.webp',
    tags: ['Client Work', 'AI', 'Product UI'],
    link: 'https://ai-powered-docs-analyst.vercel.app/',
  },
  {
    id: 'sova',
    title: 'Sova',
    description:
      'A modern digital brand presence that focuses on clean hierarchy, stronger messaging, and a premium first impression.',
    industry: 'Corporate Services',
    image: '/assets/mockups/sova.webp',
    tags: ['Client Work', 'Corporate', 'Brand Site'],
    link: 'https://sova.my/',
  },
  {
    id: 'preppro-academy',
    title: 'PrepPro Academy',
    description:
      'An education-focused web experience designed to present courses, trust signals, and sign-up paths more clearly.',
    industry: 'Education',
    image: '/assets/mockups/PrepPro.webp',
    tags: ['Client Work', 'Academy', 'Lead Gen'],
    link: 'https://preppro.academy/',
  },
  {
    id: 'mustafa-ss',
    title: 'Mustafa SS Shop',
    description:
      'An e-commerce login and storefront experience shaped to feel more dependable, organized, and production-ready.',
    industry: 'E-commerce',
    image: '/assets/mockups/mustafa_store.webp',
    tags: ['Client Work', 'Commerce', 'Auth Flow'],
    link: 'https://www.mustafa-ss.shop/login',
  },
  {
    id: 'connect-circle',
    title: 'ConnectCircle - Social Communication Platform',
    description:
      'A secure real-time communication platform for private messages, group discussions, and cross-device collaboration.',
    industry: 'Social Platform',
    image: '/assets/mockups/connectcircle.webp',
    tags: ['Vue.js', 'Firebase', 'Realtime Chat'],
    link: 'https://connectcircle-dff2b.web.app/',
  },
  {
    id: 'boski-and-mens',
    title: "Boski and Men's - Pakistani Wear Storefront",
    description:
      'A premium menswear storefront that supports product discovery, collection browsing, and a smoother path to purchase.',
    industry: 'Fashion & Apparel',
    image: 'https://images.unsplash.com/photo-1720621292141-37dbc7852a3d?w=800&auto=format&fit=crop',
    tags: ['Fashion', 'E-commerce', 'Brand UI'],
    link: 'https://boskiandmens.com/',
  },
  {
    id: 'resto-booking',
    title: 'E2H Corian Fabrication',
    description:
      'A refined fabrication website presentation for E2H Corian with a premium visual style and a clearer path to inquiries.',
    industry: 'Fabrication & Interiors',
    image: '/assets/mockups/e2hcorian.webp',
    tags: ['Next.js', 'Brand Site', 'Lead Gen'],
    link: 'https://e2hcorian.com/',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Al-Rashidi',
    role: 'Owner',
    company: 'Saveur Restaurant',
    content:
      'SixByte Technologies helped us present our restaurant more professionally online. Reservations improved quickly, and the booking experience feels much smoother for our guests.',
    rating: 5,
    avatar: 'SR',
  },
  {
    id: 't2',
    name: 'Dr. Khalid Mansour',
    role: 'Clinic Director',
    company: 'MedCare Health Center',
    content:
      'The team understood our requirements, kept communication clear, and delivered a patient portal that both staff and patients actually enjoy using.',
    rating: 5,
    avatar: 'KM',
  },
  {
    id: 't3',
    name: 'Lina Tawfiq',
    role: 'CEO',
    company: 'PrimeHomes Realty',
    content:
      'Our old website was holding us back. SixByte Technologies rebuilt it with a much stronger structure and the difference in leads was immediate.',
    rating: 5,
    avatar: 'LT',
  },
  {
    id: 't4',
    name: 'Omar Nasser',
    role: 'Marketing Director',
    company: 'Luxe Fashion Co.',
    content:
      'The store looks premium, loads fast, and the checkout flow feels much easier. We saw a real improvement in conversion rate.',
    rating: 5,
    avatar: 'ON',
  },
  {
    id: 't5',
    name: 'Fatima Al-Hassan',
    role: 'Studio Lead',
    company: 'CoreFit Studio',
    content:
      'The project felt well organized from the start. Our bookings are now fully online and the site finally reflects the quality of the studio.',
    rating: 5,
    avatar: 'FA',
  },
  {
    id: 't6',
    name: 'James Wellington',
    role: 'Senior Partner',
    company: 'Sterling Law Associates',
    content:
      'The new site feels authoritative and easy to navigate. It is already generating better consultation requests than the old one.',
    rating: 5,
    avatar: 'JW',
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$999',
    period: 'one-time',
    description: 'A strong foundation for small businesses getting serious about their online presence.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Contact form integration',
      'Basic SEO setup',
      'Google Analytics',
      'WhatsApp button',
      '30 days post-launch support',
    ],
    highlighted: false,
    cta: 'Get Started',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '$2,499',
    period: 'one-time',
    description: 'For businesses ready to turn the website into a more reliable lead and sales engine.',
    features: [
      'Up to 15 pages',
      'Custom UI and UX design',
      'CMS integration',
      'Lead capture system',
      'Advanced SEO optimization',
      'WhatsApp and CRM integration',
      'Speed optimization',
      '90 days post-launch support',
      'Monthly analytics report',
    ],
    highlighted: true,
    cta: 'Most Popular - Get Started',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'project-based',
    description: 'For larger organizations with more complex requirements and integration needs.',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce or booking systems',
      'API and third-party integrations',
      'Multi-language support',
      'Advanced security and compliance',
      'Dedicated project manager',
      '12 months priority support',
      'Quarterly strategy reviews',
    ],
    highlighted: false,
    cta: 'Contact Us',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'why-website-speed-matters',
    title: 'Why Website Speed Is Still a Sales Advantage',
    excerpt:
      'A faster site does more than improve metrics. It changes how trustworthy and usable your brand feels.',
    date: 'December 12, 2024',
    dateISO: '2024-12-12',
    author: 'SixByte Team',
    category: 'Performance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    readTime: '5 min read',
    content: `Your website's loading speed is not just a technical detail. It shapes how trustworthy and professional your business feels, and it directly affects how many visitors stay long enough to become customers.

When a page is slow, visitors do not wait patiently. Google's research on mobile browsing has found that more than half of visits are abandoned when a page takes longer than about three seconds to load. Every extra second gives people a reason to leave, usually for a competitor whose site felt faster.

**Speed is a trust signal**

Before anyone reads a word, a fast, smooth-loading page signals that a business is credible and well run. A slow, stuttering one creates doubt at the worst possible moment: the first impression. That perception carries straight over into whether people trust you with an enquiry or a purchase.

**Core Web Vitals and search rankings**

Search engines treat page experience as a ranking factor, so slow sites can lose visibility as well as visitors. Google measures this through Core Web Vitals: Largest Contentful Paint (LCP), which tracks how quickly the main content appears; Interaction to Next Paint (INP), which measures how responsive the page feels when someone taps or clicks; and Cumulative Layout Shift (CLS), which measures unexpected movement as the page loads. Sites that score well tend to rank better and convert better.

**What actually makes a site fast**

Most speed problems are fixable. The biggest wins usually come from optimising images (modern formats like WebP or AVIF, correct sizing, and lazy loading), reducing and deferring unnecessary JavaScript, enabling caching, and serving assets from a content delivery network.

For businesses that are serious about growth, building on a modern, performance-focused stack makes a lasting difference. It is far easier to stay fast than to bolt speed on afterwards.

**The takeaway**

Speed is not a vanity metric. It is one of the clearest, most measurable ways to improve trust, search visibility, and conversions at the same time. If your site feels slow, it is almost certainly costing you enquiries.`,
  },
  {
    id: 'local-seo-guide',
    title: 'A Local SEO Guide for Businesses That Want More Visibility',
    excerpt:
      'A practical look at how local search can bring the right people to your business before they find a competitor.',
    date: 'November 28, 2024',
    dateISO: '2024-11-28',
    author: 'SixByte Team',
    category: 'SEO',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
    readTime: '8 min read',
    content: `For a business that serves a specific area, local search is often the single most valuable source of new customers. When someone searches for what you offer "near me", you want to be the option they find first, before they ever reach a competitor.

**What local SEO actually is**

Local SEO is the work of helping your business appear in local search results and map listings for the things you offer in the places you serve. It combines your website, your Google Business Profile, and signals of trust from around the web.

**Start with your Google Business Profile**

For most local businesses, a complete and accurate Google Business Profile is the highest-impact starting point. Fill in your categories, hours, service area, and contact details, add real photos, and keep everything consistent with your website. Reviews matter here too. Responding to them, positively or otherwise, signals an active, trustworthy business.

**Make your website locally relevant**

Your site should make it obvious who you serve and where. Clear service pages, your location and service areas in plain text, and content that answers the questions local customers actually ask all help search engines connect you to the right searches. Structured data, the markup that describes your business to search engines, reinforces this.

**Consistency builds trust**

Make sure your business name, address, and phone number are consistent everywhere they appear online. Conflicting details make it harder for search engines to trust and rank you.

**It compounds over time**

Local SEO is not an overnight switch. It is steady work that compounds. And because the same fundamentals, clear structure, accurate information, and genuine trust signals, increasingly influence AI-powered answers too, the effort pays off across both traditional search and newer answer engines.`,
  },
  {
    id: 'whatsapp-business-website',
    title: 'How to Turn Your Website Into a Better WhatsApp Lead Channel',
    excerpt:
      'WhatsApp can be a strong contact point when it is integrated with a clear message and simple flow.',
    date: 'November 10, 2024',
    dateISO: '2024-11-10',
    author: 'SixByte Team',
    category: 'Lead Generation',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop',
    readTime: '6 min read',
    content: `For many businesses, especially in regions where WhatsApp is the default way people communicate, it can be one of the most effective ways to turn website visitors into real conversations. The key is integrating it thoughtfully, not just pasting a link.

**Why WhatsApp converts**

A contact form asks someone to compose a message and wait, with no idea when they will hear back. WhatsApp feels immediate and familiar. For a hesitant visitor, "message us on WhatsApp" is often a lower-effort step than filling out a form, which means more people actually take it.

**Place it where intent is highest**

A floating WhatsApp button is useful, but the biggest gains come from placing prompts where a visitor is already close to acting: on a service page, next to pricing, or at the end of a case study. Match the message to the context so the conversation starts with purpose.

**Pre-fill the first message**

You can pre-fill the opening message so the visitor does not have to think about what to say, for example, "Hi, I'd like to ask about your website packages." This removes friction and gives you useful context about where the enquiry came from.

**Connect it to how you follow up**

WhatsApp works best when it fits into a real follow-up process. Decide who responds, how quickly, and how enquiries are tracked, so leads do not slip through. For higher volumes, WhatsApp Business tools and CRM connections help keep things organised.

**Keep the alternative open**

Not everyone prefers to chat. Always offer a clear alternative, a form, an email, or a phone number, so you never lose the visitor who would rather reach you another way.`,
  },
  {
    id: 'website-cost-guide',
    title: 'How Much Should a Business Website Cost?',
    excerpt:
      'A clear look at what actually drives the price of a website, so you can budget with confidence instead of guessing.',
    date: 'January 15, 2025',
    dateISO: '2025-01-15',
    author: 'SixByte Team',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
    readTime: '6 min read',
    content: `"How much does a website cost?" is one of the first questions business owners ask, and the honest answer is: it depends on what the website needs to do. But that does not mean the pricing has to be a mystery. This guide explains what actually drives cost so you can budget with confidence.

**What you're really paying for**

A website's cost reflects three things: how much custom design and development it needs, how many pages and features it includes, and how much ongoing support you want afterwards. A simple, polished marketing site is very different from a store with hundreds of products or a custom booking system, and the price reflects that difference in scope, not guesswork.

**Typical ranges**

To make this concrete, our own packages are published openly. A Starter site (up to five pages, responsive design, basic SEO, and contact and WhatsApp integration) starts at $999. A Growth project (up to fifteen pages, custom design, a CMS, lead capture, and deeper SEO) is $2,499. Enterprise work, custom applications, e-commerce or booking systems, and integrations, is quoted per project. Maintenance plans are separate, starting from $99 per month.

**What makes the price go up**

Custom design rather than a template, custom functionality like booking or portals, e-commerce with many products, integrations with other tools, multi-language support, and ongoing content or support all add to the investment. None of these are extras for their own sake. Each one exists to do a job for your business.

**Cheaper is not always cheaper**

A very low-cost site that loads slowly, is hard to update, or has to be rebuilt in a year is rarely a bargain. The better question is not "what is the cheapest site?" but "what is the smallest investment that will actually achieve my goal?", and then building that well.

**How to budget sensibly**

Start from the outcome you want, not a page count. A good consultation should give you a clear, itemised sense of scope and cost with no pressure, so you can decide what is worth doing now and what can wait.`,
  },
  {
    id: 'website-builder-vs-custom',
    title: 'Website Builder vs Custom Website: Which Is Right for You?',
    excerpt:
      'DIY builders and custom builds both have their place. Here is how to choose based on your goals, budget, and growth.',
    date: 'February 10, 2025',
    dateISO: '2025-02-10',
    author: 'SixByte Team',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1481487196290-c152efe083f5?w=800&auto=format&fit=crop',
    readTime: '7 min read',
    content: `If you are getting a website made, one of the first decisions is whether to use a do-it-yourself website builder or have a custom site built for you. Both are valid. The right choice depends on your goals, budget, and how much you plan to grow.

**What a website builder gives you**

Builders like Wix and Squarespace let you assemble a site yourself from templates, usually for a low monthly fee. They are quick to start, require no developer, and can be perfectly fine for a simple presence, such as a single-location business that just needs to be findable.

**Where builders start to hurt**

The trade-offs show up as you grow. Templates constrain how your brand looks and how the site is structured. Performance and SEO are often harder to control. Custom features can be impossible or clumsy. And you are renting the platform, so if you stop paying, the site goes away. Many businesses eventually hit a ceiling and have to rebuild.

**What a custom website gives you**

A custom site is built around your specific business: your brand, your structure, the exact features and integrations you need, and performance tuned from the start. You own the code and assets outright, and the site is built to grow rather than to fit a template.

**The honest trade-off**

Custom work costs more up front and takes longer than dragging blocks around a builder. In return you get control, performance, ownership, and room to scale. The question is whether those things matter for where your business is going.

**A simple way to decide**

If you need a basic presence today and cost is the only real constraint, a builder may be enough to start. If your website is central to how you win customers, or you know you will need custom features, strong performance, or full ownership, a custom build is usually the better long-term investment. If you are unsure, a short consultation can help you weigh it against your actual goals.`,
  },
  {
    id: 'choosing-ecommerce-platform',
    title: 'Shopify vs WooCommerce vs Custom: Choosing an E-commerce Platform',
    excerpt:
      'The three most common ways to build an online store, and how to tell which one fits your business.',
    date: 'March 5, 2025',
    dateISO: '2025-03-05',
    author: 'SixByte Team',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    readTime: '7 min read',
    content: `Choosing the right platform is one of the most important decisions when building an online store. The three most common routes, Shopify, WooCommerce, and a fully custom build, each suit different businesses. Here is how to think about the trade-offs.

**Shopify: fast to launch, low maintenance**

Shopify is a hosted platform, which means it handles hosting, security, and updates for you. It is quick to set up, reliable, and has a large ecosystem of apps and payment options. The trade-offs are a monthly fee, transaction considerations depending on your payment setup, and less control over anything the platform does not natively support. It suits businesses that want to sell quickly without managing infrastructure.

**WooCommerce: flexibility on WordPress**

WooCommerce turns a WordPress site into a store. It is a strong choice if you already use WordPress or want more control over design and functionality, and it avoids platform lock-in. In return, you are responsible for hosting, security, and updates, either yourself or through a maintenance partner. It suits businesses that value flexibility and content alongside commerce.

**Custom builds: for unusual needs**

A custom store makes sense when your product, pricing, or workflow does not fit the standard patterns: complex configurations, unusual integrations, or a very specific customer experience. It offers the most control and the best-fit result, at a higher upfront cost and with a longer timeline. It is the right call when the store is central to the business and off-the-shelf tools genuinely cannot do the job.

**How to choose**

Start with your catalog size, your budget, how much control you need, and who will maintain the store. There is no universally best platform, only the one that fits your business. If you are weighing it up, we are happy to talk through the options honestly rather than pushing a single answer.`,
  },
]

export const industries: Industry[] = [
  {
    id: 'restaurant',
    name: 'Restaurant & Hospitality',
    description: 'Digital experiences that help guests browse, trust, and book more easily.',
    icon: 'restaurant',
    solutions: [
      'Online reservation systems',
      'Digital menus with QR codes',
      'Food ordering integration',
      'Review management',
      'Event booking pages',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Clinics',
    description: 'Patient-focused platforms that simplify access and make the practice feel dependable.',
    icon: 'healthcare',
    solutions: [
      'Appointment scheduling portals',
      'Patient intake forms',
      'Telehealth integrations',
      'Compliance-friendly design',
      'Doctor and service profiles',
    ],
  },
  {
    id: 'real-estate',
    name: 'Real Estate',
    description: 'Property platforms that create stronger trust and better lead quality.',
    icon: 'real-estate',
    solutions: ['MLS/IDX integration', 'Virtual tour embedding', 'Mortgage calculators', 'Lead capture forms', 'Agent profiles'],
  },
  {
    id: 'legal',
    name: 'Legal Services',
    description: 'Authority-building websites that make the firm feel credible and easy to contact.',
    icon: 'legal',
    solutions: ['Practice area pages', 'Consultation forms', 'Attorney profiles', 'Client testimonials', 'Resources and blog content'],
  },
  {
    id: 'fitness',
    name: 'Health & Fitness',
    description: 'A clearer digital presence for studios and trainers that want to grow membership.',
    icon: 'fitness',
    solutions: ['Class scheduling systems', 'Membership management', 'Trainer profiles', 'On-demand video library', 'Progress tracking portals'],
  },
  {
    id: 'ecommerce',
    name: 'Retail & E-commerce',
    description: 'Revenue-focused storefronts designed to make shopping feel seamless.',
    icon: 'ecommerce',
    solutions: ['Product catalog systems', 'Checkout optimization', 'Inventory management', 'Upsell and cross-sell tools', 'Loyalty integrations'],
  },
]
