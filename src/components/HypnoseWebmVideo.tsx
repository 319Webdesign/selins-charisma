"use client";

import { useLayoutEffect, useState, useCallback } from "react";

type Props = {
  src: string;
  className?: string;
};

function browserReportsWebm() {
  if (typeof document === "undefined") return true;
  const v = document.createElement("video");
  const c =
    v.canPlayType('video/webm; codecs="vp09.00.10.08"') ||
    v.canPlayType('video/webm; codecs="vp9, opus"') ||
    v.canPlayType('video/webm; codecs="vp9"') ||
    v.canPlayType('video/webm; codecs="vp8, opus"') ||
    v.canPlayType("video/webm");
  return c === "probably" || c === "maybe";
}

export function HypnoseWebmVideo({ src, className }: Props) {
  const [mode, setMode] = useState<"check" | "video" | "fallback">("check");

  useLayoutEffect(() => {
    setMode(browserReportsWebm() ? "video" : "fallback");
  }, []);

  const onError = useCallback(() => {
    setMode("fallback");
  }, []);

  if (mode === "check") {
    return <div className={`absolute inset-0 bg-zinc-900 ${className ?? ""}`} aria-hidden />;
  }

  if (mode === "fallback") {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-center px-6 py-10 ${className ?? ""}`}
      >
        <p className="text-white/90 text-sm leading-relaxed max-w-sm">
          Dieses Video liegt als WebM vor – das wird auf dem <strong className="text-white">iPhone mit Safari</strong> oft
          nicht abgespielt (schwarzer Bildschirm, 0:00). Bitte in <strong className="text-white">Chrome</strong> öffnen
          oder am Computer ansehen.
        </p>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 text-sm font-medium text-[#D4AF37] underline underline-offset-2 hover:text-[#D4AF37]/85"
        >
          Video-Link öffnen
        </a>
      </div>
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
      className={className}
      onError={onError}
      onLoadedData={(e) => {
        const el = e.currentTarget;
        if (el.videoWidth === 0 || el.videoHeight === 0) {
          setMode("fallback");
        }
      }}
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
