import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { webDev, SEO, uiAndUx, wordpress, graphicDesign } from "@/static/service";

const Environment = ({ id }: { id: string }) => {
  const render = id === "1" ? webDev : id === "2" ? SEO : id === "3" ? uiAndUx : id === "4" ? wordpress : graphicDesign;
  return (
    <Container className="pb-10 lg:pb-40">
      <MotionComponent
        tag="h4"
        duration={1}
        initialO={0}
        initialX={-100}
        animateO={1}
        animateX={0}
        className="max-w-xl text-xl font-bold leading-normal sm:text-2xl md:text-3xl"
      >
        {render.serviceTitle}
      </MotionComponent>
      <MotionComponent tag="div" duration={1} delay={0.3} initialO={0} initialY={100} animateO={1} animateY={0} className="overflow-x-auto">
        <div className={`flex items-center mt-16 ${render.top.length === 7 ? "gap-2" : "gap-7"}`}>
          {render.top.map((item, index, row) => (
            <div key={index} className={`flex items-start justify-center ${render.top.length === 7 ? "gap-2" : "gap-7"}`}>
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="grid p-4 rounded-full place-items-center bg-orange">
                  <Images src={item.pathIcon} alt="business process icon" className="w-12 h-12 md:w-16 md:h-16" />
                </div>
                <p className="h-10 text-sm max-w-24">{item.title}</p>
              </div>
              {index + 1 !== row.length && (
                <Images src="/icons/price/service/line-arrow.svg" alt="line arrow icon" className="mt-5 min-h-10 min-w-10 md:min-w-14 md:min-h-14" />
              )}
            </div>
          ))}
        </div>
      </MotionComponent>

      <div className="mt-16 space-y-8 sm:mt-24 md:mt-32 md:space-y-12">
        <MotionComponent
          tag="h4"
          duration={1}
          delay={0.6}
          initialO={0}
          initialX={-100}
          animateO={1}
          animateX={0}
          className="text-xl font-bold text-center sm:text-3xl md:text-4xl"
        >
          Our Environment Development
        </MotionComponent>
        <MotionComponent
          tag="div"
          duration={1}
          delay={0.9}
          initialO={0}
          initialY={100}
          animateO={1}
          animateY={0}
          className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2"
        >
          {render.bottom.map((item, index) => (
            <div key={index} className="px-8 py-4 space-y-4 overflow-hidden bg-orange rounded-xl">
              <div className="flex items-center gap-4">
                <Images src={item.pathIcon} alt={`${item.title} icon`} className="w-8 h-8 sm:h-10 sm:w-10 md:w-12 md:h-12 lg:w-14 lg:h-14" />
                <h5 className="text-base font-semibold sm:text-lg md:text-xl max-w-72">{item.title}</h5>
              </div>
              <p className="text-xs leading-snug sm:text-sm sm:leading-normal">{item.description}</p>
            </div>
          ))}
        </MotionComponent>
      </div>
    </Container>
  );
};

export default Environment;
