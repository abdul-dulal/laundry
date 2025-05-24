"use client";
import React from "react";
import Address from "../../src/app/about/components/Address";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import AnimatedHeading from "@/components/ul/AnimatedHeading";

const GetService = ({ showBottom, showTop }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className={`${
        showBottom
          ? "lg:pb-[150px] md:pb-[100px] pb-20"
          : "lg:pt-[150px] md:pt-[100px] pt-20"
      } ${showTop && "lg:pt-[150px] md:pt-[100px] pt-20"}`}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 xl:gap-20 gap-10">
          <div>
            <div className="inline-block">
              <FadeUpAnimationProvider>
                <div className="flex items-center gap-2 py-[9px] px-[14px] border border-primary/15">
                  <span className="mr-2 text-primary">•</span>
                  <h5 className="text-[16px] text-primary/70 font-medium leading-[100%] ">
                    Contact Us
                  </h5>
                </div>
              </FadeUpAnimationProvider>
            </div>
            <div>
              <div className="max-w-[621px] text-primary mt-[34px]">
                <AnimatedHeading text="Write us what you want to know." />
              </div>
              <FadeUpAnimationProvider>
                <p className="mt-11 text-[16px] font-normal leading-[26px] text-primary/70 ">
                  We make it easy for you to keep your clothes fresh and clean.
                  Simply collect all your laundry, and we’ll take care of the
                  rest. With hassle pickup & professional cleaningo{" "}
                  <br className="lg:block hidden" /> garments will be treated
                  with the utmost care.
                </p>
              </FadeUpAnimationProvider>
            </div>
            <div className="2xl:mt-[75px] mt-[30px]">
              <Address
                icon={
                  <svg
                    width="19"
                    height="22"
                    viewBox="0 0 19 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.62664 12.433C11.3502 12.433 12.7474 11.0357 12.7474 9.31219C12.7474 7.58863 11.3502 6.19141 9.62664 6.19141C7.90308 6.19141 6.50586 7.58863 6.50586 9.31219C6.50586 11.0357 7.90308 12.433 9.62664 12.433Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M1.24282 7.49162C3.21331 -1.17054 16.0465 -1.16054 18.007 7.50163C19.1573 12.5829 15.9965 16.884 13.2258 19.5446C11.2153 21.4851 8.03452 21.4851 6.01401 19.5446C3.25332 16.884 0.092529 12.5729 1.24282 7.49162Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                }
                title=" Post address"
                add1=" Landmark Place Slough SL1 1PG,"
                add2="United Kingdom."
              />
              <Address
                icon={
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.973 15.697C18.973 16.021 18.901 16.354 18.748 16.678C18.595 17.002 18.397 17.308 18.136 17.596C17.695 18.082 17.209 18.433 16.66 18.658C16.12 18.883 15.535 19 14.905 19C13.987 19 13.006 18.784 11.971 18.343C10.936 17.902 9.901 17.308 8.875 16.561C7.84 15.805 6.859 14.968 5.923 14.041C4.996 13.105 4.159 12.124 3.412 11.098C2.674 10.072 2.08 9.046 1.648 8.029C1.216 7.003 1 6.022 1 5.086C1 4.474 1.108 3.889 1.324 3.349C1.54 2.8 1.882 2.296 2.359 1.846C2.935 1.279 3.565 1 4.231 1C4.483 1 4.735 1.054 4.96 1.162C5.194 1.27 5.401 1.432 5.563 1.666L7.651 4.609C7.813 4.834 7.93 5.041 8.011 5.239C8.092 5.428 8.137 5.617 8.137 5.788C8.137 6.004 8.074 6.22 7.948 6.427C7.831 6.634 7.66 6.85 7.444 7.066L6.76 7.777C6.661 7.876 6.616 7.993 6.616 8.137C6.616 8.209 6.625 8.272 6.643 8.344C6.67 8.416 6.697 8.47 6.715 8.524C6.877 8.821 7.156 9.208 7.552 9.676C7.957 10.144 8.389 10.621 8.857 11.098C9.343 11.575 9.811 12.016 10.288 12.421C10.756 12.817 11.143 13.087 11.449 13.249C11.494 13.267 11.548 13.294 11.611 13.321C11.683 13.348 11.755 13.357 11.836 13.357C11.989 13.357 12.106 13.303 12.205 13.204L12.889 12.529C13.114 12.304 13.33 12.133 13.537 12.025C13.744 11.899 13.951 11.836 14.176 11.836C14.347 11.836 14.527 11.872 14.725 11.953C14.923 12.034 15.13 12.151 15.355 12.304L18.334 14.419C18.568 14.581 18.73 14.77 18.829 14.995C18.919 15.22 18.973 15.445 18.973 15.697Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M15.8512 7.30039C15.8512 6.76039 15.4282 5.93239 14.7982 5.25739C14.2222 4.63639 13.4572 4.15039 12.7012 4.15039"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.0012 7.3C19.0012 3.817 16.1842 1 12.7012 1"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                title="Phone & Mail "
                add1="Mail: example@gmail.com "
                add2="Phone: +234-360-8027"
              />
              <Address
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-[20px] h-[20px] text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m4-2a8 8 0 11-16 0 8 8 0 0116 0z"
                    />
                  </svg>
                }
                title="Working Time "
                add1="Monday - Saturday: 7.00am - 9.00pm  "
                add2="Holiday: Closed"
              />
            </div>
          </div>
          <div className="border border-primary/15 2xl:p-[60px] xs:p-8 p-4">
            <div>
              <AnimatedHeading text="Ready To Get Service?" />
            </div>
            <form onSubmit={handleSubmit}>
              <FadeUpAnimationProvider>
                <div className="mt-[50px] grid sm:grid-cols-2 xl:gap-[30px] gap-5 mb-[30px]">
                  <input
                    type="text"
                    required
                    className="h-[60px] w-full border border-primary/15 placeholder:text-[16px] placeholder:font-normal placeholder:leading-[26px] placeholder:text-primary/70 focus:outline-none 2xl:pl-[30px] pl-5"
                    placeholder="Your Name"
                  />
                  <input
                    type="number"
                    className="h-[60px] w-full border border-primary/15 placeholder:text-[16px] placeholder:font-normal placeholder:leading-[26px] placeholder:text-primary/70 focus:outline-none 2xl:pl-[30px] pl-5"
                    placeholder="Phone Number"
                  />
                </div>
              </FadeUpAnimationProvider>
              <FadeUpAnimationProvider>
                {" "}
                <div className="mt-[50px] grid sm:grid-cols-2 xl:gap-[30px] gap-5 mb-[30px]">
                  <input
                    type="date"
                    required
                    className="h-[60px] w-full border border-primary/15 placeholder:text-[16px] placeholder:font-normal placeholder:leading-[26px] placeholder:text-primary/70 focus:outline-none 2xl:pl-[30px] pl-5"
                    placeholder="Date Pickup"
                  />
                  <input
                    type="text"
                    className="h-[60px] w-full border border-primary/15 placeholder:text-[16px] placeholder:font-normal placeholder:leading-[26px] placeholder:text-primary/70 focus:outline-none 2xl:pl-[30px] pl-5"
                    placeholder="Time Pickup"
                  />
                </div>
              </FadeUpAnimationProvider>
              <FadeUpAnimationProvider>
                <textarea
                  placeholder="message"
                  className="h-[170px] w-full border border-primary/15 placeholder:text-[16px] placeholder:font-normal placeholder:leading-[26px] placeholder:text-primary/70 focus:outline-none 2xl:pl-[30px] pl-5 pt-[25px]"
                ></textarea>
              </FadeUpAnimationProvider>
              <FadeUpAnimationProvider>
                {" "}
                <button
                  type="submit"
                  className="mt-10 group border border-[#ffffff24] rounded-[50px] w-[165px] h-[44px] flex justify-between items-center pl-[30px] pr-[5px] font-poppins font-medium text-[15px] bg-primary text-white hover:border hover:border-primary/70 hover:bg-white hover:text-primary  transition-all duration-500 ease-out "
                >
                  Order Now
                  <span className="rounded-[50px] grid place-content-center w-[34px] h-[34px] bg-white transition-all duration-500  border border-white text-[#142137] leading-[34px] text-center  group-hover:border group-hover:border-primary/70  ">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary group-hover:rotate-[45deg]"
                    >
                      <path
                        d="M4.90405 13.5967L13.3893 5.1114"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0962 12.8892V4.40388H5.61091"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </FadeUpAnimationProvider>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetService;
