import type { UnbuiltIdea } from "@/content/site";
import { Inline, Prose } from "./Text";

export function IdeaCard({ idea }: { idea: UnbuiltIdea }) {
  const headingId = `${idea.slug}-title`;
  return (
    <article
      id={idea.slug}
      aria-labelledby={headingId}
      className="scroll-mt-6 rounded-[var(--radius-card)] border border-dashed border-border bg-surface-quiet p-4 sm:p-5"
    >
      <h3 id={headingId} className="font-display text-xl leading-tight font-semibold">
        <Inline text={idea.name} />
      </h3>
      <p className="mt-1 text-muted">
        <Inline text={idea.oneLiner} />
      </p>
      <div className="mt-4 space-y-4 text-[0.95rem]">
        <section>
          <h4 className="mb-1 text-xs font-bold tracking-[0.08em] text-muted uppercase">How it spreads</h4>
          <Prose text={idea.sections.howItSpreads} />
        </section>
        <section>
          <h4 className="mb-1 text-xs font-bold tracking-[0.08em] text-muted uppercase">
            What it needs that I don&apos;t have yet
          </h4>
          <Prose text={idea.sections.whatItNeeds} />
        </section>
      </div>
    </article>
  );
}
