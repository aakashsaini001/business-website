/**
 * Central business configuration.
 *
 * REVIEW BEFORE LAUNCH:
 * - Replace the sample domain, email and owner details with the final business
 *   information. Phone, WhatsApp and social URLs are intentionally empty until
 *   they can be verified.
 * - Package prices are indicative starting points, not quoted fixed fees.
 */

const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://freelen.studio";

export const business = {
  name: "Freelen Studio",
  shortName: "Freelen",
  legalName: "Freelen Studio",
  ownerName: "",
  role: "Independent web designer & developer",
  tagline: "Websites built to do a job.",
  brand: {
    wordmark: "freelen",
    descriptor: "independent web studio",
    mark: "F",
  },
  email: "sainiaakash871@gmail.com",
  phone: "+91 63673 21554",
  whatsapp: "916367321554",
  location: "India",
  workingNote: "Working with clients in India and internationally",
  siteUrl: rawSiteUrl.replace(/\/$/, ""),
  currency: "INR",
  locale: "en-IN",
  availability: {
    // Set to false to remove every availability badge from the site.
    acceptingProjects: true,
    label: "Available for select projects",
    note: "Booking a limited number of launches this quarter.",
  },
  bookingUrl: "",
  socials: [] as { label: string; href: string }[], // Add only verified profiles
  serviceArea: ["India", "Australia", "United Kingdom", "United States"],
  responseNote:
    "Every enquiry is read personally. Share a little context and I will reply with a clear next step.",
  founder: {
    title: "Independent web developer & digital designer",
    philosophy:
      "A good website is a piece of business infrastructure. It should make the offer obvious, earn trust quickly and stay easy to maintain long after launch.",
  },
  // Add verified, permission-cleared client testimonials here. When the list is
  // empty the home page automatically shows the project-led proof section.
  testimonials: [] as {
    quote: string;
    name: string;
    role: string;
    company?: string;
    source?: string;
    permissionConfirmed: boolean;
  }[],
};

export const fullAddress = `${business.location}`;

export const whatsappUrl = business.whatsapp
  ? `https://wa.me/${business.whatsapp.replace(/\D/g, "")}`
  : "";

export const mailtoUrl = `mailto:${business.email}`;

export const telUrl = business.phone
  ? `tel:${business.phone.replace(/[^\d+]/g, "")}`
  : "";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", hasServicesMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNavigation = {
  services: [
    { label: "Website design & development", href: "/services/website-development" },
    { label: "E-commerce development", href: "/services/ecommerce-development" },
    { label: "Portfolio websites", href: "/services/portfolio-websites" },
    { label: "Redesign & changes", href: "/services/website-redesign" },
    { label: "Maintenance & support", href: "/services/website-maintenance" },
  ],
  studio: [
    { label: "About the studio", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Process", href: "/process" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy policy", href: "/privacy-policy" },
    { label: "Terms & conditions", href: "/terms-and-conditions" },
  ],
} as const;
