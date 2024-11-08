import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="w-full mt-4 lg:border-[1px] md:gap-6 lg:gap-2 lg:border-[#8b8a8a] flex lg:justify-center flex-col gap-2 items-center  md:flex-row md:h-[40vh] lg:h-[80vh]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
