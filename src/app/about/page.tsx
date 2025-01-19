import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="xl:flex xl:gap-10 ml-[15vw] xl:ml-[25vw] mt-20">
        <div className="xl:w-[30vw] w-[70vw] sm:w-[50vw] h-[40vh] p-5 xl:p-10 bg-[#007580] text-white">
          <div className="font-bold text-base sm:text-lg md:text-2xl">About Us - Comforty</div>
          <div className="text-xs xl:text-base mt-5 xl:mt-0">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.{" "}
          </div>
          <button className="xl:w-[10vw] w-[25vw] md:w-[15vw] h-5vh xl:h-[3vh] bg-gray-300 text-black mt-7 xl:mt-20">
            View collection
          </button>
        </div>
        <div>
          <Image src="/card1.png" width={319} height={290} alt="Image" className="mt-5 md:ml-0 xl-mt-0" />
        </div>
      </div>

      <div className="ml-[14vw]">
        <div className="text-[#272343] text-2xl font-bold ml-[15vw] xl:ml-[25vw] mt-32">
          What Makes Our Brand Different
        </div>

        <div className="xl:flex gap-4 mt-10 items-center">
          <div className="text-[#007580] mt-5 xl:mt-0 p-10 w-72 bg-[#F9F9F9]">
            <Image src="/logo13.png" width={24} height={24} alt="Image" />
            <div className="font-bold mt-3">Next day as standard</div>
            <div className="text-sm mt-4">
              Order before 3pm and get your order the next day as standard
            </div>
          </div>

          <div className="text-[#007580] mt-5 xl:mt-0 p-10 w-72 bg-[#F9F9F9]">
            <Image src="/logo14.png" width={24} height={24} alt="Image" />
            <div className="font-bold mt-3">Made by true artisans</div>
            <div className="text-sm mt-4">
              Handmade crafted goods made with real passion and craftmanship
            </div>
          </div>

          <div className="text-[#007580] mt-5 xl:mt-0 p-10 w-72 bg-[#F9F9F9]">
            <Image src="/logo15.png" width={24} height={24} alt="Image" />
            <div className="font-bold mt-3">Unbeatable prices</div>
            <div className="text-sm mt-4">
              For our materials and quality you won’t find better prices
              anywhere
            </div>
          </div>

          <div className="text-[#007580] mt-5 xl:mt-0 p-10 w-72 bg-[#F9F9F9]">
            <Image src="/logo16.png" width={24} height={24} alt="Image" />
            <div className="font-bold mt-3">Recycled packaging</div>
            <div className="text-sm mt-4">
              We use 100% recycled to ensure our footprint is more manageable
            </div>
          </div>
        </div>
      </div>

      <div className=" gap-10 ml-[15vw] h-auto xl:h-[600px] mt-20">
        <div className="text-[#272343] text-3xl font-bold mt-32">
          Our Popular Products
        </div>
        <div className="xl:flex gap-2 mt-10">
          <div className="text-base">
            <Image src="/card14.png" width={630} height={375} alt="Image" />
            <div className="mt-5">The Poplar suede sofa</div>
            <div className="mt-2">$99.00</div>
          </div>
          <div>
            <Image src="/card15.png" width={305} height={375} alt="Image" />
            <div className="mt-5">The Dandy chair</div>
            <div className="mt-2">$99.00</div>
          </div>
          <div>
            <Image src="/card16.png" width={305} height={375} alt="Image" />
            <div className="mt-5">The Dandy chair</div>
            <div className="mt-2">$99.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;