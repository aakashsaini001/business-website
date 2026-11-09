/**
 * REVIEW BEFORE LAUNCH: These are indicative starting prices, not confirmed
 * quotes. Update the amounts, inclusions and timelines in one place before the
 * site is published. Every price on the site reads from this file.
 */

export type PricingPackage = {
  slug: string;
  name: string;
  label: string;
  description: string;
  priceMin: number;
  priceMax: number;
  idealFor: string;
  scope: string[];
  deliverables: string[];
  seo: string;
  revisions: string;
  timeline: string;
  support: string;
  featured?: boolean;
  cta: string;
};

export const pricingPackages: PricingPackage[] = [
  {
    slug: "starter-website",
    name: "Starter Website",
    label: "A strong first presence",
    description:
      "A focused website for an independent professional or small business that needs to look credible and generate enquiries.",
    priceMin: 7999,
    priceMax: 9999,
    idealFor:
      "Freelancers, solo professionals and new small businesses with a clear offer.",
    scope: [
      "Up to 5 core pages",
      "Homepage and inner-page templates",
      "Contact page and enquiry form",
      "Mobile and tablet layouts",
    ],
    deliverables: [
      "Custom visual direction",
      "Responsive front-end build",
      "Basic technical SEO setup",
      "Contact form configuration",
      "Launch assistance",
    ],
    seo: "Page titles, meta descriptions, semantic structure, sitemap and indexing basics.",
    revisions: "Two structured revision rounds within the agreed scope.",
    timeline: "Indicative 2–3 weeks, depending on content and feedback.",
    support:
      "A launch handover is included. Ongoing updates are available through a separate maintenance plan.",
    cta: "Request a starter proposal",
  },
  {
    slug: "business-website",
    name: "Business Website",
    label: "The complete sales asset",
    description:
      "A larger, content-rich website for a growing business that needs to explain multiple services and support lead generation.",
    priceMin: 14999,
    priceMax: 19999,
    idealFor:
      "Established service businesses, B2B companies and teams with several offers.",
    scope: [
      "Up to 10 core pages",
      "Service or product page templates",
      "About, process and enquiry content",
      "Content management setup where appropriate",
    ],
    deliverables: [
      "Discovery and page planning",
      "Custom design system",
      "Responsive front-end build",
      "CMS or structured content setup",
      "On-page SEO foundations",
      "Analytics and launch setup",
    ],
    seo: "Keyword-aware page structure, metadata, internal linking, schema and performance checks.",
    revisions: "Three structured revision rounds, managed across design and build.",
    timeline: "Indicative 4–6 weeks, depending on scope and content readiness.",
    support:
      "A 30-day post-launch bug-fix window is included. Ongoing maintenance is optional.",
    featured: true,
    cta: "Request a business proposal",
  },
  {
    slug: "ecommerce-website",
    name: "E-commerce Website",
    label: "Built to sell online",
    description:
      "A commerce-focused storefront for a product brand that needs a clear, responsive buying experience.",
    priceMin: 29999,
    priceMax: 39999,
    idealFor:
      "Product brands launching online or replacing a storefront that is holding back growth.",
    scope: [
      "Storefront design and build",
      "Catalogue and collection architecture",
      "Product and collection templates",
      "Cart and checkout experience",
    ],
    deliverables: [
      "Commerce discovery and requirements",
      "Home, collection and product design",
      "Shopify or WooCommerce setup where suitable",
      "Payment and shipping configuration where required",
      "Commerce SEO foundations",
      "Launch testing and handover",
    ],
    seo: "Product and collection metadata, structured data, crawl controls, internal linking and speed checks.",
    revisions: "Three structured revision rounds, including storefront templates.",
    timeline: "Indicative 5–8 weeks, depending on catalogue size and integrations.",
    support:
      "Launch support is included. Product uploads, campaigns and ongoing operations can be covered by a separate plan.",
    cta: "Request an e-commerce proposal",
  },
];

export const pricingComparison = {
  columns: ["Starter", "Business", "E-commerce"],
  rows: [
    {
      feature: "Core pages",
      values: ["Up to 5", "Up to 10", "Storefront pages"],
    },
    {
      feature: "Custom responsive design",
      values: ["Yes", "Yes", "Yes"],
    },
    {
      feature: "Content management",
      values: ["Not included by default", "Where appropriate", "Commerce admin"],
    },
    {
      feature: "Service / product templates",
      values: ["Core pages", "Multiple templates", "Collections & products"],
    },
    {
      feature: "SEO foundations",
      values: ["Basic", "On-page setup", "Commerce SEO"],
    },
    {
      feature: "E-commerce functionality",
      values: ["Not included", "Not included", "Included"],
    },
    {
      feature: "Payment gateway setup",
      values: ["—", "—", "Where required"],
    },
    {
      feature: "Analytics setup",
      values: ["Optional add-on", "Included where appropriate", "Included"],
    },
    {
      feature: "Revision rounds",
      values: ["Two", "Three", "Three"],
    },
    {
      feature: "Post-launch support",
      values: ["Handover", "30-day bug-fix window", "Launch support"],
    },
  ],
};

export const pricingFaqs = [
  {
    question: "How do payments work?",
    answer:
      "Most projects are split into a deposit and milestone payments. The exact schedule is set out in the proposal before work begins. Final files, account ownership and launch are handled according to the agreed terms.",
  },
  {
    question: "Are the prices on this page final?",
    answer:
      "No. They are indicative starting points for planning. A fixed proposal is prepared after we discuss the scope, content, functionality and timeline. This prevents both of us from working from an unrealistic estimate.",
  },
  {
    question: "What is not included in the package price?",
    answer:
      "Third-party costs such as domains, hosting, commerce platform subscriptions, premium plugins, stock imagery, payment processing fees and specialist copywriting or photography are separate unless the proposal says otherwise.",
  },
  {
    question: "How many revisions are included?",
    answer:
      "Each package has a defined revision policy. Revisions refine the approved direction; a change of strategic direction or additional pages are treated as new scope. The difference is clarified before work begins.",
  },
  {
    question: "What happens after launch?",
    answer:
      "You receive the agreed handover, login details and any content guidance. Optional maintenance plans cover updates, fixes and small improvements. A larger feature request is quoted separately.",
  },
  {
    question: "Do you work with fixed budgets?",
    answer:
      "Yes, when the scope is clear. Where requirements are still evolving, we can phase the work so the first release delivers the essentials and later phases are planned once the business has more information.",
  },
];
