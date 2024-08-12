import Background from "@/components/background";

const HeroSlice = ({ title, description }: { title: string; description: string }) => {
  return (
    <Background
      src="/images/hero.png"
      className="items-center justify-center w-full min-h-screen px-4 mx-auto max-w-container sm:px-8 2xl:min-h-600"
      colorBackdrop="bg-blue/50 z-1"
      isBackdrop
    >
      <div className="max-w-screen-lg space-y-8 text-center">
        <h1 className="text-6xl font-bold tracking-wide">{title}</h1>
        <p className="text-xl font-medium leading-relaxed">{description}</p>
      </div>
    </Background>
  );
};

export default HeroSlice;
