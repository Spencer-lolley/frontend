import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function DiscountBanner() {
  return (
    <div className="relative w-full p-8 mx-auto bg-black">
      <div className="block p-8 md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="w-full text-center md:text-left">
            <p className="my-4 text-5xl font-bold uppercase md:text-9xl text-YellowText">
              40% off
            </p>
          </div>
          <div className="text-center text-white uppercase md:text-left">
            <p className="mb-2 text-3xl font-bold md:text-4xl">visit our shop for</p>
            <p className="text-3xl md:text-5xl">the best hair products</p>
          </div>
          <div className="mt-10 text-center md:text-left">
            <Link href="#" passHref>
              <a className="px-4 py-2 text-sm text-white uppercase border rounded-full">
                shop now
              </a>
            </Link>
          </div>
        </div>

        <div className="hidden md:block">
          <div>
            <Image src="/discount1.png" width={400} height={400} alt="discount image 1" />
          </div>
          <div className="absolute z-10 bottom-10 right-40">
            <Image src="/discount2.png" width={400} height={400} alt="discount image 2" />
          </div>
          <div className="absolute z-0 bottom-10 right-20">
            <Image src="/discount3.png" width={400} height={400} alt="discount image 3" />
          </div>
        </div>
      </div>
    </div>
  );
}
