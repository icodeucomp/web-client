import Link from "next/link";
import Images from "@/components/images";

import MotionComponent from "@/components/motion";

import { MdArrowForwardIos } from "react-icons/md";

import currency from "@/utils/currency";

const Product = ({
  pathImg,
  price,
  title,
  description,
  index,
}: {
  pathImg: string;
  price: number;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <MotionComponent
      tag="article"
      duration={index < 3 ? 0.5 + index / 4 : index / 5}
      delay={index < 3 ? 0.4 + index / 4 : index / 5}
      initialO={0}
      initialY={120}
      animateO={1}
      animateY={0}
      className="relative flex flex-col flex-1 w-full overflow-hidden duration-300 shadow-2xl min-w-72 max-w-80 rounded-3xl bg-light group"
    >
      {index % 2 === 1 && <p className="absolute px-4 py-1 text-xs uppercase top-4 left-4 bg-orange rounded-2xl w-max">Most Popular</p>}
      <div className="mt-12">
        <Images src={pathImg} alt={title} className="w-full h-64" cover />
      </div>
      <div className="p-6 space-y-4">
        <p className="text-xs font-bold text-orange">Website</p>
        <h4 className="text-base font-bold md:text-lg text-blue">{title}</h4>
        <p className="text-sm font-medium text-gray-700 line-clamp-3">{description}</p>
        <p className="text-xs font-bold text-gray-500">15 Sold</p>
        <div className="space-y-1">
          <h5 className="text-3xl font-bold text-yellow">{currency(price)}</h5>
          <span className="flex items-center gap-4 text-xs">
            <p className="text-gray-300 line-through">{currency(300000)}</p>
            <p className="text-light-red">30%</p>
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Images src="/icons/calendar.svg" alt={title} className="w-4 h-4" cover />
            <p className="text-gray-500">24 hours</p>
          </span>
          <span className="flex items-center gap-1">
            <Images src="/icons/wave.svg" alt={title} className="w-4 h-4" cover />
            <p className="text-gray-500">Up to 10 games</p>
          </span>
          <span className="flex items-center gap-1">
            <Images src="/icons/chart.svg" alt={title} className="w-4 h-4" cover />
            <p className="text-gray-500">2 weeks</p>
          </span>
        </div>
        <Link
          href="/price/product/12345"
          className="flex items-center gap-2 px-6 py-2 text-sm font-bold border w-max rounded-4xl bg-light text-orange border-orange"
        >
          Learn More <MdArrowForwardIos className="fill-orange" />
        </Link>
      </div>
    </MotionComponent>
  );
};

export default Product;
