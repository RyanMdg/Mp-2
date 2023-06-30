import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

const threegrid = () => {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/react");

        // Randomize the order of the products
        const randomizedList = response.data.sort(() => 0.5 - Math.random());

        setProductsList(randomizedList);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductList();
  }, []);

  const limitedProducts = productsList && productsList.slice(0, 4);

  return (
    <div>
      <div className="flex mt-10 flex-col items-center">
        <h1 className=" ">Top Products</h1>
        <div className="bg-[#fe9737b1]  relative bottom-5 h-10 w-14"></div>
      </div>
      <div className="grid md:grid-cols-4 w-[90%] m-10">
        {limitedProducts &&
          limitedProducts.map((product) => (
            <Link
              href={`/product/${product._id}`}
              key={product.id}
              className="ms-10 flex flex-col items-center border border-[#605e5e46] shadow-lg hover:translate-y-[-1rem] duration-300 transition-all rounded-md mb-10"
            >
              <img
                className="w-fit overflow-hidden mb-3"
                src={`http://localhost:3001/${product.image}`}
                alt=""
              />

              <div className="flex flex-col items-center gap-2">
                <h1 className="text-[1rem] text-[#605e5e]">
                  {product.productName}
                </h1>
                <span className="text-[1.1rem] text-[#605e5eb5]">
                  ₱{product.price}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default threegrid;
