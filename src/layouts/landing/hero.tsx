import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
  return (
    <Container className="relative min-h-500 sm:min-h-screen 2xl:min-h-600">
      <div className="flex justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Images className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" src="/icons/logo-icodeu.svg" alt="logo i code u" />
          <h1 className="text-lg font-bold sm:text-xl md:text-2xl font-red-hat">ICodeU</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button className="border-2 rounded-2xl border-orange text-orange hover:bg-orange hover:text-light">Contact Us</Button>
          <Button className="rounded-2xl bg-gradient-to-r from-yellow to-orange hover:from-orange hover:to-yellow">See Pricing</Button>
        </div>
      </div>
      <div className="max-w-2xl mx-auto my-24 space-y-8 text-center">
        <h3 className="text-2xl md:text-5xl text-gradient">The Right Technology for Your Business</h3>
        <p className="text-sm sm:text-lg">
          We apply agile methods to deliver customized IT services and support for various non-IT tasks, ensuring your business needs are met
          efficiently
        </p>
        <Button className="flex items-center gap-2 mx-auto rounded-3xl bg-gradient-to-r from-yellow to-orange hover:from-orange hover:to-yellow">
          See Pricing
          <IoIosArrowDown size={16} className="rounded-full shadow-md bg-light fill-orange" />
        </Button>
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
