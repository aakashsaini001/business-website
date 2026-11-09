import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  formatArticleDate,
  getLatestArticles,
  getReadingTime,
} from "@/content/blog";
import { ArticleCover } from "@/components/ui/ArticleCover";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function JournalPreview() {
  const latest = getLatestArticles(3);
  const [featured, ...rest] = latest;

  return (
    <section className="section bg-paper-deep">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Field notes"
          title={
            <>
              Useful thinking for
              <br />
              <span className="serif-accent">better website decisions.</span>
            </>
          }
          description="Practical notes on scoping, design, development and search — written for business owners, not just developers."
          link={{ label: "Read all articles", href: "/blog" }}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-6">
          <Reveal as="article" className="group lg:col-span-6">
            <Link href={`/blog/${featured.slug}`} className="block">
              <Reveal variant="clip">
                <ArticleCover
                  cover={featured.cover}
                  className="aspect-[16/10]"
                />
              </Reveal>
              <div className="mt-5 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-ink/60">
                <span className="text-rust">{featured.category}</span>
                <span aria-hidden="true">/</span>
                <time dateTime={featured.date}>{formatArticleDate(featured.date)}</time>
                <span aria-hidden="true">/</span>
                <span>{getReadingTime(featured)} min read</span>
              </div>
              <h3 className="display-md mt-3 max-w-xl !text-[1.8rem] transition-colors group-hover:text-ink/65 sm:!text-[2.2rem]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-muted">
                {featured.excerpt}
              </p>
            </Link>
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-6 lg:grid-cols-1 lg:gap-0">
            {rest.map((article, index) => (
              <Reveal
                as="article"
                key={article.slug}
                delay={index * 70}
                className={`group ${index === 0 ? "lg:border-b lg:border-ink/15 lg:pb-5" : "lg:pt-5"}`}
              >
                <Link
                  href={`/blog/${article.slug}`}
                  className="grid gap-4 sm:grid-cols-[8.5rem_1fr] sm:items-start lg:grid-cols-[10rem_1fr]"
                >
                  <ArticleCover
                    cover={article.cover}
                    className="aspect-[4/3]"
                    compact
                  />
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-ink/55">
                      <span className="text-cobalt">{article.category}</span>
                      <span aria-hidden="true">/</span>
                      <span>{getReadingTime(article)} min</span>
                    </div>
                    <h3 className="display-sm mt-2 !text-[1.15rem] transition-colors group-hover:text-ink/60 lg:!text-[1.3rem]">
                      {article.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.09em] text-ink/55">
                      Read article
                      <ArrowUpRight size={12} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
