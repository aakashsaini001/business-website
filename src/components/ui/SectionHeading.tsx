import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  link?: { label: string; href: string };
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  link,
  align = "left",
  className,
  titleClassName,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        align === "center" && "items-center text-center lg:flex-col lg:items-center",
        className,
      )}
    >
      <Reveal
        className={cn("max-w-4xl", align === "center" && "mx-auto")}
      >
        {eyebrow ? (
          <p className={cn("eyebrow mb-5", dark ? "text-paper/55" : "text-ink/55")}>
            {eyebrow}
          </p>
        ) : null}
        <h2 className={cn("display-lg", titleClassName)}>{title}</h2>
        {description ? (
          <p
            className={cn(
              "body-lg mt-5 max-w-2xl",
              align === "center" && "mx-auto",
              dark && "text-paper/60",
            )}
          >
            {description}
          </p>
        ) : null}
      </Reveal>
      {link ? (
        <Reveal delay={120} className="shrink-0">
          <Link
            href={link.href}
            className={cn(
              "text-link shrink-0 pb-1",
              dark ? "text-paper/80" : "text-ink",
            )}
          >
            {link.label}
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </Reveal>
      ) : null}
    </div>
  );
}
