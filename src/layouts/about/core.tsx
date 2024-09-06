import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { coreValues } from "@/static";

const Core = () => {
  return (
    <Container className="pb-10 lg:pb-32">
      <MotionComponent tag="h3" duration={0.5} delay={0.4} initialO={0} animateO={1} className="text-3xl md:text-5xl lg:text-6xl text-gradient">
        Core Values
      </MotionComponent>
      <div className="relative py-8 overflow-hidden">
        <MotionComponent
          tag="div"
          duration={0.4}
          initialO={0}
          animateO={1}
          className="absolute left-0 hidden w-full h-1 -translate-y-1/2 lg:block top-1/2 bg-light"
        />
        <MotionComponent
          tag="div"
          duration={0.8}
          delay={0.3}
          initialO={0}
          animateO={1}
          className="hidden lg:flex items-center px-[168px] justify-between w-full -mt-1 absolute top-1/2 -translate-y-1/2 left-0"
        >
          <i className="size-3 border-2 rounded-full bg-orange"></i>
          <i className="size-3 border-2 rounded-full bg-orange"></i>
          <i className="size-3 border-2 rounded-full bg-orange"></i>
          <i className="size-3 border-2 rounded-full bg-orange"></i>
          <i className="size-3 border-2 rounded-full bg-orange"></i>
        </MotionComponent>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10 lg:gap-y-40">
          {coreValues.map((item, index) => {
            const delay = index === 0 ? 0.5 : index === 3 ? 0.9 : index === 1 ? 1.3 : index === 4 ? 1.7 : 2.1;
            return (
              <MotionComponent
                tag="div"
                duration={0.5 + index / 2}
                delay={delay}
                initialO={0}
                animateO={1}
                key={index}
                className="relative flex-1 h-full max-w-xs px-8 py-6 space-y-4 rounded bg-orange min-w-80"
              >
                <Images src={item.pathIcon} alt={item.title} className="size-8 md:size-12" />
                <h5 className="text-base font-bold md:text-lg">{item.title}</h5>
                <p className="h-12 text-xs sm:h-16 md:h-20 md:text-base">{item.description}</p>
                <div className={`triangle-core ${index < 3 ? "-bottom-8" : "-top-12 rotate-180"}`} />
              </MotionComponent>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Core;
