"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ourService } from "@/utils/data";
import AnimatedHeading from "./AnimatedHeading";
import FadeUpAnimationProvider from "./FadeUpAnimationProvider ";

import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const cardRef = useRef([]);
  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
        }
      );
    }
  }, [inView]);
  return (
    <section className="bg-[#ecf2fe] flex flex-col justify-center items-center flex-wrap lg:py-[150px] md:py-[100px] py-20">
      <div className="container">
        <div className="text-center">
          <FadeUpAnimationProvider>
            <div className="mb-[34px]">
              <h5 className="text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block">
                <span className="mr-2">•</span>Our Services
              </h5>
            </div>
          </FadeUpAnimationProvider>
          <div className="mt-5 max-w-[663px] block m-auto">
            <AnimatedHeading text="The Solutions We Provide For Our Clients." />
          </div>
        </div>
      </div>
      <div
        ref={ref}
        className="w-full max-w-[1920px] flex  flex-row justify-center items-center flex-wrap mx-auto pt-[57px]"
      >
        {ourService.map((service, index) => {
          const isImageVisible =
            hoveredIndex === null ? index === 1 : hoveredIndex === index;
          return (
            <div
              key={index}
              ref={(el) => (cardRef.current[service.id] = el)}
              className="group max-w-[481px] h-fit xl:w-1/4 md:w-1/2 w-full mb-10"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="xs:px-[60px] px-8 pb-[40px] pt-0 border-r md:border-r-[rgba(20,33,55,0.14)] border-transparent">
                <div className="service_icon">
                  <Image
                    src={service.icon}
                    width={64}
                    height={64}
                    alt={service.title}
                  />
                </div>
                <div className="xs:mt-[50px] mt-10 mb-[16px]">
                  <Link
                    className="font-semibold xs:text-[30px] text-[26px] tracking-[-0.02em] text-primary"
                    href="/service-details"
                  >
                    {service.title}
                  </Link>
                </div>
                <div className="">
                  <p>
                    Our expert team ensures that your garments <br />
                    are cleaned to the highest standards, using <br />
                    eco-friendly detergents.
                  </p>
                </div>
                <div className="inline-block">
                  <Link
                    href="/service-details"
                    className="flex  items-center gap-[10px] xs:mt-20 mt-10 text-[15px] font-medium text-primary leading-[100%]"
                  >
                    Read More{" "}
                    <span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6L11 6"
                          stroke="#142137"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 1L11 6L6 11"
                          stroke="#142137"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
              <div>
                <Image
                  src={service.img}
                  className={`w-full transition-all duration-500 ease-out transform ${
                    isImageVisible
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95"
                  }`}
                  width={481}
                  height={223}
                  alt={service.title}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
