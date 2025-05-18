"use client";
import { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import author from "@/public/img/homeTwo/author-01.png";
import author2 from "@/public/img/homeTwo/author-02.png";
import Image from "next/image";
import reviewbg from "@/public/img/homeTwo/review-bg-01.png";
import { testimolials } from "../data";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  return (
    <section className="lg:pt-[150px] md:pt-[100px] pt-10 pb-[150px] ">
      <div className="container">
        <div className="">
          <div className="">
            <h4 className=" py-1 mb-[34px] text-primary/70">
              Clients Testimonials!
            </h4>
          </div>
          <div className="mb-[43px] ">
            <h2 className="text-primary max-w-[576px]">
              Customers Reviews & Experiences.
            </h2>
          </div>
        </div>

        <div className="relative ">
          <Swiper
            onSlideChange={(swiper) => {
              setIsEnd(swiper.isEnd);
              setIsBeginning(swiper.isBeginning);
            }}
            onReachEnd={() => {
              setIsEnd(true);
            }}
            onReachBeginning={() => {
              setIsBeginning(true);
            }}
            onFromEdge={() => {
              setIsEnd(false);
              setIsBeginning(false);
            }}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Navigation]}
            speed={1000}
            className="relative "
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              880: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 2,
              },
              1340: {
                slidesPerView: 2,
              },
            }}
          >
            {testimolials.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid xl:grid-cols-2 gap-[29px]">
                    <div className="border border-primary/15 pt-10 pb-[49px]  sm:pl-[34px] pl-6 sm:pr-11 pr-6">
                      <div className="flex gap-[5px] mb-[30px]">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            className="size-4 text-[#F7931A]"
                            icon={faStar}
                          />
                        ))}
                      </div>
                      <p className="text-base font-medium leading-[28px] text-primary/60">
                        we are proud to have a dedicated team of laundry and dry
                        cleaning experts who work tirelessly to ensure your
                        garments are treated with the utmost care &
                        professionalism. Our team combines years of experience,
                        knowledge, & passion for fabric care, delivering
                        services that exceed your expectations every time.
                      </p>
                      <div className="mt-10 flex gap-3 ">
                        <Image
                          className="size-[50px] rounded-full"
                          src={item.img}
                          width={50}
                          height={50}
                          alt="author"
                        />
                        <div>
                          <h5 className="text-base font-bold text-primary">
                            {item.author}
                          </h5>
                          <p className="text-[14px] font-medium leading-[26px] text-primary/70 uppercase">
                            {item.design}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative h-full w-full  overflow-hidden">
                      <Image
                        src={item.bigImage}
                        width={378}
                        height={460}
                        alt="Laundry author"
                        className=" w-full h-full"
                      />

                      <div
                        className="absolute inset-0 "
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(24, 29, 76, 0) 31.94%, #181D4C 100%)",
                        }}
                      ></div>

                      <div className="absolute bottom-[50px] left-7 right-7 text-white z-10">
                        <div className="flex space-x-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              className="size-4 text-[#F7931A]"
                              icon={faStar}
                            />
                          ))}
                        </div>

                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-base font-semibold text-white mb-2">
                              {item.author}
                            </h3>
                            <p className="text-sm font-medium leading-[26px] text-white/70">
                              {item.design}
                            </p>
                          </div>
                          <div className=" z-10">
                            <button className="size-[50px] rounded-full bg-white flex items-center justify-center ">
                              <svg
                                width="11"
                                height="14"
                                viewBox="0 0 11 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M10.5 6.13398C11.1667 6.51888 11.1667 7.48112 10.5 7.86603L1.5 13.0622C0.833333 13.4471 0 12.966 0 12.1962V1.80385C0 1.03405 0.833333 0.552922 1.5 0.937822L10.5 6.13398Z"
                                  fill="#181D4C"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Custom Previous Button */}

          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className={`absolute  right-[86px] sm:-top-[105px]   top-[103%]    size-[60px]  rounded-full cursor-pointer z-10  ${
              isBeginning
                ? "border border-primary/15 text-primary"
                : "text-white  bg-secondary"
            } `}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
            className={` 
      absolute xs:right-0 sm:-top-[105px] right-0 top-[103%]   size-[60]   rounded-full cursor-pointer  z-10 ${
        isEnd
          ? "border border-primary/15  text-primary"
          : " text-white bg-secondary"
      }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
