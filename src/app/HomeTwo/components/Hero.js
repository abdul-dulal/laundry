import Image from "next/image";
import React from "react";
import hero from "@/public/img/homeTwo/hero-01.png";
import Link from "next/link";
const Hero = () => {
  return (
    <section class="hero_section_area style_1 home_tow_area bg-[#0b103e] relative overflow-hidden w-full bg-[url('/img/homeTwo/rounded-circle-02.png')]">
      <div class="hero_section bg-center bg-no-repeat bg-cover relative">
        <div class="page_number_count absolute top-1/2 right-[3%] translate-y-[-50%] bg-white text-[#142137] font-medium text-[17px] leading-[50px] pl-[22px] rounded-full w-[101px] h-[50px]">
          01
        </div>
        <div class="overly_color_bg w-full h-full absolute top-0 bg-no-repeat bg-[url('/img/homeTwo/rounded-circle.png')]"></div>
        <div
          class="hero_overly w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, #142137 0%, rgba(20, 33, 55, 0.1) 89.82%)",
          }}
        >
          <div class="container relative">
            <div class="">
              <div class="">
                <div class="hero_area_wrapper style_1  relative z-[100]">
                  <div class="overly_circle absolute top-[-245px] left-[-445px] w-[1502px] h-[1502px] rounded-full bg-[#ffffff08] overflow-hidden"></div>
                  <div class="overly_tow absolute top-1/2 left-[-160px] w-[812px] h-[812px] rounded-full bg-[#ffffff08] translate-y-[-50%]"></div>
                  <div class="hero_img absolute right-0 bottom-0">
                    <Image className="block" src={hero} alt="Laundry hero" />
                  </div>
                  <div class="hero_contains style_1 h-[840px] flex flex-col justify-center items-start gap-[48px]">
                    <div class="heading_area z-[10]">
                      <div class="heading">
                        <h2 className="font-semibold text-[100px] leading-[110%] tracking-[-0.02em] text-white">
                          Nonstop Laundry & <br /> Dry Cleaning.
                        </h2>
                      </div>
                      <div class="description style_1 mt-8">
                        <p className="font-medium text-[18px]  leading-[167%] text-[#ffffffb3] mt-[12px] ">
                          Nonstop Laundry & Dry Cleaning, we provide fast,
                          reliable, and hassle-free laundry <br />
                          solutions tailored to your busy lifestyle. Our 24/7
                          professional service ensures clothes <br />
                          are cleaned, fresh, and delivered right to your
                          doorstep.
                        </p>
                      </div>
                    </div>
                    <div class="hero_user_info style_1  flex flex-wrap flex-row justify-start items-center gap-[10px] z-10">
                      <Link
                        href="/"
                        class="btn_wrapper_area style_2 group  rounded-[100px] bg-white relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-[#142137] before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-[#142137] after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
                      >
                        <span className="flex items-center gap-[10px] px-6 text-[#142137] group-hover:text-white group-hover:delay-300 group-hover:transition-all text-[15px] font-medium transition-all duration-[.4s]">
                          <span>
                            {" "}
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
                        class="btn_wrapper_area style_2 group  rounded-[100px] bg-primary relative overflow-hidden transition-all duration-[0.7s] ease-in-out z-10 text-center leading-[54px] border border-transparent before:content-[''] before:absolute before:top-[-80px] before:right-[-60px] before:w-0 before:h-[200px] before:bg-white before:transition-all before:duration-[1.2s] before:ease-in-out before:z-[-1] before:rotate-[-20deg] after:content-[''] after:absolute after:top-[-70px] after:left-[-60px] after:w-0 after:h-[200px] after:bg-white after:transition-all after:duration-[1.2s] after:ease-in-out after:z-[-1] after:rotate-[-20deg] hover:after:w-full hover:before:w-full"
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
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.7203 17.16C16.3195 16.26 16.543 15.8 17 14.79C13.6282 13.53 13.09 8.79999 16.4211 6.98999C15.4055 5.72999 13.9735 5 12.6228 5C11.6478 5 10.9775 5.25001 10.3783 5.48001C9.87053 5.67001 9.41351 5.84 8.84478 5.84C8.23542 5.84 7.69716 5.65001 7.12843 5.45001C6.50891 5.23001 5.85893 5 5.04645 5C3.53322 5 1.91843 5.91 0.892679 7.47C-0.549464 9.67 -0.295563 13.79 2.03015 17.31C2.86293 18.57 3.98009 19.98 5.43238 20C6.04174 20.01 6.43782 19.83 6.87453 19.64C7.37217 19.42 7.91043 19.18 8.85493 19.18C9.79943 19.17 10.3275 19.42 10.8252 19.64C11.2517 19.83 11.6377 20.01 12.2369 20C13.7095 19.98 14.8876 18.42 15.7203 17.16Z"
                                fill="currentColor"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
