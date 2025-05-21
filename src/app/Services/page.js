import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import Service from "../HomeTwo/components/Service";
import BreadCumb from "../About/components/BreadCumb";
import Collect from "../HomeTwo/components/Collect";
import QualitryClean from "@/components/ul/QualitryClean";
import Testimonial from "@/components/ul/Testimonial";
import Faq from "./components/Faq";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const Services = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Service" />
          <Service showItem={8} showTop={true} />
          <Collect />
          <QualitryClean />
          <Testimonial />
          <Faq />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default Services;
