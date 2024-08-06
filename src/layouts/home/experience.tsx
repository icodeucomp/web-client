import Container from "@/components/container";

import ExperienceSlice from "../experience";

const Experience = () => {
  return (
    <Container>
      <div className="flex items-center pb-8">
        <i className="flex-grow border-t border-gray-400" />
        <p className="font-extrabold tracking-wide text-yellow ms-4 me-2">03</p>
        <p className="font-extrabold tracking-wide text-yellow me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm">Our Development Methods</p>
      </div>
      <ExperienceSlice />
    </Container>
  );
};

export default Experience;
