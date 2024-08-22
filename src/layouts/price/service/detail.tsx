"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import { RiCheckLine } from "react-icons/ri";
import Background from "@/components/background";

const Detail = () => {
  return (
    <>
      <Container className="pt-40">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center w-full">
            <p className="flex-shrink text-sm font-semibold tracking-wide uppercase text-light me-4 md:text-lg">Services</p>
            <i className="flex-grow max-w-xs border-t-2 border-gray-400" />
          </div>
          <Button className="whitespace-nowrap bg-orange rounded-3xl text-light cursor-auto">Most Popular</Button>
        </div>
        <div className="flex justify-between">
          <div className="flex-1 max-w-lg space-y-6">
            <h4 className="text-5xl font-bold">Responsive Web Development</h4>
            <p className="text-lg leading-normal text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore porro eos mollitia autem tempora sit distinctio. Mollitia eos iure
              debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cum.
            </p>
            <div className="space-y-4">
              <p>What you get:</p>
              <menu className="grid justify-between grid-cols-2 gap-2">
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
          </div>
          <div className="flex-1 w-full max-w-lg">
            <Swiper slidesPerView={2} spaceBetween={300}>
              <SwiperSlide>
                <Images src="/temporary-image-3.png" alt="temporary" className="mx-auto overflow-hidden h-72 w-96 rounded-xl" cover />
              </SwiperSlide>
              <SwiperSlide>
                <Images src="/temporary-image-3.png" alt="temporary" className="mx-auto overflow-hidden h-72 w-96 rounded-xl" cover />
              </SwiperSlide>
              <SwiperSlide>
                <Images src="/temporary-image-3.png" alt="temporary" className="mx-auto overflow-hidden h-72 w-96 rounded-xl" cover />
              </SwiperSlide>
              <SwiperSlide>
                <Images src="/temporary-image-3.png" alt="temporary" className="mx-auto overflow-hidden h-72 w-96 rounded-xl" cover />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
      <div className="pb-20 mt-8">
        <Background
          src="/images/price/bg-code.png"
          className="items-center justify-center w-full min-h-400"
          colorBackdrop="bg-dark/70 z-1"
          isBackdrop
        >
          <div className="flex max-w-screen-lg gap-2 mx-auto text-center">
            <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="w-20 h-20" />
            <h5 className="text-4xl text-gradient">Boost your site`s visibility and speed with expert SEO and performance optimization</h5>
            <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="w-20 h-20" />
          </div>
        </Background>
      </div>
    </>
  );
};

export default Detail;
