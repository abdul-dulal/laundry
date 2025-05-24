import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import About from "@/components/ul/About";

import Contact from "./components/Contact";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import Price from "../home-two/components/Price";
import Service from "../home-two/components/Service";

const AboutUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
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
