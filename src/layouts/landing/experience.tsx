import Container from "@/components/container";
import MotionComponent from "@/components/motion";

import ExperienceSlice from "../experience";

const Experience = () => {
  return (
    <Container className="py-10">
      <MotionComponent tag="div" duration={1} initialO={0} initialY={30} animateO={1} animateY={0} className="flex items-center pt-8">
        <i className="flex-grow border-t border-gray-400" />
        <p className="flex-shrink text-xs font-light tracking-widest sm:tracking-[4px] text-gray-300 uppercase md:text-sm ms-4">
          OUR DEVELOPMENT METHODS
        </p>
      </MotionComponent>
      <ExperienceSlice />
    </Container>
  );
};

export default Experience;
