import type { Section } from "@/content/site";
import { Prose } from "./Text";

/** Titled or free-form text blocks. Two columns on wider screens when there's more than one. */
export function Sections({ sections, columns = true }: { sections: Section[]; columns?: boolean }) {
  const visible = sections.filter((s) => s.text.trim());
  if (visible.length === 0) return null;
  const twoCol = columns && visible.length > 1;

  return (
    <div className={twoCol ? "grid gap-5 sm:grid-cols-2" : "space-y-4"}>
      {visible.map((s, i) => (
        <section key={i}>
          {s.heading && (
            <h4 className="mb-1.5 text-xs font-bold tracking-[0.08em] text-muted uppercase">{s.heading}</h4>
          )}
          <Prose text={s.text} />
        </section>
      ))}
    </div>
  );
}
