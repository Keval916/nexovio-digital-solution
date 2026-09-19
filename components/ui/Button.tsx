"use client";

import React, { useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { trackCtaClick } from "@/lib/analytics";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  trackingName?: string;
  trackingLocation?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  trackingName,
  trackingLocation = "general",
  children,
  icon,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles =
    "group relative inline-flex items-center justify-center font-medium rounded-lg overflow-hidden outline-none focus:outline-none disabled:opacity-50 disabled:pointer-events-none select-none transition-all duration-300";

  const variantStyles = {
    primary:
      "bg-gradient-brand text-white font-semibold shadow-[0_4px_15px_rgba(23,105,255,0.35)] hover:shadow-[0_6px_20px_rgba(23,105,255,0.5)] hover:brightness-110",
    secondary:
      "bg-surface-elevated/80 text-white/90 border border-white/[0.08] backdrop-blur-sm hover:bg-surface-elevated hover:border-white/[0.15]",
    outline:
      "bg-transparent text-white/85 border border-white/[0.12] hover:bg-white/[0.05] hover:border-white/[0.2]",
    ghost:
      "bg-transparent text-muted-light hover:bg-white/[0.05] hover:text-white",
  };

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-2 rounded-lg",
    md: "text-sm px-6 py-2.5 gap-2.5 rounded-lg",
    lg: "text-base px-8 py-3.5 gap-3 font-semibold rounded-xl",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const contentElements = (
    <>
      <span className="relative z-10">
        {children}
      </span>
      {icon && (
        <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
          {icon}
        </span>
      )}
    </>
  );

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingName) {
      trackCtaClick(trackingName, trackingLocation, href);
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={combinedClasses}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={() => {
          if (trackingName) {
            trackCtaClick(trackingName, trackingLocation, href);
          }
        }}
      >
        {contentElements}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      onClick={handleButtonClick}
      {...props}
    >
      {contentElements}
    </button>
  );
}
