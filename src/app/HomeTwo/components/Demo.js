"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import laundryImg from "@/public/img/homeTwo/collect-01.png";

const slides = [
  {
    title: "Collect all your laundry",
    subtitle: "For cleaning.",
    description:
      "We make it easy for you to keep your clothes fresh and clean. Simply collect all your laundry, and we’ll take care of the rest...",
    icon: "/icons/laundry-icon.svg",
  },
  // Add more slides as needed
];

export default function LaundrySlider() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{
        el: ".custom-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className}">${index + 1}</span>`;
        },
      }}
      className="w-full h-[100vh] flex"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-[50vh] md:h-full relative">
              <Image
                src={laundryImg}
                alt="Laundry"
                fill
                className="object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 bg-[#0A1D56] text-white p-10 flex flex-col justify-center relative">
              <div className="mb-6">
                <Image src={slide.icon} alt="Icon" width={50} height={50} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                {slide.title} <br />
                <span className="text-[#D3E3FC]">{slide.subtitle}</span>
              </h2>
              <p className="text-sm mt-4 text-[#B0C4DE]">{slide.description}</p>
              <button className="mt-8 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                Get Service Now
              </button>

              {/* Pagination */}
              <div className="custom-pagination2 absolute bottom-6 right-6 flex gap-3" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
