import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description:
    "Datenschutzerklärung – Selin's Charisma Friseur Weinheim. Informationen zur Verarbeitung Ihrer personenbezogenen Daten.",
  openGraph: {
    title: "Datenschutz | Selin's Charisma Friseur Weinheim",
    description: "Datenschutzerklärung und Informationen zum Datenschutz.",
  },
};

export default function DatenschutzLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
