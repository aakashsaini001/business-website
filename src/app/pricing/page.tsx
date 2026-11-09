import type { Metadata } from "next";
import { ArrowUpRight, Info } from "lucide-react";
import {
  pricingComparison,
  pricingFaqs,
  pricingPackages,
} from "@/content/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/ui/JsonLd";
import { PricingExplorer } from "@/components/shared/PricingExplorer";
import { ProjectCTA } from "@/components/shared/ProjectCTA";

export const metadata: Metadata = createPageMetadata({
  title: "Pricing — clear starting points for website projects",
  description:
    "Indicative website pricing for starter, business and e-commerce projects, with itemised inclusions, timelines, exclusions and a clear proposal process.",
  path: "/pricing",
});

const priceFactors = [
  {
    number: "01",
    title: "Page count & templates",
    body: "A five-page brochure site needs a different structure from a site with detailed services, locations and resources.",
  },
  {
    number: "02",
    title: "Content readiness",
    body: "Existing, approved content is quicker to work with than creating structure and copy from scratch.",
  },
  {
    number: "03",
    title: "Functionality",
    body: "Bookings, payments, account areas, filtering or bespoke integrations add design and engineering scope.",
  },
  {
    number: "04",
    title: "Timeline & dependencies",
    body: "A compressed schedule, multiple decision-makers or waiting on third parties can affect how the work is resourced.",
  },
];

const exclusions = [
  "Domain names and hosting",
  "Platform subscriptions and premium plugins",
  "Payment processing fees",
  "Stock photography or commissioned shoots",
  "Specialist long-form copywriting",
  "Third-party API or software licences",
  "Ongoing content entry beyond the agreed scope",
  "Advertising, media or ongoing marketing retainers",
];

