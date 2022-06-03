import React from "react";
import Head from "next/head";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="mb-2 banner">
        <div className="w-11/12 mx-auto mt-10 overflow-hidden bg-center bg-cover rounded-lg bg-blue lg:mt-20">
          <div className="block py-20 m-8 md:flex md:flex-wrap md:justify-between md:items-center">
            <div className="block md:flex-row">
              <h1 className="text-6xl font-bold text-black uppercase">
                Want to start a
              </h1>
              <h1 className="font-bold text-orange-600 uppercase text-8xl">
                business?
              </h1>
            </div>
            <div>
              <button
                type="button"
                className="px-8 py-5 mr-3 text-xl font-medium text-center bg-orange-600 rounded-full links sign focus:ring-4 focus:outline-none md:mr-0"
              >
                <Link href="./serviceProvider/RegisterBusiness">
                  <a>Register here</a>
                </Link>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between md:m-8">
            <div>
              <h1 className="text-6xl font-bold uppercase text-zinc-100">
                Download App
              </h1>
              <h1 className="text-3xl font-semibold text-zinc-100">
                To discover new
              </h1>
              <h1 className="text-3xl font-semibold text-zinc-100">
                Services and providers
              </h1>

              <div className="flex my-20">
                <div>
                  <img
                    src="./badges/apple-app-store-badge (1).svg"
                    className="w-32"
                  />
                </div>
                <div className="mx-12">
                  {" "}
                  <img
                    src="./badges/google-play-badge.svg"
                    alt="Google Play Badge"
                    className="w-36"
                  />
                </div>
              </div>
            </div>
            <div className="relative w-96">
              <div className="group1">
                <div className="box2">
                  <img src="./Group 101.png" alt="Phone image" />
                </div>

                <div className="box1">
                  <img src="./Group 102.png" alt="Phone image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
