"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export type RevealVariant =
  | "up"
  | "fade"
  | "left"
  | "right"
  | "scale"
  | "clip";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "header";
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const element = ref.current;
    if (!element) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || !("IntersectionObserver" in window)) {
      element.classList.add("is-revealed");
      return;
    }

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const rect = element.getBoundingClientRect();
    const alreadyInView = rect.top < viewportHeight * 0.92 && rect.bottom > 0;

    root.classList.add("reveal-enabled");

    if (alreadyInView) {
      element.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-revealed");
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  const Element = as;

  return (
    <Element
      ref={ref as React.Ref<never>}
      data-reveal
      data-reveal-variant={variant}
      className={cn(className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Element>
  );
}
