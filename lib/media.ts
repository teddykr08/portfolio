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
