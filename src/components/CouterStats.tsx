"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = { stats: number };
export default function CouterStats({ stats }: Props) {
  const ref = useRef(null);
  const start = useMotionValue(0);
  const spring = useSpring(start, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      start.set(stats);
    }
  }, [isInView]);

  useEffect(() => {
    spring.on("change", (newValue) => {
      if (ref.current && newValue.toFixed(0) <= stats)
        (ref as any).current.textContent = newValue.toFixed(0);
    });
  }, [start]);

  return (
    <>
      <span ref={ref}></span>
    </>
  );
}
