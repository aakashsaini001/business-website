"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type MarqueeProps = React.ComponentPropsWithoutRef<"div"> & {
  duration?: number;
  trackClassName?: string;
};

export function Marquee({
  children,
  duration = 36,
  className,
  trackClassName,
  ...rest
}: MarqueeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = ref.current?.querySelector<HTMLElement>(".marquee-track");
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animation: Animation | null = null;
    let lastY = window.scrollY;
    let rate = 1;
    let frame = 0;

    const tick = () => {
      animation ??= track.getAnimations()[0] ?? null;

      const y = window.scrollY;
      const velocity = Math.min(Math.abs(y - lastY), 120);
      lastY = y;

      const target = 1 + velocity / 16;
      rate += (target - rate) * 0.1;

      if (animation) {
        animation.playbackRate = rate;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      if (animation) animation.playbackRate = 1;
    };
  }, []);

  return (
    <div ref={ref} className={cn("marquee-mask", className)} {...rest}>
      <div
        className={cn("marquee-track", trackClassName)}
        style={{ animationDuration: `${duration}s` }}
      >
        {children}
      </div>
    </div>
  );
}
