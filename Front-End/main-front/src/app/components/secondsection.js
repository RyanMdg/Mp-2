import { LiaShippingFastSolid } from "react-icons/lia";
import { FiThumbsUp } from "react-icons/fi";
import { RiSecurePaymentFill } from "react-icons/ri";

const secondSec = () => {
  return (
    <div className="flex border mt-12 border-[#b4b4b488] max-w-[75rem] mx-auto">
      <div className=" border-r-2  border-[#b4b4b488] py-4 px-12 text-[1rem] flex gap-2 uppercase">
        <LiaShippingFastSolid size={40} color="#FFAD4D" />
        <div className="flex flex-col">
          <h1 className="text-[#504e4e]">Free Shipping & return</h1>
          <span className=" text-[.8rem] text-[#999191c7]">
            Free Shipping For Order over {`\u20B1`}500
          </span>
        </div>
      </div>
      <div className=" border-r-2  border-[#b4b4b488] py-4 px-12 text-[1rem] flex gap-2 uppercase">
        <FiThumbsUp size={40} color="#FFAD4D" />
        <div className="flex flex-col">
          <h1 className="text-[#504e4e]">quality guaranteed</h1>
          <span className=" text-[.8rem] text-[#999191c7]">
            We Offer High quality of products
          </span>
        </div>
      </div>
      <div className="    py-4 px-12 text-[1rem] flex gap-2 uppercase">
        <RiSecurePaymentFill size={40} color="#FFAD4D" />
        <div className="flex flex-col">
          <h1 className="text-[#504e4e]">secure payment</h1>
          <span className=" text-[.8rem] text-[#999191c7]">
            We ensure secure payment!
          </span>
        </div>
      </div>
    </div>
  );
};

export default secondSec;
