import Background from "@/components/background";
import MotionComponent from "@/components/motion";

const HeroSlice = ({ title, description }: { title: string; description: string }) => {
  return (
    <Background
      src="/images/hero.png"
      className="items-center justify-center w-full min-h-screen px-4 mx-auto max-w-container sm:px-8 2xl:min-h-600"
      colorBackdrop="bg-blue/50 z-1"
      isBackdrop
    >
      <div className="max-w-screen-lg space-y-8 text-center">
        <MotionComponent tag="h1" duration={0.3} initialO={0} initialY={10} animateO={1} animateY={0} className="text-6xl font-bold tracking-wide">
          {title}
        </MotionComponent>
        <MotionComponent tag="p" duration={0.5} initialO={0} initialY={80} animateO={1} animateY={0} className="text-xl font-medium leading-relaxed">
          {description}
        </MotionComponent>
      </div>
    </Background>
  );
};

export default HeroSlice;
