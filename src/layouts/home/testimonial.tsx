import Container from "@/components/container";
import Images from "@/components/images";
import { testimonial } from "@/static";

const Testimonial = () => {
  return (
    <Container className="pb-16">
      <div className="flex items-center py-8">
        <p className="text-sm font-extrabold tracking-wide sm:text-base text-yellow me-2">04</p>
        <p className="text-sm font-extrabold tracking-wide sm:text-base text-yellow me-2 sm:me-4">|</p>
        <p className="flex-shrink text-xs font-bold tracking-wide text-gray-300 uppercase md:text-sm me-4">Testimonials</p>
        <i className="flex-grow border-t border-gray-400" />
      </div>
      <div className="space-y-10 text-center">
        <h4 className="text-2xl font-bold tracking-wide text-center md:text-3xl lg:text-5xl md:text-start text-light-yellow">
          See what our clients say
        </h4>
        <p className="px-8 leading-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem unde eum modi, culpa corrupti at dignissimos dolores nostrum officia sequi,
          quaerat quasi. Dicta laboriosam corrupti voluptate aliquam voluptatem, corporis consequuntur.
        </p>
        <menu className="flex flex-wrap justify-center gap-8">
          {testimonial.map((item, index) => (
            <article className="flex flex-col max-w-xs gap-4 px-4 py-8 shadow-lg min-w-72 rounded-3xl bg-light" key={index}>
              <div className="flex items-center gap-4 text-start">
                <Images src={item.pathImg} alt={item.name} className="w-16 h-16" />
                <div className="space-y-1">
                  <h5 className="text-base md:text-lg text-light-red text-medium">{item.name}</h5>
                  <p className="text-sm text-gray-500">{item.job}</p>
                </div>
              </div>
              <p className="h-16 text-2xl tracking-wide text-yellow">“{item.subject}”</p>
              <p className="flex-grow text-sm text-justify text-gray-500">{item.message}</p>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Images key={index} src="/icons/star.svg" alt="star orange" className="w-4 h-4" />
                ))}
              </div>
            </article>
          ))}
        </menu>
      </div>
    </Container>
  );
};

export default Testimonial;
