import Container from "@/components/container";
import MotionComponent from "@/components/motion";

import ExperienceSlice from "../experience";

const Experience = () => {
  return (
    <Container>
      <MotionComponent tag="div" duration={1} initialO={0} initialY={30} animateO={1} animateY={0} className="flex items-center pb-8">
        <i className="flex-grow border-t border-gray-400" />
        <p className="font-extrabold tracking-wide text-yellow ms-4 me-2">03</p>
        <p className="font-extrabold tracking-wide text-yellow me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm">Our Development Methods</p>
      </MotionComponent>
      <ExperienceSlice />
    </Container>
  );
};

export default Experience;
