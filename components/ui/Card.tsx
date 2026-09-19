"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export function Card({
  hoverEffect = true,
  glow = false,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-border-subtle bg-surface/80 backdrop-blur-sm p-6 sm:p-8",
        hoverEffect && "hover:border-brand-cyan/40 hover:bg-surface-elevated/90 shadow-card hover:shadow-glow/10 transition-[border-color,background-color,box-shadow] duration-[400ms]",
        glow && "border-brand-bright/30 shadow-glow/15",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
