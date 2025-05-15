import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";
import BreadCumb from "../About/components/BreadCumb";
import FooterOne from "@/components/footer/FooterOne";
import Hero from "./components/Hero";
import Team from "./components/Team";

const OurTeam = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <BreadCumb currentPage="Team" />
        <Hero />
        <Team />
      </main>
      <FooterOne />
    </>
  );
};

export default OurTeam;
