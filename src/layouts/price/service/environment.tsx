"use client";

import useGet from "@/hooks/useGet";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { webDev, SEO, uiAndUx, wordpress, graphicDesign } from "@/static/service";

import { ResponsePayload, ServiceOrProduct } from "@/types/response-api";
type ResponseService = ResponsePayload<ServiceOrProduct>;

const Environment = ({ id }: { id: string }) => {
  const { response: service } = useGet<ResponseService>(`/services/${id}`);

  const filterServices = [webDev, SEO, uiAndUx, wordpress, graphicDesign];

  const render = filterServices.find((services) => services.slug === service?.data.slug);

  return (
    <Container className="pb-28 sm:pb-20 lg:pb-40">
      <MotionComponent
        tag="h4"
        duration={1}
        initialO={0}
        initialX={-50}
        animateO={1}
        animateX={0}
        className="max-w-xl text-lg font-bold leading-normal text-center md:text-start sm:text-xl md:text-2xl lg:text-3xl"
      >
        {render?.serviceTitle}
      </MotionComponent>
      <MotionComponent tag="div" duration={1} delay={0.3} initialO={0} initialY={100} animateO={1} animateY={0} className="overflow-x-auto scrollbar">
        <div className={`flex items-center mt-16 ${render?.top.length === 7 ? "gap-2" : "gap-6"}`}>
          {render?.top.map((item, index, row) => (
            <div key={index} className={`flex items-start justify-center ${render?.top.length === 7 ? "gap-2" : "gap-6"}`}>
              <div className="flex flex-col items-center justify-center gap-4 text-center">
                <div className="grid p-4 rounded-full place-items-center bg-orange">
                  <Images src={item.pathIcon} alt="business process icon" className="size-12 md:size-16" />
                </div>
                <p className="h-16 text-sm max-w-24">{item.title}</p>
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
          initialY={50}
          animateO={1}
          animateY={0}
          className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2"
        >
          {render?.bottom.map((item, index) => (
            <div key={index} className="px-8 py-4 space-y-4 overflow-hidden bg-orange rounded-xl">
              <div className="flex items-center gap-4">
                <Images src={item.pathIcon} alt={`${item.title} icon`} className="size-8 sm:size-10 md:size-12 lg:size-14" />
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
