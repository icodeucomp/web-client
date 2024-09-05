import Image from "next/image";

import { Hero, Profile, Service, Experience, Contact } from "@/layouts/home";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <section className="bg-gradient-to-b from-blue from-30% to-orange">
        <Hero />
      </section>
      <section className="relative overflow-hidden">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto mt-60" />
        <div className="bg-gradient-to-b from-orange to-blue">
          <Profile />
        </div>
        <div className="bg-blue">
          <Service />
        </div>
      </section>
      <section className="bg-blue">
        <Experience />
      </section>
      {/* <section className="bg-gradient-to-b from-dark-blue to-blue">
        <Testimonial />
      </section> */}
      {/* <section className="bg-gradient-to-b from-lemon-yellow to-blue">
        <Blog />
      </section> */}
      <section className="bg-blue">
        <Contact />
      </section>
    </div>
  );
}
