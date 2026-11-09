"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  projectFilters,
  projects,
  type Project,
  type ProjectFilter,
} from "@/content/projects";
import { cn } from "@/lib/utils";
import { CursorPeek } from "@/components/ui/CursorPeek";

const spanClasses: Record<string, string> = {
  "jnj-tech": "lg:col-span-7",
  "urban-khaati": "lg:col-span-5",
  bybv: "lg:col-span-5",
  "guildford-dental-centre": "lg:col-span-7",
  renewmitra: "lg:col-span-5",
  "mtresin-arts-academy": "lg:col-span-7",
  "onefamily-dental": "lg:col-span-7",
  "outback-rolling": "lg:col-span-5",
};

const aspectClasses: Record<string, string> = {
  "jnj-tech": "aspect-[16/10]",
  "urban-khaati": "aspect-[16/10]",
  bybv: "aspect-[16/10]",
  "guildford-dental-centre": "aspect-[16/10]",
  renewmitra: "aspect-[16/10]",
  "mtresin-arts-academy": "aspect-[16/10]",
  "onefamily-dental": "aspect-[16/10]",
  "outback-rolling": "aspect-[16/10]",
};

function PortfolioCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className={cn(
        "group flex flex-col border-t border-ink/20 pt-5",
        spanClasses[project.slug],
      )}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/55">
          <span>{project.order}</span>
          <span aria-hidden="true">/</span>
          <span>{project.category}</span>
        </div>
        <span className="font-display text-[0.7rem] tracking-[0.1em] text-ink/65">
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="display-md">
          <Link href={`/portfolio/${project.slug}`} className="hover:opacity-55">
            {project.name}
          </Link>
        </h3>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit the ${project.name} live website (opens in a new tab)`}
          className="inline-flex items-center gap-1.5 pb-1 text-[0.7rem] font-semibold text-ink/60 transition-colors hover:text-ink"
        >
          Live site
          <ArrowUpRight size={12} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </div>

      <p className="mt-3 max-w-xl text-[0.84rem] leading-6 text-muted">
        {project.cardSummary}
      </p>

      <Link
        href={`/portfolio/${project.slug}`}
        aria-label={`Read the ${project.name} case study`}
        className="mt-6 block"
      >
        <CursorPeek>
          <div
            className="relative overflow-hidden p-4 sm:p-5"
            style={{ backgroundColor: project.theme.soft }}
          >
            <div className="overflow-hidden border border-ink/15 bg-paper-light shadow-[0_18px_45px_-30px_rgba(19,21,15,0.45)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-ink/10 px-3">
                <span className="size-1.5 rounded-full bg-ink/20" aria-hidden="true" />
                <span className="size-1.5 rounded-full bg-ink/20" aria-hidden="true" />
                <span className="mx-auto text-[0.72rem] tracking-[0.03em] text-ink/55">
                  {project.domain}
                </span>
              </div>
              <div className={cn("relative overflow-hidden", aspectClasses[project.slug])}>
                <Image
                  src={project.images.hero}
                  alt={project.images.heroAlt}
                  fill
                  sizes="(max-width: 1024px) 92vw, 55vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <span
              aria-hidden="true"
              className="absolute bottom-4 right-4 flex size-10 items-center justify-center border border-ink/20 bg-paper-light text-ink transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-lime sm:bottom-5 sm:right-5"
            >
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </span>
          </div>
        </CursorPeek>
      </Link>

      <div className="mt-4 flex items-center justify-between gap-4 border-t border-ink/10 pt-3">
        <div className="flex flex-wrap gap-2">
          {[project.discipline, project.atAGlance[0]?.value].filter(Boolean).map((tag) => (
            <span key={tag} className="text-[0.72rem] text-ink/60">
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/portfolio/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-[0.72rem] font-semibold underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink/60"
        >
          Read case study
          <ArrowUpRight size={12} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

export function PortfolioFilters() {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectFilter>("all");
  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.filter === activeFilter);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-ink/15 py-4 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              data-active={activeFilter === filter.value}
              className="filter-button"
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p
          className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/55"
          aria-live="polite"
        >
          {String(filtered.length).padStart(2, "0")} project
          {filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div
          key={activeFilter}
          className="filter-grid mt-10 grid gap-x-8 gap-y-14 lg:grid-cols-12"
        >
          {filtered.map((project, index) => (
            <PortfolioCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      ) : (
        <div className="mt-10 border border-ink/15 px-6 py-14 text-center">
          <p className="display-sm">No projects in this category yet.</p>
          <p className="mt-2 text-sm text-muted">
            Choose another filter or view all selected work.
          </p>
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className="btn btn-outline mt-6"
          >
            View all projects
          </button>
        </div>
      )}
    </div>
  );
}
