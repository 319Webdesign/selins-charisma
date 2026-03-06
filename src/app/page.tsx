import Image from "next/image";
import GoldButton from "@/components/GoldButton";
import ContactSection from "@/components/ContactSection";
import KreationenSection from "@/components/KreationenSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Instagram, Phone, Star } from "lucide-react";

const SALON_IMAGE = "/img/salon-interior.png";
const GALLERY_IMAGES = [
  { src: "/img/gallery-1.png", alt: "Selin's Charisma – Salonansicht" },
  { src: "/img/gallery-2.png", alt: "Selin's Charisma – Styling-Stationen" },
  { src: "/img/gallery-3.png", alt: "Selin's Charisma – Waschplätze" },
  { src: "/img/gallery-4.png", alt: "Selin's Charisma – Salon-Innenansicht" },
  { src: "/img/gallery-5.png", alt: "Selin's Charisma – Arbeitsbereiche" },
];
const LEISTUNGEN_DAMEN_IMAGE = "/img/leistungen-damen.png";
const LEISTUNGEN_HERREN_IMAGE = "/img/leistungen-herren.png";
const LEISTUNGEN_KOSMETIK_IMAGE = "/img/leistungen-kosmetik.png";

export default function HomePage() {
  return (
    <>
      {/* Hero – Titel zentriert, hier später Film/Video volle Breite */}
      <section className="min-h-[70vh] flex flex-col justify-center pt-44 pb-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="font-serif text-6xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium tracking-tight mb-6">
            Selin&apos;s Charisma
          </h1>
          <p className="text-white/70 text-lg md:text-xl lg:text-2xl text-center max-w-2xl mx-auto mb-14">
            Ihr Friseursalon für zeitlose Eleganz – Damen, Herren & Kosmetik
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+496201871966"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl border border-gold/60 text-gold font-medium hover:bg-gold/10 transition-all duration-500 ease-in-out"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              Jetzt anrufen
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-center gap-1 px-3 py-2 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-500 ease-in-out"
            >
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" aria-hidden>
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold flex-shrink-0" strokeWidth={1.5} />
                  ))}
                </span>
              </span>
              <span className="text-apple-dark/90 font-medium text-xs whitespace-nowrap">
                4,8/5 von zufriedenen Kunden
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Cards: Damen, Herren, Kosmetik */}
      <section className="py-24 px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-4xl text-white text-center mb-16 font-medium">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12">
            {[
              {
                title: "Damen",
                desc: "Schnitt, Färbung, Balayage – für Ihren einzigartigen Look.",
                label: "Media Shooting in 1 Woche – Damen",
                image: LEISTUNGEN_DAMEN_IMAGE,
              },
              {
                title: "Herren",
                desc: "Klassischer Schnitt oder moderner Stil – professionell und gepflegt.",
                label: "Media Shooting in 1 Woche – Herren",
                image: LEISTUNGEN_HERREN_IMAGE,
                preiseTab: "herren",
              },
              {
                title: "Kosmetik",
                desc: "Hautpflege, Make-up und Wellness – für Ihr strahlendes Ich.",
                label: "Media Shooting in 1 Woche – Kosmetik",
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

      {/* Vorher-Nachher CTA – Beratung & Hypnose */}
      <section className="py-24 px-6 lg:px-8 bg-[#f5f5f7] text-[#1d1d1f]">
        <div className="max-w-6xl mx-auto">
          <a
            href="/beratung-hypnose"
            className="group block rounded-[24px] overflow-hidden bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] border border-[#1d1d1f]/05 hover:shadow-[0_8px_48px_rgba(0,0,0,0.12)] transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
              <div className="relative flex items-center justify-center py-5 lg:py-6 px-4 lg:px-6 bg-[#fafafa]">
                <div className="relative w-full max-w-[320px] aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src="/img/vorher-nacher.jpeg"
                    alt="Vorher-Nachher Transformation – 30 kg in 3 Monaten mit Beratung & Hypnose"
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <div className="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#1d1d1f]/10 shadow-sm">
                  <span className="text-sm font-medium text-gold">30 kg in 90 Tagen</span>
                </div>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 text-center lg:text-left">
                <span className="text-gold font-medium text-sm tracking-wide uppercase mb-2">
                  Beratung & Hypnose
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1d1d1f] font-medium mb-4">
                  Mein Erfolgserlebnis mit Hypnose
                </h2>
                <p className="text-[#1d1d1f]/70 mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed">
                  100% mentale Arbeit – entdecken Sie, wie Hypnose und Beratung Sie auf Ihrem Weg begleiten können.
                </p>
                <span className="inline-flex items-center justify-center lg:justify-start gap-2 px-6 py-3 rounded-2xl bg-[#1d1d1f] text-[#f5f5f7] font-medium w-fit mx-auto lg:mx-0 group-hover:bg-[#2d2d2f] transition-colors duration-300">
                  Jetzt mehr erfahren
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <KreationenSection />

      {/* Galerie – Salon in Szene */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-4xl text-white text-center mb-4 font-medium">
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
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 ease-in-out"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[320px]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px] overflow-hidden">
                <Image
                  src={SALON_IMAGE}
                  alt="Selin's Charisma – Einblicke auf Instagram"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:from-black/40" />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12 text-center lg:text-left">
                <h2 className="font-serif text-3xl md:text-3xl text-white font-medium mb-3">
                  Folgen Sie uns auf Instagram
                </h2>
                <p className="text-white/70 mb-8 max-w-md">
                  Inspiration, neueste Looks und Einblicke hinter die Kulissen – bleiben Sie auf dem Laufenden.
                </p>
                <span className="inline-flex items-center justify-center lg:justify-start gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300">
                  <Instagram className="w-5 h-5" strokeWidth={1.5} />
                  Zu Instagram
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      <ReviewsSection />
      <ContactSection />
    </>
  );
}
