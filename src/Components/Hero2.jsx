import Hero2left from "./Hero2left";
import Hero2Right from "./Hero2Right";

const Hero2 = () => {
  return (
    <div className="w-full gap-2 flex flex-col lg:flex-row px-2 my-10   lg:min-h-screen ">
      <Hero2left />
      <Hero2Right />
    </div>
  );
};

export default Hero2;
