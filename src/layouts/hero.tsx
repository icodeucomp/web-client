import Background from "@/components/background";
import MotionComponent from "@/components/motion";

import { BasicHeroProps } from "@/types";

const HeroSlice = ({ title, description }: BasicHeroProps) => {
  return (
    <Background
      src="/images/hero.png"
      className="items-center justify-center w-full px-4 mx-auto min-h-500 md:min-h-screen max-w-container sm:px-8 xl:min-h-600"
      colorBackdrop="bg-blue/50 z-1"
      isBackdrop
    >
      <div className="max-w-screen-lg space-y-8 text-center">
        <MotionComponent
          tag="h1"
          duration={0.3}
          initialO={0}
          initialY={10}
          animateO={1}
          animateY={0}
          className="text-3xl font-bold tracking-wide md:text-4xl lg:text-6xl"
        >
          {title}
        </MotionComponent>
        <MotionComponent
          tag="p"
          duration={0.5}
          initialO={0}
          initialY={80}
          animateO={1}
          animateY={0}
          className="text-sm font-medium leading-relaxed md:text-base lg:text-xl"
        >
          {description}
        </MotionComponent>
      </div>
    </Background>
  );
};

export default HeroSlice;
