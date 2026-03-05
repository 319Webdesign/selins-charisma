"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Grainy Overlay – SVG-Filter mit 2% Opazität über #0a0a0a
 * Parallax Blur Objects – Gold und Creme, dynamische Bewegung beim Scrollen + dezente Float-Animation
 */
export default function BackgroundEffects() {
  const { scrollY } = useScroll();

  // Gold: vertikal + horizontal Parallax, stärkere Bewegung
  const goldY = useTransform(scrollY, [0, 1500, 3000], [0, 120, 280]);
  const goldX = useTransform(scrollY, [0, 1500, 3000], [0, 80, 150]);

  // Creme: gegenläufig für Tiefe
  const creamY = useTransform(scrollY, [0, 1500, 3000], [0, -100, -220]);
  const creamX = useTransform(scrollY, [0, 1500, 3000], [0, -60, -120]);

  return (
    <>
      {/* Grainy Overlay – fixed, pointer-events-none, hinter dem Content */}
      <div
        className="fixed inset-0 -z-[1] pointer-events-none opacity-[0.02] mix-blend-overlay"
        aria-hidden
      >
        <svg className="absolute inset-0 w-full h-full">
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Parallax Blur Objects – Gold + Creme mit X/Y-Parallax beim Scrollen */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-[1]" aria-hidden>
        <motion.div
          className="absolute w-[80vmax] h-[80vmax] rounded-full blur-[120px] -left-[30vmax] -top-[20vmax]"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
            x: goldX,
            y: goldY,
          }}
        />
        <motion.div
          className="absolute w-[70vmax] h-[70vmax] rounded-full blur-[100px] -right-[25vmax] top-[30%]"
          style={{
            background: "radial-gradient(circle, rgba(249,249,249,0.12) 0%, transparent 70%)",
            x: creamX,
            y: creamY,
          }}
        />
      </div>
    </>
  );
}
