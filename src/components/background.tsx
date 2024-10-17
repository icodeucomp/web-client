import Image from "next/image";

import Backdrop from "./backdrop";

import { shimmer, toBase64 } from "@/utils/shimmer";

import { BackgroundProps } from "@/types";

const Background = ({ src, className, children, isBackdrop, parentClassName, colorBackdrop }: BackgroundProps) => {
  return (
    <figure className={`relative w-full overflow-hidden ${parentClassName}`}>
      <Image
        src={src || "https://icodeu-storage.s3.ap-southeast-1.amazonaws.com/images/blogs/temporaryimage2-1726579124133.png"}
        alt="background image"
        fill
        priority
        objectFit="cover"
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(400, 400))}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        objectPosition="center"
        className="z-1"
      />
      <div className={`relative z-5 flex flex-col ${className}`}>{children}</div>
      {isBackdrop && <Backdrop className={colorBackdrop} />}
    </figure>
  );
};

export default Background;
