import { business } from "@/config/business";

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat(business.locale, {
    style: "currency",
    currency: business.currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceRange(min: number, max: number) {
  if (min === max) return formatPrice(min);
  return `${formatPrice(min)} – ${formatPrice(max)}`;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function absoluteUrl(path = "/") {
  return new URL(path, `${business.siteUrl}/`).toString();
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function splitLines(value: string) {
  return value.split("\n").filter(Boolean);
}
