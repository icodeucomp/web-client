import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";
import { mission } from "@/static";

const Purpose = () => {
  return (
    <Container className="py-16">
      <MotionComponent tag="div" duration={1} delay={0.2} initialO={0} animateO={1} className="relative pb-16 font-extrabold text-center">
        <div className="absolute top-0 left-4 sm:left-12 md:left-20">
          <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="w-10 h-10 lg:h-16 md:w-12 md:h-12 lg:w-16" />
        </div>
        <div className="absolute top-0 right-4 sm:right-12 md:right-20">
          <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="w-10 h-10 lg:h-16 md:w-12 md:h-12 lg:w-16" />
        </div>
        <div className="pt-8 space-y-2 text-3xl sm:text-5xl lg:text-6xl">
          <h4 className="font-bold">Create</h4>
          <h4 className="leading-snug text-gradient">the right technology,</h4>
          <h4 className="font-bold">thrive together for</h4>
          <h4 className="leading-snug text-gradient">rapid growth</h4>
        </div>
      </MotionComponent>
      <div className="space-y-6 md:space-y-4">
        <MotionComponent tag="h3" duration={0.5} delay={0.4} initialO={0} animateO={1} className="text-3xl md:text-5xl lg:text-6xl text-gradient">
          Mission
        </MotionComponent>
        {mission.map((mission, index) => (
          <MotionComponent
            tag="div"
            duration={1 + index / 4}
            delay={0.5 + index / 4}
            initialO={0}
            initialX={index % 2 === 0 ? -50 : 50}
            animateO={1}
            animateX={0}
            key={index}
            className="flex items-center gap-6 p-4 divide-x-4 divide-gray-200 md:p-8 bg-gradient-to-r from-orange to-yellow rounded-2xl"
          >
            <span className="px-4 py-2 text-base rounded-lg md:px-6 md:py-4 sm:text-lg md:text-xl lg:text-2xl bg-yellow">{index + 1}</span>
            <p className="text-xs font-medium sm:text-sm md:text-base lg:text-xl ps-6">{mission}</p>
          </MotionComponent>
        ))}
      </div>
    </Container>
  );
};

export default Purpose;
