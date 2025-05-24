import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";

import Clean from "./components/Clean";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import BreadCumb from "../about/components/BreadCumb";
import Price from "../home-two/components/Price";
import Trends from "../home-two/components/Trends";

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
