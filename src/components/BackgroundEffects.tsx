"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Grainy Overlay – SVG-Filter mit 2% Opazität über #0a0a0a
 * Parallax Blur Objects – Gold und Creme, bewegen sich beim Scrollen
 */
export default function BackgroundEffects() {
  const { scrollY } = useScroll();
  const goldY = useTransform(scrollY, [0, 2000], [0, 200]);
  const creamY = useTransform(scrollY, [0, 2000], [0, -150]);

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

      {/* Parallax Blur Objects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-[1]" aria-hidden>
        <motion.div
          className="absolute w-[80vmax] h-[80vmax] rounded-full blur-[120px] -left-[30vmax] -top-[20vmax]"
          style={{
            background: "radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)",
            y: goldY,
          }}
        />
        <motion.div
          className="absolute w-[70vmax] h-[70vmax] rounded-full blur-[100px] -right-[25vmax] top-[30%]"
          style={{
            background: "radial-gradient(circle, rgba(249,249,249,0.12) 0%, transparent 70%)",
            y: creamY,
          }}
        />
      </div>
    </>
  );
}
