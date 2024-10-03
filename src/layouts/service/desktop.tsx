import Link from "next/link";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { FaLongArrowAltRight } from "react-icons/fa";

import { ourService } from "@/static";

const Desktop = () => {
  return (
    <Container className="hidden grid-cols-3 gap-8 pt-16 overflow-hidden md:grid pb-52">
      <>
        {ourService.slice(0, 4).map((item, index) => {
          const posClass = `${index === 1 ? "right-10 -bottom-20" : "-translate-x-1/2 -bottom-20 left-1/2"}`;
          const imgClass = `${
            index === 0
              ? "w-96 h-72"
              : index === 1
              ? "w-96 lg:w-[480px] h-80 lg:h-96"
              : index === 2
              ? "w-[550px] h-[360px]"
              : "w-64 lg:w-72 h-72 lg:h-80"
          }`;
          return (
            <MotionComponent
              tag="div"
              duration={0.2 + index / 2}
              delay={0.2 + index / 4}
              initialO={0}
              initialX={index % 2 === 0 ? -100 : 100}
              animateO={1}
              animateX={0}
              key={index}
              className={`relative space-y-4 px-8 pt-12 pb-60 bg-gradient-to-r from-orange to-yellow rounded-xl overflow-hidden ${
                index > 0 && index < 3 ? "col-span-2" : "col-span-1"
              }`}
            >
              <div className="absolute -top-16 -right-16">
                <Images src="/images/service/circle.png" alt="circle" className="size-40" />
              </div>
              <Images src={item.pathIcon} alt={item.title} className="size-12" />
              <h5 className="text-xl font-bold lg:text-2xl">{item.title}</h5>
              <p className="text-sm font-medium text-justify lg:text-base">{item.description}</p>
              <Link href={`/price/service/${item.slug}`} className="flex items-center gap-2 text-xl font-medium text-center w-max group">
                Learn More
                <FaLongArrowAltRight size={24} />
              </Link>
              <div className={`absolute ${posClass}`}>
                <Images src={item.pathImg} alt={item.title} className={imgClass} cover />
              </div>
            </MotionComponent>
          );
        })}
      </>
      <MotionComponent
        tag="div"
        duration={1}
        delay={0.8}
        initialO={0}
        initialY={100}
        animateO={1}
        animateY={0}
        className="relative col-span-3 px-8 py-12 space-y-4 overflow-hidden bg-gradient-to-r from-orange to-yellow rounded-xl"
      >
        <div className="absolute -top-16 -right-16">
          <Images src="/images/service/circle.png" alt="circle" className="size-40" />
        </div>
        <div className="flex items-center gap-8">
          <div className="max-w-md space-y-4 lg:max-w-lg">
            <Images src={ourService[4].pathIcon} alt="Graphic Design" className="size-12" />
            <h5 className="text-xl font-bold lg:text-2xl">{ourService[4].title}</h5>
            <p className="text-sm font-medium text-justify lg:text-base">{ourService[4].description}</p>
            <Link href={`/price/service/${ourService[4].slug}`} className="flex items-center gap-2 text-lg font-medium text-center w-max group">
              Learn More
              <FaLongArrowAltRight size={24} />
            </Link>
          </div>
          <Images src={ourService[4].pathImg} alt={ourService[4].title} className="h-52 w-[450px]" cover />
        </div>
      </MotionComponent>
    </Container>
  );
};

export default Desktop;
