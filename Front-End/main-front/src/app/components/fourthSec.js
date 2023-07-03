import React from "react";
import { BsHeartPulse } from "react-icons/bs";
import { FaRegLemon } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { HiEyeDropper } from "react-icons/hi2";

export default function FourthSecourthSec() {
  return (
    <div className="flex flex-col items-center container bg-[rgb(250,250,248)] pb-8 sm:pb-10 md:pb-28">
      <h1 className="text-center mt-6 text-xl sm:text-1xl md:text-1xl font-san-serif">
        WHY TOP PRODUCTS?
      </h1>
      <h1 className="lg:text-2xl text-center mb-4 sm:mb-6 md:mb-10 text-xl font-san-serif">
        100% NATURAL, 100% ORGANIC
      </h1>
      <div className="relative w-full max-w-screen-sm">
        <img src="/image/banner1.jpg" alt="Hero Image" />
        <div className="absolute top-0 left-0">
          <BsHeartPulse className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-300" />
          <h1 className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-san-serif">
            Good for health
          </h1>
        </div>
        <div className="absolute top-0 right-0">
          <FaRegThumbsUp className="w-8 h-8 sm:w-12 font-thin sm:h-12 md:w-16 md:h-16 text-orange-300" />
          <h1 className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-san-serif">
            High Nutrition
          </h1>
        </div>
        <div className="absolute bottom-0 left-0">
          <FaRegLemon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-300" />
          <h1 className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-san-serif">
            Always fresh
          </h1>
        </div>
        <div className="absolute bottom-0 right-0">
          <HiEyeDropper className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-orange-300" />
          <h1 className="mt-1 sm:mt-2 md:mt-3 text-sm sm:text-base md:text-lg font-san-serif">
            No fertilizer
          </h1>
        </div>
      </div>
    </div>
  );
}
