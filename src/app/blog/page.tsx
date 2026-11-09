import type { Metadata } from "next";
import { articles, blogCategories } from "@/content/blog";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { BlogList } from "@/components/blog/BlogList";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "Field notes — practical thinking on websites",
  description:
    "Practical articles on website planning, design, development, e-commerce and SEO, written for business owners making website decisions.",
  path: "/blog",
});

const topics = blogCategories
  .filter((category) => category !== "All")
  .map((category) => ({
    name: category,
    count: articles.filter((article) => article.category === category).length,
  }));

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Field notes" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">Field notes / 01—08</p>
            <h1 className="display-xl mt-5">
              Useful thinking
              <br />
              for better <span className="serif-accent">websites.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Practical notes on planning, design, development and search — for
              business owners who need to make website decisions without the
              jargon.
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-5">
              <span className="flex size-8 items-center justify-center bg-ink font-display text-[0.72rem] font-semibold text-lime">
                F
              </span>
              <p className="text-[0.72rem] leading-5 text-ink/65">
                Written by the studio. No listicles, no invented case studies and
                no guaranteed-ranking advice.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="surface-dark relative overflow-hidden p-5 sm:p-6">
              <div
                className="dark-grid-lines absolute inset-0 opacity-50"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center justify-between border-b border-white/15 pb-3">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-paper/55">
                    Topic index
                  </p>
                  <p className="text-[0.7rem] tracking-[0.1em] text-paper/65">
                    {String(articles.length).padStart(2, "0")} notes
                  </p>
                </div>
                <ul>
                  {topics.map((topic) => (
                    <li
                      key={topic.name}
                      className="flex items-center justify-between border-b border-white/10 py-3 last:border-b-0"
                    >
                      <span className="text-[0.76rem] text-paper/70">
                        {topic.name}
                      </span>
                      <span className="font-display text-[0.7rem] text-paper/50">
                        {String(topic.count).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[0.7rem] leading-5 text-paper/55">
                  Start anywhere. The notes are written to stand alone, with
                  links to deeper context where it helps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-editorial">
          <BlogList />
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-light py-14 lg:py-16">
        <div className="container-editorial grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink/65">About these notes</p>
            <h2 className="display-lg mt-4">
              Written from
              <br />
              <span className="serif-accent">real questions.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="body-md text-[1rem] leading-8">
              Most of these articles began as questions that come up during
              projects: what a website should cost, how to compare proposals, why
              a redesign is harder than it looks, or what “SEO-ready” actually
              means. The answers aim to be specific enough to use, not just
              persuasive enough to share.
            </p>
            <p className="body-md mt-4 text-[1rem] leading-8">
              Where an article references a broad range or an example, it is
              framed as guidance rather than a promise. Every project has its own
              constraints, and the right answer usually starts with the context.
            </p>
          </div>
        </div>
      </section>

      <ProjectCTA
        eyebrow="From reading to doing"
        title={
          <>
            Have a question the notes
            <br />
            <span className="serif-accent">did not answer?</span>
          </>
        }
        description="Send the context and the decision you are trying to make. A useful answer starts with understanding the actual situation."
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/blog" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Freelen Studio field notes",
            description:
              "Practical articles on website planning, design, development, e-commerce and search.",
            blogPost: articles.map((article) => ({
              "@type": "BlogPosting",
              headline: article.title,
              url: `/blog/${article.slug}`,
              datePublished: article.date,
            })),
          },
        ]}
      />
    </>
  );
}
