import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import { price } from "@/static";
import currency from "@/utils/currency";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Pricing = () => {
  return (
    <Container className="pt-10 space-y-24">
      <div className="pt-4 text-center">
        <h2 className="pb-2 text-sm tracking-[4px] uppercase">Pricing & Plans</h2>
        <hr className="w-16 h-0.5 mx-auto bg-light" />
        <h3 className="max-w-screen-lg mx-auto mt-6 text-xl font-bold md:text-2xl lg:text-4xl text-light text-shadow">
          Whether your time-saving automation needs are large or small, we`re here to help you scale.
        </h3>
      </div>
      <menu className="flex flex-wrap justify-center gap-8 py-8 lg:bg-light rounded-3xl">
        {price.map((parent, i) => (
          <article
            key={i}
            className="relative flex flex-col flex-1 max-w-xs gap-4 p-8 overflow-hidden text-center duration-300 shadow-2xl hover:shadow-2xl lg:hover:-translate-y-16 lg:shadow-none min-w-80 rounded-3xl bg-light group hover:bg-yellow"
          >
            {i % 2 === 1 && <p className="absolute px-4 py-1 text-xs uppercase top-4 right-4 bg-orange rounded-2xl w-max">Most Popular</p>}
            <div className="p-4 mx-auto mt-8 rounded-full bg-light">
              <Images src={parent.pathImg} alt={parent.title} className="w-10 h-10" />
            </div>
            <h4 className="flex-grow text-base font-bold md:text-lg text-blue">{parent.title}</h4>
            <p className="text-xs font-medium text-yellow group-hover:text-blue">Starts From</p>
            <h5 className="text-3xl font-bold text-yellow group-hover:text-blue">{currency(parent.price)}</h5>
            <div className="space-y-2 h-28">
              {parent.description.map((child, e) => (
                <p key={e} className="text-sm font-medium text-gray-700 group-hover:text-light">
                  {child}
                </p>
              ))}
            </div>
            <Button className="w-full bg-orange group-hover:bg-light group-hover:text-orange rounded-2xl">Contact Us</Button>
          </article>
        ))}
      </menu>
      <Link href="/" className="flex items-center justify-center w-full gap-2 pb-8 text-sm font-medium hover:underline">
        See Full Pricing <IoIosArrowForward size={20} className="rounded-full bg-light fill-orange" />
      </Link>
    </Container>
  );
};

export default Pricing;
