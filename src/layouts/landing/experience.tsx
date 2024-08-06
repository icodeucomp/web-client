import Container from "@/components/container";

import ExperienceSlice from "../experience";

const Experience = () => {
  return (
    <Container>
      <div className="flex items-center pt-8">
        <i className="flex-grow border-t border-gray-400" />
        <p className="flex-shrink text-xs font-light text-gray-300 tracking-[4px] uppercase md:text-sm ms-4">OUR DEVELOPMENT METHODS</p>
      </div>
      <ExperienceSlice />
    </Container>
  );
};

export default Experience;
