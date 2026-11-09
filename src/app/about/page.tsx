import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, X } from "lucide-react";
import { business } from "@/config/business";
import {
  aboutPrinciples,
  notAFit,
  technicalCapabilities,
  workingPrinciples,
} from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "About — an independent web design studio",
  description:
    "Freelen Studio is an independent web design and development practice building clear, considered websites for businesses in India and internationally.",
  path: "/about",
});

const studioNotes = [
  {
    label: "Independent",
    value: "One studio, direct communication",
  },
  {
    label: "Based",
    value: business.location,
  },
  {
    label: "Working",
    value: "With clients in India & internationally",
  },
  {
    label: "Focus",
    value: "Business websites & digital experiences",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "About" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">About the studio</p>
            <h1 className="display-xl mt-5">
              The web is crowded.
              <br />
              Clarity still <span className="serif-accent">stands out.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Freelen Studio is an independent web design and development
              practice. The work is built around a simple belief: a website should
              make a business easier to understand and easier to choose.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/portfolio" variant="outline" arrow="up-right">
                See selected work
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="surface-dark relative overflow-hidden p-6 lg:p-7">
              <div className="dark-grid-lines absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-paper/55">
                  Studio note
                </p>
                <p className="mt-5 font-display text-[1.7rem] leading-[1.15] tracking-[-0.035em] text-paper">
                  A good website is a piece of business infrastructure.
                </p>
                <p className="mt-4 text-[0.8rem] leading-6 text-paper/50">
                  It should make the offer obvious, earn trust quickly and stay
                  easy to maintain long after launch.
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/15 pt-4">
                  <span className="flex size-8 items-center justify-center bg-lime font-display text-xs font-bold text-ink">
                    {business.brand.mark}
                  </span>
                  <div>
                    <p className="text-[0.7rem] font-semibold text-paper/80">
                      {business.name}
                    </p>
                    <p className="text-[0.7rem] text-paper/55">
                      {business.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink/65">Why this studio exists</p>
            <h2 className="display-lg mt-4">
              Built around
              <br />
              the <span className="serif-accent">actual problem.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="display-sm max-w-2xl !text-[1.5rem] !leading-[1.45] sm:!text-[1.8rem]">
              Many websites do not fail because they look bad. They fail because
              nobody agreed what they were for.
            </p>
            <div className="mt-8 space-y-5">
              <p className="body-md text-[1rem] leading-8">
                A website can be visually polished and still leave a buyer
                unsure: unsure what the business does, whether it is credible,
                or what to do next. The design work cannot solve that on its own.
                It has to start with a clear understanding of the audience, the
                offer and the decision the visitor is trying to make.
              </p>
              <p className="body-md text-[1rem] leading-8">
                Freelen exists to do that work properly. Projects begin with
                context and scope, then move into structure, identity and build.
                The aim is not to add more decoration to the web. It is to create
                something useful: a clear, well-made website that earns attention
                and supports the business behind it.
              </p>
              <p className="body-md text-[1rem] leading-8">
                The studio stays deliberately independent. That means direct
                communication, a smaller set of active projects and decisions
                made by the people closest to the work.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/15 pt-5">
              {aboutPrinciples.map((principle) => (
                <span
                  key={principle}
                  className="flex items-center gap-2 text-[0.7rem] text-ink/55"
                >
                  <span className="size-1 bg-ink/30" aria-hidden="true" />
                  {principle}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-light">
        <div className="container-editorial">
          <div className="grid border-b border-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {studioNotes.map((note) => (
              <div
                key={note.label}
                className="border-b border-ink/10 py-5 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                  {note.label}
                </p>
                <p className="mt-2 text-[0.78rem] leading-5 text-ink/70">
                  {note.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="flex flex-col gap-5 border-b border-ink/15 pb-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow text-ink/65">Working principles</p>
              <h2 className="display-lg mt-4">
                How the work
                <br />
                <span className="serif-accent">gets made.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted lg:pb-1">
              These are not slogans. They set expectations for how decisions are
              made, how scope is handled and what a finished website should be
              able to do.
            </p>
          </div>

          <div className="grid md:grid-cols-2">
            {workingPrinciples.map((principle, index) => (
              <div
                key={principle.number}
                className={`border-b border-ink/15 py-6 md:px-8 ${
                  index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-[0.7rem] font-semibold tracking-[0.12em] text-ink/50">
                    {principle.number}
                  </span>
                  <h3 className="display-sm !text-[1.12rem]">{principle.title}</h3>
                </div>
                <p className="mt-2.5 pl-7 text-[0.78rem] leading-6 text-muted">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-deep py-16 lg:py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink/65">Capabilities</p>
            <h2 className="display-lg mt-4">
              The tools serve
              <br />
              the <span className="serif-accent">outcome.</span>
            </h2>
            <p className="body-md mt-5 max-w-md">
              The right platform is chosen after the requirement is understood.
              The stack is a means to a clear, fast and maintainable result — not
              the starting point.
            </p>
            <Link href="/services" className="text-link mt-6">
              Explore the services
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <ul className="grid grid-cols-2 gap-x-6">
              {technicalCapabilities.map((capability) => (
                <li
                  key={capability}
                  className="border-t border-ink/15 py-3 text-[0.75rem] text-ink/60"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow text-ink/65">The right fit</p>
              <h2 className="display-lg mt-4">
                This studio is
                <br />
                <span className="serif-accent">a good fit when…</span>
              </h2>
              <ul className="mt-7 space-y-3">
                {[
                  "The website has a real business job to do.",
                  "You value clarity, craft and a considered process.",
                  "You can make decisions and give timely feedback.",
                  "You want a site that can be maintained, not just launched.",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[0.82rem] leading-6 text-ink/70">
                    <Check size={14} className="mt-1.5 shrink-0 text-ink/65" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-ink/20 pt-5 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="eyebrow text-ink/65">Not the right fit</p>
              <h2 className="display-lg mt-4">
                It probably
                <br />
                <span className="serif-accent">is not.</span>
              </h2>
              <ul className="mt-7 space-y-3">
                {notAFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.82rem] leading-6 text-ink/55">
                    <X size={14} className="mt-1.5 shrink-0 text-ink/50" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 py-10">
        <div className="container-editorial grid gap-5 sm:grid-cols-3">
          <Link href="/process" className="group border-t border-ink/20 pt-4">
            <p className="eyebrow text-ink/55">Next / Process</p>
            <p className="mt-3 font-display text-lg tracking-[-0.03em] group-hover:opacity-55">
              How a project runs
            </p>
          </Link>
          <Link href="/pricing" className="group border-t border-ink/20 pt-4">
            <p className="eyebrow text-ink/55">Next / Pricing</p>
            <p className="mt-3 font-display text-lg tracking-[-0.03em] group-hover:opacity-55">
              Starting points
            </p>
          </Link>
          <Link href="/contact" className="group border-t border-ink/20 pt-4">
            <p className="eyebrow text-ink/55">Next / Contact</p>
            <p className="mt-3 font-display text-lg tracking-[-0.03em] group-hover:opacity-55">
              Start a conversation
            </p>
          </Link>
        </div>
      </section>

      <ProjectCTA
        eyebrow="A direct conversation"
        title={
          <>
            Have a website problem
            <br />
            <span className="serif-accent">worth solving?</span>
          </>
        }
        description="Share where the business is now and what needs to change. If the studio is the right fit, you will get a clear next step."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
