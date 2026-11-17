import { articles } from "@/content/blog";
import { business } from "@/config/business";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const sorted = [...articles].sort((a, b) =>
    (b.updated ?? b.date).localeCompare(a.updated ?? a.date),
  );

  const items = sorted
    .map((article) => {
      const url = absoluteUrl(`/blog/${article.slug}`);
      return [
        "    <item>",
        `      <title>${escapeXml(article.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${new Date(article.date).toUTCString()}</pubDate>`,
        `      <description>${escapeXml(article.excerpt)}</description>`,
        `      <category>${escapeXml(article.category)}</category>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    "  <channel>",
    `    <title>${escapeXml(`${business.name} — Field notes`)}</title>`,
    `    <link>${absoluteUrl("/blog")}</link>`,
    `    <description>${escapeXml(
      "Practical notes on websites, design, development and search visibility.",
    )}</description>`,
    `    <language>en-in</language>`,
    `    <atom:link href="${absoluteUrl("/blog/rss.xml")}" rel="self" type="application/rss+xml" />`,
    items,
    "  </channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
