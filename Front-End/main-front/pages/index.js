import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import {
  FiMessageSquare,
  FiLinkedin,
  FiFolder,
  FiShoppingCart,
} from "react-icons/fi";
import { BiLogoFacebook, BiLogoTwitter, BiLogoPinterest } from "react-icons/bi";
import Compo from "../src/app/components/hero";
import ProdApi from "../src/app/components/Three-grid";
import Link from "next/link";
import "../src/app/globals.css";
<<<<<<< HEAD
import ProdList from "../src/app/components/productList";
import Productpage from "../src/app/components/productpage";
import FourthSec from "../src/app/components/fourthSec";
=======
import SecondSec from "../src/app/components/secondsection";
>>>>>>> d63875710947d4d22e0939a4904e0be5d7f07a4e

const Home = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Products", link: "/productspage", icon: HiOutlineShoppingBag },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "Cart", link: "/cart", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowModal(true);
    }, 2000); // Delay in milliseconds before showing the modal

    return () => clearTimeout(delay);
  }, []);

  const navbarClassName = `bg-[#0e0e0e] h-full ${
    open ? "w-40" : "w-16"
  } duration-500 text-gray-100 px-2 fixed top-0 left-0 z-50`;

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <title>TGH | Home</title>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <section className="flex h-screen">
        <div className={navbarClassName}>
          <div className="py-3 left flex justify-end">
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            {menus?.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className={`${
                  menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              >
                <div>{React.createElement(menu?.icon, { size: "20" })}</div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre duration-500 ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu?.name}
                </h2>
                <h2
                  className={`${
                    open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit transition-opacity ease-in`}
                >
                  {menu?.name}
                </h2>
              </Link>
            ))}
          </div>
        </div>
<<<<<<< HEAD
      </div>
      <div className=" pl-10">
        <Compo />
        <ProdApi />
        <FourthSec />
      </div>
    </section>
=======
        <div className="pl-10">
          <Compo />
          <SecondSec />
          <ProdApi />
        </div>
      </section>
      {/* {showModal && (
        <div className="fixed top-0 left-0 z-50 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50 transition-opacity duration-50 ease-in">
          <div className="bg-white flex flex-col items-center">
            <img src="/Newsletter.jpg" alt="" />
            <div className="flex flex-col items-center px-10 pt-10 pb-3">
              <h2 className="text-[1.3rem] font-thin">Join Our Mailing List</h2>
              <span className="text-[#45424296]">
                Stay informed! Monthly tips and discount.
              </span>
            </div>
            <div className="flex p-5">
              <input
                type="text"
                className="border outline-none border-[#7b7b7ba6] rounded-sm h-10 w-[14rem]"
              />
              <label
                htmlFor=""
                className="bg-[#333333] text-white px-8 flex items-center"
              >
                Submit
              </label>
            </div>
            <div className="flex gap-4 pb-14 pt-4">
              <BiLogoFacebook size={18} />
              <BiLogoTwitter size={18} />
              <BiLogoPinterest size={18} />
              <FiLinkedin size={18} />
            </div>
          </div>
          <button
            className="px-4 py-2 text-white absolute top-[2rem] right-[31.5rem] text-[2rem] rounded-md mt-4 hover:rotate-90 transition-all duration-300 font-thin"
            onClick={closeModal}
          >
            X
          </button>
        </div>
      )} */}
    </div>
>>>>>>> d63875710947d4d22e0939a4904e0be5d7f07a4e
  );
};

export default Home;
