import React from "react";
import bg from "@/public/img/about/breadcumb-bg.png";
import Image from "next/image";
import Link from "next/link";
const BreadCumb = ({ currentPage }) => {
  return (
    <section className="relative">
      <div className="relative w-full  overflow-hidden bg-[url('/img/about/breadcumb-bg.png')] bg-cover bg-no-repeat h-[370px] flex items-center">
        <div className="container">
          <div className=" relative z-[99]">
            <h2 className="text-[60px] text-white font-semibold leading-[110px] -tracking-[2%] mb-[34px]">
              {currentPage}
            </h2>
            <div className="inline-block">
              <div className="flex items-center gap-2 py-[9px] px-4 bg-white/10 backdrop-blur-[14px]  rounded-full">
                <Link
                  className="group text-[16px] font-medium leading-[110%] text-white flex  transition-all duration-500 ease-in gap-2 hover:text-secondary"
                  href="/"
                >
                  <span>
                    <svg
                      width="20"
                      height="16"
                      viewBox="0 0 20 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-500 ease-out text-white group-hover:text-secondary"
                    >
                      <path
                        d="M16.1458 15.9992H11.0897V11.0576H8.295V15.985H3.01079C3.00405 15.8855 2.98984 15.7786 2.98984 15.6716C2.98834 13.6145 2.99134 11.5581 2.98535 9.50094C2.98535 9.31169 3.02799 9.17928 3.18732 9.0581C5.25568 7.47523 7.31879 5.88563 9.38341 4.29827C9.44101 4.25413 9.50459 4.21673 9.58388 4.16437C9.74771 4.28854 9.90555 4.40674 10.0619 4.52717C12.0076 6.02402 13.9532 7.52161 15.8997 9.01696C16.0508 9.1329 16.1667 9.23539 16.1652 9.46504C16.154 11.5715 16.1585 13.6788 16.1577 15.7853C16.1577 15.8459 16.1503 15.9057 16.1443 16L16.1458 15.9992Z"
                        fill="currentColor"
                      />
                      <path
                        d="M19.15 7.36603C18.699 7.9525 18.2741 8.50381 17.8282 9.08355C15.0784 6.96882 12.345 4.86605 9.57576 2.73561C6.83417 4.84436 4.09332 6.95236 1.32255 9.0828C0.87746 8.50456 0.446585 7.94577 0 7.36453C3.19267 4.90869 6.37038 2.46407 9.57352 0C10.9155 1.03081 12.2523 2.05788 13.6616 3.14031V1.82449H16.4443V2.21946C16.4443 3.11712 16.4571 4.01477 16.4369 4.91168C16.4301 5.19594 16.5289 5.36276 16.7503 5.52733C17.5492 6.12203 18.3332 6.73767 19.15 7.36603Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  Home
                </Link>
                <span className="mr-2 text-white">•</span>
                <Link
                  className="text-[16px] font-medium leading-[110%] text-white flex gap-2 transition-all duration-500 ease-in  hover:text-secondary"
                  href=""
                >
                  {currentPage}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 "
        style={{
          background:
            "linear-gradient(90deg, #192F54 0%, rgba(20, 33, 55, 0.1) 89.82%)",
        }}
      ></div>
    </section>
  );
};

export default BreadCumb;
