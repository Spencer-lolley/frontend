import React from "react";
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-full h-screen overflow-y-hidden bg-GreyBackground">
      <div className="w-full">
        <div className="relative grid grid-cols-1 md:grid-cols-3">
          <div className="hidden col-span-2 md:block">
            <div className="absolute rec1 bg-red"></div>

            <div className="absolute rec2 bg-red"></div>
            <div className="flex items-center justify-center">
              <div className="absolute text-2xl uppercase align-middle top-1/2">
                  <span className="font-bold">Company</span><span>Logo</span>
              </div>
            </div>
          </div>
          <div className="w-full h-screen bg-white md:relative md:basis-1/2">
            <div className="flex items-center justify-center">
              <div className="absolute mt-10 text-center top-1/4">
                <h3 className="mb-10 text-3xl font-bold text-RedBackground">
                  Login
                </h3>

                <div className="flex flex-col text-sm uppercase">
                  <Link href="/Clogin" passHref>
                    <a className="px-6 py-2 mb-10 text-white bg-black rounded-full">
                      As Client
                    </a>
                  </Link>
                  <Link href="/SPlogin" passHref>
                    <a className="px-6 py-2 text-white bg-black rounded-full">
                      As Service Provider
                    </a>
                  </Link>
                  <Link href="#" passHref>
                      <a className="mt-10 font-semibold capitalize">Forgot Password?</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
