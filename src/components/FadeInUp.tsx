"use client";

import { motion } from "framer-motion";

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Fade-in-up Animation beim Scrollen – für Preislisten-Items und Review-Karten
 */
export default function FadeInUp({ children, className, delay = 0, once = true }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
