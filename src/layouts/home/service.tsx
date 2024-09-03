import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import { service } from "@/static";
import Link from "next/link";

const Service = () => {
  return (
    <Container className="flex flex-col gap-8 py-20 lg:py-40 xl:flex-row">
      <div className="max-w-full space-y-4 xl:max-w-lg lg:space-y-8">
        <div className="flex items-center py-4 lg:py-8">
          <p className="text-sm font-extrabold tracking-wide sm:text-base text-yellow me-2">02</p>
          <p className="text-sm font-extrabold tracking-wide sm:text-base text-yellow me-2 sm:me-4">|</p>
          <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm me-4">Services</p>
          <i className="flex-grow border-t border-gray-400" />
        </div>
        <h3 className="text-3xl font-medium text-center lg:text-start lg:text-5xl">Services we offer</h3>
        <p className="text-sm leading-relaxed text-justify text-gray-400 sm:text-base xl:text-start">
          Discover our end-to-end IT Solutions to align with your business and drive ahead. Our many services will ensure that your technology
          infrastructure is not only up to date, but also driving growth in addition of simplifying operations. As a strategic IT consulting company
          as well, ICodeU is committed to supporting your business in pursuit of its integration goals through creative and innovative custom software
          development tailor-made for you.
        </p>
        <Link href="/service" className="hidden xl:block">
          <Button className="button-gradient">All Services</Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {service
          .filter((_, index) => index < 4)
          .map((item, index) => (
            <article key={index} className={`h-full text-center bg-card-3d rounded-3xl group ${index % 2 === 1 ? "xl:-mt-10" : ""}`}>
              <div className="home-card-service">
                <Images src={item.pathIcon} alt={item.title} className="w-10 h-10 mx-auto" />
                <h4 className="text-base font-semibold lg:text-lg">{item.title}</h4>
                <p className="text-sm font-light">{item.description}</p>
              </div>
            </article>
          ))}
      </div>
      <Link href="/service">
        <Button className="block mx-auto button-gradient xl:hidden w-max">All Services</Button>
      </Link>
    </Container>
  );
};

export default Service;
