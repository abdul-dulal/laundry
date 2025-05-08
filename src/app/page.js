import Hero from "@/components/ul/Hero";
import HeaderOne from "../../components/header/HeaderOne";
import HeaderTop from "../../components/header/HeaderTop";
import About from "@/components/ul/About";
import Service from "@/components/ul/Service";
import WorkProcess from "@/components/ul/WorkProcess";
import Team from "@/components/ul/Team";

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
      </main>
    </>
  );
}
