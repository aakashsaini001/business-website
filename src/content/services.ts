export type ServiceIcon =
  | "code"
  | "shopping"
  | "user"
  | "refresh"
  | "wrench";

export type Service = {
  slug: string;
  number: string;
  name: string;
  navLabel: string;
  icon: ServiceIcon;
  shortDescription: string;
  description: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  problemTitle: string;
  problem: string[];
  outcomes: string[];
  deliverables: string[];
  fitFor: string[];
  workflow: { title: string; body: string }[];
  relatedProjects: string[];
  pricingNote: string;
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "website-development",
    number: "01",
    name: "Website Design & Development",
    navLabel: "Website design & development",
    icon: "code",
    shortDescription:
      "Custom business websites designed around your offer, your audience and how you actually work.",
    description:
      "Strategy-led design and hand-built websites for businesses that have outgrown a template.",
    headline: "Websites built around",
    headlineAccent: "how your business works.",
    intro:
      "A good business website is more than a set of attractive pages. It has to explain what you do, help the right people find you and make the next step feel obvious. I design and build custom websites around that job — not around a theme's limitations.",
    problemTitle: "When a template stops being enough",
    problem: [
      "Many business websites start as a quick template project and slowly become the wrong shape for the company. The navigation no longer fits the services, every new section competes for attention, and updating basic content feels disproportionately difficult.",
      "The result is not just a design problem. It is a sales problem. Visitors cannot quickly understand the offer, the site fails to build trust, and the team has no clean way to improve it over time.",
      "I take a business-first approach: clarify the offer and audience, design an information structure that supports decisions, then build a fast, responsive site with a content system that can evolve.",
    ],
    outcomes: [
      "An offer that is understood within the first screen, not after three paragraphs of company history.",
      "A page structure that guides visitors from interest to enquiry without dead ends.",
      "A site you can update confidently without needing to rebuild a layout every time.",
    ],
    deliverables: [
      "Discovery workshop and requirements map",
      "Information architecture and page plan",
      "Custom visual direction and responsive UI design",
      "Hand-built front-end in a modern framework or CMS",
      "SEO foundations: semantic markup, metadata, sitemap and schema where appropriate",
      "Responsive QA, accessibility checks and launch support",
    ],
    fitFor: [
      "Service businesses that need a clearer sales asset",
      "Companies outgrowing an inflexible template",
      "New businesses that need to launch properly",
      "Teams that want a site they can maintain",
    ],
    workflow: [
      {
        title: "Clarify",
        body: "We align on the audience, offer, page structure and the one action the site exists to support.",
      },
      {
        title: "Design",
        body: "Wireframes establish the content order, then a small set of key screens sets the visual system.",
      },
      {
        title: "Build",
        body: "Pages are built as reusable components, with responsive behavior and content editing considered from the start.",
      },
      {
        title: "Launch",
        body: "Forms, metadata, redirects, analytics and cross-device behavior are checked before the site goes live.",
      },
    ],
    relatedProjects: ["jnj-tech", "onefamily-dental", "mtresin-arts-academy"],
    pricingNote:
      "Most custom business sites start in the Business Website range. The exact proposal depends on page count, content readiness, bespoke functionality and integrations.",
    faqs: [
      {
        question: "Can you work with my existing website content?",
        answer:
          "Yes. Existing content is a useful starting point. During discovery we identify what is current, what needs rewriting and what can be removed. I can help restructure copy, but a dedicated copywriter can be brought in for larger content projects.",
      },
      {
        question: "Will I be able to edit the website myself?",
        answer:
          "That depends on the build. When a CMS is part of the project, I set up reusable content types and document how to update them. For code-led sites, small content changes can be handled through a maintenance arrangement.",
      },
      {
        question: "Do you only build with one framework?",
        answer:
          "I choose the implementation based on the job. Next.js is a strong fit for performance and SEO-heavy marketing sites; WordPress or a commerce platform may be the better choice when a familiar editing workflow or existing ecosystem matters more.",
      },
      {
        question: "Can you improve the site without starting again?",
        answer:
          "Often, yes. A redesign audit will show whether the current site has a solid foundation worth retaining. If the structure or platform is the limiting factor, a phased rebuild may be more economical than repeatedly patching it.",
      },
    ],
    seo: {
      title: "Custom website design & development for growing businesses",
      description:
        "Strategy-led website design and development for businesses in India and worldwide. Clear structure, responsive build, SEO foundations and maintainable implementation.",
    },
  },
  {
    slug: "ecommerce-development",
    number: "02",
    name: "E-commerce Development",
    navLabel: "E-commerce development",
    icon: "shopping",
    shortDescription:
      "Online stores built around product discovery, confident decisions and a simple path to checkout.",
    description:
      "Product-led storefronts that make browsing easier, build purchase confidence and stay manageable as the catalogue grows.",
    headline: "Storefronts that make buying",
    headlineAccent: "feel straightforward.",
    intro:
      "An online store is a retail experience, not a catalogue with a payment button attached. Shoppers need to find the right product, understand it quickly and feel confident enough to buy. I design commerce experiences around those decisions, then build them on a platform that fits the business.",
    problemTitle: "When products are hard to understand, the cart stays empty",
    problem: [
      "Traffic is expensive. If a storefront buries product details, makes variants hard to compare or fills every screen with competing promotions, the problem is not the traffic — it is the shopping experience.",
      "The back end matters too. A store that is awkward to update or overloaded with unnecessary apps becomes fragile and expensive to operate. The best setup is usually the simplest one that supports the real requirements.",
      "I start with the catalogue, the customer's decision process and the operational constraints. Then I choose the commerce platform and design the storefront around them.",
    ],
    outcomes: [
      "Product pages organised around the questions shoppers ask before buying.",
      "A clearer route from category discovery to cart.",
      "A storefront and admin setup the team can operate without constant developer support.",
    ],
    deliverables: [
      "Catalogue and collection architecture",
      "Homepage, collection and product page design",
      "Responsive shopping and cart experience",
      "Platform setup such as Shopify or WooCommerce where appropriate",
      "Payment, shipping and tax configuration where required",
      "Analytics events, SEO foundations and launch QA",
    ],
    fitFor: [
      "New direct-to-consumer brands",
      "Catalogue businesses moving online",
      "Stores that need a clearer buying experience",
      "Brands refreshing an ageing storefront",
    ],
    workflow: [
      {
        title: "Map the catalogue",
        body: "We group products in the way customers think, identify the decisions they make and define required variants, pricing and content.",
      },
      {
        title: "Design the path",
        body: "Key collection and product templates are designed first, because they carry most of the commercial workload.",
      },
      {
        title: "Configure and build",
        body: "The platform, payments, shipping and storefront are configured together, with the admin workflow tested alongside.",
      },
      {
        title: "Test the purchase",
        body: "Cart, checkout, emails and mobile behavior are tested end to end before launch.",
      },
    ],
    relatedProjects: ["bybv", "urban-khaati"],
    pricingNote:
      "E-commerce projects start in the E-commerce Website range. Platform subscription fees, transaction fees, apps and third-party services are separate from design and development fees.",
    faqs: [
      {
        question: "Which e-commerce platform do you recommend?",
        answer:
          "Shopify is often the most practical choice for direct-to-consumer brands that want a reliable managed platform. WooCommerce can suit businesses already invested in WordPress. The decision should follow product count, operations, budget and who will manage the store.",
      },
      {
        question: "Do you handle payment gateway setup?",
        answer:
          "Yes, when it is part of the agreed scope. Configuration is completed inside the chosen platform using the business's own merchant account. I do not hold or process card details directly.",
      },
      {
        question: "Can you migrate an existing store?",
        answer:
          "A migration is assessed separately because products, customers, orders, URLs and SEO need careful handling. A migration plan covering redirects and cutover timing is created before any data moves.",
      },
      {
        question: "Do you provide ongoing store support?",
        answer:
          "Yes, through a separate maintenance arrangement. Platform updates, product uploads, app changes and seasonal campaign work can be scoped as a support plan or quoted individually.",
      },
    ],
    seo: {
      title: "E-commerce website development — storefronts built to sell",
      description:
        "E-commerce design and development for product brands. Clear product discovery, responsive shopping experiences, platform setup and purchase-oriented design.",
    },
  },
  {
    slug: "portfolio-websites",
    number: "03",
    name: "Portfolio Websites",
    navLabel: "Portfolio websites",
    icon: "user",
    shortDescription:
      "Distinctive portfolio sites for professionals, creatives and independents who need their work to speak clearly.",
    description:
      "Editorial, personality-driven portfolio websites that turn a body of work into a credible professional story.",
    headline: "Make your best work",
    headlineAccent: "impossible to ignore.",
    intro:
      "A portfolio has one central task: help the right person understand the quality and relevance of your work quickly. That requires curation as much as presentation. I help independent professionals shape their work into a site that feels considered, credible and genuinely theirs.",
    problemTitle: "A gallery is not a positioning strategy",
    problem: [
      "It is easy to make a portfolio that looks creative but says little about what you actually do. When every project receives equal weight, the visitor has to work out your specialism and relevance for themselves.",
      "This is especially true for freelancers and independent professionals. The website has to communicate capability, taste and reliability at the same time as showcasing the work.",
      "I approach portfolio sites as a narrative problem: decide what needs to be remembered, create a clear hierarchy around that, and let the work carry the visual weight.",
    ],
    outcomes: [
      "A tighter body of work presented with a point of view, not an undifferentiated archive.",
      "Case studies that explain the problem, decisions and outcome clearly enough to earn trust.",
      "A personal brand that feels distinctive without getting in the way of the work.",
    ],
    deliverables: [
      "Positioning and content inventory workshop",
      "Work curation and case-study structure",
      "Art direction and custom responsive design",
      "Project gallery and case-study templates",
      "About, services and contact pathways",
      "Performance, social metadata and launch setup",
    ],
    fitFor: [
      "Freelance designers, developers and consultants",
      "Photographers and creative professionals",
      "Independent studios",
      "Senior professionals building a personal brand",
    ],
    workflow: [
      {
        title: "Curate",
        body: "We decide which work makes the strongest argument and what each project is there to prove.",
      },
      {
        title: "Shape the story",
        body: "The structure is built around your positioning, with clear routes for different visitor intentions.",
      },
      {
        title: "Direct",
        body: "Typography, layout and motion are used to create a memorable identity without competing with the work.",
      },
      {
        title: "Publish",
        body: "Content, images, social previews and enquiry paths are prepared for a polished launch.",
      },
    ],
    relatedProjects: ["jnj-tech", "urban-khaati"],
    pricingNote:
      "Most portfolio projects sit in the Starter Website range, with additional case-study depth or custom interaction scoped as needed. See the pricing page for indicative starting points.",
    faqs: [
      {
        question: "How many projects should I show?",
        answer:
          "Usually fewer than you expect. Three to six strong projects with clear context will outperform a large, uneven archive. The right number depends on how much depth each project needs.",
      },
      {
        question: "Can you help with case-study writing?",
        answer:
          "Yes. I can help shape the narrative and ask the questions needed to bring out the problem, your contribution and the outcome. For long-form editorial work, a specialist copywriter may be a better fit.",
      },
      {
        question: "Do I need professional photography?",
        answer:
          "Good visuals make a meaningful difference. If existing images are strong enough, we can work with them. If not, the design can make the most of available assets while leaving room for better photography later.",
      },
      {
        question: "Can the site grow with my practice?",
        answer:
          "Yes. Reusable project templates and a manageable content model make it straightforward to add new work without redesigning the site each time.",
      },
    ],
    seo: {
      title: "Portfolio website design for freelancers & independent professionals",
      description:
        "Custom portfolio websites that present your best work with clarity and personality. Case-study structure, art direction, responsive development and SEO foundations.",
    },
  },
  {
    slug: "website-redesign",
    number: "04",
    name: "Website Redesign & Changes",
    navLabel: "Redesign & changes",
    icon: "refresh",
    shortDescription:
      "Focused improvements for sites that have outgrown their design, structure or speed — without unnecessary rebuilds.",
    description:
      "A measured approach to redesign: keep the equity, remove the friction and improve the experience where it matters.",
    headline: "Keep what works.",
    headlineAccent: "Fix what does not.",
    intro:
      "Not every website needs to be thrown away. A focused redesign can fix the navigation, refresh the visual language, improve mobile usability and preserve the pages that already earn traffic. The first step is an honest audit of what is helping and what is costing you.",
    problemTitle: "Redesign is a business decision, not a mood board",
    problem: [
      "Websites age in different ways. Sometimes the visual design is dated; sometimes the structure no longer reflects the services; sometimes the mobile experience is the real problem. Treating all three as the same issue leads to unnecessary rebuilds.",
      "There is also the risk of losing what works. Existing URLs, rankings, content and familiar user patterns have value. A good redesign protects that equity while improving the parts that are underperforming.",
      "I start with a diagnosis and a clear list of intended improvements. Then we decide what to evolve, what to rebuild and what to leave alone.",
    ],
    outcomes: [
      "A clearer diagnosis of why the current site is underperforming.",
      "A visual and structural refresh that preserves useful content and search equity.",
      "A prioritised plan so the work can be phased around budget and timing.",
    ],
    deliverables: [
      "UX and content audit of the current site",
      "Navigation and page-structure recommendations",
      "Visual refresh and responsive layout updates",
      "Targeted page redesigns or full-site redesign",
      "Content migration and redirect planning",
      "Performance, accessibility and SEO checks",
    ],
    fitFor: [
      "Established sites with a dated appearance",
      "Businesses whose services have outgrown the navigation",
      "Sites with mobile or performance issues",
      "Teams that need a phased improvement plan",
    ],
    workflow: [
      {
        title: "Diagnose",
        body: "Review analytics where available, audit key journeys and identify the structural, visual and technical causes of friction.",
      },
      {
        title: "Scope",
        body: "Agree what must change first, what can wait and what should be retained.",
      },
      {
        title: "Redesign",
        body: "Rework the information architecture and key templates before extending the visual system across the site.",
      },
      {
        title: "Migrate safely",
        body: "Redirects, metadata and content checks protect existing search visibility through launch.",
      },
    ],
    relatedProjects: ["guildford-dental-centre", "onefamily-dental"],
    pricingNote:
      "Smaller improvement projects can be quoted at a fixed fee. A full redesign is scoped after an audit, because page count, content migration and platform constraints materially affect the work.",
    faqs: [
      {
        question: "Do I need a full redesign?",
        answer:
          "Not necessarily. Sometimes a new navigation, improved service pages and a visual refresh solve the main problems. The audit is designed to answer that question before you commit to a larger build.",
      },
      {
        question: "Will I lose my search rankings?",
        answer:
          "A carefully planned migration protects existing visibility through preserved content, correct redirects and metadata checks. There is always some risk in a major change, which is why the audit and migration plan matter.",
      },
      {
        question: "Can you work with an existing design?",
        answer:
          "Yes. Some projects only need specific pages redesigned, responsive fixes or a new component set within an established brand. The scope can be as focused as the problem requires.",
      },
      {
        question: "Can the work be phased?",
        answer:
          "Yes. Phasing is often sensible for established businesses. We can prioritise high-impact templates first and roll out the rest without closing the site for a large launch.",
      },
    ],
    seo: {
      title: "Website redesign services — improve without starting again",
      description:
        "Website redesign and UI improvements for growing businesses. Audit-led fixes, responsive redesign, content migration and careful preservation of search visibility.",
    },
  },
  {
    slug: "website-maintenance",
    number: "05",
    name: "Website Maintenance & Support",
    navLabel: "Maintenance & support",
    icon: "wrench",
    shortDescription:
      "Dependable, transparent support for updates, fixes, checks and enhancements after launch.",
    description:
      "A practical support relationship for keeping a live website current, stable and improving over time.",
    headline: "A reliable pair of hands",
    headlineAccent: "after launch.",
    intro:
      "A website is not finished on launch day. Content changes, plugin updates, browser behaviour and small opportunities accumulate over time. Maintenance support gives you a clear route for those tasks — without needing to re-brief a full project every time.",
    problemTitle: "Small issues become expensive when nobody owns them",
    problem: [
      "Most maintenance problems are not dramatic. A form stops sending, a plugin creates a layout bug, an update breaks something quietly, or the team needs a new section and nobody is available to build it.",
      "Ignoring those tasks creates technical debt and loses trust. At the same time, not every business needs a large retainer. Support should be proportionate, clearly documented and easy to pause or adjust.",
      "I offer clear packages based on actual work and availability. Tasks outside the agreed scope are quoted separately, so there are no assumptions hidden in the arrangement.",
    ],
    outcomes: [
      "A dependable response path for routine changes and technical issues.",
      "Fewer avoidable surprises from neglected updates and checks.",
      "A website that can keep improving without another full redesign project.",
    ],
    deliverables: [
      "Content updates within the agreed scope",
      "Bug diagnosis and fixes for issues introduced by updates",
      "Dependency, plugin and security updates where supported",
      "Routine performance and form checks",
      "Backup verification where the platform supports it",
      "A regular summary of work completed and suggested next steps",
    ],
    fitFor: [
      "Businesses without an internal developer",
      "Sites that need regular content changes",
      "Teams that want a known support contact",
      "Owners who prefer small, predictable improvements",
    ],
    workflow: [
      {
        title: "Review",
        body: "We agree what the site needs, who has access and which platform or dependencies are involved.",
      },
      {
        title: "Plan",
        body: "Choose a support level based on expected update volume and response needs.",
      },
      {
        title: "Support",
        body: "Requests are triaged, completed within scope and tracked so both sides know what has been done.",
      },
      {
        title: "Improve",
        body: "Recurring issues and opportunities feed into a short quarterly improvement plan.",
      },
    ],
    relatedProjects: ["jnj-tech", "outback-rolling", "renewmitra"],
    pricingNote:
      "Maintenance is quoted as a monthly plan after a short review of the site and its platform. Emergency recovery, major feature work, new pages and third-party subscription costs are separate.",
    faqs: [
      {
        question: "What is included in a maintenance plan?",
        answer:
          "The exact inclusions depend on the plan. Typical tasks include content updates, routine updates, form checks, small bug fixes and a monthly work summary. Larger feature work, migrations and major redesigns are quoted separately.",
      },
      {
        question: "Do you maintain sites you did not build?",
        answer:
          "Often, yes. I review the platform, codebase and access setup first. If the site is unusually fragile or uses an unsupported stack, I will say so before taking on responsibility for it.",
      },
      {
        question: "How quickly are urgent issues handled?",
        answer:
          "Response times are agreed in the plan and depend on availability. Not every plan includes emergency cover. A site being down is treated differently from a content update, and the priority levels are written into the agreement.",
      },
      {
        question: "Are backups guaranteed?",
        answer:
          "Backups depend on the hosting and platform. Where automated backups exist, I verify them as part of the routine checks. I do not promise recovery from data that a platform does not retain, and backup ownership is confirmed during onboarding.",
      },
    ],
    seo: {
      title: "Website maintenance & support — reliable ongoing help",
      description:
        "Website maintenance and technical support for business sites. Content updates, bug fixes, routine checks and practical improvements with clear scope and pricing.",
    },
  },
];

export const homeServices = [
  services[0],
  services[1],
  services[2],
  services[3],
  services[4],
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
