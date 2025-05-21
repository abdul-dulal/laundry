"use client";
import Image from "next/image";
import React from "react";
import shirt from "@/public/img/homeTwo/t-shirt-icon.png";
import blanket from "@/public/img/homeTwo/blanket-icon.png";
import price from "@/public/img/homeTwo/price.png";
import iron from "@/public/img/homeTwo/iron-icon.png";
import dry from "@/public/img/homeTwo/dry-icon.png";

import PriceContent from "./PriceContent";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import AnimatedHeading from "@/components/ul/AnimatedHeading";
import { useInView } from "react-intersection-observer";
const Price = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  return (
    <section className="pt-[100px] xxl:pb-0 pb-20 bg-[#181D4C]">
      <div className="container">
        <div className="text-center">
          <div className="">
            <FadeUpAnimationProvider>
              <h4 className="text-white/70 py-1 mb-[34px]">Price Packages</h4>
            </FadeUpAnimationProvider>
          </div>
          <div className="mb-[43px] ">
            <div className="block m-auto max-w-[626px]">
              <AnimatedHeading
                text="High-Quality Laundry & Dry Cleaning."
                showColor={true}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:gap-[30px] gap-0">
          <div className="xxl:col-span-3 lg:col-span-6 col-span-12 ">
            <FadeUpAnimationProvider>
              <div className="flex  xxl:flex-col sm:flex-row flex-col justify-start items-start gap-[30px]">
                <PriceContent
                  img={shirt}
                  title="Shirts Service"
                  price=" $24.00"
                />
                <PriceContent
                  img={iron}
                  title="Ironing Service"
                  price=" $10.00"
                />
              </div>
            </FadeUpAnimationProvider>
          </div>

          <div className="xxl:col-span-6 xxl:block hidden">
            <div
              ref={ref}
              className="w-full flex flex-row justify-center items-center"
            >
              {inView ? (
                <div className="rounded-full bg-[#ffffff0f] w-full max-w-[812px] h-[740px] relative zoomIn">
                  <Image
                    className="object-contain absolute bottom-0 left-[53%] translate-x-[-43%]"
                    src={price}
                    alt="Laundry price"
                  />
                </div>
              ) : (
                <div className="rounded-full bg-[#ffffff0f] w-full max-w-[812px] h-[740px] relative">
                  <Image
                    className="object-contain absolute bottom-0 left-[53%] translate-x-[-43%]"
                    src={price}
                    alt="Laundry price"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="xxl:col-span-3 lg:col-span-6 col-span-12 ">
            <FadeUpAnimationProvider>
              <div className="flex  xxl:flex-col sm:flex-row flex-col justify-start items-start gap-[30px]">
                <PriceContent
                  img={blanket}
                  title="Blanket Service"
                  price="$32.00"
                />
                <PriceContent img={dry} title="Dry Cleaning" price="$16.00" />
              </div>
            </FadeUpAnimationProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
