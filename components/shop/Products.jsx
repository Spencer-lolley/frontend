import React from "react";
import ProductCard from "../Product/ProductCard";
import data from "../../utils/data";

export default function Products() {
  return (
    <div>
      <div className="max-w-2xl px-4 mx-auto mb-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.products.map((product) => (
            <ProductCard
              key={product.id}
              href={`/product/${product.slug}`}
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
