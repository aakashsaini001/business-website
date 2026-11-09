import type { ArticleCover as ArticleCoverType } from "@/content/blog";
import { cn } from "@/lib/utils";

type ArticleCoverProps = {
  cover: ArticleCoverType;
  className?: string;
  compact?: boolean;
};

export function ArticleCover({ cover, className, compact = false }: ArticleCoverProps) {
  const isLight = cover.foreground.toLowerCase() === "#151811" || cover.foreground.toLowerCase() === "#171811" || cover.foreground.toLowerCase() === "#1a1c16";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative isolate overflow-hidden border border-ink/10",
        className,
      )}
      style={{ backgroundColor: cover.background, color: cover.foreground }}
    >
      {cover.motif === "grid" ? (
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `linear-gradient(to right, ${cover.foreground} 1px, transparent 1px), linear-gradient(to bottom, ${cover.foreground} 1px, transparent 1px)`,
            backgroundSize: compact ? "2.8rem 2.8rem" : "4rem 4rem",
          }}
        />
      ) : null}
      {cover.motif === "lines" ? (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent 0, transparent ${compact ? "2rem" : "3.4rem"}, ${cover.foreground} ${compact ? "2rem" : "3.4rem"}, ${cover.foreground} calc(${compact ? "2rem" : "3.4rem"} + 1px))`,
          }}
        />
      ) : null}
      {cover.motif === "orb" ? (
        <>
          <div
            className="absolute -right-[18%] -top-[22%] size-[75%] rounded-full border"
            style={{ borderColor: `${cover.foreground}40` }}
          />
          <div
            className="absolute -right-[5%] top-[8%] size-[45%] rounded-full"
            style={{ backgroundColor: cover.accent, opacity: 0.9 }}
          />
        </>
      ) : null}
      {cover.motif === "type" ? (
        <>
          <span
            className={cn(
              "absolute -bottom-[0.2em] right-[-0.02em] font-serif italic leading-[0.7] opacity-[0.13]",
              compact ? "text-[14rem]" : "text-[22rem]",
            )}
          >
            Aa
          </span>
          <div
            className="absolute left-0 top-[42%] h-px w-full"
            style={{ backgroundColor: `${cover.foreground}28` }}
          />
        </>
      ) : null}

      <div
        className={cn(
          "relative z-10 flex h-full flex-col justify-between",
          compact ? "p-3.5 sm:p-4" : "p-7 sm:p-10",
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className={cn(
                "font-bold uppercase opacity-55",
                compact
                  ? "text-[0.52rem] tracking-[0.16em]"
                  : "text-[0.7rem] tracking-[0.2em]",
              )}
            >
              Freelen field notes
            </p>
            <p
              className={cn(
                "font-semibold tracking-wide opacity-80",
                compact
                  ? "mt-1 text-[0.62rem]"
                  : "mt-2 text-[0.72rem]",
              )}
            >
              {cover.kicker}
            </p>
          </div>
          <span
            className={cn(
              "font-semibold tracking-[0.16em] opacity-50",
              compact ? "hidden" : "text-[0.7rem]",
            )}
          >
            No. {cover.index}
          </span>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div>
            <p
              className={cn(
                "font-display font-medium leading-[0.85] tracking-[-0.06em]",
                compact
                  ? "text-[3.25rem]"
                  : "text-[7rem] sm:text-[9rem]",
              )}
            >
              {cover.index}
            </p>
            {compact ? null : (
              <p className="mt-2 max-w-[14rem] text-[0.72rem] leading-4 opacity-55">
                Notes on building clearer, faster and more useful websites.
              </p>
            )}
          </div>
          <div
            className={cn(
              "flex shrink-0 items-center justify-center rounded-full border",
              compact ? "size-7 text-[0.58rem]" : "size-9 text-[0.7rem]",
              isLight ? "border-ink/25" : "border-white/25",
            )}
            style={{ color: cover.accent }}
          >
            ↗
          </div>
        </div>
      </div>
    </div>
  );
}
