"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  accentBar?: boolean;
  children: React.ReactNode;
}

export function Card({
  hoverEffect = true,
  glow = false,
  accentBar = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "group relative rounded-2xl border border-border-subtle bg-surface-elevated/70 backdrop-blur-md p-6 sm:p-8 transition-all duration-300 ease-out overflow-hidden shadow-sm",
        hoverEffect &&
          "hover:-translate-y-1.5 hover:border-brand-cyan/45 hover:bg-surface-elevated hover:shadow-[0_20px_45px_-12px_rgba(23,105,255,0.18),0_0_25px_rgba(0,198,255,0.12)]",
        glow && "border-brand-cyan/40 shadow-[0_0_30px_rgba(0,198,255,0.18)]",
        className
      )}
      {...props}
    >
      {/* Top Hover Gradient Accent Line */}
      {accentBar && (
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}

      {children}
    </div>
  );
}

