import Link from "next/link";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-col-reverse items-center justify-center min-h-500 lg:min-h-screen gap-16 pt-24 pb-8 lg:pt-0 lg:items-end lg:flex-row 2xl:min-h-600">
        <MotionComponent
          tag="div"
          duration={1}
          initialO={0}
          initialX={-80}
          animateO={1}
          animateX={0}
          className="flex-1 max-w-lg text-center lg:text-start"
        >
          <h4 className="text-3xl font-medium sm:text-4xl md:text-5xl xl:text-6xl">Create the Right</h4>
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl xl:text-6xl text-gradient">Technology for Your Business</h2>
          <p className="mt-4 text-sm leading-6 md:leading-7 sm:mt-8 md:text-base">
            We apply agile methods to deliver customized IT services and support for various non-IT tasks, ensuring your business needs are met
            efficiently
          </p>
          <div className="flex flex-col items-center justify-center gap-4 mt-4 md:flex-row lg:justify-start">
            <Link href="/service">
              <Button className="button-gradient">
                Our Services
                <IoIosArrowDown size={16} className="rounded-full shadow-md bg-light fill-orange" />
              </Button>
            </Link>
            <Link href="/contact" className="text-sm font-light hover:underline sm:text-base">
              Contact Us
            </Link>
          </div>
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.5} initialO={0} initialX={80} animateO={1} animateX={0} className="flex-1">
          <div className="bg-gradient-to-bl from-yellow from-10% to-purple rounded-t-full w-max mx-auto px-10 pt-24 sm:pt-32 pb-2">
            <Images src="/images/home/hero-people.png" alt="people bring laptop" className="w-60 h-60 md:w-80 md:h-80" cover />
          </div>
        </MotionComponent>
      </Container>
      <MotionComponent
        tag="div"
        duration={1}
        delay={0.8}
        initialO={0}
        initialY={80}
        animateO={1}
        animateY={0}
        className="justify-center hidden lg:flex"
      >
        <p className="font-light text-center w-max group">
          Scroll to learn more
          <IoIosArrowDown
            size={24}
            className="p-1 mx-auto mt-1 border rounded-full shadow-md border-light fill-light group-hover:fill-orange group-hover:bg-light"
          />
        </p>
      </MotionComponent>
    </>
  );
};

export default Hero;
