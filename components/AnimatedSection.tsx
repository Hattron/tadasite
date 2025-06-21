'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  style?: React.CSSProperties;
  id?: string;
}

export default function AnimatedSection({ children, delay = 0, style, id }: AnimatedSectionProps) {
  return (
    <motion.div 
      id={id}
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
} 