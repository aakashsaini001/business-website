import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import {
  business,
  footerNavigation,
  mailtoUrl,
  telUrl,
  whatsappUrl,
} from "@/config/business";
import { Logo } from "@/components/layout/Logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark relative overflow-hidden pb-20 lg:pb-0">
      <div className="container-editorial relative z-10">
        <div className="grid gap-12 border-b border-white/12 py-14 lg:grid-cols-[1.1fr_1.5fr] lg:gap-20 lg:py-20">
          <div>
            <Logo light />
            <p className="display-md mt-8 max-w-md text-paper">
              A website should earn its place in the business.
            </p>
            <p className="body-md mt-5 max-w-md !text-paper/65">
              Independent web design and development for businesses that want a
              sharper digital presence, a useful enquiry flow and a site built to
              last.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {business.availability.acceptingProjects ? (
                <span className="availability-badge !text-paper/70">
                  <span className="availability-dot" aria-hidden="true" />
                  {business.availability.label}
                </span>
              ) : null}
              <a
                href={mailtoUrl}
                className="btn btn-accent min-h-11 px-4 text-[0.76rem]"
              >
                Start a project
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            <div>
              <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-paper/55">
                Services
              </h2>
              <ul className="mt-5 space-y-3">
                {footerNavigation.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.8rem] leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-paper/55">
                Studio
              </h2>
              <ul className="mt-5 space-y-3">
                {footerNavigation.studio.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.8rem] leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-[0.7rem] font-bold uppercase tracking-[0.17em] text-paper/55">
                Contact
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={mailtoUrl}
                    className="group flex items-start gap-2.5 text-[0.8rem] leading-5 text-paper/70 transition-colors hover:text-paper"
                  >
                    <Mail
                      size={14}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-paper/65"
                    />
                    <span className="break-all">{business.email}</span>
                  </a>
                </li>
                {business.phone ? (
                  <li>
                    <a
                      href={telUrl}
                      className="group flex items-start gap-2.5 text-[0.8rem] leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      <Phone
                        size={14}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-paper/65"
                      />
                      {business.phone}
                    </a>
                  </li>
                ) : null}
                {whatsappUrl ? (
                  <li>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2.5 text-[0.8rem] leading-5 text-paper/70 transition-colors hover:text-paper"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border border-paper/25 text-[0.45rem] font-bold text-paper/60"
                      >
                        W
                      </span>
                      WhatsApp
                    </a>
                  </li>
                ) : null}
                <li className="flex items-start gap-2.5 text-[0.8rem] leading-5 text-paper/70">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-paper/65"
                  />
                  <span>
                    {business.location}
                    <br />
                    <span className="text-paper/55">{business.workingNote}</span>
                  </span>
                </li>
              </ul>
              {business.socials.length > 0 ? (
                <ul className="mt-5 flex flex-wrap gap-3">
                  {business.socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.7rem] font-semibold text-paper/50 underline decoration-paper/25 underline-offset-4 hover:text-paper"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-b border-white/12 py-6 text-[0.72rem] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerNavigation.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-paper/75"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="transition-colors hover:text-paper/75">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 select-none overflow-hidden"
      >
        <p className="-mb-[0.18em] mt-8 whitespace-nowrap text-center font-display text-[clamp(5.5rem,20vw,21rem)] font-semibold leading-[0.75] tracking-[-0.075em] text-paper/[0.055]">
          {business.brand.wordmark}
        </p>
      </div>
    </footer>
  );
}
