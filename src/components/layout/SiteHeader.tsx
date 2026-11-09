"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Menu,
  RefreshCw,
  ShoppingBag,
  UserRound,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import { business, navigation } from "@/config/business";
import { services, type ServiceIcon } from "@/content/services";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  shopping: ShoppingBag,
  user: UserRound,
  refresh: RefreshCw,
  wrench: Wrench,
};

function isPathActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const servicesPanelRef = useRef<HTMLDivElement>(null);
  const servicesWrapRef = useRef<HTMLDivElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const cancelServicesClose = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openServices = () => {
    cancelServicesClose();
    setServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    cancelServicesClose();
    closeTimeoutRef.current = setTimeout(() => setServicesOpen(false), 160);
  };

  const closeMobile = (restoreFocus = true) => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    if (restoreFocus) {
      window.setTimeout(() => mobileToggleRef.current?.focus(), 0);
    }
  };

  useEffect(() => {
    const closeMenus = () => {
      setServicesOpen(false);
      setMobileOpen(false);
      setMobileServicesOpen(false);
    };

    window.addEventListener("popstate", closeMenus);
    return () => window.removeEventListener("popstate", closeMenus);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1180px)");
    const onChange = () => {
      if (desktop.matches) {
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    };

    desktop.addEventListener("change", onChange);
    return () => desktop.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (mobileOpen) {
        closeMobile();
        return;
      }
      if (servicesOpen) {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, servicesOpen]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        !servicesWrapRef.current?.contains(target) &&
        !servicesPanelRef.current?.contains(target)
      ) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [servicesOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => mobileCloseRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = originalOverflow;
      clearTimeout(focusTimer);
    };
  }, [mobileOpen]);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const handleMobileKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab" || !mobilePanelRef.current) return;

    const focusable = Array.from(
      mobilePanelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.offsetParent !== null);

    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      onClickCapture={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest("a")) {
          setServicesOpen(false);
          setMobileOpen(false);
          setMobileServicesOpen(false);
        }
      }}
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300",
        scrolled
          ? "border-ink/10 bg-paper/92 shadow-[0_10px_35px_-25px_rgba(19,21,15,0.45)] backdrop-blur-xl"
          : "border-ink/10 bg-paper/85 backdrop-blur-xl",
      )}
    >
      <div className="container-editorial flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="hidden h-full items-center gap-5 min-[1180px]:flex xl:gap-7"
        >
          {navigation.map((item) => {
            const active = isPathActive(pathname, item.href);

            if ("hasServicesMenu" in item && item.hasServicesMenu) {
              return (
                <div
                  key={item.href}
                  ref={servicesWrapRef}
                  className="flex h-full items-center"
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleServicesClose}
                >
                  <button
                    ref={servicesButtonRef}
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-controls="desktop-services-menu"
                    onClick={() => setServicesOpen((current) => !current)}
                    onFocus={() => {
                      if (window.matchMedia("(hover: hover)").matches) openServices();
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowDown") {
                        event.preventDefault();
                        openServices();
                        window.setTimeout(() => {
                          servicesPanelRef.current
                            ?.querySelector<HTMLElement>("a[href]")
                            ?.focus();
                        }, 20);
                      }
                    }}
                    className={cn(
                      "group relative flex h-full items-center gap-1.5 text-[0.78rem] font-semibold tracking-[0.01em] transition-colors hover:text-ink",
                      active ? "text-ink" : "text-ink/70",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      size={13}
                      strokeWidth={1.8}
                      aria-hidden="true"
                      className={cn(
                        "mt-px transition-transform duration-300",
                        servicesOpen && "rotate-180",
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-ink transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </button>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={() => setServicesOpen(false)}
                className={cn(
                  "group relative flex h-full items-center text-[0.78rem] font-semibold tracking-[0.01em] transition-colors hover:text-ink",
                  active ? "text-ink" : "text-ink/70",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-0.5 origin-left bg-ink transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden min-[1180px]:block">
          <Link
            href="/contact"
            className="btn btn-primary min-h-11 px-4 text-[0.76rem]"
          >
            Start a project
            <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>

        <button
          ref={mobileToggleRef}
          type="button"
          onClick={() => {
            setServicesOpen(false);
            setMobileOpen((current) => !current);
          }}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="flex size-11 items-center justify-center border border-ink/20 transition-colors hover:border-ink hover:bg-ink hover:text-paper min-[1180px]:hidden"
        >
          {mobileOpen ? (
            <X size={20} strokeWidth={1.6} aria-hidden="true" />
          ) : (
            <Menu size={20} strokeWidth={1.6} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px]"
      >
        <div ref={progressRef} className="scroll-indicator h-full" />
      </div>

      <div
        ref={servicesPanelRef}
        id="desktop-services-menu"
        aria-hidden={!servicesOpen}
        data-open={servicesOpen}
        className="mega-panel absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-ink/10 bg-paper-light shadow-[0_30px_60px_-30px_rgba(19,21,15,0.35)]"
        onMouseEnter={openServices}
        onMouseLeave={scheduleServicesClose}
      >
        <div className="container-editorial grid grid-cols-[1fr_18rem] gap-10 py-8">
          <div>
            <div className="mb-5 flex items-end justify-between gap-6 border-b border-ink/10 pb-4">
              <div>
                <p className="eyebrow text-ink/60">What I do</p>
                <p className="display-sm mt-2">Six ways to move the business forward.</p>
              </div>
              <Link
                href="/services"
                className="text-link shrink-0"
                onClick={() => setServicesOpen(false)}
              >
                Services overview
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-x-5">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setServicesOpen(false)}
                    className="group flex gap-3.5 border-b border-ink/10 py-4 transition-colors hover:bg-paper"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-ink/14 bg-paper text-ink/70 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-lime">
                      <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 pr-2">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-display text-[0.98rem] font-medium tracking-[-0.02em]">
                          {service.navLabel}
                        </span>
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.7}
                          aria-hidden="true"
                          className="shrink-0 text-ink/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                        />
                      </span>
                      <span className="mt-1 block text-[0.72rem] leading-[1.55] text-muted">
                        {service.shortDescription}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <aside className="flex flex-col justify-between bg-ink p-6 text-paper">
            <div>
              <p className="eyebrow text-paper/55">Not sure where to start?</p>
              <p className="display-sm mt-4 !text-[1.65rem] text-paper">
                Tell me what the business needs to achieve.
              </p>
              <p className="mt-3 text-[0.8rem] leading-6 text-paper/70">
                A short call is usually enough to identify the right scope — or
                whether you need a website at all.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setServicesOpen(false)}
                className="btn btn-accent w-full justify-between"
              >
                Start a conversation
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              </Link>
              <p className="mt-3 text-[0.7rem] leading-4 text-paper/55">
                No hard sell. No obligation.
              </p>
            </div>
          </aside>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          ref={mobilePanelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          onKeyDown={handleMobileKeyDown}
          className="mobile-drawer fixed inset-x-0 bottom-0 top-[4.5rem] z-40 overflow-y-auto bg-paper lg:top-20 min-[1180px]:hidden"
          data-open="true"
        >
          <div className="container-editorial flex min-h-full flex-col py-6">
            <div className="mb-4 flex items-center justify-between">
              <p className="eyebrow text-ink/60">Navigation</p>
              <button
                ref={mobileCloseRef}
                type="button"
                onClick={() => closeMobile()}
                className="flex items-center gap-2 border border-ink/20 px-3 py-2 text-[0.7rem] font-semibold"
              >
                Close
                <X size={14} strokeWidth={1.7} aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="border-t border-ink/15">
              <Link
                href="/"
                data-autofocus
                onClick={() => closeMobile(false)}
                className="flex items-center justify-between border-b border-ink/15 py-4 font-display text-[1.85rem] tracking-[-0.04em]"
              >
                Home
                <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
              </Link>

              <div className="border-b border-ink/15">
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-list"
                  onClick={() => setMobileServicesOpen((current) => !current)}
                  className="flex w-full items-center justify-between py-4 text-left font-display text-[1.85rem] tracking-[-0.04em]"
                >
                  Services
                  <ChevronDown
                    size={20}
                    strokeWidth={1.4}
                    aria-hidden="true"
                    className={cn(
                      "transition-transform duration-300",
                      mobileServicesOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  id="mobile-services-list"
                  className="mobile-services"
                  data-open={mobileServicesOpen}
                >
                  <div>
                    <div className="pb-4">
                      <Link
                        href="/services"
                        onClick={() => closeMobile(false)}
                        className="mb-2 flex items-center gap-2 py-2 text-sm font-semibold text-ink"
                      >
                        All services
                        <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => closeMobile(false)}
                          className="flex items-center justify-between gap-4 border-t border-ink/10 py-3 text-sm text-ink/65 transition-colors hover:text-ink"
                        >
                          {service.navLabel}
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.6}
                            aria-hidden="true"
                            className="shrink-0 text-ink/55"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navigation
                .filter((item) => item.href !== "/" && !("hasServicesMenu" in item))
                .map((item) => {
                  const active = isPathActive(pathname, item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => closeMobile(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-ink/15 py-4 font-display text-[1.85rem] tracking-[-0.04em]",
                        active ? "text-ink" : "text-ink/72",
                      )}
                    >
                      {item.label}
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.4}
                        aria-hidden="true"
                        className={active ? "text-ink" : "text-ink/65"}
                      />
                    </Link>
                  );
                })}
            </nav>

            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                onClick={() => closeMobile(false)}
                className="btn btn-primary w-full justify-between"
              >
                Start a project
                <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
              </Link>
              <div className="mt-5 flex flex-col gap-1 text-sm text-muted">
                <a href={`mailto:${business.email}`} className="hover:text-ink">
                  {business.email}
                </a>
                <p className="text-xs text-ink/55">
                  {business.location} · {business.workingNote.toLowerCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
