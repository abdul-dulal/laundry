import Image from "next/image";
import React from "react";
import shirt from "@/public/img/homeTwo/t-shirt-icon.png";
import blanket from "@/public/img/homeTwo/blanket-icon.png";
import price from "@/public/img/homeTwo/price.png";
import iron from "@/public/img/homeTwo/iron-icon.png";
import dry from "@/public/img/homeTwo/dry-icon.png";
import Link from "next/link";
import PriceContent from "./PriceContent";
const Price = () => {
  return (
    <section class="second_price_packages_area pt-[100px] bg-[#181D4C]">
      <div class="container">
        <div class="heading_area style_1 text-center">
          <div class="">
            <h4 className="text-white/70 py-1 mb-[34px]">Price Packages</h4>
          </div>
          <div class="mb-[43px] ">
            <h2 className="text-white">
              High-Quality Laundry & <br /> Dry Cleaning.
            </h2>
          </div>
        </div>
        <div class="price_packages_wrapper grid grid-cols-12">
          {/* col-xxl-3 col-xl-3 col-12 */}
          <div class="xxl:col-span-3 col-span-6 ">
            <div class="price_packages_card_area flex  xxl:flex-col flex-row justify-start items-start gap-[30px]">
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
          </div>
          {/* col-xxl-6 col-xl-6 col-12 */}
          <div class="xxl:col-span-6 col-span-12">
            <div class="price_image w-full flex flex-row justify-center items-center">
              <div class="price_packages_img_area rounded-full bg-[#ffffff0f] w-full max-w-[812px] h-[812px] relative">
                <Image
                  className="object-contain absolute bottom-[56px] left-[53%] translate-x-[-43%]"
                  src={price}
                  alt="Laundry price"
                />
              </div>
            </div>
          </div>
          <div class="xxl:col-span-3 col-span-6">
            <div class="price_packages_card_area style_1 flex flex-col justify-start items-start gap-[30px]">
              <PriceContent
                img={blanket}
                title="Blanket Service"
                price="$32.00"
              />
              <PriceContent img={dry} title="Dry Cleaning" price="$16.00" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
