"use client";

import { useEffect, useRef } from "react";

/** Muted looping video. Paused (with controls) for people who prefer reduced motion. */
export function AutoplayVideo({ src, type, label }: { src: string; type: string; label?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.pause();
      video.controls = true;
    }
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
    >
      <source src={src} type={type} />
    </video>
  );
}
