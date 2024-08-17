import Link from "next/link";

import MotionComponent from "@/components/motion";
import Images from "@/components/images";
import Button from "@/components/button";

import { RiCheckLine } from "react-icons/ri";

import currency from "@/utils/currency";

const Service = ({
  pathImg,
  price,
  title,
  description,
  index,
  list,
}: {
  pathImg: string;
  price: number;
  title: string;
  description: string;
  list: string[];
  index: number;
}) => {
  return (
    <MotionComponent
      tag="article"
      duration={0.5 + index / 4}
      delay={0.2 + index / 4}
      initialO={0}
      initialY={120}
      animateO={1}
      animateY={0}
      className="relative flex flex-col flex-1 w-full gap-5 p-8 overflow-hidden text-center duration-300 shadow-2xl min-w-72 rounded-3xl bg-light hover:bg-yellow group"
    >
      {index % 2 === 1 && <p className="absolute px-4 py-1 text-xs uppercase top-4 right-4 bg-orange rounded-2xl w-max">Most Popular</p>}
      <div className="p-4 mx-auto mt-8 rounded-full bg-light">
        <Images src={pathImg} alt={title} className="w-10 h-10" />
      </div>
      <h4 className="text-base font-bold h-14 md:text-lg text-blue">{title}</h4>
      <div className="space-y-1">
        <p className="text-xs font-medium text-yellow group-hover:text-blue">Starts From</p>
        <h5 className="text-3xl font-bold text-yellow group-hover:text-blue">{currency(price)}</h5>
      </div>
      <p className="text-sm font-medium text-gray-500 group-hover:text-light line-clamp-3">{description}</p>
      <div className="space-y-1 text-left">
        <h5 className="font-bold text-dark hover:text-light">What you get:</h5>
        <menu className="space-y-1 h-28">
          {list.map((child, e) => (
            <p key={e} className="flex items-center gap-2 text-sm font-medium text-dark group-hover:text-light">
              <RiCheckLine className="fill-blue" size={24} />
              {child}
            </p>
          ))}
        </menu>
      </div>
      <Link href={`/price/service/${index + 1}`}>
        <Button className="w-full rounded-2xl bg-orange text-light group-hover:bg-light group-hover:text-orange">Read More</Button>
      </Link>
    </MotionComponent>
  );
};

export default Service;
