import Footer from "@/layouts/footer";
import { Hero, Profile, Service, Experience, Testimonial, Blog, Contact } from "@/layouts/home";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function page() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue from-30% to-orange">
        <Hero />
        <div className="flex justify-center">
          <p className="font-light text-center w-max group">
            Scroll to learn more
            <IoIosArrowDown
              size={24}
              className="p-1 mx-auto mt-1 border rounded-full shadow-md border-light fill-light group-hover:fill-orange group-hover:bg-light"
            />
          </p>
        </div>
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
      <section className="bg-gradient-to-b from-blue to-dark-blue">
        <Experience />
      </section>
      <section className="bg-gradient-to-b from-dark-blue to-blue">
        <Testimonial />
      </section>
      <section className="bg-gradient-to-b from-lemon-yellow to-blue">
        <Blog />
      </section>
      <section className="bg-blue">
        <Contact />
      </section>
      <section className="pt-32 bg-dark-blue">
        <Footer />
        <div className="w-full py-6 text-center bg-yellow">
          <h5 className="text-sm">© 2024 ICodeU. All Rights Reserved</h5>
        </div>
      </section>
    </>
  );
}
