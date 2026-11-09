"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CursorPeekProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
};

export function CursorPeek({
  children,
  label = "View",
  className,
}: CursorPeekProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnabled(finePointer.matches && !reducedMotion.matches);
    };

    update();
    finePointer.addEventListener("change", update);
    reducedMotion.addEventListener("change", update);

    return () => {
      finePointer.removeEventListener("change", update);
      reducedMotion.removeEventListener("change", update);
    };
  }, []);

  const track = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    element.style.setProperty("--peek-x", `${event.clientX - rect.left}px`);
    element.style.setProperty("--peek-y", `${event.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      className={cn("group/peek relative", className)}
      data-peek={enabled ? "true" : undefined}
      data-active={active ? "true" : undefined}
      onPointerEnter={(event) => {
        if (!enabled) return;
        track(event);
        setActive(true);
      }}
      onPointerMove={(event) => {
        if (enabled) track(event);
      }}
      onPointerLeave={() => setActive(false)}
    >
      {children}
      {enabled ? (
        <span className="peek-cursor" aria-hidden="true">
          <span className="peek-cursor__badge">
            {label}
            <ArrowUpRight size={13} strokeWidth={2} />
          </span>
        </span>
      ) : null}
    </div>
  );
}
