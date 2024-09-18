"use client";

import useGet from "@/hooks/useGet";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";
import Background from "@/components/background";

import { RiCheckLine } from "react-icons/ri";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

import { webDev, SEO, uiAndUx, wordpress, graphicDesign } from "@/static/service";

import { ResponsePayload, ServiceOrProduct } from "@/types/response-api";
type ResponseService = ResponsePayload<ServiceOrProduct>;

const Detail = ({ id }: { id: string }) => {
  const { response: service, loading } = useGet<ResponseService>(`/services/${id}`);

  const filterServices = [webDev, SEO, uiAndUx, wordpress, graphicDesign];

  const render = filterServices.find((services) => services.slug === service?.data.slug);

  return (
    <>
      <Container className="pt-40">
        {loading ? (
          <div className="flex justify-center mt-8">
            <div className="loader"></div>
          </div>
        ) : (
          <MotionComponent
            tag="div"
            duration={0.5}
            initialO={0}
            initialY={-100}
            animateO={1}
            animateY={0}
            className="items-center justify-between hidden mb-10 sm:flex"
          >
            <div className="flex items-center w-full">
              <p className="flex-shrink text-sm font-semibold tracking-wide uppercase text-light me-4 md:text-lg">Services</p>
              <i className="flex-grow max-w-xs border-t-2 border-gray-400" />
            </div>
            {/* <Button className="cursor-auto whitespace-nowrap bg-orange rounded-3xl text-light">Most Popular</Button> */}
          </MotionComponent>
        )}
        {loading ? (
          <div className="flex justify-center mt-8">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
            <MotionComponent
              tag="div"
              duration={1}
              delay={0.3}
              initialO={0}
              initialX={-100}
              animateO={1}
              animateX={0}
              className="max-w-xl space-y-4 md:space-y-6"
            >
              <h4 className="text-2xl font-bold md:text-3xl lg:text-5xl">{service?.data.name}</h4>
              <p className="text-sm leading-normal text-gray-300 md:text-base lg:text-lg line-clamp-4 text-justify">{service?.data.description}</p>
              <div className="space-y-2 md:space-y-4">
                <p>What you get:</p>
                <menu className="grid justify-between grid-cols-1 gap-1 text-sm sm:grid-cols-2 sm:gap-2 sm:text-base">
                  {service?.data.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <RiCheckLine className="fill-orange size-5 sm:size-6" />
                      <p className="text-gray-300">{feature}</p>
                    </li>
                  ))}
                </menu>
              </div>
            </MotionComponent>
            <MotionComponent
              tag="div"
              duration={1}
              delay={0.6}
              initialO={0}
              initialX={100}
              animateO={1}
              animateX={0}
              className="w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-md relative"
            >
              <Swiper
                modules={[Navigation]}
                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                spaceBetween={20}
                slidesPerView={1}
              >
                {service?.data.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Images src={image} alt="temporary" className="h-48 mx-auto overflow-hidden md:h-60 lg:h-72 w-auto rounded-xl" cover />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="absolute flex items-center justify-between w-full px-4 text-sm font-medium top-1/2 z-1 -translate-y-1/2">
                <div className="p-1 border-2 rounded-full swiper-button-prev bg-gradient-to-r from-yellow to-orange">
                  <FaLongArrowAltLeft size={24} />
                </div>
                <div className="p-1 border-2 rounded-full swiper-button-next bg-gradient-to-r from-yellow to-orange">
                  <FaLongArrowAltRight size={24} />
                </div>
              </div>
            </MotionComponent>
          </div>
        )}
      </Container>
      <MotionComponent tag="div" duration={1} initialO={0} initialX={0} animateO={1} animateX={0} className="pb-10 mt-8 md:pb-20">
        <Background
          src="/images/price/bg-code.png"
          className="items-center justify-center w-full min-h-200 sm:min-h-300 lg:min-h-400"
          colorBackdrop="bg-dark/70 z-1"
          isBackdrop
        >
          <div className="flex items-center w-full max-w-screen-lg gap-2 mx-auto text-center sm:gap-4">
            <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="size-16 sm:size-20 md:size-28" />
            <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gradient">{render?.message}</h5>
            <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="size-16 sm:size-20 md:size-28" />
          </div>
        </Background>
      </MotionComponent>
    </>
  );
};

export default Detail;
