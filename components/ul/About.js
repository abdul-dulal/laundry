"use client";
import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import about from "@/public/img/home/about-company-01.png";
import about2 from "@/public/img/home/about-company-02.png";
import Image from "next/image";
import Link from "next/link";
import AboutCounter from "./AboutCounter";
import AnimatedHeading from "./AnimatedHeading";
import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";
import { useInView } from "react-intersection-observer";
const About = () => {
  const boxRef = useRef(null);
  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x / rect.width - 0.5) * 60;
    const offsetY = (y / rect.height - 0.5) * 60;

    gsap.to(box, {
      x: offsetX,
      y: offsetY,
      duration: 0.3,
      ease: "power3.out",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(boxRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  };
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="">
          <div className="grid lg:grid-cols-2 2xl:gap-[160px] gap-20  items-end  ">
            <div className="">
              <div className="">
                <div className="">
                  <FadeUpAnimationProvider>
                    <div className="mb-[34px]">
                      <h4>
                        <span className="mr-2">•</span>About Our Company
                      </h4>
                    </div>
                  </FadeUpAnimationProvider>
                  <div className="max-w-[625px]">
                    <AnimatedHeading text="Laundry & Dry CleaningMade Simple." />
                  </div>
                  <div className="">
                    <FadeUpAnimationProvider>
                      <p className="font-medium text-[18px] leading-[167%] text-[rgba(20,33,55,0.7)] mt-3">
                        Revolutionized the way you think about dry cleaning and
                        laundry. Our mission is simple: to make laundry day
                        hassle-free. With our easy-to-use service, you can enjoy
                        the convenience of professional dry cleaning and
                        laundry.
                      </p>
                    </FadeUpAnimationProvider>
                    <FadeUpAnimationProvider>
                      <div className="pt-[39px]">
                        <button
                          className="group w-[188px] pl-[30px] text-center text-[15px]  font-medium leading-[54px] border border-[#d9dbdf] transition-all duration-700 ease-in-out relative z-[1] overflow-hidden cursor-pointer  hover:text-white  before:content-[''] before:w-0 before:h-[200px] before:absolute before:top-[-80px] before:right-[-60px] 
before:bg-[#4375e7] before:transition-all before:duration-[1200ms] before:ease-in-out 
before:z-[-1] before:rotate-[-20deg] hover:before:w-[250px] hover:before:text-white   after:content-[''] after:w-0 after:h-[200px] after:absolute 
after:top-[-70px] after:left-[-60px] after:bg-[#4375e7] 
after:transition-all after:duration-[1200ms] after:ease-in-out 
after:z-[-1] after:rotate-[-20deg] hover:after:w-[250px] hover:after:text-white

"
                        >
                          <Link
                            href="/about"
                            className="flex items-center gap-2"
                          >
                            Discover More
                            <span>
                              <svg
                                width="15"
                                height="14"
                                viewBox="0 0 15 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-700 ease-out text-[#142137] group-hover:text-white"
                              >
                                <path
                                  d="M1 7L13 7"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M8 13L14 7L8 0.999999"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </Link>
                        </button>
                      </div>
                    </FadeUpAnimationProvider>
                  </div>
                </div>
                <div className="relative pt-[100px]">
                  <div ref={ref}>
                    {inView ? (
                      <Image
                        className="w-[70%] zoomIn"
                        src={about2}
                        alt="Laundry about"
                      />
                    ) : (
                      <Image
                        className="w-[70%] "
                        src={about2}
                        alt="Laundry about"
                      />
                    )}
                  </div>
                  <div
                    ref={boxRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="sm:w-[400px] w-[250px] h-[287px] bg-[rgb(255,255,255)] absolute bottom-0 lg:-right-10 right-0 pl-[34px] border border-solid border-[rgba(20,33,55,0.14)] cursor-pointer"
                  >
                    <h2 className="sm:mt-[120px] mt-[150px] relative z-[99] flex font-medium sm:text-[230px] text-[150px] text-[#142137]">
                      14
                    </h2>
                    <div className="w-[102px] h-[102px] bg-[rgb(235,239,243)] absolute top-[38px] right-[120px] z-[4] rounded-full">
                      <p className="absolute sm:right-[-45px] right-0 top-1/2 transform translate-y-[-50%]">
                        Years <br /> Experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col justify-end items-center gap-[108px]">
                <div className="about_counting_card_area flex  items-center justify-center flex-wrap gap-[24px]">
                  <AboutCounter count={86} sufix="k" />
                  <AboutCounter count={140} sufix="+" />
                  <AboutCounter count={98} sufix="%" />
                </div>

                <div ref={ref1}>
                  {inView1 ? (
                    <Image
                      className="w-full h-full object-cover zoomIn"
                      src={about}
                      alt="Laundry about"
                    />
                  ) : (
                    <Image
                      className="w-full h-full object-cover"
                      src={about}
                      alt="Laundry about"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
