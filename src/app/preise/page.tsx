"use client";

import { useState } from "react";

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

export default function PreisePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("damen");
  const { items, subtitle } = PREISE[activeTab];

  return (
    <div className="pt-40 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-center font-medium tracking-tight mb-4">
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
              onClick={() => setActiveTab(key)}
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

        {/* Preisliste – Speisekarten-Style */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <ul className="space-y-0">
            {items.map((item) => (
              <li
                key={item.name}
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
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white/50 text-sm text-center mt-12 max-w-md mx-auto">
          Preise verstehen sich als Richtwerte. Genaue Kosten erfahren Sie bei der Beratung.
        </p>
      </div>
    </div>
  );
}
