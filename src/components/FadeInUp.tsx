import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface FadeInUpProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportMargin?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
}

/**
 * High-performance, hardware-accelerated Framer Motion component that subtly
 * fades in and slides content upward as it enters the viewport.
 *
 * Performance optimizations:
 * - Uses subtle, lightweight vertical translation (default 18px) to minimize composite repaints.
 * - Applies GPU hardware acceleration hints during active animation.
 * - Automatically releases GPU will-change & transform hints on animation completion
 *   to eliminate memory bloat, compositor lag, and scroll stutter.
 */
export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 18,
  className = '',
  viewportMargin = '0px 0px -50px 0px',
  amount = 0.05,
  once = true,
  style,
  ...props
}) => {
  const [hasFinished, setHasFinished] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: viewportMargin, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Lightweight cubic-bezier curve for 60fps/120fps motion
      }}
      onAnimationComplete={() => {
        setHasFinished(true);
      }}
      style={{
        ...style,
        willChange: hasFinished ? 'auto' : 'opacity, transform',
        transform: hasFinished ? 'none' : undefined,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
      }}
      className={`transform-gpu ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};
