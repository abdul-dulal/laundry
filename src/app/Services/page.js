import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import QualitryClean from "@/components/ul/QualitryClean";
import Testimonial from "@/components/ul/Testimonial";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import Collect from "../home-two/components/Collect";
import Service from "../home-two/components/Service";
import BreadCumb from "@/components/ul/BreadCumb";
import QuestionAndAnswer from "@/components/ul/QuestionAndAnswer";

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
          <QuestionAndAnswer />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default Services;
