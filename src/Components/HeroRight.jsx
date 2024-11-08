
const HeroRight = () => {
  return (
    <div className="w-full lg:w-1/2  gap-3 pb-6 lg:pb-0 h-fit   lg:px-20  flex flex-col py-3 justify-center lg:h-full">
      <h1 className="text-4xl md:text-4xl lg:text-7xl bold tracking-tighter  font-bold ">New Summer Collection</h1>
      <p className="para text-xs md:text-sm lg:text-base">
        Introducing Our New Summer Collection! Get ready for sunny days with our
        latest arrivals! Our collection features light fabrics, bright colors,
        and trendy styles perfect for any summer occasion. Shop now and bring
        some sunshine to your wardrobe!
      </p>
      <div className="flex gap-2 mt-3">
        <button className="para bg-black border-[1px] border-black px-3 py-1 rounded text-white">
          For Men
        </button>
        <button className="para border-[1px] px-3 py-1 rounded border-[#8b8a8a]">
          For Women
        </button>
      </div>
    </div>
  );
};

export default HeroRight;
