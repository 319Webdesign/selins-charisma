"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import FadeInUp from "@/components/FadeInUp";

type PreisItem = { name: string; preis: string; detail?: string };

const PREISE: Record<string, { items: PreisItem[]; subtitle?: string }> = {
  damen: {
    items: [
      { name: "Trockenhaarschnitt", preis: "ab 25,–" },
      { name: "Waschen, Schneiden", preis: "ab 35,–" },
      { name: "Waschen, Schneiden, Föhnen", preis: "ab 45,–" },
      { name: "Tönen", preis: "ab 38,–" },
      { name: "Färben", preis: "ab 45,–" },
      { name: "Haarkur (ohne Wärme)", preis: "5,–" },
      { name: "Haarkur (mit Wärme)", preis: "10,–" },
      { name: "Strähnchen pro Folie", preis: "ab 2,50" },
    ],
  },
  herren: {
    subtitle: "Alle Leistungen inkl. Haar- & Kopfmassage",
    items: [
      { name: "Trockenhaarschnitt", preis: "ab 23,–" },
      { name: "Waschen, Schneiden", preis: "ab 25,–" },
      { name: "Waschen, Schneiden, Föhnen", preis: "ab 28,–" },
    ],
  },
  kinder: {
    items: [
      { name: "Bis 14 Jahre", preis: "15,–" },
      { name: "Teenager", preis: "20,–" },
      { name: "Waschen, Schneiden", preis: "ab 25,–" },
    ],
  },
  kosmetik: {
    items: [
      {
        name: "Klassische Gesichtsbehandlung",
        preis: "95,–",
        detail: "Bedampfen, Peelen, Reinigen, Abschlusspflege",
      },
      { name: "Deluxebehandlungen", preis: "auf Anfrage" },
      { name: "Abend-Make-up", preis: "65,–" },
      { name: "Tages-Make-up", preis: "45,–" },
      { name: "Augenbrauen zupfen", preis: "10,–" },
      { name: "Augenbrauen färben", preis: "10,–" },
      { name: "Wimpern färben", preis: "10,–" },
    ],
  },
};

type TabKey = keyof typeof PREISE;

const TABS: { key: TabKey; label: string }[] = [
  { key: "damen", label: "Damen" },
  { key: "herren", label: "Herren" },
  { key: "kinder", label: "Kinder & Teenager" },
  { key: "kosmetik", label: "Kosmetik" },
];

const VALID_TABS: TabKey[] = ["damen", "herren", "kinder", "kosmetik"];

function getTabFromUrl(searchParams: URLSearchParams | null): TabKey {
  const tab = searchParams?.get("tab");
  return tab && VALID_TABS.includes(tab as TabKey) ? (tab as TabKey) : "damen";
}

function PreiseContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = getTabFromUrl(searchParams);

  const handleTabClick = (key: TabKey) => {
    router.replace(`/preise?tab=${key}`, { scroll: false });
  };

  const { items, subtitle } = PREISE[activeTab];

  return (
    <div className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl text-white text-center font-medium tracking-tight mb-4">
          Preise
        </h1>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Transparente Preise für Damen, Herren, Kinder & Kosmetik
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-500 ease-in-out ${
                activeTab === key
                  ? "bg-white/10 text-gold border border-gold/50"
                  : "bg-transparent text-white/70 border border-white/20 hover:text-white hover:border-white/40"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Subtitle z. B. für Herren */}
        {subtitle && (
          <p className="text-white/70 text-center text-sm mb-6 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Preisliste – Bento-Box */}
        <FadeInUp>
        <div className="max-w-2xl mx-auto bg-bento border border-white/5 rounded-3xl p-8 md:p-12">
          <ul className="space-y-0">
            {items.map((item, idx) => (
              <motion.li
                key={item.name}
                initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={isMobile ? { duration: 0 } : { duration: 0.5, delay: idx * 0.04, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-between items-baseline gap-4 py-5 border-b border-gold/20 last:border-0"
              >
                <div className="min-w-0">
                  <span className="text-white/90 font-medium">{item.name}</span>
                  {item.detail && (
                    <p className="text-white/55 text-sm mt-0.5">{item.detail}</p>
                  )}
                </div>
                <span className="text-gold text-sm font-medium tabular-nums flex-shrink-0">
                  {item.preis}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
        </FadeInUp>

        <p className="text-white/50 text-sm text-center mt-12 max-w-md mx-auto">
          Preise verstehen sich als Richtwerte. Genaue Kosten erfahren Sie bei der Beratung.
        </p>

        {/* CTA – Termin per Telefon (Bento-Box) */}
        <FadeInUp delay={0.2}>
        <div className="mt-20 max-w-2xl mx-auto text-center">
          <div className="rounded-3xl border border-white/5 bg-bento p-8 md:p-12">
            <h2 className="font-serif text-3xl md:text-3xl text-white font-medium mb-3">
              Termin vereinbaren
            </h2>
            <p className="text-white/70 mb-8 max-w-md mx-auto">
              Rufen Sie uns gerne an – wir beraten Sie persönlich und finden gemeinsam den passenden Termin für Sie.
            </p>
            <a
              href="tel:+496201871966"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gold/20 border border-gold/60 text-gold font-medium hover:bg-gold/30 transition-all duration-500 ease-in-out"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              Jetzt anrufen
            </a>
          </div>
        </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default function PreisePage() {
  return (
    <Suspense fallback={
      <div className="pt-40 pb-24 px-6 lg:px-8 min-h-[50vh] flex items-center justify-center">
        <div className="animate-pulse text-white/50">Lädt…</div>
      </div>
    }>
      <PreiseContent />
    </Suspense>
  );
}
