import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
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
  title: "Selin's Charisma | Friseursalon",
  description: "Ihr Friseursalon für Damen, Herren und Kosmetik. Mit Beratung und Hypnose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-mesh-anthracite text-white font-sans antialiased min-h-screen flex flex-col relative">
        <BackgroundEffects />
        <MouseGlowEffect />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
