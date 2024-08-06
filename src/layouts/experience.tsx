import Images from "@/components/images";

import { experience } from "@/static";

const ExperienceSlice = () => {
  return (
    <>
      <div className="flex items-start justify-end gap-8 pt-8 text-end">
        <div className="max-w-full space-y-8 md:max-w-sm ms-auto">
          <h4 className="text-2xl font-bold">
            Experience the Power of <strong className="text-gradient">Process graphic</strong>
          </h4>
          <p className="text-sm text-gray-300 sm:text-base text-end">
            Rather than focusing solely on the problem, we embrace an agile approach to build comprehensive, end-to-end solutions that adapt
            seamlessly to your needs.
          </p>
        </div>
        <div className="p-4 rounded-full shadow-xl bg-yellow shadow-white/20">
          <Images src="/icons/box-white.svg" alt="icon process" className="min-w-6 min-h-6 md:min-w-10 md:min-h-10" />
        </div>
      </div>
      <menu className="block pt-8 pb-16 space-y-8 lg:hidden">
        {experience.map((item, index) => (
          <li key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
            <div className="relative p-4 rounded-2xl bg-dark card-shadow">
              <i className="absolute px-2 py-1 text-xs font-bold rounded-full bg-orange -top-3 -right-3">{index + 1}</i>
              <Images src={item.pathImg} alt={item.description} className="h-20 w-28" cover />
            </div>
            <div className={`space-y-1 max-w-sm ${index % 2 == 0 ? "text-start" : "text-end"}`}>
              <h5 className="text-xl text-gradient">{item.title}</h5>
              <p className="text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </menu>
      <menu className="hidden grid-cols-2 px-8 pb-28 pt-28 gap-x-12 gap-y-60 lg:grid">
        {experience.map((item, index) => (
          <li key={index} className={`flex items-center justify-center gap-6 ${index % 2 === 0 ? "-mt-96" : ""}`}>
            <div className="max-w-sm space-y-1 text-end">
              <h5 className="text-xl sm:text-2xl text-gradient">{item.title}</h5>
              <p className="text-sm sm:text-base">{item.description}</p>
            </div>
            <div className="relative p-4 rounded-2xl bg-dark card-shadow">
              <i className="absolute px-3.5 py-2 text-sm font-bold rounded-full bg-orange -top-5 -right-5">{index + 1}</i>
              <Images src={item.pathImg} alt={item.description} className="h-48 w-60" cover />
            </div>
          </li>
        ))}
      </menu>
    </>
  );
};

export default ExperienceSlice;
