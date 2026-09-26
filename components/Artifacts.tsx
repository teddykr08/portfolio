import Image from "next/image";
import type { Artifact } from "@/content/site";
import { findArtifacts } from "@/lib/media";
import { Inline } from "./Text";

/** Gallery of real work. Renders nothing if there are no artifacts. */
export function Artifacts({ slug, listed, id }: { slug: string; listed?: Artifact[]; id: string }) {
  const items = findArtifacts(slug, listed);
  if (items.length === 0) return null;

  return (
    <section aria-labelledby={id} className="mt-6">
      <h4 id={id} className="mb-2 text-xs font-bold tracking-[0.08em] text-muted uppercase">
        Artifacts
      </h4>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item, i) => (
          <li key={i} className="min-w-0">
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/art block text-sm text-text no-underline"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-media-empty group-hover/art:border-accent">
                {item.thumb ? (
                  <Image
                    src={item.thumb}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 220px, 45vw"
                    className="object-cover object-top"
                    unoptimized={item.thumb.toLowerCase().endsWith(".gif")}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-3 text-center text-xs font-medium tracking-wide text-media-empty-text uppercase">
                    {item.external ? "Link ↗" : item.href.toLowerCase().endsWith(".pdf") ? "PDF" : "File"}
                  </div>
                )}
              </div>
              <span className="mt-1 block truncate">
                <Inline text={item.label} />
              </span>
              <span className="sr-only"> (opens in new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
