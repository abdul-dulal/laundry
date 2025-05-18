"use client";
import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { useRef } from "react";
import blog1 from "@/public/img/blog/blog-01.png";
import blog2 from "@/public/img/blog/blog-2.png";
import author from "@/public/img/blog/author-01.jpg";
import author2 from "@/public/img/blog/author-02.jpg";
import author3 from "@/public/img/blog/author-03.jpg";
import Image from "next/image";
import AuthorDetails from "./AuthorDetails";
import { slider } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import SideBar from "./SideBar";
import Quote from "./Quote";
const Blog = () => {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = (e) => {
    e.stopPropagation();
  };

  return (
    <section className="lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-[60px] gap-0">
          <div className="2xl:col-span-9 xl:col-span-8 col-span-12">
            <div className="">
              <article className="pb-[58px]">
                <div className="">
                  <Image src={blog1} alt="Laundry Blog" />
                </div>
                <AuthorDetails
                  author={author}
                  name="Miles Tone"
                  title="Refresh Your Wardrobe, Refresh Your Life"
                  showButton={true}
                />
              </article>
              <Quote />
              <article className="mt-[60px] pb-[58px]">
                <div className="relative">
                  <Image className="" src={blog2} alt="Laundry blog" />
                  <button
                    onClick={togglePopup}
                    className="grid place-content-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            rounded-full  cursor-pointer  text-center 
            leading-[80px] text-[#142137] text-[22px] bg-white 
            shadow-[0_2px_10px_0_rgba(30,30,47,0.1),_0_4px_3px_0_rgba(30,30,47,0.12)]  z-[99] size-20  
                 before:absolute before:content-[''] before:top-[50%] before:left-[50%] before:size-20 
                 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full 
                 after:absolute after:top-[50%] after:left-[50%] after:size-20 
                 after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full bubble"
                  >
                    <span className="">
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.5 8.13398C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.5 17.564 0.5 16.7942V1.20577C0.5 0.435971 1.33333 -0.0451542 2 0.339746L15.5 8.13398Z"
                          fill="#181D4C"
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      onClick={togglePopup}
                      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 duration-[.8s]"
                    >
                      <button
                        onClick={togglePopup}
                        className="transition-all duration-500 ease-out absolute top-4 right-4 flex items-center justify-center w-10 h-10 p-[2px] rounded-full border border-solid border-gray-300 text-2xl text-white"
                      >
                        x
                      </button>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-[90%] h-[90%]  rounded lz_popup_move"
                      >
                        <iframe
                          className="w-full h-full"
                          src="https://www.youtube.com/embed/SZEflIVnhH8?si=Bh49mJbQuwQ-VpmA"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  )}
                </div>
                <AuthorDetails
                  author={author2}
                  title="Refresh Your Wardrobe, Refresh Your Life"
                  name="Miles Tone"
                  showButton={true}
                />
              </article>

              <div className="relative">
                {/* Swiper Slider */}
                <Swiper
                  onSlideChange={(swiper) => {
                    setIsEnd(swiper.isEnd);
                    setIsBeginning(swiper.isBeginning);
                  }}
                  onReachEnd={() => setIsEnd(true)}
                  onReachBeginning={() => setIsBeginning(true)}
                  onFromEdge={() => {
                    setIsEnd(false);
                    setIsBeginning(false);
                  }}
                  spaceBetween={30}
                  slidesPerView={1}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Navigation]}
                  speed={1000}
                  className="relative"
                >
                  {slider.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="flex items-center justify-center h-full">
                        <Image
                          src={item.img}
                          width={1170}
                          height={560}
                          alt=""
                          className="object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="absolute lg:top-[50%] top-[40%] left-4 z-10">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className={`size-[60px] rounded-full cursor-pointer ${
                      isBeginning
                        ? "bg-white text-primary "
                        : "text-white bg-secondary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                </div>

                <div className="absolute lg:top-[50%] top-[40%] right-4 z-10">
                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    disabled={isEnd}
                    className={`size-[60px] rounded-full cursor-pointer ${
                      isEnd
                        ? "bg-white text-primary "
                        : "text-white bg-secondary"
                    }`}
                  >
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
              <AuthorDetails
                author={author3}
                title="Laundry Hacks Save Time, Money, & Effort"
                name="Alan Fresco"
                showButton={true}
              />

              <div className="flex items-center justify-center mt-[60px]">
                <ul className="flex flex-row justify-start items-center p-0 m-0">
                  <li>
                    <button className="w-[44px] grid place-content-center h-[44px] border border-[#1421371a]  text-center leading-[44px]  font-medium text-[16px] text-[#14213799] ">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M6 1L1 6L6 11"
                          stroke="#142137"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="size-11 bg-transparent transition-all duration-500 ease-out hover:bg-secondary hover:text-white border border-[#1421371a] block text-center leading-[44px] font-medium text-[16px] text-[#14213799] ">
                      01
                    </button>
                  </li>
                  <li>
                    <button className="size-11 bg-transparent transition-all duration-500 ease-out hover:bg-secondary hover:text-white border border-[#1421371a] block text-center leading-[44px] font-medium text-[16px] text-[#14213799] ">
                      02
                    </button>
                  </li>
                  <li>
                    <button className="size-11 bg-transparent transition-all duration-500 ease-out hover:bg-secondary hover:text-white border border-[#1421371a] block text-center leading-[44px] font-medium text-[16px] text-[#14213799] ">
                      03
                    </button>
                  </li>

                  <li>
                    <button className="size-11 grid place-content-center bg-transparent transition-all duration-500 ease-out hover:bg-secondary hover:text-white border border-[#1421371a]  text-center leading-[44px] font-medium text-[16px] text-[#14213799] ">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          opacity="0.6"
                          d="M1 1L6 6L1 11"
                          stroke="#142137"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="2xl:col-span-3 xl:col-span-4 col-span-12 lg:mt-0 mt-10">
            <SideBar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
