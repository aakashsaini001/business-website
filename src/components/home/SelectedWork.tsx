import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, getProjectHref, type Project } from "@/content/projects";
import { BrowserFrame } from "@/components/ui/BrowserFrame";
import { CursorPeek } from "@/components/ui/CursorPeek";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

function LiveLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit the ${name} live website (opens in a new tab)`}
      className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-ink/60 underline decoration-ink/25 underline-offset-4 transition-colors hover:text-ink"
    >
      Live site
      <ArrowUpRight size={12} strokeWidth={1.7} aria-hidden="true" />
    </a>
  );
}

function OutcomeNote({ result }: { result: Project["result"] }) {
  return (
    <div className="mt-5 border-l-2 border-lime-deep bg-lime/20 py-2.5 pl-3.5 pr-3">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-ink/55">
        Outcome
      </p>
      <p className="mt-1 font-display text-[0.98rem] leading-[1.35] tracking-[-0.02em]">
        {result.headline}
      </p>
      <p className="mt-1 text-[0.76rem] leading-5 text-muted">
        {result.detail}
      </p>
    </div>
  );
}

export function SelectedWork() {
  const jnj = projects[0];
  const urban = projects[1];
  const bybv = projects[2];
  const guildford = projects[3];

  return (
    <section id="selected-work" className="section-sm">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Four businesses.
              <br />
              <span className="serif-accent">Four different jobs.</span>
            </>
          }
          description="Each project starts with a different commercial problem. These are live websites, not concept screens — open them, use them and judge the work for yourself."
          link={{ label: "View all projects", href: "/portfolio" }}
        />

        <div className="mt-12 border-t border-ink/15">
          <Reveal as="article" className="group grid gap-8 border-b border-ink/15 py-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
            <div
              className="relative lg:col-span-8"
              style={{ backgroundColor: jnj.theme.soft }}
            >
              <div className="relative overflow-hidden px-5 pb-5 pt-10 sm:px-8 sm:pb-8 sm:pt-14">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1 -top-8 font-display text-[9rem] font-semibold leading-none tracking-[-0.08em] text-ink/[0.055]"
                >
                  01
                </span>
                <Link
                  href={getProjectHref(jnj.slug)}
                  aria-label={`Read the ${jnj.name} case study`}
                  className="relative ml-auto block w-[94%]"
                >
                  <Reveal variant="clip">
                    <CursorPeek>
                      <BrowserFrame
                        src={jnj.images.section}
                        alt={jnj.images.sectionAlt}
                        url={jnj.domain}
                        previewSrc={jnj.images.hero}
                        imageClassName="aspect-[16/10]"
                        sizes="(max-width: 1024px) 92vw, 55vw"
                      />
                    </CursorPeek>
                  </Reveal>
                </Link>
                <div className="relative mt-4 flex items-center justify-between gap-4">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink/55">
                    Enterprise telco infrastructure
                  </span>
                  <LiveLink href={jnj.liveUrl} name={jnj.name} />
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-4">
              <p className="index-label">01 / Corporate website</p>
              <h3 className="display-md mt-4">
                <Link href={getProjectHref(jnj.slug)} className="hover:opacity-60">
                  {jnj.name}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{jnj.cardSummary}</p>
              <OutcomeNote result={jnj.result} />
              <div className="mt-5 flex flex-wrap gap-2">
                {["Service architecture", "Capability proof", "Quote pathway"].map(
                  (tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <Link href={getProjectHref(jnj.slug)} className="text-link mt-8">
                Read case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <Reveal as="article" className="group grid gap-8 border-b border-ink/15 py-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:py-14">
            <div className="flex flex-col lg:order-1 lg:col-span-4">
              <p className="index-label">02 / Product catalogue</p>
              <h3 className="display-md mt-4">
                <Link
                  href={getProjectHref(urban.slug)}
                  className="hover:opacity-60"
                >
                  {urban.name}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">{urban.cardSummary}</p>
              <OutcomeNote result={urban.result} />
              <div className="mt-5 flex flex-wrap gap-2">
                {["Product discovery", "Warm art direction", "Enquiry flow"].map(
                  (tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ),
                )}
              </div>
              <Link
                href={getProjectHref(urban.slug)}
                className="text-link mt-8"
              >
                Read case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:order-2 lg:col-span-8">
              <div
                className="relative overflow-hidden px-5 pb-5 pt-7 sm:px-8 sm:pb-8 sm:pt-8"
                style={{ backgroundColor: urban.theme.background }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink/55">
                    Made-to-order furniture
                  </span>
                  <span className="font-serif text-xl italic text-rust">Design. Build. Live.</span>
                </div>
                <Link
                  href={getProjectHref(urban.slug)}
                  aria-label={`Read the ${urban.name} case study`}
                  className="block"
                >
                  <Reveal variant="clip">
                    <CursorPeek>
                      <BrowserFrame
                        src={urban.images.section}
                        alt={urban.images.sectionAlt}
                        url={urban.domain}
                        previewSrc={urban.images.hero}
                        imageClassName="aspect-[16/9]"
                        sizes="(max-width: 1024px) 92vw, 55vw"
                      />
                    </CursorPeek>
                  </Reveal>
                </Link>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink/55">
                    Jaipur, India
                  </span>
                  <LiveLink href={urban.liveUrl} name={urban.name} />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-12">
            <Reveal
              as="article"
              className="group relative overflow-hidden border-b border-ink/15 py-10 lg:col-span-7 lg:border-b-0 lg:border-r lg:py-14 lg:pr-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="index-label">03 / E-commerce</p>
                  <h3 className="display-md mt-3">
                    <Link
                      href={getProjectHref(bybv.slug)}
                      className="hover:opacity-60"
                    >
                      {bybv.name}
                    </Link>
                  </h3>
                </div>
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-medium tracking-[-0.06em] text-ink/10 sm:text-6xl"
                >
                  03
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-7 text-muted">
                {bybv.cardSummary}
              </p>
              <OutcomeNote result={bybv.result} />
              <div
                className="relative mt-8 overflow-hidden p-5 sm:p-6"
                style={{ backgroundColor: bybv.theme.foreground }}
              >
                <Link
                  href={getProjectHref(bybv.slug)}
                  aria-label={`Read the ${bybv.name} case study`}
                  className="block"
                >
                  <Reveal variant="clip">
                    <CursorPeek>
                      <BrowserFrame
                        src={bybv.images.section}
                        alt={bybv.images.sectionAlt}
                        url={bybv.domain}
                        previewSrc={bybv.images.hero}
                        imageClassName="aspect-[16/10]"
                        sizes="(max-width: 1024px) 92vw, 35vw"
                      />
                    </CursorPeek>
                  </Reveal>
                </Link>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-paper/55">
                    Nutrition storefront
                  </span>
                  <a
                    href={bybv.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit the ${bybv.name} live website (opens in a new tab)`}
                    className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold text-paper/70 underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper"
                  >
                    Live site
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <Link href={getProjectHref(bybv.slug)} className="text-link mt-7">
                Read case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>

            <Reveal
              as="article"
              className="group flex flex-col border-b border-ink/15 py-10 lg:col-span-5 lg:py-14 lg:pl-10"
              delay={80}
            >
              <p className="index-label">04 / Healthcare</p>
              <h3 className="display-md mt-3">
                <Link
                  href={getProjectHref(guildford.slug)}
                  className="hover:opacity-60"
                >
                  {guildford.name}
                </Link>
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted">
                {guildford.cardSummary}
              </p>
              <OutcomeNote result={guildford.result} />
              <div
                className="relative mt-8 flex-1 overflow-hidden p-5 sm:p-6"
                style={{ backgroundColor: guildford.theme.soft }}
              >
                <Link
                  href={getProjectHref(guildford.slug)}
                  aria-label={`Read the ${guildford.name} case study`}
                  className="block"
                >
                  <Reveal variant="clip">
                    <CursorPeek>
                      <BrowserFrame
                        src={guildford.images.section}
                        alt={guildford.images.sectionAlt}
                        url={guildford.domain}
                        previewSrc={guildford.images.hero}
                        imageClassName="aspect-[16/11]"
                        sizes="(max-width: 1024px) 92vw, 30vw"
                      />
                    </CursorPeek>
                  </Reveal>
                </Link>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.13em] text-ink/55">
                    South Guildford, WA
                  </span>
                  <LiveLink href={guildford.liveUrl} name={guildford.name} />
                </div>
              </div>
              <Link
                href={getProjectHref(guildford.slug)}
                className="text-link mt-7"
              >
                Read case study
                <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
