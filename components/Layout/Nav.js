import React, { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const navigation = [
  { name: "Barber", href: "#", current: true },
  { name: "Salon", href: "#", current: false },
  { name: "Beauty Services", href: "#", current: false },
  { name: "Products", href: "#", current: false },
  {
    name: "Register my Business",
    href: "/serviceProvider/RegisterBusiness",
    current: false,
  },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-30 w-full bg-white shadow-lg">
        <div className="w-full">
          <div className="flex items-center w-full h-20">
            <div className="flex items-center justify-between w-full ml-4 md:mx-16">
              <div className="flex items-center justify-center flex-shrink-1">
                <h1 className="text-3xl font-bold cursor-pointer">Logo</h1>
              </div>
              {/* large monitors */}
              <div className="hidden md:block">
                <div className="flex items-baseline ml-10 space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={
                        item.current
                          ? "text-OrangeText"
                          : "px-3 py-2 rounded-md text-medium text-gray-500 hover:text-OrangeText"
                      }
                      smooth={true}
                      offset={50}
                      duration={500}
                      aria-current={item.current ? "page" : undefined}
                      passHref
                    >
                      <a>{item.name}</a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="mr-6">
                  <Link href="/Login" passHref>
                    <a className="hidden md:block uppercase text-white bg-OrangeText focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-orange-500">
                      Sign up/Login
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/cart" passHref>
                    <div className="relative">
                      <AiOutlineShoppingCart className="text-gray-500 w-7 h-7 hover:text-OrangeText" />
                    </div>
                  </Link>

                  <div className="absolute top-4 right-14">
                    <sub className="rounded-full p-0.5 text-white font-semibold bg-OrangeText">
                      20
                    </sub>
                  </div>
                </div>
              </div>
            </div>

            {/* small screens */}
            <div className="flex mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-white rounded-md bg-OrangeText hover:bg-OrangeText focus:outline-none focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transorm"
          leaveFrom="opacity-200 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="flex flex-col px-4 pt-2 pb-3 space-y-2 bg-white"
              >
                {navigation.map((mobile) => (
                  <Link
                    key={mobile.name}
                    href={mobile.href}
                    smooth={true}
                    offset={50}
                    duration={500}
                    className={
                      mobile.current
                        ? "text-OrangeText"
                        : "py-2 rounded-md text-medium text-gray-500 hover:text-OrangeText"
                    }
                  >
                    {mobile.name}
                  </Link>
                ))}

                <div>
                  <button
                    type="button"
                    className="uppercase text-white bg-OrangeText focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-orange-500"
                  >
                    Sign up/Login
                  </button>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
}
