"use client";

import { useCallback, useState } from "react";

type Props = {
  src: string;
  className?: string;
};

/**
 * Nur noch onError → Fallback. Kein canPlayType-Vorcheck und kein videoWidth nach loadedData:
 * loadeddata kann bei manchen VP9-WebMs vor videoWidth/videoHeight feuern → fälschlicher „Safari“-Fallback am PC.
 */
export function HypnoseWebmVideo({ src, className }: Props) {
  const [failed, setFailed] = useState(false);

  const onError = useCallback(() => {
    setFailed(true);
  }, []);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-center px-6 py-10 ${className ?? ""}`}
      >
        <p className="text-white/90 text-sm leading-relaxed max-w-sm">
          Das Video konnte nicht abgespielt werden (Datei fehlt, blockiert oder Format wird nicht unterstützt). Auf dem{" "}
          <strong className="text-white">iPhone mit Safari</strong> funktioniert WebM oft nicht – dann bitte{" "}
          <strong className="text-white">Chrome</strong> nutzen oder am Computer testen.
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
      preload="auto"
      className={className}
      onError={onError}
    >
      <source src={src} type="video/webm" />
    </video>
  );
}
