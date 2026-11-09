import { Quote } from "lucide-react";
import { business } from "@/config/business";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const verified = business.testimonials.filter(
    (testimonial) => testimonial.permissionConfirmed,
  );

  if (verified.length === 0) return null;

  return (
    <section className="section border-t border-ink/10">
      <div className="container-editorial">
        <SectionHeading
          eyebrow="Client feedback"
          title={
            <>
              In their words, <span className="serif-accent">not mine.</span>
            </>
          }
          description="Published with permission from the businesses involved. No ratings, no borrowed reviews."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {verified.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.name}-${index}`}
              delay={index * 80}
              className="flex flex-col justify-between border border-ink/12 bg-paper-light p-7 sm:p-9"
            >
              <Quote
                size={24}
                strokeWidth={1.2}
                className="text-ink/20"
                aria-hidden="true"
              />
              <blockquote className="mt-8 font-display text-xl leading-[1.35] tracking-[-0.025em] sm:text-2xl">
                “{testimonial.quote}”
              </blockquote>
              <footer className="mt-7 border-t border-ink/10 pt-5">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="mt-0.5 text-xs text-muted">
                  {testimonial.role}
                  {testimonial.company ? `, ${testimonial.company}` : ""}
                </p>
              </footer>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
