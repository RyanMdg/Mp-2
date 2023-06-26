import Breadcrumb from "./breadcrumps";
import AddForm from "./formAddProduct";
import { useState } from "react";

const formAdd = () => {
  const crumbs = [
    { label: "Dashboard /", path: "/" },
    { label: "Add Products", path: "/productadd" },
  ];

  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (newData) => {
    setFormData([...formData, newData]);
  };

  return (
    <div className=" my-5 mx-20">
      <title>Add Product</title>

      <Breadcrumb crumbs={crumbs} />
      <div className="flex justify-between">
        <h1 className=" text-3xl font-semibold">Add Products</h1>
      </div>
      <AddForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default formAdd;
