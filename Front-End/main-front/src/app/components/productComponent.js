import "../globals.css";
import Breadcrumb from "./breadcrumps";

const ProductComponent = () => {
  const crumbs = [
    { label: "Home >", path: "/" },
    { label: "Product Page", path: "/productspage" },
  ];
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-[#1A272A] w-screen p-24">
        <h1 className=" text-white p-5 text-4xl pb-8 font-bold">
          The Grocery Hub
        </h1>
        <div className="flex gap-7">
          <div className=" flex flex-col  items-center gap-7 hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className="hover:scale-90 transition-all duration-300  w-[7rem] rounded-full"
              src="/cat-canned.jpg"
              alt=""
            />
            <p className=" text-white ">Canned</p>
          </div>
          <div className=" flex flex-col items-center gap-7  hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className=" hover:scale-90 transition-all duration-300 w-[7rem]  rounded-full"
              src="/cat-fruit.jpg"
              alt=""
            />
            <p className=" text-white ">Fruits</p>
          </div>
          <div className=" flex flex-col items-center gap-7  hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className=" hover:scale-90 transition-all duration-300 w-[7rem] rounded-full"
              src="/cat-meats.jpg"
              alt=""
            />
            <p className=" text-white ">Meats</p>
          </div>
          <div className=" flex flex-col items-center gap-7  hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className=" hover:scale-90 transition-all duration-300 w-[7rem] rounded-full"
              src="/cat-coffee.jpg"
              alt=""
            />
            <p className=" text-white ">Coffee</p>
          </div>
          <div className=" flex flex-col items-center gap-7 hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className=" hover:scale-90 transition-all duration-300 w-[7rem] rounded-full"
              src="/cat-vegetables.jpg"
              alt=""
            />
            <p className=" text-white ">Vegetables</p>
          </div>
          <div className=" flex flex-col items-center gap-7  hover:translate-y-[-10px]  transition-all duration-300 rounded-full">
            <img
              className=" hover:scale-90 transition-all duration-300 w-[7rem] rounded-full"
              src="/cat-snack.jpg"
              alt=""
            />
            <p className=" text-white ">Snacks</p>
          </div>
        </div>
      </div>
      <div className=" ps-24 pt-5">
        <Breadcrumb crumbs={crumbs} />
      </div>
    </div>
  );
};

export default ProductComponent;
