import Image from "next/image";

import { ImagesProps } from "@/types";

const Images = ({ src, alt, className, cover }: ImagesProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image src={src} alt={alt} fill objectFit={cover ? "cover" : ""} className="top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Images;
