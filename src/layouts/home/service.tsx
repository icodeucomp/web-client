import Button from "@/components/button";
import Container from "@/components/container";
import Images from "@/components/images";
import { service } from "@/static";

const Service = () => {
  return (
    <Container className="flex gap-8 py-40">
      <div className="max-w-lg space-y-8">
        <div className="flex items-center py-8">
          <p className="font-extrabold tracking-wide text-yellow me-2">02</p>
          <p className="font-extrabold tracking-wide text-yellow me-4">|</p>
          <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm me-4">Services</p>
          <i className="flex-grow border-t border-gray-400" />
        </div>
        <h3 className="text-5xl font-medium">Services we offer</h3>
        <p className="text-sm leading-relaxed text-gray-400 sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae obcaecati error placeat praesentium maxime harum nisi? Minima,
          repudiandae in nemo dolores minus facilis corrupti quidem et aliquid, tempore, fuga error dolorum doloremque! Sit nam earum quidem?
          Reiciendis nobis tenetur iusto dolorum, error accusantium explicabo. Similique cupiditate nulla ipsam sapiente distinctio?
        </p>
        <Button className="button-gradient">All Services</Button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {service
          .filter((_, index) => index < 4)
          .map((item, index) => (
            <article key={index} className={`h-full text-center bg-light-yellow/60 rounded-3xl group ${index % 2 === 1 ? "-mt-10" : ""}`}>
              <div className="flex flex-col justify-center gap-4 p-4 duration-300 bg-gradient-to-b from-yellow/80 to-orange/80 rounded-3xl h-72 group-hover:-translate-x-4 group-hover:-translate-y-4">
                <Images src={item.pathImg} alt={item.title} className="w-10 h-10 mx-auto" />
                <h4 className="text-base font-semibold md:text-lg">{item.title}</h4>
                <p className="text-sm font-light">{item.description}</p>
              </div>
            </article>
          ))}
      </div>
    </Container>
  );
};

export default Service;
