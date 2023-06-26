"use client";

import { useState } from "react";
import Link from "next/link";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div
        className={`fixed inset-0 bg-gray-900 z-50 ${
          isOpen ? "bg-opacity-50" : "hidden"
        }`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`fixed h-screen bg-white w-64 z-50 transform transition-transform ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800">
          <div className="text-white text-xl font-bold">ShopWithin</div>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md text-gray-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 px-6">
          <ul className="space-y-2">
            {/* Add your navigation links here */}
            <li>
              <Link
                href="/"
                className="flex items-center py-2 text-gray-900 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM7 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm6 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Homes
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex items-center py-2 text-gray-900 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Abouts
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="flex items-center py-2 text-gray-900 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="flex items-center py-2 text-gray-900 hover:text-gray-700"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a8 8 0 0 0-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 0 0-8-8zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        className={` top-4 right-4 p-2 rounded-md text-gray-400 focus:outline-none z-50 ${
          isOpen ? "hidden" : "block"
        }`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hamburger;
