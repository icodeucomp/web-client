import Container from "@/components/container";
import Images from "@/components/images";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Container className="flex flex-col items-center justify-center gap-8 py-8 text-center lg:items-start lg:gap-24 lg:flex-row md:text-start">
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
  );
};

export default Footer;
