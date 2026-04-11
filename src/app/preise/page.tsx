"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Baby, Phone, Scissors, Sparkles, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import FadeInUp from "@/components/FadeInUp";

/** Referenz-Accent (Champagner) – nur auf dieser Seite, Navbar bleibt Gold */
const ACCENT = "text-[#E5D1B8]";
const ACCENT_BG = "bg-[#E5D1B8]";
const ACCENT_BORDER = "border-[#E5D1B8]/35";

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

const TEL_HREF = "tel:+496201871966";
const TEL_DISPLAY = "+49 6201 871966";
const MEN_FEATURE_IMAGE = "/img/leistung-herren.jpeg";

function splitIntoTwoColumns<T>(items: T[]): [T[], T[]] {
  const mid = Math.ceil(items.length / 2);
  return [items.slice(0, mid), items.slice(mid)];
}

function ServiceRow({ item }: { item: PreisItem }) {
  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b border-white/[0.08] last:border-0">
      <div className="min-w-0">
        <p className="text-white/95 font-medium text-sm sm:text-base">{item.name}</p>
        {item.detail && (
          <p className="text-white/50 text-xs sm:text-sm mt-1 leading-relaxed">{item.detail}</p>
        )}
      </div>
      <p className={`font-serif text-sm sm:text-base italic tabular-nums flex-shrink-0 ${ACCENT}`}>
        {item.preis}
      </p>
    </div>
  );
}

