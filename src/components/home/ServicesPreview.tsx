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
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  shopping: ShoppingBag,
  user: UserRound,
  refresh: RefreshCw,
  wrench: Wrench,
};

export function ServicesPreview() {
  return (
    <section className="section border-y border-ink/10 bg-paper-deep">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="What I do"
          title={
            <>
              The right scope,
              <br />
              <span className="serif-accent">not the biggest one.</span>
            </>
          }
          description="From a focused first website to a commerce build or ongoing technical support — every engagement starts with the problem, then chooses the work required."
          link={{ label: "All services", href: "/services" }}
        />

        <div className="mt-12 border-t border-ink/15">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.slug} delay={index * 35}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block border-b border-ink/15"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 origin-left scale-x-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100"
                  />
                  <div className="relative z-10 grid gap-4 py-6 sm:grid-cols-[2.4rem_minmax(0,1.15fr)_minmax(0,1fr)_2.8rem] sm:items-center sm:gap-6 sm:py-7">
                    <span className="font-display text-[0.7rem] font-medium tracking-[0.12em] text-ink/50 transition-colors group-hover:text-paper/65">
                      {service.number}
                    </span>
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-8 shrink-0 items-center justify-center border border-ink/15 text-ink/55 transition-colors group-hover:border-paper/20 group-hover:text-lime">
                        <Icon size={15} strokeWidth={1.5} aria-hidden="true" />
                      </span>
                      <h3 className="display-sm !text-[1.2rem] transition-colors group-hover:text-paper sm:!text-[1.4rem]">
                        {service.navLabel}
                      </h3>
                    </div>
                    <p className="max-w-md pl-[3.2rem] text-[0.8rem] leading-6 text-muted transition-colors group-hover:text-paper/50 sm:pl-0">
                      {service.shortDescription}
                    </p>
                    <span
                      aria-hidden="true"
                      className="absolute right-0 top-6 flex size-9 items-center justify-center border border-ink/15 text-ink/60 transition-all duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-ink sm:static sm:justify-self-end"
                    >
                      <ArrowUpRight size={15} strokeWidth={1.6} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 text-[0.74rem] text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>Not sure which service fits? Start with a short project conversation.</p>
          <Link href="/pricing" className="text-link !text-[0.76rem] !text-ink/65">
            Compare starting points
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
