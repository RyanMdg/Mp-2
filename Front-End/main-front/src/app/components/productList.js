import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const ProdList = () => {
  const [productsList, setProductsList] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await axios.get(
          "https://miniproject-2-qm9q.onrender.com/react"
        );
        setProductsList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchProductList();
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = productsList
    ? productsList.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div>
      <div className="flex justify-end ">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearch}
          className={`border text-[#464444] border-gray-300 shadow-lg drop-shadow-1xl outline-none px-4 py-2 rounded-lg transition-all duration-500 ${
            isFocused
              ? "transform translate-x-[-30rem] translate-y-[-4rem] w-[20rem] h-14 shadow-lg drop-shadow-2xl "
              : ""
          }`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <div className="grid max-w-[80rem] mx-auto gap-7 md:grid-cols-4 mt-5">
        {isLoading ? (
          <div className="flex items-center w-screen justify-center h-full">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              className="flex flex-col items-center ms-10 mb-10"
              key={product.id}
              href={`/product/${product._id}`}
              passHref
            >
              <div className="border border-[#605e5e46] shadow-lg p-2 rounded-md hover:translate-y-[-1rem] duration-300 transition-all">
                <img
                  className="w-60 mx-auto"
                  src={`https://miniproject-2-qm9q.onrender.com/upload/${product.image}`}
                  alt=""
                />

                <div className="flex flex-col items-center gap-2 mt-2">
                  <h1 className="text-[1rem] text-[#605e5e] text-xl text-center">
                    {product.productName}
                  </h1>
                  <span className="text-lg">₱{product.price}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className=" uppercase font-bold">
            No matching products found 😥
          </div>
        )}
      </div>
    </div>
  );
};

export default ProdList;
