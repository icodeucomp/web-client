"use client";

import React from "react";

import useGet from "@/hooks/useGet";
import useInView from "@/hooks/useInView";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/container";
import Images from "@/components/images";
import Button from "@/components/button";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import currency from "@/utils/currency";

import { ResponsePayload, ServiceOrProduct } from "@/types/response-api";
import Link from "next/link";
type ResponseProduct = ResponsePayload<ServiceOrProduct>;

const Price = ({ id }: { id: string }) => {
  const [border, setBorder] = React.useState<number | null>(null);

  const { response: product, loading } = useGet<ResponseProduct>(`/products/${id}`);

  const { isInView, elementRef } = useInView<HTMLDivElement>();

  const variantsDivOne = { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } };
  const variantsDivTwo = { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } };

  return (
    <Container className="flex flex-col gap-8 pt-32 pb-16 md:flex-row" ref={elementRef}>
      {loading ? (
        <div className="flex justify-center mt-8">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variantsDivOne}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 max-w-md space-y-8 lg:max-w-xl"
          >
            <div className="px-8 py-20 overflow-hidden rounded-lg bg-gradient-to-b from-purple to-dark-blue">
              <Images src={product?.data.images[0] as string} alt="temporary" className="h-32 mx-auto w-60 md:h-60 xl:h-64 md:w-80 xl:w-96" cover />
            </div>
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                spaceBetween={10}
                breakpoints={{ 0: { slidesPerView: 2 }, 768: { slidesPerView: 3 } }}
                slidesPerView={3}
              >
                {product?.data.images.slice(1).map((image, index) => (
                  <SwiperSlide key={index} onClick={() => setBorder(index)}>
                    <div
                      className={`overflow-hidden bg-gradient-to-b from-purple to-dark-blue rounded-2xl cursor-pointer ${
                        border === index ? "border-2 border-yellow" : "border-2 border-transparent"
                      }`}
                    >
                      <Images src={image} alt="temporary" className="w-full h-32 mx-auto" cover />
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

          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variantsDivTwo}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="flex-1 mt-6"
          >
            <div className="space-y-2 md:space-y-4">
              <h4 className="text-2xl leading-snug md:text-3xl lg:text-4xl text-gradient">{product?.data.name}</h4>
              <p className="text-base md:text-lg text-light-yellow">Starts From</p>
              <span className="flex items-center gap-4 text-sm md:text-base">
                <p className="text-gray-300 line-through">{currency(product?.data.price as number)}</p>
                <p className="text-light-red">{product?.data.discount}% off</p>
              </span>
              <p className="text-4xl md:text-5xl lg:text-6xl text-gradient">{currency(product?.data.discountedPrice as number)}</p>
              <p className="tracking-wide">What you`ll get (Basic pack):</p>
              <ul className="space-y-1 text-sm md:text-base">
                {product?.data.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Images src="/icons/check.svg" alt="check" className="size-5 sm:size-6" />
                    <p className="text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block">
                <Button className="flex justify-center w-full button-gradient">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </Container>
  );
};

export default Price;
