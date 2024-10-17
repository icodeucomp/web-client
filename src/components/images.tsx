import Image from "next/image";

import { ImagesProps } from "@/types";
import { shimmer, toBase64 } from "@/utils/shimmer";

const Images = ({ src, alt, className, cover }: ImagesProps) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src || "https://icodeu-storage.s3.ap-southeast-1.amazonaws.com/images/blogs/temporaryimage2-1726579124133.png"}
        alt={alt}
        fill
        objectFit={cover ? "cover" : ""}
        placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(500, 500))}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full h-full"
      />
    </div>
  );
};

export default Images;
