"use client";
import React, { useRef, useState } from "react";

import icon from "@/public/img/homeTwo/collect-icon.png";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { collectSlider } from "../data";
const Collect = () => {
  const swiperRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section>
      <div className="">
        <div className="">
          <Swiper
            onSwiper={(swiper) => {
              setSwiperInstance(swiper);
              setActiveIndex(swiper.realIndex + 1);
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
            modules={[Navigation, Pagination, Autoplay]}
            pagination={{
              el: ".custom-pagination2",
              clickable: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={800}
            className="relative "
            spaceBetween={29}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 29,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 29,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 39,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 39,
              },
            }}
          >
            {collectSlider.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid md:grid-cols-2 items-stretch">
                    <div className="h-full w-full">
                      <Image
                        className="h-full w-full object-cover"
                        width={960}
                        height={950}
                        src={item.img}
                        alt={item.title}
                      />
                    </div>
                    <div className="h-full w-full 2xl:py-[125px] py-20 2xl:pl-[123px] xl:pl-20 pl-10 2xl:pr-[150px] lg:pr-10 pr-5 bg-[#181D4C]">
                      <div className="flex flex-wrap gap-10 justify-between">
                        <div className="relative before:absolute before:content-[''] before:w-[130px] before:h-1 before:bg-[#4375E7] before:left-0 sm:before:-bottom-10 before:-bottom-3">
                          <Image src={icon} alt="Laundry collect" />
                        </div>
                        <div>
                          <h2 className="lg:text-[120px] text-[100px]  font-semibold leading-[64px]">
                            <span
                              style={{
                                WebkitTextStroke: "1px rgb(255 255 255 / 0.2)",
                              }}
                              className="border-none"
                            >
                              0{activeIndex}
                            </span>
                          </h2>
                        </div>
                      </div>
                      <div className="sm:mt-24 mt-16">
                        <h2 className="text-white">
                          {item.title} <br /> {item.title2}
                        </h2>
                        <p className="sm:mt-[53px] mt-10 text-[16px] font-normal leading-[26px] text-white/70">
                          We make it easy for you to keep your clothes fresh and
                          clean. Simply collect all{" "}
                          <br className="md:block hidden" /> your laundry, and
                          we’ll take care of the rest. With hassle-free pickup &
                          professional <br className="md:block hidden" />{" "}
                          cleaning, your garments will be treated with the
                          utmost care.
                        </p>
                        <Link
                          href="/services"
                          className="block group 2xl:mt-[170px] sm:mt-20 mt-16  rounded-[100px] w-[217px] bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-[#142137] before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-[#142137] after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                        >
                          <span className="flex items-center justify-between gap-[10px] pl-6 pr-[10px] text-[#142137] group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.5s]">
                            Get Service Now
                            <span className="grid place-content-center size-[34px] bg-primary rounded-full group-hover:bg-white">
                              <svg
                                width="19"
                                height="18"
                                viewBox="0 0 19 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="text-white group-hover:text-primary group-hover:rotate-[45deg] transition-all duration-500"
                              >
                                <path
                                  d="M4.75757 13.7576L13.2429 5.27229"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.9497 13.0503V4.56501H5.46442"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Collect;
