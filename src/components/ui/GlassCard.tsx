import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface GlassCardProps {
  children: React.ReactNode;
  borderAccent?: "gold" | "blue" | "none";
  className?: string;
  isHoverable?: boolean;
}

export function GlassCard({ children, borderAccent = "gold", className, isHoverable = true }: GlassCardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "relative overflow-hidden bg-surface-2 p-6 transition-all duration-300 border border-border-dark",
          isHoverable ? "hover:translate-y-[-4px]" : "",
          borderAccent === "gold" ? "border-l-4 border-l-accent-gold" : "",
          borderAccent === "blue" ? "border-l-4 border-l-accent-blue" : "",
          (isHoverable && borderAccent === "gold") ? "hover:shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:border-accent-gold" : "",
          (isHoverable && borderAccent === "blue") ? "hover:shadow-[0_0_20px_rgba(42,110,187,0.15)] hover:border-accent-blue" : "",
          className
        )
      )}
    >
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
      ></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
