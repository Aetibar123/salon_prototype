'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ delay });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
