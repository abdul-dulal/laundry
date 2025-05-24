import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";

import Faq from "../services/components/Faqs";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

import Contact from "../about/components/Contact";

const ContactUs = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <Contact showBottom={false} />
          <Faq />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default ContactUs;
