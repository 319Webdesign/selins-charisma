"use client";

import { Phone } from "lucide-react";

const PHONE_LINK = "tel:+496201871966";

export default function FloatingCallButton() {
  return (
    <a
      href={PHONE_LINK}
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-apple-dark/90 backdrop-blur-md border border-gold/30 text-gold shadow-lg hover:bg-gold/20 hover:border-gold/60 transition-all duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-gold/50"
      aria-label="Jetzt anrufen"
    >
      <Phone className="w-5 h-5" strokeWidth={1.5} />
    </a>
  );
}
