"use client";
import { useRef, useEffect } from "react";
import sd1 from "@/public/img/service-details/service-details-01.png";

import Image from "next/image";
import Link from "next/link";
import FaqContent from "../../Services/components/FaqContent";
import Category from "./Category";
import FadeUpAnimationProvider from "@/components/ul/FadeUpAnimationProvider ";

import sd2 from "@/public/img/service-details/service-details-02.png";
import sd3 from "@/public/img/service-details/service-details-03.png";
import RevealLefToRight from "@/components/ul/RevealLefToRight";
import RevealRightToLeft from "@/components/ul/RevealRightToLeft";
const Details = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const overview = [
    { title: "Clean Made Easy" },
    { title: "Making Laundry Day Disappear" },
    { title: "Gentle on Fabrics, Strong on Clean" },
    { title: "Elevate Your Style, Uplift Your Mood" },
    { title: "Only the Finest for Your Fashion" },
  ];
  return (
    <section className="lg:py-[150px] md:py-[120px] py-20">
      <div className="container">
        <div className="grid grid-cols-12 lg:gap-[65px]">
          <div className="2xl:col-span-9 lg:col-span-8 col-span-12">
            <div className="">
              <div className="pb-[38px]">
                <RevealLefToRight img={sd1} title="Laundry service details" />

                <div className="pt-[2px]">
                  <FadeUpAnimationProvider>
                    <h3
                      className="mt-[60px] sm:text-[34px] text-[28px] font-semibold leading-[119%] tracking-[-0.02em] text-[#142137] mb-[14px] transition-all duration-[400ms] ease-[ease]
"
                    >
                      Smooth Laundry Experience
                    </h3>
                  </FadeUpAnimationProvider>

                  <div className="">
                    <FadeUpAnimationProvider>
                      {" "}
                      <p
                        className="text-[16px] font-normal  text-[#142137b3]
"
                      >
                        Scheduling a pickup is as easy as visiting our website
                        or using our mobile app. You can choose a convenient
                        time slot, and we'll be at your doorstep. We're happy
                        accommodate your preferences. You can let know about any
                        special instructions when scheduling your service, and
                        we'll make sure to follow them. we take every man
                        precaution to ensure their safety to accommodate your
                        preferences. your service, and we'll make sure
                      </p>
                    </FadeUpAnimationProvider>
                    <FadeUpAnimationProvider>
                      {" "}
                      <p
                        className="mt-[25px] text-[16px] font-normal  text-[#142137b3]
"
                      >
                        Our expert staff follows industry-standard procedures to
                        safeguard your wardrobe. From color separation and
                        fabric-appropriate detergents to strict adherence to
                        care instructions, we ensure every item is treated with
                        respect. Benefit from our doorstep collection and
                        return, designed for your comfort and convenience. Would
                        you like a more casual version, or something for use in
                        marketing material?
                      </p>
                    </FadeUpAnimationProvider>
                  </div>
                  <div className="mt-10">
                    <div
                      className="p-0 flex flex-col justify-center items-start gap-[13px]
"
                    >
                      {overview.map((item, index) => {
                        return (
                          <div key={index}>
                            <FadeUpAnimationProvider>
                              <li
                                className="flex flex-row justify-center items-start gap-[8px]
"
                              >
                                <span>
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z"
                                      fill="#4375E7"
                                    />
                                    <path
                                      d="M15.5 8L9.3125 14L6.5 11.2727"
                                      stroke="white"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </span>
                                <p
                                  className="text-primary/70 font-normal text-[16px] 
"
                                >
                                  {item.title}
                                </p>
                              </li>
                            </FadeUpAnimationProvider>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[60px]">
                <div className="grid sm:grid-cols-2 gap-[30px]">
                  <RevealLefToRight img={sd2} />
                  <RevealRightToLeft img={sd3} />
                </div>
                <div className="pt-33">
                  <FadeUpAnimationProvider>
                    <div>
                      <h2
                        className="mt-[60px] sm:text-[34px] text-[28px] font-semibold leading-[119%] tracking-[-0.02em] text-[#142137] mb-[14px] transition-all duration-[400ms] ease-[ease]
"
                      >
                        Overview of Services Provided
                      </h2>
                    </div>
                  </FadeUpAnimationProvider>
                  <FadeUpAnimationProvider>
                    <p
                      className="text-primary/70 font-normal text-[16px] 
"
                    >
                      We employ a series quality checks and use secure packaging
                      to guarantee the safety garments Additionally, our staff
                      undergoes regular training to handle garments with care.
                      It depends on your lifestyle a preferences. For most
                      households, a weekly or bi-weekly schedule works well.
                      However, individuals with specific needs may choose more
                      frequent service. We use eco-friendly, hypoallergenic
                      detergents that are tough on stains but gentle on your
                      clothes and the environment. Our pickup and delivery We
                      employ a series of quality checks and use secure packaging
                      to guarantee the safety of your garments. Additionally,
                      our staff undergoes regular training to handle garments
                      with care. It depends on your lifestyle and preferences.
                      For most households, a weekly or bi-weekly schedule works
                      well. However, individuals with specific needs may choose
                      more frequent service. We use eco-friendly,
                    </p>
                  </FadeUpAnimationProvider>
                </div>
              </div>
            </div>

            {/* faq */}
            <FaqContent />
          </div>
          <div className="2xl:col-span-3 lg:col-span-4 col-span-12 lg:mt-0 mt-14">
            <div
              className="flex lg:flex-col lg:flex-nowrap flex-row flex-wrap justify-center gap-[30px]  w-full
"
            >
              <FadeUpAnimationProvider>
                <div
                  className="bg-[#ebeff3] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
                >
                  <div className="">
                    <h5
                      className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
                    >
                      Search
                    </h5>
                  </div>
                  <div className="">
                    <form
                      onSubmit={handleSubmit}
                      className="mt-[24px] w-full h-[44px] flex flex-row justify-between items-center
"
                    >
                      <input
                        className="w-[calc(100%-44px)] h-[44px] outline-none px-[20px] border border-[#1421371a] bg-[#ebeff3]
"
                        type="text"
                        placeholder="Search Here..."
                      />
                      <button
                        type="submit"
                        className="size-11 grid place-content-center  text-center leading-[44px] bg-[#4375e7] text-white
"
                      >
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.11109 15.2222C12.0384 15.2222 15.2222 12.0384 15.2222 8.1111C15.2222 4.18375 12.0384 1 8.11109 1C4.18375 1 1 4.18375 1 8.1111C1 12.0384 4.18375 15.2222 8.11109 15.2222Z"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9995 16.9995L13.1328 13.1328"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </FadeUpAnimationProvider>
              <Category />
              <FadeUpAnimationProvider>
                <div
                  className="bg-secondary mb-[30px] w-full max-w-[380px] xs:px-[30px] px-[15px] pt-[30px] pb-[40px]
"
                >
                  <div
                    className="footer_contact_wrapper flex flex-row justify-start items-center gap-[14px] bg-[#4375e7]
"
                  >
                    <div className="">
                      <Link
                        className="grid place-content-center size-[50px] bg-white rounded-full"
                        href="tel:(629)555-0129"
                      >
                        <svg
                          width="26"
                          height="26"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.61888 3.99812C2.01845 3.33526 4.22128 0.928967 5.79103 1.00161C6.26066 1.04182 6.6758 1.32461 7.0131 1.6541H7.01439C7.78759 2.41166 10.006 5.27067 10.1305 5.87256C10.438 7.34877 8.67755 8.19973 9.21593 9.6876C10.5885 13.046 12.9535 15.4108 16.3135 16.7819C17.8002 17.3216 18.6513 15.5626 20.1276 15.8687C20.7296 15.9945 23.5901 18.2114 24.3465 18.9859V18.9859C24.6747 19.3218 24.9601 19.7382 24.999 20.2078C25.0574 21.8617 22.5017 24.0942 22.0035 24.3796C20.8282 25.2215 19.2947 25.2059 17.4253 24.3368C12.2088 22.1666 3.87231 13.9878 1.66169 8.57461C0.815843 6.71574 0.758762 5.17208 1.61888 3.99812Z"
                            stroke="#142137"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.2383 1.31641C20.9145 1.83556 24.6067 5.52399 25.1322 10.1989"
                            stroke="#142137"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.2383 5.79102C18.4741 6.22681 20.221 7.97375 20.6568 10.2095"
                            stroke="#142137"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="number">
                      <p
                        className="font-medium text-[15px] leading-[173%] uppercase text-[#ffffffb3]
"
                      >
                        Call Anytime
                      </p>
                      <Link
                        className="leading-[34px]  font-semibold tracking-[-0.02em] xs:text-lg text-base text-white
"
                        href="tel:(629) 555-0129"
                      >
                        (234) 987 - 354 - 3670
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUpAnimationProvider>
              <div
                className="widget bg-[#ebeff3] w-full max-w-[380px] px-[30px] pt-[30px] pb-[40px]
"
              >
                <FadeUpAnimationProvider>
                  <h5
                    className="font-semibold text-[24px] leading-[142%] tracking-[-0.02em] text-[#142137]
"
                  >
                    Company profile
                  </h5>
                </FadeUpAnimationProvider>
                <div className="style_1 mt-7">
                  <div className="flex flex-col justify-start items-start gap-[20px]">
                    <FadeUpAnimationProvider>
                      <div className="w-full ">
                        <Link
                          className="group border border-[#1421371a] w-full font-medium text-[15px] text-[#142137b3] flex flex-row justify-between items-center px-[20px] py-[10px] transition-all duration-500 ease-out  bg-transparent hover:bg-secondary
"
                          href=""
                        >
                          <span className="flex gap-[10px] group-hover:text-white transition-all duration-500 ease-out">
                            <span className="">
                              <svg
                                width="23"
                                height="26"
                                viewBox="0 0 23 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-500 ease-out text-primary group-hover:text-white"
                              >
                                <path
                                  d="M9.44728 20.4314C6.88475 20.4314 4.32223 20.4293 1.75971 20.4325C1.10756 20.4325 0.570561 20.1969 0.227216 19.6369C0.0984617 19.4265 0.014719 19.1523 0.0136723 18.9073C-0.00307626 16.6065 -0.00307626 14.3057 0.00634479 12.0048C0.00948513 11.1151 0.733859 10.5781 1.55035 10.4828C1.63619 10.4723 1.72412 10.4807 1.81204 10.4807C6.90255 10.4807 11.9931 10.4818 17.0836 10.4776C17.5159 10.4776 17.8917 10.5938 18.2486 10.8429C18.6527 11.1255 18.838 11.5076 18.862 11.9787C18.8788 12.3094 18.8662 12.6413 18.8662 12.9721C18.8662 14.872 18.8265 16.774 18.8809 18.6718C18.9144 19.8253 17.9618 20.4461 17.0836 20.4388C14.5388 20.4168 11.9931 20.4314 9.44833 20.4314H9.44728ZM7.78185 18.0165C8.35967 18.0165 8.88097 18.0291 9.40227 18.0113C9.71107 18.0008 10.0303 17.9851 10.3234 17.8972C10.9023 17.7234 11.3796 17.4177 11.6581 16.8274C11.9051 16.304 11.9753 15.768 11.9386 15.2101C11.8643 14.089 11.3388 13.4243 10.3255 13.2076C10.0743 13.1542 9.81575 13.1144 9.55928 13.1081C8.97309 13.0945 8.38689 13.105 7.78289 13.105V18.0155L7.78185 18.0165ZM3.31627 13.1071C3.2273 13.844 3.25032 17.6229 3.33721 17.9872H4.5745C4.67186 17.4334 4.52949 16.8912 4.66557 16.3406C4.86132 16.3406 5.03404 16.3479 5.20571 16.3396C6.68168 16.2705 7.02921 15.2143 6.75181 14.0481C6.59165 13.3782 5.99394 13.1626 5.38367 13.1186C4.70745 13.0694 4.02494 13.1071 3.31627 13.1071ZM15.8033 13.1479C15.0413 13.0621 13.2743 13.0862 12.9215 13.1804C12.8347 14.4805 12.8734 17.6376 12.9823 18.0092C13.3905 18.0175 13.8008 18.0291 14.2384 18.0029C14.2384 17.6575 14.2269 17.3633 14.2415 17.0702C14.2562 16.7656 14.1735 16.4516 14.3148 16.1218H15.6767V15.1295C15.1878 15.0447 14.7168 15.1713 14.2311 15.0405C14.2677 14.7369 14.1829 14.4459 14.3106 14.1141H15.8033V13.149V13.1479Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M2.10242 21.1785H2.91786C2.93042 21.3292 2.95136 21.4632 2.95136 21.5962C2.9545 22.3991 2.9524 23.2009 2.95345 24.0038C2.95345 24.1262 2.94298 24.2498 2.95973 24.3701C3.03405 24.8904 3.30517 25.1228 3.83693 25.1353C3.88927 25.1364 3.94161 25.1353 3.99395 25.1353C9.47177 25.1353 14.9496 25.1333 20.4274 25.1406C20.7666 25.1406 21.0597 25.0977 21.2209 24.7732C21.2952 24.6224 21.3234 24.4445 21.3507 24.2749C21.3705 24.1556 21.3548 24.031 21.3548 23.9096C21.3548 18.1701 21.3507 12.4305 21.3601 6.69103C21.3611 5.9541 21.2784 5.85884 20.5268 5.87769C19.6905 5.89862 18.852 5.89339 18.0146 5.87873C17.3697 5.86722 16.8411 5.62122 16.4978 5.04131C16.3669 4.82148 16.3271 4.59433 16.3292 4.34415C16.3345 3.38425 16.3104 2.42435 16.3408 1.4655C16.3544 1.04888 16.1492 0.8458 15.72 0.847894C11.7946 0.863596 7.86914 0.856268 3.94475 0.857315C3.22038 0.857315 2.95659 1.12634 2.9545 1.87793C2.95031 4.19865 2.95345 6.51832 2.95345 8.83903C2.95345 9.11748 2.95345 9.39592 2.95345 9.68483C2.6928 9.81568 2.43634 9.74973 2.14219 9.74764C2.12859 9.60633 2.10346 9.47443 2.10346 9.34254C2.10137 6.79571 2.09404 4.24889 2.1066 1.70102C2.11079 0.881391 2.51066 0.260649 3.27481 0.0596666C3.43916 0.0167485 3.61711 0.00837426 3.78878 0.00837426C7.88798 0.00523391 11.9882 0.00732748 16.0874 0C16.3701 0 16.5742 0.0774619 16.7752 0.280538C18.4961 2.01401 20.2233 3.74015 21.9588 5.45897C22.1494 5.64739 22.2195 5.83791 22.2184 6.10274C22.2122 12.2086 22.2143 18.3145 22.2122 24.4204C22.2122 25.3196 21.5642 25.9853 20.6849 25.9853C15.0323 25.9885 9.3807 25.9759 3.72807 26C2.90844 26.0031 2.12649 25.2023 2.10974 24.4706C2.08462 23.3914 2.10346 22.3122 2.10346 21.1796L2.10242 21.1785ZM17.1824 2.02343C17.1824 2.76141 17.1771 3.45543 17.1834 4.1484C17.1886 4.68121 17.42 4.98583 17.9434 5.01409C18.6803 5.05387 19.4204 5.02456 20.1626 5.02456C19.1723 4.02697 18.2061 3.05451 17.1813 2.02343H17.1824Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.0455 14.1367C9.2266 14.1367 9.37943 14.1346 9.53121 14.1367C10.0912 14.144 10.4335 14.368 10.5351 14.9082C10.6356 15.4462 10.6952 16.001 10.3948 16.5212C10.2326 16.8028 10.0064 16.9546 9.69346 16.9766C9.48934 16.9912 9.28312 16.9797 9.08737 16.9797C8.99212 16.5736 8.96909 15.0097 9.04655 14.1367H9.0455Z"
                                  fill="#142137"
                                />
                                <path
                                  d="M4.62549 14.1631C4.9772 14.14 5.30589 14.0343 5.50583 14.3672C5.62412 14.564 5.62098 14.7974 5.49013 15.0036C5.29647 15.3103 5.00861 15.3533 4.6527 15.28C4.57315 14.9262 4.61921 14.5713 4.62444 14.1641L4.62549 14.1631Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            Download PDF
                          </span>
                          <span className="download_btn">
                            <svg
                              width="17"
                              height="14"
                              viewBox="0 0 17 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="transition-all duration-500 ease-out text-primary group-hover:text-white"
                            >
                              <path
                                d="M14.5443 12.4114C14.5443 11.3327 14.5278 10.2833 14.556 9.23474C14.5628 8.98282 14.6494 8.64628 14.8254 8.50914C15.0151 8.3613 15.4217 8.28251 15.6075 8.39048C15.8399 8.52567 16.0656 8.87388 16.0821 9.14331C16.1385 10.0955 16.1045 11.0526 16.1054 12.0087C16.1054 12.3492 16.1103 12.6886 16.1045 13.029C16.0928 13.7255 15.8195 13.9988 15.124 13.9988C12.4191 14.0017 9.71514 13.9997 7.0102 13.9997C5.01822 13.9997 3.02623 14.0007 1.03425 13.9988C0.274608 13.9978 0.00712915 13.7362 0.00518385 12.9794C0.00129325 11.716 -0.00551529 10.4525 0.0081018 9.18999C0.015883 8.49552 0.617953 8.05491 1.12665 8.39631C1.34841 8.54513 1.5303 8.90987 1.54489 9.1861C1.59547 10.1549 1.56434 11.1285 1.56629 12.1002C1.56629 12.1945 1.57796 12.2879 1.58574 12.4104C5.89555 12.4114 10.1801 12.4114 14.5443 12.4114Z"
                                fill="currentColor"
                              />
                              <path
                                d="M7.27266 7.89891C7.27266 5.55385 7.27266 3.35177 7.27266 1.14872C7.27266 0.987264 7.25515 0.820941 7.28531 0.664345C7.36604 0.247078 7.62768 -0.00289268 8.05759 2.52679e-05C8.4875 0.00391586 8.74817 0.25875 8.8182 0.676016C8.85224 0.881245 8.83085 1.0962 8.83085 1.30629C8.83182 3.45779 8.83085 5.61027 8.83085 7.85222C8.98939 7.7073 9.09443 7.62268 9.18586 7.52541C9.95134 6.7113 10.7129 5.89233 11.4803 5.0792C11.9326 4.59968 12.3742 4.53938 12.7399 4.8944C13.092 5.2358 13.059 5.67349 12.63 6.13258C11.315 7.54195 9.99705 8.94937 8.6762 10.3539C8.27352 10.7818 7.82221 10.777 7.41661 10.3451C6.09965 8.94062 4.77587 7.54 3.47447 6.11702C3.2955 5.92151 3.13112 5.59665 3.16322 5.35932C3.19434 5.12686 3.45501 4.79421 3.66705 4.74947C3.92675 4.69403 4.32359 4.80783 4.51715 4.99555C5.32736 5.78729 6.08311 6.63544 6.85831 7.46219C6.96628 7.57599 7.07521 7.68979 7.27266 7.89891Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </FadeUpAnimationProvider>
                    <FadeUpAnimationProvider>
                      <div className="w-full ">
                        <Link
                          className="group border border-[#1421371a] w-full font-medium text-[15px] text-[#142137b3] flex flex-row justify-between items-center px-[20px] py-[10px] transition-all duration-500 ease-out  bg-transparent hover:bg-secondary
"
                          href=""
                        >
                          <span className="flex gap-[10px] group-hover:text-white transition-all duration-500 ease-out">
                            <span className="">
                              <svg
                                width="23"
                                height="26"
                                viewBox="0 0 23 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-500 ease-out text-primary group-hover:text-white"
                              >
                                <path
                                  d="M9.44728 20.4314C6.88475 20.4314 4.32223 20.4293 1.75971 20.4325C1.10756 20.4325 0.570561 20.1969 0.227216 19.6369C0.0984617 19.4265 0.014719 19.1523 0.0136723 18.9073C-0.00307626 16.6065 -0.00307626 14.3057 0.00634479 12.0048C0.00948513 11.1151 0.733859 10.5781 1.55035 10.4828C1.63619 10.4723 1.72412 10.4807 1.81204 10.4807C6.90255 10.4807 11.9931 10.4818 17.0836 10.4776C17.5159 10.4776 17.8917 10.5938 18.2486 10.8429C18.6527 11.1255 18.838 11.5076 18.862 11.9787C18.8788 12.3094 18.8662 12.6413 18.8662 12.9721C18.8662 14.872 18.8265 16.774 18.8809 18.6718C18.9144 19.8253 17.9618 20.4461 17.0836 20.4388C14.5388 20.4168 11.9931 20.4314 9.44833 20.4314H9.44728ZM7.78185 18.0165C8.35967 18.0165 8.88097 18.0291 9.40227 18.0113C9.71107 18.0008 10.0303 17.9851 10.3234 17.8972C10.9023 17.7234 11.3796 17.4177 11.6581 16.8274C11.9051 16.304 11.9753 15.768 11.9386 15.2101C11.8643 14.089 11.3388 13.4243 10.3255 13.2076C10.0743 13.1542 9.81575 13.1144 9.55928 13.1081C8.97309 13.0945 8.38689 13.105 7.78289 13.105V18.0155L7.78185 18.0165ZM3.31627 13.1071C3.2273 13.844 3.25032 17.6229 3.33721 17.9872H4.5745C4.67186 17.4334 4.52949 16.8912 4.66557 16.3406C4.86132 16.3406 5.03404 16.3479 5.20571 16.3396C6.68168 16.2705 7.02921 15.2143 6.75181 14.0481C6.59165 13.3782 5.99394 13.1626 5.38367 13.1186C4.70745 13.0694 4.02494 13.1071 3.31627 13.1071ZM15.8033 13.1479C15.0413 13.0621 13.2743 13.0862 12.9215 13.1804C12.8347 14.4805 12.8734 17.6376 12.9823 18.0092C13.3905 18.0175 13.8008 18.0291 14.2384 18.0029C14.2384 17.6575 14.2269 17.3633 14.2415 17.0702C14.2562 16.7656 14.1735 16.4516 14.3148 16.1218H15.6767V15.1295C15.1878 15.0447 14.7168 15.1713 14.2311 15.0405C14.2677 14.7369 14.1829 14.4459 14.3106 14.1141H15.8033V13.149V13.1479Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M2.10242 21.1785H2.91786C2.93042 21.3292 2.95136 21.4632 2.95136 21.5962C2.9545 22.3991 2.9524 23.2009 2.95345 24.0038C2.95345 24.1262 2.94298 24.2498 2.95973 24.3701C3.03405 24.8904 3.30517 25.1228 3.83693 25.1353C3.88927 25.1364 3.94161 25.1353 3.99395 25.1353C9.47177 25.1353 14.9496 25.1333 20.4274 25.1406C20.7666 25.1406 21.0597 25.0977 21.2209 24.7732C21.2952 24.6224 21.3234 24.4445 21.3507 24.2749C21.3705 24.1556 21.3548 24.031 21.3548 23.9096C21.3548 18.1701 21.3507 12.4305 21.3601 6.69103C21.3611 5.9541 21.2784 5.85884 20.5268 5.87769C19.6905 5.89862 18.852 5.89339 18.0146 5.87873C17.3697 5.86722 16.8411 5.62122 16.4978 5.04131C16.3669 4.82148 16.3271 4.59433 16.3292 4.34415C16.3345 3.38425 16.3104 2.42435 16.3408 1.4655C16.3544 1.04888 16.1492 0.8458 15.72 0.847894C11.7946 0.863596 7.86914 0.856268 3.94475 0.857315C3.22038 0.857315 2.95659 1.12634 2.9545 1.87793C2.95031 4.19865 2.95345 6.51832 2.95345 8.83903C2.95345 9.11748 2.95345 9.39592 2.95345 9.68483C2.6928 9.81568 2.43634 9.74973 2.14219 9.74764C2.12859 9.60633 2.10346 9.47443 2.10346 9.34254C2.10137 6.79571 2.09404 4.24889 2.1066 1.70102C2.11079 0.881391 2.51066 0.260649 3.27481 0.0596666C3.43916 0.0167485 3.61711 0.00837426 3.78878 0.00837426C7.88798 0.00523391 11.9882 0.00732748 16.0874 0C16.3701 0 16.5742 0.0774619 16.7752 0.280538C18.4961 2.01401 20.2233 3.74015 21.9588 5.45897C22.1494 5.64739 22.2195 5.83791 22.2184 6.10274C22.2122 12.2086 22.2143 18.3145 22.2122 24.4204C22.2122 25.3196 21.5642 25.9853 20.6849 25.9853C15.0323 25.9885 9.3807 25.9759 3.72807 26C2.90844 26.0031 2.12649 25.2023 2.10974 24.4706C2.08462 23.3914 2.10346 22.3122 2.10346 21.1796L2.10242 21.1785ZM17.1824 2.02343C17.1824 2.76141 17.1771 3.45543 17.1834 4.1484C17.1886 4.68121 17.42 4.98583 17.9434 5.01409C18.6803 5.05387 19.4204 5.02456 20.1626 5.02456C19.1723 4.02697 18.2061 3.05451 17.1813 2.02343H17.1824Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M9.0455 14.1367C9.2266 14.1367 9.37943 14.1346 9.53121 14.1367C10.0912 14.144 10.4335 14.368 10.5351 14.9082C10.6356 15.4462 10.6952 16.001 10.3948 16.5212C10.2326 16.8028 10.0064 16.9546 9.69346 16.9766C9.48934 16.9912 9.28312 16.9797 9.08737 16.9797C8.99212 16.5736 8.96909 15.0097 9.04655 14.1367H9.0455Z"
                                  fill="#142137"
                                />
                                <path
                                  d="M4.62549 14.1631C4.9772 14.14 5.30589 14.0343 5.50583 14.3672C5.62412 14.564 5.62098 14.7974 5.49013 15.0036C5.29647 15.3103 5.00861 15.3533 4.6527 15.28C4.57315 14.9262 4.61921 14.5713 4.62444 14.1641L4.62549 14.1631Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            Download PDF
                          </span>
                          <span className="download_btn">
                            <svg
                              width="17"
                              height="14"
                              viewBox="0 0 17 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="transition-all duration-500 ease-out text-primary group-hover:text-white"
                            >
                              <path
                                d="M14.5443 12.4114C14.5443 11.3327 14.5278 10.2833 14.556 9.23474C14.5628 8.98282 14.6494 8.64628 14.8254 8.50914C15.0151 8.3613 15.4217 8.28251 15.6075 8.39048C15.8399 8.52567 16.0656 8.87388 16.0821 9.14331C16.1385 10.0955 16.1045 11.0526 16.1054 12.0087C16.1054 12.3492 16.1103 12.6886 16.1045 13.029C16.0928 13.7255 15.8195 13.9988 15.124 13.9988C12.4191 14.0017 9.71514 13.9997 7.0102 13.9997C5.01822 13.9997 3.02623 14.0007 1.03425 13.9988C0.274608 13.9978 0.00712915 13.7362 0.00518385 12.9794C0.00129325 11.716 -0.00551529 10.4525 0.0081018 9.18999C0.015883 8.49552 0.617953 8.05491 1.12665 8.39631C1.34841 8.54513 1.5303 8.90987 1.54489 9.1861C1.59547 10.1549 1.56434 11.1285 1.56629 12.1002C1.56629 12.1945 1.57796 12.2879 1.58574 12.4104C5.89555 12.4114 10.1801 12.4114 14.5443 12.4114Z"
                                fill="currentColor"
                              />
                              <path
                                d="M7.27266 7.89891C7.27266 5.55385 7.27266 3.35177 7.27266 1.14872C7.27266 0.987264 7.25515 0.820941 7.28531 0.664345C7.36604 0.247078 7.62768 -0.00289268 8.05759 2.52679e-05C8.4875 0.00391586 8.74817 0.25875 8.8182 0.676016C8.85224 0.881245 8.83085 1.0962 8.83085 1.30629C8.83182 3.45779 8.83085 5.61027 8.83085 7.85222C8.98939 7.7073 9.09443 7.62268 9.18586 7.52541C9.95134 6.7113 10.7129 5.89233 11.4803 5.0792C11.9326 4.59968 12.3742 4.53938 12.7399 4.8944C13.092 5.2358 13.059 5.67349 12.63 6.13258C11.315 7.54195 9.99705 8.94937 8.6762 10.3539C8.27352 10.7818 7.82221 10.777 7.41661 10.3451C6.09965 8.94062 4.77587 7.54 3.47447 6.11702C3.2955 5.92151 3.13112 5.59665 3.16322 5.35932C3.19434 5.12686 3.45501 4.79421 3.66705 4.74947C3.92675 4.69403 4.32359 4.80783 4.51715 4.99555C5.32736 5.78729 6.08311 6.63544 6.85831 7.46219C6.96628 7.57599 7.07521 7.68979 7.27266 7.89891Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </Link>
                      </div>
                    </FadeUpAnimationProvider>
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

export default Details;
