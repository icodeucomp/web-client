"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";
import Background from "@/components/background";

import { RiCheckLine } from "react-icons/ri";

const Detail = () => {
  return (
    <>
      <Container className="pt-40">
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
          <Button className="cursor-auto whitespace-nowrap bg-orange rounded-3xl text-light">Most Popular</Button>
        </MotionComponent>
        <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
          <MotionComponent
            tag="div"
            duration={1}
            delay={0.3}
            initialO={0}
            initialX={-100}
            animateO={1}
            animateX={0}
            className="max-w-lg space-y-4 md:space-y-6"
          >
            <h4 className="text-2xl font-bold md:text-3xl lg:text-5xl">Responsive Web Development</h4>
            <p className="text-sm leading-normal text-gray-300 md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore porro eos mollitia autem tempora sit distinctio. Mollitia eos iure
              debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum.
            </p>
            <div className="space-y-2 md:space-y-4">
              <p>What you get:</p>
              <menu className="grid justify-between grid-cols-1 gap-1 text-sm sm:grid-cols-2 sm:gap-2 sm:text-base">
                <li className="flex items-center gap-2">
                  <RiCheckLine className="fill-orange" size={24} />
                  <p className="text-gray-300">Task Management</p>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine className="fill-orange" size={24} />
                  <p className="text-gray-300">Project Training</p>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine className="fill-orange" size={24} />
                  <p className="text-gray-300">Team Collaboration</p>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine className="fill-orange" size={24} />
                  <p className="text-gray-300">Reminders</p>
                </li>
                <li className="flex items-center gap-2">
                  <RiCheckLine className="fill-orange" size={24} />
                  <p className="text-gray-300">Notification</p>
                </li>
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
            className="w-full max-w-full sm:max-w-xs md:max-w-sm lg:max-w-lg"
          >
            <Swiper slidesPerView={2} spaceBetween={300}>
              <SwiperSlide>
                <Images
                  src="/temporary-image-3.png"
                  alt="temporary"
                  className="h-48 mx-auto overflow-hidden md:h-60 lg:h-72 w-72 md:w-80 lg:w-96 rounded-xl"
                  cover
                />
              </SwiperSlide>
              <SwiperSlide>
                <Images
                  src="/temporary-image-3.png"
                  alt="temporary"
                  className="h-48 mx-auto overflow-hidden md:h-60 lg:h-72 w-72 md:w-80 lg:w-96 rounded-xl"
                  cover
                />
              </SwiperSlide>
              <SwiperSlide>
                <Images
                  src="/temporary-image-3.png"
                  alt="temporary"
                  className="h-48 mx-auto overflow-hidden md:h-60 lg:h-72 w-72 md:w-80 lg:w-96 rounded-xl"
                  cover
                />
              </SwiperSlide>
              <SwiperSlide>
                <Images
                  src="/temporary-image-3.png"
                  alt="temporary"
                  className="mx-auto overflow-hidden h-52 sm:h-48 md:h-60 lg:h-72 w-72 sm:w-64 md:w-80 lg:w-96 rounded-xl"
                  cover
                />
              </SwiperSlide>
            </Swiper>
          </MotionComponent>
        </div>
      </Container>
      <MotionComponent tag="div" duration={1} initialO={0} initialX={0} animateO={1} animateX={0} className="pb-10 mt-8 md:pb-20">
        <Background
          src="/images/price/bg-code.png"
          className="items-center justify-center w-full min-h-200 sm:min-h-300 lg:min-h-400"
          colorBackdrop="bg-dark/70 z-1"
          isBackdrop
        >
          <div className="flex w-full max-w-screen-lg gap-2 mx-auto text-center">
            <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="w-20 h-20" />
            <h5 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-gradient">
              Boost your site`s visibility and speed with expert SEO and performance optimization
            </h5>
            <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="w-20 h-20" />
          </div>
        </Background>
      </MotionComponent>
    </>
  );
};

export default Detail;
