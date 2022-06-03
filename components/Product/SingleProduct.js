import React, { Children } from "react";
import Image from "next/image";

export default function SingleProduct({ productName,productPrice, image, children }) {
  return (
    <>
      <div className="w-full max-w-full mx-auto rounded-lg shadow-lg md:w-11/12 bg-GreyBackground">
        <div className="relative grid grid-cols-1 md:mb-20 md:grid-cols-2 md:gap-10 place-content-center">
          <div className="order-last px-8 md:p-8 md:order-first">
            <h2 className="text-2xl text-gray-500 capitalize md:text-3xl">
              {productName}
            </h2>
            <h3 className="text-2xl font-bold md:mt-8 md:text-3xl text-RedBackground">
              {productPrice}
            </h3>
          </div>
          <div className="relative">
            <div className="hidden md:block product-background">
              <Image
                src="../../Rectangle.png"
                layout="intrinsic"
                width={200}
                height={300}
              />
            </div>
            <div className="flex justify-center md:absolute product-image">
              <Image src={image} layout="intrinsic" width={200} height={200} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
