import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beratung & Hypnose",
  description:
    "Beratung und Hypnose in Weinheim – Professionelle Begleitung für Wohlbefinden und innere Balance. Von Yasemin. Selin's Charisma, Hauptstraße 71, Weinheim.",
  openGraph: {
    title: "Beratung & Hypnose | Selin's Charisma Weinheim",
    description:
      "Professionelle Beratung und Hypnose in Weinheim – für Ihr Wohlbefinden und innere Balance.",
  },
};

export default function BeratungHypnoseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
