"use client";

import { ChangeEvent, useState } from "react";
import Button from "@/components/button";

import { BsPersonCircle } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { InputType } from "@/types";

const ContactFormSlice = () => {
  const initValues = { fullName: "", email: "", phoneNumber: "", message: "" };
  const initState = { values: initValues, isLoading: false, error: false };

  const [input, setInput] = useState<InputType>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.id]: e.target.value,
      },
    }));
  };
  return (
    <form className="w-full space-y-4">
      <label htmlFor="fullName" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <BsPersonCircle className="fill-orange ms-4" size={32} />
        <input
          id="fullName"
          type="text"
          className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
          placeholder="Full Name"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <MdEmail className="fill-orange ms-4" size={32} />
        <input
          id="email"
          type="text"
          className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
          placeholder="Email Address"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phoneNumber" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <FaPhoneFlip className="fill-orange ms-4" size={32} />
        <input
          id="phoneNumber"
          type="text"
          className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
          placeholder="Phone Number"
          onChange={handleChange}
        />
      </label>
      <label htmlFor="message" className="flex gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <IoMdChatbubbles className="mt-3 fill-orange ms-4" size={32} />
        <textarea
          id="message"
          rows={5}
          className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
          placeholder="Write something here..."
          onChange={handleChange}
        />
      </label>
      <Button className="justify-center w-full button-gradient">Submit Now</Button>
    </form>
  );
};

export default ContactFormSlice;
