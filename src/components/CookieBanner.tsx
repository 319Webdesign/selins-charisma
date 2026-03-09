"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "cookie-consent";

type Consent = "all" | "necessary" | null;

function getStoredConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (stored === "all" || stored === "necessary") return stored;
    return null;
  } catch {
    return null;
  }
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = getStoredConsent();
    setShowBanner(consent === null);
  }, []);

  const saveConsent = (value: "all" | "necessary") => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, value);
      setShowBanner(false);
    } catch {
      setShowBanner(false);
    }
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-6 md:pb-6 pointer-events-none"
        >
          <div className="pointer-events-auto max-w-4xl mx-auto rounded-2xl md:rounded-3xl border border-white/10 bg-bento shadow-2xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
              <div className="flex-1">
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Wir verwenden Cookies, um die Website nutzbar zu machen und
                  Ihren Besuch zu verbessern. Mit „Alle akzeptieren“ stimmen Sie
                  der Verwendung aller Cookies zu. Unter{" "}
                  <Link
                    href="/cookie-richtlinien"
                    className="text-gold hover:underline font-medium"
                  >
                    Cookie-Richtlinien
                  </Link>{" "}
                  erfahren Sie mehr.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => saveConsent("necessary")}
                  className="px-5 py-2.5 rounded-2xl text-sm font-medium border border-white/30 text-white/90 hover:border-gold/50 hover:text-gold transition-all duration-500"
                >
                  Nur notwendige
                </button>
                <button
                  type="button"
                  onClick={() => saveConsent("all")}
                  className="px-5 py-2.5 rounded-2xl text-sm font-medium bg-gold/20 border border-gold/60 text-gold hover:bg-gold/30 transition-all duration-500"
                >
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
