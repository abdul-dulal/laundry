"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/public/img/logo/logo.png";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "./Drawer";
const HeaderOne = () => {
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
      class={`header-1 w-full z-[999] py-[18px] ${
        isSticky
          ? "fixed top-0 left-0  bg-white  is_sticky mt-0"
          : "bg-transparent relative  "
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
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary  text-[18px] font-medium"
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
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
                      href="/About"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex  items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
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
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
                      href="/Team"
                    >
                      Team
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
                          href="/Team"
                        >
                          Team
                        </Link>
                      </li>
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Team-details"
                        >
                          Team Details
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
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
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
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
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium"
                      href="/Contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="header-right xxl:flex hidden items-center ">
            <div class="btn_wrapper ">
              <Link
                className=" font-medium text-[15px] text-[#142137] border border-[rgba(20,33,55,0.14)] w-[220px] h-[44px] leading-[44px] block text-center"
                href="/Contact"
              >
                Schedule a Pickup
                <span>
                  <i class="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <Drawer />
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
