import Image from "next/image";
import React from "react";

const cart = () => {
  return (
    <div className="lg:flex lg:gap-10">
      <div className="ml-[18vw]">
        <div className="text-lg mt-10 mb-5 ">Bag</div>

        <div className="md:flex gap-3 pb-10 mb-10 border-b-2">
        <div className="">
          <Image src="/card3.png" width={150} height={150} alt="Image" />
        </div>
        <div>
          <div className="text-[#272343]">Library Stool Chair</div>
          <div className="text-gray-500 mt-6">Ashen Slate/Cobalt Bliss</div>
          <div className="text-gray-500 gap-5"><span>Size L </span> <span className="ml-7">Quantity 1 </span></div>
        <div className="flex gap-3 mt-5">
        <Image src="/logo8.png" width={24} height={24} alt="Image" />
        <Image src="/logo9.png" width={24} height={24} alt="Image" />
        </div>
        </div>
        <div className="text-[#111111] ml-[20vw]">MRP: $99</div>
        </div>

        <div className="md:flex gap-3 pb-10 mb-10 border-b-2">
        <div className="">
          <Image src="/card10.png" width={150} height={150} alt="Image" />
        </div>
        <div>
          <div className="text-[#272343]">Library Stool Chair</div>
          <div className="text-gray-500 mt-6">Ashen Slate/Cobalt Bliss</div>
          <div className="text-gray-500 gap-5"><span>Size L </span> <span className="ml-7">Quantity 1 </span></div>
        <div className="flex gap-3 mt-5">
        <Image src="/logo8.png" width={24} height={24} alt="Image" />
        <Image src="/logo9.png" width={24} height={24} alt="Image" />
        </div>
        </div>
        <div className="text-[#111111] ml-[20vw]">MRP: $99</div>
        </div>
      </div>
      <div className="w-[300px] xl:w-[400px] ml-14 xl:ml-0">
        <div className="text-2xl font-bold mt-20">Summary</div>
        <div className="text-base mt-10 flex ">
        <span>Subtotal</span> 
        <span className="font-bold ml-40">$198.00</span>
        </div>
        <div className="text-base mt-5 justify-around">
          <span className="">Estimated Delivery & Handling</span> 
          <span className="font-bold ml-40">Free</span>
        </div>

        <div className="text-base border-t-2 border-b-2 mt-5">
          <span>total</span> 
        <span className="font-bold ml-40"> $198.00</span>
          </div>
          <button className="text-white mb-10 lg:mb-0 bg-[#029FAE] p-5 pl-14 pr-14 mt-10 rounded-[40px]">Member Checkout</button>
      </div>
    </div>
  );
};

export default cart;