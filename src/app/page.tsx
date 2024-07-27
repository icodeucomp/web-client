import { Contact, Experience, Footer, Hero, Pricing, Service, Testimonial } from "@/layouts/landing";

export default function Home() {
  return (
    <>
      <section className="bg-blue sm:bg-gradient-to-b sm:from-blue sm:from-30% sm:to-orange">
        <Hero />
      </section>
      <section className="bg-gradient-to-b from-orange to-blue">
        <Service />
      </section>
      <section className="bg-gradient-to-b from-yellow to-orange">
        <Pricing />
      </section>
      <section className="bg-blue">
        <Experience />
      </section>
      <section className="bg-yellow">
        <Contact />
      </section>
      <section className="grid bg-blue min-h-400 place-items-center">
        <Testimonial />
      </section>
      <section className="bg-dark-blue">
        <Footer />
      </section>
    </>
  );
}
