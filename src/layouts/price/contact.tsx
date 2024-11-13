import ContactFormSlice from "../contact";

import MotionComponent from "@/components/motion";
import Background from "@/components/background";
import Container from "@/components/container";
import Images from "@/components/images";

const Contact = () => {
  return (
    <Container className="hidden pt-10 pb-32 lg:block">
      <MotionComponent tag="h4" duration={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="px-8 text-2xl font-bold tracking-wide text-center sm:text-3xl md:text-5xl md:text-start">
        Get in Touch with our <strong className="text-gradient">Team</strong>.
      </MotionComponent>
      <div className="flex flex-col-reverse gap-16 px-8 py-8 lg:flex-row">
        <MotionComponent tag="div" duration={1} delay={1} initialO={0} initialX={-50} animateO={1} animateX={0} className="flex-1">
          <ContactFormSlice />
        </MotionComponent>
        <MotionComponent tag="div" duration={1} delay={1.2} initialO={0} initialX={50} animateO={1} animateX={0} className="relative">
          <Background parentClassName="max-w-lg" className="items-center justify-center gap-16 px-4 text-gray-200 md:px-8 min-h-500" src="/images/home/talk-people.png">
            <h4 className="text-3xl font-bold leading-snug text-center">“We are committed to delivering the ideal technology to drive your business forward”</h4>
            <div className="text-center">
              <Images src="/images/home/default-photo.png" alt="sandra photo" className="mx-auto overflow-hidden rounded-full size-16" />
              <h5 className="mt-4 text-lg font-bold">Asya Ismatullah Faris</h5>
              <p className="text-sm">Project Manager</p>
            </div>
          </Background>
        </MotionComponent>
      </div>
    </Container>
  );
};

export default Contact;
