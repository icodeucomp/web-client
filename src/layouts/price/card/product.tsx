"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import Link from "next/link";

import Images from "@/components/images";

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
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: index < 3 ? 0.5 + index / 4 : index / 5, delay: index < 3 ? 0.4 + index / 4 : index / 5 },
    });
  }, [controls, index]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 120 }}
      animate={controls}
      className="relative flex flex-col flex-1 w-full overflow-hidden duration-300 shadow-2xl min-w-72 max-w-80 rounded-3xl bg-light group"
    >
      {index % 2 === 1 && (
        <p className="absolute px-4 py-2 md:py-1 text-xs uppercase top-0 md:top-4 right-0 md:left-4 bg-orange rounded-es-2xl md:rounded-2xl w-max">
          Most Popular
        </p>
      )}
      <div className="mt-12 hidden md:block">
        <Images src={pathImg} alt={title} className="w-full h-64" cover />
      </div>
      <div className="p-6 space-y-2 md:space-y-4">
        <p className="text-xs font-bold text-orange">Website</p>
        <h4 className="text-base font-bold md:text-lg text-blue">{title}</h4>
        <div className="hidden md:block">
          <p className="text-sm font-medium text-gray-700 line-clamp-3">{description}</p>
        </div>
        <p className="text-xs font-bold text-gray-500">15 Sold</p>
        <div className="space-y-2">
          <h5 className="text-2xl md:text-4xl font-bold text-yellow">{currency(price)}</h5>
          <span className="flex items-center gap-4 text-xs">
            <p className="text-gray-400 line-through">{currency(300000)}</p>
            <p className="text-light-red">30%</p>
          </span>
        </div>
        <Link
          href="/price/product/12345"
          className="flex items-center gap-2 px-6 py-2 text-sm font-bold border w-max rounded-4xl bg-light text-orange border-orange"
        >
          Learn More <MdArrowForwardIos className="fill-orange" />
        </Link>
      </div>
    </motion.article>
  );
};

export default Product;
