import Navbar from "../src/app/components/navbar";
import ProductList from "@/app/components/prodList";
import "../src/app/globals.css";

const productlist = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
    </div>
  );
};

export default productlist;
