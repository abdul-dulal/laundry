"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import icon from "@/public/img/home/sample-icon-01.png";
import icon2 from "@/public/img/home/sample-icon-2.png";
import icon3 from "@/public/img/home/sample-icon-3.png";
import icon4 from "@/public/img/home/sample-icon-4.png";
import moon from "@/public/img/home/moon-down.png";
import youtubeIcon from "@/public/img/home/youtube-icon.png";
import moonUp from "@/public/img/home/moon-up.png";
import AnimatedHeading from "./AnimatedHeading";

import thumb from "@/public/img/home/video-thumb.png";

import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";
import VideoPopup from "./VideoPopup";
import { gsap } from "gsap";
import { useInView } from "react-intersection-observer";

const WorkProcess = () => {
  const revealRef = useRef(null);
  const imageRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  const closePopup = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (inView) {
      gsap.to(revealRef.current, {
        left: "100%",
        duration: 3.5,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 3.5,
        ease: "power3.out",
      });
    }
  }, [inView]);
  return (
    <section className="overflow-hidden lg:py-[140px] md:py-[100px] py-20">
      <div className="container">
        <div className="text-center">
          <div className="">
            <AnimatedHeading text="Using Laundre Made Simple" />
          </div>
          <div className="">
            <FadeUpAnimationProvider>
              <p className="font-medium text-[18px] leading-[167%] text-[rgba(20,33,55,0.7)] mt-[12px]">
                The modern and convenient approach to laundry and dry cleaning.
              </p>
            </FadeUpAnimationProvider>
          </div>
        </div>
        <div className="">
          <div ref={ref} className="relative overflow-hidden">
            <div
              ref={revealRef}
              className="absolute top-0 left-0 w-full h-full bg-white z-10"
            ></div>

            <div
              className="flex items-center justify-center 2xl:h-[670px] lg:h-[500px] h-[350px]  w-full  p-0 relative mt-[60px]  bg-cover "
              style={{ backgroundImage: `url('${thumb.src}')` }}
            >
              <button onClick={togglePopup} className="">
                <span className="text-[70px]">
                  <Image src={youtubeIcon} alt="Laundry icon" />
                </span>
              </button>
              <VideoPopup isOpen={isOpen} togglePopup={togglePopup} />
            </div>
          </div>
        </div>

        <div className="">
          <FadeUpAnimationProvider>
            <div className="mt-[57px]">
              <div className="md:grid xl:grid-cols-4 md:grid-cols-3  hidden justify-center 2xl:gap-[70px] gap-6">
                <div className="">
                  <div className="relative top-[0%]">
                    <Image className="w-full z-[5]" src={moon} alt="" />
                  </div>
                  <div className="flex items-center justify-center  -mt-[30%]">
                    <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                      <Image className="" src={icon} alt="" />
                    </div>
                  </div>
                  <div className="relative top-[33%] text-center">
                    <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary mb-4">
                      You Order
                    </h3>
                    <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                      Quickly book your laundry <br /> pickup online.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="relative top-[50%]">
                    <Image className="w-full z-[5]" src={moonUp} alt="" />
                  </div>
                  <div className="flex items-center justify-center  -mt-[30%]">
                    <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                      <Image className="" src={icon2} alt="" />
                    </div>
                  </div>
                  <div className="relative top-[33%] text-center">
                    <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary mb-4">
                      We Collect
                    </h3>
                    <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                      No bag needed – just hand <br /> over your clothes!
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="relative top-[0%]">
                    <Image className="w-full z-[5]" src={moon} alt="" />
                  </div>
                  <div className="flex items-center justify-center  -mt-[30%]">
                    <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                      <Image className="" src={icon3} alt="" />
                    </div>
                  </div>
                  <div className="relative top-[33%] text-center">
                    <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary mb-4">
                      We Clean
                    </h3>
                    <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                      Superior cleaning satisfaction <br /> assured.
                    </p>
                  </div>
                </div>
                <div className="relative xl:top-0 top-[16%]">
                  <div className="relative top-[50%]">
                    <Image className="w-full z-[5]" src={moonUp} alt="" />
                  </div>
                  <div className="relative flex justify-center items-center  -mt-[30%] ">
                    <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                      <Image className="" src={icon4} alt="" />
                    </div>
                  </div>
                  <div className="relative top-[33%] text-center">
                    <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary mb-4">
                      We Deliver
                    </h3>
                    <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                      Pick a time, and we’ll deliver <br /> straight to you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpAnimationProvider>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
