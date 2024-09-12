"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import useGet from "@/hooks/useGet";
import usePost from "@/hooks/usePost";
import useInView from "@/hooks/useInView";

import { motion } from "framer-motion";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import toast from "react-hot-toast";

import { FaWhatsapp } from "react-icons/fa";

import { InputType } from "@/types";

import { Consulting, ResponsePayload } from "@/types/response-api";

type ResponseServicesName = ResponsePayload<string[]>;
type ResponseConsulting = ResponsePayload<Consulting>;

const Contact = () => {
  const { isInView, elementRef } = useInView<HTMLDivElement>();

  const variantsDivOne = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };
  const variantsDivTwo = { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } };

  const { response: services } = useGet<ResponseServicesName>("/services/name");

  const { execute, loading, response } = usePost<ResponseConsulting>("/mails/consulting");

  const initValues = { fullName: "", email: "", phoneNumber: "", service: "" };

  const [input, setInput] = useState<InputType>(initValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    execute(input);
    toast.success(response?.message as string);
    setInput(initValues);
  };

  return (
    <Container className="flex flex-col justify-center gap-8 pt-10 pb-16 sm:pt-16 lg:justify-between lg:flex-row" ref={elementRef}>
      <motion.div
        id="consulting"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivOne}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-full space-y-8 text-center lg:text-start lg:max-w-lg"
      >
        <Images src="/icons/chat.svg" alt="icon chat" className="hidden size-16 lg:block" />
        <h4 className="text-2xl font-bold md:text-3xl">Get a free consultancy from us right now!</h4>
        <p className="text-sm md:text-lg">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
        </p>
        <a href="https://wa.me/6285183154204" target="_blank" rel="noreferrer" className="block">
          <Button className="flex items-center justify-center w-full gap-2 rounded-2xl bg-green hover:bg-green/90 hover:shadow-2xl">
            <FaWhatsapp className="size-6 text-light" /> Contact us through Whatsapp
          </Button>
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variantsDivTwo}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="max-w-xs p-6 mx-auto overflow-hidden lg:mx-0 md:max-w-md rounded-xl bg-light"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm font-bold md:text-base text-dark">
              Name
            </label>
            <input type="text" id="fullName" className="input-form" placeholder="John" required onChange={handleChange} value={input.fullName} />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-bold md:text-base text-dark">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input-form"
              placeholder="icodeuu@gmail.com"
              required
              onChange={handleChange}
              value={input.email}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="phoneNumber" className="text-sm font-bold md:text-base text-dark">
              Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              className="input-form"
              placeholder="085183154204"
              required
              onChange={handleChange}
              value={input.phoneNumber}
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="service" className="text-sm font-bold md:text-base text-dark">
              Which service do you need?
            </label>
            <select id="service" className="input-form" onChange={handleChange} value={input.service}>
              <option value="" disabled className="text-dark">
                Select an option
              </option>
              {services?.data.map((option, index) => (
                <option key={index} value={option} className="text-dark">
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Button type="submit" className={`w-full bg-yellow rounded-xl hover:bg-orange/80 ${loading && "animate-pulse"}`}>
            Get Free Consultancy
          </Button>
        </form>
      </motion.div>
    </Container>
  );
};

export default Contact;
