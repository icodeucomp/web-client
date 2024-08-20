import Image from "next/image";
import Link from "next/link";

import HeroSlice from "@/layouts/hero";

import Container from "@/components/container";
import Images from "@/components/images";
import MotionComponent from "@/components/motion";

import { FaLongArrowAltRight } from "react-icons/fa";

import { ourService } from "@/static";

export default function page() {
  return (
    <>
      <section>
        <HeroSlice
          title="Our Services"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas optio eligendi dignissimos assumenda quae repellendus, reiciendis cum sunt consequuntur fuga unde, commodi necessitatibus ea sint suscipit. Amet eos iste consectetur!"
        />
      </section>
      <section className="relative bg-black">
        <Image src="/images/white-line-mobile.png" alt="line background" fill className="max-w-screen-xl mx-auto" />
        <div className="bg-gradient-to-b from-blue/50 to-orange/50">
          <Container className="grid grid-cols-3 gap-8 pt-16 overflow-hidden pb-52">
            <>
              {ourService.map((item, index) => {
                const posClass = `${index === 1 ? "right-10 -bottom-20" : "-translate-x-1/2 -bottom-20 left-1/2"}`;
                const imgClass = `${index === 0 ? "w-96 h-72" : index === 1 ? "w-[480px] h-96" : index === 2 ? "w-[550px] h-[360px]" : "w-72 h-80"}`;
                return (
                  <MotionComponent
                    tag="div"
                    duration={0.2 + index / 2}
                    delay={0.2 + index / 3}
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
                      <Images src="/images/service/circle.png" alt="circle" className="w-40 h-40" />
                    </div>
                    <Images src={item.pathIcon} alt={item.title} className="w-12 h-12" />
                    <h5 className="text-2xl font-bold">{item.title}</h5>
                    <p className="font-medium text-justify">{item.description}</p>
                    <Link href={`/price/service/${index + 1}`} className="flex items-center gap-2 text-xl font-medium text-center w-max group">
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
                <Images src="/images/service/circle.png" alt="circle" className="w-40 h-40" />
              </div>
              <div className="flex items-center gap-8">
                <div className="max-w-lg space-y-4">
                  <Images src="/icons/task-white.svg" alt="Graphic Design" className="w-12 h-12" />
                  <h5 className="text-2xl font-bold">Graphic Design</h5>
                  <p className="font-medium text-justify">
                    Harness the power of professional graphic design in your brand. Unique logos, eye-catching marketing materials and digital
                    graphic/illustrated work... to make your brand look awesome. By info graphics that speak for themselves, to packaging designs of
                    the future -- we create compelling work designed specifically to captivate & communicate.
                  </p>
                  <p className="flex items-center gap-2 text-lg font-medium text-center w-max group">
                    Learn More
                    <FaLongArrowAltRight size={24} />
                  </p>
                </div>
                <Images src="/images/service/time-management.png" alt="IT & Non-IT Related Task" className="h-52 w-[450px]" cover />
              </div>
            </MotionComponent>
          </Container>
        </div>
      </section>
    </>
  );
}
