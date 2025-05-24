import React from "react";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import Link from "next/link";

const LaundryCategory = () => {
  const category = [
    { title: "Laundry Services", amaount: "6" },
    { title: "Professional Dry Cleaning", amaount: "8" },
    { title: "Coats & Jackets Cleaning", amaount: "3" },
    { title: "Shoe & Sneaker Cleaning", amaount: "5" },
  ];
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
        <div>
          {category.map((item, index) => {
            return (
              <div key={index}>
                <FadeUpAnimationProvider>
                  <li className="w-full mb-6 list-none">
                    <Link
                      className="border border-[#1421371a] w-full font-[Poppins] font-medium text-[15px] text-[#142137b3] transition-all duration-500 ease-out hover:bg-secondary hover:text-white flex flex-row justify-between items-center px-[20px] py-[10px] 
"
                      href="/"
                    >
                      <span>
                        <span className="mr-[6px]">•</span>
                        {item.title}
                      </span>
                      <span>({item.amaount})</span>
                    </Link>
                  </li>
                </FadeUpAnimationProvider>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LaundryCategory;
