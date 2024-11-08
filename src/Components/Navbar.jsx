import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { LiaUser } from "react-icons/lia";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { Context } from "./Store";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "scroll";
    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, [visible]);

  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate("/collections"); // Navigate to the Collection component route
  };

  const { cart, setShowInput } = useContext(Context);
  return (
    <div className="   w-full">
      {/* Side bar */}
      <div
        className={` ${
          visible ? "w-full" : "w-0"
        } bg-white h-screen text-black overflow-hidden absolute left-0 transition-all z-10 top-0`}
      >
        <div className="flex  px-3   py-4 items-center gap-3">
          <span className="text-2xl" onClick={() => setVisible(false)}>
            <IoChevronBackSharp />
          </span>
          <h3
            onClick={() => setVisible(false)}
            className="font-black text-base"
          >
            Back
          </h3>
        </div>
        <div className="navbar">
          <div className="flex flex-col  ">
            {["Home", "Collections", "About", "Contacts"].map((val, id) => (
              <NavLink
                onClick={() => setVisible(false)}
                to={`/${val.toLowerCase()}`}
                className="font-black text-black border-[1px]  py-4 px-6 cursor-pointer  para text-base"
                key={id}
              >
                {val}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center pb-2 border-b-[1px] border-[#000] h-fit  w-full">
        <div className="lg:flex hidden items-center gap-4 w-1/2 ">
          <span className="text-2xl para cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="text-2xl  cursor-pointer">
            <FaInstagram />
          </span>
          <span className="text-2xl cursor-pointer">
            <FaWhatsapp />
          </span>
          <span className="text-2xl cursor-pointer">
            <FaYoutube />
          </span>
          <p className="text-lg hidden xl:block  uppercase para">
            Best special offers! 40% off!
          </p>
        </div>
        <div className="flex  items-center justify-between w-full  gap-4 lg:w-1/2">
          <div className="flex  items-center text-2xl gap-2">
            <span
              onClick={() => setVisible(true)}
              className="lg:hidden cursor-pointer"
            >
              <HiMenuAlt1 />
            </span>
            <Link
              to="/"
              className="bold text-2xl md:text-3xl  lg:text-4xl font-bold relative lg:-translate-x-1/2"
            >
              FASHION
            </Link>
          </div>
          <div className="flex  items-center gap-3">
            <span
              onClick={() => {
                setShowInput(true);
                handleSearchClick();
              }}
              className="text-2xl cursor-pointer"
            >
              <IoSearch />
            </span>

            <span className="text-3xl cursor-pointer">
              <LiaUser />
            </span>
            <NavLink to="/cart" className="text-2xl relative cursor-pointer">
              <BsHandbag />
              <span className="para bg-black text-white flex justify-center items-center text-sm h-5 w-5 rounded-full absolute bottom-[-40%] right-[-20%]">
                {cart.length}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
