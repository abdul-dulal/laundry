import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import FooterOne from "@/components/footer/FooterOne";
import Contact from "../About/components/Contact";
import Faq from "../Services/components/Faq";

const ContactUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb currentPage="Contact" />
        <Contact showBottom={false} />
        <Faq />
      </main>
      <FooterOne />
    </>
  );
};

export default ContactUs;
