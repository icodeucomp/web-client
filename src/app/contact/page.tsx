import Link from "next/link";

import MotionComponent from "@/components/motion";
import Container from "@/components/container";
import Images from "@/components/images";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import ContactFormSlice from "@/layouts/contact";
import Background from "@/components/background";
import { FaXTwitter } from "react-icons/fa6";

export default function page() {
  return (
    <>
      <section>
        <div className="flex">
          <div className="flex-1 bg-gradient-to-b from-yellow to-orange">
            <div className="max-w-screen-sm bg-blue rounded-ee-10xl">
              <Background src="/images/white-line-mobile.png" className="flex-col px-16 py-24">
                <h4 className="py-8 text-4xl font-bold">
                  Get in Touch with our <strong className="text-gradient">Team</strong>.
                </h4>
                <MotionComponent tag="div" duration={1} delay={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="flex-1">
                  <ContactFormSlice />
                </MotionComponent>
              </Background>
            </div>
          </div>
          <div className="flex-1 bg-blue">
            <div className="flex flex-col items-center justify-center h-full rounded-ss-10xl bg-gradient-to-b from-yellow to-orange">
              <div className="w-full max-w-md mx-auto">
                <Background
                  src="/images/bg-laptop.png"
                  className="items-center justify-center min-h-300"
                  parentClassName="rounded-3xl"
                  isBackdrop
                  colorBackdrop="bg-dark/40 z-1"
                >
                  <h1 className="text-2xl font-bold">Follow our social media!</h1>
                </Background>

                <div className="mt-8 space-y-2">
                  <div className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light">
                    <i>
                      <FaXTwitter className="w-8 h-10 fill-orange" />
                    </i>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-dark">Twitter (X)</p>
                      <p className="text-sm text-dark">iCodeU</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light">
                    <i>
                      <FaInstagram className="w-8 h-10 fill-orange" />
                    </i>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-dark">Instagram</p>
                      <p className="text-sm text-dark">iCodeU</p>
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-4 px-4 py-2 rounded-xl bg-light">
                    <i>
                      <FaLinkedin className="w-8 h-10 fill-orange" />
                    </i>
                    <div className="space-y-1">
                      <p className="text-sm font-bold text-dark">LinkedIn</p>
                      <p className="text-sm text-dark">iCodeU</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark-blue">
        <Container className="flex flex-col items-center justify-center gap-8 pt-20 pb-12 text-center lg:items-start lg:gap-24 lg:flex-row md:text-start">
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
    </>
  );
}
