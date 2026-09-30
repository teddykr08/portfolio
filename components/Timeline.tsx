"use client";

import { useEffect, useRef } from "react";
import type { TimelineEntry } from "@/content/site";
import { StatusBadge } from "./StatusBadge";
import { Inline } from "./Text";

/**
 * Vertical list on phones, horizontal strip on wider screens. When the strip
 * is wider than the page it scrolls sideways inside its own box, starting at
 * the newest (current) entry.
 */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  const ref = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.scrollWidth > el.clientWidth) el.scrollLeft = el.scrollWidth;
  }, []);

  if (entries.length === 0) return null;

  return (
    <>
      <p className="mb-2 hidden text-xs text-muted md:block">
        <span aria-hidden="true">←</span> Scroll for earlier entries
      </p>
      <ol
        ref={ref}
        tabIndex={0}
        aria-label="Timeline, oldest first"
        className="relative ml-1.5 flex flex-col gap-5 border-l border-border pl-5 md:ml-0 md:flex-row md:gap-0 md:overflow-x-auto md:border-l-0 md:pt-2 md:pb-3 md:pl-0"
      >
        {entries.map((e, i) => (
          <li
            key={i}
            aria-current={e.current ? "step" : undefined}
            className="relative md:w-44 md:shrink-0 md:border-t md:border-border md:pt-5 md:pr-4"
          >
            <span
              aria-hidden="true"
              className={`absolute top-1.5 -left-[26px] h-3 w-3 rounded-full md:top-[-6.5px] md:left-0 ${
                e.current ? "bg-accent ring-4 ring-accent/25" : "border-2 border-border bg-bg"
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-xs font-semibold text-muted tabular-nums">
                <Inline text={e.date} />
              </span>
              {e.current && <span className="text-xs font-bold tracking-[0.08em] text-accent uppercase">Current</span>}
            </div>
            <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-1">
              <a href={`#${e.target}`} className="font-display font-semibold">
                <Inline text={e.name} />
              </a>
              {e.badge && <StatusBadge status={e.badge} />}
            </div>
            <p className="mt-1 text-sm">
              <Inline text={e.text} />
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
