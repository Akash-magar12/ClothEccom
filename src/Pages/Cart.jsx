import { useContext } from "react";
import Navigiation from "../Components/Navigiation";
import { IoAddSharp } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";

import { RiSubtractLine } from "react-icons/ri";
import { Context } from "../Components/Store";
import Back3 from "../Components/Back3";

const Cart = () => {
  const { cart, setCart, handleAdd, handleSub } = useContext(Context);
  console.log(cart);

  const handleDelete = (SelitemId, SelitemSize) => {
    const updatedCart = cart.filter(
      (item) => item._id !== SelitemId || item.selectedSize !== SelitemSize
    );
    setCart(updatedCart);
  };

  const total = cart.reduce((accum, item) => {
    return accum + item.price * item.quantity;
  }, 0);

  const totalPrice = total + 10;
  console.log(cart);

  return (
    <div>
      <Navigiation />
      <div className="mt-4">
        <div className="left x">
          <div className="flex mb-6 w-full justify-between items-center ">
            <h4 className=" text-3xl lg:text-4xl">Your Cart</h4>
            <Back3 />
          </div>

          <div className="w-full">
            {cart.length > 0 ? (
              cart.map((item, id) => (
                <div key={id} className="border p-4 gap-3 flex border-gray-300">
                  <div className="h-24 w-28 ">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between w-full items-center ">
                      <p className="text-sm">{item.name}</p>
                      <p className="text-sm">${item.price * item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-sm">Size :</p>
                      <span className="text-xs border border-gray-700 px-1">
                        {item.selectedSize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex bg-gray-300 rounded px-3 items-center gap-3 w-fit">
                        <span
                          onClick={() => handleSub(item._id, item.selectedSize)}
                          className="text-lg cursor-pointer"
                        >
                          <RiSubtractLine />
                        </span>
                        <span>{item.quantity}</span>
                        <span
                          onClick={() => handleAdd(item._id, item.selectedSize)}
                          className="text-lg cursor-pointer"
                        >
                          <IoAddSharp />
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          handleDelete(item._id, item.selectedSize)
                        }
                        className="bg-red-500 text-white rounded px-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center flex-col items-center mt-10">
                <span className="bg-gray-200 rounded-full h-20 flex items-center justify-center  w-20  text-4xl">
                  <BsHandbag />
                </span>
                <p>No products in the Cart.</p>
              </div>
            )}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="right mt-16">
            <h4 className="mb-10 text-4xl">Cart Total</h4>
            <div className="flex  flex-col gap-1">
              <div className="flex border-b-[1px] pb-1 items-center justify-between">
                <p>Subtotal</p>
                <p>${total}</p>
              </div>
              <div className="flex border-b-[1px] pb-1 items-center justify-between">
                <p>Shipping Fee</p>
                <p>$10.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Total</p>
                <p className="font-semibold">${totalPrice}</p>
              </div>
              <button className="text-white self-end mt-1 w-fit bg-black rounded px-3 py-1 cursor-pointer">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
