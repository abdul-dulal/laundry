import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import About from "@/components/ul/About";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import Price from "../home-two/components/Price";
import Service from "../home-two/components/Service";
import BreadCumb from "./components/BreadCumb";

const AboutUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="AboutUs" />
          <About />
          <Service showItem={4} />
          <Price />

          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default AboutUs;
