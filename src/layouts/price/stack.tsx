"use client";

import Container from "@/components/container";
import Images from "@/components/images";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";

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
        <h4 className="text-gradient">Tech Stack</h4>
        <h4 className="text-gradient">That We Used</h4>
      </div>
      <div className="space-y-8">
        <div className="overflow-hidden flex">
          <motion.div className="flex gap-16 flex-shrink-0" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="w-24 h-24" cover />
            ))}
          </motion.div>
          <motion.div className="flex gap-16 flex-shrink-0 pl-16" animate="animate" variants={imageVariants}>
            {firstImages.map((image, index) => (
              <Images key={`col1-${index}`} src={image} alt="stack icon" className="w-24 h-24" cover />
            ))}
          </motion.div>
        </div>

        <div className="overflow-hidden flex">
          <motion.div className="flex gap-16 flex-shrink-0" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="w-24 h-24" cover />
            ))}
          </motion.div>
          <motion.div className="flex gap-16 flex-shrink-0 pl-16" animate="animate" variants={imageVariants}>
            {secondImages.map((image, index) => (
              <Images key={`col2-${index}`} src={image} alt="stack icon" className="w-24 h-24" cover />
            ))}
          </motion.div>
        </div>
      </div>
      {/* <div className="grid grid-cols-7 gap-8 overflow-hidden">
        {images.map((image, index) => (
          <div key={index}>
            <Images key={index} src={image} alt="stack icon" className="w-24 h-24" cover />
          </div>
        ))}
      </div> */}
    </Container>
  );
};

export default Stack;
