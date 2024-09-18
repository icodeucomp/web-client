"use client";

import * as React from "react";

import Link from "next/link";

import useGet from "@/hooks/useGet";
import useInView from "@/hooks/useInView";

import { SwiperSlide, Swiper } from "swiper/react";

import { Navigation } from "swiper/modules";

import { motion } from "framer-motion";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import { IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { images } from "@/static";

import currency from "@/utils/currency";

import { LandingCardPriceProps } from "@/types";
import { ResponsePayload, ServiceOrProduct } from "@/types/response-api";
type ResponseService = ResponsePayload<ServiceOrProduct[]>;

const Card = ({ onMouseLeave, onMouseEnter, isHighlight, price, title, features, slug }: LandingCardPriceProps) => {
  const filterImages = images.filter((image) => image.slug === slug);

  return (
    <article
      className={`landing-card-price group ${isHighlight && "lg:-translate-y-16 lg:shadow-2xl lg:bg-yellow"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <p className="popular-label-service-price">Most Popular</p> */}
      {filterImages.map((image, index) => (
        <div key={index} className="p-4 mx-auto mt-8 rounded-full bg-light">
          <Images src={image.pathIcon} alt={image.slug} className="size-8 sm:size-10" />
        </div>
      ))}
      <h4 className="text-base font-bold h-14 md:text-lg text-blue">{title}</h4>
      <p className={`text-xs font-medium text-yellow group-hover:text-blue ${isHighlight ? "lg:text-blue" : "text-yellow"}`}>Starts From</p>
      <h5 className={`text-3xl font-bold text-yellow group-hover:text-blue ${isHighlight ? "lg:text-blue" : "text-yellow"}`}>{currency(price)}</h5>
      <div className="space-y-2 flex-grow">
        {features.map((child, e) => (
          <p key={e} className={`text-sm font-medium text-gray-700 group-hover:text-light ${isHighlight ? "lg:text-light" : "text-gray-700"}`}>
            {child}
          </p>
        ))}
      </div>
      <Button
        className={`w-full rounded-2xl bg-orange text-light group-hover:bg-light group-hover:text-orange ${
          isHighlight ? "lg:bg-light lg:text-orange" : "bg-orange text-light"
        }`}
      >
        Contact Us
      </Button>
    </article>
  );
};

const Pricing = () => {
  const [hover, setHover] = React.useState<number | null>(null);

  const { response: services } = useGet<ResponseService>(`/services`);

  const { isInView, elementRef } = useInView<HTMLDivElement>();

  const variantsH2 = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const variantsHR = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const variantsH4 = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const variantsDivOne = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
  const variantsDivTwo = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

  return (
    <Container className="pt-10" ref={elementRef}>
      <div className="pt-4 mb-16 text-center lg:mb-24">
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variantsH2}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pb-2 text-sm tracking-[4px] uppercase"
        >
          Pricing & Plans
        </motion.h2>
        <motion.hr
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variantsHR}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="w-16 h-0.5 mx-auto bg-light"
        />
        <motion.h4
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variantsH4}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="max-w-screen-lg mx-auto mt-6 text-xl font-bold md:text-2xl lg:text-4xl text-light text-shadow"
        >
          Whether your time-saving automation needs are large or small, we`re here to help you scale.
        </motion.h4>
      </div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivOne}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="justify-center hidden gap-8 py-8 lg:flex lg:bg-light rounded-3xl"
      >
        {services?.data.slice(0, 3).map((item, index) => {
          const { features, images, price, name, slug } = item;
          return (
            <Card
              key={index}
              slug={slug}
              features={features}
              price={price}
              title={name}
              isHighlight={hover === null ? index === 1 : hover === index}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </motion.div>

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivOne}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        className="block lg:hidden"
      >
        <Swiper
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          spaceBetween={10}
          breakpoints={{ 0: { slidesPerView: 1 }, 768: { slidesPerView: 2 } }}
          slidesPerView={2}
        >
          {services?.data.slice(0, 3).map((item, index) => {
            const { features, images, price, name, slug } = item;
            return (
              <SwiperSlide key={index}>
                <Card
                  slug={slug}
                  features={features}
                  price={price}
                  title={name}
                  isHighlight={hover === null ? index === 1 : hover === index}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(null)}
                />
              </SwiperSlide>
            );
          })}
          <SwiperSlide className="py-32 my-auto">
            <Link href="/" className="flex items-center justify-center w-full h-full gap-2 pb-8 text-sm font-medium hover:underline">
              See Full Pricing <IoIosArrowForward size={20} className="rounded-full bg-light fill-orange" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivTwo}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="hidden lg:block"
      >
        <Link href="/" className="flex items-center justify-center gap-2 py-16 mx-auto text-sm font-medium w-max hover:underline">
          See Full Pricing <IoIosArrowForward size={20} className="rounded-full bg-light fill-orange" />
        </Link>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivTwo}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
        className="flex items-center justify-center w-full gap-2 py-8 text-sm font-medium lg:hidden"
      >
        <div className="swiper-button-prev">
          <FaLongArrowAltLeft size={24} />
        </div>
        <p className="mb-5">Swipe</p>
        <div className="swiper-button-next">
          <FaLongArrowAltRight size={24} />
        </div>
      </motion.div>
    </Container>
  );
};

export default Pricing;
