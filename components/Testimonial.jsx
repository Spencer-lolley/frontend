import React from "react";
import data from "../utils/data";
export default function Testimonial({}) {
  return (
    <div className="md:p-10 bg-testimonialBackground">
      <div className="m-4 text-center">
        <h1 className="testimonials">Testimonials</h1>
      </div>
      <div className="grid grid-cols-1 gap-6 mx-auto my-10 text-center text-white md:grid-cols-4">
        {data.testimonials.map((testimony) => (
          <div
            key={testimony.id}
            className="block mx-auto mb-8 w-52 rounded-3xl bg-RedBackground"
          >
            <div className="mx-auto -mt-12 overflow-hidden bg-white border-2 rounded-full w-28 border-testimonialCardBackground">
              <img
                src={testimony.imageSrc}
                className="object-cover object-center"
              />
            </div>
            <div className="p-6">
              <p className="mt-4">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="quote-left"
                  className="inline-block w-6 pr-2"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"
                  ></path>
                </svg>
                {testimony.message}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid-cols-2 p-10 mx-auto md:grid">
        <div className="mb-4">
          <h1 className="font-bold uppercase text-testimonialCardBackground md:text-3xl">
            for the latest news & updates
          </h1>
        </div>
        <div className="flex flex-col text-white">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 my-2 text-black outline-none md:w-3/4"
          ></input>
          <button type="submit" className="p-2 uppercase bg-black md:w-1/4">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
