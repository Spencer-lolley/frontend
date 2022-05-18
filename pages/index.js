import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  Meta,
  Layout,
  TrendingProducts,
  FeaturedProducts,
  RecommendedProducts,
  Header,
  HeaderSearch,
  Testimonial,
  Categories,
  TrendingProductsCarousel,
  HeaderMain,
  OfficalBrands,
  Partners,
  DiscountBanner,
  FeaturedProductsCarousel,
  Products,
} from "../components";
import Login from "./Login";
import { Router } from "next/router";

export default function Home() {
  return (
    <div>
      <Layout>
        <Meta title="Beauty Shop" />
        <HeaderMain />
        <Products />
        <TrendingProductsCarousel />
        <Categories />
        <Partners />
        <DiscountBanner />
        <Testimonial />
        <HeaderSearch />
        <OfficalBrands />
        <TrendingProductsCarousel />
        <FeaturedProductsCarousel />
        <Header />
        <RecommendedProducts />
        <TrendingProducts />
        <FeaturedProducts />
      </Layout>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login /> } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
