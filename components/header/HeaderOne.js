"use client";
import Image from "next/image";
import logo from "@/public/img/logo/logo.png";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "./Drawer";

const HeaderOne = () => {
  return (
    <header
      className={`w-full z-[999] bg-white sticky top-0 xl:py-0 py-[34px] shadow-lg`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="logo">
            <Link className="primary-logo" href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <div className="xl:block hidden">
            <div className="main-menu">
              <nav>
                <ul className="relative">
                  <li className="inline-block  relative">
                    <Link
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary  text-[18px] font-medium py-[34px]"
                      href="javascript:void(0)"
                    >
                      Home
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul className="absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
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
                  <li className="inline-block p-0 relative">
                    <Link
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium py-[34px]"
                      href="/About"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="group inline-block p-0 relative">
                    <Link
                      className="flex  items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium py-[34px]"
                      href="javascript:void(0)"
                    >
                      Service
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul className="submenu  absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
                      <li className="float-none min-w-[210px] m-0">
                        <Link
                          className="block leading-[120%] px-[20px] py-[10px] text-primary border-b border-[#e3e3e3] ml-0 text-[18px] font-medium transition-all duration-400 ease-in-out  "
                          href="/Services"
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
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium py-[34px]"
                      href="javascript:void(0)"
                    >
                      Pages
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul className="submenu  absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
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
                      className="flex items-center gap-1 px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium py-[34px]"
                      href="javascript:void(0)"
                    >
                      Blog
                      <span>
                        <FontAwesomeIcon
                          className="size-[16px]"
                          icon={faAngleDown}
                        />
                      </span>
                    </Link>
                    <ul className="submenu  absolute left-0 top-full opacity-0 invisible z-[99999] text-left transition-all duration-300 ease-in-out  shadow-[0px_10px_20px_0px_rgba(8,0,42,0.08)] origin-top bg-white scale-y-0">
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
                      className="block px-[24px] capitalize transition-all duration-300 ease-in-out relative text-black group-hover:text-secondary   text-[18px] font-medium py-[34px]"
                      href="/Contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="xxl:flex hidden items-center ">
            <div className="">
              <Link
                className="flex items-center gap-2 justify-center font-medium text-[15px] text-[#142137] border border-[rgba(20,33,55,0.14)] w-[220px] h-[44px] leading-[44px]  text-center"
                href="/Contact"
              >
                Schedule a Pickup
                <span>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 7.00056L13 7.00056"
                      stroke="#142137"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13.0002L14 7.00016L8 1.00016"
                      stroke="#142137"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <Drawer bgColor="primary" />
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
