import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "./components/BreadCumb";

import Service from "../HomeTwo/components/Service";
import About from "@/components/ul/About";
import Price from "../HomeTwo/components/Price";
import Contact from "./components/Contact";

const AboutUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb />
        <About />
        <Service />
        {/* <Price /> */}
        <Contact />
      </main>
      <FooterOne />
    </>
  );
};

export default AboutUs;
