"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { KreationenItem, KreationenRow } from "@/lib/kreationen-art";

type Props = {
  rows: KreationenRow[];
};

export default function KreationenSectionClient({ rows }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const flatItems = useMemo(() => rows.flatMap((r) => r.items), [rows]);
  const selectedItem = flatItems[lightboxIndex];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const indexOf = (item: KreationenItem) => flatItems.findIndex((i) => i.id === item.id);

  if (rows.length === 0) {
    return null;
  }

  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0a0a]">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-center px-6 lg:px-8 max-w-7xl mx-auto mb-16 md:mb-20">
          <h2 className="font-serif text-5xl md:text-6xl text-white font-medium text-center">
            Unsere Kreationen
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12 md:space-y-16">
          {rows.map((row) => (
            <div
              key={row.sizeBytes === -1 ? "merged-rest" : String(row.sizeBytes)}
              className={
                row.columns === 4
                  ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
                  : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6"
              }
            >
              {row.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => openLightbox(indexOf(item))}
                  className="group flex flex-col min-w-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-[#0f0f0f] shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 text-left"
                >
                  {item.type === "image" ? (
                    <div className="relative w-full aspect-[3/4]">
                      <Image
                        src={item.src}
                        alt={item.label}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                    </div>
                  ) : (
                    <div className="relative w-full aspect-[9/16]">
                      <video
                        src={item.src}
                        muted
                        loop
                        playsInline
                        autoPlay
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <span className="sr-only">{item.label}</span>
                </button>
              ))}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center items-center mt-12 md:mt-14 px-6">
          <a
            href="https://www.instagram.com/selinscharisma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            Mehr Einblicke auf Instagram
          </a>
        </div>
      </div>

      {lightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + flatItems.length) % flatItems.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Vorheriges"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % flatItems.length);
            }}
            className="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Nächstes"
          >
            <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div
            className="relative max-h-[90vh] max-w-[min(100vw-2rem,56rem)] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.label}
                width={1200}
                height={1200}
                className="max-h-[90vh] w-auto h-auto object-contain"
                unoptimized
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                playsInline
                className="max-h-[90vh] w-full max-w-md rounded-2xl"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
