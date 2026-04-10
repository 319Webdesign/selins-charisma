import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/img/hero.jpeg";
import ContactSection from "@/components/ContactSection";
import KreationenSection from "@/components/KreationenSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Instagram, Palette, Scissors, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Friseur Weinheim – Damen, Herren & Kosmetik",
  description:
    "Selin's Charisma: Ihr Friseursalon in Weinheim. Professionelle Schnitte, Färbung, Balayage. Beratung & Hypnose. Hauptstraße 71, 69469 Weinheim. Jetzt Termin vereinbaren.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero – Vollbild-Hintergrund, Overlay, Text links (Referenz-Layout) */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Selin's Charisma Weinheim – Team und professioneller Auftritt"
            fill
            priority
            quality={90}
            placeholder="blur"
            className="object-cover object-[70%_0%] sm:object-[72%_2%] md:object-[74%_4%] lg:object-[76%_5%] contrast-[1.02]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
            aria-hidden
          />
        </div>
        <div className="relative z-10 w-full max-w-7xl ml-0 mr-auto pl-4 sm:pl-5 md:pl-6 lg:pl-8 pr-6 sm:pr-8 lg:pr-12 pt-28 pb-20 md:pt-32 md:pb-24">
          <p className="font-sans text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-white/90 mb-5 md:mb-6">
            Willkommen in Weinheim
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] xl:text-7xl font-medium tracking-tight leading-[1.12] mb-6 md:mb-8 max-w-3xl">
            <span className="text-white">Ihre Ausstrahlung ist unsere </span>
            <span className="text-gold italic">Leidenschaft.</span>
          </h1>
          <p className="text-white/90 font-sans text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-10 md:mb-12">
            Exklusives Haarstyling und persönliche Beratung in luxuriösem Ambiente – für Looks, die zu Ihnen
            passen, und ein Erlebnis, das Sie spüren.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <a
              href="tel:+496201871966"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gold text-black font-semibold text-sm sm:text-base border border-gold hover:bg-gold/90 transition-all duration-500 ease-in-out"
            >
              Termin vereinbaren
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/90 text-white font-semibold text-sm sm:text-base bg-transparent hover:bg-white/10 transition-all duration-500 ease-in-out"
            >
              Unser Konzept
            </a>
          </div>
        </div>
      </section>

      {/* Haarästhetik – Service-Karten (Referenz-Layout) */}
      <section id="leistungen" className="pt-28 pb-28 md:pt-40 md:pb-36 lg:pt-44 lg:pb-44 px-6 lg:px-8 bg-[#121212] scroll-mt-28 md:scroll-mt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-10 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-4 tracking-tight">
                Haarästhetik
              </h2>
              <p className="text-white/55 font-sans text-base md:text-lg leading-relaxed">
                Präzision und Kunstfertigkeit für Ihr Haar. Entdecken Sie unsere Auswahl an
                Premium-Services.
              </p>
            </div>
            <Link
              href="/preise"
              className="inline-flex items-center gap-2 text-gold font-sans text-sm font-medium tracking-wide shrink-0 hover:text-gold/85 transition-colors"
            >
              Alle Preise ansehen
              <span aria-hidden className="text-base leading-none">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {[
              {
                icon: Scissors,
                price: "ab 25€",
                title: "Waschen / Schneiden / Stylen",
                desc: "Inklusive individueller Beratung, Haarwäsche mit Premium-Produkten und exklusivem Styling.",
              },
              {
                icon: Palette,
                price: "ab 45€",
                title: "Coloration & Balayage",
                desc: "Meisterhafte Farbtechniken für natürliche Reflexe und strahlenden Glanz.",
              },
              {
                icon: Sparkles,
                price: "ab 45€",
                title: "Kosmetik",
                desc: "Pflege und Feinheiten fürs Gesicht: Augenbrauen, Wimpern und ausgewählte Beauty-Behandlungen – passend zu Ihrem Look.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="relative z-0 bg-[#1e1e1e] p-6 md:p-8 flex flex-col min-h-[260px] md:min-h-[280px] origin-center transition-[transform,box-shadow] duration-500 ease-out motion-safe:hover:scale-[1.04] motion-safe:hover:z-10 motion-safe:hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <Icon className="w-6 h-6 text-gold shrink-0" strokeWidth={1.35} aria-hidden />
                    <span className="font-serif text-gold text-lg md:text-xl tabular-nums">
                      {item.price}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 font-sans text-sm leading-relaxed flex-1 mb-8">
                    {item.desc}
                  </p>
                  <div className="w-12 h-px bg-gold/90" aria-hidden />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hypnose – Feature-Sektion, Hero-Split-Layout */}
      <section className="relative bg-[#f5f0e8] overflow-hidden text-[#1d1d1f]">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(90vh,52rem)]">

          {/* Bild links – randlos wie Hero */}
          <div className="relative w-full overflow-hidden aspect-[3/4] sm:aspect-[2/3] lg:aspect-auto lg:h-full lg:min-h-0">
            <Image
              src="/img/hypnose-bild.jpeg"
              alt="Selin's Charisma Weinheim – Hypnose Beratung"
              fill
              className="object-cover object-[50%_20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Inhalt rechts */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:px-16 py-14 lg:py-20">
            <span className="text-gold font-semibold text-xs tracking-[0.18em] uppercase mb-4">
              Transformation durch Hypnose
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#1d1d1f] mb-5">
              Finden Sie Ihre innere{" "}
              <span className="text-gold">Stärke</span>
            </h2>
            <p className="text-[#1d1d1f]/70 text-lg leading-relaxed mb-8">
              Mit gezielter Hypnotherapie aktivieren wir die natürlichen Heilungskräfte Ihres
              Unterbewusstseins. Ein bewährter Weg zu tiefem Wohlbefinden und persönlichem Wachstum.
            </p>

            {/* Feature Cards */}
            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Tiefe Entspannung",
                  desc: "In einem sicheren, ruhigen Raum finden Sie echte Ruhe und lösen Spannungen auf.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Innere Blockaden lösen",
                  desc: "Entdecken Sie verborgene Potenziale und überwinden Sie limitierende Überzeugungen.",
                },
                {
                  icon: (
                    <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth={1.6} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ),
                  title: "Ganzheitliches Wohlbefinden",
                  desc: "Harmonisieren Sie Verstand und Körper für nachhaltige Veränderungen und Balance.",
                },
              ].map((feat) => (
                <div key={feat.title} className="flex items-start gap-4 bg-white/80 rounded-2xl px-5 py-4 shadow-sm border border-[#1d1d1f]/05">
                  <div className="mt-0.5 shrink-0">{feat.icon}</div>
                  <div>
                      <p className="font-semibold text-base text-gold mb-0.5">{feat.title}</p>
                      <p className="text-[#1d1d1f]/65 text-base leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/beratung-hypnose"
              className="w-full flex items-center justify-center px-8 py-4 rounded-2xl bg-gold text-black font-bold text-base hover:bg-gold/90 transition-all duration-300 shadow-md mb-3"
            >
              Erste Beratung Buchen
            </a>
            <p className="text-center text-[#1d1d1f]/50 text-xs tracking-wide">
              30 Min. Erstgespräch &bull; Kostenlos &bull; Unverbindlich
            </p>
          </div>
        </div>
      </section>

      <KreationenSection />

      {/* Instagram CTA */}
      <section className="bg-[#f5f0e8] py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Bild links mit Instagram-Badge */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] relative shadow-xl">
                <Image
                  src="/img/insta-cta.jpeg"
                  alt="Selin's Charisma Weinheim – Einblicke auf Instagram"
                  fill
                  className="object-cover object-[50%_20%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Instagram Handle Badge */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/95 backdrop-blur-sm text-[#1d1d1f] font-semibold text-sm px-4 py-2.5 rounded-full shadow-lg whitespace-nowrap">
                <Instagram className="w-4 h-4 text-[#1d1d1f]" strokeWidth={2} />
                @selinscharisma
              </div>
            </div>

            {/* Inhalt rechts */}
            <div className="flex flex-col justify-center">
              {/* Label */}
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-gold fill-gold" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                <span className="text-gold font-semibold text-xs tracking-[0.18em] uppercase">Folge uns</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-[#1d1d1f] mb-5">
                Entdecke Deine{" "}
                <span className="text-gold">Transformation</span>
              </h2>

              <p className="text-[#1d1d1f]/70 text-base leading-relaxed mb-8">
                Auf unserem Instagram findest Du die neusten Haarkreationen, inspirierende Before &amp; After Stories, exklusive Wellness-Tipps und einen Einblick in unseren Alltag als Expertin für Schönheit und Hypnotherapie.
              </p>

              {/* Feature List */}
              <div className="flex flex-col gap-4 mb-10">
                {[
                  { title: "Tägliche Updates", desc: "Neueste Haartrends und Styles" },
                  { title: "Exklusive Inhalte", desc: "Tipps nur für unsere Follower" },
                  { title: "Community", desc: "Interagiere mit uns und anderen" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-white/80 rounded-2xl px-5 py-4 shadow-sm border border-[#1d1d1f]/05">
                    <div className="mt-1 shrink-0 w-2.5 h-2.5 rounded-full bg-gold" />
                    <div>
                      <p className="font-semibold text-sm text-gold mb-0.5">{item.title}</p>
                      <p className="text-[#1d1d1f]/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <a
                href="https://www.instagram.com/selinscharisma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gold text-black font-bold text-base hover:bg-gold/90 transition-all duration-300 shadow-md"
              >
                <Instagram className="w-5 h-5" strokeWidth={2} />
                Jetzt Folgen
              </a>
            </div>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ContactSection />
    </>
  );
}
