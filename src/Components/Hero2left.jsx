import img1 from "../assets/hero2.webp";
import img2 from "../assets/hero3.jpeg";
const Hero2left = () => {
  return (
    <div className="lg:w-1/2 cursor-pointer  h-fit lg:h-screen">
        <div className="w-full  flex flex-col gap-3 justify-center h-fit py-4 lg:h-[40%] ">
          <h2 className="capitalize bold font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl">
            Style Essentials for Every Occasion
          </h2>
          <div className="flex flex-col gap-4">
            <h4 className="text-md bold font-bold">
              Versatile Pieces for Your Wardrobe
            </h4>
            <p className="text-sm para">
              Step into fashion-forward style with our collection that blends
              comfort, quality, and flair. From versatile basics to trend-driven
              pieces, find looks that inspire and keep you confidently stylish
              every moment.
            </p>
          </div>
        </div>
        <div className="w-full flex h-fit gap-2  lg:h-[60%] ">
          <div className="w-1/2 overflow-hidden h-full ">
            <img
              className="w-full transition-all hover:scale-110 h-full object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div className="w-1/2 overflow-hidden h-full">
            <img
              className="w-full transition-all hover:scale-110 h-full object-cover"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
  );
};

export default Hero2left;
