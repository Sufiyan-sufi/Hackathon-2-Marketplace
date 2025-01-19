import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[100vh] xl:h-[400px] mt-10">

      <div className="w-full h-[140vh] xl:h-[400px] border-2 xl:pt-20 sm:pl-52 md:pl-64 pl-2 xl:pl-56 gap-20 xl:flex">

        <div className="first w-[350px] xl:mt-0 mt-10">
          <div className="flex gap-1 text-2xl items-center ">
            <Image
              src="/Logo.png"
              width={40}
              height={40}
              alt="Image"
              className="h-11"
            />
            Comforty
          </div>
          <div className="text-gray-500 text-lg mt-5">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </div>
          <div className="flex gap-5 items-center w-[200px] mt-5">
            <Image
              src="/facebook.png"
              width={38}
              height={38}
              alt="Image"
              className="h-11 items-center"
            />
            <Image
              src="/twitter.png"
              width={38}
              height={38}
              alt="Image"
              className="h-11"
            />
            <Image
              src="/Instagram.png"
              width={38}
              height={38}
              alt="Image"
              className="h-11"
            />
            <Image
              src="/pinterest.png"
              width={38}
              height={38}
              alt="Image"
              className="h-11"
            />
            <Image
              src="/youtube.png"
              width={38}
              height={38}
              alt="Image"
              className="h-11"
            />
          </div>
        </div>

        <div className="second text-lg xl:mt-0 mt-10">
          <div className="text-gray-500">CATEGORY</div>
          <div className="ml-2 xl:ml-0">
          <div className="mt-5">Sofa</div>
          <div>Armchair</div>
          <div>Wing Chair</div>
          <div className="text-[#007580] underline">Desk Chair</div>
          <div>wooden Chair</div>
          <div>Park Bench</div>
          </div>
        </div>

        <div className="third text-lg xl:mt-0 mt-10">
          <div className="text-gray-500">SUPPORT</div>
          <div className="mt-5">Help & Support</div>
          <div>Tearms & Conditions</div>
          <div>Privacy Policy</div>
          <div>Help</div>
        </div>

        <div className="fourth text-lg w-[350px] xl:mt-0 mt-10">
          <div className="text-gray-500">NEWSLETTER</div>
          <div className="">
            <input
              type="email"
              placeholder="Your email"
              className="border-2 w-56 h-10 p-4 text-sm rounded-md"
            />
            <button className="text-white bg-[#029FAE] text-base p-3 rounded-lg ml-3 pl-5 pr-5">
              Subscribe
            </button>
          </div>
          <div className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
      <div className="w-full h-10 justify-around flex items-center">
        <div className="text-gray-500 items-center">
          @ 2021 - Blogy - Designed & Develop by
          <span className="text-black"> Zakirsoft</span>
        </div>
        <div className="items-center p-2 mt-2">
          <Image
            src="/image1.png"
            width={227}
            height={27}
            alt="Image"
            className="h-11 items-center invert"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;