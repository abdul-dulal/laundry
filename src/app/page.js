import Hero from "@/components/ul/Hero";
import HeaderOne from "../../components/header/HeaderOne";
import HeaderTop from "../../components/header/HeaderTop";
import About from "@/components/ul/About";
import Service from "@/components/ul/Service";
import WorkProcess from "@/components/ul/WorkProcess";
import Team from "@/components/ul/Team";
import LaundryProcess from "@/components/ul/LaundryProcess";
import QualitryClean from "@/components/ul/QualitryClean";
import Testimonial from "@/components/ul/Testimonial";
import Blog from "@/components/ul/Blog";

export default function Home() {
  return (
    <>
      <HeaderTop />
      <HeaderOne />
      <main>
        <Hero />
        <About />
        <Service />
        {/* <WorkProcess /> */}
        <Team />
        <LaundryProcess />
        <QualitryClean />
        <Testimonial />
        <Blog />
      </main>
    </>
  );
}
