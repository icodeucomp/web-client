import Container from "@/components/container";
import MotionComponent from "@/components/motion";
import { IoIosArrowDown } from "react-icons/io";

const Description = () => {
  return (
    <Container className="pb-16">
      <hr className="mb-8" />
      <MotionComponent
        tag="h4"
        duration={0.3}
        initialO={0}
        initialX={70}
        animateO={1}
        animateX={0}
        className="mb-4 text-2xl font-bold tracking-wide text-gray-300 md:text-3xl"
      >
        Product Description
      </MotionComponent>
      <MotionComponent
        tag="p"
        duration={0.6}
        delay={0.3}
        initialO={0}
        initialY={70}
        animateO={1}
        animateY={0}
        className="text-sm text-justify text-gray-300 md:text-base line-clamp-3"
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, iure tempora recusandae, accusamus iste accusantium eius libero
        repudiandae consequatur hic mollitia atque in, ut vitae doloremque expedita similique. Ullam sapiente asperiores, neque eius aut magnam unde
        ducimus architecto tempora facilis iusto maiores repellat, exercitationem similique voluptates tempore, eos odit cum.
      </MotionComponent>
      <MotionComponent tag="div" duration={0.9} delay={0.6} initialO={0} initialY={70} animateO={1} animateY={0} className="flex justify-center mt-4">
        <p className="text-sm font-light text-center text-gray-300 md:text-base w-max group">
          Click to read more
          <IoIosArrowDown
            size={24}
            className="p-1 mx-auto mt-1 border rounded-full shadow-md border-light fill-light group-hover:fill-orange group-hover:bg-light"
          />
        </p>
      </MotionComponent>
    </Container>
  );
};

export default Description;
