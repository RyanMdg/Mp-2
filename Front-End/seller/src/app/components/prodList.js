import Breadcrumb from "./breadcrumps";
import ProductTable from "./prodListable";
import { useState } from "react";

const productList = () => {
  const [formData, setFormData] = useState([]);
  const crumbs = [
    { label: "Dashboard /", path: "/" },
    { label: "Products List", path: "/productlist" },
  ];
  return (
    <div className=" my-5 mx-20">
      <Breadcrumb crumbs={crumbs} />
      <div className="flex justify-between">
        <h1 className=" text-3xl font-semibold">Product Lists</h1>
        <button className=" text-white bg-slate-600 hover:bg-slate-700 transition p-3 rounded-md">
          <a href="/productadd"> Add Product</a>
        </button>
      </div>
      <ProductTable data={formData} />
    </div>
  );
};

export default productList;
