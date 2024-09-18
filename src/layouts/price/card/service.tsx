"use client";

import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";

import Link from "next/link";

import Images from "@/components/images";

import { images } from "@/static";

import currency from "@/utils/currency";

import { PriceCardProps } from "@/types";

const Service = ({ pathImg, price, title, description, index, slug, discount, discountedPrice }: PriceCardProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: index < 3 ? 0.5 + index / 4 : index / 5, delay: index < 3 ? 0.4 + index / 4 : index / 5 },
    });
  }, [controls, index]);

  const filterImages = images.filter((image) => image.slug === slug);

  return (
    <motion.article initial={{ opacity: 0, y: 120 }} animate={controls} className="price-card-service group">
      {/* <p className="popular-label-price">Most Popular</p> */}
      <div className="mt-8 sm:mt-16">
        {filterImages.map((image, index) => (
          <div key={index} className="p-4 mx-auto mt-8 rounded-full w-max bg-light">
            <Images src={image.pathIcon} alt={image.slug} className="size-8 sm:size-10" />
          </div>
        ))}
      </div>
      <div className="flex flex-col p-3 sm:p-6">
        <h4 className="h-12 mt-2 text-sm font-bold sm:text-base md:text-lg text-blue group-hover:text-light">{title}</h4>
        <div className="mt-2 sm:mt-4 sm:space-y-1">
          <p className="text-xs font-medium text-yellow group-hover:text-blue">Starts From</p>
          <h5 className="text-base font-bold sm:text-lg md:text-3xl text-yellow group-hover:text-blue">{currency(price)}</h5>
        </div>
        <div className="hidden mt-4 lg:block">
          <p className="text-sm font-medium text-gray-500 group-hover:text-light line-clamp-3">{description}</p>
        </div>
        <Link href={`/price/service/${slug}`} className="link-service-price group-hover:bg-light group-hover:text-orange">
          Read More
        </Link>
      </div>
    </motion.article>
  );
};

export default Service;
