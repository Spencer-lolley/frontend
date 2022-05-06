import React from "react";
import { BsCart3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function CarouselCard({
  imgSrc,
  imageAlt,
  productName,
  price,
  sold,
  rating,
}) {
  return (
    <div className="p-4 rounded-lg card">
      <div>
        <img src={imgSrc} alt={imageAlt} className="group-hover:opacity-75" />
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="mt-4 text-sm font-semibold">{productName}</h3>
          <p className="mt-1 text-lg font-bold text-gray-900">Ksh.{price}</p>
        </div>
        <div>
          <BsCart3 />
        </div>
      </div>
      <div className="flex items-center justify-between text-gray-500">
        <div>{sold}</div>
        <div className="flex">
          <span className="px-1">
            <AiFillStar className="h-6 w-18" />
          </span>
          <span>{rating}</span>
        </div>
        <div>
          <button className="px-4 bg-orange-600 rounded-md">
            <h4 className="text-white">Buy</h4>
          </button>
        </div>
      </div>
    </div>
  );
}
