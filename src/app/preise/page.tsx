"use client";

import { useState } from "react";

const PREISE = {
  damen: [
    { name: "Waschen & Föhnen", preis: "ab 35 €" },
    { name: "Schnitt", preis: "ab 45 €" },
    { name: "Färben", preis: "ab 65 €" },
    { name: "Balayage", preis: "ab 95 €" },
    { name: "Strähnen", preis: "ab 85 €" },
  ],
  herren: [
    { name: "Schnitt", preis: "ab 28 €" },
    { name: "Bart trimmen", preis: "ab 12 €" },
    { name: "Schnitt & Bart", preis: "ab 35 €" },
  ],
  kosmetik: [
    { name: "Gesichtsbehandlung", preis: "ab 55 €" },
    { name: "Augenbrauen formen", preis: "ab 18 €" },
    { name: "Wimpern färben", preis: "ab 22 €" },
    { name: "Bräunung", preis: "ab 35 €" },
  ],
} as const;

type TabKey = keyof typeof PREISE;

const TABS: { key: TabKey; label: string }[] = [
  { key: "damen", label: "Damen" },
  { key: "herren", label: "Herren" },
  { key: "kosmetik", label: "Kosmetik" },
];

export default function PreisePage() {
  const [activeTab, setActiveTab] = useState<TabKey>("damen");
  const items = PREISE[activeTab];

  return (
    <div className="pt-28 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white text-center font-medium tracking-tight mb-4">
          Preise
        </h1>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Transparente Preise für Damen, Herren und Kosmetik
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

        {/* Preisliste – Speisekarten-Style */}
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <ul className="space-y-0">
            {items.map((item) => (
              <li key={item.name} className="flex justify-between items-baseline gap-4 py-5 border-b border-gold/20 last:border-0">
                <span className="text-white/90 font-medium">{item.name}</span>
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
