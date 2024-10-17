"use client";

import useGet from "@/hooks/useGet";

import Container from "@/components/container";
import MotionComponent from "@/components/motion";

import { IoIosArrowDown } from "react-icons/io";

import { ResponsePayload, ServiceOrProduct } from "@/types/response-api";
type ResponseProduct = ResponsePayload<ServiceOrProduct>;

const Description = ({ id }: { id: string }) => {
  const { response: product, loading } = useGet<ResponseProduct>(`/products/${id}`);

  return (
    <Container className="pb-16 lg:pb-32">
      <hr className="mb-8" />
      <MotionComponent
        tag="h4"
        duration={0.3}
        initialO={0}
        initialX={70}
        animateO={1}
        animateX={0}
        className="mb-4 text-2xl font-bold tracking-wide text-gray-300 md:text-3xl"
      >
        Product Description
      </MotionComponent>

      {loading ? (
        <div className="flex justify-center mt-8">
          <div className="loader"></div>
        </div>
      ) : (
        <MotionComponent
          tag="p"
          duration={0.6}
          delay={0.3}
          initialO={0}
          initialY={70}
          animateO={1}
          animateY={0}
          className="text-sm text-justify text-gray-300 md:text-base line-clamp-3"
        >
          {product?.data.description}
        </MotionComponent>
      )}
    </Container>
  );
};

export default Description;
