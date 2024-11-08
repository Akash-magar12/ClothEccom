import { useContext, useState, useEffect } from "react";
import Navigiation from "../Components/Navigiation";
import { Context } from "../Components/Store";
import Card from "../Components/Card";
import { IoChevronForwardSharp } from "react-icons/io5";
import Back from "../Components/Back";
const Collection = () => {
  const { data, filtered, setFiltered } = useContext(Context);
  const [show, setShow] = useState(false);
  const [sort, setSort] = useState("");

  const handleCategory = (selected) => {
    if (selected === "All") {
      return setFiltered(data);
    }
    const filteredCategory = data.filter((item) => {
      return item.category.toLowerCase() === selected.toLowerCase();
    });
    setFiltered(filteredCategory);
  };

  const handleType = (selected) => {
    if (selected === "All") {
      return setFiltered(data);
    }
    const filteredType = data.filter((item) => {
      return item.subCategory.toLowerCase() === selected.toLowerCase();
    });
    setFiltered(filteredType);
  };

  const sortProduct = (value) => {
    let sortedProducts = [...filtered];
    if (value === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setFiltered(sortedProducts);
  };

  // Effect to sort products whenever the sort state changes
  useEffect(() => {
    sortProduct(sort);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  return (
    <div className="w-full min-h-screen">
      <Navigiation />
      {filtered.length > 0 ? (
        <div className="w-full gap-7 mt-4 flex flex-col lg:flex-row min-h-screen">
          <div>
            <div className="left lg:sticky top-0 flex flex-col gap-3 min-w-60">
              <div className="flex justify-between">
                <h3 className="flex items-center gap-1">
                  Filters
                  <span
                    onClick={() => setShow(!show)}
                    className={`text-lg transition-all sm:hidden ${
                      show ? "" : "rotate-90"
                    }`}
                  >
                    <IoChevronForwardSharp />
                  </span>
                </h3>
                <Back />
              </div>

              <div
                className={`border p-4 ${
                  show ? "" : "hidden"
                } sm:block border-gray-500`}
              >
                <h2 className="mb-2">Categories</h2>
                <div className="flex flex-col gap-1 text-gray-700">
                  {["All", "Men", "Women", "Kids"].map((cate) => (
                    <div key={cate} className="flex items-center gap-2">
                      <input
                        className="cursor-pointer accent-black"
                        type="radio"
                        id={cate}
                        name="CategoryGroup"
                        value={cate}
                        defaultChecked={cate === "All"}
                        onChange={() => handleCategory(cate)}
                      />
                      <label className="text-sm cursor-pointer" htmlFor={cate}>
                        {cate}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`border p-4 ${
                  show ? "" : "hidden"
                } sm:block border-gray-500`}
              >
                <h2 className="mb-2">Type</h2>
                <div className="flex flex-col gap-1 text-gray-700">
                  {["All", "Topwear", "Bottomwear", "Winterwear"].map(
                    (type) => (
                      <div key={type} className="flex items-center gap-2">
                        <input
                          className="cursor-pointer accent-black"
                          type="radio"
                          id={type}
                          name="TypeGroup"
                          value={type}
                          defaultChecked={type === "All"}
                          onChange={() => handleType(type)}
                        />
                        <label
                          className="text-sm cursor-pointer"
                          htmlFor={type}
                        >
                          {type}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="right flex-1 min-h-screen">
            <div className="flex mb-4 items-center justify-between">
              <h2>All Collections</h2>
              <select
                onChange={(e) => setSort(e.target.value)}
                className="border-[1px] outline-none border-gray-300 text-sm py-2 px-2"
              >
                <option value="">Select an option</option>
                <option value="Low to High">Sort by: Low to High</option>
                <option value="High to Low">Sort by: High to Low</option>
              </select>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-4">
              {filtered.map((d) => (
                <Card
                  all={d}
                  key={d._id}
                  id={d._id}
                  img={d.image}
                  name={d.name}
                  price={d.price}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <h1>Not Found</h1>
      )}
    </div>
  );
};

export default Collection;
