import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BarChart, Meta, SProviderLayout } from "../../components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";


export default function Dashboard() {
  const [date, setDate] = useState([new Date()]);
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="relative flex bg-GreyBackground">
      <Meta title="Dashboard" />
      <SProviderLayout />

      <div className="block w-full mx-10 my-32 md:grid md:grid-cols-3 gap-10">
        <div className="w-full bg-white rounded-lg p-10">
          <h2 className="text-RedBackground text-3xl font-bold">889</h2>
          <p className="font-semibold mt-6">
            Clients through out the last year
          </p>
        </div>
        <div className="w-full bg-white rounded-lg p-10">
          <h2 className="text-RedBackground text-3xl font-bold">500,445</h2>
          <p className="font-semibold mt-6">Total Amount Transacted</p>
        </div>
        <div className="w-full bg-white rounded-lg">
          <div className="m-4">
            <Calendar
              onChange={onChange}
              value={date}
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-lg col-span-2 p-6">
          <p className="font-semibold uppercase">Annual Growth</p>
          <BarChart />
        </div>
        <div className="w-full">
          <div className="flex justify-between mb-4">
            <p>Appointments</p>
            <p>
              Jan 20,2021
            </p>
          </div>

          <div className="bg-white rounded-lg">
            <div className="flex justify-between p-4 items-center">
              <div className="flex space-x-4">
                <Image
                  src="../../testimonials/testimony 2.png"
                  width={30}
                  height={30}
                />
                <p className="text-gray-500">User-1 Setvice-1</p>
              </div>
              <button className="bg-RedBackground text-white px-4 rounded-lg">
                <Link href="" passHref>
                  <a>View</a>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
