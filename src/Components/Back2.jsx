import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Back2 = () => {
  const backed = useNavigate();

  const back = () => {
    backed("/collections");
  };
  return (
    <p onClick={back} className="flex items-center cursor-pointer">
      {" "}
      <span>
        <IoChevronBackOutline />
      </span>
      Back
    </p>
  );
};

export default Back2;
