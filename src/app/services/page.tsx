import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  RefreshCw,
  ShoppingBag,
  UserRound,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { services, type ServiceIcon } from "@/content/services";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  shopping: ShoppingBag,
  user: UserRound,
  refresh: RefreshCw,
  wrench: Wrench,
};

export const metadata: Metadata = createPageMetadata({
  title: "Services — web design, e-commerce and support",
  description:
    "Explore the studio's web design and development services: custom business websites, e-commerce, portfolio sites, redesigns and ongoing maintenance.",
  path: "/services",
});

const startPaths = [
  {
    label: "Starting fresh",
    description: "A new website with a clear structure and a considered visual identity.",
    href: "/services/website-development",
    cta: "Website design & development",
  },
  {
    label: "Selling online",
    description: "A storefront built around product discovery and a confident purchase.",
    href: "/services/ecommerce-development",
    cta: "E-commerce development",
  },
  {
    label: "Improving what exists",
    description: "Focused redesign, fixes and support for a site that has stopped keeping up.",
    href: "/services/website-redesign",
    cta: "Redesign & changes",
  },
];

const commonStandards = [
  {
    number: "01",
    title: "A clear brief",
    body: "Objectives, audience, scope and exclusions are agreed before design begins.",
  },
  {
    number: "02",
    title: "A considered build",
    body: "Responsive layouts, maintainable components and performance-conscious decisions.",
  },
  {
    number: "03",
    title: "Search-ready structure",
    body: "Semantic markup, metadata and crawlable information architecture as standard.",
  },
  {
    number: "04",
    title: "A clean handover",
    body: "Account access, documentation and a defined post-launch support path.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink/65">Services / 01—05</p>
            <h1 className="display-xl mt-5">
              From a first launch
              <br />
              to the <span className="serif-accent">next improvement.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              A website is not one purchase. It is designed, built, launched,
              measured and improved. These five services cover that life cycle —
              with a clear scope for each engagement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Discuss your project</ButtonLink>
              <ButtonLink href="/pricing" variant="outline" arrow="up-right">
                See starting points
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-ink/15 bg-paper-light">
              <div className="border-b border-ink/10 px-5 py-4 sm:px-6">
                <p className="eyebrow text-ink/60">Choose by where you are</p>
              </div>
              {startPaths.map((path, index) => (
                <Link
                  key={path.href}
                  href={path.href}
                  className="group grid grid-cols-[2rem_1fr_2rem] items-start gap-3 border-b border-ink/10 px-5 py-5 last:border-b-0 hover:bg-paper sm:px-6"
                >
                  <span className="pt-0.5 font-display text-[0.7rem] tracking-[0.1em] text-ink/50">
                    0{index + 1}
                  </span>
                  <span>
                    <span className="text-[0.72rem] font-bold uppercase tracking-[0.13em] text-ink/60">
                      {path.label}
                    </span>
                    <span className="mt-1.5 block text-[0.86rem] leading-6 text-ink/75">
                      {path.description}
                    </span>
                    <span className="mt-2 block text-[0.72rem] font-semibold underline decoration-ink/20 underline-offset-4">
                      {path.cta}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.6}
                    aria-hidden="true"
                    className="mt-1 text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper-light">
        <div className="container-editorial grid gap-5 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {commonStandards.map((standard) => (
            <div key={standard.number} className="flex gap-3">
              <span className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-ink/50">
                /{standard.number}
              </span>
              <div>
                <p className="text-[0.78rem] font-semibold">{standard.title}</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-muted">
                  {standard.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="flex flex-col gap-5 border-b border-ink/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-ink/65">The service directory</p>
              <h2 className="display-lg mt-4">
                Start with the job,
                <br />
                <span className="serif-accent">not the deliverable.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted lg:pb-1">
              Each service page explains the problem, the work, the process and
              the related projects — so you can judge whether it fits.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <Reveal
                  key={service.slug}
                  as="article"
                  delay={(index % 2) * 60}
                  className={`group border-b border-ink/15 py-8 md:px-8 ${
                    index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                  }`}
                >
                  <div className="flex items-start justify-between gap-5">
                    <span className="font-display text-[0.72rem] font-semibold tracking-[0.12em] text-ink/50">
                      {service.number}
                    </span>
                    <span className="flex size-10 items-center justify-center border border-ink/15 text-ink/55 transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-lime">
                      <Icon size={17} strokeWidth={1.4} aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="display-md mt-5 !text-[2rem]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="transition-opacity hover:opacity-55"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-[0.72rem] text-ink/65"
                      >
                        <span className="size-1 bg-ink/30" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-link mt-6"
                  >
                    Explore {service.navLabel.toLowerCase()}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-deep py-16 lg:py-20">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow text-ink/65">Scope without guesswork</p>
            <h2 className="display-lg mt-4">
              If the fit is unclear,
              <br />
              <span className="serif-accent">start with a conversation.</span>
            </h2>
            <p className="body-md mt-5 max-w-xl">
              Most projects combine more than one service. A focused call is
              usually enough to identify the smallest useful scope — and the work
              that can wait.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:col-start-9 lg:flex-col">
            <ButtonLink href="/contact" className="justify-between">
              Start a project enquiry
            </ButtonLink>
            <ButtonLink
              href="/process"
              variant="outline"
              arrow="up-right"
              className="justify-between"
            >
              See the process
            </ButtonLink>
          </div>
        </div>
      </section>

      <ProjectCTA
        eyebrow="Not sure what you need?"
        title={
          <>
            Describe the problem.
            <br />
            <span className="serif-accent">I&apos;ll help scope the work.</span>
          </>
        }
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
