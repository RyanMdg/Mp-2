import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterest } from "react-icons/bi";
import { FiLinkedin } from "react-icons/fi";

const footer = () => {
  return (
    <div className=" bg-[#F8F8F8] pb-10">
      <ul className=" uppercase flex justify-center pt-10 gap-12">
        <li>About us</li>
        <li>out team</li>
        <li>faq</li>
        <li>contact us</li>
      </ul>
      <div className=" mt-16">
        <div className="grid grid-cols-3 max-w-[80rem] mx-auto gap-7">
          <div>
            <ul className=" text-[#818181c9] text-[1rem] flex flex-col gap-2">
              <li>+639154846056</li>
              <li>Vista Verde Phase 3 Caloocan City</li>
              <li>info@gmail.com</li>
              <li>Mon-Fri: 10:00AM-10:00PM</li>
            </ul>
          </div>
          <div className="">
            <div>
              <h1 className=" flex w-[21rem] text-[1.5rem] font-semibold  flex-col bg-[#0f0d0de0]  uppercase px-10 py-2 text-[#fff]">
                the grocery hub
                <span className="text-[.5rem] relative right-10 bottom-2 flex justify-end">
                  online grocery store
                </span>
              </h1>
            </div>

            <div className="flex justify-center gap-4 pb-14 pt-5">
              <BiLogoFacebook size={18} />
              <BiLogoTwitter size={18} />
              <BiLogoPinterest size={18} />
              <FiLinkedin size={18} />
            </div>
          </div>
          <div className=" text-end text-[#818181c9]">
            <h1 className=" uppercase">Subscribe newsletter</h1>
            <span className=" ps-4">
              Subscribe to the Panda eCommerce Newsletter updates from your
              favourite products.
            </span>
            <div className="flex p-5 justify-end">
              <input
                type="text"
                className="border outline-none border-[#7b7b7ba6] rounded-sm h-10 w-[14rem]"
                placeholder="Email Addrres"
              />
              <label
                htmlFor=""
                className="bg-[#333333] text-white px-8 flex items-center"
              >
                Submit
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr className="bg-[#818181c9]" />
      <h1 className="flex justify-center text-[#818181c9] mt-7">
        © Copyright 2023, Developed by Ryan De Guia & Jellica Joy . All rights
        reserved.
      </h1>
    </div>
  );
};

export default footer;
