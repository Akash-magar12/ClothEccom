import img3 from "../assets/hero4.jpeg";

const Hero2Right = () => {
  return (
    <div className="lg:w-1/2 cursor-pointer hidden overflow-hidden lg:block  lg:h-screen">
      <img
        className="w-full transition-all hover:scale-110 h-full  object-cover object-top"
        src={img3}
        alt=""
      />
    </div>
  );
};

export default Hero2Right;
