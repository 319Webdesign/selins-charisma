"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Mouse-Follower: Großer, weicher radialer Verlauf folgt dem Cursor.
 * Nur für Desktop, erhellt Bento-Boxen (#1c1c1e) dezent.
 */
export default function MouseGlowEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.matchMedia("(pointer: fine)").matches);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", checkDesktop);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed inset-0 -z-[1] pointer-events-none"
      aria-hidden
    >
      <div
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          background:
            "radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.03) 30%, transparent 60%)",
        }}
      />
    </div>
  );
}
