"use client";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { heroSlider } from "../data";
const Hero = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section className="relatvie pt-12 bg-[#0b103e] relative overflow-hidden w-full bg-[url('/img/homeTwo/rounded-circle-02.png')]">
      <div className="bg-center bg-no-repeat bg-cover relative">
        <div className="w-full h-full absolute left-0 top-0 bg-no-repeat bg-[url('/img/homeTwo/rounded-circle.png')] "></div>
        <div
          className="w-full h-full bg-no-repeat"
          style={{
            background:
              "linear-gradient(90deg, #142137 0%, rgba(20, 33, 55, 0.1) 89.82%)",
          }}
        >
          <div>
            <div className="absolute top-[-245px] left-[-445px] w-[1502px] h-[1502px] rounded-full bg-[#ffffff08] overflow-hidden"></div>
            <div className="absolute top-1/2 left-[0px] w-[812px] h-[812px] rounded-full bg-[#ffffff08] translate-y-[-50%]"></div>
          </div>
          <div className="container relative">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                setActiveIndex(swiper.realIndex + 1);
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex + 1)}
              slidesPerView={1}
              speed={1000}
              loop={true}
              className="rounded-lg overflow-hidden"
            >
              {heroSlider.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="">
                      <div className="">
                        <div className=" relative z-[100]">
                          <div className="absolute right-0 bottom-0">
                            <Image
                              className="block"
                              src={item.img}
                              width={534}
                              height={780}
                              alt="Laundry hero"
                            />
                          </div>
                          <div className="lg:h-[840px] md:h-[740px] h-[650px] flex flex-col justify-center items-start gap-[48px]">
                            <div className="z-[10]">
                              <div className="">
                                <h2 className="font-semibold lg:text-[100px] md:text-[70px] sm:text-[55px] text-[40px] leading-[110%] tracking-[-0.02em] text-white">
                                  {item.title}
                                  <br className="sm:block hidden" />
                                  {item.titleTwo}
                                </h2>
                              </div>
                              <div className="mt-8">
                                <p className="font-medium md:text-[18px] text-[16px]  leading-[167%] text-[#ffffffb3] mt-[12px] ">
                                  Nonstop Laundry & Dry Cleaning, we provide
                                  fast, reliable, and hassle-free laundry{" "}
                                  <br className="lg:block hidden" />
                                  solutions tailored to your busy lifestyle. Our
                                  24/7 professional service ensures clothes{" "}
                                  <br className="lg:block hidden" />
                                  are cleaned, fresh, and delivered right to
                                  your doorstep.
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap flex-row justify-start items-center gap-[10px] z-10">
                              <Link
                                href="/"
                                className="group  rounded-[100px] bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-[#142137] before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-[#142137] after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                              >
                                <span className="flex items-center gap-[10px] px-6 text-[#142137] group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                                  <span>
                                    <svg
                                      width="18"
                                      height="20"
                                      viewBox="0 0 18 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="transition-all duration-500 text-primary group-hover:text-white"
                                    >
                                      <path
                                        d="M17.4669 11.2822L14.9639 12.8548C14.7929 12.9679 14.5858 12.9227 14.4417 12.753L12.7581 10.6374C12.578 10.4111 12.578 10.0604 12.7581 9.83413L14.4687 7.68457C14.6038 7.51487 14.8199 7.46963 14.9909 7.58276L17.4669 9.144C18.1781 9.57391 18.1781 10.841 17.4669 11.2822Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M12.8751 6.23521C13.1542 6.40491 13.2082 6.86878 12.9921 7.1403L11.4886 9.0296L10.8493 9.83287C10.6693 10.0591 10.3902 10.0591 10.2101 9.83287L3.78169 1.75514C3.42155 1.30261 3.84471 0.567255 4.30388 0.850088L12.8751 6.23521Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M0 19.4278V0.568544C0 0.0707571 0.477178 -0.189467 0.765286 0.161246L8.66124 9.7889C8.85031 10.0152 8.84131 10.3885 8.65224 10.6147L0.756283 19.8464C0.468175 20.1858 0 19.9256 0 19.4278Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M12.8481 14.1885L4.39397 19.5057C3.9348 19.7886 3.51164 19.0532 3.87177 18.6007L10.2191 10.6248C10.3992 10.3985 10.6783 10.3985 10.8584 10.6248L12.9742 13.2834C13.1813 13.5549 13.1182 14.0188 12.8481 14.1885Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  Play Store
                                </span>
                              </Link>
                              <Link
                                href="/"
                                className="group  rounded-[100px] bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-white before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-white after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                              >
                                <span className="flex gap-[10px] items-center px-6 text-white group-hover:text-primary group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                                  <span>
                                    <svg
                                      width="17"
                                      height="20"
                                      viewBox="0 0 17 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="transition-all duration-500 text-white group-hover:text-primary"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M15.7203 17.16C16.3195 16.26 16.543 15.8 17 14.79C13.6282 13.53 13.09 8.79999 16.4211 6.98999C15.4055 5.72999 13.9735 5 12.6228 5C11.6478 5 10.9775 5.25001 10.3783 5.48001C9.87053 5.67001 9.41351 5.84 8.84478 5.84C8.23542 5.84 7.69716 5.65001 7.12843 5.45001C6.50891 5.23001 5.85893 5 5.04645 5C3.53322 5 1.91843 5.91 0.892679 7.47C-0.549464 9.67 -0.295563 13.79 2.03015 17.31C2.86293 18.57 3.98009 19.98 5.43238 20C6.04174 20.01 6.43782 19.83 6.87453 19.64C7.37217 19.42 7.91043 19.18 8.85493 19.18C9.79943 19.17 10.3275 19.42 10.8252 19.64C11.2517 19.83 11.6377 20.01 12.2369 20C13.7095 19.98 14.8876 18.42 15.7203 17.16Z"
                                        fill="currentColor"
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.4095 0C12.572 1.1 12.115 2.19001 11.5158 2.95001C10.876 3.77001 9.75884 4.41 8.68231 4.37C8.48935 3.31 8.98699 2.21999 9.59635 1.48999C10.2768 0.68999 11.4244 0.07 12.4095 0Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  Apple Store
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button
              onClick={() => {
                if (swiperInstance) swiperInstance.slideNext();
              }}
              className="flex gap-2 items-center absolute top-1/2 right-[3%] translate-y-[-50%] bg-white text-[#142137] font-medium text-[17px] leading-[50px] pl-[22px] rounded-full w-[101px] h-[50px] z-[99]"
            >
              <span className="text-black text-sm font-semibold px-2">
                0{activeIndex}
              </span>
              <span className="grid place-content-center size-[34px] rounded-full bg-primary text-white ">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 1L13 7L7 13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
