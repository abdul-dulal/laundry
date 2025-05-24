import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import FooterOne from "@/components/footer/FooterOne";
import Contact from "../About/components/Contact";
import Faq from "../services/components/Faqs";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const ContactUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Contact" />
          <Contact showBottom={false} />
          <Faq />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default ContactUs;
