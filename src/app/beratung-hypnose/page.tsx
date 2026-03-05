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
      <section className="pt-36 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 text-[#1d1d1f] leading-tight"
          >
            Beratung & Hypnose
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-[#1d1d1f]/70 max-w-2xl mx-auto mb-16 leading-relaxed"
          >
            Professionelle Beratung und Hypnose für Ihr Wohlbefinden – in vertrauensvoller Atmosphäre.
          </motion.p>

          {/* Video – Selin erklärt ihre Reise (Hochformat) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
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
            <p className="mt-3 text-sm text-[#1d1d1f]/60 font-medium">
              Selin erklärt ihre Reise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bento-Box Transformation */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="font-serif text-3xl md:text-4xl font-medium text-[#1d1d1f] text-center mb-14"
          >
            Transformation erleben
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
            {/* Linke Box – Vorher/Nachher (groß) */}
            <motion.div {...fadeInUp} className="md:col-span-8">
              <div className="rounded-[24px] overflow-hidden aspect-[4/3] md:aspect-auto md:min-h-[420px] relative">
                <Image
                  src="/img/vorher-nacher.jpeg"
                  alt="Vorher-Nachher Transformation – 30 kg in 3 Monaten"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 65vw"
                  priority
                />
              </div>
              <p className="mt-3 text-center font-serif text-lg font-medium text-[#1d1d1f]">
                Vorher – Nachher
              </p>
            </motion.div>

            {/* Rechte Boxen – Statistiken (klein) */}
            <div className="md:col-span-4 flex flex-col gap-4 md:gap-5">
              <motion.div
                {...fadeInUp}
                className="flex-1 rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-center border border-[#1d1d1f]/05 min-h-[100px]"
              >
                <span className="text-3xl font-serif font-medium text-gold mb-1">90</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">Tage</span>
              </motion.div>
              <motion.div
                {...fadeInUp}
                className="flex-1 rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-center border border-[#1d1d1f]/05 min-h-[100px]"
              >
                <span className="text-3xl font-serif font-medium text-gold mb-1">-30</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">kg</span>
              </motion.div>
              <motion.div
                {...fadeInUp}
                className="flex-1 rounded-[20px] bg-white shadow-[0_2px_24px_rgba(0,0,0,0.06)] p-6 flex flex-col justify-center border border-[#1d1d1f]/05 min-h-[100px]"
              >
                <span className="text-2xl font-serif font-medium text-gold mb-1">100%</span>
                <span className="text-[#1d1d1f]/70 text-sm font-medium">Mentale Arbeit</span>
              </motion.div>
            </div>
          </div>
        </div>
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
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1d1d1f] mb-3">Mentale Stärke</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed text-sm">
                Hypnose als Brücke zu Ihrem Unterbewusstsein – Blockaden lösen, neue Muster etablieren.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#1d1d1f] mb-3">Klare Ziele</h3>
              <p className="text-[#1d1d1f]/70 leading-relaxed text-sm">
                Gemeinsam definieren wir Ihre Ziele und arbeiten fokussiert und strukturiert daran.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="rounded-[24px] bg-white shadow-[0_4px_32px_rgba(0,0,0,0.08)] p-8 border border-[#1d1d1f]/05"
            >
              <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
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
