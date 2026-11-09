import Link from "next/link";
import type { ArticleBlock } from "@/content/blog";
import { slugify } from "@/lib/utils";

function renderInline(text: string) {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(pattern);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>;
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith("http");

      if (isExternal) {
        return (
          <a
            key={`${href}-${index}`}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
          >
            {label}
          </a>
        );
      }

      return (
        <Link
          key={`${href}-${index}`}
          href={href}
          className="underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
        >
          {label}
        </Link>
      );
    }

    return part;
  });
}

export function getArticleHeadings(blocks: ArticleBlock[]) {
  return blocks
    .filter((block): block is Extract<ArticleBlock, { type: "h2" }> => block.type === "h2")
    .map((block) => ({ id: slugify(block.text), text: block.text }));
}

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "p":
            return <p key={`p-${index}`}>{renderInline(block.text)}</p>;
          case "h2":
            return (
              <h2 key={`h2-${index}`} id={slugify(block.text)}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={`h3-${index}`} id={slugify(block.text)}>
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={`ul-${index}`}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={`ol-${index}`}>
                {block.items.map((item, itemIndex) => (
                  <li key={`${item}-${itemIndex}`}>{renderInline(item)}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <aside key={`callout-${index}`} className="article-callout">
                <p className="eyebrow text-ink/60">Worth remembering</p>
                <p className="mt-3 font-display text-[1.2rem] font-medium leading-snug tracking-[-0.025em]">
                  {block.title}
                </p>
                <p className="mt-2 text-[0.82rem] leading-6 text-ink/60">
                  {renderInline(block.text)}
                </p>
              </aside>
            );
          case "quote":
            return (
              <figure key={`quote-${index}`} className="article-quote">
                <blockquote>
                  <p>{renderInline(block.text)}</p>
                </blockquote>
                {block.attribution ? (
                  <figcaption>{block.attribution}</figcaption>
                ) : null}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
