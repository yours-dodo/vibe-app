"use client";

import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
  value: number | string;
  duration?: number;
};

const formatter = new Intl.NumberFormat("en-US");

function parseValue(value: number | string) {
  if (typeof value === "number") {
    return value;
  }

  return Number.parseInt(value.replaceAll(",", ""), 10);
}

export function AnimatedCounter({
  value,
  duration = 1400,
}: AnimatedCounterProps) {
  const reduceMotion = useReducedMotion();
  const target = useMemo(() => parseValue(value), [value]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!Number.isFinite(target)) {
      return;
    }

    if (reduceMotion) {
      const frameId = requestAnimationFrame(() => {
        setCount(target);
      });

      return () => {
        cancelAnimationFrame(frameId);
      };
    }

    let frameId = 0;
    const startAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;

      setCount(Math.round(target * eased));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [duration, reduceMotion, target]);

  if (!Number.isFinite(target)) {
    return <>{String(value)}</>;
  }

  return <>{formatter.format(count)}</>;
}
