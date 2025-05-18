"use client";
import React from "react";
import about from "@/public/img/home/about-company-01.png";
import about2 from "@/public/img/home/about-company-02.png";
import Image from "next/image";
import Link from "next/link";
import AboutCounter from "./AboutCounter";
import { useInView } from "react-intersection-observer";
const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="">
          <div className="grid lg:grid-cols-2 2xl:gap-[160px] gap-20  items-end  ">
            <div className="">
              <div className="">
                <div className="">
                  <div className="mb-[34px]">
                    <h4>
                      <span className="mr-2">•</span>About Our Company
                    </h4>
                  </div>
                  <div className="max-w-[625px]" ref={ref}>
                    {inView && (
                      <h2 className="move-right">
                        <span>Laundry</span> <span>& Dry</span>{" "}
                        <span>Cleaning</span>
                        <span>Made</span> <span>Simple</span>.
                      </h2>
                    )}
                  </div>
                  <div className="">
                    <p className="font-medium text-[18px] leading-[167%] text-[rgba(20,33,55,0.7)] mt-3">
                      Revolutionized the way you think about dry cleaning and
                      laundry. Our mission is simple: to make laundry day
                      hassle-free. With our easy-to-use service, you can enjoy
                      the convenience of professional dry cleaning and laundry.
                    </p>
                    <div className="pt-[39px]">
                      <div className="w-fit relative   bg-transparent border border-[#d9dbdf]  overflow-hidden z-[1] ">
                        <Link
                          className="group flex items-center gap-4 px-[34px] leading-[54px]  font-medium text-[15px] text-[rgb(20,33,55)]transition-all duration-500 ease-in-out "
                          href="/about"
                        >
                          Discover More
                          <span>
                            <svg
                              width="15"
                              height="14"
                              viewBox="0 0 15 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="transition-all duration-700 text-primary "
                            >
                              <path
                                d="M1 7.00049L13 7.00049"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M8 13.0001L14 7.00012L8 1.00012"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative pt-[100px]">
                  <Image className="w-[70%]" src={about2} alt="Laundry about" />
                  <div className="sm:w-[400px] w-[250px] h-[287px] bg-[rgb(255,255,255)] absolute bottom-0 lg:-right-10 right-0 pl-[34px] border border-solid border-[rgba(20,33,55,0.14)]">
                    <h2 className="sm:mt-[120px] mt-[150px] relative z-[99] flex   font-medium sm:text-[230px] text-[150px] text-[#142137]">
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
                  <AboutCounter />
                  <AboutCounter />
                  <AboutCounter />
                </div>
                <div className="">
                  <Image
                    className="w-full h-full object-cover"
                    src={about}
                    alt="Laundry about"
                  />
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
