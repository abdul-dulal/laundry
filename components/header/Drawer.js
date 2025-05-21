"use client";
import { useState } from "react";
import Link from "next/link";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import logo from "@/public/img/logo/logo.png";

const Drawer = ({ bgColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [home, setHome] = useState(true);
  const [service, setService] = useState(true);
  const [page, setPage] = useState(true);
  const [blog, setBlog] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative xl:hidden block">
      <button
        className="relative z-[99] w-[30px] h-[20px] flex  flex-col justify-between overflow-hidden"
        onClick={toggleDrawer}
      >
        <span className={`w-[80px] h-[2px] bg-${bgColor}`}></span>
        <span className={`w-[80px] h-[2px] bg-${bgColor}`}></span>
        <span className={`w-[80px] h-[2px] bg-${bgColor}`}></span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen lg:w-[500px] md:w-[420px] w-[300px] bg-white  text-primary transform z-[99999] overflow-y-scroll overflow-x-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="px-[35px] pt-10 pb-2 flex-shrink-0">
            <div className="flex justify-between items-center pb-5 mb-[35px]">
              <Link href="/">
                <Image
                  src={logo}
                  priority={true}
                  className="w-[160px]"
                  alt="Logo"
                />
              </Link>
              <button
                className="text-xl transition-all duration-500 hover:rotate-[118deg]"
                onClick={toggleDrawer}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
          </div>

          <div className="px-[35px] pb-5">
            <ul className="relative">
              <li className="relative  ">
                <Link
                  href="javascript:void(0)"
                  className="flex justify-between items-center border-b  border-solid border-[#00000036] pb-5"
                >
                  Home
                  <span
                    onClick={() => setHome(!home)}
                    className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                      home ? "" : "bg-primary text-white"
                    }`}
                  >
                    {home ? "+" : "-"}
                  </span>
                </Link>
                <ul
                  className={`transition-all duration-500 bg-transparent  ease-in-out overflow-hidden px-3   ${
                    home ? "max-h-0" : "max-h-40"
                  } `}
                >
                  <li>
                    <Link
                      href="/homeOne"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036]  flex items-center justify-between`}
                    >
                      Home 01
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/homeTwo"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Home 02
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mt-3 border-b  border-solid border-[#00000036] pb-5">
                <Link href="/about">About</Link>
              </li>
              <li className="relative  mt-3">
                <Link
                  href="javascript:void(0)"
                  className="flex justify-between items-center border-b  border-solid border-[#00000036] pb-5"
                >
                  Service
                  <span
                    onClick={() => setService(!service)}
                    className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                      service ? "" : "bg-primary text-white"
                    }`}
                  >
                    {service ? "+" : "-"}
                  </span>
                </Link>
                <ul
                  className={`transition-all duration-500 bg-transparent  ease-in-out overflow-hidden px-3   ${
                    service ? "max-h-0" : "max-h-40"
                  } `}
                >
                  <li>
                    <Link
                      href="/Services"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036]  flex items-center justify-between`}
                    >
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Service-details"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Service Details
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative  mt-3">
                <Link
                  href="javascript:void(0)"
                  className="flex justify-between items-center border-b  border-solid border-[#00000036] pb-5"
                >
                  Pages
                  <span
                    onClick={() => setPage(!page)}
                    className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                      page ? "" : "bg-primary text-white"
                    }`}
                  >
                    {page ? "+" : "-"}
                  </span>
                </Link>
                <ul
                  className={`transition-all duration-500 bg-transparent  ease-in-out overflow-hidden px-3   ${
                    page ? "max-h-0" : "max-h-[260px]"
                  } `}
                >
                  <li>
                    <Link
                      href="/Team"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036]  flex items-center justify-between`}
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Team-details"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Team Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Faq"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Price"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Price Packages
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/*"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Page Not Found
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="relative  mt-3">
                <Link
                  href="javascript:void(0)"
                  className="flex justify-between items-center border-b  border-solid border-[#00000036] pb-5"
                >
                  Blog
                  <span
                    onClick={() => setBlog(!blog)}
                    className={`text-center h-[35px] w-[35px] border border-solid border-[rgba(255,255,255,0.079)] rounded-[3px] font-normal text-2xl duration-500 ${
                      blog ? "" : "bg-primary text-white"
                    }`}
                  >
                    {blog ? "+" : "-"}
                  </span>
                </Link>
                <ul
                  className={`transition-all duration-500 bg-transparent  ease-in-out overflow-hidden px-3   ${
                    blog ? "max-h-0" : "max-h-40"
                  } `}
                >
                  <li>
                    <Link
                      href="/Blog"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036]  flex items-center justify-between`}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/Blog-details"
                      className={`capitalize text-[16px] leading-[50px] font-normal text-primary  border-b  border-solid border-[#00000036] flex items-center justify-between`}
                    >
                      Blog Details
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mt-3 border-b  border-solid border-[#00000036] pb-5">
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>

            <div className="mt-10">
              <span className="md:text-xl text-base text-primary font-bold">
                Subscribe & Follow
              </span>
              <ul className="my-5 flex gap-3">
                <li className="">
                  <Link
                    href="https://www.facebook.com/"
                    className="size-9 bg-primary rounded-full flex items-center justify-center  "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 11 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.13422 20V10.8771H0V7.32167H3.13422V4.69968C3.13422 1.65687 5.03151 0 7.80263 0C9.13003 0 10.2709 0.0968046 10.6033 0.140073V3.31999L8.6814 3.32084C7.17431 3.32084 6.8825 4.02233 6.8825 5.05171V7.32167H10.4768L10.0088 10.8771H6.8825V20H3.13422Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="size-9 bg-primary rounded-full flex items-center justify-center text-primary "
                    href="https://x.com/i/flow/login?mx=2"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_17_264)">
                        <path
                          d="M15.7508 0.960938H18.8175L12.1175 8.61927L20 19.0384H13.8283L8.995 12.7184L3.46333 19.0384H0.395L7.56167 10.8468L0 0.961771H6.32833L10.6975 6.73844L15.7508 0.960938ZM14.675 17.2034H16.3742L5.405 2.7001H3.58167L14.675 17.2034Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_17_265">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/"
                    className="size-9 bg-primary rounded-full flex items-center justify-center text-primary "
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.8118 1.80182C13.5375 1.80182 13.8602 1.81182 14.937 1.85991C15.5844 1.86767 16.2256 1.98412 16.8329 2.20418C17.2732 2.37053 17.6731 2.62535 18.0068 2.95224C18.3406 3.27913 18.6007 3.67085 18.7705 4.10219C18.9952 4.69697 19.1141 5.32509 19.122 5.95924C19.1706 7.01395 19.1813 7.33013 19.1813 10C19.1813 12.6699 19.1711 12.986 19.122 14.0408C19.1141 14.6749 18.9952 15.303 18.7705 15.8978C18.6007 16.3291 18.3406 16.7209 18.0068 17.0478C17.6731 17.3747 17.2732 17.6295 16.8329 17.7958C16.2256 18.0159 15.5844 18.1323 14.937 18.1401C13.8607 18.1877 13.5379 18.1982 10.8118 18.1982C8.08562 18.1982 7.76284 18.1882 6.68657 18.1401C6.03917 18.1323 5.39792 18.0159 4.79071 17.7958C4.35036 17.6295 3.95045 17.3747 3.61673 17.0478C3.283 16.7209 3.02285 16.3291 2.85303 15.8978C2.62837 15.303 2.50949 14.6749 2.50157 14.0408C2.45296 12.986 2.44226 12.6699 2.44226 10C2.44226 7.33013 2.45247 7.01395 2.50157 5.95924C2.50949 5.32509 2.62837 4.69697 2.85303 4.10219C3.02285 3.67085 3.283 3.27913 3.61673 2.95224C3.95045 2.62535 4.35036 2.37053 4.79071 2.20418C5.39792 1.98412 6.03917 1.86767 6.68657 1.85991C7.76333 1.81229 8.08611 1.80182 10.8118 1.80182ZM10.8118 0C8.0409 0 7.69187 0.011428 6.60296 0.0599971C5.75568 0.0765049 4.91739 0.233646 4.12375 0.524737C3.44294 0.775994 2.82629 1.16974 2.31684 1.67849C1.79699 2.17769 1.39467 2.78206 1.138 3.44936C0.840829 4.22675 0.680403 5.04788 0.66355 5.87782C0.614938 6.94348 0.603271 7.28537 0.603271 9.99952C0.603271 12.7137 0.614938 13.0556 0.664523 14.1222C0.681375 14.9521 0.841801 15.7733 1.13898 16.5506C1.39536 17.2179 1.79734 17.8222 2.31684 18.3215C2.82657 18.8304 3.44356 19.2241 4.12472 19.4753C4.91836 19.7664 5.75665 19.9235 6.60393 19.94C7.69284 19.9876 8.04041 20 10.8128 20C13.5851 20 13.9327 19.9886 15.0216 19.94C15.8689 19.9235 16.7071 19.7664 17.5008 19.4753C18.1787 19.2179 18.7943 18.8247 19.3083 18.3209C19.8223 17.8172 20.2232 17.2139 20.4856 16.5497C20.7827 15.7723 20.9432 14.9512 20.96 14.1212C21.0086 13.0556 21.0203 12.7137 21.0203 9.99952C21.0203 7.28537 21.0086 6.94348 20.959 5.87686C20.9422 5.04693 20.7818 4.2258 20.4846 3.44841C20.2282 2.78119 19.8262 2.17684 19.3067 1.67754C18.797 1.16867 18.18 0.774919 17.4988 0.523785C16.7052 0.232694 15.8669 0.0755526 15.0196 0.0590448C13.9317 0.0114281 13.5827 0 10.8118 0Z"
                        fill="white"
                      />
                      <path
                        d="M10.8107 4.86426C9.77384 4.86426 8.76029 5.16542 7.8982 5.72966C7.03611 6.2939 6.36419 7.09588 5.96741 8.03417C5.57063 8.97247 5.46682 10.0049 5.66909 11.001C5.87137 11.9971 6.37065 12.9121 7.1038 13.6302C7.83695 14.3484 8.77104 14.8374 9.78795 15.0356C10.8049 15.2337 11.8589 15.132 12.8168 14.7434C13.7747 14.3547 14.5935 13.6965 15.1695 12.8521C15.7455 12.0077 16.053 11.0149 16.053 9.99925C16.053 8.63737 15.5007 7.33126 14.5175 6.36826C13.5344 5.40527 12.201 4.86426 10.8107 4.86426ZM10.8107 13.3324C10.1377 13.3324 9.47975 13.1369 8.92016 12.7707C8.36057 12.4044 7.92442 11.8839 7.66686 11.2748C7.40931 10.6657 7.34192 9.99555 7.47322 9.34898C7.60452 8.70241 7.92861 8.10849 8.40451 7.64234C8.8804 7.17619 9.48673 6.85873 10.1468 6.73012C10.8069 6.60151 11.4911 6.66752 12.1129 6.9198C12.7347 7.17208 13.2661 7.5993 13.64 8.14744C14.0139 8.69558 14.2135 9.34001 14.2135 9.99925C14.2135 10.8833 13.855 11.7311 13.2168 12.3562C12.5787 12.9813 11.7132 13.3324 10.8107 13.3324Z"
                        fill="white"
                      />
                      <path
                        d="M16.2609 5.86229C16.9375 5.86229 17.4859 5.32506 17.4859 4.66235C17.4859 3.99963 16.9375 3.4624 16.2609 3.4624C15.5843 3.4624 15.0359 3.99963 15.0359 4.66235C15.0359 5.32506 15.5843 5.86229 16.2609 5.86229Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    className="size-9 bg-primary rounded-full flex items-center justify-center text-white "
                    href="https://github.com"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#151515] bg-opacity-80 cursor-pointer z-[9999]"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Drawer;
