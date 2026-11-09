import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { processStages, workingPrinciples } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { JsonLd } from "@/components/ui/JsonLd";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "Process — how a website project runs",
  description:
    "A clear seven-stage website process: discovery, proposal, design, development, quality assurance, launch and post-launch support.",
  path: "/process",
});

const expectations = [
  {
    number: "01",
    title: "One point of contact",
    body: "You speak directly with the person doing the thinking and the build. No account layer and no lost context.",
  },
  {
    number: "02",
    title: "Written scope",
    body: "Deliverables, assumptions and exclusions are agreed up front. Changes are discussed before they become surprises.",
  },
  {
    number: "03",
    title: "Structured feedback",
    body: "Reviews happen at defined milestones. Feedback is consolidated so decisions move the project forward.",
  },
  {
    number: "04",
    title: "Visible progress",
    body: "Progress is shared through working links, not vague status updates. You can see what has changed and what comes next.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Process" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">The process / seven stages</p>
            <h1 className="display-xl mt-5">
              A good outcome
              <br />
              is not an <span className="serif-accent">accident.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Good websites come from a sequence of deliberate decisions. This is
              how a project moves from an initial conversation to a live site —
              with clear checkpoints and no mystery about what happens next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Start a conversation</ButtonLink>
              <ButtonLink href="/pricing" variant="outline" arrow="up-right">
                Review pricing guidance
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="border border-ink/15 bg-paper-light">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <p className="eyebrow text-ink/60">At a glance</p>
                <ArrowDown size={13} className="text-ink/50" aria-hidden="true" />
              </div>
              <nav aria-label="Process stages">
                {processStages.map((stage) => (
                  <a
                    key={stage.number}
                    href={`#stage-${stage.number}`}
                    className="group flex items-center justify-between gap-4 border-b border-ink/10 px-5 py-3.5 last:border-b-0 hover:bg-paper"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-display text-[0.7rem] tracking-[0.08em] text-ink/50">
                        {stage.number}
                      </span>
                      <span className="text-[0.76rem] font-medium">{stage.stage}</span>
                    </span>
                    <ArrowUpRight
                      size={12}
                      aria-hidden="true"
                      className="text-ink/65 transition-colors group-hover:text-ink"
                    />
                  </a>
                ))}
              </nav>
            </div>
            <p className="mt-3 text-[0.7rem] leading-5 text-ink/55">
              Timelines depend on scope, content readiness and feedback speed. A
              realistic schedule is agreed before the project begins.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper-light py-8">
        <div className="container-editorial grid gap-6 sm:grid-cols-3">
          <div>
            <p className="font-display text-[1.6rem] font-medium tracking-[-0.05em] text-ink">
              Written scope
            </p>
            <p className="mt-1 text-[0.72rem] leading-5 text-muted">
              Before any design work begins.
            </p>
          </div>
          <div>
            <p className="font-display text-[1.6rem] font-medium tracking-[-0.05em] text-ink">
              Defined reviews
            </p>
            <p className="mt-1 text-[0.72rem] leading-5 text-muted">
              At milestones, not by endless iteration.
            </p>
          </div>
          <div>
            <p className="font-display text-[1.6rem] font-medium tracking-[-0.05em] text-ink">
              Clean handover
            </p>
            <p className="mt-1 text-[0.72rem] leading-5 text-muted">
              Access, documentation and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-ink/65">Stage by stage</p>
              <h2 className="display-lg mt-4">
                From first call
                <br />
                to <span className="serif-accent">live.</span>
              </h2>
              <p className="body-md mt-5 max-w-sm">
                Each stage has a job, a point of involvement and a concrete
                outcome. The project only moves forward when the previous stage is
                clear.
              </p>
              <div className="mt-7 border-t border-ink/15 pt-4">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                  Typical involvement
                </p>
                <ul className="mt-3 space-y-2 text-[0.74rem] leading-5 text-muted">
                  <li>One discovery call, usually 45–60 minutes</li>
                  <li>Consolidated feedback at key milestones</li>
                  <li>Timely access to content and decisions</li>
                </ul>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="border-t border-ink/20">
              {processStages.map((stage) => (
                <div
                  key={stage.number}
                  id={`stage-${stage.number}`}
                  className="scroll-mt-28 border-b border-ink/15 py-8 lg:py-10"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-[2.5rem] font-medium leading-none tracking-[-0.06em] text-ink/15 sm:text-[3.2rem]">
                      {stage.number}
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/60">
                        {stage.stage}
                      </p>
                      <h3 className="display-sm mt-2 max-w-xl !text-[1.35rem]">
                        {stage.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-[0.86rem] leading-7 text-muted">
                    {stage.summary}
                  </p>
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/50">
                        What happens
                      </p>
                      <ul className="mt-3 space-y-2">
                        {stage.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex gap-2.5 text-[0.74rem] leading-5 text-ink/65"
                          >
                            <span className="mt-1.5 size-1 shrink-0 bg-ink/30" aria-hidden="true" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/50">
                          Your involvement
                        </p>
                        <p className="mt-2 text-[0.74rem] leading-5 text-ink/65">
                          {stage.involvement}
                        </p>
                      </div>
                      <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/50">
                          Stage outcome
                        </p>
                        <p className="mt-2 text-[0.74rem] leading-5 text-ink/65">
                          {stage.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-light py-16 lg:py-20">
        <div className="container-editorial">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-ink/65">How we work together</p>
              <h2 className="display-lg mt-4">
                Less friction.
                <br />
                <span className="serif-accent">Better decisions.</span>
              </h2>
            </div>
            <div className="grid gap-0 sm:grid-cols-2 lg:col-span-8">
              {expectations.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-ink/20 py-5 sm:px-6 sm:odd:pl-0"
                >
                  <p className="font-display text-[0.7rem] tracking-[0.12em] text-ink/50">
                    /{item.number}
                  </p>
                  <h3 className="mt-3 text-[0.88rem] font-semibold">{item.title}</h3>
                  <p className="mt-2 text-[0.76rem] leading-6 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink/65">The working principles</p>
            <h2 className="display-lg mt-4">
              What stays
              <br />
              <span className="serif-accent">constant.</span>
            </h2>
            <p className="body-md mt-5 max-w-sm">
              Tools and techniques change. These principles shape every
              engagement.
            </p>
            <Link href="/about" className="text-link mt-6">
              More about the studio
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-x-8 sm:grid-cols-2">
              {workingPrinciples.slice(0, 4).map((principle) => (
                <div
                  key={principle.number}
                  className="border-t border-ink/15 py-5"
                >
                  <p className="font-display text-[0.7rem] tracking-[0.12em] text-ink/50">
                    {principle.number}
                  </p>
                  <h3 className="mt-2.5 text-[0.82rem] font-semibold leading-5">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[0.74rem] leading-6 text-muted">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectCTA
        eyebrow="Ready when you are"
        title={
          <>
            Start with a brief.
            <br />
            <span className="serif-accent">The process follows.</span>
          </>
        }
        description="A short enquiry is enough to begin. Share the context, the goal and any constraints — the first reply will tell you whether the studio is a good fit."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Process", path: "/process" },
        ])}
      />
    </>
  );
}
