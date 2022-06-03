import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="w-full p-4 mx-auto bg-black sm:p-6">
          <div className="grid grid-cols-2 gap-10 p-10 my-8 sm:gap-6 sm:grid-cols-3">
            <div className="mx-auto">
              <h2 className="mb-6 text-2xl font-bold uppercase text-heading">
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
              <h2 className="mb-6 text-sm font-semibold uppercase text-heading">
                Quick Links
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="#" className="font-bold hover:underline">
                    Shop
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="font-bold hover:underline">
                    Barber?
                  </a>
                </li>
                <li>
                  <a href="#" className="font-bold hover:underline">
                    Beauty Professional?
                  </a>
                </li>
              </ul>
            </div>
            <div className="mx-auto">
              <h2 className="mb-6 text-sm font-semibold uppercase text-heading">
                Talk to us
              </h2>
              <ul className="text-white">
                <li className="mb-4">
                  <a href="mailto:#" className="font-bold hover:underline">
                    info@companyname.com
                  </a>
                </li>
                <li className="mb-4">
                  <a href="tel:+254 711223344" className="hover:underline">
                    +254 711223344
                  </a>
                </li>
                <li>
                  <a href="mailto:#" className="font-bold hover:underline">
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
