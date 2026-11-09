"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { projects } from "@/content/projects";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { PhoneFrame } from "@/components/ui/PhoneFrame";

export function HeroVisual() {
  const urban = projects.find((project) => project.slug === "urban-khaati")!;
  const jnj = projects.find((project) => project.slug === "jnj-tech")!;
  const bybv = projects.find((project) => project.slug === "bybv")!;
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = parallaxRef.current;
    if (!element) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    let frame = 0;

    const setOffset = (x: number, y: number) => {
      element.style.setProperty("--mx", x.toFixed(3));
      element.style.setProperty("--my", y.toFixed(3));
    };

    const onPointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        setOffset(
          Math.max(-1, Math.min(1, x)),
          Math.max(-1, Math.min(1, y)),
        );
      });
    };

    const reset = () => setOffset(0, 0);

    element.addEventListener("pointermove", onPointerMove);
    element.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointermove", onPointerMove);
      element.removeEventListener("pointerleave", reset);
      reset();
    };
  }, []);

  return (
    <>
      <div
        ref={parallaxRef}
        className="hero-parallax relative mx-auto h-[29rem] w-full max-w-[34rem] sm:h-[35rem] lg:h-[39rem] lg:max-w-none"
      >
        <div
          aria-hidden="true"
          className="absolute left-[2%] top-[4%] h-[70%] w-[86%] border border-ink/10 bg-paper-deep/80"
        />
        <div
          aria-hidden="true"
          className="absolute right-0 top-[12%] h-[52%] w-[38%] bg-[#e0d9c8]"
        />

        <div
          data-depth="1"
          className="absolute right-0 top-0 z-10 w-[91%]"
        >
          <div className="hero-rise" style={{ animationDelay: "120ms" }}>
            <BrowserFrame
              src={urban.images.hero}
              alt={urban.images.heroAlt}
              url={urban.domain}
              previewSrc={urban.images.section}
              imageClassName="aspect-[16/10]"
              sizes="(max-width: 1024px) 90vw, 38vw"
              priority
              quality={85}
            />
          </div>
        </div>

        <div
          data-depth="2"
          className="absolute left-0 top-[37%] z-20 w-[69%] bg-lime p-1.5 shadow-[0_24px_55px_-30px_rgba(19,21,15,0.5)]"
        >
          <div className="hero-rise" style={{ animationDelay: "260ms" }}>
            <BrowserFrame
              src={jnj.images.hero}
              alt={jnj.images.heroAlt}
              url={jnj.domain}
              previewSrc={jnj.images.section}
              imageClassName="aspect-[16/10]"
              sizes="(max-width: 1024px) 60vw, 26vw"
              quality={82}
            />
          </div>
        </div>

        <div
          data-depth="3"
          className="absolute bottom-[1%] right-[5%] z-30 w-[25%] min-w-[6.2rem]"
        >
          <div className="hero-rise" style={{ animationDelay: "380ms" }}>
            <PhoneFrame
              src={bybv.images.mobile}
              alt={bybv.images.mobileAlt}
              sizes="(max-width: 1024px) 25vw, 12vw"
            />
          </div>
        </div>

        <div data-depth="4" className="absolute left-0 top-0 z-30">
          <div
            className="hero-rise bg-ink px-4 py-3.5 text-paper shadow-[0_16px_40px_-25px_rgba(19,21,15,0.8)]"
            style={{ animationDelay: "460ms" }}
          >
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-paper/55">
              Selected work
            </p>
            <p className="mt-1.5 font-display text-[1.4rem] font-medium leading-none tracking-[-0.04em]">
              01<span className="text-lime">—</span>04
            </p>
          </div>
        </div>

        <div className="absolute bottom-[10%] left-[2%] z-30 hidden sm:block">
          <div
            className="hero-rise flex items-center gap-2 border border-ink/15 bg-paper-light/95 px-3 py-2"
            style={{ animationDelay: "560ms" }}
          >
            <span className="size-1.5 bg-lime-deep" aria-hidden="true" />
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.11em] text-ink/65">
              Live projects, not mockups
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-3 text-[0.72rem] uppercase tracking-[0.14em] text-ink/55">
        <span>Selected digital work</span>
        <span className="flex items-center gap-1.5">
          Explore
          <ArrowDown size={11} aria-hidden="true" />
        </span>
      </div>
    </>
  );
}
