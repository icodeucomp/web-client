import Image from "next/image";

import { Contact, Experience, Hero, Prefer, Price, Service, Testimonial } from "@/layouts/landing";

import Backdrop from "@/components/backdrop";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-blue from-30% to-orange">
        <Hero />
      </section>
      <section className="bg-gradient-to-b from-orange to-blue">
        <Service />
      </section>
      <section className="bg-blue">
        <Prefer />
      </section>
      <section className="relative bg-gradient-to-b from-yellow from-40% to-orange">
        <Backdrop className="bg-dark/20" />
        <Price />
      </section>
      <section className="bg-gradient-to-b from-blue to-dark-blue">
        <Experience />
      </section>
      <section className="bg-gradient-to-b from-yellow from-30% to-dark-yellow relative">
        <Image src="/images/black-line-desktop.png" alt="line" fill objectFit="cover" className="hidden md:block" />
        <Image src="/images/black-line-mobile.png" alt="line" fill objectFit="cover" className="block md:hidden" />
        <Backdrop className="bg-dark/10" />
        <Contact />
      </section>
      <section className="relative grid bg-blue min-h-400 place-items-center">
        <Image src="/images/white-line-desktop.png" alt="line" fill objectFit="cover" />
        <Testimonial />
      </section>
      <section className="bg-dark-blue">
        <Footer />
      </section>
    </div>
  );
}
