import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  viewportMargin?: string;
  amount?: number | 'some' | 'all';
  once?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * Reusable viewport entrance animation wrapper using Framer Motion.
 * Applies a subtle fade-in and upward slide animation as sections or
 * content elements enter the viewport during scroll.
 */
export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  className = '',
  viewportMargin,
  amount = 0.15,
  once = true,
  style,
  id,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      id={id}
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once,
        amount: amount as any,
        ...(viewportMargin ? { margin: viewportMargin as any } : {}),
      }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Polished cubic-bezier easeOut
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};
