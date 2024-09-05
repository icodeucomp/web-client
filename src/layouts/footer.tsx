import Link from "next/link";

import Container from "@/components/container";
import ComponentFooter from "@/components/footer";
import Button from "@/components/button";
import MotionComponent from "@/components/motion";

const Footer = () => {
  return (
    <section className="z-10 mt-auto bg-dark-blue">
      <Container className="relative hidden pb-32 z-1 lg:block">
        <MotionComponent
          tag="div"
          duration={1}
          initialO={0}
          initialY={30}
          animateO={1}
          animateY={0}
          className="absolute left-0 flex items-center justify-between w-full px-10 py-16 -top-24 bg-gradient-to-r from-orange to-yellow rounded-3xl"
        >
          <div className="space-y-4">
            <h4 className="text-2xl font-bold xl:text-3xl">Ready to start scaling your business now?</h4>
            <p className="text-sm font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, tempora!</p>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap">
            <Link href="/contact">
              <Button className="bg-light text-orange rounded-3xl">Contact us</Button>
            </Link>
            <Link href="/service">
              <Button className="bg-orange rounded-3xl">Our Services</Button>
            </Link>
          </div>
        </MotionComponent>
      </Container>
      <ComponentFooter />
      <div className="w-full py-6 text-center bg-yellow">
        <MotionComponent tag="h5" duration={1} delay={1} initialO={0} initialY={20} animateO={1} animateY={0} className="text-sm">
          © 2024 ICodeU. All Rights Reserved
        </MotionComponent>
      </div>
    </section>
  );
};

export default Footer;
