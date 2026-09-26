import { Fragment } from "react";

const PLACEHOLDER = /(\[WRITE:[^\]]*\])/g;

/** Renders a string, highlighting any [WRITE: ...] placeholders inside it. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(PLACEHOLDER);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("[WRITE:") ? (
          <mark key={i} className="write-placeholder">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/** Renders multi-paragraph text. Paragraphs are separated by a blank line. */
export function Prose({ text, className = "" }: { text: string; className?: string }) {
  const paragraphs = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
  return (
    <div className={`space-y-3 ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={i}>
          <Inline text={p} />
        </p>
      ))}
    </div>
  );
}
