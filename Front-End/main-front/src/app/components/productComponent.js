import "../globals.css";

const ProductComponent = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-[#1A272A] w-screen p-24">
        <h1 className=" text-white p-5 text-4xl font-bold">The Grocery Hub</h1>
        <div className="flex gap-7">
          <img
            className=" w-[7rem] rounded-full"
            src="/cat-canned.jpg"
            alt=""
          />
          <img className=" w-[7rem] rounded-full" src="/cat-fruit.jpg" alt="" />
          <img className=" w-[7rem] rounded-full" src="/cat-meats.jpg" alt="" />
          <img
            className=" w-[7rem] rounded-full"
            src="/cat-coffee.jpg"
            alt=""
          />
          <img
            className=" w-[7rem] rounded-full"
            src="/cat-vegetables.jpg"
            alt=""
          />
          <img className=" w-[7rem] rounded-full" src="/cat-snack.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductComponent;
