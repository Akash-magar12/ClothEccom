import { useContext, useState, useEffect } from "react";
import { Context } from "./Store";
import { useLocation } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";

const Search = () => {
  const { setShowInput, showinput, input, setInput, handleInput } =
    useContext(Context);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    handleInput();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  useEffect(() => {
    setVisible(location.pathname.includes("collection"));
  }, [location.pathname]);

  return showinput && visible ? (
    <div className="flex items-center justify-center w-full h-16 bg-gray-100 px-4 py-2">
      <div className="flex w-full max-w-2xl items-center rounded-lg bg-white shadow-md border border-gray-300 overflow-hidden">
        {/* Search Input */}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow p-2 text-sm outline-none placeholder-gray-500"
          placeholder="Search for items, collections..."
        />

        {/* Search Button */}
        <button onClick={handleInput} className="px-4 py-2 text-xl   ">
          <IoSearchOutline />
        </button>

        {/* Close Button */}
        <button
          onClick={() => setShowInput(false)}
          className="px-4 py-2 bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition duration-200"
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
};

export default Search;
