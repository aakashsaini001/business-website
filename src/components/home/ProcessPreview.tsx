import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { processStages } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessPreview() {
  return (
    <section className="section border-b border-ink/10">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="How I work"
          title={
            <>
              A process that removes
              <br />
              the <span className="serif-accent">unnecessary surprises.</span>
            </>
          }
          description="Structure before decoration, decisions in writing and testing before launch. The process is designed to keep the project moving without hiding the important choices."
          link={{ label: "The full process", href: "/process" }}
        />

        <ol className="mt-14 grid gap-x-0 sm:grid-cols-2 lg:grid-cols-6">
          {processStages.slice(0, 6).map((stage, index) => (
            <Reveal
              as="li"
              key={stage.number}
              delay={index * 45}
              className="group relative border-t border-ink/20 py-6 pr-5 lg:pr-6"
            >
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 h-[5px] w-[5px] bg-ink transition-colors duration-300 group-hover:bg-lime-deep"
              />
              <span className="font-display text-[2.5rem] font-medium leading-none tracking-[-0.06em] text-ink/15 transition-colors duration-300 group-hover:text-ink">
                {stage.number}
              </span>
              <h3 className="mt-4 text-[0.86rem] font-bold uppercase tracking-[0.1em]">
                {stage.stage}
              </h3>
              <p className="mt-2.5 text-[0.8rem] leading-5 text-muted">
                {stage.summary}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-2 flex flex-col gap-4 border-t border-ink/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.74rem] text-ink/55">
            Post-launch support is the seventh stage. Scope and timing are agreed
            in writing.
          </p>
          <Link href="/process" className="text-link !text-[0.76rem] !text-ink/65">
            See what happens at each stage
            <ArrowUpRight size={13} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
