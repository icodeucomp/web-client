import Container from "@/components/container";
import Images from "@/components/images";

const images: string[] = [
  "/icons/price/handshake.svg",
  "/icons/price/floor-plan.svg",
  "/icons/price/pencil.svg",
  "/icons/price/code-bracket.svg",
  "/icons/price/task-daily.svg",
  "/icons/price/deploy-line.svg",
  "/icons/price/support.svg",
];

const Environment = () => {
  return (
    <Container className="pb-40">
      <h4 className="max-w-xl text-3xl font-bold">Designing and Delivering The Right Web Solutions for Your Business</h4>
      <div className="flex items-center justify-between mt-16">
        {images.map((image, index) => (
          <div key={index} className="flex items-center gap-1">
            <div className="p-4 rounded-full bg-orange">
              <Images src={image} alt="business process icon" className="w-16 h-16" />
            </div>
            {index < 6 && <Images src="/icons/price/line-arrow.svg" alt="line arrow icon" className="w-14 h-14" />}
          </div>
        ))}
      </div>

      <div className="mt-32 space-y-12">
        <h4 className="text-4xl font-bold text-center">Our Environment Development</h4>
        <div className="grid grid-cols-2 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="px-8 py-4 space-y-4 overflow-hidden bg-orange rounded-xl">
              <div className="flex items-center gap-4">
                <Images src="/icons/price/code-bracket.svg" alt="environment process icon" className="w-14 h-14" />
                <h5 className="text-xl font-semibold max-w-72">Posuere laoreet dignissim cubilia</h5>
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, vel? Sunt perspiciatis eius dolorum corrupti.</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Environment;
