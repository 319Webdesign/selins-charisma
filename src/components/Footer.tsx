import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";

const PHONE = "+49 6201 871966";
const PHONE_LINK = "tel:+496201871966";
const INSTAGRAM_URL = "https://instagram.com";

export default function Footer() {
  return (
    <footer className="bg-anthracite border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-medium text-white hover:text-gold transition-all duration-500"
            >
              Selin&apos;s Charisma
            </Link>
            <p className="mt-3 text-white/60 text-sm max-w-xs">
              Friseursalon für Damen, Herren & Kosmetik. Mit Beratung und Hypnose.
            </p>
            <p className="mt-2 text-white/50 text-sm flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-gold/70" />
              Hauptstraße 71, 69469 Weinheim
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 md:gap-8">
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
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-gold transition-all duration-500"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.5} />
              Instagram
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-gold/60 text-gold rounded-2xl hover:bg-gold/10 transition-all duration-500"
            >
              <Phone className="w-4 h-4" />
              Jetzt anrufen {PHONE}
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Selin&apos;s Charisma. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
