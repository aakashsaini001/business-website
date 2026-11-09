"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, CalendarClock } from "lucide-react";

export function MobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname.startsWith("/contact")) return null;
  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/15 bg-paper/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden">
      <div className="flex items-center gap-2.5">
        <Link
          href="/contact"
          className="btn btn-primary min-h-12 flex-1 justify-between px-4 text-[0.78rem]"
        >
          Start a project
          <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
        </Link>
        <Link
          href="/contact?topic=intro-call"
          className="btn btn-outline min-h-12 shrink-0 px-3.5 text-[0.76rem]"
          aria-label="Book a 15-minute intro call"
        >
          <CalendarClock size={15} strokeWidth={1.7} aria-hidden="true" />
          <span className="hidden min-[380px]:inline">Book a call</span>
        </Link>
      </div>
    </div>
  );
}
