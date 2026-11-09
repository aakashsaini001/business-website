import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  formatArticleDate,
  getReadingTime,
  type Article,
} from "@/content/blog";
import { ArticleCover } from "@/components/ui/ArticleCover";
import { cn } from "@/lib/utils";

type ArticleCardProps = {
  article: Article;
  className?: string;
  featured?: boolean;
};

export function ArticleCard({
  article,
  className,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={cn("group flex flex-col", className)}>
      <Link
        href={`/blog/${article.slug}`}
        aria-label={`Read ${article.title}`}
        className="block"
      >
        <ArticleCover
          cover={article.cover}
          compact={!featured}
          className={featured ? "aspect-[16/9]" : "aspect-[4/3]"}
        />
      </Link>
      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
        <span>{article.category}</span>
        <span aria-hidden="true">/</span>
        <span>{formatArticleDate(article.date)}</span>
        <span aria-hidden="true">/</span>
        <span>{getReadingTime(article)} min read</span>
      </div>
      <h3
        className={cn(
          "mt-3 font-display font-medium tracking-[-0.04em] transition-opacity group-hover:opacity-55",
          featured
            ? "text-[clamp(1.7rem,3vw,2.7rem)] leading-[1.05]"
            : "text-[1.25rem] leading-[1.15]",
        )}
      >
        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className="mt-3 line-clamp-3 text-[0.78rem] leading-6 text-muted">
        {article.excerpt}
      </p>
      <Link
        href={`/blog/${article.slug}`}
        className="mt-4 inline-flex items-center gap-1.5 self-start text-[0.72rem] font-semibold underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink/60"
      >
        Read field note
        <ArrowUpRight size={12} aria-hidden="true" />
      </Link>
    </article>
  );
}
