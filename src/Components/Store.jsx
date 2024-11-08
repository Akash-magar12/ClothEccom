import { createContext, useState } from "react";
import { products } from "../assets/images/assets.js";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const Context = createContext();

// eslint-disable-next-line react/prop-types
const Store = ({ children }) => {
  const [data, setData] = useState(products);
  const [input, setInput] = useState("");
  const [showinput, setShowInput] = useState(false);
  const [filtered, setFiltered] = useState(data);
  const [cart, setCart] = useState([]);

  const handleInput = () => {
    let filtere = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    setFiltered(filtere);
  };

  // console.log(cart);
  const handleCart = (item, selectedSize) => {
    setCart((prev) => {
      // Check if the item with the same ID and size already exists in the cart
      const existingItem = prev.find(
        (cartItem) =>
          cartItem._id === item._id && cartItem.selectedSize === selectedSize
      );

      if (existingItem) {
        // If it exists, increase the quantity
        return prev.map((cartItem) =>
          cartItem._id === item._id && cartItem.selectedSize === selectedSize
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If it doesn't exist, add it to the cart with the selected size and quantity 1
        return [...prev, { ...item, selectedSize, quantity: 1 }];
      }
    });
  };
  const handleAdd = (id, selectedSize) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item._id === id && item.selectedSize === selectedSize) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  };

  const handleSub = (id, selectedSize) => {
    setCart((prev) => {
      // Decrease quantity for the specific item with the selected size
      const updatedCart = prev.map((item) => {
        if (item._id === id && item.selectedSize === selectedSize) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      // Remove items with quantity 0
      const filteredCart = updatedCart.filter((item) => item.quantity > 0);
      return filteredCart;
    });
  };

  const notify = () => toast.success("Product Added");
  const error = () => toast.error("Must select a size");

  return (
    <Context.Provider
      value={{
        data,
        handleInput,
        notify,
        error,
        products,
        setData,
        input,
        setInput,
        showinput,
        setShowInput,
        filtered,
        setFiltered,
        handleCart,
        cart,
        setCart,
        handleAdd,
        handleSub,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
