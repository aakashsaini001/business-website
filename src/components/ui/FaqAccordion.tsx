"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  defaultOpen?: number | null;
  className?: string;
  dark?: boolean;
};

export function FaqAccordion({
  items,
  defaultOpen = 0,
  className,
  dark = false,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div
      className={cn(
        "border-t",
        dark ? "border-white/15" : "border-ink/15",
        className,
      )}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${id}-trigger-${index}`;
        const panelId = `${id}-panel-${index}`;

        return (
          <div
            key={item.question}
            className={cn(
              "faq-item border-b",
              dark ? "border-white/15" : "border-ink/15",
            )}
            data-open={isOpen}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className={cn(
                  "group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors sm:py-6",
                  dark ? "text-paper" : "text-ink",
                )}
              >
                <span className="display-sm max-w-3xl !text-[1.1rem] sm:!text-[1.28rem]">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "faq-icon mt-0.5 flex size-8 shrink-0 items-center justify-center border",
                    dark ? "border-white/25" : "border-ink/20",
                  )}
                >
                  <Plus size={15} strokeWidth={1.7} aria-hidden="true" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="faq-answer"
            >
              <div>
                <p
                  className={cn(
                    "max-w-3xl pb-6 pr-12 text-sm leading-7 sm:pb-7 sm:text-[0.95rem]",
                    dark ? "text-paper/58" : "text-muted",
                  )}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
