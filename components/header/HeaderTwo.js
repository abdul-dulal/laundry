"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/logo/logo-white.png";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "./Drawer";
const HeaderTwo = () => {
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      class={` w-full bg-[#0b103e]   z-[999] py-[18px] ${
        isSticky ? "fixed top-0 left-0    is_sticky mt-0" : " relative  "
      }`}
    >
      <div class="container">
        <div class="header-wrap flex items-center justify-between">
          <div class="logo">
            <a class="primary-logo" href="index.html">
              <Image src={logo} alt="logo" />
            </a>
            {/* <a class="sticky-logo" href="index.html">
                <img src="./images/logo/logo.png" alt="logo" />
              </a> */}
          </div>
          <div class="main-menu-wrap xl:block hidden">
            <div class="main-menu">
              <nav id="mobile-menu">
                <ul className=" m-0 p-0 relative">
                  <li class="group has-dropdown menu-thumb inline-block p-0 relative">
                    <Link
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]  text-[18px] font-medium"
                      href="/"
                    >
                      Home
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul class="submenu mt-[24px] absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/"
                        >
                          Home 01
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/HomeTwo"
                        >
                          Home 02
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li class="group has-dropdown inline-block p-0 relative">
                    <Link
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]   text-[18px] font-medium"
                      href="/About"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex  items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]   text-[18px] font-medium"
                      href="/Service"
                    >
                      Service
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul class="submenu mt-[24px] absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Service"
                        >
                          Service
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Service-details"
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]   text-[18px] font-medium"
                      href=""
                    >
                      Pages
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul class="submenu mt-[24px] absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Faq"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Price"
                        >
                          Price Packages
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="*"
                        >
                          Page Not Found
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]   text-[18px] font-medium"
                      href="/Blog"
                    >
                      Blog
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul class="submenu mt-[24px] absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0  text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Blog"
                        >
                          Blog
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Blog-details"
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-white group-hover:text-[#ffc107]   text-[18px] font-medium"
                      href="/Contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header-right xl:block hidden items-center ">
            <div className=" flex gap-[34px] items-center">
              <div className=" flex gap-[14px] items-center">
                <Link
                  href="/"
                  className="grid place-content-center size-11 border border-white/15 rounded-full"
                >
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
                </Link>
                <div>
                  <span className="inline text-[15px] font-medium leading-[24px] text-white">
                    Hotline: <br />
                    <span className="text-[15px] font-semibold leading-[24px] text-white">
                      (234) 987 - 354 - 3670
                    </span>
                  </span>
                </div>
              </div>
              <div className="2xl:block hidden group relative">
                <Link
                  href="/"
                  className="text-[15px] font-medium leading-[100%] text-primary  pl-[30px] pr-[50px] py-[17px] bg-white rounded-full"
                >
                  Schedule a Pickup
                </Link>
                <button className="grid place-content-center absolute -top-1 right-[10px]  size-[34px] rounded-full bg-primary">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white transition-all duration-500 group-hover:rotate-[45deg]"
                  >
                    <path
                      d="M4.90405 13.5966L13.3893 5.11136"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.0962 12.8892V4.40397H5.61091"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <Drawer bgColor="white" />
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
