"use client";
import { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({ children, className = "", variant = "primary", ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-mono text-sm tracking-wide transition-colors group";
  const variants = {
    primary: "bg-accent-gold text-background hover:bg-accent-gold/90",
    secondary: "bg-accent-blue text-background hover:bg-accent-blue/90",
    outline: "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-background",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={twMerge(clsx(baseClasses, variants[variant], className))}
      {...props}
    >
      <span className="relative z-10 pointer-events-none flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
