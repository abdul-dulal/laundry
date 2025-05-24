import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import About from "@/components/ul/About";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import Price from "../home-two/components/Price";
import Service from "../home-two/components/Service";
import BreadCumb from "@/components/ul/BreadCumb";
import Solutaion from "./components/Solutaion";
import GetService from "./components/GetService";

const Aboutus = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="About Us" />
          <About />
          <Service showItem={4} />
          <Solutaion />
          <Price />
          <GetService showBottom={true} showTop={true} />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default Aboutus;
