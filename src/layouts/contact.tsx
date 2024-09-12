"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import usePost from "@/hooks/usePost";

import Button from "@/components/button";

import toast from "react-hot-toast";

import { BsPersonCircle } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdEmail } from "react-icons/md";

import { InputType } from "@/types";

import { ContactUs, ResponsePayload } from "@/types/response-api";
type ResponseContactUs = ResponsePayload<ContactUs>;

const ContactFormSlice = () => {
  const initValues = { fullName: "", email: "", phoneNumber: "", message: "" };

  const [input, setInput] = useState<InputType>(initValues);

  const { execute, loading, response } = usePost<ResponseContactUs>("/mails/contact-us");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <form className="w-full space-y-4" onSubmit={handleSubmit}>
      <label htmlFor="fullName" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <BsPersonCircle className="fill-orange ms-4 size-6 sm:size-8" />
        <input
          id="fullName"
          type="text"
          className="w-full p-2 text-sm bg-transparent outline-none md:text-base md:p-4 me-2 placeholder:text-dark text-dark"
          placeholder="Full Name"
          onChange={handleChange}
          value={input.fullName}
          required
        />
      </label>
      <label htmlFor="email" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <MdEmail className="fill-orange ms-4 size-6 sm:size-8" />
        <input
          id="email"
          type="email"
          className="w-full p-2 text-sm bg-transparent outline-none md:text-base md:p-4 me-2 placeholder:text-dark text-dark"
          placeholder="Email Address"
          onChange={handleChange}
          value={input.email}
          required
        />
      </label>
      <label htmlFor="phoneNumber" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <FaPhoneFlip className="fill-orange ms-4 size-6 sm:size-8" />
        <input
          id="phoneNumber"
          type="number"
          className="w-full p-2 text-sm bg-transparent outline-none md:text-base md:p-4 me-2 placeholder:text-dark text-dark"
          placeholder="Phone Number"
          onChange={handleChange}
          value={input.phoneNumber}
          required
        />
      </label>
      <label htmlFor="message" className="flex gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
        <IoMdChatbubbles className="mt-3 fill-orange ms-4 size-6 sm:size-8" />
        <textarea
          id="message"
          rows={5}
          className="w-full p-2 text-sm bg-transparent outline-none md:text-base md:p-4 me-2 placeholder:text-dark text-dark"
          placeholder="Write something here..."
          onChange={handleChange}
          value={input.message}
        />
      </label>
      <Button type="submit" className={`justify-center w-full button-gradient ${loading && "animate-pulse"}`}>
        Submit Now
      </Button>
    </form>
  );
};

export default ContactFormSlice;
