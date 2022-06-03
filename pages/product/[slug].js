import React from "react";
import { useRouter } from "next/router";
import data from "../../utils/data";
import { Meta, Nav, Footer } from "../../components";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import Image from "next/image";
import SingleProduct from "../../components/Product/SingleProduct";

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);

  if (!product) {
    return (
      <div className="flex justify-center w-full mt-10 font-bold text center">
        Product Not Found
      </div>
    );
  }
  return (
    <>
    <Nav />
      <Meta title={product.productName} />
      <div className="px-6 md:m-10">
        <div className="my-6">
          <Link href="/" passHref>
            <a className="text-gray-500 hover:text-OrangeText">
              Back to Products
            </a>
          </Link>
        </div>

        <div>
          <SingleProduct 
          image={`../../products/productImage.png`}
          productName = {product.productName}
          productPrice = {`KES ${product.price}`}
          >
          <div className="relative grid md:mt-10 md:grid-cols-2 md:place-content-center">
            <div className="p-8">
              <span className="text-xl font-bold">Brand: </span>
              <span className="text-gray-500">{product.productName}</span>

              <div className="mt-4">
                <p className="text-xl font-bold">Key Features:</p>
                <ul className="text-gray-500 product-list">
                  {/* {features.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))} */}
                  <li>Perfect for men</li>
                  <li>400 grams</li>
                  <li>Perfect waves for your sculp</li>
                </ul>
              </div>
            </div>
            <div className="relative px-8 mb-4 md:p-8 md:mb-0">
              <div className="flex">
                <span className="flex px-1 text-OrangeText">
                  <AiFillStar size={25} />
                  <AiFillStar size={25} />
                  <AiFillStar size={25} />
                  <AiFillStar size={25} />
                </span>
                <div className="font-semibold">
                  <span className="mx-1">{product.rating}</span>
                  <span>Ratings</span>
                </div>
              </div>

              <div className="mt-10 text-center md:mt-0 md:absolute addCart-btn">
                <button
                  className="px-2 py-1 font-semibold text-white uppercase rounded bg-RedBackground"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
          </SingleProduct>
        </div>
      </div>
    <Footer />
    </>
  );
}
