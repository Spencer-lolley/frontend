import React, { useState } from "react";
import Link from "next/link";

export default function SProviderLayout() {
  const [activeTab, setActiveTab] = useState("Profile");
  const active =
    "bg-GreyBackground uppercase flex items-center font-bold py-4 px-6 h-10 w-86";
  const innactive =
    "uppercase flex items-center text-sm font-bold py-4 px-6 h-12 overflow-hidden text-black text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out";
  return (
    <div className="w-2/5 h-screen md:flex md:w-1/4 hidden">
      {" "}
      <div className="absolute min-h-full py-2 shadow-md w-60 bg-RedBackground">
        <div className="flex m-6 text-2xl uppercase">
          <span>
            <h1 className="font-semibold">Company</h1>
          </span>
          <span>Logo</span>
        </div>

        <div>
          <ul className="relative">
            <li className="relative">
              <Link href="/serviceProvider/Profile" passHref>
                <a
                  className={`${activeTab === "Profile" ? active : innactive}`}
                  onClick={() => setActiveTab("Profile")}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Profile
                </a>
              </Link>
            </li>
            <li className="relative">
              <Link href="/serviceProvider/Wallet" passHref>
                <a
                  className={`${activeTab === "Wallet" ? active : innactive}`}
                  onClick={() => setActiveTab("Wallet")}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Wallet
                </a>
              </Link>
            </li>
            <li className="relative">
              <Link href="/serviceProvider/Dashboard" passHref>
                <a
                  className={`${
                    activeTab === "Dashboard" ? active : innactive
                  }`}
                  onClick={() => setActiveTab("Dashboard")}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Admin Dashboard
                </a>
              </Link>
            </li>
            <li className="relative">
              <Link href="/serviceProvider/Appointments" passHref>
                <a
                  className={`${
                    activeTab === "Appointments" ? active : innactive
                  }`}
                  onClick={() => setActiveTab("Appointments")}
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  My Appointments
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolute right-0 flex items-center justify-center m-8">
        <p className="mr-4 font-bold">User Name</p>
        <img src="" className="w-10 h-10 bg-gray-900 rounded-full" alt="" />
      </div>
    </div>
  );
}
