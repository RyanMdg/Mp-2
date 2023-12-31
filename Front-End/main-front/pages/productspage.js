import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineShoppingBag } from "react-icons/hi";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import ProductComponent from "@/app/components/productComponent";
import Footer from "../src/app/components/footer";

import Link from "next/link";
import "../src/app/globals.css";

const Home = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Products", link: "/productspage", icon: HiOutlineShoppingBag },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(false);

  const navbarClassName = `bg-[#0e0e0e] h-full ${
    open ? "w-40" : "w-16"
  } duration-500 text-gray-100 px-2 fixed top-0 left-0 z-50`;

  return (
    <section className="flex  h-screen  ">
      <title>THE GROCERY HUB | PRODUCTS</title>
      <Link rel="preconnect" href="https://fonts.googleapis.com" />
      <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <Link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
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
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <ProductComponent />
        <Footer />
      </div>
    </section>
  );
};

export default Home;
