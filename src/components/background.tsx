import Image from "next/image";

import Container from "./container";

import { BackgroundProps } from "@/types";

const Background = ({ src, className, children }: BackgroundProps) => {
  return (
    <figure className="relative">
      <Image src={src} alt="background image" fill priority objectFit="cover" objectPosition="center" className="z-1" />
      <Container className={`z-5 relative flex ${className}`}>{children}</Container>
    </figure>
  );
};

export default Background;
