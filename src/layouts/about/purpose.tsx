import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";
import { mission } from "@/static";

const Purpose = () => {
  return (
    <Container className="py-16">
      <MotionComponent
        tag="div"
        duration={1}
        delay={0.2}
        initialO={0}
        animateO={1}
        className="text-6xl font-extrabold text-center leading-tight relative pb-16"
      >
        <div className="absolute top-0 left-20">
          <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-20">
          <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="w-16 h-16" />
        </div>
        <h4 className="font-bold">Create</h4>
        <h4 className="text-gradient">the right technology,</h4>
        <h4 className="font-bold">thrive together for</h4>
        <h4 className="text-gradient">rapid growth</h4>
      </MotionComponent>
      <div className="space-y-4">
        <MotionComponent tag="h3" duration={0.5} delay={0.4} initialO={0} animateO={1} className="text-gradient text-6xl">
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
            className="bg-gradient-to-r from-orange to-yellow p-8 flex items-center gap-6 divide-x-4 divide-gray-200 rounded-2xl"
          >
            <span className="bg-yellow rounded-lg py-4 px-6 text-2xl">{index + 1}</span>
            <p className="ps-6 text-xl font-medium">{mission}</p>
          </MotionComponent>
        ))}
      </div>
    </Container>
  );
};

export default Purpose;
