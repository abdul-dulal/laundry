import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import QualitryClean from "@/components/ul/QualitryClean";
import Testimonial from "@/components/ul/Testimonial";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import Collect from "../home-two/components/Collect";
import Service from "../home-two/components/Service";
import Faqs from "./components/Faqs";

const Services = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <Service showItem={8} showTop={true} />
          <Collect />
          <QualitryClean />
          <Testimonial />
          <Faqs />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default Services;
