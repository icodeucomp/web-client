import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

const Testimonial = () => {
  return (
    <Container className="space-y-8 text-center">
      <MotionComponent tag="h3" duration={1} initialO={0} initialY={30} animateO={1} animateY={0} className="text-xl uppercase tracking-[4px] sm:text-2xl text-orange">
        Testimonial
      </MotionComponent>
      <MotionComponent
        tag="p"
        duration={1}
        delay={0.3}
        initialO={0}
        initialY={30}
        animateO={1}
        animateY={0}
        className="max-w-xl mx-auto text-sm font-bold sm:text-base md:text-xl lg:text-2xl text-light"
      >
        “Produk ini sangat mengesankan dengan kualitas yang baik dan responsivitas yang tinggi, sehingga sangat layak untuk direkomendasikan! 👍🏼”
      </MotionComponent>
      <MotionComponent tag="div" duration={1} delay={0.6} initialO={0} initialY={30} animateO={1} animateY={0} className="relative">
        <Images src="/images/home/default-photo.png" alt="testimonial photo" className="mx-auto overflow-hidden rounded-full size-12" />
      </MotionComponent>
      <MotionComponent tag="h5" duration={1} delay={0.9} initialO={0} initialY={30} animateO={1} animateY={0} className="font-bold uppercase">
        Bayu Budianto
      </MotionComponent>
    </Container>
  );
};

export default Testimonial;
