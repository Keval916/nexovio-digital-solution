"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  accentBar?: boolean;
  variant?: "lift" | "shine" | "minimal" | "scale";
  children: React.ReactNode;
}

export function Card({
  hoverEffect = true,
  glow = false,
  accentBar = true,
  variant = "lift",
  className,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    lift: "hover:-translate-y-1.5 hover:border-brand-cyan/40 hover:bg-surface-elevated hover:shadow-md",
    shine: "hover:border-brand-bright/45 hover:bg-surface-elevated hover:shadow-sm",
    minimal: "hover:border-brand-cyan/35 hover:bg-surface-elevated/90",
    scale: "hover:scale-[1.015] hover:border-brand-cyan/40 hover:shadow-md",
  };

  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 ease-out overflow-hidden shadow-sm",
        hoverEffect && variantStyles[variant],
        glow && "border-brand-cyan/40 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Top Hover Accent Line - Animates from Left to Right */}
      {accentBar && (
        <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-gradient-brand group-hover:w-full transition-all duration-500 ease-out pointer-events-none" />
      )}

      {children}
    </div>
  );
}


