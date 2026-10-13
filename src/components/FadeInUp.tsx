import React from 'react';

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
}

/**
 * High-performance, zero-overhead section wrapper that eliminates
 * viewport intersection calculations and scroll lag.
 */
export const FadeInUp: React.FC<FadeInUpProps> = ({
  children,
  className = '',
  style,
}) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};
