import Image from "next/image";
import GoldButton from "@/components/GoldButton";
import {
  MessageCircle,
  Sparkles,
  Heart,
  Calendar,
} from "lucide-react";

export default function BeratungHypnosePage() {
  return (
    <>
      <section className="pt-40 pb-24 px-6 lg:px-8 bg-apple-light text-apple-dark">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl md:text-5xl lg:text-6xl text-center font-medium tracking-tight mb-6 text-apple-dark">
            Beratung & Hypnose
          </h1>
          <p className="text-center text-apple-dark/80 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Professionelle Beratung und Hypnose für Ihr Wohlbefinden – in vertrauensvoller Atmosphäre.
          </p>

          <div className="rounded-3xl overflow-hidden mb-20 aspect-video min-h-[240px] relative">
            <Image
              src="/img/salon-interior.png"
              alt="Innenansicht Selin's Charisma"
              fill
              className="object-cover rounded-3xl"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>

          <div className="space-y-16">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-3xl text-apple-dark font-medium mb-4">
                  Planung & Beratung
                </h2>
                <p className="text-apple-dark/80 leading-relaxed mb-4">
                  Bevor wir mit der Umsetzung beginnen, nehmen wir uns Zeit für ein ausführliches
                  Beratungsgespräch. Gemeinsam besprechen wir Ihre Wünsche, Ihr Haar und Ihre
                  persönlichen Vorstellungen – damit das Ergebnis genau zu Ihnen passt.
                </p>
                <p className="text-apple-dark/80 leading-relaxed">
                  Mit Hypnose unterstützen wir Sie zusätzlich dabei, Entspannung zu finden und
                  Blockaden zu lösen. Ob vor dem Friseurbesuch oder als eigenständige Sitzung –
                  wir begleiten Sie einfühlsam und professionell.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-3xl text-apple-dark font-medium mb-4">
                  Hypnose & Entspannung
                </h2>
                <p className="text-apple-dark/80 leading-relaxed">
                  In ruhiger, geschützter Umgebung unterstützen wir Sie dabei, innere Ruhe zu finden
                  und sich rundum wohlzufühlen. Die Kombination aus Friseurkunst und achtsamer
                  Begleitung schafft einen besonderen Raum für Sie.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-3xl text-apple-dark font-medium mb-4">
                  Ihr Wohlbefinden im Fokus
                </h2>
                <p className="text-apple-dark/80 leading-relaxed">
                  Ob Haarpflege, Styling oder eine Auszeit für die Seele – bei uns stehen Sie im
                  Mittelpunkt. Wir freuen uns darauf, Sie kennenzulernen.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-apple-dark/10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-gold">
              <Calendar className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">Vereinbaren Sie einen Termin</span>
            </div>
            <p className="text-apple-dark/70 text-center max-w-md">
              Rufen Sie uns an oder schreiben Sie uns – wir freuen uns auf Sie.
            </p>
            <GoldButton href="tel:+496201871966" variant="solid">
              Jetzt anrufen
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Dunkler Abschluss */}
      <section className="py-20 px-6 bg-apple-dark text-white">
        <div className="max-w-7xl mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl text-white font-medium mb-4">
            Selin&apos;s Charisma
          </h2>
          <p className="text-white/70 mb-8">
            Ihr Friseursalon in Weinheim – mit Herz und Können.
          </p>
          <a
            href="tel:+496201871966"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium border border-gold/60 text-gold rounded-2xl hover:bg-gold/10 transition-all duration-500"
          >
            Jetzt anrufen
          </a>
        </div>
      </section>
    </>
  );
}
