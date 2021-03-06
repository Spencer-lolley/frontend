import React from "react";
import Image from "next/image";

export default function HeaderMain() {
  return (
    <div className="relative object-center w-full px-4 py-16 mx-auto mt-4 overflow-hidden bg-center bg-no-repeat bg-cover bg-HeaderMainBG h-3/4 sm:px-8 lg:px-16 xl:px-20 lg:mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center md:items-start">
          <div className="uppercase md:text-left">
            <h1 className="text-5xl font-bold text-center text-white md:text-left">
              Good hair <br />
              reflects your
              <br /> story and spirit
            </h1>
          </div>
          <div className="w-1/2 p-4 mt-10 text-center bg-white rounded-full ">
            <button
              href="/"
              className="font-semibold uppercase text-OrangeText"
            >
              Shop now
            </button>
          </div>
        </div>

        <div className="hidden text-center md:block">
          <div>
            <span className="circle"></span>
          </div>
          <div className="absolute z-0 -bottom-3 ">
            <Image
              src="HeaderImage1.png"
              layout="intrinsic"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute z-10 -bottom-3 -right-0.5">
            <Image
              src="HeaderImage2.png"
              layout="intrinsic"
              width={550}
              height={550}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
