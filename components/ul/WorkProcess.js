"use client";
import Image from "next/image";
import React, { useState } from "react";
import videoThumb from "@/public/img/home/video-thumb.png";
import icon from "@/public/img/home/sample-icon-01.png";
import moon from "@/public/img/home/moon-down.png";
import youtubeIcon from "@/public/img/home/youtube-icon.png";
import moonUp from "@/public/img/home/moon-up.png";
const WorkProcess = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = (e) => {
    e.stopPropagation();
  };
  return (
    <section className="overflow-hidden lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div className=" text-center">
          <div className="">
            <h2>Using Laundre Made Simple</h2>
          </div>
          <div className="">
            <p className="font-medium text-[18px] leading-[167%] text-[rgba(20,33,55,0.7)] mt-[12px]">
              The modern and convenient approach to laundry and dry cleaning.
            </p>
          </div>
        </div>
        <div className="">
          <div className=" w-full h-fit p-0 relative mt-[60px] reveal_image">
            <Image
              className="w-full h-full object-contain"
              src={videoThumb}
              alt="Laundry video"
            />
            <button onClick={togglePopup} className="">
              <span className="absolute top-1/2 left-1/2 text-[70px] transform -translate-x-1/2 -translate-y-1/2">
                <Image src={youtubeIcon} alt="Laundry icon" />
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
        </div>

        <div className="">
          <div className="servers_card_wrapper  mt-[57px]">
            <div className="service_card_info md:grid xl:grid-cols-4 md:grid-cols-3  hidden justify-center 2xl:gap-[70px] gap-6">
              <div className="">
                <div className="relative top-[0%]">
                  <Image className="w-full z-[5]" src={moon} alt="" />
                </div>
                <div className="flex items-center justify-center  -mt-[30%]">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>
                <div className="service_card_meta relative top-[33%] text-center">
                  <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="relative top-[50%]">
                  <Image className="w-full z-[5]" src={moonUp} alt="" />
                </div>
                <div className="flex items-center justify-center  -mt-[30%]">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>
                <div className="service_card_meta relative top-[33%] text-center">
                  <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="">
                <div className="relative top-[0%]">
                  <Image className="w-full z-[5]" src={moon} alt="" />
                </div>
                <div className="flex items-center justify-center  -mt-[30%]">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>
                <div className="service_card_meta relative top-[33%] text-center">
                  <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="relative xl:top-0 top-[16%]">
                <div className="relative top-[50%]">
                  <Image className="w-full z-[5]" src={moonUp} alt="" />
                </div>
                <div className="flex items-center justify-center  -mt-[30%]">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>
                <div className="service_card_meta relative top-[33%] text-center">
                  <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
