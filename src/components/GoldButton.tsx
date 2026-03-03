import Link from "next/link";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export default function GoldButton({
  href,
  children,
  variant = "outline",
  className,
  onClick,
  type = "button",
}: GoldButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 font-medium rounded-2xl transition-all duration-500 ease-in-out";
  const solidClasses =
    "bg-gold text-black border border-gold hover:bg-gold/90 hover:border-gold/90";
  const outlineClasses =
    "bg-transparent text-gold border border-gold/60 hover:bg-gold/10";
  const ghostClasses =
    "bg-transparent text-white border border-white/30 hover:border-gold/50 hover:text-gold";

  const classes = cn(
    baseClasses,
    variant === "solid" && solidClasses,
    variant === "outline" && outlineClasses,
    variant === "ghost" && ghostClasses,
    className
  );

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
