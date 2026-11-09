import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { articles } from "@/content/blog";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

const baseUrl = business.siteUrl;

const staticPages: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/process", changeFrequency: "monthly", priority: 0.7 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((page) => ({
    url: new URL(page.path, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const serviceEntries = services.map((service) => ({
    url: new URL(`/services/${service.slug}`, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectEntries = projects.map((project) => ({
    url: new URL(`/portfolio/${project.slug}`, baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleEntries = articles.map((article) => ({
    url: new URL(`/blog/${article.slug}`, baseUrl).toString(),
    lastModified: new Date(article.updated ?? article.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...projectEntries, ...articleEntries];
}
