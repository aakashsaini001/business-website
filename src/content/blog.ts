export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; attribution?: string };

export type ArticleCover = {
  index: string;
  kicker: string;
  background: string;
  foreground: string;
  accent: string;
  motif: "grid" | "orb" | "lines" | "type";
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  excerpt: string;
  category: string;
  date: string;
  updated?: string;
  author: string;
  cover: ArticleCover;
  intro: string;
  blocks: ArticleBlock[];
  takeaway: string;
  relatedServices: string[];
  relatedPosts: string[];
};

export const articles: Article[] = [
  {
    slug: "business-website-cost-india",
    title: "How much does a business website cost in India?",
    seoTitle: "How much does a business website cost in India? A practical guide",
    excerpt:
      "A clear breakdown of what actually drives the cost of a business website — and how to compare quotes without stripping out the work that matters.",
    category: "Planning",
    date: "2026-10-23",
    author: "Freelen Studio",
    cover: {
      index: "01",
      kicker: "Budgeting",
      background: "#171a14",
      foreground: "#f4f0e7",
      accent: "#d8f45b",
      motif: "type",
    },
    intro:
      "Website quotes in India can vary by more than ten times for what sounds like the same project. That is not because one developer is ten times better than another. It is usually because the quotes describe very different amounts of work.",
    blocks: [
      {
        type: "p",
        text: "A five-page brochure site, a 40-page corporate site and a functioning online store can all be called “a business website”. Until the scope, content, functionality and process are described, the price is only a number.",
      },
      {
        type: "p",
        text: "This guide explains what you are really buying, which decisions move the cost most and how to compare proposals without reducing the project to the lowest line item.",
      },
      { type: "h2", text: "What you are actually paying for" },
      {
        type: "p",
        text: "A professionally built website combines several kinds of work. A good quote should make them visible rather than hiding everything inside one total.",
      },
      {
        type: "ul",
        items: [
          "**Strategy and structure.** Deciding what the site needs to say, who it is for and how pages should fit together.",
          "**Design.** Creating a visual system and key page layouts that are specific to the business, not a generic theme.",
          "**Development.** Turning the design into responsive pages, templates and functional components.",
          "**Content.** Writing, editing or restructuring page copy, product information and imagery.",
          "**Technical foundations.** Forms, analytics, performance, accessibility and search-engine basics.",
          "**Project management and QA.** Coordinating decisions, testing the result and managing launch.",
        ],
      },
      {
        type: "p",
        text: "A low quote often removes several of those categories. Sometimes that is a legitimate choice; a simple one-page site does not need a months-long discovery process. The risk is assuming the cheap quote covers the same standard of work as the thorough one.",
      },
      { type: "h2", text: "The factors that move the price most" },
      { type: "h3", text: "1. Scope of pages and templates" },
      {
        type: "p",
        text: "Page count matters, but template count matters more. Ten pages that use the same layout can take less design and engineering work than four pages with very different jobs. Service pages, case studies, blog posts and product pages each introduce decisions.",
      },
      { type: "h3", text: "2. Content readiness" },
      {
        type: "p",
        text: "If copy is clear, approved and ready, the project moves faster. If the developer has to interview your team, edit drafts and chase approvals, that work has to be planned and paid for. Content is one of the most common reasons a project runs longer than expected.",
      },
      { type: "h3", text: "3. Custom design and interaction" },
      {
        type: "p",
        text: "A distinct visual direction, carefully built responsive layouts and specific interactions take more time than adapting a purchased theme. The trade-off can be worth it when the website is a primary sales asset — but custom work is not automatically better if it does not serve a business purpose.",
      },
      { type: "h3", text: "4. Functionality and integrations" },
      {
        type: "p",
        text: "A contact form is relatively straightforward. A booking flow, calculator, customer portal, CRM integration or large product catalogue is a different class of project. Third-party services add configuration, testing and ongoing subscription costs.",
      },
      { type: "h3", text: "5. The platform you choose" },
      {
        type: "p",
        text: "WordPress can be economical when it fits the content model. Shopify brings reliable commerce operations with monthly costs. A custom Next.js build can deliver excellent performance and flexibility, but it usually makes sense for a site with a longer-term product and content strategy. The right platform is the one your team can operate.",
      },
      { type: "h3", text: "6. Ongoing costs" },
      {
        type: "p",
        text: "The build fee is not the full cost of ownership. Budget for a domain, hosting or platform subscription, premium plugins or apps, email services, stock imagery, payment processing and updates. These are usually paid directly by the business.",
      },
      { type: "callout", title: "A useful budgeting rule", text: "Plan for the initial build and for the first year of running and improving the site. A launch budget that leaves nothing for maintenance tends to produce an expensive rebuild later." },
      { type: "h2", text: "The broad shapes of website projects" },
      {
        type: "p",
        text: "The numbers below are not universal market rates. They are useful ways to think about the level of engagement.",
      },
      {
        type: "ul",
        items: [
          "**Starter:** a focused presence with a few pages, a clear offer and an enquiry path. Best for independent professionals and very small businesses.",
          "**Business:** a larger site with multiple services, content structure and a more involved design system. Best when the website is part of a sales process.",
          "**E-commerce:** a storefront with catalogue, cart, payments and operational configuration. Pricing depends heavily on catalogue size and integrations.",
          "**Custom:** booking systems, customer tools, multilingual architecture or complex integrations. This requires a discovery phase before a credible price can be set.",
        ],
      },
      {
        type: "p",
        text: "The studio publishes its own [indicative starting prices](/pricing) so each package can be compared against the actual scope. A proposal should always be more specific than a price table.",
      },
      { type: "h2", text: "How to compare quotes properly" },
      {
        type: "p",
        text: "Put the proposals side by side and ask what is included in each of these areas:",
      },
      {
        type: "ol",
        items: [
          "Content: who writes it, how many rounds and who approves it?",
          "Design: how many original page designs and revision rounds?",
          "Development: responsive behavior, browsers and CMS setup?",
          "SEO: metadata, structure, redirects and Search Console?",
          "Performance: image optimization, fonts and testing?",
          "Launch: domain, hosting, analytics and post-launch support?",
          "Ownership: who owns accounts, files and the finished site?",
        ],
      },
      {
        type: "p",
        text: "A quote that answers these questions is easier to trust than one with a lower headline number and no detail. If a proposal is silent about an area, ask. Silence usually means it is not included.",
      },
      { type: "h2", text: "Red flags in website pricing" },
      {
        type: "ul",
        items: [
          "A fixed price offered before anyone has understood the requirements.",
          "Unlimited revisions with no definition of what a revision is.",
          "A long-term contract that locks access to your domain or hosting.",
          "Promises of specific Google rankings or guaranteed leads.",
          "No mention of who owns the accounts after launch.",
          "Prices that are far below the rest of the market with no explanation of reduced scope.",
        ],
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "The cheapest website is not the one with the lowest quote. It is the one that does its job for the longest time without needing to be rescued. That may mean spending more on structure and build quality and less on decorative features.",
      },
      {
        type: "p",
        text: "Start with a clear scope, ask for a written proposal and compare the work behind the number. If you want a realistic starting point for your project, [send a short enquiry](/contact).",
      },
    ],
    takeaway:
      "Website cost is driven by scope, content, custom design, functionality and process — not by page count alone. Compare proposals on what is included, not just the total.",
    relatedServices: ["website-development", "ecommerce-development"],
    relatedPosts: [
      "custom-vs-template-website",
      "choose-a-web-developer",
    ],
  },
  {
    slug: "custom-vs-template-website",
    title: "Custom website vs template: which is right for your business?",
    seoTitle: "Custom website vs template website: an honest comparison",
    excerpt:
      "Templates can be a sensible starting point. Custom builds can be unnecessary. Here is how to choose based on the job your website needs to do.",
    category: "Strategy",
    date: "2026-10-19",
    author: "Freelen Studio",
    cover: {
      index: "02",
      kicker: "Build decisions",
      background: "#f0eadc",
      foreground: "#151811",
      accent: "#ff6b35",
      motif: "grid",
    },
    intro:
      "The custom-versus-template decision is often framed as a quality argument. It is more usefully framed as a fit argument. Each approach has real advantages, real limits and a different total cost.",
    blocks: [
      {
        type: "p",
        text: "A template is not automatically amateur, and a custom build is not automatically good. Plenty of expensive custom sites are harder to use than a well-maintained template. The question is what your business needs from the website over the next two or three years.",
      },
      { type: "h2", text: "What a template actually gives you" },
      {
        type: "p",
        text: "Templates reduce the cost and risk of starting. A mature theme or site builder includes layouts, form handling, basic SEO features and a familiar editing environment. For a business that needs a credible presence quickly, that can be the rational choice.",
      },
      { type: "h3", text: "Templates work well when:" },
      {
        type: "ul",
        items: [
          "Your offer is simple and unlikely to change dramatically.",
          "A small number of pages are enough.",
          "You need to launch quickly on a limited budget.",
          "You can update content yourself without needing custom components.",
          "The design does not need to carry much of the brand differentiation.",
        ],
      },
      {
        type: "p",
        text: "The hidden cost appears later. Templates often accumulate plugins, page-builder markup and inconsistent styles. As the business grows, the site can become difficult to change and slower to load. That does not make it a bad choice; it makes it a choice with a likely lifespan.",
      },
      { type: "h2", text: "What a custom build gives you" },
      {
        type: "p",
        text: "A custom website starts with the business problem rather than a pre-built layout. The information architecture, design system and components are shaped around how this particular company sells and communicates.",
      },
      { type: "h3", text: "Custom is worth considering when:" },
      {
        type: "ul",
        items: [
          "The website is a primary sales or lead-generation asset.",
          "The brand needs a distinct, consistent visual language.",
          "Services, audiences or content types are complex.",
          "The site will grow and needs reusable structure.",
          "Performance and search visibility are high priorities.",
          "There is functionality that generic templates handle poorly.",
        ],
      },
      {
        type: "p",
        text: "The cost is higher upfront, and the business needs a plan for maintenance. A custom site that nobody maintains will eventually lose the advantage it paid for.",
      },
      { type: "callout", title: "The real question", text: "Will the website's structure and presentation create enough business value to justify the extra design and engineering effort? If yes, custom may pay for itself. If not, a simpler starting point is the more disciplined choice." },
      { type: "h2", text: "The middle path" },
      {
        type: "p",
        text: "The choice is not always binary. You can start with a standard CMS or platform, install a lean theme, and invest in custom page design for the two or three templates that matter most. This keeps the editing ecosystem while giving the brand more control over the pages visitors actually use.",
      },
      {
        type: "p",
        text: "A focused custom redesign of key templates is often more valuable than a full custom build everywhere. It prioritises the homepage, service pages and contact journey while leaving low-traffic utility pages simple.",
      },
      { type: "h2", text: "What to include in the decision" },
      {
        type: "p",
        text: "When comparing options, look beyond the initial build fee:",
      },
      {
        type: "ol",
        items: [
          "How often will content change and who will manage it?",
          "How many different page layouts do you genuinely need?",
          "Will the site need new services, products or features?",
          "What is the cost of the platform, theme and required plugins each year?",
          "How difficult and expensive will future changes be?",
          "Does the design need to stand apart or simply be clear and professional?",
        ],
      },
      {
        type: "p",
        text: "A template plus a good content structure and a clear offer will beat a bespoke design built on unclear messaging. Strategy and content come first; the implementation approach follows.",
      },
      { type: "h2", text: "A practical recommendation" },
      {
        type: "p",
        text: "If you are launching for the first time and the budget is limited, use a well-supported platform with a simple, fast theme and invest in good copy and photography. If you have a validated offer and the website is central to growth, invest in a custom structure that can evolve.",
      },
      {
        type: "p",
        text: "Either way, avoid buying more complexity than you can maintain. The best site is not the most custom one; it is the one that keeps doing its job. Read more about the studio's [website design and development service](/services/website-development) or [start a project conversation](/contact).",
      },
    ],
    takeaway:
      "Choose based on complexity, expected lifespan and who will maintain the site. A template can be a smart start; a custom build makes sense when the website's structure creates ongoing business value.",
    relatedServices: ["website-development", "website-redesign"],
    relatedPosts: [
      "business-website-cost-india",
      "professional-business-website",
    ],
  },
  {
    slug: "professional-business-website",
    title: "What makes a business website look professional?",
    seoTitle: "What makes a business website look professional? 9 practical signals",
    excerpt:
      "Professionalism is rarely about a trendy font or a video background. It is the visible result of clarity, consistency and attention to detail.",
    category: "Design",
    date: "2026-10-14",
    author: "Freelen Studio",
    cover: {
      index: "03",
      kicker: "Design signals",
      background: "#1e2bff",
      foreground: "#f7f4eb",
      accent: "#d8f45b",
      motif: "orb",
    },
    intro:
      "People decide whether a business looks credible in seconds. That judgment is not superficial: it is a quick assessment of whether the organisation seems clear, competent and safe to deal with. Professional design is one of the signals that informs it.",
    blocks: [
      {
        type: "p",
        text: "The good news is that most of the signals are practical. They do not require a large brand budget. They require someone to care about the basics.",
      },
      { type: "h2", text: "1. The offer is clear immediately" },
      {
        type: "p",
        text: "A visitor should be able to answer three questions within a few seconds: what do you do, who is it for and what should I do next? If the headline is “Welcome to our website” or a slogan that could belong to any company, the first opportunity is lost.",
      },
      {
        type: "p",
        text: "Write the homepage as if a potential client has just arrived from a search result. Tell them plainly what you provide, then support it with specifics.",
      },
      { type: "h2", text: "2. Typography has a clear hierarchy" },
      {
        type: "p",
        text: "Professional-looking websites use type deliberately. There is a visible difference between a page heading, a section heading, body copy and supporting detail. The body text is comfortable to read, line lengths are controlled and font sizes respond sensibly on mobile.",
      },
      {
        type: "ul",
        items: [
          "Use no more than two or three typefaces.",
          "Limit yourself to a few weights and sizes.",
          "Keep body text at a comfortable reading size.",
          "Avoid long lines that run across the full screen.",
          "Give headings room to breathe.",
        ],
      },
      { type: "h2", text: "3. Spacing is consistent" },
      {
        type: "p",
        text: "Inconsistent margins and cramped blocks make a site feel improvised. A professional layout repeats spacing decisions across sections. It also uses whitespace to group related things and separate unrelated things.",
      },
      {
        type: "p",
        text: "You can often improve a modest website simply by increasing the space around headings, aligning content to a consistent container and letting sections breathe.",
      },
      { type: "h2", text: "4. The visual system feels intentional" },
      {
        type: "p",
        text: "A restrained palette, consistent corner radii, repeatable button styles and a small set of layouts create coherence. The opposite — five button styles, random gradients, mixed image treatments — signals that nobody is in charge of the design.",
      },
      {
        type: "p",
        text: "You do not need to be bold to look professional. You need to be consistent.",
      },
      { type: "h2", text: "5. The content is specific" },
      {
        type: "p",
        text: "Generic copy is one of the strongest signals of an unfinished website. “We provide quality solutions with a customer-first approach” tells a visitor nothing. Specific language about services, process, materials, locations or outcomes builds confidence.",
      },
      {
        type: "p",
        text: "Replace claims with evidence. If you cannot prove a number, describe exactly what you do and how you do it.",
      },
      { type: "h2", text: "6. Images look like they belong" },
      {
        type: "p",
        text: "A single irrelevant stock image can undermine an otherwise strong page. Use real team, product or project photography where possible. When stock imagery is necessary, choose it for a reason and keep its treatment consistent with the brand.",
      },
      {
        type: "p",
        text: "Image quality also matters. Blurry logos, stretched photos and inconsistent aspect ratios make a site feel neglected.",
      },
      { type: "h2", text: "7. The mobile experience has been designed, not shrunk" },
      {
        type: "p",
        text: "Check the site on an actual phone. Are the menus easy to operate? Is the text readable without pinching? Do sections stack logically? Are buttons large enough to tap? Mobile is often the first impression, especially for local service businesses.",
      },
      { type: "h2", text: "8. The site is fast and stable" },
      {
        type: "p",
        text: "Professionalism is felt as much as seen. Pages that load slowly, images that jump into place or sections that shift while you read make the business feel less reliable. Optimised images, sensible fonts and fewer unnecessary scripts are part of the visual experience.",
      },
      { type: "h2", text: "9. The details are finished" },
      {
        type: "p",
        text: "Look at the small things:",
      },
      {
        type: "ul",
        items: [
          "Do all links work?",
          "Are form error messages helpful?",
          "Do pages have sensible browser titles?",
          "Is the contact information easy to find?",
          "Does the 404 page help the visitor recover?",
          "Are social sharing previews populated?",
          "Does the site behave properly when JavaScript fails or motion is reduced?",
        ],
      },
      {
        type: "p",
        text: "These details rarely get praised, but their absence is noticed by the same instinct that decides whether to trust a business.",
      },
      { type: "h2", text: "What professionalism is not" },
      {
        type: "p",
        text: "It is not a giant headline, a floating video, an animated cursor or a full-screen intro. Those can be memorable when used with purpose, but they cannot compensate for an unclear offer or a broken enquiry form.",
      },
      {
        type: "p",
        text: "The most professional websites make the visitor's job easier. If you are reviewing your own site, start with the offer, the structure and the contact path. Then refine the visual details. A [redesign audit](/services/website-redesign) can help identify what is actually holding yours back.",
      },
    ],
    takeaway:
      "Professional websites earn trust through clear messaging, coherent typography and spacing, specific content, real imagery, a considered mobile experience and finished details.",
    relatedServices: ["website-development", "website-redesign"],
    relatedPosts: [
      "custom-vs-template-website",
      "speed-optimization-guide",
    ],
  },
  {
    slug: "ecommerce-launch-features",
    title: "E-commerce website development: essential features before launch",
    seoTitle: "E-commerce launch checklist: essential store features",
    excerpt:
      "The commercial details that need to be right before you open an online store — from catalogue structure and product pages to payments and post-purchase trust.",
    category: "E-commerce",
    date: "2026-10-08",
    author: "Freelen Studio",
    cover: {
      index: "04",
      kicker: "Launch checklist",
      background: "#154f2b",
      foreground: "#f2f5e9",
      accent: "#ffcf3d",
      motif: "lines",
    },
    intro:
      "A store can look ready and still be commercially fragile. The difference is usually in the unglamorous operational details: how products are organised, what shoppers are told before paying, what happens after checkout and whether the team can run the store without help.",
    blocks: [
      {
        type: "p",
        text: "This checklist is for the stage between “the design looks good” and “we can confidently take real orders”. It is not a feature wishlist; each item exists to reduce friction or risk.",
      },
      { type: "h2", text: "Catalogue and navigation" },
      {
        type: "ul",
        items: [
          "**Collections match how customers shop.** Organise by use case, product type or problem — not only by internal categories.",
          "**Filters are useful.** Variants such as size, colour, concern or price should help narrow the range without creating dead ends.",
          "**Search is tested.** Search for common misspellings, broad terms and specific product names.",
          "**Empty states are designed.** A collection with no products or no filter matches should explain what happened and offer a way forward.",
        ],
      },
      { type: "h2", text: "Product pages" },
      {
        type: "p",
        text: "A product page has to answer the questions a shopper needs resolved before they can buy.",
      },
      {
        type: "ul",
        items: [
          "What exactly is included, and what size or variant is this?",
          "What does it do, and who is it for?",
          "How is it used or cared for?",
          "When will it arrive and what does delivery cost?",
          "Can it be returned, and under what conditions?",
          "Is there proof that other customers were satisfied?",
        ],
      },
      {
        type: "p",
        text: "Use photography that shows scale and detail. Add comparison help where variants are hard to distinguish. Avoid hiding important delivery or returns information until after the shopper has committed.",
      },
      { type: "h2", text: "Cart and checkout" },
      {
        type: "p",
        text: "Every unnecessary step or confusing message costs orders. Before launch, test the purchase as a first-time customer would.",
      },
      {
        type: "ol",
        items: [
          "Add a product from a mobile device and proceed through the full checkout.",
          "Check that taxes, shipping and discounts calculate correctly.",
          "Confirm that guest checkout is available if your strategy allows it.",
          "Test failed payment states and recovery messages.",
          "Verify order confirmation emails and the customer's next steps.",
          "Check that the order appears correctly in the admin.",
        ],
      },
      {
        type: "callout",
        title: "Do not stop at a successful test order",
        text: "Also test what happens when something fails: a declined card, an out-of-stock variant, an invalid discount code or a network drop. The failure experience is part of the store.",
      },
      { type: "h2", text: "Payments, taxes and shipping" },
      {
        type: "p",
        text: "The store should use a merchant account the business controls. Payment provider fees, settlement timing and chargeback processes need to be understood before launch. Shipping and tax rules should be configured for the countries being sold to, with clear customer-facing explanations.",
      },
      {
        type: "p",
        text: "If you sell internationally, be explicit about duties, delivery estimates and whether local taxes are included. Surprises at checkout are expensive.",
      },
      { type: "h2", text: "Trust and policy pages" },
      {
        type: "ul",
        items: [
          "Shipping and delivery policy",
          "Returns and refunds policy",
          "Privacy policy and cookie information where required",
          "Terms of sale",
          "A real business address and support contact",
          "Accessible contact options — not just a generic form",
        ],
      },
      { type: "h2", text: "Email and retention" },
      {
        type: "p",
        text: "Commerce email is operational infrastructure. At minimum, ensure transactional emails are configured and tested. Marketing email flows, abandoned-cart recovery and welcome sequences should be added only when the business can maintain them responsibly and lawfully.",
      },
      { type: "h2", text: "Analytics and commerce measurement" },
      {
        type: "p",
        text: "You cannot improve what you cannot see. Set up a baseline that includes sessions, product views, add-to-cart events, checkout progression, purchases and revenue. Make sure consent requirements are respected and those events are actually firing before any campaign traffic arrives.",
      },
      { type: "h2", text: "Performance and SEO" },
      {
        type: "p",
        text: "Product imagery is usually the largest performance risk. Optimise and compress images, avoid loading every variant gallery image immediately, and test on a mid-range phone. Ensure product and collection pages have unique titles, meta descriptions, crawlable links and structured data where appropriate.",
      },
      {
        type: "p",
        text: "Keep out-of-stock and discontinued product URLs handled deliberately. A redirect to a relevant collection is usually more useful than a soft 404.",
      },
      { type: "h2", text: "Operations before launch" },
      {
        type: "ul",
        items: [
          "Who uploads new products and how long does it take?",
          "Who handles customer service, and through which channels?",
          "How are returns and exchanges processed?",
          "Who monitors checkout errors or failed payments?",
          "What is the plan for a sale or high-traffic campaign?",
        ],
      },
      {
        type: "p",
        text: "A store is a business system. The website should make those operations easier, not add a second layer of confusion. If you are planning a storefront, read about the studio's [e-commerce development service](/services/ecommerce-development), or [start a project conversation](/contact).",
      },
    ],
    takeaway:
      "Launch readiness is more than design. Test the catalogue, checkout, payments, email, analytics, policies and operational ownership before real customers arrive.",
    relatedServices: ["ecommerce-development", "website-maintenance"],
    relatedPosts: [
      "technical-seo-checklist",
      "speed-optimization-guide",
    ],
  },
  {
    slug: "redesign-checklist",
    title: "A website redesign checklist for growing businesses",
    seoTitle: "Website redesign checklist: avoid the common expensive mistakes",
    excerpt:
      "How to decide whether to redesign, what to keep and how to protect the search visibility and usability you have already earned.",
    category: "Redesign",
    date: "2026-10-02",
    author: "Freelen Studio",
    cover: {
      index: "05",
      kicker: "Before rebuilding",
      background: "#f3eee3",
      foreground: "#1a1c16",
      accent: "#ff6b35",
      motif: "grid",
    },
    intro:
      "A redesign is one of the most expensive things a growing business can do to its website. It is also one of the easiest projects to get wrong, because the excitement of a new visual direction can quietly erase years of hard-earned search visibility and user familiarity.",
    blocks: [
      {
        type: "p",
        text: "A better process starts with a diagnosis. What is actually underperforming? Which pages earn traffic? Which parts of the current experience work? The answers should shape the scope, not just the mood board.",
      },
      { type: "h2", text: "First, decide whether you need a redesign at all" },
      {
        type: "p",
        text: "A site may feel dated without being commercially broken. Before committing to a rebuild, check whether the problem can be solved with:",
      },
      {
        type: "ul",
        items: [
          "A clearer homepage message",
          "New service pages or better navigation",
          "Stronger photography and typography",
          "Performance improvements",
          "A mobile-specific layout fix",
          "A better enquiry or checkout flow",
        ],
      },
      {
        type: "p",
        text: "If the foundation is sound, targeted improvements may deliver more value for less cost. If the structure, platform or design system is actively limiting the business, a redesign can be the right move.",
      },
      { type: "h2", text: "Build a baseline before changing anything" },
      {
        type: "p",
        text: "Capture the current state so you can tell whether the redesign actually helped. Record the pages that earn organic traffic, key conversion actions, mobile behaviour, page speed and any known usability complaints.",
      },
      {
        type: "ol",
        items: [
          "Export a list of indexed URLs and their organic landing pages.",
          "Document current page titles, meta descriptions and redirects.",
          "Take screenshots of all key templates.",
          "Review analytics for high-traffic and high-exit pages.",
          "Collect feedback from sales and customer service teams.",
          "Run a speed and accessibility check.",
        ],
      },
      { type: "h2", text: "Audit content before design" },
      {
        type: "p",
        text: "List every page and classify it: keep, improve, merge, remove or create. This prevents the new site from copying years of accumulated content debt.",
      },
      {
        type: "p",
        text: "Look for pages that answer the same query, outdated service information and content that was written for the business rather than the customer. A redesign is a rare opportunity to simplify. Use it.",
      },
      { type: "h2", text: "Define the information architecture" },
      {
        type: "p",
        text: "Don't start with the visual design. Decide what the main navigation should contain, how services relate and what the user needs to see on each step of the journey. Build a sitemap and wireframes for the most important templates before choosing colours.",
      },
      {
        type: "callout",
        title: "Protect what works",
        text: "If a page has strong search visibility or a familiar position in the user journey, changing its URL or purpose is a decision that needs evidence. “The new design looks cleaner” is not enough.",
      },
      { type: "h2", text: "Plan the SEO migration" },
      {
        type: "p",
        text: "Search equity is easy to lose and slow to rebuild. Before launch, create a redirect map from every old URL to the closest new equivalent. Keep high-value content on the same or a logical URL. Update internal links, sitemaps and canonical tags.",
      },
      {
        type: "ul",
        items: [
          "One-to-one redirects wherever possible",
          "No redirect chains or blanket redirects to the homepage",
          "New titles and metadata for every key page",
          "Updated internal links to new URLs",
          "Structured data reviewed and revalidated",
          "Search Console monitoring after launch",
        ],
      },
      { type: "h2", text: "Design the mobile journey explicitly" },
      {
        type: "p",
        text: "Do not approve mobile as an afterthought. Review navigation, tap targets, form behaviour, sticky actions and content density on real devices. Many local and service businesses receive most of their traffic on phones.",
      },
      { type: "h2", text: "Protect conversion paths" },
      {
        type: "p",
        text: "If enquiries currently come through a particular page, phone number or form, make sure the new version is at least as easy to complete. Test every path with a real person who has not seen the new site. Watch where they hesitate.",
      },
      { type: "h2", text: "Set a practical review process" },
      {
        type: "p",
        text: "A large redesign can invite unlimited opinions. Define who makes the final decision, how feedback is consolidated and what constitutes a revision. Review against the agreed business objectives, not personal taste.",
      },
      { type: "h2", text: "Test before and after launch" },
      {
        type: "ul",
        items: [
          "Every internal link and redirect",
          "Forms, notifications and thank-you states",
          "Responsive layouts on representative devices",
          "Keyboard access and focus states",
          "Page speed and image loading",
          "Metadata, canonical URLs and social previews",
          "404 handling and search functionality",
        ],
      },
      {
        type: "p",
        text: "After launch, compare the new baseline against the old one over time. A redesign is a hypothesis; the data tells you whether it worked. If you are considering a phase of improvements, see the studio's [redesign and changes service](/services/website-redesign).",
      },
    ],
    takeaway:
      "A good redesign begins with a baseline, a content audit and a clear diagnosis. Preserve search equity with a redirect plan and test the new experience against real business journeys.",
    relatedServices: ["website-redesign", "website-development"],
    relatedPosts: [
      "technical-seo-checklist",
      "professional-business-website",
    ],
  },
  {
    slug: "technical-seo-checklist",
    title: "A technical SEO checklist for a new website",
    seoTitle: "Technical SEO checklist for a new website launch",
    excerpt:
      "The foundational SEO checks that belong in a build, not after it — crawlability, indexing, structure, metadata and performance.",
    category: "SEO",
    date: "2026-09-26",
    author: "Freelen Studio",
    cover: {
      index: "06",
      kicker: "Foundations",
      background: "#101b35",
      foreground: "#eef2ff",
      accent: "#8fb7ff",
      motif: "lines",
    },
    intro:
      "Technical SEO is not a secret ranking trick. It is the work of making sure search engines can find, crawl, understand and trust your pages. When it is missing, even strong content struggles to perform.",
    blocks: [
      {
        type: "p",
        text: "The best time to address these foundations is during the build. Fixing them later is possible, but it costs more and can temporarily disturb a site that is already live.",
      },
      { type: "h2", text: "1. Crawlability and indexation" },
      {
        type: "p",
        text: "Start with the basics: can search engines reach the pages that matter, and are the wrong pages excluded?",
      },
      {
        type: "ul",
        items: [
          "Confirm that robots.txt does not block important pages or assets.",
          "Remove noindex tags from pages that should appear in search.",
          "Keep staging and production environments separate.",
          "Use canonical tags to identify the preferred version of each page.",
          "Check that the XML sitemap contains only canonical, indexable URLs.",
          "Handle www, non-www, HTTP and HTTPS consistently.",
        ],
      },
      { type: "h2", text: "2. URLs and site structure" },
      {
        type: "p",
        text: "Readable URLs help people and search engines understand the architecture. Use lowercase, descriptive paths such as /services/website-development rather than /page?id=27.",
      },
      {
        type: "p",
        text: "The structure should follow the logic of the business. If you have several services, give each one a dedicated page and link it from a services overview. If you publish content, keep articles grouped under a clear blog path.",
      },
      { type: "h2", text: "3. Page titles and metadata" },
      {
        type: "p",
        text: "Every important page should have a unique title that describes the page and the business. Meta descriptions do not directly determine rankings, but they influence click-through and should be written for people.",
      },
      {
        type: "ul",
        items: [
          "Avoid duplicate titles across similar pages.",
          "Keep titles readable and specific.",
          "Write descriptions that explain the value of the page.",
          "Use Open Graph and social metadata if the site is shared.",
          "Ensure the homepage title includes the brand and the core offer.",
        ],
      },
      { type: "h2", text: "4. Heading hierarchy" },
      {
        type: "p",
        text: "Use one H1 per page and a logical sequence of H2 and H3 headings. Headings are navigation aids for readers as well as structure for search engines. Do not use them purely to achieve a font size.",
      },
      { type: "h2", text: "5. Internal linking" },
      {
        type: "p",
        text: "Internal links pass context and help users move through the site. Link from service pages to relevant case studies, from articles to services and from project pages to the enquiry path. Keep the anchor text descriptive.",
      },
      {
        type: "p",
        text: "Avoid orphan pages with no internal links. A sitemap alone is not a substitute for a sensible linking structure.",
      },
      { type: "h2", text: "6. Structured data" },
      {
        type: "p",
        text: "Schema markup can help search engines interpret the page type. Use relevant types such as Organization, ProfessionalService, Service, Article and BreadcrumbList where they match the content. Do not add fake reviews, ratings or business details.",
      },
      {
        type: "p",
        text: "Validate structured data after implementation and keep it updated when prices, services or business information change.",
      },
      { type: "h2", text: "7. Images and media" },
      {
        type: "ul",
        items: [
          "Use descriptive file names.",
          "Write meaningful alt text for informative images.",
          "Compress and resize images before upload.",
          "Use modern formats such as WebP or AVIF where supported.",
          "Lazy-load below-the-fold images — but not the main hero content.",
        ],
      },
      { type: "h2", text: "8. Performance" },
      {
        type: "p",
        text: "Core Web Vitals are a useful baseline: LCP measures loading, INP measures responsiveness and CLS measures visual stability. Focus on the causes rather than chasing a score: oversized images, unnecessary scripts, too many fonts and layout shifts will affect real users as well as search.",
      },
      { type: "h2", text: "9. Mobile behaviour" },
      {
        type: "p",
        text: "Google indexes the mobile version of a site. Check that content is not hidden or removed on small screens, that navigation is usable and that tap targets are large enough. The mobile page should contain the same essential content as the desktop version.",
      },
      { type: "h2", text: "10. Error handling and redirects" },
      {
        type: "p",
        text: "A custom 404 page should help people recover. Redirects should be direct, temporary where appropriate and mapped one-to-one from old URLs. Remove redirect chains and broken internal links before launch.",
      },
      { type: "h2", text: "11. Search Console setup" },
      {
        type: "p",
        text: "Verify the production domain in Google Search Console, submit the sitemap and check the indexation report after launch. Confirm that analytics and consent settings are configured correctly. These are the instruments you will use to spot problems.",
      },
      {
        type: "p",
        text: "Technical SEO creates the conditions for good content to work. It does not guarantee rankings, because competition, authority and content quality also matter. Build it properly once, then keep measuring. Explore the studio's [website design and development service](/services/website-development) if you need the foundations built properly.",
      },
    ],
    takeaway:
      "Make crawlability, clean structure, metadata, internal links, performance and indexation part of the build. Technical health is a prerequisite for sustainable SEO, not a guarantee of rankings.",
    relatedServices: ["website-development", "website-maintenance"],
    relatedPosts: [
      "speed-optimization-guide",
      "redesign-checklist",
    ],
  },
  {
    slug: "speed-optimization-guide",
    title: "Website speed optimization: what business owners should know",
    seoTitle: "Website speed optimization: a business owner's guide",
    excerpt:
      "A practical guide to the causes of a slow website, the metrics that matter and the fixes that make the biggest difference.",
    category: "Performance",
    date: "2026-09-18",
    author: "Freelen Studio",
    cover: {
      index: "07",
      kicker: "Speed",
      background: "#f2e26a",
      foreground: "#171811",
      accent: "#1f42ff",
      motif: "orb",
    },
    intro:
      "A slow website feels uncertain. Pages take a moment too long, images jump into place, a button does not respond immediately. Visitors rarely diagnose the cause; they simply leave or trust the business a little less.",
    blocks: [
      {
        type: "p",
        text: "Speed is also a search consideration and a real cost on mobile networks. The aim is not a perfect score in a testing tool. It is a site that feels quick and stable for real people on ordinary devices.",
      },
      { type: "h2", text: "Measure the right things" },
      {
        type: "p",
        text: "Use field data where available, because it reflects real visits, and lab tools to diagnose specific problems. Three metrics are a useful starting point:",
      },
      {
        type: "ul",
        items: [
          "**LCP (Largest Contentful Paint):** how quickly the main content appears. Usually the hero image or main heading.",
          "**INP (Interaction to Next Paint):** how quickly the page responds when someone taps or clicks.",
          "**CLS (Cumulative Layout Shift):** how much the page moves around while loading.",
        ],
      },
      {
        type: "p",
        text: "Test representative pages, not only the homepage. Product pages, service pages and articles can behave very differently.",
      },
      { type: "h2", text: "Images are usually the biggest opportunity" },
      {
        type: "p",
        text: "Most business sites load more image data than necessary. A 3 MB photo displayed in a small card is wasted bandwidth and delays everything around it.",
      },
      {
        type: "ol",
        items: [
          "Resize images to the dimensions they are actually displayed at.",
          "Compress them sensibly and use WebP or AVIF.",
          "Serve responsive image sizes so phones do not download desktop assets.",
          "Lazy-load images outside the first screen.",
          "Avoid lazy-loading the hero image or other above-the-fold critical content.",
          "Set width and height attributes to avoid layout shifts.",
        ],
      },
      { type: "h2", text: "Limit fonts and load them properly" },
      {
        type: "p",
        text: "Each extra font file delays text rendering. Use one or two typefaces, load only the weights you need and consider self-hosting or next/font in a Next.js build. Avoid invisible text while fonts load; a sensible fallback is better than a blank heading.",
      },
      { type: "h2", text: "Reduce JavaScript" },
      {
        type: "p",
        text: "Scripts are expensive because the browser has to download, parse and execute them. Third-party chat widgets, analytics tags, pop-ups and tracking pixels add up quickly. Review every script and remove anything that is not earning its place.",
      },
      {
        type: "callout",
        title: "A useful audit question",
        text: "If this script disappeared, what would break for a real user? If the answer is “nothing important”, it probably should not be loading before the page is interactive.",
      },
      { type: "h2", text: "Fix layout shifts" },
      {
        type: "p",
        text: "Content jumping around is one of the most irritating speed problems. Reserve space for images, ads, embeds and banners. Avoid injecting content above the user's scroll position. Use CSS that keeps visible geometry stable while fonts and media load.",
      },
      { type: "h2", text: "Choose sensible hosting and caching" },
      {
        type: "p",
        text: "A fast front end on slow infrastructure is still slow. Use hosting appropriate to the platform, enable caching and compression, and keep server response times healthy. For content-led sites, a CDN and static or pre-rendered pages can make a significant difference.",
      },
      { type: "h2", text: "Don't overlook perceived speed" },
      {
        type: "p",
        text: "Perceived performance matters. Immediate visual feedback, skeleton states, sensible button states and avoiding blocking overlays all make a site feel faster even when network conditions are the same.",
      },
      { type: "h2", text: "A practical priority list" },
      {
        type: "ol",
        items: [
          "Compress and correctly size the largest images.",
          "Remove unnecessary scripts and third-party embeds.",
          "Load only the fonts and weights you use.",
          "Stabilise the layout around images and dynamic content.",
          "Cache and compress at the hosting level.",
          "Re-test on a throttled mobile connection.",
          "Fix regressions as part of ongoing maintenance.",
        ],
      },
      {
        type: "p",
        text: "You do not need to chase a perfect audit score. You need a site that loads quickly, responds promptly and stays stable. The studio's [website development](/services/website-development) and [maintenance](/services/website-maintenance) services include performance-conscious implementation and checks.",
      },
    ],
    takeaway:
      "Speed improvements come from disciplined fundamentals: right-sized images, fewer scripts, sensible fonts, stable layouts and appropriate hosting. Measure real pages and real devices.",
    relatedServices: ["website-development", "website-maintenance"],
    relatedPosts: [
      "technical-seo-checklist",
      "ecommerce-launch-features",
    ],
  },
  {
    slug: "choose-a-web-developer",
    title: "How to choose a web developer for your business",
    seoTitle: "How to choose a web developer: questions that reveal the truth",
    excerpt:
      "Look past the portfolio carousel. These questions reveal how a developer thinks, communicates and handles the parts of a project that actually matter.",
    category: "Working together",
    date: "2026-09-08",
    author: "Freelen Studio",
    cover: {
      index: "08",
      kicker: "Hiring",
      background: "#3a1a44",
      foreground: "#fbf1f6",
      accent: "#ff8abd",
      motif: "type",
    },
    intro:
      "The right web developer is not simply the one with the best-looking portfolio. You are hiring a partner for a project with deadlines, dependencies and real business consequences. How they work matters as much as what they have built.",
    blocks: [
      {
        type: "p",
        text: "Most developers can show you a polished homepage. Fewer can explain why design and technical decisions were made, how scope is controlled or what happens when something breaks after launch. The interview process should surface that difference.",
      },
      { type: "h2", text: "Start with relevant work, not the whole portfolio" },
      {
        type: "p",
        text: "Look for projects with a similar problem shape: a similar business model, level of complexity or set of constraints. Then visit the live sites.",
      },
      {
        type: "ul",
        items: [
          "Check the site on a phone, not just a desktop screenshot.",
          "Click the navigation, forms and primary calls to action.",
          "Notice page speed and whether images load sensibly.",
          "Read the copy. Does it explain the business clearly?",
          "Check whether the site appears to have been maintained since launch.",
        ],
      },
      {
        type: "p",
        text: "Ask what the developer's specific contribution was. On team projects, the person presenting the work may not have built every part. That is normal; clarity is what matters.",
      },
      { type: "h2", text: "Ask how they approach a project" },
      {
        type: "p",
        text: "A strong developer should be able to explain a repeatable process. Ask:",
      },
      {
        type: "ol",
        items: [
          "How do you clarify requirements before quoting?",
          "What does a typical discovery phase produce?",
          "How do you handle content responsibilities?",
          "When does design become development, and how are changes managed?",
          "What do you test before launch?",
          "How do you handle bugs and support after launch?",
        ],
      },
      {
        type: "callout",
        title: "Listen for specificity",
        text: "“We follow a proven process” tells you little. A useful answer names the milestones, what you will receive and what happens if requirements change.",
      },
      { type: "h2", text: "Ask about scope and pricing" },
      {
        type: "p",
        text: "A professional developer will explain how the scope affects the price and what is excluded. Be cautious if a fixed price is offered before the requirements have been discussed.",
      },
      {
        type: "p",
        text: "Ask what happens when a new request appears mid-project. Good answers define a change process: how it is quoted, how it affects the timeline and who approves it.",
      },
      { type: "h2", text: "Ask who owns the accounts" },
      {
        type: "p",
        text: "The domain, hosting, CMS, analytics and repository should be controlled by the business, with the developer given access rather than taking ownership. If a developer insists on holding every account, ask why and ensure the arrangement is written into the contract.",
      },
      { type: "h2", text: "Ask about technology for the right reasons" },
      {
        type: "p",
        text: "The technology should follow the business need, not the developer's preference. A freelancer who insists on one stack for every project may be limiting your options; one who can explain trade-offs is more useful.",
      },
      {
        type: "p",
        text: "Also ask what happens if you stop working together. A maintainable site, documented setup and portable accounts matter more than a trendy framework.",
      },
      { type: "h2", text: "Ask about SEO and performance" },
      {
        type: "p",
        text: "These should not be separate mysteries. Even if you do not buy a dedicated SEO service, the site's structure, metadata, image handling and performance should be built with search and usability in mind. Ask how those considerations appear in the build.",
      },
      { type: "h2", text: "Check communication style" },
      {
        type: "p",
        text: "You do not need daily calls, but you do need clear expectations. Ask when updates will be sent, how decisions are documented and what the response window is for questions. A developer who is vague before the contract will rarely become clearer afterwards.",
      },
      { type: "h2", text: "Red flags to take seriously" },
      {
        type: "ul",
        items: [
          "Guaranteed rankings, leads or revenue.",
          "Unlimited revisions without a definition of scope.",
          "No written proposal or contract.",
          "Unwillingness to let you own the accounts.",
          "No testing plan for mobile, forms or launch.",
          "Portfolio sites that are all screenshots with no live links.",
          "A price that is dramatically below every other quote with no explanation.",
        ],
      },
      { type: "h2", text: "The final question" },
      {
        type: "p",
        text: "Can this person explain your project back to you in plain language? If they understand the business problem, ask good questions and can show how the work will be scoped and delivered, that is a stronger signal than a flashy portfolio alone.",
      },
      {
        type: "p",
        text: "The studio's [process](/process) explains how projects are scoped and delivered. If you would like to discuss a fit, [send a project enquiry](/contact).",
      },
    ],
    takeaway:
      "Choose a developer who asks about the business, defines scope clearly, tests the real journey, hands over ownership and can explain trade-offs in plain language.",
    relatedServices: ["website-development", "website-maintenance"],
    relatedPosts: [
      "business-website-cost-india",
      "custom-vs-template-website",
    ],
  },
];

export const blogCategories = [
  "All",
  ...Array.from(new Set(articles.map((article) => article.category))),
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(article: Article) {
  return article.relatedPosts
    .map((slug) => getArticle(slug))
    .filter((result): result is Article => Boolean(result));
}

export function getLatestArticles(limit = 3) {
  return [...articles]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, limit);
}

export function getReadingTime(article: Article) {
  const words = [
    article.intro,
    ...article.blocks.map((block) => {
      if (block.type === "ul" || block.type === "ol") return block.items.join(" ");
      if (block.type === "callout") return `${block.title} ${block.text}`;
      if (block.type === "quote") return block.text;
      return block.text;
    }),
  ]
    .join(" ")
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(words / 220));
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}
