import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  articles,
  formatArticleDate,
  getArticle,
  getReadingTime,
  getRelatedArticles,
} from "@/content/blog";
import { getService } from "@/content/services";
import { business, mailtoUrl } from "@/config/business";
import { createPageMetadata } from "@/lib/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { ArticleBody, getArticleHeadings } from "@/components/blog/ArticleBody";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { ArticleCover } from "@/components/ui/ArticleCover";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return createPageMetadata({
    title: article.seoTitle,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    openGraphType: "article",
    publishedTime: article.date,
    modifiedTime: article.updated ?? article.date,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const headings = getArticleHeadings(article.blocks);
  const relatedArticles = getRelatedArticles(article);
  const relatedServices = article.relatedServices
    .map((serviceSlug) => getService(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      <article>
        <header className="border-b border-ink/10">
          <div className="container-editorial pt-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Field notes", href: "/blog" },
                { label: `Field note ${article.cover.index}` },
              ]}
            />
          </div>
          <div className="container-editorial py-10 lg:py-16">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/55">
              <span>{article.category}</span>
              <span aria-hidden="true">/</span>
              <span>Field note {article.cover.index}</span>
              <span aria-hidden="true">/</span>
              <span>{getReadingTime(article)} min read</span>
            </div>
            <h1 className="display-xl mt-6 max-w-5xl">{article.title}</h1>
            <p className="body-lg mt-6 max-w-3xl">{article.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-[0.72rem] text-ink/65">
              <span className="font-semibold text-ink/65">{article.author}</span>
              <span aria-hidden="true">/</span>
              <time dateTime={article.date}>
                {formatArticleDate(article.date)}
              </time>
              {article.updated ? (
                <>
                  <span aria-hidden="true">/</span>
                  <span>Updated {formatArticleDate(article.updated)}</span>
                </>
              ) : null}
            </div>
          </div>
          <div className="container-editorial pb-12 lg:pb-16">
            <ArticleCover
              cover={article.cover}
              className="aspect-[16/10] sm:aspect-[16/6]"
            />
          </div>
        </header>

        <div className="container-editorial section">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7 lg:col-start-2 lg:order-1">
              <p className="display-sm max-w-[44rem] !text-[1.35rem] !leading-[1.55] sm:!text-[1.55rem]">
                {article.intro}
              </p>

              <div className="mt-10 max-w-[44rem]">
                <ArticleBody blocks={article.blocks} />
              </div>

              <aside className="mt-12 max-w-[44rem] border border-ink/20 bg-paper-light p-6 sm:p-7">
                <p className="eyebrow text-ink/60">The short version</p>
                <p className="mt-4 font-display text-[1.25rem] font-medium leading-snug tracking-[-0.03em] sm:text-[1.45rem]">
                  {article.takeaway}
                </p>
              </aside>

              <div className="mt-10 flex flex-col gap-5 border-t border-ink/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                  <span className="tag">{article.category}</span>
                  <span className="tag">{getReadingTime(article)} min read</span>
                </div>
                <a
                  href={mailtoUrl}
                  className="inline-flex items-center gap-2 text-[0.7rem] font-semibold underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  <Mail size={13} aria-hidden="true" />
                  Ask a question about this note
                </a>
              </div>

              {relatedServices.length > 0 ? (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group flex items-center justify-between gap-4 border border-ink/15 px-4 py-3.5 transition-colors hover:border-ink hover:bg-paper-light"
                    >
                      <span>
                        <span className="block text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                          Related service
                        </span>
                        <span className="mt-1 block text-[0.78rem] font-semibold">
                          {service.name}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-ink/50 transition-colors group-hover:text-ink"
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            <aside className="lg:col-span-3 lg:col-start-10 lg:order-2">
              <div className="space-y-7 lg:sticky lg:top-28">
                {headings.length > 0 ? (
                  <div className="border-t border-ink/20 pt-4">
                    <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                      In this note
                    </p>
                    <nav aria-label="Article contents" className="mt-3">
                      <ol className="space-y-2">
                        {headings.map((heading, index) => (
                          <li key={heading.id} className="flex gap-2.5">
                            <span className="mt-0.5 font-display text-[0.7rem] text-ink/65">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <a
                              href={`#${heading.id}`}
                              className="text-[0.72rem] leading-5 text-ink/55 transition-colors hover:text-ink"
                            >
                              {heading.text}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                ) : null}

                <div className="border-t border-ink/15 pt-4">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                    Written by
                  </p>
                  <p className="mt-2 text-[0.76rem] font-semibold">
                    {business.name}
                  </p>
                  <p className="mt-1 text-[0.7rem] leading-5 text-muted">
                    {business.role}. Notes are written from project work and
                    practical website questions.
                  </p>
                </div>

                <div className="border-t border-ink/15 pt-4">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                    Published
                  </p>
                  <p className="mt-1.5 text-[0.7rem] text-ink/55">
                    {formatArticleDate(article.date)}
                  </p>
                </div>

                <div className="border-t border-ink/15 pt-4">
                  <ButtonLink href="/contact" className="w-full">
                    Discuss a project
                  </ButtonLink>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 ? (
        <section className="border-y border-ink/10 bg-paper-light py-16 lg:py-20">
          <div className="container-editorial">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-ink/65">Keep reading</p>
                <h2 className="display-lg mt-4">Related field notes.</h2>
              </div>
              <Link href="/blog" className="text-link shrink-0 pb-1">
                All notes
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-ink/10 bg-paper-deep py-14">
        <div className="container-editorial flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow text-ink/65">Put the thinking to work</p>
            <h2 className="display-md mt-3 max-w-2xl">
              Need a clear website, not just more advice?
            </h2>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <ButtonLink href="/portfolio" variant="outline" arrow="up-right">
              See the work
            </ButtonLink>
            <ButtonLink href="/contact">Start a conversation</ButtonLink>
          </div>
        </div>
      </section>

      <JsonLd
        data={[
          articleSchema({
            title: article.title,
            description: article.excerpt,
            path: `/blog/${article.slug}`,
            datePublished: article.date,
            dateModified: article.updated ?? article.date,
            authorName: article.author,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/blog" },
            { name: article.title, path: `/blog/${article.slug}` },
          ]),
        ]}
      />
    </>
  );
}
