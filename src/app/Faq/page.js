import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import BreadCumb from "@/components/ul/BreadCumb";

const Faq = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Faq" />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default Faq;
