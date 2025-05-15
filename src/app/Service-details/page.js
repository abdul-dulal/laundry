import FooterOne from "@/components/footer/FooterOne";
import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import Details from "./components/Details";

const SerViceDetails = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb currentPage="Service Details" />
        <Details />
      </main>
      <FooterOne />
    </>
  );
};

export default SerViceDetails;
