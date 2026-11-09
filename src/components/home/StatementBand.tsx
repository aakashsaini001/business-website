import { Marquee } from "@/components/ui/Marquee";

const statements = [
  "Websites built to do a job",
  "Live work, not mockups",
  "Strategy before decoration",
  "Built to be used after launch",
];

function StatementRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
    >
      {statements.map((statement) => (
        <div key={statement} className="flex items-center gap-8 sm:gap-12">
          <span className="whitespace-nowrap font-display text-[1.55rem] font-medium leading-none tracking-[-0.045em] sm:text-[2.1rem] lg:text-[2.6rem]">
            {statement}
          </span>
          <span
            aria-hidden="true"
            className="size-2.5 shrink-0 rotate-45 bg-ink/75 sm:size-3"
          />
        </div>
      ))}
    </div>
  );
}

export function StatementBand() {
  return (
    <section
      aria-label="How the studio works"
      className="overflow-hidden border-y border-ink/20 bg-lime py-5 text-ink sm:py-7"
    >
      <p className="sr-only">
        Websites built to do a job. Live work, not mockups. Strategy before
        decoration. Built to be used after launch.
      </p>
      <Marquee duration={46} trackClassName="items-center" aria-hidden="true">
        <StatementRow />
        <StatementRow hidden />
      </Marquee>
    </section>
  );
}
