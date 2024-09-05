import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { serve } from "@/static";

const Profile = () => {
  return (
    <Container>
      <MotionComponent tag="div" duration={1} initialO={0} initialY={30} animateO={1} animateY={0} className="flex items-center py-12">
        <p className="text-sm font-extrabold tracking-wide sm:text-base text-blue me-2">01</p>
        <p className="text-sm font-extrabold tracking-wide sm:text-base text-blue me-2 sm:me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm me-4">Who We Are</p>
        <i className="flex-grow border-t border-gray-400" />
      </MotionComponent>
      <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:gap-16">
        <div className="mt-4 space-y-4 md:space-y-8 text-start md:text-justify">
          <MotionComponent
            tag="h5"
            duration={1}
            delay={0.3}
            initialO={0}
            initialX={-50}
            animateO={1}
            animateX={0}
            className="text-xl font-medium leading-normal sm:text-2xl lg:text-3xl"
          >
            We are a group of experts looking to help companies leverage technology to do more than they had ever thought possible.
          </MotionComponent>
          <MotionComponent
            tag="p"
            duration={1}
            delay={0.5}
            initialO={0}
            initialX={-50}
            animateO={1}
            animateX={0}
            className="text-sm tracking-wide lg:text-lg"
          >
            We do this through a number of services to provide comprehensive solutions for your business. Scroll down to read about what we can do for
            you.
          </MotionComponent>
        </div>
        <MotionComponent tag="div" duration={1} delay={0.7} initialO={0} initialY={50} animateO={1} animateY={0} className="px-8">
          <Images
            src="/images/home/work-people.png"
            alt="people working"
            className="w-64 overflow-hidden h-44 -rotate-3 yellow-shadow-image lg:w-80 lg:h-60 rounded-3xl"
          />
        </MotionComponent>
      </div>
      <div className="flex flex-col items-center gap-8 mt-16 xl:gap-16 lg:flex-row">
        <MotionComponent tag="div" duration={1} initialO={0} initialY={0} animateO={1} animateY={0} className="relative">
          <Images
            src="/images/home/meet-people.png"
            alt="people working"
            className="min-w-96 min-h-60 sm:min-w-500 sm:min-h-300 xl:min-w-600 xl:min-h-400"
          />
        </MotionComponent>
        <div className="space-y-8">
          <menu className="space-y-4 text-sm md:text-base xl:text-lg">
            {serve.map((item, index) => (
              <MotionComponent
                tag="li"
                duration={1}
                delay={index / 3}
                initialO={0}
                initialX={80}
                animateO={1}
                animateX={0}
                key={index}
                className="flex items-center justify-start gap-4"
              >
                <Images src={item.pathImg} alt={item.description} className="w-6 h-6" />
                <p className="flex-grow font-semibold text-light-yellow">{item.description}</p>
              </MotionComponent>
            ))}
          </menu>
          {/* <div className="flex flex-col items-center gap-4 sm:flex-row">
            <MotionComponent tag="menu" duration={1} delay={1.6} initialO={0} initialY={30} animateO={1} animateY={0} className="text-sm sm:text-lg">
              <li className="font-bold text-light-red">Asya Ismatullah Faris</li>
              <li className="font-light">iCodeU Founder</li>
            </MotionComponent>
            <MotionComponent tag="div" duration={1} delay={1.8} initialO={0} initialX={50} animateO={1} animateX={0} className="relative">
              <Images src="/images/home/signature.png" alt="signature asya" className="w-60 h-14" />
            </MotionComponent>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Profile;
