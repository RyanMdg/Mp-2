import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Breadcrumb from "./breadcrumps";
import axios from "axios";

const ProductDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

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
    return <div>Loading...</div>;
  }

  const crumbs = [
    { label: "Home >", path: "/" },
    { label: "Products >", path: "/productspage" },
    { label: ` ${product.productName}`, path: "/productspage" },
  ];

  return (
    <div className=" w-screen">
      <div className=" flex  ms-14 mt-14">
        <Breadcrumb crumbs={crumbs} />
      </div>
      <div className="grid mt-11 grid-cols-2">
        {/* GRID FOR IMG PRODUCTS */}
        <div className=" ms-28 flex justify-center">
          <img
            className=" w-[30rem]"
            src={`http://localhost:3001/${product.image}`}
            alt=""
          />
        </div>

        {/* GRID FOR PRODUCTS DETAILS*/}
        <div className="mt-12">
          <p className=" pb-3 text-4xl font-thin"> {product.productName}</p>
          <hr className=" py-3" />
          <p className=" text-3xl text-[#54524D] font-bold">
            {" "}
            ₱{product.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
