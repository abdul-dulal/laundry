"use client";
import React, { useState } from "react";
import mision from "@/public/img/homeTwo/mission&vision.png";
import icon from "@/public/img/homeTwo/mission.png";
import icon2 from "@/public/img/homeTwo/vision.png";
import play from "@/public/img/homeTwo/play-video.png";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ul/Button";
const Vision = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <section className="overflow-hidden lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
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
                  <Button title="Discover More" path="About" />
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