export default function PricingPage() {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">Pricing / starting points</p>
            <h1 className="display-xl mt-5">
              A clear starting point.
              <br />
              A quote built on <span className="serif-accent">real scope.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Every website is priced against the work it actually needs. The
              packages below make the starting range visible; the final proposal
              itemises the scope, timeline and assumptions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact">Request a proposal</ButtonLink>
              <ButtonLink href="#compare" variant="outline" arrow="none">
                Compare packages
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="border border-ink/15 bg-paper-light p-5">
              <div className="flex items-center gap-2 text-ink/50">
                <Info size={14} strokeWidth={1.7} aria-hidden="true" />
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em]">
                  How to read these prices
                </p>
              </div>
              <p className="mt-3 text-[0.8rem] leading-6 text-ink/65">
                Every figure is an indicative price range in Indian rupees,
                before applicable taxes and third-party costs. It is not a fixed
                quote.
              </p>
              <dl className="mt-4 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4">
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-ink/55">
                    Scope
                  </dt>
                  <dd className="mt-1 text-[0.72rem] text-ink/70">
                    Agreed in writing
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-ink/55">
                    Quote
                  </dt>
                  <dd className="mt-1 text-[0.72rem] text-ink/70">
                    Fixed per phase
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container-editorial">
          <div className="flex flex-col gap-4 border-b border-ink/15 pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-ink/65">Explore the packages</p>
              <h2 className="display-lg mt-4">Find the nearest fit.</h2>
            </div>
            <p className="max-w-sm text-[0.72rem] leading-5 text-muted">
              Select a package to see its scope and inclusions. Projects that
              combine services are quoted as a single phased proposal.
            </p>
          </div>
          <div className="mt-8">
            <PricingExplorer packages={pricingPackages} />
          </div>
        </div>
      </section>

      <section className="section border-t border-ink/10 bg-paper-light">
        <div className="container-editorial">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow text-ink/65">What moves the number</p>
              <h2 className="display-lg mt-4">
                Price follows
                <br />
                <span className="serif-accent">the real work.</span>
              </h2>
              <p className="body-md mt-5 max-w-sm">
                Two websites with the same page count can require very different
                levels of strategy, content and engineering. These are the main
                variables.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid sm:grid-cols-2">
                {priceFactors.map((factor) => (
                  <div
                    key={factor.number}
                    className="border-t border-ink/20 py-5 sm:px-6 sm:odd:pl-0"
                  >
                    <p className="font-display text-[0.7rem] tracking-[0.12em] text-ink/50">
                      /{factor.number}
                    </p>
                    <h3 className="mt-3 text-[0.85rem] font-semibold">{factor.title}</h3>
                    <p className="mt-2 text-[0.76rem] leading-6 text-muted">
                      {factor.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="compare" className="section scroll-mt-24">
        <div className="container-editorial">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow text-ink/65">At a glance</p>
              <h2 className="display-lg mt-4">Compare the starting scope.</h2>
            </div>
            <p className="max-w-sm pb-1 text-[0.72rem] leading-5 text-muted">
              Scroll sideways on smaller screens. “—” means the item is not part
              of that package by default.
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-ink/15">
            <table className="w-full min-w-[46rem] border-collapse text-left">
              <caption className="sr-only">
                Comparison of starter, business and e-commerce website packages
              </caption>
              <thead>
                <tr className="bg-ink text-paper">
                  <th scope="col" className="px-4 py-4 text-[0.7rem] font-bold uppercase tracking-[0.12em]">
                    Feature
                  </th>
                  {pricingComparison.columns.map((column) => (
                    <th
                      key={column}
                      scope="col"
                      className="border-l border-white/10 px-4 py-4 font-display text-[0.92rem] font-normal tracking-[-0.02em]"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingComparison.rows.map((row) => (
                  <tr key={row.feature} className="border-t border-ink/10">
                    <th
                      scope="row"
                      className="bg-paper-light px-4 py-3.5 text-[0.72rem] font-medium text-ink/70"
                    >
                      {row.feature}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.feature}-${pricingComparison.columns[index]}`}
                        className="border-l border-ink/10 px-4 py-3.5 text-[0.7rem] text-ink/55"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Discuss your scope</ButtonLink>
            <ButtonLink href="/services" variant="outline" arrow="up-right">
              Explore the services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-deep py-16 lg:py-20">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink/65">Not included</p>
            <h2 className="display-lg mt-4">
              Costs that sit
              <br />
              <span className="serif-accent">outside the build.</span>
            </h2>
            <p className="body-md mt-5 max-w-sm">
              These are usually paid directly by you or quoted separately. They
              are listed explicitly so there are no hidden additions later.
            </p>
          </div>
          <div className="lg:col-span-8">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {exclusions.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-ink/10 py-3.5 text-[0.76rem] text-ink/65"
                >
                  <span className="font-display text-[0.7rem] text-ink/65" aria-hidden="true">
                    /
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-ink/65">From enquiry to quote</p>
            <h2 className="display-lg mt-4">
              No pressure.
              <br />
              No <span className="serif-accent">surprise.</span>
            </h2>
            <p className="body-md mt-5 max-w-md">
              A useful quote starts with a useful conversation. The sequence is
              short, and you will know the scope and cost before work begins.
            </p>
            <div className="mt-8 border-t border-ink/15 pt-5">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                Payment structure
              </p>
              <p className="mt-2 text-[0.76rem] leading-6 text-ink/65">
                Projects are typically split into a deposit and milestone
                payments. The schedule is documented in the proposal and tied to
                agreed deliverables.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ol className="border-t border-ink/20">
              {[
                {
                  title: "Share the brief",
                  body: "Tell me about the business, the objective, the pages or functionality you expect to need, and any fixed constraints.",
                  detail: "Email or the enquiry form",
                },
                {
                  title: "A short scoping call",
                  body: "We clarify the audience, the website's job and the smallest useful scope. No obligation to proceed.",
                  detail: "Usually 30–45 minutes",
                },
                {
                  title: "A written proposal",
                  body: "You receive the scope, inclusions, exclusions, timeline, payment schedule and next steps in one document.",
                  detail: "Clear enough to decide against",
                },
              ].map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 border-b border-ink/15 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5"
                >
                  <span className="font-display text-[1.6rem] font-medium leading-none tracking-[-0.05em] text-ink/15">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="display-sm !text-[1.15rem]">{step.title}</h3>
                      <span className="text-[0.7rem] uppercase tracking-[0.1em] text-ink/50">
                        {step.detail}
                      </span>
                    </div>
                    <p className="mt-2 text-[0.78rem] leading-6 text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <a
              href="#compare"
              className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold underline decoration-ink/20 underline-offset-4"
            >
              Revisit the comparison
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section border-t border-ink/10 bg-paper-light">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow text-ink/65">Pricing questions</p>
            <h2 className="display-lg mt-5">
              The practical
              <br />
              <span className="serif-accent">details.</span>
            </h2>
            <p className="body-md mt-5 max-w-sm">
              If something is still unclear, ask directly. It is better to settle
              the commercial questions before a project starts.
            </p>
            <ButtonLink href="/contact" variant="outline" className="mt-6">
              Ask about a project
            </ButtonLink>
          </div>
          <div className="lg:col-span-8">
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <ProjectCTA
        eyebrow="A quote, not a guess"
        title={
          <>
            Have a scope in mind?
            <br />
            <span className="serif-accent">Let&apos;s price it properly.</span>
          </>
        }
        description="Send the context and the rough shape of the project. If the fit is right, the next step is a short scoping call and a written proposal."
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
    </>
  );
}
