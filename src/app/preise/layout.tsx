import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise für Damen, Herren, Kinder & Kosmetik – Selin's Charisma Friseur Weinheim. Transparente Preise für Schnitt, Färbung, Balayage. Hauptstraße 71, 69469 Weinheim.",
  openGraph: {
    title: "Preise | Selin's Charisma Friseur Weinheim",
    description:
      "Transparente Preise für Damen, Herren, Kinder & Kosmetik in Weinheim.",
  },
};

export default function PreiseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
