import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="Parent flex justify-around h-[84px] bg-[#F0F2F3] items-center text-[#272343]">
        <div className="flex gap-1 text-2xl items-center ">
        <Image src="/Logo.png" width={40} height={40} alt="Image" className="h-11"/>
            Comforty
        </div>
        <div>
            <Link href="/cart" className="flex gap-2 p-5 items-center bg-[#FFFFFF] h-12">
            <Image src="/Buy 2.png" width={20} height={15} alt="Image" />cart
            <Image src="/No.png" width={20} height={15} alt="Image" />
            </Link>
        </div>
      </div>
      <div>
        <nav className="flex justify-around text-sm xl:text-base gap-2 text-[#636270] h-16 border-2 items-center">
            <ul className="flex gap-5 items-center font-thin-100 cursor-pointer">
                <Link href="/" className="hover:text-[#007580] focus:text-[#007580]">Home</Link>
                <Link href="/" className="hover:text-[#007580] focus:text-[#007580]">Shop</Link>
                <Link href="/product" className="hover:text-[#007580] focus:text-[#007580]">Product</Link>
                <Link href="/" className="hover:text-[#007580] focus:text-[#007580]">Pages</Link>
                <Link href="/about" className="hover:text-[#007580] focus:text-[#007580]">About</Link>
            </ul>
            <ul className="items-center cursor-pointer">
                <Link href="/contact" className="hover:text-[#007580] focus:text-[#007580]">Contact:  <span className="font-bold hidden md:inline-block"> (808) 555-0111</span></Link>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;