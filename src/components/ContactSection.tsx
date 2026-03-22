"use client";

import { useState, useEffect } from "react";
import { MapPin, Phone, Clock, Circle } from "lucide-react";

const PHONE = "+49 6201 871966";
const PHONE_LINK = "tel:+496201871966";

const OPENING_HOURS = [
  { days: "Dienstag – Freitag", hours: "09:00 – 18:00 Uhr" },
  { days: "Samstag", hours: "09:00 – 16:00 Uhr" },
  { days: "Montag & Sonntag", hours: "geschlossen" },
];

const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Hauptstra%C3%9Fe+71,+69469+Weinheim&t=&z=15&ie=UTF8&iwloc=&output=embed";

function isOpenNow(): boolean {
  if (typeof window === "undefined") return false;
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Berlin",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    weekday: "short",
  }).formatToParts(now);
  const dayStr = parts.find((p) => p.type === "weekday")?.value ?? "Sun";
  const hour = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);
  const minute = parseInt(parts.find((p) => p.type === "minute")?.value ?? "0", 10);
  const time = hour * 60 + minute;
  const dayMap: Record<string, number> = {
    Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6,
  };
  const day = dayMap[dayStr] ?? 0;
  if (day === 0 || day === 1) return false;
  if (day >= 2 && day <= 5) return time >= 9 * 60 && time < 18 * 60;
  if (day === 6) return time >= 9 * 60 && time < 14 * 60;
  return false;
}

export default function ContactSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(isOpenNow());
    const id = setInterval(() => setOpen(isOpenNow()), 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="kontakt" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-white text-center font-medium mb-16">
          Kontakt & Anfahrt
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Bento: Öffnungszeiten & Kontakt */}
          <div className="rounded-3xl bg-bento border border-white/5 p-8 md:p-10 flex flex-col justify-center space-y-8">
            <div>
              <h3 className="font-serif text-2xl md:text-xl text-white mb-4 flex flex-wrap items-center gap-3">
                <Clock className="w-5 h-5 text-gold" strokeWidth={1.5} />
                Öffnungszeiten
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-sm font-medium border transition-all duration-500 ${
                    open
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-white/5 text-white/60 border-white/10"
                  }`}
                >
                  <Circle
                    className={`w-2 h-2 fill-current ${open ? "text-emerald-400" : "text-white/40"}`}
                  />
                  {open ? "Geöffnet" : "Geschlossen"}
                </span>
              </h3>
              <ul className="space-y-0">
                {OPENING_HOURS.map((item, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-baseline py-4 border-b border-white/10 last:border-0"
                  >
                    <span className="text-white/80">{item.days}</span>
                    <span className="text-gold/90 text-sm font-medium">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="font-serif text-2xl md:text-xl text-white mb-4 flex items-center justify-center lg:justify-start gap-2">
                <MapPin className="w-5 h-5 text-gold" strokeWidth={1.5} />
                Adresse
              </h3>
              <p className="text-white/80 leading-relaxed">
                Hauptstraße 71
                <br />
                69469 Weinheim
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 text-gold hover:text-gold/90 transition-all duration-500"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                <span className="font-medium">{PHONE}</span>
              </a>
            </div>
          </div>

          {/* Bento: Google Maps mit Graustufen */}
          <div className="rounded-3xl overflow-hidden border border-white/5 bg-bento relative min-h-[320px]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Selin's Charisma Friseur Weinheim - Standort Hauptstraße 71"
              className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl bg-[#f5f0e8] px-8 py-12 md:px-16 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.16em] mb-2">
              Bereit für Ihre Verwandlung?
            </p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#1d1d1f] leading-tight mb-3">
              Sichern Sie sich Ihren Wunschtermin –<br className="hidden md:block" /> noch heute.
            </h3>
            <p className="text-[#1d1d1f]/70 text-base max-w-lg">
              Ob traumhaftes Haarstyling oder transformative Hypnose – rufen Sie uns jetzt an und wir finden gemeinsam den perfekten Termin für Sie.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <a
              href={PHONE_LINK}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gold text-black font-bold text-base hover:bg-gold/90 transition-all duration-300 shadow-md whitespace-nowrap"
            >
              <Phone className="w-5 h-5" strokeWidth={2} />
              {PHONE}
            </a>
            <p className="text-[#1d1d1f]/50 text-xs font-medium">
              Di–Fr 09–18 Uhr &bull; Sa 09–16 Uhr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
