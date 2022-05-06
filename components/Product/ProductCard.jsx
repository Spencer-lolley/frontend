import React from "react";
import { BsCart3 } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";

export default function ProductCard({
  href,
  imgSrc,
  imageAlt,
  productName,
  price,
  sold,
  rating,
}) {
  return (
    <div className="p-4 bg-gray-200 rounded-lg group">
      <a href={href}>
        <div className="overflow-hidden rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={imgSrc}
            alt={imageAlt}
            className="object-cover object-center w-full group-hover:opacity-75"
          />
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
      </a>
    </div>
  );
}
