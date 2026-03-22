import type { Metadata } from "next";
import Image from "next/image";
import heroImage from "../../public/img/hero.jpeg";
import GoldButton from "@/components/GoldButton";
import ContactSection from "@/components/ContactSection";
import KreationenSection from "@/components/KreationenSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Friseur Weinheim – Damen, Herren & Kosmetik",
  description:
    "Selin's Charisma: Ihr Friseursalon in Weinheim. Professionelle Schnitte, Färbung, Balayage. Beratung & Hypnose. Hauptstraße 71, 69469 Weinheim. Jetzt Termin vereinbaren.",
};

const SALON_IMAGE = "/img/salon-interior.png";
const GALLERY_IMAGES = [
  { src: "/img/gallery-1.png", alt: "Selin's Charisma Friseur Weinheim – Salonansicht Hauptstraße" },
  { src: "/img/gallery-2.png", alt: "Selin's Charisma Friseur Weinheim – Styling-Stationen" },
  { src: "/img/gallery-3.png", alt: "Selin's Charisma Friseur Weinheim – Waschplätze" },
  { src: "/img/gallery-4.png", alt: "Selin's Charisma Friseur Weinheim – Salon-Innenansicht" },
  { src: "/img/gallery-5.png", alt: "Selin's Charisma Friseur Weinheim – Arbeitsbereiche" },
];
const LEISTUNGEN_DAMEN_IMAGE = "/img/leistungen-damen.png";
const LEISTUNGEN_HERREN_IMAGE = "/img/leistung-herren.jpeg";
const LEISTUNGEN_KOSMETIK_IMAGE = "/img/leistungen-kosmetik.png";

export default function HomePage() {
  return (
    <>
      {/* Hero – Split-Layout wie Referenz: Text links (Charcoal), Bild rechts */}
      <section className="relative bg-black overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[min(100dvh,56rem)] pt-24 md:pt-28 lg:pt-24">
          <div className="order-2 lg:order-1 flex flex-col justify-center px-6 sm:px-10 lg:px-14 xl:pl-20 xl:pr-16 py-14 lg:py-20 bg-charcoal">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-6xl font-medium tracking-tight leading-[1.15] mb-6 max-w-xl">
              <span className="text-white">Selin&apos;s Charisma: Ihr exklusiver Friseur in Weinheim für </span>
              <span className="text-gold">Schönheit</span>
              <span className="text-white"> &amp; </span>
              <span className="text-gold">Mentale Stärke</span>
            </h1>
            <p className="text-white/85 font-sans text-base sm:text-lg leading-relaxed max-w-xl mb-10">
              Erleben Sie meisterhaftes Haarstyling und transformative Hypnose an einem Ort. Wir vereinen
              luxuriöses Wellness-Ambiente mit fachmännischer Expertise für Ihre vollständige Verjüngung in
              Weinheim.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a
                href="tel:+496201871966"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gold text-black font-semibold text-sm sm:text-base border border-gold hover:bg-gold/90 transition-all duration-500 ease-in-out"
              >
                Termin buchen
              </a>
              <GoldButton href="#leistungen" variant="outline" className="px-8 py-3.5 rounded-xl border-gold text-gold font-semibold hover:bg-gold/10">
                Mehr erfahren
              </GoldButton>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative w-full overflow-hidden aspect-[3/2] lg:aspect-auto lg:h-full lg:min-h-0">
            <Image
              src={heroImage}
              alt="Selin's Charisma Weinheim – Team und professioneller Auftritt"
              fill
              priority
              quality={90}
              placeholder="blur"
              className="object-cover object-[50%_15%] lg:object-[50%_10%] contrast-[1.02]"
              sizes="(max-width: 1024px) 100vw, (max-width: 1920px) 50vw, 960px"
            />
          </div>
        </div>
      </section>

      {/* Feature Cards: Damen, Herren, Kosmetik */}
      <section id="leistungen" className="py-24 px-6 lg:px-8 bg-black/40 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-white text-center mb-16 font-medium">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
            {[
              {
                title: "Damen",
                desc: "Schnitt, Färbung, Balayage – für Ihren einzigartigen Look.",
                label: "Damen Friseur Weinheim – Media Shooting",
                image: LEISTUNGEN_DAMEN_IMAGE,
              },
              {
                title: "Herren",
                desc: "Klassischer Schnitt oder moderner Stil – professionell und gepflegt.",
                label: "Herren Friseur Weinheim – Media Shooting",
                image: LEISTUNGEN_HERREN_IMAGE,
                preiseTab: "herren",
              },
              {
                title: "Kosmetik",
                desc: "Hautpflege, Make-up und Wellness – für Ihr strahlendes Ich.",
                label: "Kosmetik Weinheim – Media Shooting",
                image: LEISTUNGEN_KOSMETIK_IMAGE,
                preiseTab: "kosmetik",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 ease-in-out max-w-sm md:max-w-none mx-auto md:mx-0"
              >
                <div className="aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-t-3xl relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-3xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-8">
                  <h3 className="font-serif text-2xl md:text-xl text-white mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <GoldButton
                    href={item.preiseTab ? `/preise?tab=${item.preiseTab}` : "/preise"}
                    variant="outline"
                  >
                    Mehr erfahren
                  </GoldButton>
                </div>
              </article>
            ))}
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

      {/* Galerie – Salon in Szene */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl text-white text-center mb-4 font-medium">
            Unser Salon
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
            Entdecken Sie die Atmosphäre von Selin&apos;s Charisma
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] md:auto-rows-[200px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
              <Image
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src={GALLERY_IMAGES[1].src}
                alt={GALLERY_IMAGES[1].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src={GALLERY_IMAGES[2].src}
                alt={GALLERY_IMAGES[2].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src={GALLERY_IMAGES[3].src}
                alt={GALLERY_IMAGES[3].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-2xl overflow-hidden relative group">
              <Image
                src={GALLERY_IMAGES[4].src}
                alt={GALLERY_IMAGES[4].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

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
