// import hero from "../assets/hero.avif";
// import hero2 from "../assets/hero.jpg";
import hero1 from "../assets/hero1.webp";

const HeroLeft = () => {
  return (
    <div className=" w-full lg:w-1/2 lg:h-full h-[40vh] ">
      <img className="w-full h-full object-cover" src={hero1} alt="" />
    </div>
  );
};

export default HeroLeft;
