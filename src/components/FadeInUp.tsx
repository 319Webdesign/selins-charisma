"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type FadeInUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
};

/**
 * Fade-in-up Animation beim Scrollen – nur auf Desktop, auf dem Handy keine Animation
 */
export default function FadeInUp({ children, className, delay = 0, once = true }: FadeInUpProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const listener = () => setIsMobile(mq.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  return (
    <motion.div
      initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-40px" }}
      transition={
        isMobile
          ? { duration: 0 }
          : { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
