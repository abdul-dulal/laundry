"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { services } from "../data";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import AnimatedHeading from "@/components/ul/AnimatedHeading";
import { useInView } from "react-intersection-observer";
const Service = ({ showItem, showTop }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const serviceRef = useRef([]);
  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        serviceRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.4,
        }
      );
    }
  }, [inView]);

  const sliceService = services.slice(0, showItem);
  return (
    <section
      className={`${
        showTop
          ? "lg:py-[150px] md:py-[100px] py-20"
          : "lg:pb-[150px] md:pb-[100px] pb-20"
      }`}
    >
      <div className="container">
        {showItem == 4 && (
          <div className="text-center">
            <FadeUpAnimationProvider>
              <h4 className="mb-[34px]">Premium Laundry Service</h4>
            </FadeUpAnimationProvider>
            <div className="max-w-[847px] block m-auto mb-[64px]">
              <AnimatedHeading text="Pro Laundry & Dry Cleaning Free Collection & Return." />
            </div>
          </div>
        )}
        <div
          ref={ref}
          className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-[29px]"
        >
          {sliceService.map((service, index) => {
            return (
              <div
                key={index}
                ref={(el) => (serviceRef.current[service.id] = el)}
              >
                <div
                  className="group relative transition-all  duration-700 border border-solid border-primary/15 hover:border-[#EBEFF3]  bg-transparent 
           after:absolute after:content-[''] after:w-full after:bottom-0 after:h-0 after:opacity-0 after:bg-[#EBEFF3] after:duration-700 after:ease-in-out after:overflow-hidden hover:after:opacity-100 hover:after:top-0 hover:after:w-full hover:after:h-full
          "
                >
                  <div className="relative z-[99] sm:pl-10 pl-7 pr-[45px] py-[60px]">
                    <Image
                      className="mb-[63px]"
                      width={65}
                      height={74}
                      src={service.icon}
                      alt={service.title}
                    />
                    <Link
                      href="/service-details"
                      className="block xs:text-[30px] text-[26px] font-semibold text-primary leading-[100%] -tracking-[2%] xs:mb-[34px] mb-6"
                    >
                      {service.title}
                    </Link>
                    <p className="text-[16px] text-primary/70 font-normal leading-[24px] mb-20">
                      We provide professional reliable & hassle-free dry
                      cleaning & laundry services tailored to your needs.
                    </p>
                    <Link
                      href="/service-details"
                      className="block   rounded-[100px] w-full bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-primary/70 before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-primary before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-primary after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] group-hover:after:w-full group-hover:before:w-full"
                    >
                      <div className="flex  gap-[16px] justify-between items-center pl-6  text-primary group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                        <span> Read More</span>
                        <span className="grid place-content-center size-[34px] bg-primary transition-all duration-500 group-hover:bg-white rounded-full mr-[10px]">
                          <svg
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-white transition-all duration-500 group-hover:text-primary group-hover:rotate-[45deg]"
                          >
                            <path
                              d="M4.75757 13.7577L13.2429 5.27241"
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
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
