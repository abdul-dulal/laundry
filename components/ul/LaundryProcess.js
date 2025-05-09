"use client";
import React, { useState } from "react";
import Image from "next/image";
import { laundryStep } from "@/utils/data";
import icon from "@/public/img/home/work-icon.png";
const LaundryProcess = () => {
  const [active, setActive] = useState(3);
  return (
    <section className="working_proces_area ">
      <div className="container">
        <div className="flex items-end justify-between border-b border-solid border-primary/15">
          <div class="">
            <h4 className="mb-[34px]">
              <span className="mr-2">•</span>Our Services
            </h4>
            <h2 className="">
              Take back your time. Leave the <br /> Laundry to us.
            </h2>
          </div>
          <div>
            <p className="max-w-[451px] text-[16px] text-primary/70 font-medium leading-[26px]">
              The cleaning process was once performed at central factories where
              high street cleaners collected garments from their customers.
            </p>
          </div>
        </div>
        <div>
          <div class="gallery_parent mt-[60px]    flex w-full overflow-hidden h-[600px]">
            {laundryStep.map((item, index) => {
              return (
                <div
                  key={index}
                  class={`tab relative  transition-all duration-[.5s] ease-in-out cursor-pointer overflow-hidden border border-[#d9dbdf] ${
                    index == active ? "w-full " : " relative w-[150px] "
                  }`}
                  onClick={() => setActive(item.id)}
                >
                  <div class="overly_content_text absolute top-0 md:-left-5 -left-10 w-full h-full">
                    <h6
                      className={`w-[800px] h-[800px] leading-[140px] -mt-[250px] transform -translate-x-1/2 -rotate-90 font-medium text-[30px] tracking-[-0.02em] text-[#142137]
                        ${index == active ? "hidden" : "block"}
                        `}
                    >
                      {item.title}
                    </h6>
                  </div>
                  <div
                    class={`content  ${
                      index == active
                        ? "w-full h-full visible opacity-100 transition-all duration-500 ease-in-out flex  md:flex-row flex-col justify-start items-center gap-[60px]"
                        : "hidden opacity-0"
                    }`}
                  >
                    <div
                      class={`working_proces_img ${
                        index == active ? "w-[320px] h-[500px] float-right" : ""
                      }`}
                    >
                      <Image
                        src={item.img}
                        width={320}
                        height={500}
                        alt={item.title}
                      />
                    </div>
                    <div
                      class={`how_it_work_contains ${
                        active == index
                          ? "flex flex-col justify-center items-start gap-[50px]"
                          : ""
                      }`}
                    >
                      <span
                        class={`icon ${
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
                        delivery straight to your door. Our expert team ensures
                        your clothes <br />
                        are fresh, clean, and perfectly cared for, using premium
                        cleaning <br />
                        methods and eco-friendly detergents.
                      </p>
                      <div class="check_list_area">
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
        </div>
      </div>
    </section>
  );
};

export default LaundryProcess;
