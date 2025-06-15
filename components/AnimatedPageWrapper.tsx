'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedPageWrapperProps {
  children: ReactNode;
}

export default function AnimatedPageWrapper({ children }: AnimatedPageWrapperProps) {
  return (
    <motion.div 
      className="flex flex-col" 
      style={{ 
        gap: 'var(--spacing-3xl)',
        paddingTop: 'calc(4rem + var(--spacing-xl))',
        paddingBottom: 'var(--spacing-xl)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
} 