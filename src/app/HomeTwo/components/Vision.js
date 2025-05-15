"use client";
import React, { useState } from "react";
import mision from "@/public/img/homeTwo/mission&vision.png";
import icon from "@/public/img/homeTwo/mission.png";
import icon2 from "@/public/img/homeTwo/vision.png";
import play from "@/public/img/homeTwo/play-video.png";
import Image from "next/image";
import Link from "next/link";
const Vision = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <section class="overflow-hidden lg:pt-[150px] md:pt-[100px] pt-20">
      <div class="container">
        <div className="grid grid-cols-12 2xl:gap-[87px] sm:gap-10 gap-0 items-stretch">
          <div className="lg:col-span-8 col-span-12  h-full">
            <div className="flex  flex-col h-full">
              <div>
                <h4 className="mb-[34px]">About Our Company</h4>
                <h2 className="mb-[70px]">
                  Laundry & Dry Cleaning <br /> Made Simple.
                </h2>
              </div>
              <div className="flex md:flex-nowrap flex-wrap items-center lg:gap-[60px] md:gap-8 gap-0 flex-1">
                <Image src={mision} className="w-full" alt="Laundry mission" />
                <div className="md:mt-0 mt-10">
                  <div className="flex sm:flex-nowrap flex-wrap gap-10">
                    <div>
                      <Image src={icon} alt="Laundry mission" />
                    </div>
                    <div>
                      <h3 className="text-[30px] font-semibold text-primary leading-[100%] -tracking-[2%] mb-[22px]">
                        Our Mission
                      </h3>
                      <p className="text-[16px] font-normal leading-[26px] text-primary/70 pb-[26px] border-b border-primary/15">
                        Our mission is simple: to provide high-quality,
                        convenient & <br className="2xl:block hidden" />
                        eco-friendly laundry & dry cleaning services.
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-nowrap flex-wrap gap-10 mt-10 ">
                    <div>
                      <Image src={icon2} alt="Laundry mission" />
                    </div>
                    <div>
                      <h3 className="text-[30px] font-semibold text-primary leading-[100%] -tracking-[2%] mb-[22px]">
                        Our Vission
                      </h3>
                      <p className="text-[16px] font-normal leading-[26px] text-primary/70 pb-[26px]">
                        Our mission is simple: to provide high-quality,
                        convenient & <br className="2xl:block hidden" />
                        eco-friendly laundry & dry cleaning services.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/"
                    class="mt-5 block group  rounded-[100px] w-[200px] bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-white before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-white after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                  >
                    <div className="flex  gap-[16px] items-center pl-6  text-white group-hover:text-primary group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                      <span> Discover More</span>
                      <span className=" grid place-content-center size-[34px] bg-white transition-all duration-500 group-hover:bg-primary rounded-full">
                        <svg
                          width="19"
                          height="18"
                          viewBox="0 0 19 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-primary transition-all duration-500 group-hover:text-white group-hover:rotate-[45deg]"
                        >
                          <path
                            d="M4.75757 13.7577L13.2429 5.27241"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.9497 13.0503V4.56501H5.46442"
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 col-span-12 h-full md:mt-0 mt-10">
            <div className="relative h-full w-full">
              <Image
                src={play}
                alt="Laundry play"
                className="lg:h-full h-[550px] w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePopup}
                  className="grid place-content-center relative z-[99] size-[100px] bg-white rounded-full 
                 before:absolute before:content-[''] before:top-[50%] before:left-[50%] before:size-[100px] 
                 before:translate-x-[-50%] before:translate-y-[-50%] before:rounded-full 
                 after:absolute after:top-[50%] after:left-[50%] after:size-[100px] 
                 after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-full bubble"
                >
                  <svg
                    width="23"
                    height="26"
                    viewBox="0 0 23 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23 13L0.5 25.9904V0.00961876L23 13Z"
                      fill="#121212"
                    />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div
                  onClick={togglePopup}
                  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-75 duration-[.8s]"
                >
                  <button
                    onClick={togglePopup}
                    className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 p-[2px] rounded-full border border-solid border-gray-300 text-2xl text-white"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
