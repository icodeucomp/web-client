import Container from "@/components/container";
import Images from "@/components/images";

import { serve, service } from "@/static";

const Service = () => {
  return (
    <Container>
      <div className="pt-4 pb-16 text-center">
        <h2 className="pb-2 text-sm font-medium">Our Services</h2>
        <hr className="w-16 h-0.5 mx-auto bg-light" />
        <h3 className="max-w-2xl mx-auto mt-6 text-xl font-bold md:text-2xl text-blue text-shadow">
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
      <div className="flex items-center max-w-full py-8 md:max-w-xl md:ms-auto">
        <p className="flex-shrink text-xs font-light text-gray-400 uppercase md:text-sm me-4">Why Choose Us</p>
        <i className="flex-grow border-t border-gray-400" />
      </div>
      <div className="flex justify-between gap-8 pb-16">
        <div className="hidden max-w-sm mx-auto md:block">
          <Images src="/images/people.png" alt="people service picture" className="max-w-xs min-w-300 min-h-500" cover />
        </div>
        <div className="max-w-xl space-y-8">
          <h3 className="text-xl md:text-2xl text-gradient">They choose us because we serve the best for everyone</h3>
          <p className="text-sm md:text-base">
            Our experienced team is dedicated to delivering high-quality, customized solutions with a main focus on customer satisfaction
          </p>
          <menu className="space-y-4">
            {serve.map((title, index) => (
              <li key={index} className="flex items-center justify-start gap-4">
                <div className="p-2 rounded-full bg-light/10">
                  <Images src="/icons/check.svg" alt="icon check" className="w-6 h-6" />
                </div>
                <p className="flex-grow text-sm">{title}</p>
              </li>
            ))}
          </menu>
        </div>
      </div>
    </Container>
  );
};

export default Service;
