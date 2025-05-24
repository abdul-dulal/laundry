import React from "react";
import moonUp from "@/public/img/home/moon-up.png";
import icon from "@/public/img/home/sample-icon-01.png";
import icon2 from "@/public/img/home/sample-icon-2.png";
import icon3 from "@/public/img/home/sample-icon-3.png";
import icon4 from "@/public/img/home/sample-icon-4.png";
import moon from "@/public/img/home/moon-down.png";
import Image from "next/image";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import AnimatedHeading from "@/components/ul/AnimatedHeading";
const Solutaion = () => {
  return (
    <section className="pb-20">
      <div className="container">
        <div className="text-center">
          <FadeUpAnimationProvider>
            <h5 className="text-primary/70 leading-[27px]  border border-[rgb(217,219,223)] px-[20px] py-0 inline-block mb-[34px]">
              <span className="mr-2">•</span>Our Process
            </h5>
          </FadeUpAnimationProvider>
          <div className="max-w-[663px] block m-auto mb-[50px]">
            <AnimatedHeading text="The Solutions We Provide For Our Clients." />
          </div>
        </div>
        <div className="md:grid xl:grid-cols-4 md:grid-cols-3  hidden justify-center 2xl:gap-[70px] gap-6 pb-[150px]">
          <div className="">
            <div className="relative top-[0%]">
              <Image className="w-full z-[5]" src={moon} alt="" />
            </div>
            <div className="flex items-center justify-center  -mt-[30%]">
              <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                <Image className="" src={icon} alt="" />
              </div>
            </div>
            <div className="relative top-[33%] text-center">
              <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary mb-4">
                You Order
              </h3>
              <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                Quickly book your laundry <br /> pickup online.
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative top-[50%]">
              <Image className="w-full z-[5]" src={moonUp} alt="" />
            </div>
            <div className="flex items-center justify-center  -mt-[30%]">
              <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                <Image className="" src={icon2} alt="" />
              </div>
            </div>
            <div className="relative top-[33%] text-center">
              <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary mb-4">
                We Collect
              </h3>
              <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                No bag needed – just hand <br /> over your clothes!
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative top-[0%]">
              <Image className="w-full z-[5]" src={moon} alt="" />
            </div>
            <div className="flex items-center justify-center  -mt-[30%]">
              <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                <Image className="" src={icon3} alt="" />
              </div>
            </div>
            <div className="relative top-[33%] text-center">
              <h3 className="font-semibold lg:text-[30px] text-[26px] tracking-[-0.02em] text-primary mb-4">
                We Clean
              </h3>
              <p className="font-medium text-[15px] leading-[162%] text-[#14213799]">
                Superior cleaning satisfaction <br /> assured.
              </p>
            </div>
          </div>
          <div className="relative xl:top-0 top-[16%]">
            <div className="relative top-[50%]">
              <Image className="w-full z-[5]" src={moonUp} alt="" />
            </div>
            <div className="relative flex justify-center items-center  -mt-[30%] ">
              <div className="grid place-content-center transition-all duration-[600ms] ease-in-out size-[170px] bg-[#ecf2fe] rounded-full text-center leading-[170px] z-[50] move">
                <Image className="" src={icon4} alt="" />
              </div>
            </div>
            <div className="relative top-[33%] text-center">
              <h3 className="font-semibold lg:text-[30px] text-[26px]  tracking-[-0.02em] text-primary mb-4">
                We Deliver
              </h3>
              <p className="font-medium text-[16px] leading-[162%] text-[#14213799]">
                Pick a time, and we’ll deliver <br /> straight to you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutaion;
