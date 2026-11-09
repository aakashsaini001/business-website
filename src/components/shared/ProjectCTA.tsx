import { ArrowUpRight, Mail } from "lucide-react";
import { business, mailtoUrl } from "@/config/business";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type ProjectCTAProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  tone?: "dark" | "lime";
  compact?: boolean;
  className?: string;
};

export function ProjectCTA({
  eyebrow = "Start a project",
  title = (
    <>
      Have a project in mind?
      <br />
      <span className="serif-accent">Let&apos;s build something worthwhile.</span>
    </>
  ),
  description = "Share where the business is now, what needs to change and what a successful website would make possible. You will get a considered reply with a clear next step.",
  tone = "dark",
  compact = false,
  className,
}: ProjectCTAProps) {
  const isLime = tone === "lime";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-y",
        isLime
          ? "border-ink/20 bg-lime text-ink"
          : "surface-dark border-white/10",
        compact ? "py-16 lg:py-20" : "py-20 lg:py-28",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0",
          isLime ? "opacity-[0.08]" : "dark-grid-lines opacity-60",
        )}
        style={
          isLime
            ? {
                backgroundImage:
                  "linear-gradient(to right, #13150f 1px, transparent 1px), linear-gradient(to bottom, #13150f 1px, transparent 1px)",
                backgroundSize: "5rem 5rem",
              }
            : undefined
        }
      />
      <div className="container-editorial relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <p
              className={cn(
                "eyebrow mb-6",
                isLime ? "text-ink/50" : "text-paper/65",
              )}
            >
              {eyebrow}
            </p>
            <h2 className="display-xl max-w-5xl">{title}</h2>
            {description ? (
              <p
                className={cn(
                  "body-lg mt-6 max-w-2xl",
                  isLime && "!text-ink/60",
                )}
              >
                {description}
              </p>
            ) : null}
          </Reveal>
          <Reveal className="lg:col-span-4 lg:pb-1" delay={140}>
            <div className="flex flex-col gap-3">
              <ButtonLink
                href="/contact"
                variant={isLime ? "primary" : "accent"}
                className="w-full justify-between sm:w-auto"
              >
                Start a project
              </ButtonLink>
              <a
                href={mailtoUrl}
                className={cn(
                  "inline-flex items-center gap-2 text-sm font-semibold underline decoration-current/25 underline-offset-4 transition-colors",
                  isLime ? "text-ink/70 hover:text-ink" : "text-paper/70 hover:text-paper",
                )}
              >
                <Mail size={14} strokeWidth={1.7} aria-hidden="true" />
                {business.email}
                <ArrowUpRight size={13} strokeWidth={1.7} aria-hidden="true" />
              </a>
              {business.availability.acceptingProjects ? (
                <p
                  className={cn(
                    "mt-3 flex items-center gap-2 text-[0.72rem]",
                    isLime ? "text-ink/60" : "text-paper/55",
                  )}
                >
                  <span className="availability-dot" aria-hidden="true" />
                  {business.availability.label}
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
