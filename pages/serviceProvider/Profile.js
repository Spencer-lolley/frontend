import React from "react";
import Link from "next/link";
import { Meta, SProviderLayout } from "../../components";
import { AiFillStar } from "react-icons/ai";

export default function Profile() {
  return (
    <div className="flex bg-GreyBackground relative">
      <Meta title="Profile" />
    
      <SProviderLayout />
      <div className="flex justify-center items-center absolute right-0 m-8">
        <p className="font-bold mr-4">User Name</p>
        <img src="" className="bg-gray-900 w-10 h-10 rounded-full" alt="" />
      </div>
      <div className="md:flex block w-full my-32 space-x-4 mx-10">
        <div className="rounded-3xl bg-white text-black relative w-1/4 flex justify-center items-center">
          <div className="mt-4 flex flex-col justify-center items-center my-4">
            <img
              src=""
              alt="Profile image"
              className="bg-GreyBackground w-32 h-32 rounded-full"
            />
            <div className="mt-2 text-YellowText">
              <p>Catoris barbershop</p>
            </div>
            <p className="uppercase font-bold mt-2">Professional</p>
            <div className="mt-2 flex justify-center items-center text-YellowText">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>

            <div className="mt-10">
              <div className="mt-2 text-YellowText flex justify-center items-center">
                <p className="uppercase">Business Hours</p>
              </div>
              <div className="flex justify-center items-center text-white mt-10">
                <Link href="#" passHref>
                  <a className="bg-RedBackground py-1 px-2 rounded">
                    Set Up Business Hours
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col mr-8 w-3/4">
          <div className="rounded-3xl bg-white text-black relative w-full h-1/2 flex justify-center items-center">
            <Link href="#" passHref>
              <a className="bg-RedBackground py-1 px-2 rounded text-white">
                Set up Services
              </a>
            </Link>
          </div>
          <div className="rounded-3xl bg-white text-black relative w-full h-1/2 flex justify-center items-center mt-4   ">
            <div className="md:flex justify-center items-center space-x-2">
              <div className="w-1/2">
                <div className="rounded-3xl bg-white w-full">
                  <Link href="#" passHref>
                    <a className="bg-RedBackground py-1 px-2 rounded text-white">
                      Add Images
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-1/2">
                <iframe
                  className="rounded-3xl rounded-l-none"
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
