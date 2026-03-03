import Image from "next/image";
import GoldButton from "@/components/GoldButton";
import ContactSection from "@/components/ContactSection";
import ReviewsSection from "@/components/ReviewsSection";
import { Instagram, Phone, Star } from "lucide-react";

const SALON_IMAGE = "/img/salon-interior.png";

export default function HomePage() {
  return (
    <>
      {/* Hero – Titel zentriert, hier später Film/Video volle Breite */}
      <section className="min-h-[70vh] flex flex-col justify-center pt-32 pb-28 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-medium tracking-tight mb-6">
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
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-16 font-medium">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Damen",
                desc: "Schnitt, Färbung, Balayage – für Ihren einzigartigen Look.",
                label: "Media Shooting in 1 Woche – Damen",
              },
              {
                title: "Herren",
                desc: "Klassischer Schnitt oder moderner Stil – professionell und gepflegt.",
                label: "Media Shooting in 1 Woche – Herren",
              },
              {
                title: "Kosmetik",
                desc: "Hautpflege, Make-up und Wellness – für Ihr strahlendes Ich.",
                label: "Media Shooting in 1 Woche – Kosmetik",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold/30 transition-all duration-500 ease-in-out"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-t-3xl relative">
                  <Image
                    src={SALON_IMAGE}
                    alt={item.title}
                    fill
                    className="object-cover rounded-t-3xl"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-xl text-white mb-2 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <GoldButton href="/preise" variant="outline">
                    Mehr erfahren
                  </GoldButton>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-white text-center mb-4 font-medium">
            Folgen Sie uns
          </h2>
          <p className="text-white/60 text-center mb-12 max-w-xl mx-auto">
            Bleiben Sie auf dem Laufenden mit unseren neuesten Styles.
          </p>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 scrollbar-thin">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden relative"
              >
                <Image
                  src={SALON_IMAGE}
                  alt="Selin's Charisma"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="224px"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/30 text-white rounded-2xl hover:border-gold/50 hover:text-gold transition-all duration-500 ease-in-out"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.5} />
              Folge uns
            </a>
          </div>
        </div>
      </section>

      <ReviewsSection />
      <ContactSection />
    </>
  );
}
