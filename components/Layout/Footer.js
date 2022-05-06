import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full p-4 bg-black sm:p-6 mx-auto">
          <div className="my-8 grid grid-cols-2 gap-10 sm:gap-6 sm:grid-cols-3 p-10">
            <div className="mx-auto">
              <h2 className="mb-6 text-2xl font-bold text-heading uppercase">
                Logo
              </h2>
              <div className="mb-4">
                <p className="text">
                  {" "}
                  Company name here is comprised of beauty professionals all
                  around the country. Clients can acquire services from the
                  comfort of their home.
                </p>
              </div>
            </div>
            <div className="mx-auto">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Quick Links
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="#" className="hover:underline font-bold">
                    Shop
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline font-bold">
                    Barber?
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline font-bold">
                    Beauty Professional?
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
                Talk to us
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="mailto:#" className="hover:underline font-bold">
                    info@companyname.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+254 711223344" className="hover:underline">
                    +254 711223344
                  </a>
                </li>
                <li>
                  <a href="mailto:#" className="hover:underline font-bold">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </footer>
    </>
  );
}
