import Container from "@/components/container";
import Images from "@/components/images";
import { experience } from "@/static";

const Experience = () => {
  return (
    <Container>
      <div className="flex items-center pt-8">
        <i className="flex-grow border-t border-gray-400" />
        <p className="flex-shrink text-xs font-light text-gray-400 uppercase md:text-sm ms-4">OUR DEVELOPMENT METHODS</p>
      </div>
      <div className="flex items-start justify-end gap-8 pt-8 text-end">
        <div className="max-w-full space-y-8 md:max-w-sm ms-auto">
          <h4 className="text-2xl font-bold">
            Experience the Power of <strong className="text-gradient">Process</strong>
          </h4>
          <p className="text-sm text-gray-300 sm:text-base text-end">
            Rather than focusing solely on the problem, we embrace an agile approach to build comprehensive, end-to-end solutions that adapt
            seamlessly to your needs.
          </p>
        </div>
        <div className="p-4 rounded-full shadow-xl bg-yellow shadow-white/20">
          <Images src="/icons/process-white.svg" alt="icon process" className="min-w-6 min-h-6 md:min-w-10 md:min-h-10" />
        </div>
      </div>
      <menu className="pt-8 pb-16 space-y-8">
        {experience.map((item, index) => (
          <li key={index} className={`flex items-center gap-4 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="p-4 shadow-2xl rounded-2xl bg-dark shadow-light/30">
              <Images src={item.pathImg} alt={item.description} className="h-20 w-28 md:w-60 md:h-48" cover />
            </div>
            <div className={`space-y-1 max-w-sm ${index % 2 == 0 ? "text-start" : "text-end"}`}>
              <h5 className="text-xl sm:text-2xl text-gradient">{item.title}</h5>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
          </li>
        ))}
      </menu>
    </Container>
  );
};

export default Experience;
