"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Instagram, X } from "lucide-react";
import { motion, useInView } from "framer-motion";

// Medien aus public/img/art/ – unterschiedliche Proportionen für Masonry
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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.06,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function KreationenSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const masonryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(masonryRef, { once: true, margin: "-50px", amount: 0.1 });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const listener = () => setIsMobile(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const selectedItem = ART_ITEMS[lightboxIndex];

  return (
    <section className="relative py-24 px-6 lg:px-8 overflow-hidden bg-[#0a0a0a]">
      {/* Subtiles Grain-Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-white text-center mb-14 font-medium">
          Unsere Kreationen
        </h2>

        {/* Lückenloses Masonry-Layout */}
        <div
          ref={masonryRef}
          className="columns-2 md:columns-3 gap-4 md:gap-6 mb-14"
        >
          {ART_ITEMS.map((item, index) => (
            <motion.button
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isMobile ? "visible" : isInView ? "visible" : "hidden"}
              transition={isMobile ? { duration: 0, delay: 0 } : undefined}
              onClick={() => openLightbox(index)}
              className="group block w-full break-inside-avoid mb-6 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a] focus:rounded-3xl text-left"
            >
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-[#0f0f0f] shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300 ease-out hover:border-[#D4AF37]/60 hover:shadow-[0_8px_32px_rgba(212,175,55,0.08)] hover:brightness-105">
                {item.type === "image" ? (
                  <div className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl">
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={item.w}
                      height={item.h}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="relative w-full aspect-[9/16] overflow-hidden rounded-2xl md:rounded-3xl">
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      autoPlay
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                )}
                <span className="sr-only">{item.label}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA – zentriert */}
        <div className="w-full flex justify-center items-center mt-14">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
          >
            <Instagram className="w-5 h-5 shrink-0" strokeWidth={1.5} />
            Mehr Einblicke auf Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors z-10"
            aria-label="Schließen"
          >
            <X className="w-6 h-6" strokeWidth={1.5} />
          </button>
          <div
            className="relative w-full max-w-2xl max-h-[90vh] rounded-3xl overflow-hidden bg-black"
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
