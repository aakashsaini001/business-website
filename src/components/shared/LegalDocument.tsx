import type { ReactNode } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { business, mailtoUrl } from "@/config/business";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  content?: ReactNode;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LegalDocument({
  eyebrow,
  title,
  intro,
  updated,
  sections,
}: LegalDocumentProps) {
  return (
    <>
      <section className="border-b border-ink/10">
        <div className="container-editorial pt-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: eyebrow.replace(/\s*\/.*/, "") },
            ]}
          />
        </div>
        <div className="container-editorial grid gap-8 py-12 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-8">
            <p className="eyebrow text-ink/65">{eyebrow}</p>
            <h1 className="display-xl mt-5">{title}</h1>
            <p className="body-lg mt-6 max-w-2xl">{intro}</p>
          </div>
          <div className="flex items-end lg:col-span-4">
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/55">
              Last updated / {updated}
            </p>
          </div>
        </div>
      </section>

      <div className="container-editorial section">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <nav aria-label="Document contents" className="lg:sticky lg:top-28">
              <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                On this page
              </p>
              <ol className="mt-3 space-y-2">
                {sections.map((section, index) => (
                  <li key={section.title} className="flex gap-2.5">
                    <span className="mt-0.5 font-display text-[0.7rem] text-ink/65">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <a
                      href={`#${sectionId(section.title)}`}
                      className="text-[0.7rem] leading-5 text-ink/55 transition-colors hover:text-ink"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-7 border-t border-ink/15 pt-4">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.13em] text-ink/55">
                  Questions
                </p>
                <a
                  href={mailtoUrl}
                  className="mt-2 inline-flex items-center gap-2 text-[0.72rem] font-semibold underline decoration-ink/20 underline-offset-4"
                >
                  <Mail size={12} aria-hidden="true" />
                  {business.email}
                </a>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <div className="max-w-[46rem]">
              {sections.map((section, index) => (
                <section
                  key={section.title}
                  id={sectionId(section.title)}
                  className="scroll-mt-28 border-t border-ink/15 py-7 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[0.7rem] tracking-[0.12em] text-ink/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-sm !text-[1.25rem]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-3.5 pl-7">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[0.82rem] leading-7 text-ink/65"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets ? (
                      <ul className="space-y-2 pt-1">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-2.5 text-[0.8rem] leading-6 text-ink/60"
                          >
                            <span
                              className="mt-2 size-1 shrink-0 bg-ink/30"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {section.content}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 border border-ink/15 bg-paper-light p-6">
              <p className="eyebrow text-ink/60">Contact</p>
              <p className="mt-3 text-[0.84rem] leading-6 text-ink/65">
                Questions about this page can be sent to{" "}
                <a
                  href={mailtoUrl}
                  className="underline decoration-ink/25 underline-offset-2 hover:text-ink"
                >
                  {business.email}
                </a>
                . You can also use the{" "}
                <Link
                  href="/contact"
                  className="underline decoration-ink/25 underline-offset-2 hover:text-ink"
                >
                  contact page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