function PreiseContent() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const listener = () => setIsMobile(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  const damenCols = splitIntoTwoColumns(PREISE.damen.items);

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="pt-36 md:pt-40 pb-16 md:pb-20 px-6 lg:px-8 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[11px] sm:text-xs font-medium tracking-[0.28em] uppercase text-white/55 mb-6">
            Handwerk im Haar
          </p>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-end">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.08]">
              Leistungen &amp; Preise
            </h1>
            <p className="text-white/60 font-sans text-base sm:text-lg leading-relaxed max-w-xl lg:max-w-none lg:justify-self-end">
              Transparente Preise für Damen, Herren, Kinder &amp; Kosmetik
            </p>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-8 py-14 md:py-20 space-y-10 md:space-y-14">
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-14">
          {/* Damen – volle Breite */}
          <FadeInUp>
            <article
              className={`rounded-2xl md:rounded-3xl bg-[#1A1A1A] border ${ACCENT_BORDER} p-6 sm:p-8 md:p-10 lg:p-12 relative overflow-hidden`}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#E5D1B8]/[0.04]"
                aria-hidden
              />
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${ACCENT_BORDER} ${ACCENT}`}
                  aria-hidden
                >
                  <Sparkles className="w-5 h-5" strokeWidth={1.5} />
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">Damen</h2>
              </div>
              <div className="grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
                <div>
                  {damenCols[0].map((item) => (
                    <ServiceRow key={item.name} item={item} />
                  ))}
                </div>
                <div>
                  {damenCols[1].map((item) => (
                    <ServiceRow key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </article>
          </FadeInUp>

          {/* Herren, Kinder & Kosmetik, Bild – Mobil: Bild unter Kosmetik; Desktop: Herren | Bild, darunter 2 Karten */}
          <FadeInUp delay={0.05}>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 lg:items-stretch">
              <article
                className={`rounded-2xl md:rounded-3xl bg-[#1A1A1A] border ${ACCENT_BORDER} p-6 sm:p-8 md:p-10 flex flex-col w-full lg:col-start-1 lg:row-start-1`}
              >
                <div className="flex items-center gap-3 mb-8 md:mb-10">
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full border ${ACCENT_BORDER} ${ACCENT}`}
                    aria-hidden
                  >
                    <UserRound className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight">Herren</h2>
                </div>
                <div className="flex-1">
                  {PREISE.herren.items.map((item) => (
                    <ServiceRow key={item.name} item={item} />
                  ))}
                </div>
              </article>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full lg:col-span-2 lg:row-start-2">
                <article
                  className={`rounded-2xl md:rounded-3xl bg-[#1A1A1A] border ${ACCENT_BORDER} p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden w-full`}
                >
                  <Scissors
                    className="absolute right-4 bottom-4 w-24 h-24 text-white/[0.04]"
                    strokeWidth={1}
                    aria-hidden
                  />
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${ACCENT_BORDER} ${ACCENT}`}
                      aria-hidden
                    >
                      <Baby className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight">
                      Kinder &amp; Teenager
                    </h2>
                  </div>
                  <div className="flex-1 space-y-0 mb-8 mt-2">
                    {PREISE.kinder.items.map((item) => (
                      <ServiceRow key={item.name} item={item} />
                    ))}
                  </div>
                  <a
                    href={TEL_HREF}
                    className={`mt-auto inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl border ${ACCENT_BORDER} text-[#E5D1B8] text-sm font-semibold hover:bg-[#E5D1B8]/10 transition-colors`}
                  >
                    Termin anfragen
                  </a>
                </article>

                <article
                  className={`rounded-2xl md:rounded-3xl bg-[#1A1A1A] border ${ACCENT_BORDER} p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden w-full`}
                >
                  <Sparkles
                    className="absolute right-4 bottom-4 w-24 h-24 text-white/[0.04]"
                    strokeWidth={1}
                    aria-hidden
                  />
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border ${ACCENT_BORDER} ${ACCENT}`}
                      aria-hidden
                    >
                      <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                    </span>
                    <h2 className="font-serif text-xl md:text-2xl font-medium tracking-tight">Kosmetik</h2>
                  </div>
                  <div className="flex-1 space-y-0 mb-8">
                    {PREISE.kosmetik.items.map((item) => (
                      <ServiceRow key={item.name} item={item} />
                    ))}
                  </div>
                  <a
                    href={TEL_HREF}
                    className={`mt-auto inline-flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-xl border ${ACCENT_BORDER} text-[#E5D1B8] text-sm font-semibold hover:bg-[#E5D1B8]/10 transition-colors`}
                  >
                    Beratung vereinbaren
                  </a>
                </article>
              </div>

              <div className="relative min-h-[300px] sm:min-h-[340px] w-full lg:min-h-0 lg:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 lg:col-start-2 lg:row-start-1">
                <Image
                  src={MEN_FEATURE_IMAGE}
                  alt="Selin's Charisma Weinheim – Herrenschnitt und professionelles Styling"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40" aria-hidden />
                <a
                  href={TEL_HREF}
                  className={`absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full ${ACCENT_BG} text-black shadow-lg hover:opacity-90 transition-opacity`}
                  aria-label="Jetzt anrufen"
                >
                  <Phone className="w-5 h-5" strokeWidth={1.75} />
                </a>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Charisma-Erlebnis */}
      <FadeInUp delay={0.06}>
        <section className="border-t border-white/[0.06] px-6 lg:px-8 py-16 md:py-24 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-4xl font-medium mb-5 tracking-tight">
              Mehr als nur ein Haarschnitt – Ihr Charisma im Fokus
            </h2>
            <p className="text-white/60 leading-relaxed mb-10 md:mb-12">
              Bei Selin&apos;s Charisma in Weinheim verstehen wir Ihr Haar als Ausdruck Ihrer Persönlichkeit.
              Unsere Stylisten kombinieren handwerkliche Präzision mit einer individuellen Typberatung, um
              einen Look zu kreieren, der nicht nur Trends folgt, sondern Ihre natürliche Schönheit
              unterstreicht. Wir nehmen uns die Zeit, die Ihr Haar benötigt – für ein Ergebnis, das auch
              Wochen nach dem Termin noch perfekt sitzt.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-4">
              <a
                href={TEL_HREF}
                className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl ${ACCENT_BG} text-black font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity`}
              >
                <Phone className="w-4 h-4" strokeWidth={1.75} />
                Termin vereinbaren
              </a>
              <a
                href={TEL_HREF}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/80 text-white font-semibold text-sm sm:text-base bg-transparent hover:bg-white/10 transition-colors"
              >
                Anrufen: {TEL_DISPLAY}
              </a>
            </div>
          </div>
        </section>
      </FadeInUp>

      {/* Qualität */}
      <FadeInUp delay={0.08}>
        <div className="border-t border-white/[0.06] px-6 lg:px-8 py-16 md:py-20 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium mb-5 leading-snug">
              Qualität, die man fühlt: Unsere Produktauswahl
            </h2>
            <p className="text-white/65 leading-relaxed">
              Für Ihre Haare ist uns nur das Beste gut genug. In unserem Salon in Weinheim verwenden wir
              ausschließlich hochwertige, professionelle Pflege- und Stylingprodukte. Diese garantieren nicht
              nur eine brillante Farbkraft bei Colorationen und Balayage, sondern schützen und kräftigen die
              Haarstruktur nachhaltig. Erleben Sie den Unterschied einer exklusiven Pflege, die genau auf Ihre
              Bedürfnisse abgestimmt ist.
            </p>
          </div>
        </div>
      </FadeInUp>

      {/* FAQ */}
      <FadeInUp delay={0.1}>
        <div className="border-t border-white/[0.06] px-6 lg:px-8 py-16 md:py-20 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-medium mb-10 leading-snug">
              Häufig gestellte Fragen zu unseren Services in Weinheim
            </h2>
            <ul className="space-y-0">
              {[
                {
                  q: "Wie finde ich den passenden Look für mich?",
                  a: "Jeder Termin beginnt mit einer ausführlichen Beratung. Wir analysieren Ihre Haarstruktur und Gesichtsform, um gemeinsam den Schnitt oder die Farbe zu finden, die Ihre Ausstrahlung optimal zur Geltung bringt.",
                },
                {
                  q: "Bieten Sie auch Termine für aufwendige Colorationen wie Balayage an?",
                  a: "Ja, wir sind spezialisiert auf moderne Farbtechniken. Da diese Behandlungen zeitintensiv sind, empfehlen wir eine frühzeitige Reservierung, um uns voll und ganz auf Ihre Transformation konzentrieren zu können.",
                },
                {
                  q: "Kann ich Friseur-Besuche mit einer Hypnose-Sitzung kombinieren?",
                  a: "Absolut. Unser einzigartiges Konzept in Weinheim erlaubt es Ihnen, äußere Schönheit und inneres Wohlbefinden zu verbinden. Sprechen Sie uns bei der Buchung einfach auf ein kombiniertes Wellness-Erlebnis an.",
                },
              ].map((item) => (
                <motion.li
                  key={item.q}
                  initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={
                    isMobile ? { duration: 0 } : { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }
                  }
                  className="py-6 border-b border-[#E5D1B8]/20 last:border-0 last:pb-0 first:pt-0"
                >
                  <p className="text-white/90 font-medium mb-2">{item.q}</p>
                  <p className="text-white/60 leading-relaxed text-sm">{item.a}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInUp>
    </div>
  );
}

export default function PreisePage() {
  return <PreiseContent />;
}
