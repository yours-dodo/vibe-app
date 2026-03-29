"use client";

import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
}>;

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  y = 24,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.21, 1.02, 0.35, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
