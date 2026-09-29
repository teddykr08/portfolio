import type { LogEntry } from "@/content/site";
import { Inline, Prose } from "./Text";

const VISIBLE = 5;
const ISO = /^\d{4}-\d{2}-\d{2}$/;

function time(date: string) {
  return ISO.test(date) ? Date.parse(`${date}T00:00:00Z`) : NaN;
}

function formatDate(date: string) {
  const t = time(date);
  if (Number.isNaN(t)) return null;
  return new Date(t).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. Entries without a valid date (e.g. unfilled placeholders) go on top so they're noticed. */
function sortEntries(entries: LogEntry[]) {
  return entries
    .filter((e) => e.date.trim() || e.entry.trim())
    .map((e, i) => ({ e, i, t: time(e.date) }))
    .sort((a, b) => {
      const aBad = Number.isNaN(a.t);
      const bBad = Number.isNaN(b.t);
      if (aBad || bBad) return aBad === bBad ? a.i - b.i : aBad ? -1 : 1;
      return b.t - a.t || a.i - b.i;
    })
    .map(({ e }) => e);
}

function Entry({ entry }: { entry: LogEntry }) {
  const pretty = formatDate(entry.date);
  return (
    <li className="grid gap-x-4 gap-y-0.5 border-l-2 border-border pl-3 sm:grid-cols-[7.5rem_minmax(0,1fr)]">
      <div className="text-sm font-medium text-muted tabular-nums">
        {pretty ? <time dateTime={entry.date}>{pretty}</time> : <Inline text={entry.date || "[WRITE: date]"} />}
      </div>
      <Prose text={entry.entry} />
    </li>
  );
}

export function BuildLog({ entries, id }: { entries: LogEntry[]; id: string }) {
  const sorted = sortEntries(entries);
  if (sorted.length === 0) return null;
  const shown = sorted.slice(0, VISIBLE);
  const rest = sorted.slice(VISIBLE);

  return (
    <section aria-labelledby={id} className="mt-6">
      <h4 id={id} className="mb-2 text-xs font-bold tracking-[0.08em] text-muted uppercase">
        Build log
      </h4>
      <ol className="space-y-3">
        {shown.map((entry, i) => (
          <Entry key={i} entry={entry} />
        ))}
      </ol>
      {rest.length > 0 && (
        <details className="group/log mt-3">
          <summary className="cursor-pointer text-sm font-semibold text-accent select-none">
            <span className="group-open/log:hidden">Show all ({sorted.length})</span>
            <span className="hidden group-open/log:inline">Show fewer</span>
          </summary>
          <ol className="mt-3 space-y-3">
            {rest.map((entry, i) => (
              <Entry key={i} entry={entry} />
            ))}
          </ol>
        </details>
      )}
    </section>
  );
}
