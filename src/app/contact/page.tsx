import Link from "next/link";

import ContactFormSlice from "@/layouts/contact";

import MotionComponent from "@/components/motion";
import Container from "@/components/container";
import Images from "@/components/images";
import Background from "@/components/background";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "@/components/button";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-gradient-to-b from-yellow to-orange">
          <div className="bg-blue lg:rounded-ee-10xl">
            <Background src="/images/white-line-mobile.png" className="flex-col px-4 py-24 md:px-16">
              <MotionComponent
                tag="h1"
                duration={1}
                initialO={0}
                initialY={-50}
                animateO={1}
                animateY={0}
                className="py-8 text-2xl font-bold md:text-4xl"
              >
                Get in Touch with our <strong className="text-gradient">Team</strong>.
              </MotionComponent>
              <MotionComponent tag="div" duration={1} delay={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="flex-1">
                <ContactFormSlice />
              </MotionComponent>
              <MotionComponent tag="div" duration={1} delay={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="flex-1">
                <p className="my-2 font-bold text-center">Or</p>
                <Button className="flex items-center justify-center w-full gap-2 rounded-3xl bg-green hover:bg-green/90 hover:shadow-2xl">
                  <FaWhatsapp className="w-6 h-6 text-light" /> Contact us through Whatsapp
                </Button>
              </MotionComponent>
            </Background>
          </div>
        </div>
        <div className="flex-1 bg-blue">
          <div className="flex flex-col items-center justify-center h-full px-4 py-16 rounded-ss-10xl bg-gradient-to-b from-yellow to-orange">
            <div className="w-full max-w-md mx-auto">
              <MotionComponent tag="div" duration={1} initialO={0} initialY={-60} animateO={1} animateY={0} className="relative">
                <Background
                  src="/images/bg-laptop.png"
                  className="items-center justify-center min-h-200 md:min-h-300"
                  parentClassName="rounded-3xl"
                  isBackdrop
                  colorBackdrop="bg-dark/40 z-1"
                >
                  <h4 className="text-xl font-bold md:text-2xl">Follow our social media!</h4>
                </Background>
              </MotionComponent>

              <div className="mt-8 space-y-2">
                <MotionComponent
                  tag="div"
                  duration={1}
                  delay={0.3}
                  initialO={0}
                  initialX={-50}
                  animateO={1}
                  animateX={0}
                  className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light"
                >
                  <i>
                    <FaXTwitter className="w-6 h-8 md:w-8 md:h-10 fill-orange" />
                  </i>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-dark">Twitter (X)</p>
                    <p className="text-dark">iCodeU</p>
                  </div>
                </MotionComponent>
                <MotionComponent
                  tag="div"
                  duration={1}
                  delay={0.6}
                  initialO={0}
                  initialX={50}
                  animateO={1}
                  animateX={0}
                  className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light"
                >
                  <i>
                    <FaInstagram className="w-6 h-8 md:w-8 md:h-10 fill-orange" />
                  </i>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-dark">Instagram</p>
                    <p className="text-dark">iCodeU</p>
                  </div>
                </MotionComponent>
                <MotionComponent
                  tag="div"
                  duration={1}
                  delay={0.9}
                  initialO={0}
                  initialX={-50}
                  animateO={1}
                  animateX={0}
                  className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light"
                >
                  <i>
                    <FaLinkedin className="w-6 h-8 md:w-8 md:h-10 fill-orange" />
                  </i>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <p className="font-bold text-dark">LinkedIn</p>
                    <p className="text-dark">iCodeU</p>
                  </div>
                </MotionComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-dark-blue">
        <Container className="flex flex-col items-center justify-center gap-8 pt-10 pb-12 text-center md:pt-20 lg:items-start lg:gap-24 lg:flex-row md:text-start">
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
              <h5 className="mb-2 text-sm font-light tracking-wide sm:text-base text-yellow">Company</h5>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">About Us</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Contact Us</p>
            </div>
            <div>
              <h5 className="mb-2 text-sm font-light tracking-wide sm:text-base text-yellow">Product</h5>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Features</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Pricing</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Method</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Blog</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Testimonial</p>
            </div>
            <div>
              <h5 className="mb-2 text-sm font-light tracking-wide sm:text-base text-yellow">Company</h5>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Responsive Web Development</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">SEO & Website Optimization</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">Custom UI/UX Design</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">WordPress Web Development</p>
              <p className="mb-1 text-xs text-gray-400 sm:text-sm">IT & Non-IT Task Completion</p>
            </div>
            <div>
              <h5 className="mb-2 text-sm font-light tracking-wide sm:text-base text-yellow">Contact Us</h5>
              <p className="mb-1 text-xs font-bold sm:text-sm text-yellow">icodeu@gmail.com</p>
              <p className="mb-1 text-xs font-bold sm:text-sm text-yellow"> +133-394-3439-1435</p>
            </div>
          </div>
        </Container>
        <div className="w-full py-6 text-center bg-yellow">
          <h5 className="text-sm">© 2024 ICodeU. All Rights Reserved</h5>
        </div>
      </section>
    </div>
  );
}
