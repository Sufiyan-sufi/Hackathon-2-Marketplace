import React from "react";
import Image from "next/image";
const page = () => {
  return (
    <div>
      <div className="flex gap-20 mt-20 ml-[20vw] h-[600px]">
        <div>
          <Image src="/card2.png" width={475} height={407} alt="Image" />
        </div>
        <div className="">
          <div className="text-4xl font-bold">Library Stool</div>
          <div className="text-4xl font-bold">Chair</div>
          <button className="bg-[#029FAE] text-white rounded-2xl p-2 mt-5 mb-5">
            $20.00 USD
          </button>
          <div className="w-[21vw] pt-5 border-t-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </div>
          <button className="bg-[#029FAE] text-white p-4 w-36 rounded-md">
            Add To Cart
          </button>
        </div>
      </div>

      <div className="ml-[20vw] w-[57vw] h-[400px]">
        <div className="text-black font-bold text-xl">FEATURED PRODUCTS</div>
        <div className="flex mt-10 gap-2">
          <div>
            <Image src="/card11.png" width={270} height={263} alt="Image" />
            <div>
                <div>Library Stool Chair</div>
                <div className="font-bold">$99</div>
            </div>
          </div>
          <div>
            <Image src="/card1.png" width={263} height={263} alt="Image" />
            <div>
                <div>Library Stool Chair</div>
                <div className="font-bold">$99</div>
            </div>
          </div>
          <div>
            <Image src="/card13.png" width={263} height={263} alt="Image" />
            <div>
                <div>Library Stool Chair</div>
                <div className="font-bold">$99</div>
            </div>
          </div>
          <div>
            <Image src="/card3.png" width={263} height={270} alt="Image" />
            <div>
                <div>Library Stool Chair</div>
                <div className="font-bold">$99</div>
            </div>
          </div>
          <div>
            <Image src="/card10.png" width={263} height={263} alt="Image" />
            <div>
                <div>Library Stool Chair</div>
                <div className="font-bold">$99</div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;