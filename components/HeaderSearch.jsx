import React from "react";
import { BsCart3 } from "react-icons/bs";

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
          <div className="absolute right-0 p-4 bg-white rounded-lg rounded-r-none z-10">
            {" "}
            <BsCart3 className="w-full" />
          </div>
        </div>
        <div className="absolute inset-6">
            <div className="w-full p-1 bg-white rounded-full">
                <input type='text' className="w-full px-4 py-1 rounded-full outline-none" placeholder="Search"/>
            </div>
        </div>
        <div className="absolute left-0 w-1/2 -bottom-12">
          <img src="hero2.png"></img>
        </div>
        <div className="absolute right-0 w-52 -bottom-4">
          <img src="hero3.png"></img>
        </div>
      </div>
    </div>
  );
}
