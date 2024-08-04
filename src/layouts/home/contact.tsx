import Background from "@/components/background";
import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";

import { BsPersonCircle } from "react-icons/bs";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Container className="pt-10">
      <h4 className="px-8 text-2xl font-bold tracking-wide text-center sm:text-3xl md:text-5xl md:text-start">
        Get in Touch with our <strong className="text-gradient">Team</strong>.
      </h4>
      <div className="flex flex-col-reverse gap-16 px-8 py-16 lg:flex-row">
        <form className="flex-1 space-y-4">
          <label htmlFor="fullName" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
            <BsPersonCircle className="fill-orange ms-4" size={32} />
            <input
              id="fullName"
              type="text"
              className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
              placeholder="Full Name"
            />
          </label>
          <label htmlFor="email" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
            <MdEmail className="fill-orange ms-4" size={32} />
            <input
              id="email"
              type="text"
              className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
              placeholder="Email Address"
            />
          </label>
          <label htmlFor="phoneNumber" className="flex items-center gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
            <FaPhoneFlip className="fill-orange ms-4" size={32} />
            <input
              id="phoneNumber"
              type="text"
              className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
              placeholder="Phone Number"
            />
          </label>
          <label htmlFor="message" className="flex gap-1 py-2.5 rounded-md overflow-hidden bg-light shadow-md">
            <IoMdChatbubbles className="mt-3 fill-orange ms-4" size={32} />
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-4 bg-transparent outline-none me-2 placeholder:text-dark text-dark"
              placeholder="Write something here..."
            />
          </label>
          <Button className="justify-center w-full button-gradient">Submit Now</Button>
        </form>
        <Background
          className="flex-col items-center justify-center flex-1 max-w-lg gap-16 text-gray-200 min-h-500"
          src="/images/home/talk-people.png"
        >
          <h4 className="text-3xl font-bold leading-snug text-center">“We specialize in helping our customers digitize their business”</h4>
          <div className="text-center">
            <Images src="/images/home/sandra.png" alt="sandra photo" className="w-20 h-20 mx-auto" />
            <h5 className="mt-4 text-lg font-bold">Sandra Lewis</h5>
            <p className="text-sm">Front-End Developer</p>
          </div>
        </Background>
      </div>
      <div className="flex items-center justify-between px-10 py-16 -mb-24 bg-gradient-to-r from-orange to-yellow rounded-3xl">
        <div className="space-y-4">
          <h4 className="text-3xl font-bold">Ready to start scaling your business now?</h4>
          <p className="text-sm font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, tempora!</p>
        </div>
        <div className="flex items-center gap-4">
          <Button className="bg-light text-orange rounded-3xl">Contact us</Button>
          <Button className="bg-orange rounded-3xl">Our Services</Button>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
