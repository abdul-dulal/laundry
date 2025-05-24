import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import Details from "./components/Details";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const SerViceDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <Details />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default SerViceDetails;
