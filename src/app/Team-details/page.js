import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import FooterOne from "@/components/footer/FooterOne";
import Details from "./components/Details";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const TeamDetails = () => {
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

export default TeamDetails;
