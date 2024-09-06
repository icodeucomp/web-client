"use client";

import { useEffect } from "react";
import Link from "next/link";

import { motion, useAnimation } from "framer-motion";

import Images from "@/components/images";
import Button from "@/components/button";

import { RiCheckLine } from "react-icons/ri";

import currency from "@/utils/currency";

import { PriceCardServiceProps } from "@/types";

const Service = ({ pathImg, price, title, description, index, list }: PriceCardServiceProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: index < 3 ? 0.5 + index / 4 : index / 5, delay: index < 3 ? 0.4 + index / 4 : index / 5 },
    });
  }, [controls, index]);

  return (
    <motion.article initial={{ opacity: 0, y: 120 }} animate={controls} className="price-card-service group">
      {index % 2 === 1 && <p className="popular-label-service-price">Most Popular</p>}
      <div className="p-4 mx-auto mt-4 rounded-full sm:mt-8 bg-light">
        <Images src={pathImg} alt={title} className="size-8 md:size-10" />
      </div>
      <h4 className="flex-grow mt-2 text-sm font-bold sm:text-base md:text-lg text-blue group-hover:text-light">{title}</h4>
      <div className="mt-4 sm:space-y-1">
        <p className="text-xs font-medium text-yellow group-hover:text-blue">Starts From</p>
        <h5 className="text-base font-bold sm:text-lg md:text-3xl text-yellow group-hover:text-blue">{currency(price)}</h5>
      </div>
      <div className="hidden mt-4 lg:block">
        <p className="text-sm font-medium text-gray-500 group-hover:text-light line-clamp-3">{description}</p>
      </div>
      <div className="hidden mt-2 space-y-1 text-left lg:block">
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
      <Link href={`/price/service/${index + 1}`} className="mt-2 sm:mt-4">
        <Button className="w-full rounded-2xl bg-orange text-light group-hover:bg-light group-hover:text-orange">Read More</Button>
      </Link>
    </motion.article>
  );
};

export default Service;
