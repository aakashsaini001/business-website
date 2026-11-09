import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import {
  getProject,
  projects,
  type Project,
} from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { JsonLd } from "@/components/ui/JsonLd";
import { PhoneFrame } from "@/components/ui/PhoneFrame";
import { ProjectMiniCard } from "@/components/portfolio/ProjectMiniCard";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return createPageMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/portfolio/${project.slug}`,
    image: project.images.hero,
  });
}

function ProjectNavigation({ project }: { project: Project }) {
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <div className="container-editorial pb-10 pt-4">
      <div className="grid gap-4 border-t border-ink/15 pt-5 sm:grid-cols-2">
        <Link href={`/portfolio/${previous.slug}`} className="group flex items-center gap-4">
          <span className="flex size-9 shrink-0 items-center justify-center border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-lime">
            <ArrowLeft size={14} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[0.7rem] uppercase tracking-[0.13em] text-ink/55">
              Previous project
            </span>
            <span className="mt-1 block font-display text-[0.92rem] tracking-[-0.02em]">
              {previous.name}
            </span>
          </span>
        </Link>
        <Link
          href={`/portfolio/${next.slug}`}
          className="group flex items-center justify-between gap-4 sm:justify-end sm:text-right"
        >
          <span className="order-2 sm:order-1">
            <span className="block text-[0.7rem] uppercase tracking-[0.13em] text-ink/55">
              Next project
            </span>
            <span className="mt-1 block font-display text-[0.92rem] tracking-[-0.02em]">
              {next.name}
            </span>
          </span>
          <span className="order-1 flex size-9 shrink-0 items-center justify-center border border-ink/15 transition-colors group-hover:bg-ink group-hover:text-lime sm:order-2">
            <ArrowRight size={14} aria-hidden="true" />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = project.relatedSlugs
    .map((relatedSlug) => getProject(relatedSlug))
    .filter((item): item is Project => Boolean(item));

  return (
    <>
      <article>
        <header className="border-b border-ink/10">
          <div className="container-editorial pt-6">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: project.shortName },
              ]}
            />
          </div>

          <div className="container-editorial grid gap-8 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-ink/60">
                <span>{project.order}</span>
                <span aria-hidden="true">/</span>
                <span>{project.category}</span>
                <span aria-hidden="true">/</span>
                <span>{project.discipline}</span>
              </div>
              <h1 className="display-xl mt-5">{project.name}</h1>
              <p className="body-lg mt-6 max-w-3xl">{project.summary}</p>
              <div className="mt-7 max-w-2xl border-l-2 border-lime-deep bg-lime/20 py-3 pl-4 pr-3">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/55">
                  Outcome
                </p>
                <p className="mt-1 font-display text-[1.05rem] leading-[1.35] tracking-[-0.02em]">
                  {project.result.headline}
                </p>
                <p className="mt-1 text-[0.8rem] leading-6 text-muted">
                  {project.result.detail}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-end gap-5 lg:col-span-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-ink/20 px-4 py-3.5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                <span className="text-[0.72rem] font-bold uppercase tracking-[0.13em]">
                  Visit live website
                </span>
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
              <p className="text-[0.7rem] leading-5 text-ink/55">
                {project.domain}. This is a real, publicly accessible website. The
                case study describes the experience and scope without inventing
                performance figures.
              </p>
            </div>
          </div>

          <div className="container-editorial pb-14 lg:pb-20">
            <div
              className="relative overflow-hidden px-4 pb-20 pt-6 sm:px-7 sm:pb-24 sm:pt-8 lg:px-12 lg:pb-28 lg:pt-10"
              style={{ backgroundColor: project.theme.soft }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <p
                  className="text-[0.7rem] font-bold uppercase tracking-[0.15em] opacity-70"
                  style={{ color: project.theme.foreground }}
                >
                  Desktop experience
                </p>
                <p
                  className="hidden text-[0.7rem] uppercase tracking-[0.12em] opacity-55 sm:block"
                  style={{ color: project.theme.foreground }}
                >
                  Shown as built
                </p>
              </div>
              <BrowserFrame
                src={project.images.hero}
                alt={project.images.heroAlt}
                url={project.domain}
                previewSrc={project.images.section}
                imageClassName="aspect-[16/9] sm:aspect-[16/9]"
                sizes="(max-width: 1024px) 94vw, 86vw"
                priority
              />
              <div className="absolute bottom-4 right-4 w-[24%] max-w-[8.5rem] sm:bottom-5 sm:right-7 sm:w-[17%] lg:bottom-6 lg:right-10 lg:w-[13%]">
                <PhoneFrame
                  src={project.images.mobile}
                  alt={project.images.mobileAlt}
                  sizes="(max-width: 768px) 22vw, 160px"
                  className="!border-ink/25"
                />
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow text-ink/65">The context</p>
              <h2 className="display-lg mt-5">
                What the website
                <br />
                had to <span className="serif-accent">get right.</span>
              </h2>
              <div className="mt-8 space-y-5">
                {project.context.map((paragraph) => (
                  <p key={paragraph} className="body-md text-[1rem] leading-8">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <div className="border-t border-ink/20 pt-5">
                <p className="eyebrow text-ink/65">At a glance</p>
                <dl className="mt-4">
                  {project.atAGlance.map((item) => (
                    <div
                      key={item.label}
                      className="grid grid-cols-[6.5rem_1fr] gap-3 border-b border-ink/10 py-3.5"
                    >
                      <dt className="text-[0.72rem] uppercase tracking-[0.09em] text-ink/55">
                        {item.label}
                      </dt>
                      <dd className="text-[0.76rem] leading-5 text-ink/75">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-6">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                    Objectives
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {project.objectives.map((objective) => (
                      <li key={objective} className="flex gap-2.5 text-[0.74rem] leading-5 text-ink/65">
                        <span className="mt-1 size-1 shrink-0" style={{ backgroundColor: project.theme.accent }} aria-hidden="true" />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-paper-light py-16 lg:py-20">
          <div className="container-editorial">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow text-ink/65">Design decisions</p>
                <h2 className="display-lg mt-4">
                  Choices made
                  <br />
                  <span className="serif-accent">on purpose.</span>
                </h2>
                <p className="body-md mt-5 max-w-sm">
                  A case study is not a gallery. These are the decisions that
                  shaped how the site works — and why.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="border-t border-ink/20">
                  {project.designNotes.map((note, index) => (
                    <div
                      key={note.title}
                      className="grid gap-4 border-b border-ink/15 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 lg:grid-cols-[4rem_1fr_1fr]"
                    >
                      <p className="font-display text-[0.7rem] font-semibold tracking-[0.12em] text-ink/50">
                        0{index + 1}
                      </p>
                      <h3 className="display-sm !text-[1.15rem]">{note.title}</h3>
                      <p className="text-[0.78rem] leading-7 text-muted">
                        {note.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div
                  className="overflow-hidden p-4 sm:p-6"
                  style={{ backgroundColor: project.theme.soft }}
                >
                  <BrowserFrame
                    src={project.images.section}
                    alt={project.images.sectionAlt}
                    url={`${project.domain}/inside`}
                    previewSrc={project.images.hero}
                    imageClassName="aspect-[16/9]"
                    sizes="(max-width: 1024px) 92vw, 66vw"
                  />
                </div>
                <p className="mt-2.5 text-[0.7rem] uppercase tracking-[0.1em] text-ink/50">
                  Inside the experience / {project.domain}
                </p>
              </div>
              <div className="flex items-end justify-center gap-8 lg:col-span-4">
                <PhoneFrame
                  src={project.images.mobile}
                  alt={project.images.mobileAlt}
                  sizes="(max-width: 768px) 35vw, 190px"
                  className="w-[46%] max-w-[11rem] lg:w-[70%]"
                />
                <div className="pb-2">
                  <p className="font-display text-[2.6rem] leading-none tracking-[-0.06em] text-ink/15">
                    /
                  </p>
                  <p className="mt-2 max-w-[8rem] text-[0.7rem] leading-5 text-muted">
                    Responsive by default, not as an afterthought.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="surface-dark relative py-16 lg:py-20">
          <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-paper/60">Features & scope</p>
              <h2 className="display-lg mt-4 text-paper">
                What is
                <br />
                <span className="serif-accent text-lime">inside the build.</span>
              </h2>
              <p className="body-md mt-5 max-w-sm !text-paper/50">
                The public experience is shown above. The recorded project scope
                is outlined here, with third-party services kept clearly separate.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid gap-0 sm:grid-cols-2">
                <div className="border-t border-white/15 py-5 sm:pr-7">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-lime/70">
                    Experience features
                  </p>
                  <ul className="mt-4 space-y-3">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-[0.78rem] leading-6 text-paper/65">
                        <Check size={13} className="mt-1 shrink-0 text-lime" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/15 py-5 sm:pl-7">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-lime/70">
                    Recorded scope
                  </p>
                  <ul className="mt-4 space-y-3">
                    {project.scope.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.78rem] leading-6 text-paper/65">
                        <Check size={13} className="mt-1 shrink-0 text-lime" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-8 border-t border-white/15 pt-4 text-[0.7rem] leading-5 text-paper/55">
                {project.scopeFootnote}
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container-editorial">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow text-ink/65">More selected work</p>
                <h2 className="display-lg mt-4">Different brief. Same care.</h2>
              </div>
              <Link href="/portfolio" className="text-link shrink-0 pb-1">
                All case studies
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProjectMiniCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>

        <ProjectNavigation project={project} />
      </article>

      <ProjectCTA
        eyebrow="Website project enquiry"
        title={
          <>
            Need this kind of clarity
            <br />
            <span className="serif-accent">for your business?</span>
          </>
        }
        description="Share the context, the constraints and what the current website is not doing. The first reply will be a considered response, not a sales sequence."
      />

      <JsonLd
        data={[
          projectSchema({
            name: project.name,
            description: project.summary,
            path: `/portfolio/${project.slug}`,
            liveUrl: project.liveUrl,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
            { name: project.shortName, path: `/portfolio/${project.slug}` },
          ]),
        ]}
      />
    </>
  );
}
