import Container from "@/components/container";
import Images from "@/components/images";

const Testimonial = () => {
  return (
    <Container className="space-y-8 text-center">
      <h1 className="text-xl tracking-wide uppercase sm:text-2xl text-orange">Testimonial</h1>
      <p className="max-w-xl mx-auto text-sm font-bold sm:text-base md:text-xl lg:text-2xl text-light">
        “Simply the best. Better than all the rest. I`d recommend this product to beginners and advanced users.”
      </p>
      <Images src="/images/testi.png" alt="testimonial photo" className="w-12 h-12 mx-auto" />
      <h5 className="font-bold uppercase">Asya Faris</h5>
    </Container>
  );
};

export default Testimonial;
