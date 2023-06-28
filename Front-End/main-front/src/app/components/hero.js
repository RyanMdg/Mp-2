import React from "react";

const Hero = () => {
  return (
    <div className=" relative w-screen h-full">
      <div className="absolute inset-0 flex items-center justify-start z-10">
        <div className="container mx-auto px-4">
          <div className="md:w-1/2 min-[320px]:ms-5 ">
            <h1 className="  min-[320px]:text-3xl font-bold text-slate-900 mb-4">
              The Grocery Hub
            </h1>
            <p className="text-lg text-black mb-8 ">
              Bringing Freshness to Your Doorstep
            </p>
            <button className=" text-black border border-black font-bold py-2 px-4 rounded">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className=" z-10 ml-16">
        <img
          src="/1.jpg"
          alt="Hero Image"
          className="absolute inset-0 object-cover h-full "
        />
      </div>
    </div>
  );
};

export default Hero;
