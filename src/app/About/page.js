import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "./components/BreadCumb";

import Service from "../HomeTwo/components/Service";
import About from "@/components/ul/About";
import Price from "../HomeTwo/components/Price";
import Contact from "./components/Contact";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const AboutUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="About Us" />
          <About />
          <Service showItem={4} />
          <Price />
          <Contact showBottom={true} showTop={true} />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default AboutUs;
