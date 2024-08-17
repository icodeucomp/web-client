"use client";

import { ChangeEvent, useState } from "react";

import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import { FaWhatsapp } from "react-icons/fa";
import { InputType } from "@/types";

const Contact = () => {
  const initValues = { fullName: "", email: "", phoneNumber: "", service: "US" };
  const initState = { values: initValues, isLoading: false, error: false };

  const [input, setInput] = useState<InputType>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setInput((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.id]: e.target.value,
      },
    }));
  };
  return (
    <Container className="flex flex-col justify-center gap-8 py-16 lg:justify-between lg:flex-row">
      <div className="max-w-full space-y-8 text-center lg:text-start lg:max-w-lg">
        <Images src="/icons/chat.svg" alt="icon chat" className="hidden w-16 h-16 lg:block" />
        <h4 className="text-2xl font-bold md:text-3xl">Get a free consultancy from us right now!</h4>
        <p className="text-sm md:text-lg">
          With lots of unique blocks, you can easily build a page without coding. Build your next landing page so quickly with Albino.
        </p>
        <Button className="flex items-center justify-center w-full gap-2 rounded-2xl bg-green hover:bg-green/90 hover:shadow-2xl">
          <FaWhatsapp className="w-6 h-6 text-light" /> Contact us through Whatsapp
        </Button>
      </div>
      <div className="max-w-xs p-6 mx-auto overflow-hidden lg:mx-0 md:max-w-md rounded-xl bg-light">
        <form className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="name" className="font-bold text-md md:text-base text-dark">
              Name
            </label>
            <input type="text" id="name" className="input-form" placeholder="John" required onChange={handleChange} />
          </div>
          <div className="space-y-1">
            <label htmlFor="email" className="font-bold text-md md:text-base text-dark">
              Email
            </label>
            <input type="email" id="email" className="input-form" placeholder="john@gmail.com" required onChange={handleChange} />
          </div>
          <div className="space-y-1">
            <label htmlFor="number" className="font-bold text-md md:text-base text-dark">
              Number
            </label>
            <input type="number" id="number" className="input-form" placeholder="0814234234" required onChange={handleChange} />
          </div>
          <div className="space-y-1">
            <label htmlFor="services" className="font-bold text-md md:text-base text-dark">
              Which service do you need?
            </label>
            <select id="services" className="input-form" value={input.values.service} onChange={handleChange}>
              <option value="US" className="text-dark">
                United States
              </option>
              <option value="CA" className="text-dark">
                Canada
              </option>
              <option value="FR" className="text-dark">
                France
              </option>
              <option value="DE" className="text-dark">
                Germany
              </option>
            </select>
          </div>
          <Button className="w-full bg-yellow rounded-xl hover:bg-orange/80">Get Free Consultancy</Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
