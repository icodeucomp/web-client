import Link from "next/link";

import MotionComponent from "./motion";
import Container from "./container";
import Images from "./images";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-8 pt-16 pb-12 text-center lg:items-start lg:gap-24 lg:flex-row md:text-start">
      <MotionComponent tag="div" duration={1} initialO={0} initialY={50} animateO={1} animateY={0} className="space-y-4">
        <Link href="/" className="flex items-center justify-center gap-4">
          <Images className="w-10 h-10" src="/icons/logo-icodeu.svg" alt="logo i code u" />
          <h1 className="text-lg font-bold font-red-hat">ICodeU</h1>
        </Link>
        <p className="text-sm text-gray-400">Create The Right Technology for Your Business</p>
        <div className="flex items-center justify-center gap-4">
          <a href="https://wa.me/6285183154204" target="_blank" rel="noreferrer">
            <FaWhatsapp className="w-8 h-8 fill-yellow" />
          </a>
          <a href="https://www.instagram.com/icodeu_?igsh=MWtpZjQ0ZWZoNGQxag==" target="_blank" rel="noreferrer">
            <FaInstagram className="w-8 h-8 fill-yellow" />
          </a>
          <a href="https://www.linkedin.com/company/icodeu" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-8 h-8 fill-yellow" />
          </a>
        </div>
      </MotionComponent>
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-14 md:flex-row">
        <MotionComponent tag="div" duration={1} delay={0.3} initialO={0} initialY={50} animateO={1} animateY={0} className="relative">
          <h5 className="mb-2 font-light tracking-wide text-yellow">Company</h5>
          <Link href="/about" className="block mb-1 text-sm text-gray-400">
            About Us
          </Link>
          <Link href="/contact" className="block mb-1 text-sm text-gray-400">
            Contact Us
          </Link>
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.5} initialO={0} initialY={50} animateO={1} animateY={0} className="relative">
          <h5 className="mb-2 font-light tracking-wide text-yellow">Business</h5>
          <Link href="/price" className="block mb-1 text-sm text-gray-400">
            Products
          </Link>
          <Link href="/price" className="block mb-1 text-sm text-gray-400">
            Services
          </Link>
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.7} initialO={0} initialY={50} animateO={1} animateY={0} className="relative">
          <h5 className="mb-2 font-light tracking-wide text-yellow">Services</h5>
          <p className="mb-1 text-sm text-gray-400">Responsive Web Development</p>
          <p className="mb-1 text-sm text-gray-400">SEO & Website Optimization</p>
          <p className="mb-1 text-sm text-gray-400">Custom UI/UX Design</p>
          <p className="mb-1 text-sm text-gray-400">WordPress Web Development</p>
          <p className="mb-1 text-sm text-gray-400">Graphic Design</p>
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={0.9} initialO={0} initialY={50} animateO={1} animateY={0} className="relative">
          <h5 className="mb-2 font-light tracking-wide text-yellow">Contact Us</h5>
          <p className="mb-1 text-sm font-bold text-yellow">icodeuu@gmail.com</p>
          <p className="mb-1 text-sm font-bold text-yellow">+6285183154204</p>
        </MotionComponent>
      </div>
    </Container>
  );
};

export default Footer;
