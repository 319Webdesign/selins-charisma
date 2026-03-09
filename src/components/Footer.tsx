import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";

const INSTAGRAM_URL = "https://instagram.com";

export default function Footer() {
  return (
    <footer className="bg-anthracite border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 md:items-start place-items-center md:place-items-stretch">
          {/* Linke Spalte: Salon-Infos */}
          <div className="text-center md:text-left w-full max-w-xs md:max-w-none">
            <Link
              href="/"
              className="font-serif text-xl font-medium text-white hover:text-gold transition-all duration-500"
            >
              Selin&apos;s Charisma
            </Link>
            <p className="mt-3 text-white/60 text-sm max-w-xs mx-auto md:mx-0">
              Friseursalon in Weinheim – Damen, Herren & Kosmetik. Mit Beratung und Hypnose.
            </p>
            <p className="mt-2 text-white/50 text-sm flex items-center justify-center md:justify-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold/70 flex-shrink-0" />
              Hauptstraße 71, 69469 Weinheim
            </p>
          </div>

          {/* Mittlere Spalte: Menü */}
          <nav className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <Link
                href="/"
                className="text-sm text-white/70 hover:text-gold transition-all duration-500"
              >
                Home
              </Link>
              <Link
                href="/preise"
                className="text-sm text-white/70 hover:text-gold transition-all duration-500"
              >
                Preise
              </Link>
              <Link
                href="/beratung-hypnose"
                className="text-sm text-white/70 hover:text-gold transition-all duration-500"
              >
                Beratung & Hypnose
              </Link>
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-all duration-500"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              Instagram
            </a>
          </nav>

          {/* Rechte Spalte: Rechtliches */}
          <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
            <Link
              href="/impressum"
              className="text-sm text-white/70 hover:text-gold transition-all duration-500"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-sm text-white/70 hover:text-gold transition-all duration-500"
            >
              Datenschutz
            </Link>
            <Link
              href="/cookie-richtlinien"
              className="text-sm text-white/70 hover:text-gold transition-all duration-500"
            >
              Cookie-Richtlinien
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <span>© {new Date().getFullYear()} Selin&apos;s Charisma. Alle Rechte vorbehalten.</span>
        </div>
      </div>
    </footer>
  );
}
