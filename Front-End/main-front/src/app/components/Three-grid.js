import { useState, useEffect } from "react";
import axios from "axios";
const threegrid = () => {
  const [productsList, setproductsList] = useState(null);

  useEffect(() => {
    const fetchProductlist = async () => {
      try {
        const response = await axios.get("http://localhost:3001/react");

        setproductsList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchProductlist();
  }, []);

  const limitedProducts = productsList && productsList.slice(0, 3);

  return (
    <div className="flex justify-center gap-6 m-10">
      {limitedProducts &&
        limitedProducts.map((product) => (
          <div key={product.id} className=" ms-10 mb-10">
            <img
              className=" w-60"
              src={`http://localhost:3001/${product.image}`}
              alt=""
            />

            <div className=" flex flex-col items-center gap-2">
              <h1 className=" font-semibold text-xl text-slate-500">
                {product.productName}
              </h1>
              <span className=" text-lg"> ₱{product.price}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default threegrid;
