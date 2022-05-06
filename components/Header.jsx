import React from "react";
import { BsCart3 } from "react-icons/bs";

export default function Header() {
  return (
    <div
      className="relative object-center w-full px-4 py-16 mx-auto mt-4 overflow-hidden bg-center bg-no-repeat bg-cover sm:px-8 lg:px-16 xl:px-20 lg:mt-4"
      style={{
        backgroundImage: "url('/image 19.jpg')",
      }}
    >
      <div className="items-center block py-32 md:flex md:flex-wrap md:justify-between">
        <div className="absolute right-0 p-4 bg-white rounded-lg rounded-r-none">
          {" "}
          <BsCart3 className="w-full" />
        </div>
      </div>
    </div>
  );
}
