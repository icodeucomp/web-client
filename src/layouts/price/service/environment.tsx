import Container from "@/components/container";
import Images from "@/components/images";

import { webDev, SEO, uiAndUx, wordpress } from "@/static/service";

const Environment = ({ id }: { id: string }) => {
  const render = id === "1" ? webDev : id === "2" ? SEO : id === "3" ? uiAndUx : wordpress;
  return (
    <Container className="pb-40">
      <h4 className="max-w-xl text-3xl font-bold leading-normal">{render.serviceTitle}</h4>
      <div className="flex items-center gap-2 mt-16">
        {render.top.map((item, index) => (
          <div key={index} className="flex items-start justify-center gap-2">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="grid p-4 rounded-full place-items-center bg-orange">
                <Images src={item.pathIcon} alt="business process icon" className="w-16 h-16" />
              </div>
              <p className="h-10 text-sm">{item.title}</p>
            </div>
            {index < 6 && <Images src="/icons/price/service/line-arrow.svg" alt="line arrow icon" className="mt-5 min-w-14 min-h-14" />}
          </div>
        ))}
      </div>

      <div className="mt-32 space-y-12">
        <h4 className="text-4xl font-bold text-center">Our Environment Development</h4>
        <div className="grid grid-cols-2 gap-8">
          {render.bottom.map((item, index) => (
            <div key={index} className="px-8 py-4 space-y-4 overflow-hidden bg-orange rounded-xl">
              <div className="flex items-center gap-4">
                <Images src={item.pathIcon} alt={`${item.title} icon`} className="w-14 h-14" />
                <h5 className="text-xl font-semibold max-w-72">{item.title}</h5>
              </div>
              <p className="text-sm leading-normal">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Environment;
