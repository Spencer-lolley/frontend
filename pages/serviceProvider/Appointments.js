import Image from "next/image";
import React from "react";
import { Meta, SProviderLayout } from "../../components";
import Link from "next/link";

export default function Appointments() {
  return (
    <div className="relative flex bg-GreyBackground">
      <Meta title="Appointments" />
      <SProviderLayout />
      

      <div className="block w-full mx-10 my-32 space-x-4 md:flex">
        <div className="w-full bg-white rounded-lg">
          <div>
            <div className="flex items-center justify-between m-6">
              <div className="flex uppercase">
                <Image
                  src="../../testimonials/testimony 2.png"
                  width={60}
                  height={60}
                />
                <div className="flex flex-col justify-center ml-4">
                  <p>User 1</p>
                  <p className="text-gray-500">service 1</p>
                </div>
              </div>
              <button className="px-4 text-white rounded-md bg-YellowText">
                <Link href="#" passHref>
                  <a>View</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg relative">
          <div className="m-6">
            <div className="flex font-semibold uppercase">
              <Image
                src="../../testimonials/testimony 2.png"
                width={120}
                height={120}
              />
              <div className="flex flex-col justify-center ml-4">
                <p>Haircut today at castoris barbershop</p>
              </div>
            </div>

            <div className="mt-6 text-gray-500">
              <p>
                You have an appointment today with{" "}
                <span className="uppercase">client id 112334455 name her</span>{" "}
                today at{" "}
                <span className="p-1 text-white rounded bg-YellowText">
                  10:45am
                </span>
              </p>
            </div>

            <div className="bottom-0 absolute mb-6 mx-auto w-11/12">
              <div className="flex justify-between text-white">
                <button className="bg-RedBackground px-4 rounded py-1 font-semibold">
                  <Link href="#" passHref>
                    <a>Confirm</a>
                  </Link>
                </button>
                <button className="bg-RedBackground px-4 rounded py-1 font-semibold">
                  <Link href="#" passHref>
                    <a>Cancel & Notify</a>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
