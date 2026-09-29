import type { BuiltProject } from "@/content/site";
import { Artifacts } from "./Artifacts";
import { BuildLog } from "./BuildLog";
import { MediaSlot } from "./MediaSlot";
import { Sections } from "./Sections";
import { StatusBadge } from "./StatusBadge";
import { Inline, Prose } from "./Text";

function Numbers({ items, label }: { items: BuiltProject["numbers"]; label: string }) {
  return (
    <dl className="mt-1 flex flex-wrap gap-2" aria-label={label}>
      {items.map((n, i) => (
        <div
          key={i}
          className="flex flex-col-reverse justify-end rounded-lg border border-border px-2.5 py-1 leading-tight"
        >
          {n.value?.trim() ? (
            <>
              <dt className="text-xs text-muted">
                <Inline text={n.label} />
              </dt>
              <dd className="font-display text-lg font-bold tabular-nums">
                <Inline text={n.value} />
              </dd>
            </>
          ) : (
            <dd className="py-1 text-sm font-medium">
              <Inline text={n.label} />
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function BuiltCard({ project }: { project: BuiltProject }) {
  const headingId = `${project.slug}-title`;
  const numbers = project.numbers.filter((n) => (n.value ?? "").trim() || n.label.trim());
  const [firstNumber, ...moreNumbers] = numbers;
  return (
    <article
      id={project.slug}
      aria-labelledby={headingId}
      className="scroll-mt-6 rounded-[var(--radius-card)] border border-border bg-surface p-4 shadow-[0_1px_0_var(--color-border)] sm:p-5"
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-6">
        <MediaSlot slug={project.slug} file={project.media} alt={project.mediaAlt} name={project.name} />

        <div className="flex min-w-0 flex-col gap-2">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <h3 id={headingId} className="font-display text-2xl leading-tight font-semibold">
              <Inline text={project.name} />
            </h3>
            <StatusBadge status={project.status} />
          </div>

          {project.subtitle && (
            <p className="-mt-1 text-sm font-medium text-muted">
              <Inline text={project.subtitle} />
            </p>
          )}

          <p className="text-[1.05rem]">
            <Inline text={project.oneLiner} />
          </p>

          <dl className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <div className="flex gap-1.5">
              <dt className="sr-only">Role</dt>
              <dd>
                <Inline text={project.role} />
              </dd>
            </div>
            <div className="flex gap-1.5">
              <dt className="sr-only">Dates</dt>
              <dd>
                <Inline text={project.dates} />
              </dd>
            </div>
            {project.meta?.map((row, i) => (
              <div key={i} className="flex gap-1.5">
                <dt>{row.label}:</dt>
                <dd>
                  <Inline text={row.value} />
                </dd>
              </div>
            ))}
          </dl>

          {firstNumber && <Numbers items={[firstNumber]} label={`${project.name} key number`} />}

          {(project.liveUrl || project.repoUrl) && (
            <div className="mt-1 flex flex-wrap gap-2 text-sm font-medium">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-accent-contrast no-underline hover:opacity-90"
                >
                  Live site<span className="sr-only">: {hostname(project.liveUrl)} (opens in new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-text no-underline hover:border-accent"
                >
                  Code<span className="sr-only"> (opens in new tab)</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {project.carriedForward?.trim() && (
        <div className="mt-4 border-l-2 border-accent pl-3">
          <h4 className="text-xs font-bold tracking-[0.08em] text-muted uppercase">Carried forward</h4>
          <Prose text={project.carriedForward} className="mt-1" />
        </div>
      )}

      {project.buildLog && <BuildLog entries={project.buildLog} id={`${project.slug}-log`} />}

      <details className="group mt-4 border-t border-border pt-3">
        <summary className="flex cursor-pointer items-center gap-2 rounded text-sm font-semibold text-accent select-none">
          <span
            aria-hidden="true"
            className="inline-block transition-transform group-open:rotate-90 motion-reduce:transition-none"
          >
            ▸
          </span>
          <span className="group-open:hidden">Read more</span>
          <span className="hidden group-open:inline">Show less</span>
          <span className="sr-only"> about {project.name}</span>
        </summary>
        {moreNumbers.length > 0 && (
          <div className="mt-4">
            <Numbers items={moreNumbers} label={`More ${project.name} numbers`} />
          </div>
        )}
        <div className="mt-4">
          <Sections sections={project.sections} />
        </div>
        <Artifacts slug={project.slug} listed={project.artifacts} id={`${project.slug}-artifacts`} />
      </details>
    </article>
  );
}
