"use client";

import { motion } from "framer-motion";

import { MotionComponentProps } from "@/types";

const MotionComponent = ({
  children,
  className,
  tag,
  initialO,
  initialY,
  initialX,
  animateO,
  animateY,
  animateX,
  delay,
  duration,
}: MotionComponentProps) => {
  const Component = motion(tag);

  return (
    <Component
      initial={{ opacity: initialO, y: initialY, x: initialX }}
      whileInView={{ opacity: animateO, y: animateY, x: animateX }}
      transition={{ duration: duration, delay: delay }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default MotionComponent;
