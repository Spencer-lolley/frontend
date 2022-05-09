import React, { useRef } from "react";
import data from "../../utils/data";
import CarouselCard from "../carousel/CarouselCard";
import CarouselNav from "../carousel/CarouselNav";
export default function FeaturedProductsCarousel() {
    const color="bg-gray-500";
  const myRef = useRef();
  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;

    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };
  return (
    <div className="max-w-2xl mx-auto mb-4 md:max-w-7xl">
      <div className="px-8">
        <h2 className="my-4 font-bold uppercase">Featured Products</h2>
      </div>
      <div className="wrapper">
        <div className="app" ref={myRef}>
          {data.featuredProducts.map((product) => (
            <CarouselCard
              key={product.id}
              href={product.href}
              productName={product.productName}
              imgSrc={product.imgSrc}
              imageAlt={product.imageAlt}
              price={product.price}
              sold={product.sold}
              rating={product.rating}
              color={color}
            />
          ))}
        </div>
        <CarouselNav prev={prevClick} next={nextClick} />
      </div>
    </div>
  );
}
