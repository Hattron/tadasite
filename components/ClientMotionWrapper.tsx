"use client";

import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface ClientMotionWrapperProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  initial?: MotionProps["initial"];
  whileInView?: MotionProps["whileInView"];
  viewport?: MotionProps["viewport"];
  transition?: MotionProps["transition"];
}

export default function ClientMotionWrapper({
  children,
  className,
  style,
  initial = { opacity: 0, y: 30 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.8 },
}: ClientMotionWrapperProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
