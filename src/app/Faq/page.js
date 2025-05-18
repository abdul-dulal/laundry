import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import Faq from "../Services/components/Faq";

const Faqs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb currentPage="Faq" />
        <Faq />
      </main>
      <FooterOne />
    </>
  );
};

export default Faqs;
