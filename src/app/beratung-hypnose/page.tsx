"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Brain, Target, Shield } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function BeratungHypnosePage() {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      {/* Hero */}
      <section className="pt-36 pb-36 lg:pb-48 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-[#1d1d1f] leading-tight text-center"
          >
            Beratung & Hypnose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[#1d1d1f]/70 max-w-2xl mx-auto mb-32 lg:mb-40 leading-relaxed text-center"
          >
            Professionelle Beratung und Hypnose für Ihr Wohlbefinden – in vertrauensvoller Atmosphäre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center"
          >
            {/* Links: Text */}
            <div className="flex flex-col justify-center space-y-6 text-[#1d1d1f]/80 text-lg leading-relaxed order-2 lg:order-1 text-center lg:text-left">
              <p>
                Mein Name ist Yasemin und ich begleite Menschen als Berater mit Hypnose auf ihrem Weg zu mehr Wohlbefinden und innerer Balance.
              </p>
              <p>
                Meine Arbeit basiert nicht nur auf Wissen und Ausbildung, sondern auch auf persönlicher Erfahrung. Durch die Arbeit mit Hypnose und mentalen Techniken habe ich selbst einen tiefgreifenden Veränderungsprozess erlebt – und dabei über 30 Kilogramm abgenommen.
              </p>
              <p>
                Diese Erfahrung hat mir gezeigt, wie stark unser Unterbewusstsein unsere Gewohnheiten, unser Essverhalten und unsere Motivation beeinflusst. Genau hier setzt Hypnose an: Sie hilft, innere Blockaden zu lösen, neue Denk- und Verhaltensmuster zu entwickeln und Veränderungen nachhaltig im Alltag zu verankern.
              </p>
            </div>

            {/* Rechts: Video */}
            <div className="flex flex-col items-center justify-center order-1 lg:order-2">
              <div className="relative rounded-[20px] overflow-hidden aspect-[9/16] w-full max-w-[320px] bg-[#e8e8ed]">
                <video
                  src="/video/hypnose.MP4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  Ihr Browser unterstützt das Video-Format nicht.
                </video>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bento-Box Transformation */}
      <section className="pt-12 pb-20 px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#1d1d1f] text-center mb-14"
        >
          Transformation erleben
        </motion.h2>
        <div className="max-w-6xl mr-auto ml-0">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-3">
            {/* Linke Box – Vorher/Nachher (groß) */}
            <motion.div {...fadeInUp} className="md:col-span-9">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[480px] relative">
                <Image
                  src="/img/vorher-nacher.jpeg"
                  alt="Vorher-Nachher Transformation – 30 kg in 3 Monaten"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 70vw"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-serif text-lg font-medium text-[#1d1d1f]">
                Vorher – Nachher
              </p>
            </motion.div>

            {/* Rechte Boxen – Statistiken */}
            <div className="md:col-span-3 flex flex-col gap-6 md:gap-8 md:justify-center">
              <motion.div
                {...fadeInUp}
                className="rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] px-5 py-2.5 flex flex-col justify-center border border-[#1d1d1f]/05"
              >
                <span className="text-3xl font-serif font-medium text-gold mb-0.5">90</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">Tage</span>
              </motion.div>
              <motion.div
                {...fadeInUp}
                className="rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] px-5 py-2.5 flex flex-col justify-center border border-[#1d1d1f]/05"
              >
                <span className="text-3xl font-serif font-medium text-gold mb-0.5">-30</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">kg</span>
              </motion.div>
              <motion.div
                {...fadeInUp}
                className="rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] px-5 py-2.5 flex flex-col justify-center border border-[#1d1d1f]/05"
              >
                <span className="text-2xl font-serif font-medium text-gold mb-0.5">100%</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">Mentale Arbeit</span>
              </motion.div>
            </div>
          </div>
        </div>
        <motion.div
          {...fadeInUp}
          className="mt-14 max-w-2xl mx-auto text-center space-y-6 text-[#1d1d1f]/80 text-lg leading-relaxed"
        >
          <p>
            Heute unterstütze ich Menschen dabei, ihre eigenen Ziele zu erreichen – sei es beim Abnehmen, beim Auflösen von inneren Blockaden oder beim Aufbau neuer, gesunder Gewohnheiten.
          </p>
          <p>
            Mir ist besonders wichtig, jeden Menschen individuell zu begleiten, mit Respekt, Verständnis und ohne Druck. Veränderung beginnt im Inneren – und ich freue mich, dich auf diesem Weg zu unterstützen.
          </p>
        </motion.div>
      </section>

      {/* Methodik – Drei White-Cards */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-serif text-3xl md:text-4xl font-medium text-[#1d1d1f] text-center mb-14"
          >
            Meine Methodik
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              {...fadeInUp}
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05 text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Brain className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1d1d1f] mb-3">Mentale Stärke</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed text-sm">
                Hypnose als Brücke zu Ihrem Unterbewusstsein – Blockaden lösen, neue Muster etablieren.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05 text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Target className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1d1d1f] mb-3">Klare Ziele</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed text-sm">
                Gemeinsam definieren wir Ihre Ziele und arbeiten fokussiert und strukturiert daran.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05 text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <Shield className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1d1d1f] mb-3">Vertrauen & Schutz</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed text-sm">
                In ruhiger, geschützter Umgebung begleite ich Sie einfühlsam und professionell.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="max-w-xl mx-auto text-center"
        >
          <Link
            href="tel:+496201871966"
            className="inline-flex items-center justify-center w-full md:w-auto px-10 py-4 text-base font-medium bg-[#1d1d1f] text-[#f5f5f7] rounded-2xl hover:bg-[#2d2d2f] transition-colors duration-300"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
          <p className="mt-4 text-sm text-[#1d1d1f]/60">
            Rufen Sie uns an oder schreiben Sie uns – wir freuen uns auf Sie.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
