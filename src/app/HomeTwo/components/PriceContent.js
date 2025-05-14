import Image from "next/image";
import Link from "next/link";
import React from "react";

const PriceContent = ({ img, title, price }) => {
  return (
    <div
      class="price_packages_card_wrapper border border-[#ffffff24] max-w-[378px] w-full h-[320px] backdrop-blur-[90px] bg-[#181D4CB2]/70 p-[40px] shadow-md"
      style={{ backdropFilter: "blur(50px)" }}
    >
      <div class="price_icon flex flex-row justify-between items-center pb-[36px]">
        <Image src={img} alt="Laundry price" />
        <b className="font-semibold text-[30px] leading-[213%] tracking-[-0.02em] text-center text-white">
          {price}
        </b>
      </div>
      <h5 className="text-2xl font-semibold text-white">{title}</h5>
      <p className="font-medium text-[16px] leading-[162%] text-[#ffffffb3] mt-[7px]">
        Washed & Pressed
      </p>
      <div class="price_package_btn mt-[37px]">
        <Link
          href="/"
          className="group border border-[#ffffff24] rounded-[50px] w-[161px] h-[44px] flex justify-between items-center pl-[30px] pr-[5px] font-poppins font-medium text-[15px] text-white bg-transparent transition-all duration-500 hover:bg-white hover:text-primary"
        >
          Order Now
          <span className="rounded-[50px] grid place-content-center w-[34px] h-[34px] bg-white transition-all duration-500 group-hover:bg-primary text-[#142137] leading-[34px] text-center ">
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary group-hover:text-white group-hover:rotate-[45deg]"
            >
              <path
                d="M4.90405 13.5967L13.3893 5.1114"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.0962 12.8892V4.40388H5.61091"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PriceContent;
