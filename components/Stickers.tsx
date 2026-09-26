import Image from "next/image";
import type { Sticker } from "@/content/site";

const POSITION: Record<Sticker["position"], string> = {
  "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
  "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
  "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
  "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
};

/** Decorative images from content/site.ts → accents.stickers. Hidden from screen readers. */
export function Stickers({ stickers }: { stickers: Sticker[] }) {
  if (stickers.length === 0) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {stickers.map((s, i) => (
        <Image
          key={i}
          src={s.src}
          alt=""
          width={s.width}
          height={s.width}
          className={`absolute h-auto opacity-90 ${POSITION[s.position]}`}
          style={{ width: `min(${s.width}px, 28vw)` }}
        />
      ))}
    </div>
  );
}
