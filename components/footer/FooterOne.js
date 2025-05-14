"use client";
import React from "react";
import logo from "@/public/img/logo/logo-white.png";
import Link from "next/link";
import Image from "next/image";
const FooterOne = () => {
  const hanldeSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="bg-primary text-white pt-[127px]">
      <div className="container">
        <div className="grid grid-cols-12 2xl:gap-[87px] xl:gap-14 sm:gap-10 justify-between">
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
            <Link className="" href="/">
              <Image src={logo} alt="Laundry logo" />
            </Link>
            <p className="text-[16px] font-normal text-white/70 leading-[26px]  mt-[30px] mb-[44px]">
              Fusce non nulla magna purus fermentum commodo nulla ornare ligula
              Suspendisse porttitor in eu purus massa.
            </p>
            <div className="">
              <div className="flex gap-[14px]">
                <div className="grid place-content-center size-11 border-[1.5px] border-white/10 rounded-full">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.46416 3.24859C1.76384 2.75144 3.41596 0.946726 4.59327 1.00121C4.94549 1.03137 5.25685 1.24346 5.50982 1.49057H5.5108C6.09069 2.05874 7.7545 4.203 7.8479 4.65442C8.0785 5.76158 6.75816 6.39979 7.16195 7.5157C8.19137 10.0345 9.96511 11.8081 12.4851 12.8365C13.6002 13.2412 14.2385 11.9219 15.3457 12.1515C15.7972 12.2459 17.9426 13.9086 18.5099 14.4894V14.4894C18.756 14.7414 18.9701 15.0537 18.9993 15.4059C19.043 16.6463 17.1263 18.3207 16.7526 18.5347C15.8711 19.1661 14.7211 19.1544 13.319 18.5026C9.40662 16.8749 3.15423 10.7408 1.49627 6.68096C0.861882 5.2868 0.819071 4.12906 1.46416 3.24859Z"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.4287 1.23828C15.9359 1.62765 18.705 4.39397 19.0991 7.90018"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.4287 4.5918C14.1056 4.91864 15.4158 6.22885 15.7426 7.90569"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div>
                    <span className="text-[15px] font-medium leading-[24px] text-secondary block">
                      Hotline:
                    </span>

                    <Link
                      href="tel:(234)9873643870"
                      className="text-[16px] font-semibold text-white -tracking-[2%] leading-[24px]"
                    >
                      (234) 987 - 364 - 3870
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex gap-[14px] mt-6">
                <div className="grid place-content-center size-11 border-[1.5px] border-white/10 rounded-full">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.70588C1 2.41176 2.88235 1 5.70588 1H15.1176C17.9412 1 19.8235 2.41176 19.8235 5.70588V12.2941C19.8235 15.5882 17.9412 17 15.1176 17H5.70588"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.117 6.17578L12.1711 8.52844C11.2017 9.30011 9.61114 9.30011 8.64173 8.52844L5.70526 6.17578"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 13.2354H6.64706"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 9.46973H3.82353"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <div>
                    <span className="text-[15px] font-medium leading-[24px] text-secondary block">
                      Email:
                    </span>

                    <Link
                      href="tel:(234)9873643870"
                      className="text-[16px] font-semibold text-white -tracking-[2%] leading-[24px]"
                    >
                      example@gmail.com
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
            <h3 className="text-[20px] font-semibold text-white leading-[26px] -tracking-[2%] sm:mb-11 mb-4 sm:mt-0 mt-10">
              Our Services
            </h3>
            <ul className="text-[16px] font-medium leading-[44px] text-white/70">
              <li className="">
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Laundry Service
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Dry Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Ironing
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Alteration & Repairs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Dry Cleaners
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Shirt Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
            <h3 className="text-[20px] font-semibold text-white leading-[26px] -tracking-[2%] sm:mb-11 mb-4 sm:mt-0 mt-10">
              Quick Links
            </h3>
            <ul className="text-[16px] font-medium leading-[44px] text-white/70">
              <li>
                <Link
                  href="/About"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/Service"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-2 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
            <h3 className="text-[20px] font-semibold text-white leading-[26px] -tracking-[2%] sm:mb-11 mb-4 sm:mt-0 mt-10">
              Commercial Services
            </h3>
            <ul className="text-[16px] font-medium leading-[44px] text-white/70">
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Airbnb Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Restaurant Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Workwear Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Cafe Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Hotel Laundry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-all duration-500 hover:ml-[13px]"
                >
                  Gym Laundry
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 - Newsletter */}
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
            <h3 className="text-[20px] font-semibold text-white leading-[26px] -tracking-[2%] sm:mb-11 mb-4 sm:mt-0 mt-10">
              Newsletters
            </h3>

            <p className="text-[16px] font-normal leading-[26px] text-white/70 mb-8">
              Sign up and receive our special offers.
            </p>

            <form onSubmit={hanldeSubmit}>
              <div
                className=" relative backdrop-blur-[10px] rounded overflow-hidden mb-4"
                style={{ boxShadow: "0px 10px 60px 0px #03061133" }}
              >
                <input
                  type="email"
                  placeholder="Enter your Email..."
                  className="w-full  border border-white/15 bg-transparent px-3 h-[50px]  focus:outline-none placeholder:text-[15px] placeholder:font-normal placeholder:text-white/70"
                />
                <button
                  type="submit"
                  className="2xl:absolute 2xl:mt-0 mt-4 right-0 bottom-[2px] bg-secondary px-6 py-[13px] text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className=" flex items-center gap-2 mt-10">
              <Link
                href="/"
                className="relative grid place-content-center size-9 border border-white/15 rounded-full backdrop-blur-[10px] after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11] after:hover:transition-all after:hover:duration-500"
                style={{ boxShadow: "0px 10px 60px 0px #03061133" }}
              >
                <svg
                  width="10"
                  height="17"
                  viewBox="0 0 10 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-all duration-500"
                >
                  <path
                    d="M9.35 0H6.8C5.67283 0 4.59183 0.447767 3.7948 1.2448C2.99777 2.04183 2.55 3.12283 2.55 4.25V6.8H0V10.2H2.55V17H5.95V10.2H8.5L9.35 6.8H5.95V4.25C5.95 4.02457 6.03955 3.80837 6.19896 3.64896C6.35837 3.48955 6.57457 3.4 6.8 3.4H9.35V0Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link
                href="/"
                className="relative grid place-content-center size-9 border border-white/15 rounded-full backdrop-blur-[10px] after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11] after:hover:transition-all after:hover:duration-500"
                style={{ boxShadow: "0px 10px 60px 0px #03061133" }}
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
              <Link
                href="/"
                className="relative grid place-content-center size-9 border border-white/15 rounded-full backdrop-blur-[10px] after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11] after:hover:transition-all after:hover:duration-500"
                style={{ boxShadow: "0px 10px 60px 0px #03061133" }}
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
              <Link
                href="/"
                className="relative grid place-content-center size-9 border border-white/15 rounded-full backdrop-blur-[10px] after:absolute after:top-0 after:left-0 after:bg-secondary after:w-full after:h-full after:opacity-0 after:scale-0  after:transition-all after:rounded-full after:duration-500 after:hover:opacity-100 after:hover:scale-100 after:hover:text-white after:hover:-z-[11] after:hover:transition-all after:hover:duration-500"
                style={{ boxShadow: "0px 10px 60px 0px #03061133" }}
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
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-[117px] pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] font-normal leading-[26px] text-white/70">
            ©2025 Laundre All Rights Reserved
          </p>
          <div className=" my-[35px]">
            <Link href="/" className="text-[16px] font-normal text-white">
              Privacy Policy
            </Link>
            <span className="mx-3">|</span>
            <Link href="/" className="">
              Term of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
