import Link from "next/link";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <Container className="flex items-center justify-center min-h-500 lg:min-h-screen 2xl:min-h-600">
      <div className="absolute top-0 left-0 flex justify-between w-full p-4">
        <MotionComponent tag="div" duration={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="relative">
          <Link href="/home" className="flex items-center gap-2">
            <Images className="size-10 sm:size-12 md:size-14" src="/icons/logo-icodeu.svg" alt="logo i code u" />
            <h1 className="text-lg font-bold sm:text-xl md:text-2xl font-red-hat">ICodeU</h1>
          </Link>
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.5} initialO={0} initialX={50} animateO={1} animateX={0} className="flex items-center gap-1 md:gap-2">
          <Link href="/contact">
            <Button className="border-2 rounded-3xl border-orange text-orange hover:bg-orange hover:text-light">Contact Us</Button>
          </Link>
        </MotionComponent>
      </div>
      <div className="max-w-2xl mx-auto space-y-8 text-center lg:my-16">
        <MotionComponent tag="h2" duration={1} initialO={0} initialY={30} animateO={1} animateY={0} className="text-2xl md:text-5xl text-gradient">
          Create the Right Technology for Your Business
        </MotionComponent>
        <MotionComponent tag="p" duration={1} delay={0.5} initialO={0} initialY={30} animateO={1} animateY={0} className="text-sm sm:text-lg">
          We apply agile methods to deliver customized IT services and support for various non-IT tasks, ensuring your business needs are met efficiently
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.9} initialO={0} initialY={30} animateO={1} animateY={0} className="block">
          <a href="#consulting">
            <Button className="mx-auto button-gradient">
              Free Consulting
              <IoIosArrowDown size={16} className="rounded-full shadow-md bg-light fill-orange" />
            </Button>
          </a>
        </MotionComponent>
      </div>
      {/* <div className="absolute top-28 left-28">
        <Images src="/icons/code-orange.svg" alt="code-orange" className="w-14 h-14" />
      </div>
      <div className="absolute p-2 rounded-full bg-light top-32 right-20">
        <Images src="/icons/price-orange.svg" alt="optimize-orange" className="w-12 h-12" />
      </div>
      <div className="absolute p-1 rounded-full bg-yellow bottom-28 left-40">
        <Images src="/icons/wordpress-white.svg" alt="wordpress-white" className="w-14 h-14" />
      </div>
      <div className="absolute p-4 rounded-full bg-yellow bottom-24 right-48">
        <Images src="/icons/figma-white.svg" alt="figma-white" className="w-8 h-8" />
      </div> */}
    </Container>
  );
};

export default Hero;
