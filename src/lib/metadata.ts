import type { Metadata } from "next";
import { business } from "@/config/business";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  openGraphType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = "website",
  publishedTime,
  modifiedTime,
  image,
  imageAlt,
  noIndex = false,
}: PageMetadata): Metadata {
  const canonical = path === "/" ? "/" : path;

  return {
    title,
    description,
    alternates: { canonical },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.name,
      locale: "en_IN",
      type: openGraphType,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      ...(image
        ? { images: [{ url: image, alt: imageAlt ?? title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
