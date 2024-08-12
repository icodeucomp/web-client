import Container from "@/components/container";
import Images from "@/components/images";

const images: string[] = [
  "/images/price/stack-1.png",
  "/images/price/stack-2.png",
  "/images/price/stack-3.png",
  "/images/price/stack-4.png",
  "/images/price/stack-5.png",
  "/images/price/stack-6.png",
  "/images/price/stack-7.png",
  "/images/price/stack-8.png",
  "/images/price/stack-9.png",
  "/images/price/stack-10.png",
  "/images/price/stack-11.png",
  "/images/price/stack-12.png",
  "/images/price/stack-13.png",
  "/images/price/stack-14.png",
];

const Stack = () => {
  return (
    <Container className="pb-16 space-y-8">
      <div className="flex flex-col text-5xl leading-snug">
        <h4 className="text-gradient">Tech Stack</h4>
        <h4 className="text-gradient">That We Used</h4>
      </div>
      <div className="grid grid-cols-7 gap-8 overflow-hidden justify-stretch">
        {images.map((image, index) => (
          <Images key={index} src={image} alt="stack icon" className="w-24 h-24 mx-auto" cover />
        ))}
      </div>
    </Container>
  );
};

export default Stack;
