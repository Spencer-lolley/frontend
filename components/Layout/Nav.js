import React, { useState } from "react";
import { Link } from "react-scroll";
import { Transition } from "@headlessui/react";

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
      <nav className="shadow-lg sticky top-0 z-30 w-full bg-white">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center md:mx-16 ml-4 justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-1">
                <h1 className="font-bold text-3xl cursor-pointer">Logo</h1>
              </div>
              {/* large monitors */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
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
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <button
                  type="button"
                  className="uppercase text-white bg-OrangeText focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mr-3 md:mr-0 hover:bg-orange-500"
                >
                  Sign up/Login
                </button>
              </div>
            </div>

            {/* small screens */}
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-OrangeText inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-OrangeText focus:outline-none focus:ring-offset-2 focus:ring-offset-orange-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
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
                    className="block h-6 w-6"
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
                className="bg-white px-4 pt-2 pb-3 space-y-2 flex flex-col"
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
