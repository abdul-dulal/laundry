import Image from "next/image";
import React from "react";
import icon from "@/public/img/home/qc-01.png";
import { quality } from "@/utils/data";
import Link from "next/link";
const QualitryClean = () => {
  return (
    <section className="lg:pt-[150px] md:pt-[100px] pt-20">
      <div className="container">
        <div className="text-center">
          <h5 className="mb-[34px] text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block">
            <span className="mr-2">•</span>Our Services
          </h5>
          <h2 className=" block m-auto mb-[70px]">
            High-Quality Laundry <br /> & Dry Cleaning.
          </h2>
        </div>
        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xxl:gap-[29px] lg:gap-4 gap-[29px]">
          {quality.map((item, index) => {
            return (
              <div key={index}>
                <div className="h-[158px] px-[30px] pt-[35px] bg-[#ECF2FE]">
                  <div className="flex flex-wrap justify-between">
                    <h3 className="text-[24px] text-primary font-semibold leading-[100%]">
                      {item.title}
                    </h3>
                    <Image
                      src={item.img}
                      width={61}
                      height={44}
                      alt={item.title}
                    />
                  </div>
                </div>
                <div className="-mt-10 sm:mx-[30px] mx-4 sm:px-[26px] px-4 pt-[30px] pb-[66px] border border-primary/15 bg-white">
                  <div>
                    <ul>
                      <li className="flex gap-[22px] text-[16px] font-medium text-primary/70 leading-[26px] mb-[30px]">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_38_16)">
                              <path
                                d="M12 21C17.5228 21 22 16.5228 22 11C22 5.47715 17.5228 1 12 1C6.47715 1 2 5.47715 2 11C2 16.5228 6.47715 21 12 21Z"
                                fill="url(#paint0_linear_38_16)"
                              />
                            </g>
                            <path
                              d="M16.5451 8.27295L10.9201 14.0484L8.36328 11.4232"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_38_16"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.0248264 0 0 0 0 0.541667 0 0 0 0 0.29306 0 0 0 0.3 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_38_16"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_38_16"
                                  result="shape"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_38_16"
                                x1="2"
                                y1="1"
                                x2="22"
                                y2="27.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.124731" stopColor="#22E17F" />
                                <stop offset="0.809861" stopColor="#0EAC60" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Prices start from $24.78 per 5kg load
                      </li>
                      <li className="flex gap-[22px] text-[16px] font-medium text-primary/70 leading-[26px]">
                        <span>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_38_16)">
                              <path
                                d="M12 21C17.5228 21 22 16.5228 22 11C22 5.47715 17.5228 1 12 1C6.47715 1 2 5.47715 2 11C2 16.5228 6.47715 21 12 21Z"
                                fill="url(#paint0_linear_38_16)"
                              />
                            </g>
                            <path
                              d="M16.5451 8.27295L10.9201 14.0484L8.36328 11.4232"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <defs>
                              <filter
                                id="filter0_d_38_16"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0.0248264 0 0 0 0 0.541667 0 0 0 0 0.29306 0 0 0 0.3 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_38_16"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_38_16"
                                  result="shape"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_38_16"
                                x1="2"
                                y1="1"
                                x2="22"
                                y2="27.5"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop offset="0.124731" stopColor="#22E17F" />
                                <stop offset="0.809861" stopColor="#0EAC60" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        Next day delivery available for $8
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-[60px]">
          <h3 className="text-[20px] font-medium leading-[30px] -tracking-[2%] text-primary">
            Free Collection & Delivery $20 Minimum <br /> Order No Service Fee.
          </h3>
          <div className="flex gap-5 items-center justify-center mt-[34px]">
            <div className=" text-center leading-[54px] transition-all duration-400 ease-in-out relative h-[54px] w-[212px] bg-[#142137] z-[1] overflow-hidden cursor-pointer before:content-[''] before:absolute before:w-full before:h-[200px] before:top-[-80px] before:right-[-60px] before:bg-[#4375e7] before:transition-all before:duration-[1200ms] before:ease-in-out before:z-[-1] before:rotate-[-20deg]  after:content-[''] after:absolute after:w-full after:h-[200px] after:top-[-70px] after:left-[-60px] after:bg-[#4375e7] after:transition-all after:duration-[1200ms] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-0 hover:before:w-0">
              <Link
                className="font-medium text-[15px] text-white transition-all duration-500 ease-in-out"
                href="/Contact"
              >
                Book a Pick Up
              </Link>
            </div>
            <div className=" text-center leading-[54px] transition-all duration-400 ease-in-out relative h-[54px] w-[212px] bg-[#142137] z-[1] overflow-hidden cursor-pointer before:content-[''] before:absolute before:w-full before:h-[200px] before:top-[-80px] before:right-[-60px] before:bg-[#4375e7] before:transition-all before:duration-[1200ms] before:ease-in-out before:z-[-1] before:rotate-[-20deg]  after:content-[''] after:absolute after:w-full after:h-[200px] after:top-[-70px] after:left-[-60px] after:bg-[#4375e7] after:transition-all after:duration-[1200ms] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-0 hover:before:w-0">
              <Link
                className="font-medium text-[15px] text-white transition-all duration-500 ease-in-out"
                href="/Contact"
              >
                Get a Price Estimation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitryClean;
