import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { service } from "@/static";

const Service = () => {
  return (
    <Container>
      <div className="pt-4 pb-16 text-center">
        <MotionComponent
          tag="h2"
          duration={1}
          initialO={0}
          initialY={30}
          animateO={1}
          animateY={0}
          className="pb-2 text-sm tracking-widest sm:tracking-[4px] uppercase"
        >
          Our Services
        </MotionComponent>
        <MotionComponent
          tag="hr"
          duration={1}
          delay={0.3}
          initialO={0}
          initialY={30}
          animateO={1}
          animateY={0}
          className="w-16 h-0.5 mx-auto bg-light"
        />
        <MotionComponent
          tag="h4"
          duration={1}
          delay={0.6}
          initialO={0}
          initialY={30}
          animateO={1}
          animateY={0}
          className="max-w-2xl mx-auto mt-6 text-xl font-bold md:text-2xl lg:text-4xl text-blue text-shadow"
        >
          We provide great services for our customers based on needs
        </MotionComponent>
        <div className="flex flex-wrap justify-center gap-10 pt-12 sm:pt-16 sm:gap-14">
          {service.map((item, index) => (
            <MotionComponent
              tag="div"
              duration={0.3 + index / 3}
              delay={0.3 + index / 4}
              initialO={0}
              initialY={50}
              animateO={1}
              animateY={0}
              key={index}
              className="max-w-xs space-y-2 sm:space-y-4"
            >
              <Images src={item.pathIcon} alt={item.title} className="mx-auto size-10" />
              <h4 className="h-10 text-base font-semibold md:text-lg">{item.title}</h4>
              <p className="text-sm font-light">{item.description}</p>
            </MotionComponent>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
