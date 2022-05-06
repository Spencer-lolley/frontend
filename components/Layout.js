import React from "react";
import Head from "next/head";
import { Footer, Banner } from "./index";
import Nav from "./Layout/Nav";

export default function Layout({ children }) {
  return (
    <div className="mx-auto bg-white">
      <Nav />
      {children}
      <Banner />
      <Footer />
    </div>
  );
}
