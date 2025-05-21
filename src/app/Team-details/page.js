import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
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
          <BreadCumb currentPage="Team Details" />
          <Details />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default TeamDetails;
