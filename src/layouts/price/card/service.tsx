"use client";

import { useEffect } from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

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
      className="relative flex flex-col flex-1 w-full gap-4 md:gap-5 p-8 overflow-hidden text-center duration-300 shadow-2xl min-w-72 max-w-80 rounded-3xl bg-light hover:bg-yellow group"
    >
      {index % 2 === 1 && (
        <p className="absolute px-4 py-1 text-xs uppercase top-2 right-2 md:top-4 md:right-4 bg-orange rounded-2xl w-max">Most Popular</p>
      )}
      <div className="p-4 mx-auto mt-0 md:mt-8 rounded-full bg-light">
        <Images src={pathImg} alt={title} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <h4 className="h-12 text-base font-bold md:text-lg text-blue">{title}</h4>
      <div className="space-y-1">
        <p className="text-xs font-medium text-yellow group-hover:text-blue">Starts From</p>
        <h5 className="text-2xl md:text-3xl font-bold text-yellow group-hover:text-blue">{currency(price)}</h5>
      </div>
      <div className="hidden md:block">
        <p className="text-sm font-medium text-gray-500 group-hover:text-light line-clamp-3">{description}</p>
      </div>
      <div className="space-y-1 text-left hidden md:block">
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
    </motion.article>
  );
};

export default Service;
