import HeaderTwo from "@/components/header/HeaderTwo";
import React from "react";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Service from "./components/Service";
import Collect from "./components/Collect";
import Production from "./components/Production";
import Team from "./components/Team";
import Price from "./components/Price";
import FooterOne from "@/components/footer/FooterOne";
import Testimonial from "./components/Testimonial";
import Trends from "./components/Trends";
import SmoothScrollerProvider from "@/utils/SmoothScrollWrapper";

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <SmoothScrollerProvider>
          <Hero />
          <Vision />
          <Service showItem={4} showTop={false} />
          <Collect />
          <Production />
          <Team />
          <Price />
          <Testimonial />
          <Trends />
          <FooterOne />
        </SmoothScrollerProvider>
      </main>
    </>
  );
};

export default HomeTwo;
