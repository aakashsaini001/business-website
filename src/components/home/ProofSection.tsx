import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { homeProof } from "@/content/site";
import { projects } from "@/content/projects";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProofSection() {
  return (
    <section className="section border-b border-ink/10 bg-paper-light">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Proof, not promises"
          title={
            <>
              The best review is a site
              <br />
              you can <span className="serif-accent">open and use.</span>
            </>
          }
          description="No invented metrics, star ratings or borrowed testimonials. These are live websites, each with a documented case study explaining the context, decisions and scope."
        />

        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-8 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="font-display text-[clamp(1.65rem,2.6vw,2.5rem)] font-medium leading-[1.13] tracking-[-0.045em]">
              “The most useful proof is not a quote on a slide. It is a website
              that still does its job after launch.”
            </p>
            <p className="mt-5 text-[0.8rem] leading-6 text-muted">
              I present the work and the thinking behind it. Client testimonials
              are added only when the feedback is verified and permission has been
              given — nothing is copied from project websites or invented to fill
              a section.
            </p>
            <ButtonLink href="/portfolio" variant="outline" className="mt-7">
              Explore all case studies
            </ButtonLink>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-ink/15 pt-5">
              <div>
                <p className="font-display text-[1.2rem] tracking-[-0.03em]">
                  <CountUp value={projects.length} pad={2} />
                </p>
                <p className="mt-1 text-[0.7rem] text-muted">live projects shown</p>
              </div>
              <div>
                <p className="font-display text-[1.2rem] tracking-[-0.03em]">
                  <CountUp value={100} suffix="%" />
                </p>
                <p className="mt-1 text-[0.7rem] text-muted">inspectable work</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {homeProof.map((item, index) => (
                <Reveal key={item.project} delay={index * 45}>
                  <Link
                    href={item.href}
                    className="group grid gap-3 border-b border-ink/15 py-5 transition-colors hover:bg-paper sm:grid-cols-[7.5rem_1fr_2rem] sm:items-start sm:gap-5"
                  >
                    <div>
                      <span className="text-[0.7rem] font-bold uppercase tracking-[0.15em] text-ink/55">
                        {item.label}
                      </span>
                      <p className="mt-1 font-display text-[0.95rem] tracking-[-0.02em]">
                        {item.project}
                      </p>
                    </div>
                    <p className="text-[0.8rem] leading-6 text-muted">
                      {item.statement}
                    </p>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="hidden text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block"
                    />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
