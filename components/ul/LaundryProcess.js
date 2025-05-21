"use client";
import React, { useState } from "react";
import Image from "next/image";
import { laundryStep } from "@/utils/data";
import icon from "@/public/img/home/work-icon.png";
import AnimatedHeading from "./AnimatedHeading";
import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";
const LaundryProcess = () => {
  const [active, setActive] = useState(3);
  return (
    <section className="">
      <div className="container">
        <div className="flex md:flex-nowrap flex-wrap gap-10 items-end justify-between border-b border-solid border-primary/15 mb-[70px]">
          <div className="">
            <FadeUpAnimationProvider>
              <h5 className="mb-[34px] text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block">
                <span className="mr-2">•</span>How It Works
              </h5>
            </FadeUpAnimationProvider>
            <div className="max-w-[818px]">
              <AnimatedHeading text=" Take back your time. Leave the Laundry to us." />
            </div>
          </div>
          <div>
            <FadeUpAnimationProvider>
              <p className="max-w-[451px] text-[16px] text-primary/70 font-medium leading-[26px]">
                The cleaning process was once performed at central factories
                where high street cleaners collected garments from their
                customers.
              </p>
            </FadeUpAnimationProvider>
          </div>
        </div>
        <div>
          <FadeUpAnimationProvider>
            <div className="mt-[60px] flex md:flex-row flex-col  md:gap-0 gap-7 w-full overflow-hidden md:h-[600px] h-auto">
              {laundryStep.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-[.5s] ease-in-out cursor-pointer md:overflow-hidden overflow-auto border border-[#d9dbdf] md:py-0 py-5 md:px-0 px-3 ${
                      index == active
                        ? "w-full "
                        : " relative md:w-[150px] w-full "
                    }`}
                    onClick={() => setActive(item.id)}
                  >
                    <div className="md:absolute top-0 md:-left-5 -left-10 w-full h-full headng-rotate ">
                      <h6
                        className={`md:w-[800px] w-full md:h-[800px] md:leading-[140px] sm:leading-[100px] leading-[40px] md:-mt-[250px] font-medium sm:text-[30px] text-2xl tracking-[-0.02em] text-[#142137]
                        ${index == active ? "hidden" : "block"}
                        `}
                      >
                        {item.title}
                      </h6>
                    </div>
                    <div
                      className={`${
                        index == active
                          ? "w-full h-full visible opacity-100 transition-all duration-500 ease-in-out flex  md:flex-row flex-col justify-start items-center gap-[60px]"
                          : "hidden opacity-0"
                      }`}
                    >
                      <div
                        className={`${
                          index == active
                            ? "w-[320px] md:h-[500px] h-[250px] float-right"
                            : ""
                        }`}
                      >
                        <Image
                          src={item.img}
                          width={320}
                          height={500}
                          className="w-full md:h-[500px] h-[300px]"
                          alt={item.title}
                        />
                      </div>
                      <div
                        className={` ${
                          active == index
                            ? "flex flex-col justify-center items-start gap-[50px]"
                            : ""
                        }`}
                      >
                        <span
                          className={`icon ${
                            active
                              ? "cursor-pointer transition-all duration-[400ms] ease-[ease] size-[100px] grid place-content-center  bg-[#142137]  rounded-full text-center leading-[100px] hover:bg-secondary"
                              : ""
                          }`}
                        >
                          <Image src={icon} alt="Laundry icon" />
                        </span>
                        <p
                          className={`${
                            index == active
                              ? "font-medium text-[16px] leading-[162%] text-[#142137b3] -mt-2"
                              : ""
                          }`}
                        >
                          we make laundry and dry cleaning effortless with free
                          pickup and <br />
                          delivery straight to your door. Our expert team
                          ensures your clothes <br />
                          are fresh, clean, and perfectly cared for, using
                          premium cleaning <br />
                          methods and eco-friendly detergents.
                        </p>
                        <div className="">
                          <ul className="p-0 flex flex-col justify-center items-start gap-[14px]">
                            <li className="flex items-center gap-[10px] text-base font-medium text-primary">
                              <span className="text-secondary">
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                                    fill="#4375E7"
                                  />
                                  <path
                                    d="M15.5 8L9.3125 14L6.5 11.2727"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              Fresh, Clean Results Every Time
                            </li>
                            <li className="flex items-center gap-[10px] text-base font-medium text-primary">
                              <span>
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                                    fill="#4375E7"
                                  />
                                  <path
                                    d="M15.5 8L9.3125 14L6.5 11.2727"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>
                              ️Fast, Reliable & Hassle-Free
                            </li>
                            <li className="flex items-center gap-[10px] text-base font-medium text-primary">
                              <span>
                                <svg
                                  width="22"
                                  height="22"
                                  viewBox="0 0 22 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                                    fill="#4375E7"
                                  />
                                  <path
                                    d="M15.5 8L9.3125 14L6.5 11.2727"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </span>{" "}
                              ️Eco-Friendly & Gentle on Fabrics
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUpAnimationProvider>
        </div>
      </div>
    </section>
  );
};

export default LaundryProcess;
