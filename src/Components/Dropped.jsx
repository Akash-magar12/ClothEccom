import { useContext, useEffect, useState } from "react";
import { Context } from "./Store";
import Card from "./Card";
const Dropped = () => {
  const { data, handleCart } = useContext(Context);
  const [dropped, setDropped] = useState([]);
  useEffect(() => {
    setDropped(data.slice(0, 10));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full  mt-4 min-h-full">
      <h2 className="text-3xl border-b-[4px] w-fit mx-auto border-black mb-10 bold lg:text-6xl text-center uppercase">
        Just dropped
      </h2>
      <p className="para text-center mb-4">
        Summer Collection New Modern Design
      </p>

      <div className="flex flex-wrap gap-5 justify-center">
        {dropped.map((d) => (
          <Card
            key={d._id}
            id={d._id}
            img={d.image}
            name={d.name}
            price={d.price}
            handleCart={handleCart}
            // cate={d.category}
            // type={d.subCategory}
          />
        ))}
      </div>
    </div>
  );
};

export default Dropped;
