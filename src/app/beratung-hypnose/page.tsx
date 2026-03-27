"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BeratungHypnosePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const heroFade = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#0A0A0A] pb-28">
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            {...heroFade}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"
          >
            Ihr Weg zu neuer Leichtigkeit: Hypnose &amp; Mentaltraining in Weinheim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-base md:text-lg text-[#0A0A0A]/75 max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Selin zeigt Ihnen in ruhiger Atmosphäre, wie gezielte Unterbewusstseinsarbeit und klare
            mentale Ausrichtung zu echten, nachhaltigen Veränderungen führen.
          </motion.p>
          <motion.div
            {...fadeInUp}
            className="mt-14 rounded-3xl overflow-hidden bg-black shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
          >
            <div className="relative aspect-video md:aspect-[16/9] w-full">
              <video
                src="/video/hypnose.MP4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="absolute inset-0 h-full w-full object-cover"
              >
                Ihr Browser unterstützt das Video-Format nicht.
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.div {...fadeInUp} className="rounded-3xl overflow-hidden bg-white border border-black/5 shadow-[0_14px_42px_rgba(0,0,0,0.1)]">
            <div className="relative min-h-[280px] md:min-h-[420px]">
              <Image
                src="/img/hypnose-bild.jpeg"
                alt="Vorher-Status oder Beratungsmoment als Platzhalter"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.article
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.08 }}
            className="rounded-3xl bg-white border border-black/5 p-8 md:p-10 shadow-[0_16px_46px_rgba(0,0,0,0.08)] flex flex-col justify-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              <span className="text-[#D4AF37]">30 Kilo in 3 Monaten</span> – Meine persönliche Reise
            </h2>
            <p className="mt-6 text-[#0A0A0A]/80 leading-relaxed text-base md:text-lg">
              Diese Veränderung war möglich durch eine klare Planung im Alltag und die konsequente Arbeit
              mit dem Unterbewusstsein. Genau diese Kombination aus Struktur und mentaler Neuausrichtung
              nutze ich heute in meinen Sitzungen.
            </p>
            <div className="mt-8">
              <Link
                href="tel:+496201871966"
                className="inline-flex items-center justify-center rounded-2xl bg-[#D4AF37] px-7 py-3 text-[#0A0A0A] font-medium hover:brightness-95 transition"
              >
                Kostenloses Erstgespräch buchen
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="relative rounded-3xl overflow-hidden border border-black/5 shadow-[0_0_45px_rgba(212,175,55,0.24)]"
          >
            <div className="relative min-h-[340px] md:min-h-[560px]">
              <Image
                src="/img/hypnose-hero.png"
                alt="Ergebnis-Galerie mit erfolgreicher Transformation"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </motion.div>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.1 }} className="mt-8 text-center">
            <Link
              href="tel:+496201871966"
              className="inline-flex items-center justify-center rounded-2xl bg-[#D4AF37] px-7 py-3 text-[#0A0A0A] font-medium hover:brightness-95 transition"
            >
              Kostenloses Erstgespräch buchen
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-serif text-3xl md:text-4xl font-medium text-center mb-10"
          >
            So wirkt die Methodik
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
            <motion.div
              {...fadeInUp}
              className="rounded-3xl bg-white p-8 border border-black/5 shadow-[0_10px_32px_rgba(0,0,0,0.07)]"
            >
              <h3 className="font-serif text-2xl mb-4">
                <span className="text-[#D4AF37]">01.</span> Blockaden lösen
              </h3>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                In der Hypnose wird das Unterbewusstsein zugänglich. Alte innere Bremsen werden erkannt und
                schrittweise durch hilfreiche Impulse ersetzt.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.08 }}
              className="rounded-3xl bg-white p-8 border border-black/5 shadow-[0_10px_32px_rgba(0,0,0,0.07)]"
            >
              <h3 className="font-serif text-2xl mb-4">
                <span className="text-[#D4AF37]">02.</span> Gewohnheiten ändern
              </h3>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                Neue Denk- und Verhaltensmuster werden gezielt verankert, damit Entscheidungen im Alltag
                leichter fallen und Ihr Zielverhalten natürlich wird.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.16 }}
              className="rounded-3xl bg-white p-8 border border-black/5 shadow-[0_10px_32px_rgba(0,0,0,0.07)]"
            >
              <h3 className="font-serif text-2xl mb-4">
                <span className="text-[#D4AF37]">03.</span> Nachhaltigkeit sichern
              </h3>
              <p className="text-[#0A0A0A]/80 leading-relaxed">
                Durch wiederholte mentale Stärkung und klare Umsetzungsstrategien bleibt die Veränderung
                stabil, statt nur ein kurzfristiger Motivationseffekt zu sein.
              </p>
            </motion.div>
          </div>
          <motion.div {...fadeInUp} transition={{ ...fadeInUp.transition, delay: 0.12 }} className="mt-8 text-center">
            <Link
              href="tel:+496201871966"
              className="inline-flex items-center justify-center rounded-2xl bg-[#D4AF37] px-7 py-3 text-[#0A0A0A] font-medium hover:brightness-95 transition"
            >
              Kostenloses Erstgespräch buchen
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
