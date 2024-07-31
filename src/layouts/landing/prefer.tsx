import Container from "@/components/container";
import Images from "@/components/images";
import { serve } from "@/static";
import React from "react";

const Prefer = () => {
  return (
    <Container>
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
                <p className="flex-grow text-sm font-semibold text-light-yellow">{title}</p>
              </li>
            ))}
          </menu>
        </div>
      </div>
    </Container>
  );
};

export default Prefer;
