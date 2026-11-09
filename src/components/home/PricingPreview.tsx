import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { pricingPackages } from "@/content/pricing";
import { formatPriceRange } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const previewIncludes: Record<string, string[]> = {
  "starter-website": [
    "Up to 5 core pages",
    "Custom responsive design",
    "Enquiry form and SEO basics",
  ],
  "business-website": [
    "Up to 10 pages and templates",
    "Content management setup",
    "On-page SEO foundations",
  ],
  "ecommerce-website": [
    "Storefront and product templates",
    "Cart and checkout experience",
    "Commerce SEO foundations",
  ],
};

export function PricingPreview() {
  return (
    <section className="section border-b border-ink/10">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Starting points"
          title={
            <>
              Clear places to start.
              <br />
              <span className="serif-accent">Then a proposal for the real scope.</span>
            </>
          }
          description="These are indicative starting prices, not fixed quotes. The final proposal follows a scoping conversation and sets out exactly what is included."
          link={{ label: "View all packages", href: "/pricing" }}
        />

        <div className="mt-12 grid border border-ink/15 md:grid-cols-3">
          {pricingPackages.map((pkg, index) => {
            const featured = Boolean(pkg.featured);
            return (
              <Reveal
                key={pkg.slug}
                delay={index * 70}
                className={
                  featured
                    ? "surface-dark relative flex flex-col p-7 sm:p-8 md:border-x md:border-white/10 lg:p-10"
                    : "flex flex-col border-b border-ink/15 p-7 last:border-b-0 sm:p-8 md:border-b-0 md:border-r md:last:border-r-0 lg:p-10"
                }
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-[0.7rem] font-bold uppercase tracking-[0.15em] ${
                        featured ? "text-lime" : "text-ink/55"
                      }`}
                    >
                      {pkg.label}
                    </p>
                    <h3 className="display-sm mt-3 !text-[1.5rem]">{pkg.name}</h3>
                  </div>
                  <span
                    className={`font-display text-[0.7rem] tracking-[0.14em] ${
                      featured ? "text-paper/50" : "text-ink/65"
                    }`}
                  >
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-8">
                  <p
                    className={`text-[0.72rem] uppercase tracking-[0.14em] ${
                      featured ? "text-paper/60" : "text-ink/55"
                    }`}
                  >
                    Indicative range
                  </p>
                  <p className="mt-1 font-display text-[clamp(1.7rem,2.6vw,2.2rem)] font-medium leading-none tracking-[-0.05em]">
                    {formatPriceRange(pkg.priceMin, pkg.priceMax)}
                  </p>
                </div>

                <p
                  className={`mt-5 text-[0.84rem] leading-6 ${
                    featured ? "text-paper/70" : "text-muted"
                  }`}
                >
                  {pkg.description}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {previewIncludes[pkg.slug]?.map((item) => (
                    <li
                      key={item}
                      className={`flex items-start gap-2.5 text-[0.8rem] leading-5 ${
                        featured ? "text-paper/75" : "text-ink/70"
                      }`}
                    >
                      <Check
                        size={13}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 ${
                          featured ? "text-lime" : "text-ink/60"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div
                  className={`mt-auto pt-8 ${
                    featured ? "border-white/15" : "border-ink/15"
                  }`}
                >
                  <Link
                    href="/pricing"
                    className={`group flex items-center justify-between border-t pt-4 text-[0.76rem] font-semibold ${
                      featured ? "border-white/15 text-paper" : "border-ink/15 text-ink"
                    }`}
                  >
                    See what is included
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-5 flex flex-col gap-2 text-[0.72rem] leading-5 text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Prices shown in INR. Third-party hosting, domains, platform fees and
            integrations are separate.
          </p>
          <p>Every project receives a written scope before work begins.</p>
        </div>
      </div>
    </section>
  );
}
