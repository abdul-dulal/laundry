import React from "react";
import team from "@/public/img/team/team.png";
import Image from "next/image";
import HeroContent from "./HeroContent";
const Hero = () => {
  return (
    <section className="lg:py-[150px] md:py-[120px] py-20 ">
      <div className="container">
        <div className="">
          <div className="text-center">
            <div className="">
              <h2>The Principles That Define Us</h2>
            </div>
            <div className=" lg:mt-11 mt-7 lg:mb-[70px] mb-8">
              <p className="block m-auto text-base font-normal leading-[26px] text-primary/70 max-w-[646px]">
                Revolutionized the way you think about dry cleaning and laundry.
                Our mission is simple: to make laundry day hassle-free. With our
                easy-to-use service, you can enjoy the convenience of
                professional dry cleaning and laundry.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 lg:gap-[30px] items-stretch">
            <div className="lg:col-span-8 col-span-12">
              <div className="h-full">
                <div className="principle_img_wrapper h-full">
                  <Image
                    src={team}
                    alt="Laundry Team"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 col-span-12 lg:mt-0 mt-[30px]">
              <div className="bg-primary 2xl:py-[50px] py-10 sm:px-10 px-5 h-full flex flex-col justify-center">
                <HeroContent
                  title="Customer First"
                  subTtile="- Your satisfaction is our
top priority. We ensure every garment receives the utmost care"
                />
                <HeroContent
                  title="Quality & Excellence "
                  subTtile="– From stain removal to fabric care, we uphold the highest standards in laundry & dry cleaning."
                />
                <HeroContent
                  title="Convenience & Reliability "
                  subTtile="– We make laundry effortless with pickup & delivery services, ensuring a seamless experience."
                />
                <HeroContent
                  title="Eco-Friendly Cleaning "
                  subTtile="– We are committed to using safe, non-toxic, & sustainable cleaning methods that protect both your clothes & the environment."
                />
                <HeroContent
                  title="Integrity & Trust "
                  subTtile="– Honesty, transparency, and professionalism guide our business, ensuring trusted service every time."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
