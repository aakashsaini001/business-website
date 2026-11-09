"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Mail,
} from "lucide-react";
import { business, mailtoUrl } from "@/config/business";
import {
  contactBudgets,
  contactMethods,
  contactServices,
  contactTimelines,
} from "@/content/contact-options";
import {
  contactSchema,
  type ContactApiResponse,
  type ContactPayload,
} from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  initialService?: (typeof contactServices)[number];
  initialBudget?: (typeof contactBudgets)[number];
  initialPackageName?: string;
  introCall?: boolean;
};

type Status = "idle" | "submitting" | "success" | "error";

const fieldOrder: (keyof ContactPayload)[] = [
  "name",
  "email",
  "service",
  "budget",
  "timeline",
  "message",
  "consent",
];

export function ContactForm({
  initialService,
  initialBudget,
  initialPackageName,
  introCall = false,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [statusTitle, setStatusTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [showEmailFallback, setShowEmailFallback] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<
    Partial<Record<keyof ContactPayload, string>>
  >({});
  const [submittedName, setSubmittedName] = useState("");
  const startedAtRef = useRef<HTMLInputElement>(null);
  const errorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const isSubmitting = status === "submitting";

  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = new Date().toISOString();
    }
  }, []);

  const initialMessage = introCall
    ? `I'd like to book a 15-minute intro call.${
        initialPackageName
          ? ` I'd also like to discuss the ${initialPackageName} package.`
          : ""
      } Here is a little about the project:\n\n`
    : initialPackageName
      ? `I'd like to discuss the ${initialPackageName} package. Here is a little about the project:\n\n`
      : undefined;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      budget: String(formData.get("budget") ?? ""),
      timeline: String(formData.get("timeline") ?? ""),
      message: String(formData.get("message") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? ""),
      consent: formData.get("consent") === "on",
      website: String(formData.get("website") ?? ""),
      startedAt: String(formData.get("startedAt") ?? ""),
    };

    setFieldErrors({});
    setStatusTitle("");
    setStatusMessage("");
    setShowEmailFallback(false);

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const errors: Partial<Record<keyof ContactPayload, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof ContactPayload | undefined;
        if (key && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("error");
      setStatusTitle("A few details need attention.");
      setStatusMessage("Please review the highlighted fields and submit again.");

      const firstKey = fieldOrder.find((key) => errors[key]);
      window.requestAnimationFrame(() => {
        if (firstKey) {
          const field = form.elements.namedItem(firstKey);
          if (field instanceof RadioNodeList) {
            field[0]?.focus();
          } else if (field instanceof HTMLElement) {
            field.focus();
          }
        }
        errorRef.current?.focus();
      });
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = (await response.json()) as ContactApiResponse;

      if (!response.ok || !result.ok) {
        if (result.fieldErrors) {
          setFieldErrors(result.fieldErrors);
        }
        setStatus("error");
        setStatusTitle(
          result.code === "NOT_CONFIGURED"
            ? "The form is not connected yet."
            : "The enquiry was not sent.",
        );
        setStatusMessage(result.message);
        setShowEmailFallback(
          result.code === "NOT_CONFIGURED" ||
            result.code === "SEND_FAILED" ||
            result.code === "RATE_LIMITED",
        );
        window.requestAnimationFrame(() => errorRef.current?.focus());
        return;
      }

      setSubmittedName(parsed.data.name);
      setStatus("success");
      form.reset();
      if (startedAtRef.current) {
        startedAtRef.current.value = new Date().toISOString();
      }
      window.requestAnimationFrame(() => successRef.current?.focus());
    } catch {
      setStatus("error");
      setStatusTitle("The enquiry was not sent.");
      setStatusMessage(
        `A network or server error occurred. Please try again, or email ${business.email} directly.`,
      );
      setShowEmailFallback(true);
      window.requestAnimationFrame(() => errorRef.current?.focus());
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        aria-live="polite"
        className="border border-ink/15 bg-paper-light px-6 py-12 outline-none sm:px-10 sm:py-16"
      >
        <span className="flex size-12 items-center justify-center border border-ink/15 bg-lime">
          <CheckCircle2 size={22} strokeWidth={1.6} aria-hidden="true" />
        </span>
        <p className="eyebrow mt-6 text-ink/60">Enquiry received</p>
        <h2 className="display-lg mt-4">
          Thank you{submittedName ? `, ${submittedName.split(" ")[0]}` : ""}.
        </h2>
        <p className="body-md mt-4 max-w-lg">
          Your enquiry has been received. It will be reviewed personally, and a
          reply will follow by email with a clear next step.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFieldErrors({});
              setStatusTitle("");
              setStatusMessage("");
              setShowEmailFallback(false);
            }}
            className="btn btn-outline"
          >
            Send another enquiry
            <ArrowRight size={15} aria-hidden="true" />
          </button>
          <a href={mailtoUrl} className="btn btn-primary">
            <Mail size={15} aria-hidden="true" />
            {business.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      id="project-form"
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-28 border border-ink/15 bg-paper-light p-5 sm:p-7 lg:p-8"
    >
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-col gap-3 border-b border-ink/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow text-ink/60">
            {introCall ? "15-minute intro call" : "Project enquiry"}
          </p>
          <h2 className="display-md mt-3 !text-[1.8rem] sm:!text-[2.2rem]">
            {introCall ? "A little context, then a time." : "A few useful details."}
          </h2>
        </div>
        <p className="text-[0.72rem] uppercase tracking-[0.1em] text-ink/55">
          <span className="text-rust">*</span> Required
        </p>
      </div>

      {status === "error" ? (
        <div
          ref={errorRef}
          tabIndex={-1}
          role="alert"
          className="mt-5 flex gap-3 border border-rust/30 bg-rust/5 px-4 py-3 outline-none"
        >
          <AlertCircle size={16} className="mt-0.5 shrink-0 text-rust" aria-hidden="true" />
          <div>
            <p className="text-[0.78rem] font-semibold">{statusTitle}</p>
            <p className="mt-1 text-[0.72rem] leading-5 text-ink/60">
              {statusMessage}
              {showEmailFallback ? (
                <>
                  {" "}
                  <a
                    href={mailtoUrl}
                    className="underline decoration-ink/25 underline-offset-2 hover:text-ink"
                  >
                    Email directly
                  </a>
                </>
              ) : null}
            </p>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="form-label">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            className="form-field"
            placeholder="Your name"
          />
          {fieldErrors.name ? (
            <p id="name-error" className="form-error">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="form-label">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            className="form-field"
            placeholder="you@company.com"
          />
          {fieldErrors.email ? (
            <p id="email-error" className="form-error">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="company" className="form-label">
            Business or company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(fieldErrors.company)}
            aria-describedby={fieldErrors.company ? "company-error" : undefined}
            className="form-field"
            placeholder="Optional"
          />
          {fieldErrors.company ? (
            <p id="company-error" className="form-error">
              {fieldErrors.company}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="phone" className="form-label">
            Phone or WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(fieldErrors.phone)}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            className="form-field"
            placeholder="Optional"
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="form-error">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="service" className="form-label">
            What do you need? <span aria-hidden="true">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue={initialService ?? ""}
            aria-invalid={Boolean(fieldErrors.service)}
            aria-describedby={fieldErrors.service ? "service-error" : undefined}
            className="form-field form-select"
          >
            <option value="" disabled>
              Select a service
            </option>
            {contactServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {fieldErrors.service ? (
            <p id="service-error" className="form-error">
              {fieldErrors.service}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="budget" className="form-label">
            Estimated budget <span aria-hidden="true">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            required
            defaultValue={initialBudget ?? ""}
            aria-invalid={Boolean(fieldErrors.budget)}
            aria-describedby={fieldErrors.budget ? "budget-error" : undefined}
            className="form-field form-select"
          >
            <option value="" disabled>
              Select a range
            </option>
            {contactBudgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
          {fieldErrors.budget ? (
            <p id="budget-error" className="form-error">
              {fieldErrors.budget}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="timeline" className="form-label">
            Ideal timeline <span aria-hidden="true">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            defaultValue=""
            aria-invalid={Boolean(fieldErrors.timeline)}
            aria-describedby={fieldErrors.timeline ? "timeline-error" : undefined}
            className="form-field form-select"
          >
            <option value="" disabled>
              Select a timeline
            </option>
            {contactTimelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
          {fieldErrors.timeline ? (
            <p id="timeline-error" className="form-error">
              {fieldErrors.timeline}
            </p>
          ) : null}
        </div>

        <div>
          <span className="form-label">
            Preferred reply <span aria-hidden="true">*</span>
          </span>
          <div className="mt-1.5 flex flex-wrap gap-2" role="radiogroup" aria-label="Preferred contact method">
            {contactMethods.map((method, index) => (
              <label key={method} className="radio-option">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  defaultChecked={introCall ? method === "Phone" : index === 0}
                  className="sr-only"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
          {fieldErrors.contactMethod ? (
            <p className="form-error">{fieldErrors.contactMethod}</p>
          ) : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="form-label">
            What are you trying to achieve? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            defaultValue={initialMessage}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={
              fieldErrors.message ? "message-error message-hint" : "message-hint"
            }
            className="form-field resize-y"
            placeholder="The business, the current website, what needs to change, and what a good outcome would look like."
          />
          <div className="mt-1.5 flex items-start justify-between gap-4">
            <p id="message-hint" className="text-[0.72rem] text-ink/55">
              Useful detail is more helpful than a perfect brief. At least 30
              characters.
            </p>
          </div>
          {fieldErrors.message ? (
            <p id="message-error" className="form-error">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 border-t border-ink/10 pt-5">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-0.5 size-4 shrink-0 accent-ink"
            aria-invalid={Boolean(fieldErrors.consent)}
            aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
          />
          <span className="text-[0.76rem] leading-5 text-ink/65">
            I agree to Freelen Studio using these details to respond to this
            enquiry, as described in the{" "}
            <Link
              href="/privacy-policy"
              className="underline decoration-ink/25 underline-offset-2 hover:text-ink"
            >
              privacy policy
            </Link>
            . <span aria-hidden="true">*</span>
          </span>
        </label>
        {fieldErrors.consent ? (
          <p id="consent-error" className="form-error">
            {fieldErrors.consent}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-ink/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[0.7rem] leading-5 text-ink/55">
          No newsletter. No automated sales sequence.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn("btn btn-primary min-w-[10.5rem]", isSubmitting && "opacity-70")}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={16} className="animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              Send enquiry
              <ArrowRight size={16} aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
