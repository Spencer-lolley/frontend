import React from "react";
import ProductCard from "../Product/ProductCard";
import data from "../../utils/data";

export default function RecommendedProducts() {
  return (
    <div>
      <div className="max-w-2xl px-4 mx-auto sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="my-4 font-bold uppercase">Recommended Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data.trendingProducts.map((product) => (
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
