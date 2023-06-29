import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ProdList = () => {
  const [productsList, setProductsList] = useState(null);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get("http://localhost:3001/react");
        setProductsList(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProductList();
  }, []);

  return (
    <div className="grid grid-cols-4 mt-5">
      {productsList ? (
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
        <div>lofainf</div>
      )}
    </div>
  );
};

export default ProdList;
