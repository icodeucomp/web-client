import Link from "next/link";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <Container className="pt-32 pb-16 flex items-center gap-16">
      <div className="flex-1 max-w-lg">
        <h4 className="text-6xl font-medium">The Right</h4>
        <h2 className="text-6xl font-extrabold text-gradient">Technology for Your Business</h2>
        <p className="mt-12 leading-7 text-sm md:text-base">
          We apply agile methods to deliver customized IT services and support for various non-IT tasks, ensuring your business needs are met
          efficiently
        </p>
        <div className="flex items-center gap-4 mt-4">
          <Button className="button-gradient">
            Our Services
            <IoIosArrowDown size={16} className="rounded-full shadow-md bg-light fill-orange" />
          </Button>
          <Link href="/" className="font-light hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <div className="bg-gradient-to-bl from-yellow from-10% to-purple rounded-t-full w-max mx-auto px-10 pt-40 pb-4">
          <Images src="/images/home/hero-people.png" alt="people bring laptop" className="w-96 h-96" cover />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
