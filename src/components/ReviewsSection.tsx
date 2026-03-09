"use client";

import { Star } from "lucide-react";
import FadeInUp from "./FadeInUp";

const REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Bester Haarschnitt in Weinheim! Selin nimmt sich Zeit und das Ergebnis ist immer perfekt.",
  },
  {
    name: "Thomas K.",
    rating: 5,
    text: "Seit Jahren Stammkunde. Professionell, freundlich und eine tolle Atmosphäre. Klare Empfehlung!",
  },
  {
    name: "Lisa B.",
    rating: 5,
    text: "Endlich jemand, der Balayage wirklich beherrscht. Bin begeistert und komme gerne wieder.",
  },
];

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-4xl text-white text-center font-medium mb-4">
          Das sagen
          <br className="md:hidden" />
          unsere Gäste
        </h2>
        <p className="text-white/60 text-center mb-16 max-w-xl mx-auto">
          Echte Bewertungen von Google – für Ihr Vertrauen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <FadeInUp key={i} delay={i * 0.1}>
              <article
                className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-gold/20 transition-all duration-500 ease-in-out"
              >
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-gold text-gold flex-shrink-0"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <div className="w-6 h-6 text-white/30">
                  <GoogleIcon className="w-full h-full" />
                </div>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="text-gold/90 text-sm font-medium">{review.name}</p>
            </article>
            </FadeInUp>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium border border-white/30 text-white rounded-2xl hover:border-gold/50 hover:text-gold transition-all duration-500 ease-in-out"
          >
            <GoogleIcon className="w-5 h-5 text-current" />
            Alle Bewertungen auf Google lesen
          </a>
        </div>
      </div>
    </section>
  );
}
