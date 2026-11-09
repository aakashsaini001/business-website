import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for could not be found.",
  robots: { index: false, follow: true },
};

const links = [
  { label: "Homepage", href: "/", note: "Start again" },
  { label: "Services", href: "/services", note: "What the studio does" },
  { label: "Selected work", href: "/portfolio", note: "Real, live websites" },
  { label: "Contact", href: "/contact", note: "Start a conversation" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-editorial grid min-h-[70vh] gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
        <div className="lg:col-span-7">
          <p className="eyebrow text-ink/65">Error 404</p>
          <p
            className="mt-6 font-display text-[clamp(7rem,20vw,17rem)] font-medium leading-[0.75] tracking-[-0.08em] text-ink/10"
            aria-hidden="true"
          >
            404
          </p>
          <h1 className="display-xl -mt-3">
            This page took
            <br />
            a <span className="serif-accent">wrong turn.</span>
          </h1>
          <p className="body-lg mt-6 max-w-xl">
            The link may be out of date, or the page may have moved. Nothing is
            broken on your side.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">Back to the homepage</ButtonLink>
            <ButtonLink href="/portfolio" variant="outline" arrow="up-right">
              Browse the work
            </ButtonLink>
          </div>
        </div>

        <div className="flex items-end lg:col-span-4 lg:col-start-9">
          <nav aria-label="Useful pages" className="w-full border-t border-ink/20">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 border-b border-ink/10 py-4"
              >
                <div>
                  <p className="font-display text-[1rem] tracking-[-0.025em] transition-opacity group-hover:opacity-55">
                    {link.label}
                  </p>
                  <p className="mt-0.5 text-[0.72rem] text-ink/55">
                    {link.note}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="shrink-0 text-ink/65 transition-colors group-hover:text-ink"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
