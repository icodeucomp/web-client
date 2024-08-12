import Container from "@/components/container";
import Images from "@/components/images";
import { mission } from "@/static";

const Purpose = () => {
  return (
    <Container className="py-16">
      <div className="text-6xl font-extrabold text-center leading-tight relative pb-16">
        <div className="absolute top-0 left-20">
          <Images src="/icons/top-double-quote.svg" alt="top double quote circle" className="w-16 h-16" />
        </div>
        <div className="absolute top-0 right-20">
          <Images src="/icons/bottom-double-quote.svg" alt="bottom double quote circle" className="w-16 h-16" />
        </div>
        <h4 className="font-bold">Create</h4>
        <h4 className="text-gradient">the right technology,</h4>
        <h4 className="font-bold">thrive together for</h4>
        <h4 className="text-gradient">rapid growth</h4>
      </div>
      <div className="space-y-4">
        <h3 className="text-gradient text-6xl">Mission</h3>
        {mission.map((mission, index) => (
          <div key={index} className="bg-gradient-to-r from-orange to-yellow p-8 flex items-center gap-6 divide-x-4 divide-gray-200 rounded-2xl">
            <span className="bg-yellow rounded-lg py-4 px-6 text-2xl">{index + 1}</span>
            <p className="ps-6 text-xl font-medium">{mission}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Purpose;
