import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({ price, img, id, name, }) => {
  const navigates = useNavigate();
  const handleNavi = () => {
    navigates(`/product/${id}`);
  };

  return (
    <div className="relative w-full sm:w-[14rem] md:w-[11rem] lg:w-[16rem] bg-[#fff] overflow-hidden shadow-md rounded lg:h-[20rem] h-[16rem] flex flex-col justify-between">
      {/* Product Link */}
      <Link
        to={`/product/${id}`}
        className="w-full h-64 lg:h-[19rem] cursor-pointer flex flex-col justify-between"
      >
        <div className="w-full h-[60%] lg:h-[80%] transition-all hover:scale-110">
          <img
            className="w-full h-[96%] object-cover object-top"
            src={img}
            alt={name}
          />
        </div>
        <div className="h-[40%] px-3 flex flex-col justify-center lg:h-[20%]">
          <h3 className="text-sm lg:text-md font-bold">{name}</h3>
          <div className="flex items-center justify-between gap-2 mt-2">
            <span className="text-sm bold text-gray-800 font-medium">
              ${Math.round(price)}
            </span>
            {/* <div className="flex items-center gap-2 bg-emerald-400 text-white px-3 py-1 rounded">
              <p>{cate}</p>
              <p>{type}</p>
            </div> */}
          </div>
        </div>
      </Link>

      {/* Cart Icon */}
      <span
        onClick={handleNavi}
        className="absolute top-1 right-1   bg-black text-white p-2 rounded-full shadow-md cursor-pointer  "
      >
        <BsCart3 size={20} />
      </span>
    </div>
  );
};

export default Card;
