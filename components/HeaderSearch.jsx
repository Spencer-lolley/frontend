import React from "react";
import { BsCart3 } from "react-icons/bs";
import Image from "next/image";

export default function HeaderSearch() {
  return (
    <div>
      <div
        className="relative object-center w-full px-4 py-16 mx-auto mt-4 overflow-hidden bg-center bg-no-repeat bg-cover sm:px-8 lg:px-16 xl:px-20 lg:mt-4"
        style={{
          backgroundImage: "url('/hero4.jpg')",
        }}
      >
        <div className="items-center block py-32 md:flex md:flex-wrap md:justify-between">
          <div className="absolute right-0 z-10 p-4 bg-white rounded-lg rounded-r-none">
            {" "}
            <BsCart3 className="w-full" />
          </div>
        </div>
        <div className="absolute inset-6">
          <div className="w-full p-1 bg-white rounded-full">
            <input
              type="text"
              className="w-full px-4 py-1 rounded-full outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="absolute left-0 hidden w-1/2 md:block -bottom-12">
          <Image src="hero2.png" layout="intrinsic" width={500} height={300} />
        </div>
        <div className="hidden absolute md:block right-0.5 w-52 -bottom-4">
          <Image src="hero3.png" layout="intrinsic" width={500} height={800} />
        </div>
      </div>
    </div>
  );
}
