"use client";

import { motion } from "framer-motion";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { stackImages } from "@/static";

const Stack = () => {
  const firstImages = stackImages.slice(0, 7);
  const secondImages = stackImages.slice(7);

  const imageVariants = {
    animate: { x: ["0%", "-100%"], transition: { x: { repeat: Infinity, repeatType: "loop", ease: "linear", duration: 5 } } },
  };

  return (
    <Container className="pb-32 space-y-8">
      <div className="flex flex-col space-y-2 text-3xl text-center md:text-start md:text-4xl lg:text-5xl">
        <MotionComponent tag="h4" duration={0.5} initialO={0} initialX={-50} animateO={1} animateX={0} className="text-gradient">
          Tech Stack
        </MotionComponent>
        <MotionComponent tag="h4" duration={1} delay={0.5} initialO={0} initialX={-50} animateO={1} animateX={0} className="text-gradient">
          That We Used
        </MotionComponent>
      </div>
      <MotionComponent tag="div" duration={1.5} delay={1} initialO={0} initialY={50} animateO={1} animateY={0} className="space-y-4 md:space-y-8">
        <div className="flex overflow-hidden">
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="mx-4 size-20 lg:size-24 md:mx-8" cover />
            ))}
          </motion.div>
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="mx-4 size-20 lg:size-24 md:mx-8" cover />
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden">
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="mx-4 size-20 lg:size-24 md:mx-8" cover />
            ))}
          </motion.div>
          <motion.div className="flex flex-shrink-0" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="mx-4 size-20 lg:size-24 md:mx-8" cover />
            ))}
          </motion.div>
        </div>
      </MotionComponent>
    </Container>
  );
};

export default Stack;
