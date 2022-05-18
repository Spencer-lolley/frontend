import React from 'react'
import Link from 'next/link';

export default function Clogin() {
  return (
    <div className="w-full h-screen overflow-y-hidden bg-GreyBackground">
      <div className="w-full">
        <div className="relative grid grid-cols-1 md:grid-cols-3">
          <div className="hidden col-span-2 md:block">
            <div className="absolute rec1 bg-red"></div>

            <div className="absolute rec2 bg-red"></div>
            <div className="flex items-center justify-center">
              <div className="absolute text-2xl uppercase align-middle top-1/2">
                <span className="font-bold">Company</span>
                <span>Logo</span>
              </div>
            </div>
          </div>
          <div className="w-full h-screen bg-white md:relative md:basis-1/2">
            <div className="flex items-center justify-center">
              <div className="absolute mt-10 text-center top-1/4">
                <h3 className="mb-10 text-3xl font-bold text-RedBackground">
                  Log In as 
                  
                  Client
                </h3>

                <div className="flex flex-col text-sm uppercase">
                  <form>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-2 text-sm border rounded-full border-RedBackground focus:outline outline-red-500"
                      />
                    </div>
                    <div className="mt-6">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 text-sm border rounded-full border-RedBackground focus:outline outline-red-500"
                      />
                    </div>
                    <div className="my-6">
                      <input
                        type="submit"
                        value="log in"
                        className="px-6 py-2 text-white uppercase bg-black rounded-full"
                      />
                    </div>
                    <div>
                      <Link href="#" passHref>
                        <a className="mt-10 font-semibold capitalize">
                          Forgot Password?
                        </a>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
