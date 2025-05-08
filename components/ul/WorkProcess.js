import Image from "next/image";
import React from "react";
import videoThumb from "@/public/img/home/video-thumb.png";
import icon from "@/public/img/home/sample-icon-01.png";
import moon from "@/public/img/home/moon-down.png";
import youtubeIcon from "@/public/img/home/youtube-icon.png";
import moonUp from "@/public/img/home/moon-up.png";
const WorkProcess = () => {
  return (
    <section class="laundry_service_steps overflow-hidden lg:py-[140px] md:py-[100px] py-20">
      <div class="container">
        <div class="heading_area text-center">
          <div class="heading">
            <h2>Using Laundre Made Simple</h2>
          </div>
          <div class="description">
            <p className="font-medium text-[18px] leading-[167%] text-[rgba(20,33,55,0.7)] mt-[12px]">
              The modern and convenient approach to laundry and dry cleaning.
            </p>
          </div>
        </div>
        <div class="">
          <div class="view_our_services w-full h-fit p-0 relative mt-[60px] reveal_image">
            <Image
              className="w-full h-full object-contain"
              src={videoThumb}
              alt="Laundry video"
            />
            <a
              class="playBtn"
              href="https://www.youtube.com/embed/i6ZU0Hc3ap8?si=36VYEBItQRDb7r7a"
            >
              <span className="absolute top-1/2 left-1/2 text-[70px] transform -translate-x-1/2 -translate-y-1/2">
                <Image src={youtubeIcon} alt="Laundry icon" />
              </span>
            </a>
          </div>
        </div>

        <div class="">
          <div class="servers_card_wrapper  mt-[57px]">
            <div className="service_card_info grid xl:grid-cols-4 grid-cols-2 gap-[70px]">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>

                <div>
                  <Image className="w-full z-[5]" src={moon} alt="" />
                </div>

                <div className="service_card_meta mt-20 text-center">
                  <h3 className="font-semibold text-[30px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>

                <div>
                  <Image
                    className="relative -bottom-[180px] w-full -z-[99]"
                    src={moonUp}
                    alt=""
                  />
                </div>

                <div className="service_card_meta mt-20 text-center">
                  <h3 className="font-semibold text-[30px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>

                <div>
                  <Image className="w-full z-[5]" src={moon} alt="" />
                </div>

                <div className="service_card_meta mt-20 text-center">
                  <h3 className="font-semibold text-[30px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50]">
                    <Image className="" src={icon} alt="" />
                  </div>
                </div>

                <div>
                  <Image
                    className="relative -bottom-[180px] w-full -z-[99]"
                    src={moonUp}
                    alt=""
                  />
                </div>

                <div className="service_card_meta mt-20 text-center">
                  <h3 className="font-semibold text-[30px] tracking-[-0.02em] text-primary">
                    You Order
                  </h3>
                  <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                    Quickly book your laundry <br /> pickup online.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
