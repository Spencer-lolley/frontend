import React, { useRef } from "react";
import CarouselCard from "../carousel/CarouselCard";
import data from "../../utils/data";
import CarouselNav from "../carousel/CarouselNav";
import Link from "next/link";
export default function TrendingProducsCarousel() {
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
      <div className="flex items-center justify-between px-8">
        <div>
          <h2 className="my-4 font-bold uppercase">Trending Products</h2>
        </div>
        <div className="flex">
          <span>
            <Link href="#">
              <a className="my-4 text-xs font-bold text-gray-500 uppercase md:text-lg lg:text-lg">
                See all
              </a>
            </Link>
          </span>{" "}
        </div>
      </div>
      <div className="wrapper">
        <div className="app" ref={myRef}>
          {data.trendingProducts.map((product) => (
            <CarouselCard
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
        <CarouselNav prev={prevClick} next={nextClick} />
      </div>
    </div>
  );
}
