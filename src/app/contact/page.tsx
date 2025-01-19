import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="ml-[15vw] md:ml-[30vw]">
        <div className="text-4xl font-bold md:ml-[6vw] bg-red mt-10">
          Get In Touch With Us
        </div>
        <div className="text-gray-500 w-[40vw] items-center justify-center flex">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </div>
      </div>
      <div className="xl:flex gap-20 mt-20 ml-[30vw] mb-10 mt-">
        <div>
          <div className="flex gap-5">
            <div>
              <Image src="/logo10.png" width={22} height={27} alt="Image" />
            </div>
            <div className="w-[30vw] sm:w-[20vw] xl:w-[10vw]">
                <div className="text-lg font-bold">Address</div>
                <div>236 5th SE Avenue, New York NY10000, United States</div>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <div>
              <Image src="/logo11.png" width={22} height={27} alt="Image" />
            </div>
            <div className="w-[30vw] sm:w-[20vw] xl:w-[10vw]">
                <div className="text-lg font-bold">Phone</div>
                <div><div>Mobile: +(84) 546-6789</div>
                 <div>Hotline: +(84) 456-6789</div>
                 </div>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <div>
              <Image src="/logo12.png" width={22} height={27} alt="Image" />
            </div>
            <div className="w-[30vw] sm:w-[20vw] xl:w-[10vw]">
                <div className="text-lg font-bold">Working Time</div>
                <div>
                    <div>Monday-Friday: 9:00 - 22:00
                    </div>
                    <div>Saturday-Sunday: 9:00 - 21:00</div>
                </div>
            </div>
          </div>

        </div>
        <div className="mt-10 xl:mt-0">
            <div className="font-bold">Your name</div>
            <input type="text" placeholder="Abc" className="border-2 w-[30vw] border-gray-500 mt-4 xl:w-[20vw] p-4 rounded-lg"/>
            <div className="font-bold mt-5">Email Address</div>
            <input type="email" placeholder="Abc@def.com" className="border-2 rounded-lg border-gray-500 mt-4 xl:w-[20vw] w-[30vw] p-4"/>
            <div className="font-bold mt-5">Subject</div>
            <input type="text" placeholder="This is an optional" className="xl:w-[20vw] w-[30vw] border-2 rounded-lg border-gray-500 mt-4 p-4"/>
            <div className="font-bold mt-5">Message</div>
            <input type="text" placeholder="Hi! i'd like to ask about" className="w-[30vw] xl:w-[20vw] rounded-lg border-2 border-gray-500 mt-4  p-4"/>
            <div>
            <button className="bg-[#029FAE] p-2 pl-14 mt-10 pr-14 rounded-sm text-white">Submit</button>
            </div> 
        </div>
      </div>
      <div className="w-[67%] ml-80 h-[300px] bg-[#F4F4F4] hidden 2xl:inline-block">
      <Image src="/image2.png" width={1188} height={70} alt="Image" className="items-center justify-end mt-14 mb-10"/>
      </div>
    </div>
  );
};

export default page;