import Image from "next/image";
import { findProjectMedia } from "@/lib/media";
import { AutoplayVideo } from "./AutoplayVideo";

/**
 * Fixed-ratio box so the layout never shifts or breaks, whatever the file size.
 * Image or video from public/projects/<slug>/, or a neutral placeholder.
 */
export function MediaSlot({
  slug,
  file,
  alt = "",
  name,
}: {
  slug: string;
  file?: string;
  alt?: string;
  name: string;
}) {
  const media = findProjectMedia(slug, file);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[calc(var(--radius-card)-4px)] border border-border bg-media-empty">
      {media?.kind === "image" && (
        <Image
          src={media.src}
          alt={alt}
          fill
          sizes="(min-width: 768px) 320px, 100vw"
          className="object-cover"
          unoptimized={media.ext === ".gif"}
        />
      )}
      {media?.kind === "video" && (
        <AutoplayVideo src={media.src} type={media.ext === ".webm" ? "video/webm" : "video/mp4"} label={alt} />
      )}
      {!media && (
        <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
          <span className="text-xs font-medium tracking-wide text-media-empty-text uppercase">
            {name}
            <span className="sr-only"> — no image yet</span>
          </span>
        </div>
      )}
    </div>
  );
}
