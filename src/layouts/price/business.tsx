"use client";

import useGet from "@/hooks/useGet";
import useInView from "@/hooks/useInView";

import { motion } from "framer-motion";

import Container from "@/components/container";
import Tabs from "@/components/tabs";

import Product from "./card/product";
import Service from "./card/service";

import { ServiceOrProduct, ResponsePayload } from "@/types/response-api";

type ResponseProductsOrServices = ResponsePayload<ServiceOrProduct[]>;

const Business = () => {
  const { response: products, loading: loadProducts } = useGet<ResponseProductsOrServices>("/products");
  const { response: services, loading: loadServices } = useGet<ResponseProductsOrServices>("/services");

  const { isInView, elementRef } = useInView<HTMLDivElement>();

  const div = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } };

  const tabData = [
    {
      label: "Services",
      children: (
        <div className="grid grid-cols-2 gap-2 mt-8 lg:grid-cols-3 sm:gap-4 md:gap-8">
          {services?.data.map((item, index) => {
            const { description, images, price, name, discount, discountedPrice, slug } = item;
            return <Service key={index} index={index} description={description} pathImg={images} price={price} title={name} slug={slug} discount={discount} discountedPrice={discountedPrice} />;
          })}
        </div>
      ),
    },
    {
      label: "Products",
      children: (
        <div className="grid grid-cols-2 gap-2 mt-8 lg:grid-cols-3 sm:gap-4 md:gap-8">
          {products?.data.map((item, index) => {
            const { description, price, images, name, discount, slug, discountedPrice } = item;
            return <Product key={index} index={index} description={description} pathImg={images} price={price} title={name} slug={slug} discount={discount} discountedPrice={discountedPrice} />;
          })}
        </div>
      ),
    },
  ];

  return (
    <Container className="pt-40 pb-20">
      <motion.div
        ref={elementRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={div}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center w-full leading-snug text-center md:text-start"
      >
        <h4 className="text-lg sm:text-xl text-gradient md:text-2xl lg:text-3xl">Streamline your teamwork. Start free.</h4>
        <h4 className="text-2xl text-gradient md:text-3xl">Choose the perfect plan for your business needs</h4>
      </motion.div>
      <div className="mt-10">
        <Tabs tabsFields={tabData} loadProducts={loadProducts} loadServices={loadServices} />
      </div>
    </Container>
  );
};

export default Business;
