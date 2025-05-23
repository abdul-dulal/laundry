"use client";
import React, { useEffect, useRef } from "react";
import td from "@/public/img/team/team-details-01.png";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";
import SkillBar from "./SkillBar";
import about from "@/public/img/team/about.png";
const Details = () => {
  const imageRef = useRef(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const revealRef = useRef(null);
  useEffect(() => {
    if (inView) {
      gsap.to(revealRef.current, {
        left: "100%",
        duration: 3.5,
        ease: "power3.out",
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        duration: 3.5,
        ease: "power3.out",
      });
    }
  }, [inView]);
  return (
    <section>
      <div className="lg:py-[150px] md:py-[100px] py-20">
        <div className="container">
          <div className="grid lg:gap-[78px]  grid-cols-12 items-center">
            <div className="lg:col-span-5 col-span-12 h-full w-full">
              <div ref={ref} className="relative overflow-hidden">
                <div
                  ref={revealRef}
                  className="absolute top-0 left-0 w-full h-full bg-white z-10"
                ></div>

                <Image
                  src={td}
                  className="w-full lg:h-[420px] h-full"
                  alt="Laundry team"
                />
              </div>
            </div>
            <div className="lg:col-span-7 col-span-12 lg:mt-0 mt-10">
              <div className="max-w-[694px]">
                <div className="">
                  <div className="pb-[15px] border-b border-solid border-[#d9dbdf]">
                    <div className="">
                      <FadeUpAnimationProvider>
                        {" "}
                        <h3 className="font-semibold sm:text-[34px] text-[26px] tracking-[-0.02em] text-[#142137]">
                          Hanson Deck
                        </h3>
                      </FadeUpAnimationProvider>
                      <FadeUpAnimationProvider>
                        {" "}
                        <p className="text-[16px] text-[#142137b3]">
                          Founder & Ceo
                        </p>
                      </FadeUpAnimationProvider>
                    </div>
                    <div className="pt-[15px]">
                      <FadeUpAnimationProvider>
                        {" "}
                        <p className="text-[16px] text-[#142137b3]">
                          Distinctively promote enabled technology and
                          client-focused bandwidth. Objectively impact
                          cross-media materials rather than covalent
                          initiatives. Dynamically pontificate holistic with.
                        </p>
                      </FadeUpAnimationProvider>
                    </div>
                  </div>
                  <div className="pt-4">
                    <FadeUpAnimationProvider>
                      {" "}
                      <ul className="flex flex-col justify-center items-start gap-[6px]">
                        <li className="text-[16px] leading-[162%] text-[#142137b3]">
                          <span className="text-primary">Phone Number:</span>{" "}
                          (234) 578 369 54
                        </li>
                        <li className="text-[16px] leading-[162%] text-[#142137b3]">
                          <span className="text-primary"> Email:</span>{" "}
                          example@gmail.com
                        </li>
                        <li className="text-[16px] leading-[162%] text-[#142137b3]">
                          <span className="text-primary">Address:</span> United
                          Kingdom
                        </li>
                        <li className="text-[16px] leading-[162%] text-[#142137b3]">
                          <span className="text-primary">Experience</span> 14
                          Years
                        </li>
                      </ul>
                    </FadeUpAnimationProvider>
                  </div>
                </div>
                <FadeUpAnimationProvider>
                  {" "}
                  <div className="flex flex-wrap flex-row justify-start items-center gap-5 pt-5">
                    <h3 className="font-medium lg:text-[24px] text-xl leading-[142%] tracking-[-0.02em] text-[#142137]">
                      Social Share:
                    </h3>
                    <ul className="flex flex-row justify-start items-center gap-[6px]">
                      <li>
                        <Link
                          className="size-10 grid place-content-center leading-[40px] text-center  bg-[#4375e7] text-white transition-all duration-400 ease-in-out"
                          href="https://www.facebook.com/"
                        >
                          <svg
                            width="10"
                            height="17"
                            viewBox="0 0 10 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.35 0H6.8C5.67283 0 4.59183 0.447767 3.7948 1.2448C2.99777 2.04183 2.55 3.12283 2.55 4.25V6.8H0V10.2H2.55V17H5.95V10.2H8.5L9.35 6.8H5.95V4.25C5.95 4.02457 6.03955 3.80837 6.19896 3.64896C6.35837 3.48955 6.57457 3.4 6.8 3.4H9.35V0Z"
                              fill="white"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="size-10 grid place-content-center leading-[40px] text-center  bg-[#142137] text-white transition-all duration-400 ease-in-out"
                          href="https://x.com/"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.92547 8.56247C5.55609 8.98742 5.19502 9.40292 4.83396 9.81865C3.64932 11.1821 2.46422 12.5452 1.2816 13.9102C1.22424 13.9766 1.1653 14.0009 1.07936 13.9998C0.764417 13.9953 0.449472 13.9982 0.134527 13.9977C0.098083 13.9977 0.0618643 13.9944 0 13.9912C0.123054 13.8488 0.23171 13.7226 0.340816 13.5971C1.88922 11.815 3.43763 10.0326 4.98604 8.25045C5.10167 8.11749 5.21437 7.98207 5.33405 7.85294C5.38264 7.80075 5.37972 7.7652 5.34057 7.70919C4.71541 6.81137 4.09249 5.91198 3.46867 5.01303C2.74452 3.96944 2.0197 2.92607 1.29533 1.8827C0.878923 1.28228 0.46252 0.681858 0.045892 0.0814371C0.0335192 0.0634402 0.0224961 0.0443185 0.000449922 0.00899965C0.0524159 0.00630012 0.0913342 0.00247578 0.130027 0.00247578C1.4159 0.00202586 2.70201 0.00292571 3.98788 1.21355e-06C4.07449 -0.000223747 4.12309 0.0308209 4.1701 0.098984C5.08097 1.41433 5.99409 2.72833 6.9063 4.04278C7.13284 4.36897 7.35847 4.69584 7.58479 5.02226C7.61223 5.06207 7.6408 5.10099 7.67702 5.15206C7.79602 5.01641 7.90918 4.88863 8.02121 4.75973C9.373 3.2039 10.7248 1.64807 12.075 0.0908855C12.1283 0.0292461 12.1816 -0.00112359 12.266 0.000226175C12.5845 0.00495036 12.9033 0.00202586 13.2221 0.00225082C13.2583 0.00225082 13.2945 0.0058502 13.3557 0.00922461C13.2122 0.175696 13.0846 0.32507 12.9557 0.473319C11.4021 2.26086 9.84902 4.04885 8.29296 5.83414C8.22795 5.9086 8.23065 5.95764 8.28396 6.03413C9.59121 7.9139 10.896 9.79503 12.2017 11.6759C12.7103 12.4086 13.2196 13.1406 13.7282 13.8733C13.7514 13.9069 13.773 13.9415 13.8061 13.9921C13.7525 13.9946 13.7134 13.9977 13.6745 13.9977C12.3922 13.998 11.1101 13.9971 9.82787 14C9.73406 14.0002 9.6812 13.9685 9.62833 13.892C8.69024 12.5362 7.74878 11.1826 6.80844 9.82832C6.53062 9.42834 6.25392 9.02746 5.97631 8.62703C5.96349 8.60903 5.94887 8.59239 5.92547 8.56247ZM12.1459 13.131C12.1182 13.0867 12.1007 13.0549 12.08 13.0255C11.8725 12.7314 11.6645 12.4381 11.457 12.1443C9.91201 9.95565 8.36697 7.767 6.82194 5.57858C5.74573 4.05425 4.66884 2.53059 3.5942 1.0049C3.54629 0.936739 3.49814 0.906144 3.41176 0.906594C2.8606 0.910643 2.30967 0.908394 1.75852 0.908619C1.72635 0.908619 1.69441 0.912218 1.64694 0.915142C1.67933 0.963734 1.70295 1.00063 1.72815 1.0364C3.05565 2.9155 4.38337 4.79415 5.71064 6.67324C7.21292 8.80025 8.71499 10.9275 10.2148 13.0565C10.2607 13.1215 10.3093 13.1384 10.3822 13.1379C10.9295 13.1357 11.4768 13.1368 12.0244 13.1364C12.0595 13.1368 12.0953 13.1334 12.1459 13.131Z"
                              fill="white"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="size-10  grid place-content-center leading-[40px] text-center bg-[#CB2027] text-white transition-all duration-400 ease-in-out"
                          href="https://www.pinterest.com/"
                        >
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.00757 0C4.03279 0 0 4.02609 0 8.99262C0 12.8043 2.37242 16.0608 5.7231 17.3707C5.64105 16.6605 5.57519 15.5647 5.75233 14.7878C5.91537 14.0843 6.80489 10.317 6.80489 10.317C6.80489 10.317 6.53832 9.77695 6.53832 8.98488C6.53832 7.73402 7.2648 6.80168 8.16911 6.80168C8.93996 6.80168 9.31112 7.3793 9.31112 8.06766C9.31112 8.83723 8.82199 9.99211 8.56211 11.0654C8.3473 11.9609 9.01426 12.6935 9.89639 12.6935C11.498 12.6935 12.7287 11.006 12.7287 8.57812C12.7287 6.4241 11.1796 4.92188 8.96285 4.92188C6.39816 4.92188 4.89273 6.83895 4.89273 8.82246C4.89273 9.59203 5.18959 10.4214 5.5597 10.8731C5.63471 10.961 5.64245 11.0426 5.61992 11.1312C5.55301 11.4124 5.39771 12.0266 5.36743 12.1528C5.33045 12.3156 5.23361 12.3521 5.06317 12.2713C3.9363 11.7457 3.23165 10.1099 3.23165 8.7852C3.23165 5.9502 5.29242 3.34547 9.1847 3.34547C12.3061 3.34547 14.737 5.56629 14.737 8.54156C14.737 11.5168 12.7801 14.1374 10.0665 14.1374C9.15442 14.1374 8.29412 13.6635 8.00571 13.101C8.00571 13.101 7.55356 14.8177 7.44228 15.2399C7.24261 16.0242 6.69326 17.0016 6.3228 17.601C7.16866 17.859 8.05889 18 8.99278 18C13.9676 18 18.0004 13.9739 18.0004 9.00738C18.0148 4.02609 13.9824 0 9.00757 0Z"
                              fill="white"
                            />
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="size-10 grid place-content-center leading-[40px] text-center  bg-[#4375e7] text-white transition-all duration-400 ease-in-out"
                          href="https://www.instagram.com/"
                        >
                          <svg
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.0474 4.73633C12.3037 4.73633 13.5085 5.23539 14.3968 6.12372C15.2852 7.01204 15.7842 8.21688 15.7842 9.47316V14.9995H12.6263V9.47316C12.6263 9.0544 12.46 8.65279 12.1639 8.35668C11.8678 8.06057 11.4661 7.89422 11.0474 7.89422C10.6286 7.89422 10.227 8.06057 9.9309 8.35668C9.63479 8.65279 9.46844 9.0544 9.46844 9.47316V14.9995H6.31055V9.47316C6.31055 8.21688 6.80961 7.01204 7.69793 6.12372C8.58626 5.23539 9.7911 4.73633 11.0474 4.73633Z"
                              fill="white"
                            />
                            <path
                              d="M3.15789 5.52539H0V14.9991H3.15789V5.52539Z"
                              fill="white"
                            />
                            <path
                              d="M1.57895 3.15789C2.45097 3.15789 3.15789 2.45097 3.15789 1.57895C3.15789 0.706918 2.45097 0 1.57895 0C0.706918 0 0 0.706918 0 1.57895C0 2.45097 0.706918 3.15789 1.57895 3.15789Z"
                              fill="white"
                            />
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </FadeUpAnimationProvider>
              </div>
            </div>
          </div>
          <div className="pt-[72px]">
            <FadeUpAnimationProvider>
              <div className="font-semibold sm:text-[34px] text-[26px] tracking-[-0.02em] text-[#142137] pb-[17px]">
                <h3>About Me</h3>
              </div>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              {" "}
              <p className="text-[16px] leading-[26px] text-primary/70">
                As of my last knowledge update in January 2025, I don&apos;t
                have specific information about Kristin Watson, as it&apos;s a
                relatively common name and details about individuals <br /> may
                not be readily available in my training data. It&apos;s possible
                that Kristin Watson is not a widely recognized public figure or
                that any relevant information about them has <br /> emerged
                since my last update.{" "}
              </p>
            </FadeUpAnimationProvider>
            <FadeUpAnimationProvider>
              <p className="pt-[27px] text-[16px] leading-[26px] text-primary/70">
                If Kristin Watson is a private individual or someone who gained
                prominence after 2022, I recommend checking more recent sources
                such as social media profiles, news <br /> articles, or other
                online platforms for the latest information about them. If
                there&apos;s a specific context or field you&apos;re referring
                to, providing additional details may help me <br /> provide a
                more accurate and relevant response.
              </p>
            </FadeUpAnimationProvider>
          </div>

          <div className="lg:mt-[118px] md:mt-20 mt-[60px] flex flex-col lg:flex-row items-center justify-between xl:gap-[128px] gap-10  max-w-[1600px] mx-auto">
            <div className="lg:w-1/2 w-full">
              <FadeUpAnimationProvider>
                <h2 className="text-[34px] font-semibold leading-[64px] 2xl:mb-[30px] mb-[15px]">
                  Personal Skills
                </h2>
              </FadeUpAnimationProvider>
              <FadeUpAnimationProvider>
                <p className="text-base font-normal leading-[26px] text-primary/70 2xl:pb-8 pb-4">
                  Our team of skilled dry cleaning professionals ensures your
                  items receive the highest level of care. Get in touch today to
                  schedule a service with Luan.
                </p>
              </FadeUpAnimationProvider>

              {/* Progress Bars */}
              <div className="space-y-3">
                <SkillBar title="Fresh & Eco Laundry" percent={92} />
                <SkillBar title="Sensitive Care Solutions" percent={80} />
                <SkillBar title="Stain Removal Expert" percent={87} />
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:w-1/2 w-full">
              <FadeUpAnimationProvider>
                <Image
                  src={about}
                  alt="Laundry Expert"
                  className="w-full h-auto rounded-md object-cover"
                  width={600}
                  height={400}
                />
              </FadeUpAnimationProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
