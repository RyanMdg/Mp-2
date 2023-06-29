import { useRouter } from "next/router";
import { useState, useEffect } from "react";
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

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {product._id}</p>
      <p>Product Name: {product.productName}</p>
      <p>Price: ₱{product.price}</p>
      {/* Render other product details */}
    </div>
  );
};

export default ProductDetail;
