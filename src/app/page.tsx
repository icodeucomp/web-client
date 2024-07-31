import Backdrop from "@/components/backdrop";
import Images from "@/components/images";
import { Contact, Experience, Footer, Hero, Prefer, Pricing, Service, Testimonial } from "@/layouts/landing";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
        <Pricing />
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
    </>
  );
}
