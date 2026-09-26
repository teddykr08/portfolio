import fs from "node:fs";
import path from "node:path";

export type Media = { src: string; kind: "image" | "video"; ext: string } | null;

const IMAGE_EXT = [".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"];
const VIDEO_EXT = [".mp4", ".webm"];

/**
 * Finds the media file for a project in public/projects/<slug>/ at build time.
 * Returns null (→ placeholder box) if the folder is missing, empty, or the
 * named file doesn't exist.
 */
export function findProjectMedia(slug: string, preferred?: string): Media {
  const dir = path.join(process.cwd(), "public", "projects", slug);
  let files: string[];
  try {
    files = fs.readdirSync(dir).filter((f) => !f.startsWith("."));
  } catch {
    return null;
  }

  const candidates = preferred ? files.filter((f) => f === preferred) : files.sort();
  for (const file of candidates) {
    const ext = path.extname(file).toLowerCase();
    const src = `/projects/${encodeURIComponent(slug)}/${encodeURIComponent(file)}`;
    if (IMAGE_EXT.includes(ext)) return { src, kind: "image", ext };
    if (VIDEO_EXT.includes(ext)) return { src, kind: "video", ext };
  }
  return null;
}

export type ArtifactItem = {
  label: string;
  alt: string;
  href: string;
  /** Image path for a thumbnail, or null for a link/file tile. */
  thumb: string | null;
  external: boolean;
};

const ARTIFACT_FILE_EXT = [...IMAGE_EXT, ".pdf"];

/**
 * Artifacts for a project: entries listed in content/site.ts first (in that
 * order), then any other files found in public/projects/<slug>/artifacts/.
 * Listed files that don't exist on disk are skipped rather than shown broken.
 */
export function findArtifacts(
  slug: string,
  listed: { label: string; file?: string; href?: string; alt?: string }[] = [],
): ArtifactItem[] {
  const dir = path.join(process.cwd(), "public", "projects", slug, "artifacts");
  let files: string[] = [];
  try {
    files = fs
      .readdirSync(dir)
      .filter((f) => !f.startsWith(".") && ARTIFACT_FILE_EXT.includes(path.extname(f).toLowerCase()))
      .sort();
  } catch {
    // No artifacts folder — only listed links (if any) are shown.
  }

  const toItem = (file: string, label: string, alt?: string): ArtifactItem => {
    const src = `/projects/${encodeURIComponent(slug)}/artifacts/${encodeURIComponent(file)}`;
    const isImage = IMAGE_EXT.includes(path.extname(file).toLowerCase());
    return { label, alt: alt || label, href: src, thumb: isImage ? src : null, external: false };
  };

  const items: ArtifactItem[] = [];
  const used = new Set<string>();
  for (const a of listed) {
    if (a.file) {
      if (!files.includes(a.file)) continue;
      used.add(a.file);
      items.push(toItem(a.file, a.label, a.alt));
    } else if (a.href) {
      items.push({ label: a.label, alt: a.alt || a.label, href: a.href, thumb: null, external: true });
    }
  }
  for (const file of files) {
    if (!used.has(file)) items.push(toItem(file, file));
  }
  return items;
}
