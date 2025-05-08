"use client";
import React, { useRef, useState } from "react";
import line from "@/public/img/home/line.png";
import Image from "next/image";
import Link from "next/link";
import client from "@/public/img/home/clinet-img-01.png";
import client2 from "@/public/img/home/clinet-img-02.png";
import client3 from "@/public/img/home/clinet-img-03.png";
import client4 from "@/public/img/home/clinet-img-04.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/effect-fade";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { heroSlider } from "@/utils/data";
const Hero = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section class="hero_section_area w-full relative overflow-hidden">
      <div>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          modules={[Navigation, Autoplay]}
          speed={1200}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          // autoplay={{
          //   delay: 3000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          className="relative "
          spaceBetween={30}
          slidesPerView={1}
        >
          {heroSlider.map((slider, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  class={` inline-block w-full bg-cover bg-center bg-no-repeat`}
                  style={{ backgroundImage: `url(${slider.img})` }}
                >
                  <div class=" w-full h-full [background:linear-gradient(90deg,_rgb(20,_33,_55)_0%,_rgba(20,_33,_55,_0.1)_89.82%)] -z-10">
                    <div class="container">
                      <div class=" md:block hidden absolute top-[49%] left-[110px] z-[100]">
                        <Image src={line} alt="Laundry line" />
                      </div>

                      <div class=" z-[999] relative">
                        <div class=" md:h-[840px] h-fit md:py-0 py-[60px] flex flex-col justify-center items-start gap-12">
                          <div class="heading_area">
                            <div class="sub_heading ">
                              <h4 className="inline-block backdrop-blur-[14px] bg-[rgba(255,255,255,0.14)] font-[500] text-[16px] text-[rgba(255,255,255,0.7)] px-[10px] text-center mb-[24px] h-[29px] leading-[29px]">
                                <span className="mr-2">•</span>Dry Clean Experts
                              </h4>
                            </div>
                            <div class="heading">
                              <h3 className="font-semibold lg:text-[100px] md:text-[60px]  sm:text-[42px] text-[35px] lg:leading-[110%]  md:leading-[66px] sm:leading-[48px] leading-[39px] tracking-[-0.02em] text-white">
                                {slider.title} <br /> {slider.titleTwo}
                              </h3>
                            </div>
                            <div class="description style_1 mt-8">
                              <p className="text-[rgba(255,255,255,0.7)]">
                                Our services are designed for convenience and
                                efficiency, offering doorstep pickup & <br />
                                delivery to make your laundry experience as
                                seamless as possible.
                              </p>
                            </div>
                          </div>
                          <div class="hero_user_info z-10 flex flex-row justify-start items-center flex-wrap gap-[34px]">
                            <div class=" text-center leading-[54px] transition-all duration-400 ease-in-out relative h-[54px] w-[212px] bg-[#142137] z-[1] overflow-hidden cursor-pointer before:content-[''] before:absolute before:w-full before:h-[200px] before:top-[-80px] before:right-[-60px] before:bg-[#4375e7] before:transition-all before:duration-[1200ms] before:ease-in-out before:z-[-1] before:rotate-[-20deg]  after:content-[''] after:absolute after:w-full after:h-[200px] after:top-[-70px] after:left-[-60px] after:bg-[#4375e7] after:transition-all after:duration-[1200ms] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-0 hover:before:w-0">
                              <Link
                                className="font-medium text-[15px] text-white transition-all duration-500 ease-in-out"
                                href="/"
                              >
                                Book Laundry Now!
                              </Link>
                            </div>
                            <div class=" flex flex-wrap flex-row justify-start items-center gap-[18px]">
                              <div class=" flex relative h-[54px] w-[143px]">
                                <Image
                                  className="absolute left-0"
                                  src={client}
                                  alt="Laundry client"
                                />
                                <Image
                                  className="absolute left-[30px]"
                                  src={client2}
                                  alt="Laundry client"
                                />
                                <Image
                                  className="absolute left-[60px]"
                                  src={client3}
                                  alt="Laundry client"
                                />
                                <Image
                                  className="absolute left-[90px]"
                                  src={client4}
                                  alt="Laundry client"
                                />
                              </div>
                              <div class="review_card_wapper flex flex-col justify-center items-start gap-[3px]">
                                <ul className="flex flex-row justify-start items-start gap-[3px] m-0 p-0">
                                  <li>
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.09478 0.928375C7.45471 0.16162 8.54529 0.16162 8.90522 0.928376L10.5545 4.4418C10.6961 4.74338 10.9785 4.95465 11.3078 5.00526L15.0777 5.58468C15.882 5.70829 16.2098 6.68948 15.6413 7.27168L12.8527 10.1277C12.6309 10.3549 12.5302 10.6739 12.5813 10.9873L13.2304 14.9672C13.3648 15.7911 12.4901 16.4073 11.7596 16.0033L8.48392 14.1919C8.18279 14.0254 7.8172 14.0254 7.51608 14.1919L4.24045 16.0033C3.50989 16.4073 2.63518 15.7911 2.76957 14.9672L3.41872 10.9873C3.46983 10.6739 3.36909 10.3549 3.14727 10.1277L0.358694 7.27168C-0.209758 6.68948 0.118038 5.70829 0.922286 5.58468L4.69218 5.00526C5.02147 4.95465 5.30392 4.74338 5.44549 4.4418L7.09478 0.928375Z"
                                        fill="#FFB100"
                                      />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.09478 0.928375C7.45471 0.16162 8.54529 0.16162 8.90522 0.928376L10.5545 4.4418C10.6961 4.74338 10.9785 4.95465 11.3078 5.00526L15.0777 5.58468C15.882 5.70829 16.2098 6.68948 15.6413 7.27168L12.8527 10.1277C12.6309 10.3549 12.5302 10.6739 12.5813 10.9873L13.2304 14.9672C13.3648 15.7911 12.4901 16.4073 11.7596 16.0033L8.48392 14.1919C8.18279 14.0254 7.8172 14.0254 7.51608 14.1919L4.24045 16.0033C3.50989 16.4073 2.63518 15.7911 2.76957 14.9672L3.41872 10.9873C3.46983 10.6739 3.36909 10.3549 3.14727 10.1277L0.358694 7.27168C-0.209758 6.68948 0.118038 5.70829 0.922286 5.58468L4.69218 5.00526C5.02147 4.95465 5.30392 4.74338 5.44549 4.4418L7.09478 0.928375Z"
                                        fill="#FFB100"
                                      />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.09478 0.928375C7.45471 0.16162 8.54529 0.16162 8.90522 0.928376L10.5545 4.4418C10.6961 4.74338 10.9785 4.95465 11.3078 5.00526L15.0777 5.58468C15.882 5.70829 16.2098 6.68948 15.6413 7.27168L12.8527 10.1277C12.6309 10.3549 12.5302 10.6739 12.5813 10.9873L13.2304 14.9672C13.3648 15.7911 12.4901 16.4073 11.7596 16.0033L8.48392 14.1919C8.18279 14.0254 7.8172 14.0254 7.51608 14.1919L4.24045 16.0033C3.50989 16.4073 2.63518 15.7911 2.76957 14.9672L3.41872 10.9873C3.46983 10.6739 3.36909 10.3549 3.14727 10.1277L0.358694 7.27168C-0.209758 6.68948 0.118038 5.70829 0.922286 5.58468L4.69218 5.00526C5.02147 4.95465 5.30392 4.74338 5.44549 4.4418L7.09478 0.928375Z"
                                        fill="#FFB100"
                                      />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.09478 0.928375C7.45471 0.16162 8.54529 0.16162 8.90522 0.928376L10.5545 4.4418C10.6961 4.74338 10.9785 4.95465 11.3078 5.00526L15.0777 5.58468C15.882 5.70829 16.2098 6.68948 15.6413 7.27168L12.8527 10.1277C12.6309 10.3549 12.5302 10.6739 12.5813 10.9873L13.2304 14.9672C13.3648 15.7911 12.4901 16.4073 11.7596 16.0033L8.48392 14.1919C8.18279 14.0254 7.8172 14.0254 7.51608 14.1919L4.24045 16.0033C3.50989 16.4073 2.63518 15.7911 2.76957 14.9672L3.41872 10.9873C3.46983 10.6739 3.36909 10.3549 3.14727 10.1277L0.358694 7.27168C-0.209758 6.68948 0.118038 5.70829 0.922286 5.58468L4.69218 5.00526C5.02147 4.95465 5.30392 4.74338 5.44549 4.4418L7.09478 0.928375Z"
                                        fill="#FFB100"
                                      />
                                    </svg>
                                  </li>
                                  <li>
                                    <svg
                                      width="16"
                                      height="17"
                                      viewBox="0 0 16 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M7.09478 0.928375C7.45471 0.16162 8.54529 0.16162 8.90522 0.928376L10.5545 4.4418C10.6961 4.74338 10.9785 4.95465 11.3078 5.00526L15.0777 5.58468C15.882 5.70829 16.2098 6.68948 15.6413 7.27168L12.8527 10.1277C12.6309 10.3549 12.5302 10.6739 12.5813 10.9873L13.2304 14.9672C13.3648 15.7911 12.4901 16.4073 11.7596 16.0033L8.48392 14.1919C8.18279 14.0254 7.8172 14.0254 7.51608 14.1919L4.24045 16.0033C3.50989 16.4073 2.63518 15.7911 2.76957 14.9672L3.41872 10.9873C3.46983 10.6739 3.36909 10.3549 3.14727 10.1277L0.358694 7.27168C-0.209758 6.68948 0.118038 5.70829 0.922286 5.58468L4.69218 5.00526C5.02147 4.95465 5.30392 4.74338 5.44549 4.4418L7.09478 0.928375Z"
                                        fill="#FFB100"
                                      />
                                    </svg>
                                  </li>
                                </ul>
                                <p className="font-medium text-[16px] leading-[156%] text-white">
                                  8k Clients Reviews.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="md:block hidden">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="grid place-content-center backdrop-blur-[14px] bg-white/15 rounded-full w-[54px] h-[54px] leading-[54px] text-center text-white absolute right-[8%] top-[40%] -translate-y-1/2 z-10  after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.99997L1 7.99997"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99805 0.999023L0.998047 7.99902L7.99805 14.999"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="grid place-content-center  backdrop-blur-[14px] bg-white/15 rounded-full w-[54px] h-[54px] leading-[54px] text-center text-white absolute right-[8%] top-[48%] -translate-y-1/2 z-10  after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 8.00067L15 8.00067"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 1.00098L15 8.00098L8 15.001"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
