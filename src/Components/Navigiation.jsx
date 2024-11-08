import { NavLink } from "react-router-dom";

const Navigiation = () => {
  return (
    <div className="hidden  items-center lg:flex justify-center gap-10 mt-3">
      {["Home", "Collections", "About", "Contacts"].map((val, id) => (
        <NavLink
          to={`/${val.toLowerCase()}`}
          className="font-black cursor-pointer  para text-base"
          key={id}
        >
          {val}
          <hr className="bg-black h-[2px] hidden" />
        </NavLink>
      ))}
    </div>
  );
};

export default Navigiation;
