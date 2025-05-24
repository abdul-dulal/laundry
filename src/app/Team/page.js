import HeaderOne from "@/components/header/HeaderOne";
import HeaderTop from "@/components/header/HeaderTop";
import React from "react";

import FooterOne from "@/components/footer/FooterOne";
import Hero from "./components/Hero";
import Team from "./components/Team";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const OurTeam = () => {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <SmoothScrollerProvider>
          <Hero />
          <Team />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default OurTeam;
