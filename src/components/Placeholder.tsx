import { cn } from "@/lib/utils";

interface PlaceholderProps {
  label?: string;
  aspectRatio?: "video" | "square" | "auto";
  className?: string;
  children?: React.ReactNode;
}

const DEFAULT_LABEL = "Media Shooting in 1 Woche";

export default function Placeholder({
  label = DEFAULT_LABEL,
  aspectRatio = "auto",
  className,
  children,
}: PlaceholderProps) {
  const aspectClasses = {
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center bg-white/5 border border-white/10 text-white/50 text-sm text-center p-6 rounded-2xl",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {children || label}
    </div>
  );
}
