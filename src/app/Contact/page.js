import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import FooterOne from "@/components/footer/FooterOne";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";
import BreadCumb from "@/components/ul/BreadCumb";
const ContactUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <BreadCumb currentPage="Contact" />
          {/* <Contact showBottom={false} />
          <Faq /> */}
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default ContactUs;
