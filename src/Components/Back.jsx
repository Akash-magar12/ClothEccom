import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Back = () => {
  const backed = useNavigate();

  const back = () => {
    backed("/");
  };
  return (
    <p onClick={back} className="flex cursor-pointer items-center">
      {" "}
      <span>
        <IoChevronBackOutline />
      </span>
      Back
    </p>
  );
};

export default Back;
