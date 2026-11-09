"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { PricingPackage } from "@/content/pricing";
import { formatPriceRange } from "@/lib/utils";
import { cn } from "@/lib/utils";

type PricingExplorerProps = {
  packages: PricingPackage[];
};

export function PricingExplorer({ packages }: PricingExplorerProps) {
  const [activeSlug, setActiveSlug] = useState(
    packages.find((item) => item.featured)?.slug ?? packages[0]?.slug,
  );
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex = Math.max(
    0,
    packages.findIndex((item) => item.slug === activeSlug),
  );
  const active = packages[activeIndex];

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % packages.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + packages.length) % packages.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = packages.length - 1;
    else return;

    event.preventDefault();
    setActiveSlug(packages[nextIndex].slug);
    tabRefs.current[nextIndex]?.focus();
  }

  if (!active) return null;

  return (
    <div className="border border-ink/15">
      <div
        role="tablist"
        aria-label="Choose a pricing package"
        className="grid border-b border-ink/15 md:grid-cols-3"
      >
        {packages.map((item, index) => {
          const isActive = item.slug === active.slug;
          return (
            <button
              key={item.slug}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={`pricing-tab-${item.slug}`}
              aria-selected={isActive}
              aria-controls="pricing-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveSlug(item.slug)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cn(
                "relative flex items-start justify-between gap-4 border-b border-ink/10 px-5 py-4 text-left transition-colors last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0",
                isActive ? "bg-ink text-paper" : "hover:bg-paper-light",
              )}
            >
              <span>
                <span
                  className={cn(
                    "block font-display text-[1.05rem] tracking-[-0.025em]",
                    isActive ? "text-paper" : "text-ink",
                  )}
                >
                  {item.name}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-[0.7rem]",
                    isActive ? "text-paper/65" : "text-ink/60",
                  )}
                >
                  {formatPriceRange(item.priceMin, item.priceMax)} ·{" "}
                  {item.timeline.split(",")[0]}
                </span>
              </span>
              {item.featured ? (
                <span
                  className={cn(
                    "mt-0.5 border px-1.5 py-0.5 text-[0.72rem] font-bold uppercase tracking-[0.1em]",
                    isActive
                      ? "border-lime/40 text-lime"
                      : "border-ink/15 text-ink/60",
                  )}
                >
                  Full scope
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id="pricing-panel"
        aria-labelledby={`pricing-tab-${active.slug}`}
        className="grid lg:grid-cols-12"
      >
        <div className="border-b border-ink/15 bg-paper-light px-5 py-7 sm:px-7 lg:col-span-5 lg:border-b-0 lg:border-r lg:py-9">
          <p className="eyebrow text-ink/60">{active.label}</p>
          <div className="mt-4 flex flex-wrap items-end gap-x-2 gap-y-1">
            <p className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] font-medium leading-none tracking-[-0.055em]">
              {formatPriceRange(active.priceMin, active.priceMax)}
            </p>
            <span className="pb-1 text-[0.7rem] text-ink/55">indicative range</span>
          </div>
          <p className="mt-5 text-[0.86rem] leading-7 text-ink/70">
            {active.description}
          </p>
          <div className="mt-5 border-t border-ink/10 pt-4">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.12em] text-ink/55">
              Ideal for
            </p>
            <p className="mt-2 text-[0.78rem] leading-6 text-ink/65">
              {active.idealFor}
            </p>
          </div>
          <dl className="mt-5 space-y-0 border-t border-ink/10">
            <div className="flex items-start justify-between gap-5 border-b border-ink/10 py-2.5">
              <dt className="text-[0.7rem] text-ink/55">Timeline</dt>
              <dd className="max-w-[65%] text-right text-[0.72rem] leading-5 text-ink/65">
                {active.timeline}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-5 border-b border-ink/10 py-2.5">
              <dt className="text-[0.7rem] text-ink/55">Revisions</dt>
              <dd className="max-w-[65%] text-right text-[0.72rem] leading-5 text-ink/65">
                {active.revisions}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-5 py-2.5">
              <dt className="text-[0.7rem] text-ink/55">Support</dt>
              <dd className="max-w-[65%] text-right text-[0.72rem] leading-5 text-ink/65">
                {active.support}
              </dd>
            </div>
          </dl>
          <Link
            href={`/contact?package=${active.slug}`}
            className="btn btn-primary mt-6 w-full justify-between"
          >
            {active.cta}
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
          <p className="mt-3 text-[0.7rem] leading-5 text-ink/55">
            Indicative price range. The final quote is prepared after scope is
            agreed.
          </p>
        </div>

        <div className="grid gap-8 px-5 py-7 sm:px-7 lg:col-span-7 lg:py-9">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                Core scope
              </p>
              <ul className="mt-4 space-y-3">
                {active.scope.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.78rem] leading-6 text-ink/70"
                  >
                    <Check size={13} className="mt-1 shrink-0 text-ink/55" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                Deliverables
              </p>
              <ul className="mt-4 space-y-3">
                {active.deliverables.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[0.78rem] leading-6 text-ink/70"
                  >
                    <Check size={13} className="mt-1 shrink-0 text-ink/55" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-ink/10 pt-4">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
              SEO included
            </p>
            <p className="mt-2 text-[0.78rem] leading-6 text-ink/65">
              {active.seo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
