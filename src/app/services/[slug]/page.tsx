import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  RefreshCw,
  ShoppingBag,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { getService, services, type ServiceIcon } from "@/content/services";
import { getProject, projects } from "@/content/projects";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProjectMiniCard } from "@/components/portfolio/ProjectMiniCard";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  shopping: ShoppingBag,
  user: UserRound,
  refresh: RefreshCw,
  wrench: Wrench,
};

const tones: Record<string, { background: string; foreground: string; accent: string }> = {
  "website-development": { background: "#e8eef5", foreground: "#0a1f3c", accent: "#2848ff" },
  "ecommerce-development": { background: "#edf7e8", foreground: "#102b13", accent: "#2f9e27" },
  "portfolio-websites": { background: "#f7eee4", foreground: "#3a1a0c", accent: "#e85a2a" },
  "website-redesign": { background: "#f8eff5", foreground: "#3d1039", accent: "#8e2b7a" },
  "website-maintenance": { background: "#171a14", foreground: "#f4f0e7", accent: "#d8f45b" },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = iconMap[service.icon];
  const tone = tones[service.slug];
  const related = service.relatedProjects
    .map((projectSlug) => getProject(projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const heroProject = related[0] ?? projects[0];
  const nextService = services[(services.indexOf(service) + 1) % services.length];

  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.navLabel },
            ]}
          />
        </div>

        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-14 lg:py-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span
                className="flex size-10 items-center justify-center border border-ink/15"
                style={{ color: tone.accent }}
              >
                <Icon size={17} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/60">
                Service {service.number} / 06
              </p>
            </div>

            <h1 className="mt-7">
              <span className="block font-sans text-[0.7rem] font-bold uppercase tracking-[0.16em] text-ink/60">
                {service.name}
              </span>
              <span className="display-xl mt-4 block">
                {service.headline}
                <br />
                <span className="serif-accent">{service.headlineAccent}</span>
              </span>
            </h1>

            <p className="body-lg mt-7 max-w-2xl">{service.intro}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Discuss this service</ButtonLink>
              <ButtonLink href="/pricing" variant="outline" arrow="up-right">
                See pricing guidance
              </ButtonLink>
            </div>

            <div className="mt-9 border-t border-ink/10 pt-5">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                Best suited to
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {service.fitFor.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-1.5 text-[0.72rem] text-ink/55"
                  >
                    <span className="size-1 bg-ink/30" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="relative overflow-hidden border border-ink/15 p-5 sm:p-6"
              style={{
                backgroundColor: tone.background,
                color: tone.foreground,
              }}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.15em] opacity-55">
                  Relevant work
                </p>
                <p className="text-[0.72rem] opacity-45">{heroProject.domain}</p>
              </div>
              <Link
                href={`/portfolio/${heroProject.slug}`}
                aria-label={`See the ${heroProject.name} project`}
                className="block"
              >
                <BrowserFrame
                  src={heroProject.images.hero}
                  alt={heroProject.images.heroAlt}
                  url={heroProject.domain}
                  imageClassName="aspect-[16/10]"
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  priority
                />
              </Link>
              <div className="mt-5 border-t border-current/15 pt-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] opacity-45">
                  What good looks like
                </p>
                <ul className="mt-3 space-y-2.5">
                  {service.outcomes.slice(0, 3).map((outcome, index) => (
                    <li key={outcome} className="flex gap-3 text-[0.74rem] leading-5 opacity-80">
                      <span className="mt-0.5 font-display text-[0.7rem] tracking-[0.08em] opacity-50">
                        0{index + 1}
                      </span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 text-[0.72rem] text-ink/55">
              <span>More work in the portfolio</span>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-1 hover:text-ink"
              >
                View projects
                <ArrowUpRight size={11} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink/65">The problem</p>
            <h2 className="display-lg mt-5">{service.problemTitle}</h2>
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-ink/15 pt-5 lg:max-w-sm">
              <div>
                <p className="font-display text-[2rem] font-medium tracking-[-0.05em] text-ink/15">
                  /{service.number}
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.11em] text-ink/60">
                  Service focus
                </p>
              </div>
              <div>
                <p className="font-display text-[2rem] font-medium tracking-[-0.05em] text-ink/15">
                  1:1
                </p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.11em] text-ink/60">
                  Direct communication
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-5">
              {service.problem.map((paragraph) => (
                <p key={paragraph} className="body-md text-[1rem] leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <ul className="mt-9 grid gap-0 sm:grid-cols-3">
              {service.outcomes.map((outcome, index) => (
                <li
                  key={outcome}
                  className="border-t border-ink/15 pr-4 pt-4"
                >
                  <span className="font-display text-[0.7rem] tracking-[0.1em] text-ink/50">
                    0{index + 1} / outcome
                  </span>
                  <p className="mt-2 text-[0.78rem] leading-6 text-ink/75">
                    {outcome}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="surface-dark dark-grid-lines relative py-20 lg:py-24">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-paper/60">What is included</p>
              <h2 className="display-lg mt-5 text-paper">
                The work,
                <br />
                <span className="serif-accent text-lime">made concrete.</span>
              </h2>
              <p className="body-md mt-5 max-w-sm !text-paper/50">
                Final inclusions are set out in the proposal. Not every project
                needs every item — the scope should follow the actual requirement.
              </p>
              <ButtonLink
                href="/contact"
                variant="accent"
                className="mt-8"
              >
                Request a proposal
              </ButtonLink>
            </div>

            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2">
                {service.deliverables.map((deliverable, index) => (
                  <div
                    key={deliverable}
                    className="flex gap-4 border-t border-white/15 py-5 sm:pr-6"
                  >
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center border border-white/20 text-lime">
                      <Check size={12} strokeWidth={2} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-semibold tracking-[0.1em] text-paper/50">
                        0{index + 1}
                      </p>
                      <p className="mt-1 text-[0.84rem] leading-6 text-paper/75">
                        {deliverable}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 border border-white/15 p-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-paper/55">
                  Scope is confirmed before the build
                </p>
                <p className="mt-2 text-[0.78rem] leading-6 text-paper/50">
                  Additional integrations, content production and third-party
                  services are quoted separately when they are required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="flex flex-col gap-5 border-b border-ink/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-ink/65">How we get there</p>
              <h2 className="display-lg mt-4">
                A short, visible process.
              </h2>
            </div>
            <Link href="/process" className="text-link">
              The full studio process
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
            {service.workflow.map((step, index) => (
              <li
                key={step.title}
                className="border-b border-ink/15 py-7 sm:pr-7 lg:border-b-0 lg:border-r lg:border-ink/15 lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <p className="font-display text-[0.7rem] font-semibold tracking-[0.12em] text-ink/50">
                  /0{index + 1}
                </p>
                <h3 className="display-sm mt-4 !text-[1.18rem]">{step.title}</h3>
                <p className="mt-2.5 text-[0.78rem] leading-6 text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section border-t border-ink/10 bg-paper-light">
        <div className="container-editorial">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-ink/65">Related work</p>
              <h2 className="display-lg mt-4">
                Where this work
                <br />
                <span className="serif-accent">meets the real world.</span>
              </h2>
            </div>
            <Link href="/portfolio" className="text-link shrink-0 pb-1">
              All case studies
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {related.slice(0, 3).map((project) => (
              <ProjectMiniCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-deep py-14 lg:py-16">
        <div className="container-editorial grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink/65">Budget guidance</p>
            <p className="display-md mt-4 max-w-2xl">{service.pricingNote}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:col-start-9 lg:justify-end">
            <ButtonLink href="/pricing" variant="outline">
              View packages
            </ButtonLink>
            <ButtonLink href="/contact">Request a proposal</ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink/65">Questions</p>
            <h2 className="display-lg mt-5">
              Before we
              <br />
              <span className="serif-accent">begin.</span>
            </h2>
            <p className="body-md mt-5 max-w-sm">
              Still wondering about something specific? Send a short note — a
              useful answer is better than a long sales page.
            </p>
            <Link href="/contact" className="text-link mt-6">
              Ask a question
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <div className="container-editorial pb-10">
        <div className="flex flex-col gap-4 border-t border-ink/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.7rem] uppercase tracking-[0.13em] text-ink/55">
            Next service
          </p>
          <Link
            href={`/services/${nextService.slug}`}
            className="group inline-flex items-center gap-3 font-display text-lg tracking-[-0.03em]"
          >
            {nextService.name}
            <span className="flex size-8 items-center justify-center border border-ink/20 transition-colors group-hover:bg-ink group-hover:text-lime">
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Link>
        </div>
      </div>

      <ProjectCTA
        eyebrow={`Discuss ${service.navLabel.toLowerCase()}`}
        title={
          <>
            Have a challenge this service covers?
            <br />
            <span className="serif-accent">Let&apos;s make it concrete.</span>
          </>
        }
      />

      <JsonLd
        data={[
          serviceSchema({
            name: service.name,
            description: service.seo.description,
            path: `/services/${service.slug}`,
            serviceType: service.navLabel,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.navLabel, path: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
