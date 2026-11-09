"use client";

import { useState } from "react";
import { articles, blogCategories } from "@/content/blog";
import { ArticleCard } from "@/components/blog/ArticleCard";
import { cn } from "@/lib/utils";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sorted = [...articles].sort((a, b) => +new Date(b.date) - +new Date(a.date));
  const filtered =
    activeCategory === "All"
      ? sorted
      : sorted.filter((article) => article.category === activeCategory);

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-ink/15 py-4 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter field notes by topic"
          className="flex flex-wrap gap-2"
        >
          {blogCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              data-active={activeCategory === category}
              className="filter-button"
            >
              {category}
            </button>
          ))}
        </div>
        <p
          className="text-[0.7rem] uppercase tracking-[0.12em] text-ink/55"
          aria-live="polite"
        >
          {String(filtered.length).padStart(2, "0")} field note
          {filtered.length === 1 ? "" : "s"}
        </p>
      </div>

      <div
        key={activeCategory}
        className="filter-grid mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-12"
      >
        {filtered.map((article, index) => {
          const isLead = activeCategory === "All" && index === 0;
          return (
            <ArticleCard
              key={article.slug}
              article={article}
              featured={isLead}
              className={cn(
                isLead
                  ? "lg:col-span-7"
                  : activeCategory === "All" && index === 1
                    ? "lg:col-span-5"
                    : "lg:col-span-4",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
