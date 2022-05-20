import React, { useState } from "react";
import Link from "next/link";

export default function SProviderNav() {
  const [activeTab, setActiveTab] = useState("services");
  const active = "text-black underline underline-offset-8";
  const innactive = "text-black underline hover:underline-offset-8";
  const toggleTab = () => {
    console.log("Hello world!");
  };
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="tabs">
            <Link href="" passHref onClick={() => toggleTab}>
              <a>Services</a>
            </Link>
            <div>Reviews</div>
            <div>Product</div>
          </div>
        </div>
      </div>
    </>
  );
}
