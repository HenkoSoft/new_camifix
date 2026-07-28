"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionReveal({ delay = 0, children, ...props }: MotionRevealProps) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
