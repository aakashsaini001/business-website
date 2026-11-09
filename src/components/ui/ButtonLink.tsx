import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "outline" | "light-outline";
  arrow?: "right" | "up-right" | "none";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow = "right",
  className,
  external = false,
  ariaLabel,
}: ButtonLinkProps) {
  const variantClass = {
    primary: "btn-primary",
    accent: "btn-accent",
    outline: "btn-outline",
    "light-outline": "btn-light-outline",
  }[variant];

  const classes = cn("btn", variantClass, className);

  const content = (
    <>
      <span>{children}</span>
      {arrow === "right" ? <ArrowRight aria-hidden="true" size={16} strokeWidth={2} /> : null}
      {arrow === "up-right" ? (
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
      ) : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {content}
    </Link>
  );
}
