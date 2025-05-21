import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import FooterOne from "@/components/footer/FooterOne";
import Price from "../HomeTwo/components/Price";
import Trends from "../HomeTwo/components/Trends";
import Clean from "./components/Clean";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const PricePackage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Price Packages" />
          <Clean />
          <Price />
          <Trends />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default PricePackage;
