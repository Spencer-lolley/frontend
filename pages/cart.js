import Link from "next/link";
import React from "react";
import { Footer, Meta, Nav } from "../components";
import SingleProduct from "../components/Product/SingleProduct";
export default function () {
  return (
    <>
      <Meta title="Cart" />

      <Nav />
      <div className="px-8 mx-8 mt-10">
        <Link href="/" passHref>
          <a className="text-gray-500 hover:text-OrangeText">
            Back to Products
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center my-4">
        <h3 className="my-2 text-gray-500 uppercase">Your cart is empty</h3>
        <button className="px-6 py-1.5 font-semibold text-white uppercase rounded-lg bg-RedBackground">
          <Link href="/" passHref>
            <a>Start shopping</a>
          </Link>
        </button>
      </div>

      <div className="mx-4 my-20 ">
        <SingleProduct
          image={`../../products/productImage.png`}
          productName="Nice and Lovely"
        >
          <div className="p-8 md:t-20">
            <table className="w-full table-auto md:table-fixed">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="hidden md:block">Seller</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th className="z-auto">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-semibold">
                  <td className="hidden md:block">Marini Nat</td>
                  <td>1</td>
                  <td className="md:text-2xl ">KES 3300</td>
                  <td className="z-auto md:text-2xl text-RedBackground">
                    KES 3300
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </SingleProduct>
        <div className="float-right p-10 mx-4">
          <button className="px-2 py-1 font-semibold text-white uppercase rounded-md bg-RedBackground">
            <Link href="./checkout" passHref>
              <a>Checkout</a>
            </Link>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
