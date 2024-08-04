import Container from "@/components/container";
import Images from "@/components/images";

import { serve } from "@/static";

const Prefer = () => {
  return (
    <Container>
      <div className="flex justify-between gap-8">
        <div className="hidden max-w-sm mx-auto md:block">
          <Images src="/images/people.png" alt="people service picture" className="max-w-md min-w-96 min-h-600" />
        </div>
        <div className="max-w-xl space-y-8">
          <div className="flex items-center py-8">
            <p className="flex-shrink text-xs tracking-[4px] text-gray-300 uppercase md:text-sm me-4">Why Choose Us</p>
            <i className="flex-grow border-t border-gray-400" />
          </div>
          <h3 className="text-xl md:text-2xl text-gradient">They choose us because we serve the best for everyone</h3>
          <p className="text-sm md:text-base">
            Our experienced team is dedicated to delivering high-quality, customized solutions with a main focus on customer satisfaction
          </p>
          <menu className="space-y-4">
            {serve.map((item, index) => (
              <li key={index} className="flex items-center justify-start gap-4">
                <div className="p-2 rounded-full bg-light/10">
                  <Images src={item.pathImg} alt="icon check" className="w-6 h-6" />
                </div>
                <p className="flex-grow text-sm font-semibold text-light-yellow">{item.description}</p>
              </li>
            ))}
          </menu>
        </div>
      </div>
    </Container>
  );
};

export default Prefer;
