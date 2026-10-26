import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { getBreadcrumbSchema, BreadcrumbItem } from "@/src/lib/schema";

export type { BreadcrumbItem };

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  renderSchema?: boolean;
}

export function Breadcrumbs({ items, className, renderSchema = true }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ name: "Home", url: "/" }, ...items];
  const schema = getBreadcrumbSchema(allItems);

  return (
    <>
      {renderSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      <div
        className={`w-full bg-slate-50/95 dark:bg-[#070D1A]/95 border-b border-slate-200/70 dark:border-white/10 backdrop-blur-md select-none ${className || ""}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <nav aria-label="Breadcrumb" className="flex items-center text-xs">
            <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 list-none m-0 p-0">
              {allItems.map((item, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === allItems.length - 1;

                return (
                  <li
                    key={`${item.url}-${idx}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2"
                  >
                    {!isFirst && (
                      <ChevronRight
                        className="w-3.5 h-3.5 text-slate-400 dark:text-slate-600 shrink-0"
                        aria-hidden="true"
                      />
                    )}
                    {isLast ? (
                      <span
                        className="font-semibold text-slate-900 dark:text-white truncate max-w-[200px] sm:max-w-xs md:max-w-md"
                        aria-current="page"
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.url}
                        className="inline-flex items-center gap-1.5 hover:text-brand-electric dark:hover:text-brand-cyan transition-colors"
                      >
                        {isFirst && <Home className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
                        <span>{item.name}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Breadcrumbs;
