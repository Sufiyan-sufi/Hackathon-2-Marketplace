import Image from "next/image";
import Link from "next/link";
import React from "react";

const Topbar = () => {
  return (
    <div className="w-full bg-[#272343] text-sm xl:text-base text-gray-500 justify-around xl:h-[45px] h-[60px]">
      <div className="flex justify-around items-center pt-2">
        <div className="flex gap-1 items-center">
          <Image src="/tick.png" width={20} height={15} alt="Image" />
          Free shipping on all orders over $50
        </div>
        <div className="flex gap-2 xl:gap-10">
          <div>
            <select
              id="dropdown"
              name="dropdown"
              className="bg-[#272343] outline-none"
            >
              <option value="option1">Eng</option>
              <option value="option2">Urdu</option>
            </select>
          </div>
          <Link href="/faq">Faqs</Link>
          <div className="flex gap-1">
            <Image src="/help.svg" width={20} height={20} alt="Image" />
            Need Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;