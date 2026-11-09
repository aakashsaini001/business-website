import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { getProjectHref } from "@/content/projects";
import { cn } from "@/lib/utils";

type ProjectMiniCardProps = {
  project: Project;
  className?: string;
  sizes?: string;
};

export function ProjectMiniCard({
  project,
  className,
  sizes = "(max-width: 768px) 100vw, 45vw",
}: ProjectMiniCardProps) {
  return (
    <article className={cn("group", className)}>
      <div
        className="relative overflow-hidden p-4 sm:p-5"
        style={{ backgroundColor: project.theme.soft }}
      >
        <Link
          href={getProjectHref(project.slug)}
          aria-label={`Read the ${project.name} case study`}
          className="block overflow-hidden border border-ink/15 bg-paper shadow-[0_18px_40px_-28px_rgba(19,21,15,0.4)]"
        >
          <div className="flex h-7 items-center gap-1.5 border-b border-ink/10 bg-paper-light px-3">
            <span className="size-1.5 rounded-full bg-ink/20" aria-hidden="true" />
            <span className="size-1.5 rounded-full bg-ink/20" aria-hidden="true" />
            <span className="mx-auto text-[0.7rem] tracking-[0.03em] text-ink/55">
              {project.domain}
            </span>
          </div>
          <div className="relative aspect-[16/10]">
            <Image
              src={project.images.hero}
              alt={project.images.heroAlt}
              fill
              sizes={sizes}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </div>
      <div className="mt-4 flex items-start justify-between gap-5 border-t border-ink/15 pt-4">
        <div>
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/55">
            {project.category}
          </p>
          <h3 className="display-sm mt-2 !text-[1.2rem]">
            <Link href={getProjectHref(project.slug)} className="hover:opacity-60">
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 max-w-[24rem] text-[0.76rem] leading-5 text-muted">
            {project.result.headline}
          </p>
        </div>
        <Link
          href={getProjectHref(project.slug)}
          aria-label={`Read the ${project.name} case study`}
          className="mt-1 flex size-9 shrink-0 items-center justify-center border border-ink/15 text-ink/65 transition-colors group-hover:bg-ink group-hover:text-lime"
        >
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
