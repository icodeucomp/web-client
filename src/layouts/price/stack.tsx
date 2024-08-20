"use client";

import { motion } from "framer-motion";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

const images: string[] = [
  "/images/price/stack-1.png",
  "/images/price/stack-2.png",
  "/images/price/stack-3.png",
  "/images/price/stack-4.png",
  "/images/price/stack-5.png",
  "/images/price/stack-6.png",
  "/images/price/stack-7.png",
  "/images/price/stack-8.png",
  "/images/price/stack-9.png",
  "/images/price/stack-10.png",
  "/images/price/stack-11.png",
  "/images/price/stack-12.png",
  "/images/price/stack-13.png",
  "/images/price/stack-14.png",
];

const Stack = () => {
  const firstImages = images.slice(0, 7);
  const secondImages = images.slice(7);

  const imageVariants = {
    animate: { x: ["0%", "-100%"], transition: { x: { repeat: Infinity, repeatType: "loop", ease: "linear", duration: 5 } } },
  };

  return (
    <Container className="pb-32 space-y-8">
      <div className="flex flex-col text-5xl leading-snug">
        <MotionComponent tag="h4" duration={0.5} initialO={0} initialX={-50} animateO={1} animateX={0} className="text-gradient">
          Tech Stack
        </MotionComponent>
        <MotionComponent tag="h4" duration={1} delay={0.5} initialO={0} initialX={-50} animateO={1} animateX={0} className="text-gradient">
          That We Used
        </MotionComponent>
      </div>
      <MotionComponent tag="div" duration={1.5} delay={1} initialO={0} initialY={50} animateO={1} animateY={0} className="space-y-8">
        <div className="flex overflow-hidden">
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="w-24 h-24 mx-8" cover />
            ))}
          </motion.div>
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="w-24 h-24 mx-8" cover />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="w-24 h-24 mx-8" cover />
            ))}
          </motion.div>
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="w-24 h-24 mx-8" cover />
            ))}
          </motion.div>
        </div>
      </MotionComponent>
    </Container>
  );
};

export default Stack;
