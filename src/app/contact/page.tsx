import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, Clock, Mail, MapPin, ShieldCheck } from "lucide-react";
import { business, mailtoUrl, telUrl, whatsappUrl } from "@/config/business";
import {
  contactServices,
} from "@/content/contact-options";
import { pricingPackages } from "@/content/pricing";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { JsonLd } from "@/components/ui/JsonLd";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = createPageMetadata({
  title: "Contact — start a website project",
  description:
    "Tell Freelen Studio about your business and the website project you have in mind. Share the context, scope and timeline for a considered reply.",
  path: "/contact",
});

const packageServices: Record<string, (typeof contactServices)[number]> = {
  "starter-website": "Website design & development",
  "business-website": "Website design & development",
  "ecommerce-website": "E-commerce development",
};

const includePoints = [
  "What the business does and who it serves",
  "What the current website is failing to do",
  "The pages, features or integrations you expect to need",
  "Any fixed deadline, budget range or decision constraints",
];

type ContactPageProps = {
  searchParams: Promise<{
    package?: string | string[];
    topic?: string | string[];
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const packageSlug =
    typeof params.package === "string" ? params.package : undefined;
  const selectedPackage = packageSlug
    ? pricingPackages.find((item) => item.slug === packageSlug)
    : undefined;
  const initialService = packageSlug ? packageServices[packageSlug] : undefined;
  const introCall =
    typeof params.topic === "string" && params.topic === "intro-call";

  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
          />
        </div>
        <div className="container-editorial grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-20">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">Start a project</p>
            <h1 className="display-xl mt-5">
              Tell me what
              <br />
              needs to <span className="serif-accent">change.</span>
            </h1>
            <p className="body-lg mt-7 max-w-2xl">
              Share where the business is now, what the website needs to do and
              any constraints that matter. A useful conversation starts with
              context, not a pitch.
            </p>
          </div>
          <div className="lg:col-span-4">
            <div className="border-t border-ink/20 pt-5">
              <p className="eyebrow text-ink/65">Direct contact</p>
              <a
                href={mailtoUrl}
                className="mt-4 flex items-center gap-3 font-display text-[1.25rem] tracking-[-0.035em] transition-opacity hover:opacity-55 sm:text-[1.5rem]"
              >
                <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
                {business.email}
              </a>
              {telUrl ? (
                <a
                  href={telUrl}
                  className="mt-2 block text-[0.8rem] text-ink/60 hover:text-ink"
                >
                  {business.phone}
                </a>
              ) : null}
              <p className="mt-4 text-[0.72rem] leading-6 text-muted">
                {business.responseNote}
              </p>
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link mt-4"
                >
                  Message on WhatsApp
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-paper-light py-5">
        <div className="container-editorial grid gap-4 text-[0.72rem] text-ink/50 sm:grid-cols-3">
          <span className="flex items-center gap-2">
            <ShieldCheck size={13} strokeWidth={1.6} aria-hidden="true" />
            Read personally, not routed through a sales team
          </span>
          <span className="flex items-center gap-2">
            <Clock size={13} strokeWidth={1.6} aria-hidden="true" />
            A clear next step, whether or not it is a fit
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={13} strokeWidth={1.6} aria-hidden="true" />
            {business.workingNote}
          </span>
        </div>
      </section>

      <section className="section">
        <div className="container-editorial grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {introCall ? (
              <div className="mb-5 flex gap-3 border border-ink/20 bg-lime/30 p-4 sm:p-5">
                <CalendarClock
                  size={18}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-ink/70"
                  aria-hidden="true"
                />
                <div>
                  <p className="text-[0.84rem] font-semibold">
                    15-minute intro call
                  </p>
                  <p className="mt-1 text-[0.78rem] leading-5 text-ink/65">
                    Share two lines about the project and a couple of times that
                    suit you. You&apos;ll get a reply confirming a slot and a
                    short agenda — no sales deck.
                  </p>
                </div>
              </div>
            ) : null}
            <ContactForm
              initialService={initialService}
              initialPackageName={selectedPackage?.name}
              introCall={introCall}
            />
          </div>

          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="border-t border-ink/20 pt-5">
                <p className="eyebrow text-ink/65">A useful first message</p>
                <p className="mt-3 text-[0.8rem] leading-6 text-ink/65">
                  You do not need a finished brief. These details are enough to
                  make the first reply useful:
                </p>
                <ul className="mt-4 space-y-2.5">
                  {includePoints.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-[0.74rem] leading-5 text-ink/60"
                    >
                      <span
                        className="mt-1.5 size-1 shrink-0 bg-ink/30"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 border-t border-ink/15 pt-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                  Prefer to skip the form?
                </p>
                <a
                  href={mailtoUrl}
                  className="mt-2 inline-flex items-center gap-2 text-[0.78rem] font-semibold underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                >
                  <Mail size={13} aria-hidden="true" />
                  Email directly
                </a>
                <p className="mt-2 text-[0.7rem] leading-5 text-ink/55">
                  Include any links, documents or examples that help explain the
                  project.
                </p>
              </div>

              <div className="mt-7 border-t border-ink/15 pt-5">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
                  Privacy
                </p>
                <p className="mt-2 text-[0.72rem] leading-5 text-ink/50">
                  Your details are used only to respond to this enquiry. Read the{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline decoration-ink/20 underline-offset-2 hover:text-ink"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              {business.availability.acceptingProjects ? (
                <div className="mt-7 border border-ink/15 bg-paper-light p-4">
                  <p className="flex items-center gap-2 text-[0.7rem] font-semibold">
                    <span className="availability-dot" aria-hidden="true" />
                    {business.availability.label}
                  </p>
                  <p className="mt-1.5 pl-3.5 text-[0.7rem] leading-5 text-ink/60">
                    {business.availability.note}
                  </p>
                </div>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-deep py-14">
        <div className="container-editorial grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">Before you send</p>
            <h2 className="display-md mt-4 max-w-2xl">
              A good fit is more useful than a fast yes.
            </h2>
            <p className="body-md mt-4 max-w-2xl">
              Not every enquiry will be a match. If the scope, budget or timing is
              not right, you will get an honest answer and, where possible, a
              useful pointer in the right direction.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <Link href="/pricing" className="btn btn-outline">
              See pricing guidance
            </Link>
            <Link href="/portfolio" className="btn btn-primary">
              View selected work
            </Link>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
