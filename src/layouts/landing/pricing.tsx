import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import { price } from "@/static";
import currency from "@/utils/currency";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const Pricing = () => {
  return (
    <Container className="space-y-16">
      <div className="pt-4 text-center">
        <h2 className="pb-2 text-sm font-medium">Pricing & Plans</h2>
        <hr className="w-16 h-0.5 mx-auto bg-light" />
        <h3 className="max-w-2xl mx-auto mt-6 text-xl font-bold sm:text-2xl text-light text-shadow">
          Whether your time-saving automation needs are large or small, we`re here to help you scale.
        </h3>
      </div>
      <menu className="flex flex-wrap justify-center gap-8">
        {price.map((parent, i) => (
          <article key={i} className="flex flex-col flex-1 min-w-80 max-w-sm gap-4 p-8 overflow-hidden text-center shadow-2xl rounded-3xl bg-light">
            <Images src={parent.pathImg} alt={parent.title} className="w-16 h-16 mx-auto" />
            <h4 className="flex-grow text-xl font-bold text-blue">{parent.title}</h4>
            <p className="text-xs font-medium text-yellow">Starts From</p>
            <h5 className="text-3xl font-bold text-yellow">{currency(parent.price)}</h5>
            <div className="space-y-2">
              {parent.description.map((child, e) => (
                <p key={e} className="text-sm font-medium text-gray-700">
                  {child}
                </p>
              ))}
            </div>
            <Button className="w-full bg-orange hover:bg-yellow rounded-2xl">Contact Us</Button>
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
