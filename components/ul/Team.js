"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { teamMember } from "@/utils/data";

const Team = () => {
  const swiperRef = useRef(null);
  return (
    <section className="lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div className="text-center">
          <h5 className="text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block mb-[34px]">
            <span className="mr-2">•</span>Meet Cleaning Expert!
          </h5>
          <h2 className="max-w-[774px] block m-auto mb-[70px]">
            Meet The Professional Behind Our Clean Services!
          </h2>
        </div>
        <div className="">
          <div>
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation, Pagination, Autoplay]}
              pagination={{
                el: ".custom-pagination",
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
                  slidesPerView: 2,
                  spaceBetween: 29,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 39,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 39,
                },
              }}
            >
              {teamMember.map((team, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
                      <div className="relative after:absolute after:content-[''] after:w-full after:bottom-0 after:h-0 after:opacity-0 after:bg-[rgba(10,31,47,0.4)] after:duration-500 after:ease-in-out after:overflow-hidden hover:after:opacity-100 hover:after:top-0 hover:after:w-full hover:after:h-full">
                        <Image
                          src={team.img}
                          width={378}
                          height={370}
                          className="w-full"
                          alt={team.name}
                        />
                      </div>

                      <div className="p-7 bg-[#ECF2FE]">
                        <div className="flex justify-between">
                          <div>
                            <Link
                              href="/Team-details"
                              className="text-[18px] text-primary font-semibold leading-[100%] mb-[10px]"
                            >
                              {team.name}
                            </Link>
                            <p className="text-[15px] text-primary/70 leading-[26px] font-medium">
                              {team.design}
                            </p>
                          </div>
                          <div className="relative">
                            <div className="group">
                              <div className="overflow-hidden absolute -left-3 md:bottom-14 bottom-[78px]  px-3 py-[25px] invisible opacity-0 h-11  rounded-[5px] transition-all ease-in-out duration-500 group-hover:h-[180px] group-hover:visible group-hover:opacity-100 ">
                                <div className="">
                                  <Link
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className=" size-11 bg-white  grid place-content-center mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300"
                                  >
                                    <svg
                                      width="10"
                                      height="17"
                                      viewBox="0 0 10 17"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M9.35 0H6.8C5.67283 0 4.59183 0.447767 3.7948 1.2448C2.99777 2.04183 2.55 3.12283 2.55 4.25V6.8H0V10.2H2.55V17H5.95V10.2H8.5L9.35 6.8H5.95V4.25C5.95 4.02457 6.03955 3.80837 6.19896 3.64896C6.35837 3.48955 6.57457 3.4 6.8 3.4H9.35V0Z"
                                        fill="#142137"
                                      />
                                    </svg>
                                  </Link>
                                  <Link
                                    href="https://x.com/i/flow/login?mx=2"
                                    target="_blank"
                                    className=" size-11 bg-white  grid place-content-center mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300"
                                  >
                                    <svg
                                      width="16"
                                      height="13"
                                      viewBox="0 0 16 13"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M15.9388 0.00728525C15.245 0.496661 14.4768 0.870955 13.6639 1.11575C13.2275 0.614053 12.6476 0.25846 12.0026 0.0970684C11.3576 -0.064323 10.6786 -0.023726 10.0574 0.213369C9.43623 0.450463 8.90284 0.872616 8.5294 1.42273C8.15595 1.97285 7.96047 2.62438 7.96938 3.28922V4.01371C6.69619 4.04672 5.43459 3.76435 4.29695 3.19174C3.15931 2.61913 2.18094 1.77405 1.44898 0.731774C1.44898 0.731774 -1.44898 7.25217 5.07142 10.1501C3.57936 11.1629 1.80192 11.6708 0 11.5991C6.5204 15.2216 14.4898 11.5991 14.4898 3.26749C14.4891 3.06568 14.4697 2.86438 14.4318 2.66616C15.1712 1.93696 15.693 1.01629 15.9388 0.00728525Z"
                                        fill="#142137"
                                      />
                                    </svg>
                                  </Link>
                                  <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className=" size-11 bg-white  grid place-content-center mb-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300"
                                  >
                                    <svg
                                      width="16"
                                      height="15"
                                      viewBox="0 0 16 15"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.0521 4.73682C12.3083 4.73682 13.5131 5.23586 14.4014 6.12415C15.2897 7.01245 15.7888 8.21724 15.7888 9.47349V14.9996H12.631V9.47349C12.631 9.05474 12.4646 8.65314 12.1685 8.35704C11.8724 8.06094 11.4708 7.8946 11.0521 7.8946C10.6334 7.8946 10.2318 8.06094 9.93566 8.35704C9.63956 8.65314 9.47321 9.05474 9.47321 9.47349V14.9996H6.31543V9.47349C6.31543 8.21724 6.81447 7.01245 7.70277 6.12415C8.59107 5.23586 9.79586 4.73682 11.0521 4.73682Z"
                                        fill="#142137"
                                      />
                                      <path
                                        d="M3.15778 5.52686H0V15.0002H3.15778V5.52686Z"
                                        fill="#142137"
                                      />
                                      <path
                                        d="M1.57889 3.15778C2.45089 3.15778 3.15778 2.45089 3.15778 1.57889C3.15778 0.706893 2.45089 0 1.57889 0C0.706893 0 0 0.706893 0 1.57889C0 2.45089 0.706893 3.15778 1.57889 3.15778Z"
                                        fill="#142137"
                                      />
                                    </svg>
                                  </Link>
                                </div>
                              </div>

                              <button className="size-11 bg-white transition-all duration-500 hover:bg-secondary text-primary hover:text-white shadow-md shadow-[#14213724] group">
                                <FontAwesomeIcon icon={faShareNodes} />
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
            <div className="custom-pagination  flex gap-2 items-center justify-center mt-[70px] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
