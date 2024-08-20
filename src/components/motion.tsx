"use client";

// components/AnimatedBox.tsx
import { motion } from "framer-motion";
import { ElementType, ReactNode, useEffect, useState } from "react";

interface MotionComponentProps {
  initialO?: number;
  initialY?: number;
  initialX?: number;
  animateO?: number;
  animateY?: number;
  animateX?: number;
  delay?: number;
  duration: number;
  tag: ElementType;
  className: string;
  children?: ReactNode;
}

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
  const Component = motion(tag); // Create a motion component from the tag prop

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
