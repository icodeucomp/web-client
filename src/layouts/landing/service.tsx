import Container from "@/components/container";
import Images from "@/components/images";

import { serve, service } from "@/static";

const Service = () => {
  return (
    <Container>
      <div className="pt-4 pb-16 text-center">
        <h2 className="pb-2 text-sm font-medium uppercase">Our Services</h2>
        <hr className="w-16 h-0.5 mx-auto bg-light" />
        <h3 className="max-w-2xl mx-auto mt-6 text-xl font-bold md:text-2xl lg:text-4xl text-blue text-shadow">
          We provide great services for our customers based on needs
        </h3>
        <div className="flex flex-wrap justify-center pt-16 gap-14">
          {service.map((item, index) => (
            <div key={index} className="max-w-xs space-y-4">
              <Images src={item.pathImg} alt={item.title} className="w-10 h-10 mx-auto" />
              <h4 className="h-10 text-base font-semibold md:text-lg">{item.title}</h4>
              <p className="text-sm font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Service;
