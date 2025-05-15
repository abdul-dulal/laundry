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

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Hero />
        <Vision />
        <Service showItem={4} />
        <Collect />
        <Production />
        <Team />
        {/* <Price /> */}
        <Testimonial />
        <Trends />
      </main>
      <FooterOne />
    </>
  );
};

export default HomeTwo;
