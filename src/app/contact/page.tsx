import ContactFormSlice from "@/layouts/contact";

import MotionComponent from "@/components/motion";
import Background from "@/components/background";
import Button from "@/components/button";
import Footer from "@/components/footer";

import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
                <a href="https://wa.me/6285183154204" target="_blank" rel="noreferrer">
                  <Button className="flex items-center justify-center w-full gap-2 rounded-3xl bg-green hover:bg-green/90 hover:shadow-2xl">
                    <FaWhatsapp className="w-6 h-6 text-light" /> Contact us through Whatsapp
                  </Button>
                </a>
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
                    <a
                      href="https://x.com/icodeuu"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium duration-200 text-dark hover:text-orange hover:underline"
                    >
                      icodeuu
                    </a>
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
                    <a
                      href="https://www.instagram.com/icodeu_?igsh=MWtpZjQ0ZWZoNGQxag=="
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium duration-200 text-dark hover:text-orange hover:underline"
                    >
                      @icodeu_
                    </a>
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
                    <a
                      href="https://www.linkedin.com/company/icodeu"
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium duration-200 text-dark hover:text-orange hover:underline"
                    >
                      icodeu
                    </a>
                  </div>
                </MotionComponent>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bg-dark-blue">
        <Footer />
        <div className="w-full py-6 text-center bg-yellow">
          <MotionComponent tag="h5" duration={1} delay={1} initialO={0} initialY={20} animateO={1} animateY={0} className="text-sm">
            © 2024 ICodeU. All Rights Reserved
          </MotionComponent>
        </div>
      </section>
    </div>
  );
}
