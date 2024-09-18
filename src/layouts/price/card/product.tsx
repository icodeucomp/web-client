"use client";

import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import Link from "next/link";

import Images from "@/components/images";

import { MdArrowForwardIos } from "react-icons/md";

import currency from "@/utils/currency";

import { PriceCardProps } from "@/types";

const Product = ({ pathImg, price, title, description, index, slug, discount, discountedPrice }: PriceCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: index < 3 ? 0.5 + index / 4 : index / 5, delay: index < 3 ? 0.4 + index / 4 : index / 5 },
    });
  }, [controls, index]);

  return (
    <motion.article initial={{ opacity: 0, y: 120 }} animate={controls} className="price-card-product group">
      {/* <p className="popular-label-price">Most Popular</p> */}
      <div className="mt-8 sm:mt-16">
        <Images src={pathImg[0]} alt={title} className="w-full h-32 sm:h-48 md:h-60" cover />
      </div>
      <div className="flex flex-col p-3 space-y-1 lg:p-6 md:space-y-4">
        {/* <p className="font-bold text-xxs sm:text-xs text-orange">Website</p> */}
        <h4 className="flex-grow text-sm font-bold sm:text-base md:text-lg text-blue">{title}</h4>
        <div className="hidden lg:block">
          <p className="text-sm font-medium text-gray-700 line-clamp-3">{description}</p>
        </div>
        {/* <p className="font-bold text-gray-500 text-xxs sm:text-xs">15 Sold</p> */}
        <div className="space-y-2">
          <h5 className="text-base font-bold sm:text-lg md:text-2xl lg:text-4xl text-yellow">{currency(discountedPrice)}</h5>
          <span className="flex items-center gap-4 text-xxs sm:text-xs">
            <p className="text-gray-400 line-through">{currency(price)}</p>
            <p className="text-light-red">{discount}%</p>
          </span>
        </div>
        <Link href={`/price/product/${slug}`} className="link-product-price">
          Learn More <MdArrowForwardIos className="fill-orange" />
        </Link>
      </div>
    </motion.article>
  );
};

export default Product;
