"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { Instagram, X, ChevronLeft, ChevronRight } from "lucide-react";

const ART_ITEMS = [
  { id: 1, type: "image" as const, src: "/img/art/1.jpg", label: "Reel: Transformation 30kg", w: 1080, h: 1066 },
  { id: 2, type: "video" as const, src: "/img/art/2.mp4", label: "Short: Balayage Prozess", w: 9, h: 16 },
  { id: 3, type: "video" as const, src: "/img/art/3.mp4", label: "Story: Salon-Vibe", w: 9, h: 16 },
  { id: 4, type: "image" as const, src: "/img/art/5.jpg", label: "Reel: Friseur-Kunst", w: 1080, h: 1080 },
  { id: 5, type: "video" as const, src: "/img/art/4.mp4", label: "Short: Before/After", w: 9, h: 16 },
  { id: 6, type: "image" as const, src: "/img/art/7.jpg", label: "Story: Kundin zufrieden", w: 1006, h: 970 },
  { id: 7, type: "video" as const, src: "/img/art/6.mp4", label: "Reel: Styling-Showcase", w: 9, h: 16 },
  { id: 8, type: "image" as const, src: "/img/art/8.jpg", label: "Kreation im Fokus", w: 1034, h: 935 },
  { id: 9, type: "video" as const, src: "/img/art/9.mp4", label: "Styling Showcase", w: 9, h: 16 },
];

// Sichtbare Karten pro Seite je nach Breakpoint
const getVisibleCount = () => {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 4;
};

export default function KreationenSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [page, setPage] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const trackRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalPages = Math.ceil(ART_ITEMS.length / visibleCount);

  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const goToPage = useCallback((p: number) => {
    const clamped = ((p % totalPages) + totalPages) % totalPages;
    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: clamped * track.clientWidth, behavior: "smooth" });
    }
    setPage(clamped);
  }, [totalPages]);

  // Auto-play seitenweise
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setPage((prev) => {
        const next = (prev + 1) % totalPages;
        const track = trackRef.current;
        if (track) track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
        return next;
      });
    }, 4000);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [totalPages]);

  const pauseAutoPlay = () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };

  const openLightbox = (index: number) => {
    pauseAutoPlay();
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const selectedItem = ART_ITEMS[lightboxIndex];

  // Karten-Breite: exakt 1/visibleCount des Containers minus Lücken
  const GAP = 24; // px – entspricht gap-6
  const cardStyle = {
    flex: `0 0 calc(${100 / visibleCount}% - ${(GAP * (visibleCount - 1)) / visibleCount}px)`,
  };

  return (
    <section className="relative pt-36 pb-16 overflow-hidden bg-[#0a0a0a]">
      {/* Grain-Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-center px-6 lg:px-8 max-w-7xl mx-auto mb-28">
          <h2 className="font-serif text-5xl md:text-6xl text-white font-medium text-center">
            Unsere Kreationen
          </h2>
        </div>

        {/* Slider mit seitlichen Pfeilen */}
        <div className="relative">
          {/* Pfeil links */}
          <button
            onClick={() => { pauseAutoPlay(); goToPage(page - 1); }}
            aria-label="Vorherige Seite"
            className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black shadow-xl hover:bg-gold/85 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>
          {/* Pfeil rechts */}
          <button
            onClick={() => { pauseAutoPlay(); goToPage(page + 1); }}
            aria-label="Nächste Seite"
            className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-black shadow-xl hover:bg-gold/85 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>

        {/* Slider – overflow versteckt, kein manuelles Scrollen */}
        <div className="overflow-hidden px-4 sm:px-20 lg:px-24">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", pointerEvents: "none" }}
            onMouseEnter={pauseAutoPlay}
          >
            {ART_ITEMS.map((item, index) => (
              <button
                key={item.id}
                data-slide={index}
                onClick={() => openLightbox(index)}
                style={{ ...cardStyle, pointerEvents: "auto" }}
                className="group flex-shrink-0 rounded-2xl md:rounded-3xl overflow-hidden border border-white/5 bg-[#0f0f0f] shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:border-gold/40 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] transition-all duration-300 focus:outline-none cursor-pointer"
              >
                {item.type === "image" ? (
                  <div className="relative w-full aspect-[3/4]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
        </div>
        </div>

        {/* Seiten-Indikatoren */}
        <div className="flex justify-center gap-1.5 mt-6 px-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => { pauseAutoPlay(); goToPage(i); }}
              aria-label={`Seite ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                page === i
                  ? "w-5 h-1.5 bg-gold"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="w-full flex justify-center items-center mt-10 px-6">
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

      {/* Lightbox */}
      {lightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/92"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + ART_ITEMS.length) % ART_ITEMS.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Vorheriges"
          >
            <ChevronLeft className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % ART_ITEMS.length); }}
            className="absolute right-12 top-1/2 -translate-y-1/2 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Nächstes"
          >
            <ChevronRight className="w-7 h-7" strokeWidth={1.5} />
          </button>
          <div
            className="relative w-full max-w-xl max-h-[90vh] rounded-3xl overflow-hidden bg-black"
            style={{
              aspectRatio:
                selectedItem.type === "video"
                  ? "9/16"
                  : `${selectedItem.w}/${selectedItem.h}`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.label}
                fill
                className="object-contain"
                sizes="90vw"
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
