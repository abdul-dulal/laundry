import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";

import Clean from "./components/Clean";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

import Price from "../home-two/components/Price";
import Trends from "../home-two/components/Trends";
import BreadCumb from "@/components/ul/BreadCumb";

const PricePackage = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb />
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
