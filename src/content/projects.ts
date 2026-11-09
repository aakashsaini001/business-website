export type ProjectFilter =
  | "business-websites"
  | "corporate-websites"
  | "ecommerce"
  | "education"
  | "healthcare"
  | "software";

export type Project = {
  slug: string;
  order: string;
  name: string;
  shortName: string;
  domain: string;
  liveUrl: string;
  category: string;
  filter: ProjectFilter;
  discipline: string;
  summary: string;
  cardSummary: string;
  result: {
    headline: string;
    detail: string;
  };
  intro: string;
  theme: {
    background: string;
    foreground: string;
    accent: string;
    soft: string;
  };
  images: {
    hero: string;
    section: string;
    mobile: string;
    heroAlt: string;
    sectionAlt: string;
    mobileAlt: string;
  };
  atAGlance: { label: string; value: string }[];
  objectives: string[];
  context: string[];
  designNotes: { title: string; body: string }[];
  features: string[];
  /**
   * REVIEW BEFORE LAUNCH: Confirm the precise deliverables against project
   * records. These fields intentionally describe the website experience rather
   * than claiming specific third-party integrations.
   */
  scope: string[];
  scopeFootnote: string;
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
  };
};

export const projects: Project[] = [
  {
    slug: "jnj-tech",
    order: "01",
    name: "JNJ Tech",
    shortName: "JNJ",
    domain: "jnjtech.com.au",
    liveUrl: "https://jnjtech.com.au/",
    category: "Telecommunications & infrastructure",
    filter: "corporate-websites",
    discipline: "Corporate website",
    summary:
      "A capability-led website for a Perth telecommunications civil engineering contractor working with carriers, government and enterprise clients.",
    cardSummary:
      "Making a technical, multi-service contractor easy to understand — and easy to contact.",
    result: {
      headline: "A complex offer made legible.",
      detail:
        "Seven capability areas organised into clear service pages, each with a direct route to a relevant quote enquiry.",
    },
    intro:
      "JNJ Tech delivers telecommunications civil engineering across Western Australia. The website has to translate a complex, safety-critical service offer into a clear business case for carriers, infrastructure providers, government agencies and enterprise buyers.",
    theme: {
      background: "#e8eef5",
      foreground: "#0a1f3c",
      accent: "#43c347",
      soft: "#d4e2f0",
    },
    images: {
      hero: "/projects/jnj-tech-hero.webp",
      section: "/projects/jnj-tech-section.webp",
      mobile: "/projects/jnj-tech-mobile.webp",
      heroAlt:
        "JNJ Tech website homepage showing telecommunications engineering messaging and a quote request form",
      sectionAlt:
        "JNJ Tech website services section with service cards and capability statement call to action",
      mobileAlt: "Responsive mobile view of the JNJ Tech website",
    },
    atAGlance: [
      { label: "Sector", value: "Telecommunications infrastructure" },
      { label: "Based in", value: "Malaga, Perth WA" },
      { label: "Website type", value: "Corporate service website" },
      { label: "Primary action", value: "Request a quote" },
    ],
    objectives: [
      "Make a broad, technical service catalogue understandable at a glance.",
      "Surface the operational proof buyers look for: equipment, fleet and capability documentation.",
      "Give each service a focused route to a relevant enquiry.",
      "Create a credible digital presence that can sit alongside enterprise and government tenders.",
    ],
    context: [
      "JNJ Tech works across network planning, civil construction, fibre and copper installation, equipment integration, project management and maintenance. That breadth is a strength, but it creates a communication problem: a first-time buyer needs to understand where the company fits before they can evaluate it.",
      "The website addresses this by grouping capability into clearly named services and supporting each one with plain-language detail. It also makes operational assets visible through dedicated equipment and fleet sections, giving procurement teams more to assess than marketing copy alone.",
    ],
    designNotes: [
      {
        title: "A service architecture built for non-linear buyers",
        body: "Different buyers arrive with different questions. The site gives services, equipment, fleet, gallery and capability information their own destinations, so procurement teams, site managers and project leads can each follow the path that matters to them.",
      },
      {
        title: "Technical credibility without the visual cliché",
        body: "A deep navy and signal-green palette borrows from network infrastructure without becoming a generic technology template. Real project photography, equipment detail and operating context keep the experience grounded in the physical work.",
      },
      {
        title: "The quote form is part of the story",
        body: "A fast-response quote panel sits alongside the main proposition instead of being buried on the contact page. Asking for service, location and scope helps start a more useful conversation from the first message.",
      },
    ],
    features: [
      "End-to-end service presentation across seven capability areas",
      "Downloadable capability statement",
      "Dedicated equipment and fleet directories",
      "Request-a-quote forms designed around project scope",
      "Operational contact details and service coverage",
      "Responsive navigation for field and office visitors",
    ],
    scope: [
      "Corporate website design direction",
      "Service information architecture",
      "Responsive page implementation",
      "Quote and contact enquiry pathways",
      "Content structure for equipment and fleet pages",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. Third-party tools and specialist integrations shown on the live site are not claimed here unless recorded in the final project brief.",
    relatedSlugs: ["urban-khaati", "bybv", "guildford-dental-centre"],
    seo: {
      title: "JNJ Tech case study — telecommunications website design",
      description:
        "How the JNJ Tech corporate website organises a complex telecommunications service offer, surfaces operational credibility and supports quote enquiries.",
    },
  },
  {
    slug: "urban-khaati",
    order: "02",
    name: "Urban Khaati",
    shortName: "Khaati",
    domain: "urbankhaati.com",
    liveUrl: "https://www.urbankhaati.com/",
    category: "Modular furniture & interiors",
    filter: "business-websites",
    discipline: "Brand & catalogue website",
    summary:
      "A warm, product-led website for a Jaipur modular furniture manufacturer, built around category discovery and consultation enquiries.",
    cardSummary:
      "Turning a broad modular furniture catalogue into a clear, aspirational path to enquiry.",
    result: {
      headline: "A catalogue that leads to a conversation.",
      detail:
        "Four product families tied to repeated quote pathways built around how made-to-order furniture is actually bought.",
    },
    intro:
      "Urban Khaati designs and manufactures modular furniture for homes, kitchens and workspaces. The website needs to make a large, customisable product range feel both tangible and easy to navigate — while converting interest into a conversation about the customer's space.",
    theme: {
      background: "#f7eee4",
      foreground: "#3a1a0c",
      accent: "#e85a2a",
      soft: "#f3d7c3",
    },
    images: {
      hero: "/projects/urban-khaati-hero.webp",
      section: "/projects/urban-khaati-section.webp",
      mobile: "/projects/urban-khaati-mobile.webp",
      heroAlt:
        "Urban Khaati website homepage with warm furniture photography and modular furniture messaging",
      sectionAlt:
        "Urban Khaati website showing furniture categories, product photography and a quote call to action",
      mobileAlt: "Responsive mobile view of the Urban Khaati website",
    },
    atAGlance: [
      { label: "Sector", value: "Modular furniture & interiors" },
      { label: "Based in", value: "Jaipur, India" },
      { label: "Website type", value: "Brand & product catalogue" },
      { label: "Primary action", value: "Request a quote" },
    ],
    objectives: [
      "Present four distinct product families without losing the brand's warm, human character.",
      "Help buyers move from inspiration to a relevant range quickly.",
      "Explain customisation and made-to-fit credentials with confidence.",
      "Create a consistent route to a quote across the browsing experience.",
    ],
    context: [
      "Modular furniture is a considered purchase. Buyers need to imagine the product in their own space, understand what can be customised and feel confident that the manufacturer can deliver. A catalogue alone is not enough; the experience has to provide context and reassurance.",
      "The site balances large, aspirational interiors with practical category paths. Home furniture, kitchen solutions, office furniture and customised modular furniture each have a distinct entry point, while project imagery and material detail carry the sense of craft.",
    ],
    designNotes: [
      {
        title: "Product families before product lists",
        body: "The category structure starts with rooms and use cases rather than an undifferentiated catalogue. That gives a first-time visitor a useful mental model before they begin exploring individual pieces.",
      },
      {
        title: "Warmth as a strategic choice",
        body: "Soft neutrals, generous photography and a rust-orange accent make the brand feel domestic, tactile and premium. The visual language stays consistent from the landing experience through to category content.",
      },
      {
        title: "Enquiry is never far away",
        body: "Quote actions appear at multiple points in the journey. For a made-to-order business, reducing the gap between an interesting product and a conversation with the team is central to the site's job.",
      },
    ],
    features: [
      "Dedicated product family navigation",
      "Editorial home and category storytelling",
      "Custom furniture and made-to-fit positioning",
      "Quote request pathways throughout the journey",
      "Project imagery, material and production context",
      "Mobile-first category browsing",
    ],
    scope: [
      "Brand-led website design",
      "Product category architecture",
      "Responsive catalogue presentation",
      "Quote enquiry pathways",
      "Content presentation for manufacturing credentials",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. Commerce, stock, logistics and third-party integrations are not claimed unless they were part of the documented project brief.",
    relatedSlugs: ["jnj-tech", "bybv", "guildford-dental-centre"],
    seo: {
      title: "Urban Khaati case study — furniture website design",
      description:
        "A case study of the Urban Khaati website: product-led design, modular furniture category discovery and enquiry-focused journeys for a Jaipur manufacturer.",
    },
  },
  {
    slug: "bybv",
    order: "03",
    name: "BYBV",
    shortName: "BYBV",
    domain: "bybv.in",
    liveUrl: "https://bybv.in/",
    category: "Nutrition & e-commerce",
    filter: "ecommerce",
    discipline: "E-commerce storefront",
    summary:
      "A high-energy e-commerce storefront for a nutritional supplement brand, designed around product discovery, offers and direct purchase.",
    cardSummary:
      "A commerce-first experience that gives a fitness brand room to perform without losing clarity.",
    result: {
      headline: "Campaign energy, commerce clarity.",
      detail:
        "One consistent scanning pattern across variants, pricing, ratings and add-to-cart actions — at both campaign and product level.",
    },
    intro:
      "BYBV sells nutritional supplements in a crowded, attention-driven category. The storefront has to turn brand energy into confident product discovery and keep the route from campaign message to cart as short as possible.",
    theme: {
      background: "#edf7e8",
      foreground: "#102b13",
      accent: "#39b62c",
      soft: "#dcefd5",
    },
    images: {
      hero: "/projects/bybv-hero.webp",
      section: "/projects/bybv-section.webp",
      mobile: "/projects/bybv-mobile.webp",
      heroAlt:
        "BYBV e-commerce homepage with supplement product range, fitness imagery and a shop call to action",
      sectionAlt:
        "BYBV product listing with supplement product cards, pricing and add-to-cart actions",
      mobileAlt: "Responsive mobile storefront view of the BYBV website",
    },
    atAGlance: [
      { label: "Sector", value: "Nutritional supplements" },
      { label: "Based in", value: "Jaipur, India" },
      { label: "Website type", value: "Direct-to-consumer storefront" },
      { label: "Primary action", value: "Shop products" },
    ],
    objectives: [
      "Create a storefront that reflects the energy of the fitness category.",
      "Make the hero product range and current offers immediately visible.",
      "Support fast scanning of product variants, prices and ratings.",
      "Keep shopping, account and support actions easy to find on every screen.",
    ],
    context: [
      "Supplement shoppers compare flavours, formats, prices and reviews quickly. A storefront has to communicate the range before it asks for attention, and then make the next step feel obvious. Campaign creativity matters, but it cannot replace clarity in the buying journey.",
      "BYBV uses a strong green brand world, fitness imagery and promotional typography to create energy at the top of the page. Product cards then bring the experience back to practical details: pack size, flavour, offer price, rating and an add-to-cart action.",
    ],
    designNotes: [
      {
        title: "Merchandising with a clear hierarchy",
        body: "The homepage moves from a campaign-led hero to best-selling products, social proof and brand education. Each section has a different job, which keeps a visually loud category from becoming visually confusing.",
      },
      {
        title: "Product cards do the heavy lifting",
        body: "Discount badges, pack imagery, review counts and purchase actions are grouped into a consistent scanning pattern. The same component language can support campaigns without forcing shoppers to relearn the interface.",
      },
      {
        title: "Energy with guardrails",
        body: "The richer palette and athletic photography create category relevance, while the utility bar, search, account and cart controls anchor the page with familiar commerce behaviour.",
      },
    ],
    features: [
      "Campaign-led e-commerce homepage",
      "Product listings with pricing, offers and ratings",
      "Search, account and cart access",
      "Product category and collection navigation",
      "Customer review and social proof presentation",
      "Responsive shopping layouts",
    ],
    scope: [
      "E-commerce storefront design direction",
      "Product discovery and listing layout",
      "Responsive merchandising components",
      "Campaign and promotional page presentation",
      "Cart entry points and shopping navigation",
    ],
    scopeFootnote:
      "Payment gateways, inventory systems, fulfilment tools and other backend integrations visible on the live site are third-party services and are not claimed as custom-built work in this case study.",
    relatedSlugs: ["urban-khaati", "jnj-tech", "guildford-dental-centre"],
    seo: {
      title: "BYBV case study — supplements e-commerce design",
      description:
        "A case study of the BYBV nutritional supplements storefront, covering product discovery, offer-led merchandising and a clear direct-to-consumer buying journey.",
    },
  },
  {
    slug: "guildford-dental-centre",
    order: "04",
    name: "Guildford Dental Centre",
    shortName: "Guildford",
    domain: "guildforddentalcentre.com.au",
    liveUrl: "https://guildforddentalcentre.com.au/",
    category: "Healthcare & dental",
    filter: "healthcare",
    discipline: "Healthcare website",
    summary:
      "A reassuring, service-rich website for a South Guildford dental clinic, focused on patient confidence and appointment enquiries.",
    cardSummary:
      "A calm patient journey for a family dental practice — from first question to booked appointment.",
    result: {
      headline: "A calmer route to an appointment.",
      detail:
        "Treatment discovery and booking actions placed at every decision point, so anxious or time-sensitive patients can act quickly.",
    },
    intro:
      "Guildford Dental Centre is a family dental practice in South Guildford, Western Australia. Its website has to reduce anxiety, explain a broad treatment range and make the next step — getting in touch or booking — feel straightforward.",
    theme: {
      background: "#f8eff5",
      foreground: "#3d1039",
      accent: "#8e2b7a",
      soft: "#f1d9e9",
    },
    images: {
      hero: "/projects/guildford-dental-hero.webp",
      section: "/projects/guildford-dental-section.webp",
      mobile: "/projects/guildford-dental-mobile.webp",
      heroAlt:
        "Guildford Dental Centre homepage with dental team photography and a book-online call to action",
      sectionAlt:
        "Guildford Dental Centre patient-focused about section and dental service categories",
      mobileAlt: "Responsive mobile view of the Guildford Dental Centre website",
    },
    atAGlance: [
      { label: "Sector", value: "Healthcare & dental" },
      { label: "Based in", value: "South Guildford, WA" },
      { label: "Website type", value: "Clinic & patient information" },
      { label: "Primary action", value: "Book an appointment" },
    ],
    objectives: [
      "Help new patients understand the clinic and its care philosophy quickly.",
      "Make a broad treatment menu discoverable without overwhelming visitors.",
      "Support anxious and time-sensitive patients with clear contact paths.",
      "Give the practice a professional local presence built around trust.",
    ],
    context: [
      "Dental websites serve several audiences at once: new patients comparing local practices, existing patients looking for practical information, and people in discomfort who need to act quickly. The experience has to be warm without being vague, and thorough without making people hunt.",
      "Guildford Dental Centre puts people first. Team photography, plain-language service descriptions and visible appointment actions create a reassuring first impression. The detailed service catalogue gives patients the information they need before making a choice.",
    ],
    designNotes: [
      {
        title: "Trust begins with faces",
        body: "The team and clinic are shown prominently rather than hidden behind stock imagery. For a healthcare purchase, the people delivering care are part of the service promise, not decorative content.",
      },
      {
        title: "A calm path through a complex service menu",
        body: "General, cosmetic, children's and emergency dentistry are organised into understandable groups. Patients can find the area that matches their concern and then explore treatment detail at their own pace.",
      },
      {
        title: "Appointment actions at every decision point",
        body: "Booking and phone actions appear in the header, hero and service sections. The site respects that some visitors are ready to book immediately while others need to build confidence first.",
      },
    ],
    features: [
      "Patient-focused clinic introduction and team profiles",
      "Service discovery across general, cosmetic and specialist care",
      "Appointment and phone contact pathways",
      "New-patient offer presentation",
      "Health fund and patient information resources",
      "Responsive layouts for mobile-first local search",
    ],
    scope: [
      "Healthcare website design direction",
      "Service discovery architecture",
      "Appointment-focused navigation",
      "Responsive patient information pages",
      "Contact and practice details presentation",
    ],
    scopeFootnote:
      "The live site includes appointment links and third-party services. Specific booking systems, medical integrations and practice-management tools are not claimed here unless confirmed in the final project brief.",
    relatedSlugs: ["jnj-tech", "urban-khaati", "bybv"],
    seo: {
      title: "Guildford Dental Centre case study — dental website design",
      description:
        "A case study of the Guildford Dental Centre website: patient trust, clear dental service discovery and appointment-focused design for a South Guildford clinic.",
    },
  },
  {
    slug: "renewmitra",
    order: "05",
    name: "RenewMitra",
    shortName: "RenewMitra",
    domain: "renewmitra.com",
    liveUrl: "https://renewmitra.com/",
    category: "SaaS & vehicle compliance",
    filter: "software",
    discipline: "SaaS product website",
    summary:
      "A focused product website for a WhatsApp-first vehicle renewal desk, built around expiry tracking, reminders and agency workflows.",
    cardSummary:
      "Turning a daily renewal workflow into a clear product story — expiries, reminders and follow-ups in one workspace.",
    result: {
      headline: "A workflow made easy to understand.",
      detail:
        "Expiry status, reminder timing and follow-ups explained through the product's own interface rather than abstract feature claims.",
    },
    intro:
      "RenewMitra keeps insurance, PUC, fitness and permit dates for every customer and vehicle in one workspace, then sends the reminder before anything lapses. The website has to explain a practical daily workflow quickly and get an agency from curiosity to a set-up workspace.",
    theme: {
      background: "#f4f7ec",
      foreground: "#111a0d",
      accent: "#9bd30b",
      soft: "#e8f3cf",
    },
    images: {
      hero: "/projects/renewmitra-hero.png",
      section: "/projects/renewmitra-section.png",
      mobile: "/projects/renewmitra-mobile.png",
      heroAlt:
        "RenewMitra homepage showing expiry tracking for insurance, PUC, fitness and permit documents",
      sectionAlt:
        "RenewMitra reminder schedule interface with reminder intervals and a WhatsApp message template",
      mobileAlt: "Responsive mobile view of the RenewMitra website",
    },
    atAGlance: [
      { label: "Sector", value: "SaaS & vehicle compliance" },
      { label: "Based in", value: "India" },
      { label: "Website type", value: "SaaS product website" },
      { label: "Primary action", value: "Set up a workspace" },
    ],
    objectives: [
      "Explain the product's core job in a single, plain-language proposition.",
      "Show the expiry, reminder and follow-up workflow without requiring a demo.",
      "Make document status and reminder timing feel concrete and trustworthy.",
      "Keep the path from first visit to workspace set-up short.",
    ],
    context: [
      "Renewal agencies run on recurring dates. Insurance, PUC, fitness and permit expiries sit across hundreds of customers and vehicles, and a missed date costs both the client and the agency. The product replaces registers and spreadsheets, so the website has to feel more dependable than the tools it replaces.",
      "The site uses the interface itself as the argument. A vehicle record, document statuses, a reminder schedule and a sample WhatsApp message do more than a feature list, because they show the daily routine the product is designed around.",
    ],
    designNotes: [
      {
        title: "The product interface is the proof",
        body: "A document record and a scheduled reminder are presented in the hero area, so visitors can see what the workspace actually does before reading a single feature description.",
      },
      {
        title: "Status is treated as the main visual language",
        body: "Valid, due soon and overdue states are legible at a glance. That same clarity carries into the feature grid and reminder schedule, keeping the page focused on operational confidence.",
      },
      {
        title: "A quiet frame for a practical tool",
        body: "The warm off-white canvas, dark type and lime accent keep attention on the interface. The design avoids generic SaaS gradients in favour of something closer to a well-organised desk.",
      },
    ],
    features: [
      "Plain-language product proposition and workflow overview",
      "Vehicle and document status presentation",
      "Reminder schedule and message template demonstration",
      "Feature grid covering renewals, call logs and reporting",
      "Setup and sign-in pathways",
      "Responsive layouts from hero to FAQ",
    ],
    scope: [
      "SaaS product website design direction",
      "Product story and page structure",
      "Responsive interface-led presentation",
      "Feature, workflow and FAQ content organisation",
      "Workspace setup and sign-in call-to-action paths",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. WhatsApp delivery and template approval depend on third-party services such as Uomox and are not claimed as custom-built work in this case study.",
    relatedSlugs: ["mtresin-arts-academy", "onefamily-dental", "jnj-tech"],
    seo: {
      title: "RenewMitra case study — SaaS renewal workflow website design",
      description:
        "A case study of the RenewMitra website: an interface-led product story for a WhatsApp-first vehicle renewal desk, covering expiry tracking, reminders and agency workflows.",
    },
  },
  {
    slug: "mtresin-arts-academy",
    order: "06",
    name: "MT Resin Arts Academy",
    shortName: "MT Resin",
    domain: "mtresinartsacademy.com",
    liveUrl: "https://mtresinartsacademy.com/",
    category: "Education & creative skills",
    filter: "education",
    discipline: "Academy & course website",
    summary:
      "A confidence-building website for a resin art academy, designed around course discovery, hands-on training and business-ready outcomes.",
    cardSummary:
      "Turning a hands-on resin craft academy into a clear path from curiosity to enrolment.",
    result: {
      headline: "From browsing craft to booking a course.",
      detail:
        "Six specialisations, a visible fee structure and student proof organised around the decision to enrol.",
    },
    intro:
      "MT Resin Arts India Academy teaches epoxy flooring, furniture, onyx and related crafts to students who want to turn a skill into a business. The website has to carry the credibility of a real workshop while making a broad course catalogue easy to compare and book.",
    theme: {
      background: "#faf6ea",
      foreground: "#2b2112",
      accent: "#b98a2f",
      soft: "#f2e7cb",
    },
    images: {
      hero: "/projects/mtresin-arts-hero.png",
      section: "/projects/mtresin-arts-section.png",
      mobile: "/projects/mtresin-arts-mobile.png",
      heroAlt:
        "MT Resin Arts India Academy homepage with resin art hero imagery and a course call to action",
      sectionAlt:
        "MT Resin Arts Academy course catalogue with epoxy flooring, furniture and onyx training programmes",
      mobileAlt: "Responsive mobile view of the MT Resin Arts Academy website",
    },
    atAGlance: [
      { label: "Sector", value: "Creative education" },
      { label: "Based in", value: "India" },
      { label: "Website type", value: "Academy & course catalogue" },
      { label: "Primary action", value: "Book a course" },
    ],
    objectives: [
      "Make a specialised craft academy feel credible to complete beginners.",
      "Help prospective students compare six distinct course paths quickly.",
      "Show training outcomes, student numbers and business support as proof.",
      "Keep enquiry and enrolment actions close to every course decision.",
    ],
    context: [
      "A craft course is a considered purchase with a practical promise attached: learn the skill, understand the materials, price the work and start earning. Prospective students need to see the workshop, the range of specialisations and the support that continues after training.",
      "The website balances editorial hero imagery with a structured course catalogue. Duration, price, rating and topic sit together on each course card, while the about, why-choose-us and journal sections fill in the credibility behind the offer.",
    ],
    designNotes: [
      {
        title: "Craft imagery leads, course detail follows",
        body: "The hero puts the material and the making process first. Once attention is earned, the page quickly moves into course categories, fees and practical outcomes rather than staying in brand-film territory.",
      },
      {
        title: "Course cards designed for comparison",
        body: "Duration, price, rating and specialisation are presented in a consistent structure, so a beginner can compare programmes without parsing long paragraphs.",
      },
      {
        title: "Business outcomes are part of the curriculum",
        body: "Student numbers, hands-on training, lifetime support and business guidance are treated as core proof points, because the audience is buying a route to income as much as a craft skill.",
      },
    ],
    features: [
      "Six-part specialisation course catalogue",
      "Fee structure and course duration presentation",
      "Student outcomes and academy statistics",
      "Gallery, journal and global business sections",
      "Course enquiry and WhatsApp contact paths",
      "Responsive layouts for mobile course browsing",
    ],
    scope: [
      "Academy website design direction",
      "Course catalogue and fee architecture",
      "Responsive course and gallery presentation",
      "Enquiry and enrolment pathways",
      "Content organisation for academy credibility",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. Payment, enrolment and messaging tools visible on the live site are third-party services and are not claimed as custom-built work in this case study.",
    relatedSlugs: ["renewmitra", "urban-khaati", "onefamily-dental"],
    seo: {
      title: "MT Resin Arts Academy case study — academy website design",
      description:
        "A case study of the MT Resin Arts Academy website: course discovery, fee transparency and business-focused proof for a hands-on resin craft institute.",
    },
  },
  {
    slug: "onefamily-dental",
    order: "07",
    name: "One Family Dental",
    shortName: "One Family",
    domain: "onefamilydental.com.au",
    liveUrl: "https://onefamilydental.com.au/",
    category: "Healthcare & dental",
    filter: "healthcare",
    discipline: "Multi-location dental website",
    summary:
      "A trust-led website for a four-clinic Sydney dental group, built around treatment education, special offers and appointment enquiries.",
    cardSummary:
      "A consistent patient experience across four Sydney clinics — clear treatments, offers and booking paths.",
    result: {
      headline: "One group, four local front doors.",
      detail:
        "Clinic-specific pages sit inside a shared treatment and patient-information structure, so each practice keeps a local presence without fragmenting the experience.",
    },
    intro:
      "One Family Dental brings Darlinghurst Smiles, Normanhurst Dental, Chatswood Smiles and Revesby Dental Surgery under one group. The website has to make the group feel coherent while helping patients find the right clinic, understand treatment options and take the next step.",
    theme: {
      background: "#fdf1f7",
      foreground: "#48103b",
      accent: "#e6007e",
      soft: "#f8dcea",
    },
    images: {
      hero: "/projects/onefamily-dental-hero.png",
      section: "/projects/onefamily-dental-section.png",
      mobile: "/projects/onefamily-dental-mobile.png",
      heroAlt:
        "One Family Dental homepage with clinic photography and an appointment call to action",
      sectionAlt:
        "One Family Dental about page introducing the Sydney dental group and its clinic locations",
      mobileAlt: "Responsive mobile view of the One Family Dental website",
    },
    atAGlance: [
      { label: "Sector", value: "Healthcare & dental" },
      { label: "Based in", value: "Sydney, NSW" },
      { label: "Website type", value: "Multi-location clinic website" },
      { label: "Primary action", value: "Book an appointment" },
    ],
    objectives: [
      "Present four clinics as one trusted group without hiding their local identities.",
      "Make a broad treatment menu understandable to new and anxious patients.",
      "Surface special offers, payment options and health-fund information clearly.",
      "Keep appointment and contact actions visible across every patient journey.",
    ],
    context: [
      "Dental groups serve several audiences at once: new patients comparing local practices, existing patients looking for practical information, and people in discomfort who need to act quickly. A shared brand has to be consistent, but each clinic still needs to feel local.",
      "The site answers this with a shared treatment and patient-information structure, then dedicated location pages for each practice. Special offers, smile gallery, payment options and government schemes reduce the uncertainty that often delays a dental appointment.",
    ],
    designNotes: [
      {
        title: "A common structure with local front doors",
        body: "Treatment pages and patient information follow one language across the group, while each clinic page carries its own address, phone numbers and personality.",
      },
      {
        title: "Offers are presented as care, not discounts",
        body: "Complimentary consultations and no-gap whitening are framed around the patient decision. Clear eligibility notes keep the offers useful rather than pushy.",
      },
      {
        title: "Booking actions at every stage",
        body: "Phone numbers, appointment links and clinic selection appear in the header, hero, clinic sections and contact area, respecting that some patients are ready to book while others are still reading.",
      },
    ],
    features: [
      "Four clinic locations with dedicated pages",
      "Treatment discovery across general, cosmetic and specialist care",
      "Special offers and health-fund information",
      "Smile gallery and payment option presentation",
      "Appointment, phone and contact pathways",
      "Responsive patient information and blog layouts",
    ],
    scope: [
      "Multi-location dental website design direction",
      "Clinic and treatment information architecture",
      "Responsive patient information pages",
      "Appointment and contact pathway presentation",
      "Content organisation for offers and payment options",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. Booking systems, health-fund integrations and practice-management tools visible on the live site are third-party services and are not claimed as custom-built work in this case study.",
    relatedSlugs: ["guildford-dental-centre", "renewmitra", "mtresin-arts-academy"],
    seo: {
      title: "One Family Dental case study — multi-clinic dental website design",
      description:
        "A case study of the One Family Dental website: four Sydney clinics, clear treatment discovery, special offers and appointment-focused patient journeys.",
    },
  },
  {
    slug: "outback-rolling",
    order: "08",
    name: "Outback Rolling Diesel Repairs",
    shortName: "ORD Repairs",
    domain: "graphynix.com/2026/outbackrolling",
    liveUrl: "https://graphynix.com/2026/outbackrolling/",
    category: "Diesel repairs & field service",
    filter: "corporate-websites",
    discipline: "Industrial service website",
    summary:
      "A field-service website for a mobile diesel repair business supporting agriculture, civil, mining and transport across NSW and WA.",
    cardSummary:
      "Keeping heavy machinery rolling — a 24/7 field-service offer made easy to act on.",
    result: {
      headline: "An emergency service that is easy to find.",
      detail:
        "24/7 breakdown response, coverage and capabilities surfaced ahead of the enquiry, with quote and phone actions never far away.",
    },
    intro:
      "Outback Rolling Diesel Repairs keeps heavy machinery and transport fleets working across New South Wales and Western Australia. The website has to communicate urgency, coverage and technical range without losing the practical, no-nonsense character of the business.",
    theme: {
      background: "#eef4f7",
      foreground: "#0b2233",
      accent: "#1a86c9",
      soft: "#dbe8f0",
    },
    images: {
      hero: "/projects/outback-rolling-hero.png",
      section: "/projects/outback-rolling-section.png",
      mobile: "/projects/outback-rolling-mobile.png",
      heroAlt:
        "Outback Rolling Diesel Repairs homepage with heavy machinery imagery and 24/7 breakdown messaging",
      sectionAlt:
        "Outback Rolling Diesel Repairs services and capabilities page with field service categories",
      mobileAlt:
        "Responsive mobile view of the Outback Rolling Diesel Repairs website",
    },
    atAGlance: [
      { label: "Sector", value: "Diesel repairs & field service" },
      { label: "Based in", value: "NSW & WA, Australia" },
      { label: "Website type", value: "Industrial service website" },
      { label: "Primary action", value: "Request a quote" },
    ],
    objectives: [
      "Make 24/7 breakdown response and service coverage immediately clear.",
      "Organise eleven service and capability areas into scannable groups.",
      "Show the industries and equipment the business actually supports.",
      "Give time-sensitive visitors a fast route to a quote or phone call.",
    ],
    context: [
      "When a machine stops, the website is often visited under pressure. Visitors need to know quickly whether the business covers their location, works on their equipment and can respond now. Marketing language is less useful than visible capability and contact detail.",
      "The site leads with breakdown response, coverage and mobile service, then supports those claims with a detailed capabilities list, plant hire and haulage information, a gallery and practical quote pathways. The result feels closer to an operational field service than a generic industrial brochure.",
    ],
    designNotes: [
      {
        title: "Urgency without noise",
        body: "The hero pairs a direct proposition with 24/7, coverage and mobile-service proof points. The phone number and quote action remain visible, so a visitor in a breakdown situation does not have to search.",
      },
      {
        title: "Capability presented as a service menu",
        body: "Eleven service areas are grouped into consistent cards with short explanations, letting a fleet manager scan for the exact repair or field-support task they need.",
      },
      {
        title: "Industry context does the selling",
        body: "Agriculture, civil, mining and transport are named explicitly, alongside equipment and on-site language. That specificity builds more confidence than generic claims about quality.",
      },
    ],
    features: [
      "24/7 breakdown response messaging",
      "NSW and WA service coverage presentation",
      "Eleven service and capability categories",
      "Plant hire and haulage information",
      "Quote request and phone contact pathways",
      "Gallery and operational proof sections",
    ],
    scope: [
      "Industrial service website design direction",
      "Service and capability information architecture",
      "Responsive service page presentation",
      "Quote and contact enquiry pathways",
      "Content organisation for coverage and plant hire",
    ],
    scopeFootnote:
      "Scope reflects the supplied project archive. The live site is published under the agency's project path, and third-party services shown there are not claimed as custom-built work in this case study.",
    relatedSlugs: ["jnj-tech", "onefamily-dental", "renewmitra"],
    seo: {
      title: "Outback Rolling Diesel Repairs case study — industrial website",
      description:
        "A case study of the Outback Rolling Diesel Repairs website: 24/7 breakdown response, field-service capabilities and quote-focused design across NSW and WA.",
    },
  },
];

export const projectFilters: { value: "all" | ProjectFilter; label: string }[] = [
  { value: "all", label: "All projects" },
  { value: "business-websites", label: "Business websites" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "corporate-websites", label: "Corporate" },
  { value: "healthcare", label: "Healthcare" },
  { value: "education", label: "Education" },
  { value: "software", label: "SaaS" },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectHref(slug: string) {
  return `/portfolio/${slug}`;
}
