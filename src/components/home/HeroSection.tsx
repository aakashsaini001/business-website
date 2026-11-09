import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { business } from "@/config/business";
import { pricingPackages } from "@/content/pricing";
import { formatPrice } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ClientStrip } from "@/components/home/ClientStrip";
import { HeroVisual } from "@/components/home/HeroVisual";

const capabilityStrip = [
  { index: "01", label: "Strategy & structure" },
  { index: "02", label: "Custom design" },
  { index: "03", label: "Front-end development" },
  { index: "04", label: "SEO foundations" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div aria-hidden="true" className="hero-glow absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-1/2 hidden w-px bg-ink/[0.055] lg:block"
      />
      <div className="container-editorial relative">
        <div className="grid gap-12 pb-12 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-16 lg:pt-16">
          <div className="flex flex-col justify-center lg:col-span-7 lg:pr-8">
            <div
              className="hero-rise mb-9 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{ animationDelay: "60ms" }}
            >
              <p className="eyebrow text-ink/65">Independent web studio</p>
              <span aria-hidden="true" className="h-px w-8 bg-ink/25" />
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-muted">
                {business.location} ↔ Worldwide
              </p>
            </div>

            <h1 className="font-display text-[clamp(3.2rem,6.4vw,6.45rem)] font-medium leading-[0.93] tracking-[-0.06em]">
              <span className="line-mask">
                <span style={{ animationDelay: "120ms" }}>Websites built</span>
              </span>
              <span className="line-mask">
                <span style={{ animationDelay: "240ms" }}>
                  to do a{" "}
                  <span className="serif-accent underline-accent hero-underline">
                    job.
                  </span>
                </span>
              </span>
            </h1>

            <p
              className="hero-rise body-lg mt-8 max-w-[38rem]"
              style={{ animationDelay: "230ms" }}
            >
              I design and build custom websites, online stores and search-ready
              platforms for businesses that need their digital presence to pull
              its weight — not simply take up space.
            </p>

            <div
              className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "310ms" }}
            >
              <ButtonLink href="/portfolio">Explore selected work</ButtonLink>
              <ButtonLink href="/contact" variant="outline" arrow="up-right">
                Start a project
              </ButtonLink>
            </div>

            <p
              className="hero-rise mt-5 text-[0.78rem] leading-5 text-ink/60"
              style={{ animationDelay: "360ms" }}
            >
              Projects from{" "}
              <span className="font-semibold text-ink">
                {formatPrice(pricingPackages[0].priceMin)}
              </span>
              <span aria-hidden="true"> · </span>
              Written scope agreed before work begins.
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink/10 pt-5"
              style={{ animationDelay: "420ms" }}
            >
              {business.availability.acceptingProjects ? (
                <span className="availability-badge">
                  <span className="availability-dot" aria-hidden="true" />
                  {business.availability.label}
                </span>
              ) : null}
              <p className="text-[0.74rem] text-muted">
                {business.availability.note}
              </p>
              <Link
                href="/contact?topic=intro-call"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-ink/70 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink hover:decoration-ink"
              >
                Book a 15-min intro call
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-ink/10 md:grid-cols-4">
          {capabilityStrip.map((item, index) => (
            <div
              key={item.index}
              className="flex items-center gap-3 border-ink/10 py-4 text-[0.76rem] text-ink/65 md:border-l md:first:border-l-0 md:pl-5 md:first:pl-0"
            >
              <span className="font-display text-[0.7rem] font-semibold tracking-[0.1em] text-ink/65">
                /{item.index}
              </span>
              {item.label}
              {index === capabilityStrip.length - 1 ? (
                <Link
                  href="/services"
                  aria-label="View all services"
                  className="ml-auto hidden text-ink/50 transition-colors hover:text-ink md:block"
                >
                  <ArrowUpRight size={13} aria-hidden="true" />
                </Link>
              ) : null}
            </div>
          ))}
        </div>

        <ClientStrip />
      </div>
    </section>
  );
}
