"use client";

import { Button, Navbar } from "flowbite-react";
import { CiUser, CiHeart } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

export default function NavbarWithCTAButton() {
  return (
    <Navbar className=" flex  py-10" rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          ShopWithin
        </span>
      </Navbar.Brand>

      <div className="flex ">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className="mt-2 text-[1.1rem]">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" className="mt-2 text-[1.1rem]">
          About
        </Navbar.Link>
        <Navbar.Link href="#" className="mt-2 text-[1.1rem]">
          Services
        </Navbar.Link>
        <Navbar.Link href="#" className="mt-2 text-[1.1rem]">
          Pricing
        </Navbar.Link>
        <Navbar.Link href="#" className="mt-2 text-[1.1rem]">
          Contact
        </Navbar.Link>
        <div className="flex gap-3">
          <Navbar.Link href="#" className=" text-3xl">
            <CiUser />
          </Navbar.Link>
          <Navbar.Link href="#" className=" text-3xl">
            <CiHeart />
          </Navbar.Link>
          <Navbar.Link href="#" className=" text-3xl font-extralight">
            <BsHandbag />
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
