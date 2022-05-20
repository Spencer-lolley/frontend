import React, { useState } from "react";
import Link from "next/link";
import { Meta, SProviderLayout, SProviderNav } from "../../components";
import { AiFillStar } from "react-icons/ai";

export default function Profile() {
  const [toggleState, setToggleState] = useState("Services");
  const active =
    "text-gray-900 underline underline-offse  t-4 decoration-red-900/100 ";
  const innactive = "text-gray-600 no-underline hover:undeline";

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="relative flex bg-GreyBackground">
      <Meta title="Profile" />

      <SProviderLayout />
      <div className="absolute right-0 flex items-center justify-center m-8">
        <p className="mr-4 font-bold">User Name</p>
        <img src="" className="w-10 h-10 bg-gray-900 rounded-full" alt="" />
      </div>
      <div className="block w-full mx-10 my-32 space-x-4 md:flex">
        <div className="relative flex items-center justify-center w-1/4 text-black bg-white rounded-3xl">
          <div className="flex flex-col items-center justify-center my-4 mt-4">
            <img
              src=""
              alt="Profile image"
              className="w-32 h-32 rounded-full bg-GreyBackground"
            />
            <div className="mt-2 text-YellowText">
              <p>Catoris barbershop</p>
            </div>
            <p className="mt-2 font-bold uppercase">Professional</p>
            <div className="flex items-center justify-center mt-2 text-YellowText">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-center mt-2 text-YellowText">
                <p className="uppercase">Business Hours</p>
              </div>
              <div className="flex items-center justify-center mt-10 text-white">
                <Link href="#" passHref>
                  <a className="px-2 py-1 rounded bg-RedBackground">
                    Set Up Business Hours
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-3/4 mr-8">
          <div className="flex justify-between mx-4 font-semibold uppercase">
            <div
              className={`${toggleState === "Services" ? active : innactive}`}
              onClick={() => toggleTab("Services")}
            >
              Services
            </div>
            <div
              className={`${toggleState === "Reviews" ? active : innactive}`}
              onClick={() => toggleTab("Reviews")}
            >
              Reviews
            </div>

            <div
              className={`${toggleState === "Product" ? active : innactive}`}
              onClick={() => toggleTab("Product")}
            >
              Product
            </div>
          </div>
          <div
            className={
              toggleState === "Services"
                ? "active-content relative w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <div className="flex items-center justify-center mt-16">
              <Link href="#" passHref>
                <a className="px-2 py-1 text-white rounded bg-RedBackground">
                  Set up Services
                </a>
              </Link>
            </div>
          </div>

          <div
            className={
              toggleState === "Reviews"
                ? "active-content relative  w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <p className="m-4 font-semibold">No Reviews Here Yet.</p>
          </div>

          <div
            className={
              toggleState === "Product"
                ? "active-content relative flex items-center justify-center w-full text-black bg-white rounded-3xl h-1/2"
                : "content relative flex items-center justify-center w-full text-black bg-white rounded-3xl h-1/2"
            }
          >
            <div className="flex items-center justify-center mt-16">
              <Link href="#" passHref>
                <a className="px-2 py-1 text-white rounded bg-RedBackground">
                  Add Products
                </a>
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full mt-4 text-black bg-white rounded-3xl h-1/2 ">
            <div className="items-center justify-center space-x-2 md:flex">
              <div className="w-1/2">
                <div className="w-full bg-white rounded-3xl">
                  <Link href="#" passHref>
                    <a className="px-2 py-1 text-white rounded bg-RedBackground">
                      Add Images
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/2">
                <iframe
                  className="rounded-l-none rounded-3xl"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin"
                  width="380"
                  height="200"
                  frameborder="0"
                  // style="border:0;"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
