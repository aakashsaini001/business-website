import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio — live websites for real businesses",
  description:
    "Browse selected web design and development projects: telecommunications, modular furniture, e-commerce, dental clinics, SaaS, education and industrial services.",
  path: "/portfolio",
});

const approach = [
  {
    number: "01",
    title: "Business context first",
    body: "Each project began with the commercial job the website needed to support, not a preferred layout.",
  },
  {
    number: "02",
    title: "Structure before styling",
    body: "Information architecture and content hierarchy come first. Visual decisions make the structure easier to understand.",
  },
  {
    number: "03",
    title: "Live, maintained websites",
    body: "Every project here is a real site in use. There are no concept mockups presented as client work.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink/65">
              Selected work / 01—{String(projects.length).padStart(2, "0")}
            </p>
            <h1 className="display-xl mt-5">
              Websites with
              <br />
              real work <span className="serif-accent">behind them.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Different businesses, sectors and constraints. The common thread is
              a website designed around a clear job — and built to be used after
              launch.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start your project</ButtonLink>
              <ButtonLink href="/services" variant="outline" arrow="up-right">
                How I can help
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-paper-light">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <p className="eyebrow text-ink/60">Project index</p>
                <p className="text-[0.7rem] tracking-[0.12em] text-ink/50">
                  LIVE / {String(projects.length).padStart(2, "0")}
                </p>
              </div>
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  className="group flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-4 last:border-b-0 hover:bg-paper"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <span className="font-display text-[0.7rem] tracking-[0.08em] text-ink/50">
                      {project.order}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-display text-[1rem] tracking-[-0.025em]">
                        {project.name}
                      </p>
                      <p className="mt-0.5 truncate text-[0.72rem] text-muted">
                        {project.category}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="shrink-0 text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </Link>
              ))}
            </div>
            <p className="mt-3 text-[0.7rem] leading-5 text-ink/55">
              Every link opens a real, public website. Case studies explain the
              context and experience decisions without inventing performance
              metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-editorial">
          <PortfolioFilters />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-deep py-16 lg:py-20">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-ink/65">The common thread</p>
              <h2 className="display-lg mt-4">
                Different work.
                <br />
                <span className="serif-accent">Same discipline.</span>
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-3 lg:col-span-8">
              {approach.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-ink/15 py-5 sm:px-5 sm:first:pl-0 sm:last:pr-0"
                >
                  <p className="font-display text-[0.7rem] tracking-[0.12em] text-ink/50">
                    /{item.number}
                  </p>
                  <h3 className="mt-3 text-[0.85rem] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[0.76rem] leading-6 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA
        eyebrow="Your project could be next"
        title={
          <>
            Need a website with a job to do?
            <br />
            <span className="serif-accent">Let&apos;s define it together.</span>
          </>
        }
      />

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
          ...projects.map((project) =>
            projectSchema({
              name: project.name,
              description: project.summary,
              path: `/portfolio/${project.slug}`,
              liveUrl: project.liveUrl,
            }),
          ),
        ]}
      />
    </>
  );
}
