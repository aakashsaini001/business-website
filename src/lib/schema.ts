import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": absoluteUrl("/#studio"),
    name: business.name,
    url: business.siteUrl,
    email: business.email,
    description:
      "Independent web design and development studio building custom business websites, e-commerce experiences and search-ready digital platforms.",
    serviceType: [
      "Website design",
      "Website development",
      "E-commerce development",
      "Portfolio website development",
      "Search engine optimization",
      "Website redesign",
      "Website maintenance",
    ],
    areaServed: business.serviceArea.map((name) => ({
      "@type": "Country",
      name,
    })),
    knowsAbout: [
      "Web design",
      "Web development",
      "E-commerce",
      "Search engine optimization",
      "Website performance",
      "Responsive design",
    ],
    ...(business.phone ? { telephone: business.phone } : {}),
    ...(business.socials.length > 0
      ? { sameAs: business.socials.map((social) => social.href) }
      : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    url: business.siteUrl,
    name: business.name,
    inLanguage: "en",
    publisher: { "@id": absoluteUrl("/#studio") },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": absoluteUrl("/#studio") },
    areaServed: business.serviceArea.map((area) => ({
      "@type": "Country",
      name: area,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  authorName,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: authorName,
      url: business.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: business.name,
      url: business.siteUrl,
    },
    inLanguage: "en",
  };
}

export function projectSchema({
  name,
  description,
  path,
  liveUrl,
}: {
  name: string;
  description: string;
  path: string;
  liveUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: absoluteUrl(path),
    creator: { "@id": absoluteUrl("/#studio") },
    ...(liveUrl ? { sameAs: liveUrl } : {}),
  };
}
