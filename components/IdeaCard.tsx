import type { UnbuiltIdea } from "@/content/site";
import { Sections } from "./Sections";
import { Inline } from "./Text";

export function IdeaCard({ idea }: { idea: UnbuiltIdea }) {
  const headingId = `${idea.slug}-title`;
  return (
    <article
      id={idea.slug}
      aria-labelledby={headingId}
      className="scroll-mt-6 rounded-[var(--radius-card)] border border-dashed border-border bg-surface-quiet p-4 sm:p-5"
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <h3 id={headingId} className="font-display text-xl leading-tight font-semibold">
          <Inline text={idea.name} />
        </h3>
        {idea.badge && (
          <span
            className="status-badge inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide whitespace-nowrap"
            data-status="building"
          >
            <Inline text={idea.badge} />
          </span>
        )}
      </div>
      <p className="mt-1 text-muted">
        <Inline text={idea.oneLiner} />
      </p>
      <div className="mt-4 text-[0.95rem]">
        <Sections sections={idea.sections} columns={false} />
      </div>
    </article>
  );
}
