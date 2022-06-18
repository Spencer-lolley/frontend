import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Footer, Meta, Nav } from "../components";
import SingleProduct from "../components/Product/SingleProduct";

export default function Payment() {
  return (
    <>
      <Meta title="Payment" />
      <Nav />
      <div className="w-full p-8">
        <SingleProduct
          productName="nice and lovely"
          image={`../../products/productImage.png`}
        >
          <div className="p-8 text-gray-500">
            <div className="flex items-center">
              <span className="text-xl font-semibold mr-4">Payment method:</span>
              <span>
                <Image
                  src="../../mpesa-logo.png"
                  width={150}
                  height={50}
                  alt="M-pesa Logo"
                />
              </span>
            </div>

            <div className="flex flex-wrap my-8 md:space-x-4 justify-between w-full md:w-1/2 text-lg">
              <p>First Name</p>
              <p>Last Name</p>
              <p>07xxxxxxxx</p>
              <p>Nairobi</p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1">
              <div>
                <div className="flex justify-between text-xl font-semibold md:text-2xl">
                  <h4 className="text-gray-500">Total</h4>
                  <h5 className="text-RedBackground">KES 3300</h5>
                </div>

                <div className="flex justify-between text-xl font-semibold md:text-2xl">
                  <h4 className="text-gray-500">Shipping Fee</h4>
                  <h5 className="text-RedBackground">KES 300</h5>
                </div>
              </div>

              <div className="w-2/5 max-w-full my-4 md:ml-auto md:mr-0 text-center text-white mx-auto">
                <button className="w-full px-2 py-1 font-semibold uppercase rounded bg-RedBackground">
                  <Link href="#" passHref>
                    <a>Pay now</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </SingleProduct>
      </div>
      <Footer />
    </>
  );
}
