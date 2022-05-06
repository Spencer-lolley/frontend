import Link from "next/link";
import React from "react";

const categories = [
  {
    imgSrc: "/categories/category1.jpg",
    href: "#",
    categoryName: "Facials",
  },
  {
    imgSrc: "/categories/category2.jpg",
    href: "#",
    categoryName: "Beauty",
  },
  {
    imgSrc: "/categories/category3.jpg",
    href: "#",
    categoryName: "Facials",
  },
  {
    imgSrc: "/categories/category4.jpg",
    href: "#",
    categoryName: "Barber",
  },
  {
    imgSrc: "/categories/category5.jpg",
    href: "#",
    categoryName: "Facials",
  },
  {
    imgSrc: "/categories/category6.jpg",
    href: "#",
    categoryName: "Wigs",
  },
  {
    imgSrc: "/categories/category7.jpg",
    href: "#",
    categoryName: "Nails",
  },
  {
    imgSrc: "/categories/category8.jpg",
    href: "#",
    categoryName: "Make Up",
  },
];
export default function Categories() {
  return (
    <div className="w-full mx-auto mt-10">
      <div className="font-semibold uppercase categories-heading text-RedBackground">
        <h1 className="text-center md:text-2xl">Find your beauty match</h1>
      </div>
      <div className="grid grid-cols-1 mx-auto my-10 text-center text-white md:grid-cols-4">
        {categories.map((category, index) => (
          <div className="relative group" key={index}>
            <div>
              <img src={category.imgSrc} alt="" />
            </div>
            <div className="absolute flex justify-center w-full h-auto text-center transition duration-300 bottom-1 sm:bottom-4 sm:h-12">
              <a
                href={category.href}
                className="text-3xl font-bold text-white uppercase group-hover:text-OrangeText"
              >
                {category.categoryName}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
