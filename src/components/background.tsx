import Image from "next/image";

import Backdrop from "./backdrop";

import { BackgroundProps } from "@/types";

const Background = ({ src, className, children, isBackdrop, parentClassName, colorBackdrop }: BackgroundProps) => {
  return (
    <figure className={`relative w-full overflow-hidden ${parentClassName}`}>
      <Image src={src} alt="background image" fill priority objectFit="cover" objectPosition="center" className="z-1" />
      <div className={`relative z-5 flex flex-col ${className}`}>{children}</div>
      {isBackdrop && <Backdrop className={colorBackdrop} />}
    </figure>
  );
};

export default Background;
