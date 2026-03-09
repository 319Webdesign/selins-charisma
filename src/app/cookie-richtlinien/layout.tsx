import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie-Richtlinien",
  description:
    "Cookie-Richtlinien – Selin's Charisma Friseur Weinheim. Informationen zur Verwendung von Cookies auf dieser Website.",
  openGraph: {
    title: "Cookie-Richtlinien | Selin's Charisma Friseur Weinheim",
    description: "Informationen zur Verwendung von Cookies auf dieser Website.",
  },
};

export default function CookieRichtlinienLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
