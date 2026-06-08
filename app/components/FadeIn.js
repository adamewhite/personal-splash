"use client";

import { motion } from "framer-motion";

/**
 * Subtle on-load entrance: fades in while rising a few pixels.
 * `delay` lets callers stagger sibling elements.
 */
export default function FadeIn({
  children,
  className,
  delay = 0,
  y = 12,
  duration = 0.7,
  as = "div",
}) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
