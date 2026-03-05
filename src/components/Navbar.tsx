"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setMobileOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/preise", label: "Preise" },
    { href: "/beratung-hypnose", label: "Beratung & Hypnose" },
  ];

  const isLightPage = pathname === "/beratung-hypnose";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-colors duration-300 ${
      isLightPage ? "bg-[#f5f5f7]/90 border-b border-[#1d1d1f]/10" : "bg-white/5 border-b border-white/10"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-3 hover:opacity-90 transition-all duration-500 ease-in-out ${
            isLightPage ? "text-[#1d1d1f]" : "text-white"
          }`}
          aria-label="Selin's Charisma – Startseite"
        >
          <Image
            src="/img/selins-charisma-logo.png?v=2"
            alt="Selin's Charisma"
            width={64}
            height={64}
            className="h-16 w-auto object-contain"
          />
          <span className="font-serif text-lg font-medium tracking-tight hidden sm:inline">
            Selin&apos;s Charisma
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-500 ease-in-out relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:bg-gold after:transition-all duration-500 ${
                    pathname === link.href
                      ? "text-gold after:w-full"
                      : isLightPage
                        ? "text-[#1d1d1f]/80 hover:text-[#1d1d1f] after:w-0 hover:after:w-full"
                        : "text-white/90 hover:text-white after:w-0 hover:after:w-full"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="tel:+496201871966"
            className={`inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-gold/60 text-gold rounded-2xl transition-all duration-500 ease-in-out ${
              isLightPage ? "hover:bg-gold/15" : "hover:bg-gold/10"
            }`}
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} />
            Jetzt anrufen
          </a>
        </div>

        <button
          className={`md:hidden p-2 rounded-2xl transition-all duration-500 ${
            isLightPage ? "text-[#1d1d1f] hover:bg-[#1d1d1f]/10" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className={`md:hidden backdrop-blur-md rounded-b-2xl overflow-hidden ${
          isLightPage ? "bg-[#f5f5f7]/98 border-t border-[#1d1d1f]/10" : "bg-apple-dark/95 border-t border-white/10"
        }`}>
          <ul className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block py-3 transition-all duration-500 rounded-2xl px-4 ${
                    isLightPage ? "text-[#1d1d1f]/90 hover:text-gold hover:bg-[#1d1d1f]/5" : "text-white/90 hover:text-gold hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="tel:+496201871966"
                className="flex items-center gap-2 py-3 px-4 border border-gold/60 text-gold rounded-2xl hover:bg-gold/10 transition-all duration-500"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Jetzt anrufen
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
