"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Instagram, Phone } from "lucide-react";

export default function BeratungHypnosePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  };

  const revealUp = {
    initial: { y: 20 },
    whileInView: { y: 0 },
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
      <section className="pt-32 pb-20">
        <div className="px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center max-w-5xl mx-auto">
            <motion.h1
              {...heroFade}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"
            >
              Ihr Weg zu neuer Leichtigkeit: Hypnose &amp;{" "}
              <br className="md:hidden" />
              Mentaltraining in Weinheim
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
          </div>
        </div>

        <div className="mt-14 lg:px-8">
          <div className="max-lg:max-w-none max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch">
            <motion.div
              {...revealUp}
              className="relative overflow-hidden bg-black border-black/5 max-lg:rounded-none max-lg:border-0 max-lg:shadow-md lg:rounded-3xl lg:border lg:shadow-[0_24px_80px_rgba(0,0,0,0.22)] lg:min-h-[320px] lg:h-full"
            >
              <div className="relative w-full max-lg:aspect-[9/16] max-lg:max-h-[min(88dvh,920px)] lg:aspect-auto lg:max-h-none lg:absolute lg:inset-0 lg:min-h-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  preload="auto"
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget;
                    const dump = () => ({
                      mediaErrorCode: el.error?.code ?? null,
                      mediaErrorMessage: el.error?.message ?? null,
                      networkState: el.networkState,
                      readyState: el.readyState,
                      currentSrc: el.currentSrc,
                    });
                    console.error("[Hypnose Hero-Video Video_08.webm]", dump());
                    if (!el.error) {
                      queueMicrotask(() =>
                        console.error(
                          "[Hypnose Hero-Video Video_08.webm] (nach Microtask)",
                          dump()
                        )
                      );
                    }
                  }}
                >
                  <source src="/video/Video_08.webm" type="video/webm" />
                </video>
              </div>
            </motion.div>

            <motion.article
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.08 }}
              className="bg-white max-lg:w-full max-lg:rounded-none max-lg:border-x-0 max-lg:border-y max-lg:border-black/5 max-lg:shadow-none lg:rounded-3xl lg:border lg:border-black/5 lg:shadow-[0_16px_46px_rgba(0,0,0,0.08)] px-5 py-8 sm:px-8 md:p-10 flex flex-col justify-center max-lg:items-center"
            >
              <div className="space-y-5 text-[#0A0A0A]/85 leading-relaxed text-base md:text-lg max-lg:text-center max-lg:max-w-2xl">
                <p>
                  Mein Name ist Yasemin und ich begleite Menschen als Berater mit Hypnose auf ihrem Weg zu
                  mehr Wohlbefinden und innerer Balance.
                </p>
                <p>
                  Meine Arbeit basiert nicht nur auf Wissen und Ausbildung, sondern auch auf persönlicher
                  Erfahrung. Durch die Arbeit mit Hypnose und mentalen Techniken habe ich selbst einen
                  tiefgreifenden Veränderungsprozess erlebt – und dabei über 30 Kilogramm abgenommen.
                </p>
                <p>
                  Diese Erfahrung hat mir gezeigt, wie stark unser Unterbewusstsein unsere Gewohnheiten,
                  unser Essverhalten und unsere Motivation beeinflusst. Genau hier setzt Hypnose an: Sie
                  hilft, innere Blockaden zu lösen, neue Denk- und Verhaltensmuster zu entwickeln und
                  Veränderungen nachhaltig im Alltag zu verankern.
                </p>
              </div>
            </motion.article>
          </div>
        </div>

        <div className="px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.12 }}
            className="mt-14 md:mt-16 max-w-3xl mx-auto text-center space-y-5 text-[#0A0A0A]/85 leading-relaxed text-base md:text-lg"
          >
            <p>
              Heute unterstütze ich Menschen dabei, ihre eigenen Ziele zu erreichen – sei es beim
              Abnehmen, beim Auflösen von inneren Blockaden oder beim Aufbau neuer, gesunder Gewohnheiten.
            </p>
            <p>
              Mir ist besonders wichtig, jeden Menschen individuell zu begleiten, mit Respekt, Verständnis
              und ohne Druck. Veränderung beginnt im Inneren – und ich freue mich, dich auf diesem Weg zu
              unterstützen.
            </p>
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
            <h2 className="font-serif text-3xl md:text-4xl leading-tight max-lg:text-center">
              <span className="text-[#D4AF37]">30 Kilo in 3 Monaten</span> – Meine persönliche Reise
            </h2>
            <p className="mt-6 text-[#0A0A0A]/80 leading-relaxed text-base md:text-lg max-lg:text-center">
              Diese Veränderung war möglich durch eine klare Planung im Alltag und die konsequente Arbeit
              mit dem Unterbewusstsein. Genau diese Kombination aus Struktur und mentaler Neuausrichtung
              nutze ich heute in meinen Sitzungen.
            </p>
            <div className="mt-8 max-lg:flex max-lg:justify-center max-lg:w-full">
              <Link
                href="tel:+496201871966"
                className="inline-flex max-lg:w-full max-lg:max-w-md items-center justify-center rounded-2xl bg-[#D4AF37] px-7 py-3 text-center text-[#0A0A0A] font-medium hover:brightness-95 transition"
              >
                Kostenloses Erstgespräch buchen
              </Link>
            </div>
          </motion.article>
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
        </div>
      </section>

      <section className="py-14 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          <motion.aside
            {...fadeInUp}
            className="rounded-3xl border border-black/5 bg-gradient-to-br from-white to-[#F5F5F7] p-8 md:p-10 lg:p-12 shadow-[0_16px_46px_rgba(0,0,0,0.08)] flex flex-col justify-center relative overflow-hidden"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-2xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#D4AF37]/10 blur-3xl"
              aria-hidden
            />
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D4AF37] relative">
              Erstgespräch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mt-3 relative">
              Bereit für Ihren Wandel?
            </h2>
            <p className="mt-5 text-[#0A0A0A]/80 leading-relaxed text-base md:text-lg relative max-w-md">
              In einem unverbindlichen Gespräch klären wir Ihr Anliegen und wie Hypnose und mentale
              Begleitung Sie unterstützen können – vertraulich und ohne Druck.
            </p>
            <ul className="mt-6 space-y-2.5 text-[#0A0A0A]/75 text-sm md:text-base relative">
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-medium">✓</span>
                <span>Kostenlos &amp; unverbindlich</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-medium">✓</span>
                <span>Individuell auf Sie zugeschnitten</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#D4AF37] font-medium">✓</span>
                <span>Direkt in Weinheim</span>
              </li>
            </ul>
            <div className="mt-8 flex w-full flex-col items-stretch gap-3 relative">
              <Link
                href="tel:+496201871966"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#D4AF37] px-8 py-3.5 text-[#0A0A0A] font-medium hover:brightness-95 transition shadow-[0_8px_24px_rgba(212,175,55,0.35)] text-center"
              >
                Kostenloses Erstgespräch buchen
              </Link>
              <a
                href="tel:+496201871966"
                className="inline-flex items-center justify-center gap-2 text-[#0A0A0A]/80 font-medium hover:text-[#0A0A0A] transition py-1"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#D4AF37]" aria-hidden />
                +49 6201 871966
              </a>
            </div>
          </motion.aside>

          <motion.div
            {...revealUp}
            transition={{ ...revealUp.transition, delay: 0.08 }}
            className="relative rounded-3xl overflow-hidden bg-black shadow-[0_24px_80px_rgba(0,0,0,0.22)] border border-black/5 lg:h-full lg:min-h-[320px]"
          >
            <div className="relative w-full max-lg:aspect-[9/16] max-lg:max-h-[min(88dvh,920px)] lg:aspect-auto lg:max-h-none lg:absolute lg:inset-0 lg:min-h-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/video/video_02.webm" type="video/webm" />
              </video>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-0 lg:px-8 pt-6 pb-4">
        <motion.div
          {...fadeInUp}
          className="w-full max-w-none rounded-none border-y border-black/5 bg-white px-6 py-10 text-center shadow-sm sm:shadow-[0_16px_46px_rgba(0,0,0,0.06)] lg:max-w-2xl lg:mx-auto lg:rounded-3xl lg:border lg:border-black/5 sm:px-8 md:px-10"
        >
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/15 text-[#D4AF37] mb-5">
            <Instagram className="h-6 w-6" strokeWidth={1.75} aria-hidden />
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Instagram
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#0A0A0A] tracking-tight leading-snug">
            Einblicke in Hypnose &amp; mentale Begleitung
          </h2>
          <p className="mt-4 text-[#0A0A0A]/75 leading-relaxed text-base max-w-md mx-auto">
            Auf Instagram teile ich Impulse, Hintergründe und Momente rund um Hypnose und persönliche
            Veränderung – gerne vorbeischauen.
          </p>
          <a
            href="https://www.instagram.com/yaseminsilaselin/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-2xl bg-[#D4AF37] px-8 py-3.5 text-[#0A0A0A] font-medium hover:brightness-95 transition shadow-[0_8px_24px_rgba(212,175,55,0.35)]"
          >
            <Instagram className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden />
            @yaseminsilaselin folgen
          </a>
        </motion.div>
      </section>
    </div>
  );
}
