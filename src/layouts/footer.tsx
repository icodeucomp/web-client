import Link from "next/link";

import Container from "@/components/container";
import Images from "@/components/images";
import Button from "@/components/button";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="z-10 bg-dark-blue">
      <Container className="relative hidden z-1 lg:block">
        <div className="absolute left-0 flex items-center justify-between w-full px-10 py-16 -top-24 bg-gradient-to-r from-orange to-yellow rounded-3xl">
          <div className="space-y-4">
            <h4 className="text-2xl font-bold xl:text-3xl">Ready to start scaling your business now?</h4>
            <p className="text-sm font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, tempora!</p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Button className="bg-light text-orange rounded-3xl">Contact us</Button>
            <Button className="bg-orange rounded-3xl">Our Services</Button>
          </div>
        </div>
      </Container>
      <Container className="flex flex-col items-center justify-center gap-8 pt-16 pb-12 text-center lg:pt-36 lg:items-start lg:gap-24 lg:flex-row md:text-start">
        <div className="space-y-4">
          <Link href="/" className="flex items-center justify-center gap-4">
            <Images className="w-10 h-10" src="/icons/logo-icodeu.svg" alt="logo i code u" />
            <h1 className="text-lg font-bold font-red-hat">ICodeU</h1>
          </Link>
          <p className="text-sm text-gray-400">The Right Technology for Your Business</p>
          <div className="flex items-center justify-center gap-4">
            <a href="/">
              <FaWhatsapp className="w-8 h-8 fill-yellow" />
            </a>
            <a href="/">
              <FaInstagram className="w-8 h-8 fill-yellow" />
            </a>
            <a href="/">
              <FaLinkedin className="w-8 h-8 fill-yellow" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 lg:gap-14 md:flex-row">
          <div>
            <h5 className="mb-2 font-light tracking-wide text-yellow">Company</h5>
            <p className="mb-1 text-sm text-gray-400">About Us</p>
            <p className="mb-1 text-sm text-gray-400">Contact Us</p>
          </div>
          <div>
            <h5 className="mb-2 font-light tracking-wide text-yellow">Product</h5>
            <p className="mb-1 text-sm text-gray-400">Features</p>
            <p className="mb-1 text-sm text-gray-400">Pricing</p>
            <p className="mb-1 text-sm text-gray-400">Method</p>
            <p className="mb-1 text-sm text-gray-400">Blog</p>
            <p className="mb-1 text-sm text-gray-400">Testimonial</p>
          </div>
          <div>
            <h5 className="mb-2 font-light tracking-wide text-yellow">Company</h5>
            <p className="mb-1 text-sm text-gray-400">Responsive Web Development</p>
            <p className="mb-1 text-sm text-gray-400">SEO & Website Optimization</p>
            <p className="mb-1 text-sm text-gray-400">Custom UI/UX Design</p>
            <p className="mb-1 text-sm text-gray-400">WordPress Web Development</p>
            <p className="mb-1 text-sm text-gray-400">IT & Non-IT Task Completion</p>
          </div>
          <div>
            <h5 className="mb-2 font-light tracking-wide text-yellow">Contact Us</h5>
            <p className="mb-1 text-sm font-bold text-yellow">icodeu@gmail.com</p>
            <p className="mb-1 text-sm font-bold text-yellow"> +133-394-3439-1435</p>
          </div>
        </div>
      </Container>
      <div className="w-full py-6 text-center bg-yellow">
        <h5 className="text-sm">© 2024 ICodeU. All Rights Reserved</h5>
      </div>
    </section>
  );
};

export default Footer;
