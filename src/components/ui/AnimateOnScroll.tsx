"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type AnimationVariant =
  | "fadeUp"
  | "fadeDown"
  | "fadeLeft"
  | "fadeRight"
  | "fadeIn"
  | "scaleUp"
  | "staggerChildren";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Animation type (default: "fadeUp") */
  variant?: AnimationVariant;
  /** Delay in seconds before animation starts (default: 0) */
  delay?: number;
  /** Animation duration in seconds (default: 0.8) */
  duration?: number;
  /** ScrollTrigger start position (default: "top 85%") */
  start?: string;
  /** Stagger delay between children when variant is "staggerChildren" (default: 0.1) */
  stagger?: number;
  /** Additional className for the wrapper */
  className?: string;
  /** HTML tag for the wrapper element (default: "div") */
  as?: keyof JSX.IntrinsicElements;
}

const VARIANT_CONFIG: Record<
  AnimationVariant,
  { from: gsap.TweenVars; to: gsap.TweenVars }
> = {
  fadeUp: {
    from: { opacity: 0, y: 60 },
    to: { opacity: 1, y: 0 },
  },
  fadeDown: {
    from: { opacity: 0, y: -40 },
    to: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    from: { opacity: 0, x: -60 },
    to: { opacity: 1, x: 0 },
  },
  fadeRight: {
    from: { opacity: 0, x: 60 },
    to: { opacity: 1, x: 0 },
  },
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  scaleUp: {
    from: { opacity: 0, scale: 0.9 },
    to: { opacity: 1, scale: 1 },
  },
  staggerChildren: {
    from: { opacity: 0, y: 40 },
    to: { opacity: 1, y: 0 },
  },
};

export function AnimateOnScroll({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.8,
  start = "top 85%",
  stagger = 0.12,
  className,
  as: Tag = "div",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const config = VARIANT_CONFIG[variant];

      if (variant === "staggerChildren") {
        // Animate direct children with stagger
        const children = ref.current!.children;
        if (children.length === 0) return;

        gsap.set(children, config.from);
        gsap.to(children, {
          ...config.to,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        });
      } else {
        // Animate the wrapper itself
        gsap.set(ref.current!, config.from);
        gsap.to(ref.current!, {
          ...config.to,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: "play none none none",
          },
        });
      }
    }, ref);

    return () => ctx.revert();
  }, [variant, delay, duration, start, stagger]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}

export function GSAPSection({
  animation = "scale-up",
  children,
  className,
  delay = 0,
  duration = 0.8,
}: {
  animation?: "scale-up" | "fade-up" | "fade-down" | "fade-left" | "fade-right";
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const variantMap: Record<string, AnimationVariant> = {
    "scale-up": "scaleUp",
    "fade-up": "fadeUp",
    "fade-down": "fadeDown",
    "fade-left": "fadeLeft",
    "fade-right": "fadeRight",
  };
  return (
    <AnimateOnScroll
      variant={variantMap[animation] || "scaleUp"}
      duration={duration}
      delay={delay}
      className={className}
    >
      {children}
    </AnimateOnScroll>
  );
}
