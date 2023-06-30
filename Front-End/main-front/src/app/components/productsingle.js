import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Breadcrumb from "./breadcrumps";
import axios from "axios";
import QuantityButton from "./quantityBtn";

const SingleProduct = ({ onAddToCart }) => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/react/single/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="flex items-center w-screen justify-center h-full">
        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  const crumbs = [
    { label: "Home >", path: "/" },
    { label: "Products >", path: "/productspage" },
    { label: ` ${product.productName}`, path: "/productspage" },
  ];

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="w-screen">
      <title>TGH | {product.productName}</title>
      <div className="flex ms-14 mt-14">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <div className="grid mt-11 grid-cols-2">
        {/* GRID FOR IMG PRODUCTS */}
        <div className="ms-28 flex justify-center">
          <img
            className="w-[30rem]"
            src={`http://localhost:3001/${product.image}`}
            alt=""
          />
        </div>

        {/* GRID FOR PRODUCTS DETAILS*/}
        <div className="mt-12">
          <p className="pb-3 text-4xl text-[#212120dd] font-thin">
            {" "}
            {product.productName}
          </p>
          <hr className="py-3" />

          <div className="flex flex-col gap-4">
            <p className="text-3xl text-[#54524dd3] font-bold">
              {" "}
              ₱{product.price}
            </p>
            <p className=" pr-24 leading-7 text-[#54524db8]">
              {product.description}
            </p>
            <div className="flex gap-10 mt-7 items-center">
              <p className="text-[#54524db8]">Stock: {product.stock}</p>
              <div className=" text-[#54524db8] items-center flex gap-1">
                Qty:
                <QuantityButton
                  quantity={quantity}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              </div>
            </div>
            <div className="flex mt-5 gap-20 justify-center">
              <button
                className="border border-[#54524D] rounded-md text-[#54524db8] py-2 px-7 text-2xl"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button className="bg-[#54524D] rounded-md text-white py-2 px-7 text-2xl">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
