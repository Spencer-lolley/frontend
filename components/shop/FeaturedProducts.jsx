import React from "react";
import Link from "next/link";
import ProductCard from "../Product/ProductCard";
import data from "../../utils/data";

export default function FeaturedProducts() {
  return (
    <div>
      <div className="max-w-2xl px-4 mx-auto mb-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="my-4 font-bold uppercase">Featured Products</h2>
          </div>
          <div className="flex">
            <h2>
              <Link href="/">
                <a className="my-4 text-xs font-bold text-gray-400 uppercase md:text-lg lg:text-lg">
                  See all
                </a>
              </Link>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              href={product.href}
              productName={product.productName}
              imgSrc={product.imgSrc}
              imageAlt={product.imageAlt}
              price={product.price}
              sold={product.sold}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
