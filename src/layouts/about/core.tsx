import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { coreValues } from "@/static";

const Core = () => {
  return (
    <Container className="pb-32">
      <h3 className="text-6xl text-gradient">Core Values</h3>
      <div className="relative py-8 overflow-hidden">
        <MotionComponent
          tag="div"
          duration={0.4}
          initialO={0}
          animateO={1}
          className="absolute left-0 w-full h-1 -translate-y-1/2 top-1/2 bg-light"
        />
        <MotionComponent
          tag="div"
          duration={0.8}
          delay={0.3}
          initialO={0}
          animateO={1}
          className="flex items-center px-[168px] justify-between w-full -mt-1 absolute top-1/2 -translate-y-1/2 left-0"
        >
          <i className="w-3 h-3 border-2 rounded-full bg-orange"></i>
          <i className="w-3 h-3 border-2 rounded-full bg-orange"></i>
          <i className="w-3 h-3 border-2 rounded-full bg-orange"></i>
          <i className="w-3 h-3 border-2 rounded-full bg-orange"></i>
          <i className="w-3 h-3 border-2 rounded-full bg-orange"></i>
        </MotionComponent>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-40">
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
                <Images src={item.pathIcon} alt={item.title} className="w-12 h-12" />
                <h5 className="text-lg font-bold">{item.title}</h5>
                <p className="h-20">{item.description}</p>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-l-[35px] border-l-transparent border-t-[60px] border-t-orange border-r-[35px] border-r-transparent ${
                    index < 3 ? "-bottom-8" : "-top-12 rotate-180"
                  }`}
                />
              </MotionComponent>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Core;
