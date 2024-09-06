"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { ourService } from "@/static";

const Mobile = () => {
  return (
    <Container className="block py-16 md:hidden">
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        spaceBetween={10}
        breakpoints={{ 0: { slidesPerView: 1 }, 600: { slidesPerView: 2 } }}
        slidesPerView={2}
        className="block lg:!hidden"
      >
        {ourService.map((item, index) => {
          const imgClass = `${
            index === 0
              ? "w-[390] h-72"
              : index === 1
              ? "w-[360px] h-72 mx-auto"
              : index === 2
              ? "w-[340px] h-60 mb-12 mx-auto"
              : index === 3
              ? "w-72 h-72 mx-auto"
              : "w-[360px] h-60 mb-12"
          }`;
          return (
            <SwiperSlide key={index}>
              <MotionComponent
                tag="div"
                duration={0.2 + index / 4}
                delay={0.2 + index / 5}
                initialO={0}
                initialY={50}
                animateO={1}
                animateY={0}
                key={index}
                className="relative pt-12 overflow-hidden bg-gradient-to-r from-orange to-yellow rounded-xl"
              >
                <div className="absolute -top-16 -right-16">
                  <Images src="/images/service/circle.png" alt="circle" className="size-32" />
                </div>
                <div className="px-8 mb-8 space-y-4">
                  <Images src={item.pathIcon} alt={item.title} className="size-10" />
                  <h5 className="text-lg font-bold md:text-xl lg:text-2xl h-14 lg:auto">{item.title}</h5>
                  <Link
                    href={`/price/service/${index + 1}`}
                    className="flex items-center gap-2 text-base font-medium text-center md:text-xl w-max group"
                  >
                    Learn More
                    <FaLongArrowAltRight size={24} />
                  </Link>
                </div>
                <Images src={item.pathImg} alt={item.title} className={imgClass} cover />
              </MotionComponent>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-center w-full gap-2 py-8 text-sm font-medium lg:hidden">
        <div className="swiper-button-prev">
          <FaLongArrowAltLeft size={24} />
        </div>
        <p className="mb-5">Swipe</p>
        <div className="swiper-button-next">
          <FaLongArrowAltRight size={24} />
        </div>
      </div>
    </Container>
  );
};

export default Mobile;
