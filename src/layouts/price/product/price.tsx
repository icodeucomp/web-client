"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/container";
import Images from "@/components/images";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import currency from "@/utils/currency";
import Button from "@/components/button";

const Price = () => {
  return (
    <Container className="flex gap-8 pt-40 pb-16">
      <div className="flex-1 max-w-xl space-y-8">
        <div className="px-8 py-20 overflow-hidden rounded bg-gradient-to-b from-purple to-dark-blue">
          <Images src="/temporary-image.png" alt="temporary" className="h-64 mx-auto w-96" cover />
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            spaceBetween={10}
            breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            slidesPerView={3}
          >
            <SwiperSlide>
              <div className="overflow-hidden border-2 bg-gradient-to-b from-purple to-dark-blue rounded-2xl border-yellow">
                <Images src="/temporary-image.png" alt="temporary" className="w-40 h-32 mx-auto" cover />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden border-2 bg-gradient-to-b from-purple to-dark-blue rounded-2xl border-yellow">
                <Images src="/temporary-image.png" alt="temporary" className="w-40 h-32 mx-auto" cover />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden border-2 bg-gradient-to-b from-purple to-dark-blue rounded-2xl border-yellow">
                <Images src="/temporary-image.png" alt="temporary" className="w-40 h-32 mx-auto" cover />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="overflow-hidden border-2 bg-gradient-to-b from-purple to-dark-blue rounded-2xl border-yellow">
                <Images src="/temporary-image.png" alt="temporary" className="w-40 h-32 mx-auto" cover />
              </div>
            </SwiperSlide>
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
      </div>
      <div className="flex-1 mt-6">
        <div className="space-y-4">
          <h4 className="text-4xl leading-snug text-gradient">Website TopUp Gaming</h4>
          <p className="text-lg text-light-yellow">Starts From</p>
          <span className="flex items-center gap-4">
            <p className="text-gray-300 line-through">{currency(300000)}</p>
            <p className="text-light-red">30% off</p>
          </span>
          <p className="text-6xl text-gradient">{currency(200000)}</p>
          <p className="tracking-wide">What you`ll get (Basic pack):</p>
          <ul className="space-y-1">
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
      </div>
    </Container>
  );
};

export default Price;
