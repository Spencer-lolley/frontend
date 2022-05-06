import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
} from "../components";
import Nav from "../components/Layout/Nav";

export default function Home() {
  return (
    <Layout>
      <Meta title="Beauty Shop" />
      <HeaderMain />
      <TrendingProductsCarousel />
      <Categories />
      <Partners />
      <DiscountBanner />
      <Testimonial />
      <HeaderSearch />
      <OfficalBrands />
      <TrendingProductsCarousel />
      <Header />
      <RecommendedProducts />
      <TrendingProducts />
      <FeaturedProducts />
      {/* <Nav /> */}
    </Layout>
  );
}
