import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { workingPrinciples } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";

export function WhySection() {
  return (
    <section className="surface-dark dark-grid-lines relative overflow-hidden py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-2 w-1/3 bg-lime lg:w-1/4"
      />
      <div className="container-editorial relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow text-paper/60">Why work together</p>
                <h2 className="display-lg mt-5 max-w-xl">
                  Not more moving parts.
                  <br />
                  <span className="serif-accent text-lime">Better ones.</span>
                </h2>
                <p className="body-lg mt-6 max-w-md !text-paper/70">
                  An independent studio means the person who hears your brief is
                  the person who designs and builds the result. Fewer handovers,
                  clearer decisions and no account manager translating the work.
                </p>

                <div className="mt-10 max-w-md border border-white/15 p-6">
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-paper/55">
                    The working standard
                  </p>
                  <p className="mt-4 font-display text-[1.35rem] leading-[1.3] tracking-[-0.03em] text-paper">
                    “A website should make the business easier to explain,
                    easier to trust and easier to run.”
                  </p>
                  <p className="mt-4 text-[0.72rem] text-paper/55">
                    {`${"Freelen Studio"} / principle 01`}
                  </p>
                </div>

                <Link
                  href="/about"
                  className="text-link mt-8 !text-paper/70"
                >
                  More about the studio
                  <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-x-10 sm:grid-cols-2">
              {workingPrinciples.map((principle, index) => (
                <Reveal
                  key={principle.number}
                  delay={index * 35}
                  className="border-t border-white/15 py-6"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[0.72rem] font-semibold tracking-[0.12em] text-lime/75">
                      {principle.number}
                    </span>
                    <h3 className="text-[0.95rem] font-semibold leading-6 tracking-[-0.015em] text-paper">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="mt-3 pl-[2.1rem] text-[0.82rem] leading-6 text-paper/65">
                    {principle.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
