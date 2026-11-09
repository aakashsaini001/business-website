import Link from "next/link";
import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  items: { label: string; href?: string }[];
  dark?: boolean;
  className?: string;
};

export function Breadcrumbs({ items, dark = false, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex flex-wrap items-center gap-2 text-xs", className)}
    >
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 ? (
            <span
              aria-hidden="true"
              className={dark ? "text-paper/65" : "text-ink/65"}
            >
              /
            </span>
          ) : null}
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "transition-colors",
                dark
                  ? "text-paper/65 hover:text-paper"
                  : "text-ink/65 hover:text-ink",
              )}
            >
              {item.label}
            </Link>
          ) : (
            <span
              aria-current="page"
              className={dark ? "text-paper/75" : "text-ink/70"}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
