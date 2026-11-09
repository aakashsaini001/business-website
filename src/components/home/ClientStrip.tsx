import { projects } from "@/content/projects";
import { Marquee } from "@/components/ui/Marquee";

const clients = projects.map((project) => ({
  name: project.name,
  sector: project.category.split(" & ")[0],
  order: project.order,
}));

function ClientList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
    >
      {clients.map((client) => (
        <li key={client.name} className="flex items-baseline gap-3">
          <span className="font-display text-[1.02rem] font-semibold leading-none tracking-[-0.03em] text-ink/70">
            {client.name}
          </span>
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink/65">
            {client.sector}
          </span>
          <span
            aria-hidden="true"
            className="mb-0.5 ml-1 size-1.5 rotate-45 bg-ink/25"
          />
        </li>
      ))}
    </ul>
  );
}

export function ClientStrip() {
  return (
    <div className="flex flex-col gap-4 border-t border-ink/10 py-5 sm:flex-row sm:items-center sm:gap-8">
      <p className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-ink/55">
        Selected clients
      </p>
      <Marquee className="relative min-w-0 flex-1" trackClassName="items-center" duration={36}>
        <ClientList />
        <ClientList hidden />
      </Marquee>
      <p className="shrink-0 text-[0.7rem] text-ink/50">
        India <span aria-hidden="true">↔</span> Australia
      </p>
    </div>
  );
}
