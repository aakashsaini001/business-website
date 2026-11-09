import Link from "next/link";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  light?: boolean;
  compact?: boolean;
};

export function Logo({ className, light = false, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${business.name} — home`}
      className={cn("group inline-flex items-center gap-2.5", className)}
    >
      <span
        aria-hidden="true"
        className={cn(
          "relative flex size-9 shrink-0 items-center justify-center overflow-hidden",
          light ? "bg-paper text-ink" : "bg-ink text-paper",
        )}
      >
        <span className="font-display text-[1.05rem] font-semibold leading-none tracking-[-0.06em]">
          {business.brand.mark}
        </span>
        <span
          className={cn(
            "absolute bottom-1 right-1 size-1.5",
            light ? "bg-cobalt" : "bg-lime",
          )}
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold leading-none tracking-[-0.055em]",
            light ? "text-paper" : "text-ink",
          )}
        >
          {business.brand.wordmark}
        </span>
        {!compact ? (
          <span
            className={cn(
              "mt-1 text-[0.44rem] font-bold uppercase leading-none tracking-[0.24em]",
              light ? "text-paper/65" : "text-ink/42",
            )}
          >
            {business.brand.descriptor}
          </span>
        ) : null}
      </span>
    </Link>
  );
}
