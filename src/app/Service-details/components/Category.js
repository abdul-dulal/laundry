import Link from "next/link";
import React from "react";

const Category = () => {
  return (
    <div
      className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
    >
      <div className="">
        <h5
          className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
        >
          Categories
        </h5>
      </div>
      <div className="mt-7">
        <ul>
          <li className="w-full mb-6">
            <Link
              className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px] 
"
              href="/"
            >
              <span>
                <span className="mr-[6px]">•</span>Laundry Services
              </span>
              <span>(6)</span>
            </Link>
          </li>
          <li className="w-full mb-6">
            <Link
              className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px]
"
              href="/"
            >
              <span>
                <span className=" mr-[6px]">•</span>Professional Dry Cleaning
              </span>
              <span>(8)</span>
            </Link>
          </li>
          <li className="w-full mb-6">
            <Link
              className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px]
"
              href="/"
            >
              <span>
                <span className="mr-[6px]">•</span>Coats & Jackets Cleaning
              </span>
              <span>(3)</span>
            </Link>
          </li>
          <li className="w-full mb-6">
            <Link
              className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px]
"
              href="/"
            >
              <span>
                <span className="mr-[6px]">•</span>Carpet & Rug Cleaning
              </span>
              <span>(5)</span>
            </Link>
          </li>
          <li className="w-full mb-6">
            <Link
              className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px]
"
              href=""
            >
              <span>
                <span className="mr-[6px]">•</span>Shoe & Sneaker Cleaning
              </span>
              <span>(7)</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
