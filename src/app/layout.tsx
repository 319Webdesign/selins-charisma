import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import CookieBanner from "@/components/CookieBanner";
import BackgroundEffects from "@/components/BackgroundEffects";
import MouseGlowEffect from "@/components/MouseGlowEffect";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.selins-charisma.de"
  ),
  title: {
    default: "Selin's Charisma | Friseur Weinheim – Damen, Herren & Kosmetik",
    template: "%s | Selin's Charisma Friseur Weinheim",
  },
  description:
    "Ihr Friseursalon in Weinheim: Damen, Herren und Kosmetik. Professionelle Beratung, Schnitt, Färbung, Balayage. Beratung & Hypnose. Hauptstraße 71, 69469 Weinheim.",
  keywords: [
    "Friseur Weinheim",
    "Friseursalon Weinheim",
    "Hairdresser Weinheim",
    "Damen Friseur Weinheim",
    "Herren Friseur Weinheim",
    "Kosmetik Weinheim",
    "Balayage Weinheim",
    "Hypnose Weinheim",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Selin's Charisma",
    title: "Selin's Charisma | Friseur Weinheim – Damen, Herren & Kosmetik",
    description:
      "Ihr Friseursalon in Weinheim: Damen, Herren und Kosmetik. Professionelle Beratung, Schnitt, Färbung, Balayage.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Selin's Charisma",
  description:
    "Friseursalon in Weinheim: Damen, Herren und Kosmetik. Professionelle Beratung, Schnitt, Färbung, Balayage. Beratung & Hypnose.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://www.selins-charisma.de",
  telephone: "+49 6201 871966",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hauptstraße 71",
    addressLocality: "Weinheim",
    postalCode: "69469",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 49.5502,
    longitude: 8.6697,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "16:00" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-mesh-anthracite text-white font-sans antialiased min-h-screen flex flex-col relative">
        <Script
          id="pianjs"
          src="https://api.pirsch.io/pa.js"
          strategy="afterInteractive"
          data-code="VEfrld5yCm0GlgpRPTksWjDJMgZ6Vnvw"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BackgroundEffects />
        <MouseGlowEffect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <FloatingCallButton />
      </body>
    </html>
  );
}
