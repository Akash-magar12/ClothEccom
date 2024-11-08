import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Store";
import Navigiation from "../Components/Navigiation";
import { FaStar } from "react-icons/fa";
import Back2 from "../Components/Back2";
const ProductPage = () => {
  const { id } = useParams();
  const { data, handleCart, notify, error } = useContext(Context);

  const product = data.find((pro) => pro._id === id);
  const random = Math.round(Math.random() * 100 + 1);
  const [active, setActive] = useState("");

  // Conditional rendering to check if product exists

  return (
    <div>
      <Navigiation />
      <span className="pt-4 flex justify-end ">
        <Back2 />
      </span>
      {product ? (
        <>
          <div className="w-full mt-4 lg:mt-10   flex flex-wrap  gap-8 min-h-screen justify-center ">
            <div className="left lg:w-[40%] h-[70vh] ">
              <div className="w-full mx-auto h-full">
                <img
                  className="w-full h-full object-cover"
                  src={product.image}
                  alt=""
                />
              </div>
            </div>
            <div className="right flex flex-col gap-4 lg:gap-7 items-start lg:w-[40%] px-2 lg:px-6 h-[70vh] ">
              <div>
                <h2 className="title text-2xl">{product.title}</h2>

                <div className="flex gap-1 items-center ">
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <span className="text-yellow-500">
                    <FaStar />
                  </span>
                  <p className="ml-1">({random} reviews)</p>
                </div>
              </div>
              <p>${product.price}</p>
              <p className="des text-[#6B7280]">{product.description}</p>
              <div className="flex flex-col gap-4">
                <p>Select Size</p>
                <div className="flex gap-3">
                  {product.sizes.map((size, i) => (
                    <span
                      onClick={() => setActive(size)}
                      key={i}
                      className={`bg-[#F3F4F6] ${
                        active === size ? "border-2" : ""
                      } cursor-pointer p-2 px-5`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => {
                    if (active) {
                      // Check if a size is selected
                      handleCart(product, active); // Pass selected size
                      notify();
                    } else {
                      error();
                    }
                  }}
                  className="text-white uppercase bg-black rounded py-2 px-5 text-sm"
                >
                  Add to Cart
                </button>
              </div>
              <div className="border-t border-[[#F3F4F6]  pt-6">
                <p className="text-[#6B7280]">100% Original product.</p>
                <p className="text-[#6B7280]">
                  Cash on delivery is available on this product.
                </p>
                <p className="text-[#6B7280]">
                  Easy return and exchange policy within 7 days.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPage;
