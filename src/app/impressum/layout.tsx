import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum und rechtliche Angaben – Selin's Charisma Friseur Weinheim. Kontakt und Verantwortlich.",
  openGraph: {
    title: "Impressum | Selin's Charisma Friseur Weinheim",
    description: "Impressum und rechtliche Angaben – Selin's Charisma Weinheim.",
  },
};

export default function ImpressumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
