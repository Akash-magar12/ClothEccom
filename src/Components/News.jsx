const News = () => {
  let news = [
    {
      img: "https://images.pexels.com/photos/6567332/pexels-photo-6567332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "August 23,2024",
      title: "Summer Collections",
      para: " summer is just arount the corner,which means it's time to  update our wardrobes with the latest fashion trends",
    },
    {
      img: "https://images.pexels.com/photos/5869611/pexels-photo-5869611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "September 16,2024",
      title: "Best  Gifts for Holidays",
      para: " The Holiday season is a time for joy celebration.Finding the perfect gift for your loved ones can be a challenge,but with a little thought and creativity.",
    },
    {
      img: "https://images.pexels.com/photos/5868278/pexels-photo-5868278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "October 3,2024",
      title: "New Luxury Collections",
      para: "Discover our new collection, where luxury meets elegance. Each piece is crafted to perfection, designed to make every look unforgettable.",
    },
  ];
  return (
    <div className="w-full    my-10">
      <h2 className="text-3xl border-b-[4px] w-fit mx-auto border-black mb-10 para  lg:text-6xl  uppercase">
        Our News
      </h2>
      <div className="w-full grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  gap-5 h-full">
        {news.map((newsItem, id) => (
          <div
            key={id}
            className="w-[20rem] cursor-pointer lg:w-[27rem] rounded shadow-md h-[25rem] lg:h-[26rem] bg-white"
          >
            <div className="w-full overflow-hidden  h-[50%] lg:h-[60%]">
              <img
                className="w-full hover:scale-110 transition-all h-full object-cover"
                src={newsItem.img}
                alt=""
              />
            </div>
            <div className="w-full h-[50%] lg:h-[40%] px-4 flex flex-col gap-2 justify-center items-start ">
              <h3 className="para text-md font-bold">{newsItem.title}</h3>
              <p className="para text-[#6B7280] text-sm">{newsItem.para}</p>
              <button className="text-white text-sm para bg-black px-3 py-1 rounded">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
