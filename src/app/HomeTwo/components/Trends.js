import React from "react";
import hello from "@/public/img/homeTwo/treand-01.png";
import Image from "next/image";
import icon from "@/public/img/homeTwo/calender-icon.png";
import Link from "next/link";
import { trends } from "../data";
const Trends = () => {
  return (
    <section className=" relative bg-[#EBEFF3] lg:py-[120px] md:py-20 py-[60px]">
      <div className="container relative">
        <div className="grid md:grid-cols-2 2xl:gap-[118px] gap-12  overflow-hidden relative">
          <div className="sticky top-0">
            <div className="sticky top-0">
              <h4 className="mb-[34px]">News & Blog</h4>
              <h2 className=" ">Explore The Latest Trends & Updates.</h2>
            </div>
          </div>
          <div className="overflow-y-auto">
            {trends.map((trend, index) => {
              return (
                <div className="">
                  <div
                    key={index}
                    className="flex sm:flex-nowrap  flex-wrap  2xl:gap-10 gap-7 mb-10 border border-primary/20"
                  >
                    <Image
                      src={trend.img}
                      className="w-full  "
                      width={270}
                      height={340}
                      alt={trend.title}
                    />
                    <div className="py-10 2xl:pr-[62px] pr-5 xl:ml-0 lg:ml-10 ml-5">
                      <div className="mb-6 px-[18px] py-[9px] border border-primary/15 rounded-full">
                        <div className="flex flex-wrap items-center gap-[18px]">
                          <Link
                            className="flex gap-[7px] items-center"
                            href="/"
                          >
                            <Image
                              src={icon}
                              className="h-[18px] w-[18px]"
                              alt="Laundry icon"
                            />
                            <span className="text-[15px] font-medium text-primary/70 leading-[26px]">
                              March 27, 2025
                            </span>
                          </Link>
                          <Link
                            className="flex gap-[7px] items-center"
                            href="/"
                          >
                            <span>
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M14.1751 12.8638L14.4871 15.3918C14.5671 16.0558 13.8551 16.5197 13.2872 16.1757L9.93537 14.1838C9.56739 14.1838 9.20742 14.1598 8.85545 14.1118C9.44741 13.4158 9.79938 12.5358 9.79938 11.5838C9.79938 9.31185 7.83151 7.47192 5.39967 7.47192C4.47173 7.47192 3.61578 7.73589 2.90383 8.19989C2.87983 7.99989 2.87183 7.79989 2.87183 7.59189C2.87183 3.95195 6.03162 1 9.93537 1C13.8391 1 16.9989 3.95195 16.9989 7.59189C16.9989 9.75185 15.887 11.6638 14.1751 12.8638Z"
                                  stroke="#142137"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M9.79943 11.5836C9.79943 12.5356 9.44746 13.4156 8.8555 14.1116C8.06355 15.0716 6.80762 15.6875 5.39971 15.6875L3.31185 16.9275C2.95987 17.1435 2.5119 16.8475 2.5599 16.4395L2.75988 14.8636C1.68795 14.1196 1 12.9276 1 11.5836C1 10.1756 1.75196 8.93564 2.90388 8.19965C3.61583 7.73565 4.47177 7.47168 5.39971 7.47168C7.83156 7.47168 9.79943 9.31161 9.79943 11.5836Z"
                                  stroke="#142137"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                            <span className="text-[15px] font-medium text-primary/70 leading-[26px]">
                              03 Comment
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div>
                        <Link
                          href="/Blog-details"
                          className="text-2xl font-semibold text-primary leading-[34px] "
                        >
                          {trend.title}
                        </Link>
                        <p className="text-base font-normal leading-[26px] text-primary/70">
                          Provide professional reliable & hassle-free dry
                          cleaning & laundry services tailored to your needs.
                        </p>
                        <Link
                          href="/Blog-details"
                          className="mt-10 group border border-primary/20 rounded-[50px] w-[161px] h-[44px] flex justify-between items-center pl-[30px] pr-[5px] font-poppins font-medium text-[15px] text-primary bg-white transition-all duration-500 hover:bg-primary hover:text-white"
                        >
                          Read More
                          <span className="rounded-[50px] grid place-content-center w-[34px] h-[34px] bg-primary border border-primary/20  transition-all duration-500 group-hover:bg-white  leading-[34px] text-center ">
                            <svg
                              width="19"
                              height="18"
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="text-white group-hover:text-primary group-hover:rotate-[45deg]"
                            >
                              <path
                                d="M4.90405 13.5967L13.3893 5.1114"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M14.0962 12.8892V4.40388H5.61091"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
