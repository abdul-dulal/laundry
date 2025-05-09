import React from "react";
import service from "@/public/img/home/service_icon1.png";
import Image from "next/image";
import Link from "next/link";
import { ourService } from "@/utils/data";
const Service = () => {
  return (
    <section class="our_service_area bg-[#ecf2fe] flex flex-col justify-center items-center flex-wrap lg:py-[150px] md:py-[100px] py-20">
      <div class="container">
        <div class="heading_area text-center">
          <div class="sub_heading style_1">
            <h4>
              <span className="mr-2">•</span>Our Services
            </h4>
          </div>
          <div class="heading">
            <h2>
              The Solutions We Provide <br /> For Our Clients.
            </h2>
          </div>
        </div>
      </div>
      <div class="our_service_container w-full max-w-[1920px] flex  flex-row justify-center items-center flex-wrap mx-auto pt-[57px]">
        {ourService.map((service, index) => {
          return (
            <div
              key={index}
              class="our_service_contains max-w-[481px] h-fit xl:w-1/4 md:w-1/2 w-full mb-10"
            >
              <div class="service_contains_wrapper px-[60px] pb-[40px] pt-0 border-r md:border-r-[rgba(20,33,55,0.14)] border-transparent">
                <div class="service_icon">
                  <Image
                    src={service.icon}
                    width={64}
                    height={64}
                    alt={service.title}
                  />
                </div>
                <div class="heading mt-[50px] mb-[16px]">
                  <Link
                    className="font-semibold text-[30px] tracking-[-0.02em] text-primary"
                    href="#"
                  >
                    {service.title}
                  </Link>
                </div>
                <div class="description style_2">
                  <p>
                    Our expert team ensures that your garments <br />
                    are cleaned to the highest standards, using <br />
                    eco-friendly detergents.
                  </p>
                </div>
                <div className="inline-block">
                  <Link
                    href="/"
                    className="flex  items-center gap-[10px] mt-20 text-[15px] font-medium text-primary leading-[100%]"
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
