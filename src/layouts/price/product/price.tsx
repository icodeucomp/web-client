"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";
import Button from "@/components/button";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import currency from "@/utils/currency";
import { motion, useAnimation } from "framer-motion";

const Price = () => {
  const [border, setBorder] = React.useState<number | null>(null);

  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    });
  }, [controls]);

  return (
    <Container className="flex flex-col gap-8 pt-32 pb-16 lg:flex-row">
      <motion.div initial={{ opacity: 0, x: -100 }} animate={controls} className="flex-1 max-w-xl space-y-8">
        <div className="px-8 py-20 overflow-hidden rounded bg-gradient-to-b from-purple to-dark-blue">
          <Images src="/temporary-image.png" alt="temporary" className="h-32 mx-auto w-60 md:h-60 xl:h-64 md:w-80 xl:w-96" cover />
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            spaceBetween={10}
            breakpoints={{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
            slidesPerView={3}
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} onClick={() => setBorder(index)}>
                <div
                  className={`overflow-hidden bg-gradient-to-b from-purple to-dark-blue rounded-2xl cursor-pointer ${
                    border === index ? "border-2 border-yellow" : "border-2 border-transparent"
                  }`}
                >
                  <Images src="/temporary-image.png" alt="temporary" className="w-40 h-32 mx-auto" cover />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute flex items-center justify-between w-full px-4 text-sm font-medium top-1/2">
            <div className="p-1 border-2 rounded-full swiper-button-prev bg-gradient-to-r from-yellow to-orange">
              <FaLongArrowAltLeft size={24} />
            </div>
            <div className="p-1 border-2 rounded-full swiper-button-next bg-gradient-to-r from-yellow to-orange">
              <FaLongArrowAltRight size={24} />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 100 }} animate={controls} className="flex-1 mt-6">
        <div className="space-y-2 md:space-y-4">
          <h4 className="text-2xl leading-snug md:text-3xl lg:text-4xl text-gradient">Website TopUp Gaming</h4>
          <p className="text-base md:text-lg text-light-yellow">Starts From</p>
          <span className="flex items-center gap-4 text-sm md:text-base">
            <p className="text-gray-300 line-through">{currency(300000)}</p>
            <p className="text-light-red">30% off</p>
          </span>
          <p className="text-4xl md:text-5xl lg:text-6xl text-gradient">{currency(200000)}</p>
          <p className="tracking-wide">What you`ll get (Basic pack):</p>
          <ul className="space-y-1 text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Images src="/icons/check.svg" alt="check" className="w-6 h-6" />
              <p className="text-gray-300">Up to 10 games</p>
            </li>
            <li className="flex items-center gap-2">
              <Images src="/icons/check.svg" alt="check" className="w-6 h-6" />
              <p className="text-gray-300">5 social media services</p>
            </li>
            <li className="flex items-center gap-2">
              <Images src="/icons/check.svg" alt="check" className="w-6 h-6" />
              <p className="text-gray-300">Include dashboard</p>
            </li>
            <li className="flex items-center gap-2">
              <Images src="/icons/check.svg" alt="check" className="w-6 h-6" />
              <p className="text-gray-300">Free hosting for 1 year</p>
            </li>
            <li className="flex items-center gap-2">
              <Images src="/icons/check.svg" alt="check" className="w-6 h-6" />
              <p className="text-gray-300">Free domain for 1 year</p>
            </li>
          </ul>
          <Button className="flex justify-center w-full button-gradient">Contact Us</Button>
        </div>
      </motion.div>
    </Container>
  );
};

export default Price;
