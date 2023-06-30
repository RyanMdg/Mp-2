import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ProdList = () => {
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/react");
        setProductsList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="grid grid-cols-4 mt-5">
      {isLoading ? (
        <div className="flex items-center w-screen justify-center h-full">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : productsList ? (
        productsList.map((product) => (
          <Link
            className="flex flex-col items-center ms-10 mb-10"
            key={product.id}
            href={`/product/${product._id}`}
            passHref
          >
            <img
              className="w-60"
              src={`http://localhost:3001/${product.image}`}
              alt=""
            />

            <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold text-xl text-slate-500">
                {product.productName}
              </h1>
              <span className="text-lg">₱{product.price}</span>
            </div>
          </Link>
        ))
      ) : (
        <div>Error: Failed to fetch data.</div>
      )}
    </div>
  );
};

export default ProdList;
